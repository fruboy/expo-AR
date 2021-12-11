// import * as FaceDetector from 'expo-face-detector';
// import Mask from './components/Mask';
// import { Dropdown } from 'react-native-material-dropdown-v2';
// import ViewShot from 'react-native-view-shot';
// var RNFS = require("react-native-fs");
//import { Camera } from 'expo-camera';
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Hairstyle1 from './screens/Hairstyle1';
import Hairstyle2 from './screens/Hairstyle2';
import Hairstyle3 from './screens/Hairstyle3';
import Hairstyle4 from './screens/Hairstyle4';
import Beard1 from './screens/Beardstyle1';
import Beard2 from './screens/Beardstyle2';
import Beard3 from './screens/Beardstyle3';
import Beard4 from './screens/Beardstyle4';


export default function App() {

  const Stack = createStackNavigator();
  LogBox.ignoreAllLogs();
  //console.disableYellowBox = true;
  // const viewShot = useRef();
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.front);
  // const [face, setface] = useState()
  // const [colour, setColour] = useState('black');

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // const onFacesDetection = ({ faces }) => {
  //   //console.log(faces)
  //   setface(faces)
  // }
  // let data = [{
  //   value: 'black',
  // }, {
  //   value: 'blonde',
  // }, {
  //   value: 'brown',
  // }, {
  //   value: 'grey',
  // }];

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  // const captureAndShareScreenshot = () => {

  //   //console.log(viewShot.current)

  //   viewShot.current.capture().then((uri) => {
  //     RNFS.readFile(uri, 'base64').then((res) => {
  //       let urlString = 'data:image/jpeg;base64,' + res;
  //       let options = {
  //         title: 'Share Title',
  //         message: 'Share Message',
  //         url: urlString,
  //         type: 'image/jpeg',
  //       };
  //       Share.open(options)
  //         .then((res) => {
  //           console.log(res);
  //         })
  //         .catch((err) => {
  //           err && console.log(err);
  //         });
  //     });
  //   });
  // };

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoutName="Choose Hairstyle">
        <Stack.Screen
          name="Choose Hairstyle"
          component={StartScreen}
          options={{
            title: 'Choose Hairstyle',
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen
          name="Hairstyle 1"
          component={Hairstyle1}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Hairstyle 2"
          component={Hairstyle2}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Hairstyle 3"
          component={Hairstyle3}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        /> 
        <Stack.Screen
          name="Hairstyle 4"
          component={Hairstyle4}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Beard Style 1"
          component={Beard1}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Beard Style 2"
          component={Beard2}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Beard Style 3"
          component={Beard3}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />
        <Stack.Screen
          name="Beard Style 4"
          component={Beard4}
          options={{
            headerStyle: { backgroundColor: 'teal' },
            headerTintColor: '#fff'
          }}
        />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function StartScreen({navigation}) {
  const HAIRSTYLES = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Hair Style 1',
      pic: require('./assets/m1-black.png'),
      model: 'm1',
      screen: 'Hairstyle 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Hair Style 2',
      pic: require('./assets/m5-black.png'),
      model: 'm2',
      screen: 'Hairstyle 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Hair Style 3',
      pic: require('./assets/m7-black.png'),
      model: 'm3',
      screen: 'Hairstyle 3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73', 
      name: 'Hair Style 4',
      pic: require('./assets/m10-black.png'),
      model: 'm4',
      screen: 'Hairstyle 4',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74', 
      name: 'Beard Style 1',
      pic: require('./assets/beard1.png'),
      model: 'm5',
      screen: 'Beard Style 1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75', 
      name: 'Beard Style 2',
      pic: require('./assets/beard2.png'),
      model: 'm6',
      screen: 'Beard Style 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76', 
      name: 'Beard Style 3',
      pic: require('./assets/beard3.png'),
      model: 'm7',
      screen: 'Beard Style 3',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77', 
      name: 'Beard Style 4',
      pic: require('./assets/beard4.png'),
      model: 'm8',
      screen: 'Beard Style 4',
    },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
          navigation.navigate( item.screen,{
            name: item.name,
            pic: item.pic,
            model: item.model
          })
        }}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.img} source={item.pic} />
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
  const HeaderComponent = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>Choose a Hairstyle</Text>
      </View>
    );
  };
  const SeparatorComponent = () => {
    return <View style={styles.separatorLine} />
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={HAIRSTYLES}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={SeparatorComponent}
          ListHeaderComponent={HeaderComponent}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    flex: 1
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'plum',
    paddingTop: 2,
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  }
});

