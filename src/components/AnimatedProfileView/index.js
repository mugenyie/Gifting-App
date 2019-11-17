import React, {Component} from 'react';
/*Components*/
import {Animated, View, StatusBar, Text, Image, Platform, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const ARTIST_NAME = 'Bob Marley';

export default class AnimatedProfileView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        };
    }

    renderArtistCard = (index, item) => {
        return (
            <Animated.View key={index.toString()} index={index}>
                <TouchableOpacity activeOpacity={0.8} style={styles.artistCardContainerStyle}
                                  onPress={() => this.openLink(item.songLink)}>
                    <Image source={} style={styles.artistImage}/>
                    <View style={styles.cardTextContainer}>
                        <Text numberOfLines={1} style={styles.songTitleStyle}>{item.songName}</Text>
                        <Text numberOfLines={1}>{item.albumName}</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )
    };

    //For header background color from transparent to header color
    _getHeaderBackgroundColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['rgba(0,0,0,0.0)', Color.HEADER_COLOR],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //For header image opacity
    _getHeaderImageOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image position from left
    _getImageLeftPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 80, 140],
            outputRange: [ThemeUtils.relativeWidth(30), ThemeUtils.relativeWidth(38), ThemeUtils.relativeWidth(10)],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image position from top
    _getImageTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [ThemeUtils.relativeHeight(20), Platform.OS === 'ios' ? 8 : 10],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image width
    _getImageWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [ThemeUtils.relativeWidth(40), ThemeUtils.APPBAR_HEIGHT - 20],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image height
    _getImageHeight = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [ThemeUtils.relativeWidth(40), ThemeUtils.APPBAR_HEIGHT - 20],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image border width
    _getImageBorderWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [StyleSheet.hairlineWidth * 3, StyleSheet.hairlineWidth],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image border color
    _getImageBorderColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [Color.CARD_BG_COLOR, 'rgba(0,0,0,0.0)'],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //Song list container position from top
    _getListViewTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 250],
            outputRange: [ThemeUtils.relativeWidth(100) - ThemeUtils.APPBAR_HEIGHT - 10, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //header title opacity
    _getHeaderTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [0, 0.5, 1],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist name opacity
    _getNormalTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });

    };

    render() {
        const headerBackgroundColor = this._getHeaderBackgroundColor();

        const headerImageOpacity = this._getHeaderImageOpacity();

        const profileImageLeft = this._getImageLeftPosition();

        const profileImageTop = this._getImageTopPosition();

        const profileImageWidth = this._getImageWidth();

        const profileImageHeight = this._getImageHeight();

        const profileImageBorderWidth = this._getImageBorderWidth();

        const profileImageBorderColor = this._getImageBorderColor();

        const listViewTop = this._getListViewTopPosition();

        const headerTitleOpacity = this._getHeaderTitleOpacity();

        const normalTitleOpacity = this._getNormalTitleOpacity();

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={Color.STATUSBAR_COLOR}/>

                <Animated.Image
                    style={[styles.headerImageStyle, {
                        opacity: headerImageOpacity,

                    }]}
                    source={coverImage}/>

                <Animated.View style={[styles.headerStyle, {
                    backgroundColor: headerBackgroundColor,
                }]}>

                    <View style={styles.headerLeftIcon}>
                        <Icons name={"arrow-left"} size={25} color={Color.HEADER_BACK_ICON_COLOR}/>
                    </View>

                    <View style={styles.headerRightIcon}>
                        <Icons name={"settings"} size={25} color={Color.HEADER_BACK_ICON_COLOR}/>
                    </View>

                    <Animated.Text
                        style={[styles.headerTitle, {
                            opacity: headerTitleOpacity
                        }]}>
                        {ARTIST_NAME}
                    </Animated.Text>

                </Animated.View>

                <Animated.Image
                    style={
                        [styles.profileImage, {
                            borderWidth: profileImageBorderWidth,
                            borderColor: profileImageBorderColor,
                            borderRadius: (ThemeUtils.APPBAR_HEIGHT - 20) / 2,
                            height: profileImageHeight,
                            width: profileImageWidth,
                            transform: [
                                {translateY: profileImageTop},
                                {translateX: profileImageLeft}
                            ]
                        }]}
                    source={profileImage}
                />

                <Animated.ScrollView
                    overScrollMode={'never'}
                    style={{zIndex: 10}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {contentOffset: {y: this.state.scrollY}}
                            }
                        ]
                    )}>
                    <Animated.Text style={[
                        styles.profileTitle, {
                            opacity: normalTitleOpacity,
                        }
                    ]}
                    >
                        {ARTIST_NAME}
                    </Animated.Text>

                    <Animated.Text style={[
                        styles.songCountStyle, {
                            opacity: normalTitleOpacity,
                        }
                    ]}>
                        {`♬ ${artistData.length} songs`}
                    </Animated.Text>

                    <Animated.View style={{
                        transform: [{
                            translateY: listViewTop
                        }],
                    }}>
                        {artistData.map((item, index) => this.renderArtistCard(index, item))}
                    </Animated.View>

                </Animated.ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    /*header style*/
    headerLeftIcon: {
        position: 'absolute',
        left: ThemeUtils.relativeWidth(2),
    },
    headerRightIcon: {
        position: 'absolute',
        right: ThemeUtils.relativeWidth(2),
    },
    headerStyle: {
        height: ThemeUtils.APPBAR_HEIGHT,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
    },
    headerTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        color: Color.HEADER_TEXT_COLOR,
        fontSize: ThemeUtils.fontNormal
    },
    /*Top Image Style*/
    headerImageStyle: {
        height: HEADER_IMAGE_HEIGHT,
        width: '100%',
        top: 0,
        alignSelf: 'center',
        position: 'absolute'
    },
    /*profile image style*/
    profileImage: {
        position: 'absolute',
        zIndex: 100,
    },
    /*profile title style*/
    profileTitle: {
        position: 'absolute',
        zIndex: 100,
        textAlign: 'center',
        color: Color.BLACK,
        top: ThemeUtils.relativeHeight(35),
        left: 0,
        right: 0,
        fontSize: ThemeUtils.fontXLarge
    },
    /*song count text style*/
    songCountStyle: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: '400',
        top: ThemeUtils.relativeHeight(40),
        left: 0,
        right: 0,
        fontSize: ThemeUtils.fontNormal,
    },
    artistCardContainerStyle: {
        backgroundColor: Color.CARD_BG_COLOR,
        elevation: 5,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 15,
        marginVertical: ThemeUtils.relativeWidth(1),
        marginHorizontal: ThemeUtils.relativeWidth(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    artistImage: {
        height: ThemeUtils.relativeWidth(15),
        width: ThemeUtils.relativeWidth(15),
        borderRadius: ThemeUtils.relativeWidth(7.5)
    },
    songTitleStyle: {
        fontSize: ThemeUtils.fontNormal,
        color: Color.BLACK
    },
    cardTextContainer: {
        flex: 1,
        margin: ThemeUtils.relativeWidth(3)
    },

})