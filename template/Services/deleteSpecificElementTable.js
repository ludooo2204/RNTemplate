import { openDatabase } from 'react-native-sqlite-storage';
export default deleteElement = (element) => {
    console.log("delete element")
    console.log(element)
    var db = openDatabase({ name: 'FitnessDatabase.db' });
    // db.transaction(tx => {
    //     tx.executeSql(
    //         'DELETE FROM session_gainage WHERE date < "2022-01-01";'
    //     );
    // });
}

