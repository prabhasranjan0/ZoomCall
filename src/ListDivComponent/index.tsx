import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  Layout,
  ZoomInRotate,
  ZoomOutRotate,
} from 'react-native-reanimated';

const ListDivComponent = () => {
  const item = new Array(4).fill(0).map((_, index) => ({id: index}));
  const [elements, setElements] = useState([...item]);
  const [items, setItems] = useState(
    new Array(5).fill(0).map((_, index) => ({id: index})),
  );
  const onHandleAdd = () => {
    let nextId = (elements[elements.length - 1]?.id ?? 0) + 1;
    setElements([...elements, {id: nextId}]);
  };
  const initialMode = useRef<boolean>(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  const onHandleDelete = (id: any) => {
    let data = elements.filter(ele => ele.id !== id);
    setElements([...data]);
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        style={{flexGrow: 1}}
        contentContainerStyle={{paddingVertical: 50}}>
        {elements.map((items, index) => {
          return (
            <Animated.View
              key={items.id}
              entering={
                initialMode.current
                  ? ZoomInRotate.delay(100 * index)
                  : ZoomInRotate
              }
              exiting={ZoomOutRotate}
              layout={Layout.delay(100)}
              onTouchEnd={() => onHandleDelete(items.id)}
              style={styles.boxStyle}
            />
          );
        })}
      </ScrollView>

      <TouchableOpacity style={styles.floatingButton} onPress={onHandleAdd} />
    </SafeAreaView>
  );
};

export default ListDivComponent;

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
  },
  boxStyle: {
    height: 70,
    borderRadius: 10,
    backgroundColor: '#BA90C6',
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  floatingButton: {
    position: 'absolute',
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#00235B',
    bottom: 30,
    right: 30,
    aspectRatio: 1,
  },
});
