import { openDatabase } from 'react-native-sqlite-storage';
export default ReadFromDatabase = () => {
    console.log("Read")
    var db = openDatabase({ name: 'FitnessDatabase.db' });



    db.transaction(function (txn) {
        txn.executeSql(
            "SELECT * FROM table_user",
            [],
            function (tx, results) {
                console.log('Success reading rows from table_user');
                for (let i = 0; i < results.rows.length; ++i)
                    console.log(results.rows.item(i));
            }
        )
    })
    // Read the rows from the table
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM users',
            [],
            (success, res) => {
                console.log('Success reading rows from user');
                for (let i = 0; i < res.rows.length; i++) {
                    const row = res.rows.item(i);
                    console.log(`Name: ${row.name}, Age: ${row.age}`);
                }
            },
            (error) => console.log('Error reading rows: ', error)
        );
    });
    // Close the database
    // db.close((success) => console.log('Success closing database'), (error) => console.log('Error closing database: ', error));
};

