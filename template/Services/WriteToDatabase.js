import { openDatabase } from 'react-native-sqlite-storage';
export default WriteToDatabase = () => {
    console.log("write")
    var db = openDatabase({ name: 'FitnessDatabase.db' });





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

    db.transaction((tx) => {
        tx.executeSql(
            'INSERT INTO users (name, age) VALUES (?, ?)',
            ['Johnny', 25],
            (success, tt) => console.log('Success inserting row'),
            (error) => console.log('Error inserting row: ', error)
        );
    });

    // Close the database
    db.close((success) => console.log('Success closing database'), (error) => console.log('Error closing database: ', error));


}
