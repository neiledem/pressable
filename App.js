import { StyleSheet, Text, View, Button, TextInput, ImageBackground, ScrollView, FlatList, Pressable} from 'react-native';
import {useState} from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[enteredGoalText, setEnteredGoalText] = useState('');
  const[courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) =>
    [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString},
    ]); 
    setEnteredGoalText('');
  };
  return (

    <ImageBackground 
    source = {require('./assets/bg.jpg')} style = {styles.appContainer}>
    <View style={styles.appContainer}>
      <Text style={styles.park}>Tim Park</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder='Your goal!' 
        onChangeText={goalInputHandler} 
        value={enteredGoalText}/>
        <Pressable hitSlop={{top: 5,
                      left: 5,
                      right: 8,
                      bottom: 5}}
        testOnlyPressed={true}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#FFA500" : "#7F00FF",
            borderWidth: 2,
            borderColor: 'black',
            fontWeight: 'bold',
            borderRadius: 10,
            padding: 10,
          }
        ]}
        onHoverOut={addGoalHandler}>
        <Text style={{ color: 'white'}}>Add goal</Text>
        </Pressable>
      </View>
      <View style={styles.goalListContainer}>
        <Text style={styles.fontF}>🎯List of Goals🎯</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
           return(
            <View style={styles.goalItem}>
            <Text style={styles.goalItem}>- {itemData.item.text}</Text>
            </View>
          );
        }}/> 
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
},
park:{
  fontSize: 60,
  fontWeight: 'bold',
  color: 'black',
},
  textInput:{
    borderWidth: 5,
    borderColor: 'black',
    color: 'black',
    fontWeight: 'bold',
    marginRight: 8,
    padding: 13,
    width: '85%',
    fontSize: 20,
    fontStyle: 'italic',
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 5,
    flex: 1,
    borderBottomColor: '#cccccc',
  },
  fontF:{
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'black',
  },
  goalsContainer:{
    flex: 5,
  },
  BackgroundImage:{
    flex: 1,
    resizeMode: "cover"
  },
  textStyles:{
    color: 'white',
  },
  goalListContainer:{
    flex: 5,
    height: 400,
    borderWidth: 6, 
    borderColor: 'black', 
    borderRadius: 15, 
    padding: 10,
  },
  goalItem:{
    borderColor: 'white',
    borderRadius: 20,
    marginVertical: 5,
    padding: 10,  
    fontSize: 35,
    color: '#000000',
    fontWeight: 'bold',
    },
});
