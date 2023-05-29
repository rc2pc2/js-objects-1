// const studentessa = {
//    nome: 'Ginetta',
//    cognome: 'Gini',
//    'anno-di-nascita' : 1990,
//    "corso" : 'Informatica',
// };

// // ? per ogni chiave chiamata chiave esistente nell'oggetto letterale studentessa
// for (const chiave in studentessa) {
//    console.log(chiave, studentessa[chiave]);
// }

// const studenti = [
//    {
//       nome: 'Ginetta',
//       cognome: 'Gini',
//       'anno-di-nascita' : 1990,
//       "corso" : 'Informatica',
//    },

//    {
//       nome: 'Gino',
//       cognome: 'Rossi',
//       'anno-di-nascita' : 1995,
//       "corso" : 'Matemagica',
//    },

//    {
//       nome: 'Genoveffina',
//       cognome: 'Lorenzetti',
//       'anno-di-nascita' : 1988,
//       "corso" : 'Matemagica',
//    },

//    {
//       nome: 'Gingirello',
//       cognome: 'Del Pero',
//       'anno-di-nascita' : 1977,
//       "corso" : 'Filosofia',
//    }
// ];

// const nuovaStudentessa = {
//    nome: 'Mimma',
//    cognome: 'Ninni',
//    'anno-di-nascita':  1966,
//    corso: 'Psicopedalogia'
// };

// studenti.push(nuovaStudentessa);

// studenti.push({
//    nome: 'Mimmuzza',
//    cognome: 'Ninnetta',
//    'anno-di-nascita':  1976,
//    corso: 'Architettura'
// });

// for (let index = 0; index < studenti.length; index++) {
//    const studente = studenti[index];

//    for (const chiave in studente) {
//       console.log(chiave, ':', studente[chiave]);
//    }

//    console.log('----');
// }

// const player = {
//    playerId : '',
//    firstName : 'Librona',
//    lastName: 'Giovanna',
//    age: 21,
//    appm : 0,
//    pct3 : 0,
//    blk:0,
//    shots: 0,
// }

// player.appm = getRandomInt(0, 50);
// player.pct3 = getRandomInt(0, 100);
// player.blk = getRandomInt(0, 30);
// player.shots = getRandomInt(20, 100);

// player.playerId = generateRandomString(3, 'QWERTYUIOPASDFGHJKLZXCVBNM') + getRandomInt(0,9) + getRandomInt(0,9) + getRandomInt(0,9);

// console.log(player);

/**
 * Function that generates a random number (not secure) between two values, both included.
 *
 * @param minumNumber the included minium value of the random generated number range.
 * @param maximumNumber the included maximum value of the random generated number range
 * @returns A randomly generated number.
 *
 * @credits to csharptest.net on stackoverflow for the base idea
 * @link https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
function getRandomInt(minumNumber, maximumNumber){
   const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);

   return randomNumber;
}

/**
 * A function that generates a random string from a custom dictionary and length.
 *
 * @param length The length of the random string to generate.
 * @param allowedChars A string of the allowed chars to be randomly picked.
 * @returns A random generated string based on both the allowed chars and length given as arguments
 */
function generateRandomString(length, allowedChars ) {
   let result = '';
   let counter = 0;

   while (counter < length) {
      result += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
      counter++;
   }

   return result;
}

const types = ['red bell', 'green bell', 'yellow bell', 'abenhero', 'jalapeno', 'calabrese' ];


function generatePeppers(quantity, typesList ){

   const generatedPeppers = [];

   for (let index = 0; index < quantity; index++) {
      const newPepper = {
         type: typesList[ getRandomInt(0, typesList.length - 1) ],
         weight: getRandomInt(0, 700),
         length: getRandomInt(0, 100),
      };

      generatedPeppers.push(newPepper);
   }

   return generatedPeppers;
}

const peppers = generatePeppers(10, types);
console.log(peppers);

let sumOfWeights = 0;
for (let index = 0; index < peppers.length; index++) {
   sumOfWeights += peppers[index].weight;
}

console.log (sumOfWeights);