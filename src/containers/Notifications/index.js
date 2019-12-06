import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

// create a component
class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listType: 'FlatList',
            listViewData: Array(10)
                .fill('')
                .map((_, i) => ({ key: `${i}`, text: `item #${i}` })),
            sectionListData: Array(5)
                .fill('')
                .map((_, i) => ({
                    title: `title${i + 1}`,
                    data: [
                        ...Array(5)
                            .fill('')
                            .map((_, j) => ({
                                key: `${i}.${j}`,
                                text: `item #${j}`,
                            })),
                    ],
                })),
        };

        this.rowSwipeAnimatedValues = {};
        Array(20)
            .fill('')
            .forEach((_, i) => {
                this.rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
            });
    }

    closeRow(rowMap, rowKey) {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    deleteRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        const newData = [...this.state.listViewData];
        const prevIndex = this.state.listViewData.findIndex(
            item => item.key === rowKey
        );
        newData.splice(prevIndex, 1);
        this.setState({ listViewData: newData });
    }

    deleteSectionRow(rowMap, rowKey) {
        this.closeRow(rowMap, rowKey);
        const [section] = rowKey.split('.');
        const newData = [...this.state.sectionListData];
        const prevIndex = this.state.sectionListData[section].data.findIndex(
            item => item.key === rowKey
        );
        newData[section].data.splice(prevIndex, 1);
        this.setState({ sectionListData: newData });
    }

    onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        this.rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    render() {
        return (
            <View style={styles.container}>
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                <Button onPress={() => this.props.navigation.navigate("Home")} transparent>
                    <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                </Button>
                </Left>
                <Body>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Notifications</Title>
                </Body>
                <Right>
                </Right>
            </Header>
                <SwipeListView
                    data={this.state.listViewData}
                    renderItem={(data, rowMap) => (
                        <SwipeRow
                            disableLeftSwipe={
                                parseInt(data.item.key) % 2 === 0
                            }
                            leftOpenValue={20 + Math.random() * 150}
                            rightOpenValue={-150}
                        >
                            <View style={styles.rowBack}>
                                <Text>Left</Text>
                                <TouchableOpacity
                                    style={[
                                        styles.backRightBtn,
                                        styles.backRightBtnLeft,
                                    ]}
                                    onPress={() =>
                                        this.closeRow(rowMap, data.item.key)
                                    }
                                >
                                    <Text style={styles.backTextWhite}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.backRightBtn,
                                        styles.backRightBtnRight,
                                    ]}
                                    onPress={() =>
                                        this.deleteRow(
                                            rowMap,
                                            data.item.key
                                        )
                                    }
                                >
                                    <Text style={styles.backTextWhite}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableHighlight
                                onPress={() =>
                                    console.log('You touched me')
                                }
                                style={styles.rowFront}
                                underlayColor={'#AAA'}
                            >
                                <View>
                                    <Text>
                                        notification {data.item.text} 
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </SwipeRow>
                        )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#8BC645',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    controls: {
        alignItems: 'center',
        marginBottom: 30,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5,
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        width: Dimensions.get('window').width / 4,
    },
    trash: {
        height: 25,
        width: 25,
    },
});

//make this component available to the app
export default Notifications;
