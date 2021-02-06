import React, { Component, useState } from 'react';
import { Button, Text, View, Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Detail from './Details';
import Icon1 from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { Picker } from '@react-native-picker/picker';
export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapStyle: Detail.map_style,
            theme: Detail.theme
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'blue', flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                        <Icon name="chevron-back-outline" size={45} color="white" onPress={() => Actions.MainPage()} />
                    </View>

                    <View style={{ justifyContent: 'center', flex: 6 }}>
                        <Text style={{ marginLeft: 10, color: 'white', fontSize: 24 }}>Settings</Text>
                    </View>
                </View>
                <View style={{ flex: 10, backgroundColor: Detail.theme==='dark' ? '#393e46':'whitesmoke' }}>
                    <View style={{ backgroundColor: '#bbbbbb', height: height * 0.1, textAlign: 'left', justifyContent: 'flex-end' }}>
                        <Text style={{ color: '#7e7474', fontSize: 18, marginLeft: 5, marginBottom: 5 }}>Map Style</Text>
                        <Icon1 name="caretdown" size={15} color="#7e7474" style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flex: 0.1, flexDirection: 'row' }}>
                        <Picker
                            selectedValue={this.state.mapStyle}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue) => {
                                this.setState({ mapStyle: itemValue })
                            }}
                            style={{ height: 55, width: 100, backgroundColor: 'gray', flex: 1 }}>
                            <Picker.Item label="Terrain" value='terrain' />
                            <Picker.Item label="Satellite" value='satellite' />
                            <Picker.Item label="Standard" value='standard' />
                            <Picker.Item label="Hybrid" value='hybrid' />
                        </Picker>
                    </View>
                    <View style={{ backgroundColor: '#bbbbbb', height: height * 0.1, textAlign: 'left', justifyContent: 'flex-end' }}>
                        <Text style={{ color: '#7e7474', fontSize: 18, marginLeft: 5, marginBottom: 5 }}>Theme</Text>
                        <Icon1 name="caretdown" size={15} color="#7e7474" style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flex: 0.1, flexDirection: 'row' }}>
                        <Picker
                            selectedValue={this.state.theme}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue) => {
                                this.setState({ theme: itemValue })
                            }}
                            style={{ height: 50, width: 100, backgroundColor: 'gray', flex: 1, textDecorationLine: 'underline' }}>
                            <Picker.Item label="Dark Theme" value="dark" />
                            <Picker.Item label="Ligth Theme" value="light" />
                        </Picker>
                    </View>
                    <View style={{ flex: 1 }}>
                    </View>
                    <TouchableHighlight underlayColor="royalblue" style={{ backgroundColor: 'dodgerblue', height: height * 0.08, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }} onPress={() => {
                        Alert.alert(
                            "Save Changes",
                            "Are you sure you want to save?",
                            [
                                {
                                    text: "No",
                                },
                                { text: "Yes", onPress: () => {
                                    Detail.map_style = this.state.mapStyle;
                                    Detail.theme = this.state.theme;
                                    this.state.mapStyle=Detail.map_style;
                                    Actions.Settings()
                                    Alert.alert("Changes saved Successful.")
                                } }
                            ],
                            { cancelable: false }
                        );
                    }}>
                        <Text style={{ color: 'whitesmoke', fontSize: 18 }}>Save Changes</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}