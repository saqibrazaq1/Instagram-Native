import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

const PostBody = (props) => {
  const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
            loop={false}
                scrollAnimationDuration={500}
                mode='fade'
                width={width}
                height={width / 1}
                data={props.postContent}
                renderItem={({ item,index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                )}
            />
        </View>
    );
}

export default PostBody

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        Height:"500px",
    },
    image:{
        width:'100%',
        height:'100%',
    }
})