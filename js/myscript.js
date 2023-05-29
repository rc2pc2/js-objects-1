const studentessa = {
   nome: 'Ginetta',
   cognome: 'Gini',
   'anno-di-nascita' : 1990,
   "corso" : 'Informatica',
};

// ? per ogni chiave chiamata chiave esistente nell'oggetto letterale studentessa
for (const chiave in studentessa) {
   console.log(chiave, studentessa[chiave]);
}
