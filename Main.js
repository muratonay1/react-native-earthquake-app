import React, { Component } from 'react';
import {
    View,
    Text,
    Alert,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    RefreshControl,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Detail from './Details';
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
console.disableYellowBox = true;
import Icon from 'react-native-vector-icons/Feather';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataSource: null,
            downloading: 'Güncel veriler yükleniyor...'
        }
    }
    _getData = () => {
        try {
            return fetch('https://api.orhanaydogdu.com.tr/deprem/live.php')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        isLoading: true,
                        dataSource: responseJson.result,
                        isRefreshing: false,
                        downloading: 'Güncel veriler yükleniyor...'
                    }, function () {
                    });
                })
                .catch((error) => {
                    this.setState({ downloading: 'Internet Connection is not established' });
                });
        }
        catch (error) {
            Alert.alert("Connection Failed", "Connection is not established");
        }
    }
    componentDidMount() {
        this._getData();
    }
    _onRefresh = () => {
        this.setState({ isRefreshing: true }, this._getData)
    }
    render() {
        if (!this.state.isLoading) {
            return (
                <View style={styles.MainContainer}>
                    <ActivityIndicator size="large" animating />
                    <Text style={{ color: '#eeeeee' }}>{this.state.downloading}</Text>
                </View>
            )
        }
        return (
            <View style={styles.MainContainer}>
            <StatusBar backgroundColor={Detail.theme === 'dark'?'#222831':'white'} />
                <View style={styles.HeaderContainer}>
                    <View style={{ flex: 0.7, justifyContent: 'space-between', alignItems: 'center',flexDirection:'row'}}>
                        <Text style={{ marginTop: 5, color: 'white', fontSize: 18,marginLeft:40 }}>GÜNCEL DEPREMLER</Text>
                        <Icon name="settings" size={30} color="orange" onPress={()=>Actions.Settings()}/>
                    </View>
                </View>
                <View style={{ flex: 13, backgroundColor: Detail.theme === 'dark'?'#222831':'white' }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <View style={styles.PropertiesContainer}>
                                        <TouchableOpacity style={{ width: width * 0.99, height: height * 0.17 }} onPress={() => {
                                            Detail.name = item.lokasyon;
                                            Detail.mag = item.mag;
                                            Detail.latitude = item.lat;
                                            Detail.langitude = item.lng;
                                            Detail.depth = item.depth;
                                            Detail.date = item.date;
                                            Actions.MapsPage({mapstyles:Detail.map_style});
                                        }
                                        }>
                                            <View style={styles.DataContainer}>
                                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                                    <Text style={styles.magStyle}>{item.mag}</Text>
                                                </View>
                                                <View style={{ flex: 6, flexDirection: 'column' }}>
                                                    <Text style={styles.LokasyonStyle}>{item.lokasyon}</Text>
                                                    <Text style={styles.PropertiesStyle}>{item.depth} Km</Text>
                                                    <Text style={styles.PropertiesStyle}>{item.date}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        }
                        keyExtractor={({ id }) => id}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Detail.theme === 'dark'?'#222831':'white'
    },
    DataContainer: {
        flex: 1,
        backgroundColor: Detail.theme === 'dark'?'#393e46':'whitesmoke',
        marginBottom: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: Detail.theme === 'dark'?'#222831':'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5
    },
    magStyle: {
        textAlign: 'center',
        fontFamily: 'Rajdhani-Regular',
        fontSize: 34,
        color: '#f57f17',
        marginLeft: 5
    },
    LokasyonStyle: {
        color: Detail.theme === 'dark'?'#eeeeee':'#222831',
        fontSize: 18,
        fontFamily: 'Rajdhani-Regular',
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5,
        fontWeight: 'bold'
    },
    PropertiesStyle: {
        color: Detail.theme === 'dark'?'#eeeeee':'#222831',
        fontSize: 16,
        fontFamily: 'Rajdhani-Regular',
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    HeaderContainer: {
        backgroundColor: Detail.theme === 'dark'?'#222831':'gray',
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.09,
        flexDirection: 'row'
    },
    PropertiesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
    }
})