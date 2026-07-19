import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const coreCourses = [
  'CS 514 Software Engineering',
  'CS 506 Programming for Computing',
  'CS 519 Cloud Computing Overview',
  'CS 533 Computer Architecture',
  'CS 547 Secure Systems and Programs',
  'CS 622 Discrete Math and Algorithms for Computing',
  'DS 510 Artificial Intelligence for Data Science',
  'DS 620 Machine Learning & Deep Learning',
];

const depthCourses = [
  'CS 624 Full-Stack Development - Mobile App',
  'CS 628 Full-Stack Development - Web App',
];

const capstoneCourse = 'CS 687 Computer Science Capstone';

const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.logo}
      />

      <View style={styles.inputSection}>
        <Text style={styles.label}>Which course did you like?</Text>

        <TextInput
          style={styles.input}
          placeholder="ex. CS 624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />

        {favoriteCourse.trim() !== '' && (
          <Text style={styles.favorite}>
            Your favorite course: {favoriteCourse}
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Core Requirements (24 Credits)
        </Text>

        {coreCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>
          Depth of Study (6 Credits)
        </Text>

        {depthCourses.map((course) => (
          <Text key={course} style={styles.course}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Capstone (3 Credits)</Text>
        <Text style={styles.course}>{capstoneCourse}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 50,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 25,
  },

  inputSection: {
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },

  favorite: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },

  section: {
    marginBottom: 30,
  },

  heading: {
    backgroundColor: '#ffff00',
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10,
  },

  course: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 3,
  },
});

export default CoreComponents;