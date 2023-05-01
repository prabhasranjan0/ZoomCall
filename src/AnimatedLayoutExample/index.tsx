import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Task from './Task';

const AnimatedLayoutExample = () => {
  const [taskList, setTaskList] = useState(['No of Task', 'ss']);

  const popTask = () => {
    const data = taskList;
    taskList.pop();
    setTaskList([...data]);
  };
  const pushTask = (names: any) => {
    setTaskList([...taskList, names]);
  };

  return (
    <SafeAreaView style={styles.component}>
      <Text>AnimatedLayoutExample</Text>
      <ScrollView style={[{width: '100%'}]}>
        {taskList &&
          taskList.map((ele: any, index: number) => {
            return <Task key={index} value={ele} />;
          })}
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => pushTask(Math.random().toString())}>
        <Text style={styles.buttonTextStyle}>Push</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle1} onPress={() => popTask()}>
        <Text style={styles.buttonTextStyle}>POP</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AnimatedLayoutExample;

const styles = StyleSheet.create({
  component: {
    flexGrow: 1,
    backgroundColor: '#c0c0c0',
  },
  buttonStyle: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    position: 'absolute',
    bottom: 50,
    width: '96%',
    alignSelf: 'center',
  },
  buttonStyle1: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    position: 'absolute',
    bottom: 120,
    width: '96%',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    fontSize: 25,
    textTransform: 'uppercase',
  },
});
