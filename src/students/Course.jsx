import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList,
Image } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../assets/colour'
import { Video } from 'expo-av';


const lactures = [
    { id: 1, name: 'React JS' },
    { id: 2, name: 'Angular JS' },
    { id: 3, name: 'React Native' },
    { id: 4, name: 'Javascript' },
    { id: 5, name: 'HTML, CSS & JS' },
    { id: 6, name: 'DSA' },
    { id: 7, name: 'Python' },
    { id: 8, name: 'MySQL' },
];
const videos = [
    { id: 1, title: 'Video 1', thumbnail: require('../../assets/images/profile.jpg'), videoUrl: 'https://www.youtube.com/watch?v=7DLhTU3wiy4' },
    { id: 2, title: 'Video 2', thumbnail: require('../../assets/images/profile.jpg'), videoUrl: 'https://www.youtube.com/watch?v=7DLhTU3wiy4' },
    // Add more video objects as needed
];


const Course = ({ navigation }) => {

    const [selectedIds, setSelectedIds] = useState([]); // Set initial selectedIds to an empty array
    const [selectedVideo, setSelectedVideo] = useState(null);


    const VideoItem = ({ video, onPress }) => (
        <TouchableOpacity style={styles.videoItem} onPress={() => onPress(video)}>
            <Image source={video.thumbnail} style={styles.thumbnail} />
            <Text style={styles.title}>{video.title}</Text>
        </TouchableOpacity>
    );

    const handleVideoPress = (video) => {
        setSelectedVideo(video);
        // Navigate to video detail screen
        navigation.navigate('VideoDetail', { video });
    };

    const renderItem = ({ item }) => {
        // Check if the item's id is included in selectedIds array
        const isSelected = selectedIds.includes(item.id);

        return (
            <TouchableOpacity
                style={[
                    styles.button2,
                    { borderColor: isSelected ? Colors.blue : Colors.gray } // Change border color dynamically
                ]}
                onPress={() => {
                    if (isSelected) {
                        setSelectedIds(selectedIds.filter(id => id !== item.id));
                    } else {
                        setSelectedIds([...selectedIds, item.id]);
                    }
                }}>
                <Text style={[styles.text2, { color: isSelected ? Colors.blue : Colors.black }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.heading}>Select What You Want To Learn</Text>
                <Text style={styles.heading}>&nbsp;</Text>
            </View>
            {/* <Video
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                style={{ width: 300, height: 200 }}
                useNativeControls
                resizeMode="contain"
            /> */}
            <FlatList
                data={videos}
                renderItem={({ item }) => <VideoItem video={item} onPress={handleVideoPress} />}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* <View style={styles.container2}>
                <FlatList
                    data={lactures}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()} // Converted to string
                    extraData={selectedIds} // Use selectedIds as extraData
                />
            </View> */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text5}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Course
const VideoDetailScreen = ({ route }) => {
    const { video } = route.params;
  
    return (
      <View style={styles.container}>
        {/* Display the selected video in full screen */}
        <Text style={styles.title}>{video.title}</Text>
        {/* Add video player component here */}
      </View>
    );
  };
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginTop: '10%'
    },
    container1: {
        backgroundColor: Colors.blue,
        padding: '5%',
        borderBottomLeftRadius: 2000,
        borderBottomRightRadius: 2000,
    },
    heading: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "10%",
        color: "white"
    },
    button: {
        backgroundColor: Colors.blue,
        padding: "5%",
        borderRadius: 15,
        alignItems: "center",
        marginTop: "15%",
        marginLeft: "5%",
        marginRight: "5%"
    },
    text5: {
        color: Colors.pwhite,
        fontSize: 25,
    },
    button2: {
        padding: "5%",
        borderRadius: 15,
        alignItems: "center",
        margin: "2%",
        marginLeft: "2%",
        marginRight: "5%",
        borderWidth: 1
    },
    text2: {
        fontSize: 20,
    },
    container2: {
        padding: '5%',
        height: "43%",
        marginTop: '3%',
    },
})
