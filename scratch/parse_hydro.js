const fs = require('fs');
const html = fs.readFileSync('/Users/alexanderhidveghy/Documents/inrest/scratch/hydro.html', 'utf8');

const projects = [];
// Find groups of galleries and their texts
// In Divi, it's often a row with a gallery column and a text column
// or a gallery module followed by a text module.

const galleryMatches = html.split(/et_pb_gallery_\d+/);
galleryMatches.shift(); // First one is before any gallery

galleryMatches.forEach(chunk => {
    const urls = [...chunk.matchAll(/href="(https:\/\/www\.inrestsro\.sk\/wp-content\/uploads\/[^"]+\.(jpg|jpeg|png))"/g)].map(m => m[1]);
    const textMatch = chunk.match(/et_pb_text_inner">([^<]+)<\/div>/);
    const title = textMatch ? textMatch[1] : "Project";
    
    if (urls.length > 0) {
        projects.push({ title, gallery: [...new Set(urls)] });
    }
});

console.log(JSON.stringify(projects, null, 2));
