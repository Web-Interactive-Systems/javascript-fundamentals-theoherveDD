// {
//     "prenom": "Alexandre",
//     "nom": "Dupont",
//     "age": 32,
//     "sexe": "masculin",
//     "date": "2021-09-01T12:00:00Z",
//     "adresse": {
//       "rue": "12 Rue de la Liberté",
//       "ville": "Paris",
//       "codePostal": "75008",
//       "pays": "France"
//     },
//     "email": "alexandre.dupont@example.com",
//     "telephone": "+33 6 12 34 56 78",
//     "profession": "Développeur Web",
//     "centreInterets": [
//       "programmation",
//       "voyages",
//       "lecture",
//       "musique"
//     ],
//     "reseauxSociaux": {
//       "linkedin": "https://www.linkedin.com/in/alexandre-dupont",
//       "twitter": "@alex_tech"
//     },
//     "languesParlees": [
//       "français",
//       "anglais",
//       "espagnol"
//     ],
//     "biographie": "Alexandre est un développeur web passionné par les nouvelles technologies. Il travaille depuis plus de 10 ans dans le domaine et adore partager ses connaissances avec les autres. Dans son temps libre, il aime explorer de nouveaux endroits et lire des romans historiques."
//   }

import jsondata from './data.json';
import { formatDistanceToNow } from "date-fns";

const container = document.getElementById('container');

console.log(jsondata);

jsondata['date'] = formatDistanceToNow(new Date(jsondata.date));
// container.textContent = JSON.stringify(jsondata, null, 2);

const list = document.createElement("ul");


for (const key in jsondata) {
    const item = document.createElement("li");
    item.textContent = `${jsondata[key]}`;
    list.appendChild(item);
}


container.appendChild(list);
    





