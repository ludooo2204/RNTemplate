import { openDatabase } from 'react-native-sqlite-storage';
export default databaseAccess = () => {
    var db = openDatabase({ name: 'FitnessDatabase.db' });


    console.log("db")
    console.log(db)

    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
                console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                        []
                    );
                }
            }
        );
    });

    db.transaction(function (tx) {
        tx.executeSql(
            'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
            ["ludo", 3, "47 rue marcel leideck"],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                    console.log(
                        'Success',
                        'You are Registered Successfully'
                    );
                } else console.log('Registration Failed');
            }
        );
    });
}