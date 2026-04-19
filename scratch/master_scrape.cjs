const fs = require('fs');
const https = require('https');

async function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function parsePage(html) {
    const projects = [];
    const galleryMatches = html.split(/et_pb_gallery_\d+/);
    galleryMatches.shift();

    galleryMatches.forEach(chunk => {
        const urls = [...chunk.matchAll(/href="(https:\/\/www\.inrestsro\.sk\/wp-content\/uploads\/[^"]+\.(jpg|jpeg|png))"/g)].map(m => m[1]);
        const textMatch = chunk.match(/et_pb_text_inner">([^<]+)<\/div>/);
        const title = textMatch ? textMatch[1].replace(/&#8211;/g, '–').trim() : "Project";
        
        if (urls.length > 0) {
            projects.push({ title, gallery: [...new Set(urls)] });
        }
    });
    return projects;
}

async function run() {
    const urls = [
        ["hydroizolacie", "https://www.inrestsro.sk/referencie/referencie-hydroizolacie"],
        ["oplastenia", "https://www.inrestsro.sk/referencie/referencie-oplastenia-budov"],
        ["svetliky", "https://www.inrestsro.sk/referencie/referencie-svetliky"],
        ["rekonstrukcie", "https://www.inrestsro.sk/referencie/referencie-rekonstrukcie-interierov-a-exterierov"]
    ];

    const results = {};
    for (const [key, url] of urls) {
        console.log(`Fetching ${url}...`);
        const html = await fetchHtml(url);
        results[key] = parsePage(html);
    }

    fs.writeFileSync('/Users/alexanderhidveghy/Documents/inrest/scratch/exhaustive_scrape.json', JSON.stringify(results, null, 2));
    console.log("Done!");
}

run();
