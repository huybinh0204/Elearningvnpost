import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NewsStack from './NewsStack';
import PersonalStack from './PersonalStack';
import CourseStack from './CourseStack';
import ExamStack from './ExamStack';
import {Colors} from '../assets';
import string from '../assets/String';
import images from '../assets/Images';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Course"
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: Colors.activeButton,
      }}>
      <Tab.Screen
        name="Course"
        component={CourseStack}
        options={{
          tabBarLabel: string.VNString.course,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeButton
                  : Colors.inActiveButton,
              }}
              source={images.hatEducation}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Exam"
        component={ExamStack}
        options={{
          tabBarLabel: string.VNString.exam,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeButton
                  : Colors.inActiveButton,
              }}
              source={images.checkList}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStack}
        options={{
          tabBarLabel: string.VNString.news,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeButton
                  : Colors.inActiveButton,
              }}
              source={images.news}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personal"
        component={PersonalStack}
        options={{
          tabBarLabel: string.VNString.personal,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 20,
                height: 20,
                tintColor: focused
                  ? Colors.activeButton
                  : Colors.inActiveButton,
              }}
              source={images.user}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
