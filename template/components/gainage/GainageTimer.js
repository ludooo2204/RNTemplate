import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions';
import deleteFromDatabase from '../../Services/deleteTable';
import ReadFromDatabase from '../../Services/ReadFromDatabase';
import WriteToDatabase from '../../Services/WriteToDatabase';

const GainageTimer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const counter = useSelector(state => state.counter)
  const gainage = useSelector(state => state.gainage)

  const dispatch = useDispatch();

  const user = { name: "Rei" }

  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isRunning && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, elapsedTime]);

  const handleStartPress = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const handleStopPress = () => {
    setIsRunning(false);
    const tes = new SeanceGainage(elapsedTime);
  };
  const addStore = (time) => {
    dispatch({ type: 'ADD_GAINAGE_SESSION', payload: time });

  };

  const handleResetPress = () => {
    setStartTime(null);
    setElapsedTime(0);
  };
  const handleValidate = () => {
    WriteToDatabase(elapsedTime)
  };
  const handleDeleteDatabase = () => {
    deleteFromDatabase()
  };
  return (
    <View>
      <Button title="add to store" onPress={() => addStore(elapsedTime)} />
      <Button title="lire data" onPress={ReadFromDatabase} />
      <Button title="effacer datas" onPress={handleDeleteDatabase} />
      <Button title="increment" onPress={() => dispatch(allActions.counterActions.increment())} />

      <Text testID='timer'>{elapsedTime}ms</Text>
      <Text>{counter}</Text>
      {!isRunning && <Button title="Start" onPress={handleStartPress} />}
      {isRunning && <Button title="Stop" onPress={handleStopPress} />}
      {!isRunning && elapsedTime !== 0 && (
        <Button title="Reset" onPress={handleResetPress} />
      )}
      {!isRunning && elapsedTime !== 0 && (
        <Button title="Valider la session ?" onPress={handleValidate} />
      )}
    </View>
  );
};

class SeanceGainage {
  constructor(duration) {
    this.date = new Date();
    this.duration = duration;
  }
}

export default GainageTimer;
