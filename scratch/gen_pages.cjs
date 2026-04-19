const fs = require('fs');
const scrape = JSON.parse(fs.readFileSync('/Users/alexanderhidveghy/Documents/inrest/scratch/exhaustive_scrape.json', 'utf8'));

const pages = [
  {
    slug: "hydroizolacie",
    title: "Hydroizolácie",
    image: "https://www.inrestsro.sk/wp-content/uploads/IMG_20190819_102206.jpg",
    projects: scrape.hydroizolacie,
    items: [
      "Zdroj Martin, 7 800 m2",
      "Doprastav, a.s. Sungwoo Hitech Žilina, Most Ružomberok 11 300 m2",
      "PMP Púchov, 10 000 m2",
      "Raven, a.s. Pov.Bystrica, Hradec Králové, 3 800 m2",
      "Matador Holding a.s., Dubnica nad Váhom, Bratislava, Nitra 20 600 m2",
      "Konštrukta Industry, a.s. 12 800 m2",
      "KMS, s.r.o., Teplička nad Váhom 3 800 m2",
      "SSC Žilina, Bratislava, 3 200 m2",
      "Hastra, s.r.o., Sungoo ADM Hitech Žilina, Most Martin 4 700 m2",
      "Mobis Žilina 2 300 m2",
      "SBD Púchov, 7 600 m2",
      "Mesto Trenčianske Teplice, 6 000 m2",
      "Firesta, s.r.o., Most Horná Štubňa 3 800 m2",
      "PSS a.s. Pov.Bystrica, 14 500 m2",
      "FM Logistik (Poľsko / Sereď) - spolu 36 400 m2",
      "Takenaka Europe GmbH VOLVO Košice 170 500 m2",
      "Takenaka Europe GmbH Jaguar Land Rover Nitra 43 700 m2",
      "KIA Slovakia Teplička nad Váhom 47 600 m2",
      "Mondi SCP Ružomberok, Projekt PM 19 16 500 m2",
      "Projekt: Oakwood – Bytča – 09/2025",
      "Projekt: Winkelmann – Rimavská Sobota – 42 239 m2",
    ]
  },
  {
    slug: "oplastenia-budov",
    title: "Opláštenia budov",
    image: "https://www.inrestsro.sk/wp-content/uploads/IMG_20250411_123632-scaled.jpg",
    projects: scrape.oplastenia,
    items: [
      "DOSA Slovakia, s.r.o., Billa Tomášov 890 m2",
      "VGP Olomouc / Malacky - spolu 21 000 m2",
      "Mista Považská Bystrica 8 500 m2",
      "DI Consulting, s.r.o., Vojus + Objekt č.44 PB 28 700 m2",
      "Takenaka Europe GmbH Jaguar Land Rover Nitra 60 000 m2",
      "Takenaka Europe GmbH VOLVO Košice 38 700 m2",
      "Ingsteel, s.r.o. (Draka, Swedspan) - spolu 12 700 m2",
      "Monolit Slovakia (Continental Púchov) - spolu 11 500 m2",
      "Metrostav SK (Baldovce, Winkelman, Mevis, Doas) - spolu 33 000 m2",
      "Goldbeck, s.r.o. (Panattoni, Dachser, Nová Polhora) - spolu 25 500 m2",
      "Mondi SCP Ružomberok, Projekt PM 19 33 500 m2",
      "Projekt: Volvo – Košice – 25 000 m2",
    ]
  },
  {
    slug: "svetliky",
    title: "Svetlíky",
    image: "https://www.inrestsro.sk/wp-content/uploads/20231010_102047-scaled.jpg",
    projects: scrape.svetliky,
    items: [
      "Bitumex, s.r.o., ZŤS Špeciál Dubnica n.V., 4 400 m2",
      "Mista Plus, s.r.o., PB, 7 800 m2",
      "Doprastav, a.s. Sungwoo Hitech Žilina, 1 900 m2",
      "Konštrukta Industry, a.s. Trenčín, 9 300 m2",
      "Matador Holding, a.s. (Bratislava, Nitra) 9 600 m2",
      "DI Consulting, s.r.o., Vojus PB, 14 800 m2",
      "Continental, s.r.o. Púchov 6 150 m2",
      "Mondi SCP Ružomberok, Projekt PM 19 8 200 m2",
    ]
  },
  {
    slug: "rekonstrukcie",
    title: "Rekonštrukcie",
    image: "https://www.inrestsro.sk/wp-content/uploads/20221003_121544-scaled.jpg",
    projects: scrape.rekonstrukcie,
    items: [
      "Matador Holding, a.s., Bojnická, Bratislava",
      "DI Consulting, s.r.o., Vojus PB",
      "Mista Plus, s.r.o., Púchov",
      "SSC Dolný Kubín",
      "KMS, s.r.o., Teplička n.V.",
      "ČS PHM GAS Púchov",
      "Konštrukta Industry / Tire Tech Trenčín",
    ]
  }
];

console.log("export const realizationPages = " + JSON.stringify(pages, null, 2) + ";");
