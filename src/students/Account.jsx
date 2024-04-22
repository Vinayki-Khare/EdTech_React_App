import {
  ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList,
  Image,
} from 'react-native'
import React, { useState } from 'react'
import Colors from '../../assets/colour'

const Badges = [
  { id: 1, name: 'React JS', badge: 'Golden' },
  { id: 2, name: 'Angular JS', badge: 'Silver' },
]

const Account = () => {
  const [name, setName] = useState("Vinayki");
  const [button, setButton] = useState("general");

  const renderItem = ({ item }) => {

    return (
      <View
        style={styles.button2}
      >
        <Text style={styles.text3}>{item.badge}</Text>
        <Text style={styles.text4}>{item.name}</Text>
      </View>
    );
  };

  if (button === 'general') {
    content = (
      <>
        <View style={styles.container3}>
          <Text style={styles.text5}>Name</Text>
          <Text style={styles.text6}>
            Edit
          </Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text5}>Email</Text>
          <Text style={styles.text6}>
            Edit
          </Text>
        </View>
        <View style={styles.container3}>
            <Text style={styles.text5}>Password</Text>
            <Text style={styles.text6}>
              Edit
            </Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.text5}>Phone Number</Text>
            <Text style={styles.text6}>
              Edit
            </Text>
          </View>
        </>
    );
  } else if (button === 'badges') {
    content = (
      <FlatList
        data={Badges}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} // Converted to string
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Image source={require("../../assets/images/profile.jpg")}
          style={styles.img}
        />
      </View>
      <Text style={styles.heading}>{name}</Text>
      <View style={styles.container2}>
        <TouchableOpacity
          style={[
            styles.button,
            button === "general" ? styles.activeButton : null,
          ]}
          onPress={() => setButton("general")}
        >
          <Text style={[styles.text2,
          button === "general" ? styles.activeText : null,
          ]}>General</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            button === "badges" ? styles.activeButton : null,
          ]}
          onPress={() => setButton("badges")}
        >
          <Text style={[styles.text2,
          button === "badges" ? styles.activeText : null,
          ]}>Badges</Text>
        </TouchableOpacity>
      </View>
      {content}
      <Text style={[styles.heading,{marginTop:"15%"}]}
      onPress={()=>{
        
      }}>LOG OUT</Text>
    </ScrollView>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: '10%',
    padding: "2%"
  },
  container1: {
    backgroundColor: Colors.blue,
    padding: '1%',
    marginTop: '10%',
    borderColor: Colors.black,
    borderRadius: 500,
    // width: "50%",
    alignSelf: "center",
    alignItems: "center",
  },
  img: {
    // width:'500px',
    // height:"500px",
    borderRadius: 500,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "5%",
    color: Colors.blue,
  },
  button: {
    // backgroundColor: Colors.blue,
    paddingVertical: "5%",
    paddingHorizontal: '13%',
    borderRadius: 15,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: Colors.blue,
  },
  activeText: {
    color: 'white',
  },
  text3: {
    color: Colors.black,
    fontSize: 25,
  },
  text4: {
    color: Colors.gray,
    fontSize: 18,
  },
  button2: {
    padding: "2%",
    borderRadius: 15,
    alignItems: "Left",
    margin: "2%",
    marginLeft: "2%",
    marginRight: "5%",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold"
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  container4: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  text5: {
    color: Colors.black,
    fontSize: 25,
  },
  text6: {
    color: Colors.blue,
    fontSize: 18,
  },
})
