import { openDatabase } from 'react-native-sqlite-storage';
export default initDatabase = () => {
    console.log("init")
    var db = openDatabase({ name: 'FitnessDatabase.db' });



    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function (tx, res) {
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
    db.transaction((tx) => {

        txn.executeSql(
            "SELECT * FROM sqlite_master WHERE type='table' AND name='users'",
            [],
            function (tx, res) {
                console.log('res.row.length');
                console.log(res.row.length)
                if (res.rows.length == 0) {
                    txn.executeSql('DROP TABLE IF EXISTS uses', []);
                    txn.executeSql(
                        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)',

                        [], (success) => console.log('Success creating table'),
                        (error) => console.log('Error creating table: ', error)
                    );
                }
            }
        );

    });

    // Close the database
    db.close((success) => console.log('Success closing database'), (error) => console.log('Error closing database: ', error));
}
