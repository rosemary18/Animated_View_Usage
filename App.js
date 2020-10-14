/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Animated, PanResponder, TouchableOpacity, Text } from 'react-native';

const App = () => {

  const transformValue = useState(new Animated.ValueXY({x: 0, y: 0}))[0]

  /* const pan = useState(new Animated.ValueXY())[0] */
  const opc = useState(new Animated.Value(0))[0]

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        transformValue.setOffset({
          x: transformValue.x._value,
          y: transformValue.y._value
        });
      },
      onPanResponderMove: (_, gesture) => {
        transformValue.x.setValue(gesture.dx);
        transformValue.y.setValue(gesture.dy)
      },
      onPanResponderRelease: () => {
        /* transformValue.flattenOffset(); */
        transformValue.setOffset({
          x: transformValue.x._value,
          y: transformValue.y._value
        });/* 
        transformValue.x.setValue(0);
        transformValue.y.setValue(0); */
        goBack()
      }
    })
  )[0]

  function AnimTimingDefault(x){
    Animated.timing(x, {
      to: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  function goBack(){
    AnimTimingDefault(transformValue);
  }

  function FadeIn(){
    Animated.timing(opc, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  function FadeOut(){
    Animated.timing(opc, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  function transformLeft(){
    Animated.spring(transformValue, {
      toValue: {x: -100, y: 0},
      /* duration: 500, */
      useNativeDriver: true
    }).start()
  }

  function transformRigth(){
    Animated.spring(transformValue, {
      toValue: {x: 100, y: 0},
      /* duration: 500, */
      useNativeDriver: true
    }).start()
  }

  function transformTop(){
    Animated.spring(transformValue, {
      toValue: {x: 0, y: -100},
      /* duration: 500, */
      useNativeDriver: true
    }).start()
  }

  function transformBottom(){
    Animated.spring(transformValue, {
      toValue: {x: 0, y: 100},
      /* duration: 500, */
      useNativeDriver: true
    }).start()
  }

  function FadeInTop(){
    FadeIn()
    transformTop()
  }

  function FadeInRigth(){
    FadeIn()
    transformRigth()
  }

  function FadeInLeft(){
    FadeIn()
    transformLeft()
  }

  function FadeInBottom(){
    FadeIn()
    transformBottom()
  }

  function FadeOutTop(){
    FadeOut()
    transformTop()
  }

  function FadeOutRigth(){
    FadeOut()
    transformRigth()
  }

  function FadeOutLeft(){
    FadeOut()
    transformLeft()
  }

  function FadeOutBottom(){
    FadeOut()
    transformBottom()
  }

  function touchOpacityEffect(){
    FadeOut();
    setTimeout(() => FadeIn(), 300)
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View 
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          elevation: 25,
          opacity: opc,
          backgroundColor: '#FFF',
          transform: [
            {
              translateX: transformValue.x
            },
            {
              translateY: transformValue.y
            }
          ]
        }}
       /* transformValue.getLayout() */
        /* {...panResponder.panHandlers} */
      />
      <View style={{flexDirection: 'row', marginTop: 104}}>
        <TouchableOpacity onPress={FadeIn} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4, }}>
          <Text style={{color: '#FFFFFF'}}>Fade In Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4, }}>
          <Text style={{color: '#FFFFFF'}}>Go back to start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={FadeOut} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>Fade Out Circle</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={transformRigth} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>Transform Rigth</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={transformLeft} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>Transform Left</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={transformTop} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>Transform top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={transformBottom} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>Transform Bottom</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={FadeInTop} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeIn to Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={FadeInBottom} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeIn to Bottom</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={FadeInRigth} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeIn to Rigth</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={FadeInLeft} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeIn to Left</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={FadeOutTop} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeOut to Top</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={FadeOutBottom} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeOut to Bottom</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={FadeOutRigth} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeOut to Rigth</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={FadeOutLeft} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>FadeOut to Left</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={touchOpacityEffect} style={{padding: 8, backgroundColor: 'grey', borderRadius: 4, margin: 4}}>
          <Text style={{color: '#FFFFFF'}}>Touchable opacity effect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;
