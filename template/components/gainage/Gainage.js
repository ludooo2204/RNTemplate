import React, { useEffect, useState } from 'react';
import GainageTimer from './GainageTimer';
import WriteToDatabase from '../../Services/WriteToDatabase'
import { Pressable, Text, View, StyleSheet } from 'react-native';
import ReadFromDatabase from '../../Services/ReadFromDatabase';
const Gainage = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    ReadFromDatabase(e => {
      setData(e)
    });
  }, [])
  console.log('data from state');
  console.log(data)

  return <>
    <GainageTimer />
    {data && data.map(e => {
      return <View style={styles.otherStyle} >
        <Text style={styles.textStyle} >durée de {e.duration / 1000} s</Text>
        <Text style={styles.textStyle} >{new Date(e.date).toLocaleString('fr-FR')}</Text>
      </View>
    })}

  </>;
};

export default Gainage;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: "center"

  },
  otherStyle: {
    marginVertical: 1,
    justifyContent: 'center',
    alignContent: "center",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,

  }
});