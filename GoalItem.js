function GoalItem() {
    return(
        <View style={StyleSheet.goalItems}>
        <Text style={StyleSheet.goalText} text={itemData.item}>- {itemData.item.text}</Text>
        </View>
    );
}

export default GoalItem;
