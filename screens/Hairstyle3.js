import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import Mask from '../components/Hairstyle3';
import { Dropdown } from 'react-native-material-dropdown-v2';

export default function Model1Screen({ route, navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.front);
    const [face, setface] = useState()
    const [colour, setColour] = useState('black');

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const onFacesDetection = ({ faces }) => {
        setface(faces)
    }
    let data = [{
        value: 'black',
    }, {
        value: 'blonde',
    }, {
        value: 'brown',
    }, {
        value: 'grey',
    }];

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <Camera style={styles.camera} type={type}
            onFacesDetected={(faces) => onFacesDetection(faces)}
            faceDetectorSettings={{
                mode: FaceDetector.Constants.Mode.fast,
                detectLandmarks: FaceDetector.Constants.Landmarks.all,
                runClassifications: FaceDetector.Constants.Classifications.none,
                minDetectionInterval: 10,
                tracking: true,
            }}
        >
            <View style={styles.buttonContainer}>
                <Mask face={face} color={colour} model={route.params.model} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Dropdown
                    label='Select Hair Colour'
                    data={data}
                    onChangeText={(value) => {
                        setColour(value)
                    }}
                    style={{ marginBottom: 85, backgroundColor: 'white' }}
                />
            </View>
        </Camera>
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
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
    },
});