import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Dimensions
} from 'react-native';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Dimensions.get('window').width;

const HEADER_MAX_HEIGHT = screenHeight * 0.5;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


// create a component
class AnimatedHeaderScroll extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          scrollY: new Animated.Value(Platform.OS=='ios'?-HEADER_MAX_HEIGHT:0)
        };
      }


    render() {
        const {RenderHeader, RenderFooter,ScrollViewContent, TopImage, TopText} = this.props;
        let TopTextView;
        if(TopText != null){
            TopTextView = <Text 
            style={[mainStyles.Heading1, 
                {top:HEADER_MAX_HEIGHT*0.4,backgroundColor:Color.WhiteOpacity,width:screenWidth*0.5, height:40, textAlign:'center', textAlignVertical:'center'}]}>{TopText}</Text>;
        }

        // Because of content inset the scroll value will be negative on iOS so bring
        // it back to 0.
        const scrollY = Animated.add(
            this.state.scrollY,
            0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });
    
        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });
    
        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });


        return (
            <View style={{flex:1, flexDirection: "column"}}>
                <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.fill}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                    { useNativeDriver: true },
                )}
                >
                    <View style={styles.scrollViewContent}>
                        {ScrollViewContent}
                    </View>
                </Animated.ScrollView>

                <Animated.View
                pointerEvents="none"
                style={[
                    styles.header,
                    { transform: [{ translateY: headerTranslate }] },
                ]}
                >
                    <View style={{alignItems:'center'}}>
                        <Animated.Image
                            style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                            ]}
                            source={{uri:TopImage}}
                        />
                        {TopTextView}
                    </View>
                </Animated.View>
                <Animated.View
                style={[
                    styles.bar,
                    {
                    transform: [
                        { translateY: titleTranslate },
                    ],
                    },
                ]}
                >
                    {RenderHeader}
                </Animated.View>

            {RenderFooter}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    fill: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
      header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
      },
      bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS == 'ios'?40:20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      title: {
        color: 'white',
        fontSize: 18,
      },
      scrollViewContent: {
        paddingTop: HEADER_MAX_HEIGHT,
        marginTop: 10
      }
});

//make this component available to the app
export default AnimatedHeaderScroll;
