import{View, TextInput, Button, StyleSheet} from 'react-native';
import { useState } from 'react';
function GoalInput(props) {
    const [enteredGoalText, setEnteredText] = useState('');
    
    function textInputHandler(enteredText) {
        setEnteredText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
    }

    return(
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText}/>
        <Button title='Add Goal' color={'#964B00'} onPress={props.onAddGoal}></Button>
    </View>
    );
}
export default GoalInput;
