import React, { useState } from 'react';
import { Button, Text, View, Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function AppBar() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', width: width, marginBottom: height*0.3512, borderRadius: 5 }}>
            <TouchableHighlight underlayColor="royalblue" onPress={()=>Actions.MainPage()} style={{ height: height * 0.06, marginBottom: 5, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', width: width }}>
                <Text style={{ color: 'whitesmoke' }}>BACK LIST</Text>
            </TouchableHighlight>
        </View>
    );
}

export default AppBar;