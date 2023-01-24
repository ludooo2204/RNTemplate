import { openDatabase } from 'react-native-sqlite-storage';
export default deleteTable = () => {
    console.log("delete")
    var db = openDatabase({ name: 'FitnessDatabase.db' });

    db.transaction(tx => {
        tx.executeSql(
            'DELETE FROM session_gainage;'
            , [],

            (() => console.log("database effacé")),
            ((err) => console.log("error from delete", err)))
    });
}

//  POUR EFFACER DES LIGNES SPECIFIQUES
//  POUR EFFACER DES LIGNES SPECIFIQUES
//  POUR EFFACER DES LIGNES SPECIFIQUES
// db.transaction(tx => {
//     tx.executeSql(
//       'DELETE FROM session_gainage WHERE date < "2022-01-01";'
//     );
//   });