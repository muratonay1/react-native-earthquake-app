import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import ModalTester from './modal';
import AppBar from './appbar';
import Detail from './Details';
console.disableYellowBox = true;
export default class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 39.1667,
            lang: 35.6667,
            latDelta: 0.5922,
            langDelta: 0.5421,
            _siddet: null,
            _lokasyon: null,
            _lat: null,
            _lang: null,
            type:null,
        }
    }
    componentDidMount(){
        this.setState({type:Detail.map_style});
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'flex-end', justifyContent: 'flex-end' }}>  
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    zoomEnabled={true}
                    mapType={Detail.map_style}
                    region={{
                        latitude: Detail.latitude,
                        longitude: Detail.langitude,
                        latitudeDelta: this.state.latDelta,
                        longitudeDelta: this.state.langDelta,}}>
                    <Marker
                        coordinate={{ latitude: Detail.latitude, longitude: Detail.langitude }}
                        focusable
                        flat
                        title={Detail.name}
                        description={Detail.mag + " şiddetinde deprem meydana geldi."}
                    />
                </MapView>
                <AppBar/>
                <ModalTester />               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
