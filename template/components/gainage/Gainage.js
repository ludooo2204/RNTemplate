import React, { useEffect, useState } from 'react';
import GainageTimer from './GainageTimer';
import WriteToDatabase from '../../Services/WriteToDatabase'
import { Pressable, Text } from 'react-native';
const Gainage = () => {
  useEffect(() => {

    WriteToDatabase();
  }, [])
  return <><GainageTimer />
    <Pressable onPress={WriteToDatabase}><Text>write</Text></Pressable></>;
};

export default Gainage;
