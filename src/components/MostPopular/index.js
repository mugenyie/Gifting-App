//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SectionTitle from '../SectionTitle';
import PopularGifts from '../PopularGifts';

// create a component
class MostPopular extends Component {
    render() {
        const gifts = [
            {
                image : {
                    uri : "https://m.rolex.com/content/dam/rolex-58/homepage/roller-collection/baselworld/all-watches/homepage_classic_watches_datejust_0001_675x825.jpg"
                },
                name : "Rolex",
                price: "Ushs. 350,000"
            },
            {
                image : {
                    uri : "https://m.rolex.com/content/dam/rolex-58/homepage/roller-collection/baselworld/all-watches/homepage_classic_watches_datejust_0001_675x825.jpg"
                },
                name : "Rolex",
                price: "Ushs. 350,000"
            },
            {
                image : {
                    uri : "https://m.rolex.com/content/dam/rolex-58/homepage/roller-collection/baselworld/all-watches/homepage_classic_watches_datejust_0001_675x825.jpg"
                },
                name : "Rolex",
                price: "Ushs. 350,000"
            },
            {
                image : {
                    uri : "https://m.rolex.com/content/dam/rolex-58/homepage/roller-collection/baselworld/all-watches/homepage_classic_watches_datejust_0001_675x825.jpg"
                },
                name : "Rolex",
                price: "Ushs. 350,000"
            },
            {
                image : {
                    uri : "https://m.rolex.com/content/dam/rolex-58/homepage/roller-collection/baselworld/all-watches/homepage_classic_watches_datejust_0001_675x825.jpg"
                },
                name : "Rolex",
                price: "Ushs. 350,000"
            },
            {
                image : {
                    uri : "https://m.rolex.com/content/dam/rolex-58/homepage/roller-collection/baselworld/all-watches/homepage_classic_watches_datejust_0001_675x825.jpg"
                },
                name : "Rolex",
                price: "Ushs. 350,000"
            }
        ];

        return (
            <View style={styles.container}>
                <SectionTitle title="Most popular" subtitle="Swipe to view popular gift items." />

                <PopularGifts gifts={gifts}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom:20
      }
});

//make this component available to the app
export default MostPopular;
