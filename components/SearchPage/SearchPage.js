import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image,
    TextInput,
    Share
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })


export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isOpenMenu: false,
            dataSource: [],
            rawData: '',
            empty: true,
            isLoading: false,
            text: ''
        }
    }

    componentWillMount() {
        this.fetchData()
    }
// Fetch Data From API
    fetchData() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=59883985')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    dataSource: [data],
                    isLoading: false,
                    empty: false,
                    rawData: data
                })
            })
            .catch((error) => {
                this.setState({
                    empty: true,
                })
            })
    }
// Share Data
    onShare() {
        Share.share({

            title: 'Guardians of the Galaxy Vol. 2',
            url: 'https://marvel.com/guardians',
            message: 'Guardians of the Galaxy Vol. 2'
        }, {
                //android
                dialogTitle: 'Share movie content',
                //ios
                excludeActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }

// Render Each Movie in One Row
    renderRow(rowData) {
        return (
            <TouchableHighlight>
                <View style={styles.row}>
                    <Card>
                        <CardSection>
                            <Image
                                style={styles.imageStyle}
                                source={{ uri: rowData.Poster }}
                            />
                        </CardSection>
                        <CardSection>
                            <Text style={styles.titleText}> {rowData.Title} ({rowData.Year})</Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.secondaryText}> Release Date: {rowData.Released}</Text>
                            <Text style={styles.secondaryText}>IMDb Rating: {rowData.imdbRating}/10 </Text>
                        </CardSection>
                        <CardSection>
                            <View style={styles.shareListIcons}>
                                <View style={styles.myListIcon}>
                                    <Icon
                                        style={styles.shareIcon}
                                        name="star"
                                        color="#333"
                                        size={25}
                                    />
                                    <Text style={styles.text}>My Favourite</Text>
                                </View>

                                <TouchableHighlight onPress={this.onShare}>
                                    <View style={styles.myShareIcon}>
                                        <Icon
                                            style={styles.shareIcon}
                                            name="share-alt"
                                            color="#333"
                                            size={25}
                                            value={this.state.dataSource}
                                        />
                                        <Text style={styles.text}>Share</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </CardSection>
                    </Card>
                </View>
            </TouchableHighlight>
        );
    }
// Filter Date to use Search
    get filteredData() {

        return ds.cloneWithRows(this.state.dataSource.filter(item => {
            const itemData = item.Title.toUpperCase()
            const textData = this.state.text.toUpperCase()
            return itemData.indexOf(textData) > -1
        }))
    }

    render() {
        const filteredData = this.filteredData;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text}
                    placeholder="       search"
                />
                <Icon
                    style={styles.searchIcon}
                    name="search"
                    color="#ccc"
                    size={20}


                />
                <ListView
                    enableEmptySections={true}
                    renderRow={this.renderRow.bind(this)}
                    dataSource={filteredData}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 68,
        backgroundColor: '#efefef',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#efefef',
    },
    secondaryText: {
        paddingLeft: 15,
        color: '#333',
        fontWeight: 'bold',
    },

    textInput: {
        height: 35,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 5,
        marginHorizontal: 5,
        paddingLeft: 30
    },
    titleText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        padding: 13
    },
    imageStyle: {
        height: 300,
        width: 350
    },
    text: {
        paddingTop: 10
    },
    shareListIcons: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 18
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        position: 'absolute',
        top: 7,
        left: 10
    }
});

AppRegistry.registerComponent('SearchPage', () => SearchPage);