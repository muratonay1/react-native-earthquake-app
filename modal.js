import React, { useState } from 'react';
import {Text, View, Dimensions, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';
import Detail from './Details';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const renderItem = ({ item }) => (
  <TouchableHighlight style={{ marginTop: 2, height: height * 0.1, backgroundColor: 'yellow' }}>
    <View style={{ flex: 0.3 }}>
      <Text>{item.id}</Text>
      <Text>{item.title}</Text>
    </View>
  </TouchableHighlight>
);
function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'transparent', width: width, marginTop: 400, borderRadius: 5 }}>
      <TouchableHighlight underlayColor="royalblue" onPress={()=>{
          toggleModal()
          Actions.MapsPage();
      }} style={{ height: height * 0.06,marginBottom:5,backgroundColor:'gray',opacity:0.8,borderRadius:20,justifyContent:'center',alignItems:'center',width:width*0.7 }}><Text style={{color:'whitesmoke'}}>OPEN DETAILS</Text></TouchableHighlight>
      <Modal isVisible={isModalVisible}
        animationIn="flipInX"
        animationOut="flipOutX"
        animationOutTiming={500}
        animationInTiming={500}
        style={{ backgroundColor: '#393e46', marginTop: height * 0.625, borderRadius: 10, opacity: 0.1 }}>
        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          <View style={{ flex: 0.9, backgroundColor: '#393e46', borderRadius: 10, flexDirection: 'column' }}>

            <Text style={{textAlign:'center',fontSize:18,color:'#eeeeee',marginTop:10,textDecorationLine:'underline'}}>
                {Detail.name}
            </Text>
            <Text style={{textAlign:'center',fontSize:28,color:'#eeeeee',marginTop:10,fontWeight:'bold'}}>
                {Detail.depth+" km"}
            </Text>
            <Text style={{textAlign:'center',fontSize:28,color:'#eeeeee',marginTop:10,fontWeight:'bold'}}>
                {Detail.date}
            </Text>
            <Text style={{textAlign:'center',fontSize:44,color:'orange',marginTop:10,fontWeight:'bold',textDecorationLine:'underline'}}>
                {Detail.mag+" "}
            </Text>
          </View>
          <View style={{ flex: 0.18, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight underlayColor="royalblue" onPress={toggleModal} style={{ backgroundColor: 'dodgerblue', height: height * 0.05, width: width * 0.7, justifyContent: 'center', borderRadius: 5 }}>
              <Text style={{ color: 'whitesmoke', textAlign: 'center', fontFamily: 'Roboto' }}>CLOSE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default ModalTester;