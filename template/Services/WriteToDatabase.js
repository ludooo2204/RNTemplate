import { openDatabase } from 'react-native-sqlite-storage';
export default WriteToDatabase = (duration) => {
    console.log("write")
    var db = openDatabase({ name: 'FitnessDatabase.db' });


    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO session_gainage (date,duration, user) VALUES (?, ? ,?)',
            [new Date().toISOString(), duration, 'ludo'],
            (success, tt) => console.log('Success inserting row in gainage database'),
            (error) => console.log('Error inserting row in gainage database: ', error)
        );
    });


}

/*Voici un exemple de comment vous pourriez modifier la fonction WriteToDatabase pour accepter des paramètres pour le nom de la table, les valeurs de colonne et les noms de colonne :
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
import { openDatabase } from 'react-native-sqlite-storage';

export default function WriteToDatabase(nomTable, valeursColonnes, nomsColonnes) {
    console.log("ecriture");
    var db = openDatabase({ name: 'FitnessDatabase.db' });

    var marqueurs = nomsColonnes.map(() => '?').join(', ');
    var sql = `INSERT INTO ${nomTable} (${nomsColonnes.join(', ')}) VALUES (${marqueurs})`;

    db.transaction((tx) => {
        tx.executeSql(
            sql,
            valeursColonnes,
            (success, tt) => console.log(`Succès insertion ligne dans la base de données ${nomTable}`),
            (error) => console.log(`Erreur insertion ligne dans la base de données ${nomTable} : `, error)
        );
    });
}
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

Cette fonction prendra 3 paramètres en entrée,

nomTable est une chaîne qui représente le nom de la table où les données seront insérées.
valeursColonnes est un tableau de valeurs qui correspondent aux colonnes de la table.
nomsColonnes est un tableau de noms qui correspondent aux colonnes de la table.
Vous pouvez ensuite appeler la fonction de cette manière :

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

WriteToDatabase('session_gainage', ['20220929- AZ  AZ  AZ', 25000, 'ludo'], ['date', 'duration', 'user']);
Cela insérera une nouvelle ligne dans la table "session_gainage" avec les valeurs de '20220929- AZ AZ AZ' , 25000 , 'ludo' dans les colonnes 'date' , 'duration' , 'user' respectivement.
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

Veuillez noter que l'ordre des valeurs dans le tableau valeursColonnes doit correspondre à l'ordre des noms de colonne dans le tableau nomsColonnes, et que la table doit déjà exister dans la base de données avant d'appeler cette fonction.

*/