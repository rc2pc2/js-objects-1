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

const studenti = [
   {
      nome: 'Ginetta',
      cognome: 'Gini',
      'anno-di-nascita' : 1990,
      "corso" : 'Informatica',
   },

   {
      nome: 'Gino',
      cognome: 'Rossi',
      'anno-di-nascita' : 1995,
      "corso" : 'Matemagica',
   },

   {
      nome: 'Genoveffina',
      cognome: 'Lorenzetti',
      'anno-di-nascita' : 1988,
      "corso" : 'Matemagica',
   },

   {
      nome: 'Gingirello',
      cognome: 'Del Pero',
      'anno-di-nascita' : 1977,
      "corso" : 'Filosofia',
   }
];

const nuovaStudentessa = {
   nome: 'Mimma',
   cognome: 'Ninni',
   'anno-di-nascita':  1966,
   corso: 'Psicopedalogia'
};

studenti.push(nuovaStudentessa);

for (let index = 0; index < studenti.length; index++) {
   const studente = studenti[index];

   for (chiave in studente) {
      console.log(chiave, ':', studente[chiave]);
   }

   console.log('----')

}