import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import glasses from "../assets/glasses.png"

const Mask = ({ face }) => {
  const [left, setleft] = React.useState();
  const [top, settop] = React.useState();

  const faces = {
    containerX: face && face[0]?.bounds?.origin?.x,
    containerY: face && face[0]?.bounds?.origin?.y,
    sizeWidth: face && face[0]?.bounds?.size?.width,
    sizeHeight: face && face[0]?.bounds?.size?.height,
    leftEyePosition: face && face[0]?.leftEyePosition,
    rightEyePosition: face && face[0]?.rightEyePosition,
    leftEarPosition: face && face[0]?.leftEarPosition,
    rightEarPosition: face && face[0]?.rightEarPosition,
    noseBasePosition: face && face[0]?.noseBasePosition,
  }
  
  console.log("faces", faces)

  const glassesWidth = faces.sizeWidth + 15
  const glassesHeight = faces.sizeHeight / 2
  React.useEffect(() => {
    if (face != undefined) {
      if (face.leftEarPosition != undefined  && face.bottomMouthPosition != undefined) {
        setleft(Math.sqrt((Math.pow(face.leftEarPosition.x, 2) + Math.pow(face.leftEarPosition.y, 2))));
        settop(Math.sqrt((Math.pow(face.rightEyePosition.x, 2) + Math.pow(face.rightEyePosition.y, 2)))+500);
        console.log(left);
        console.log(top);
      }
    }
  }, [face]);

  const transformAngle = (
    angleRad = Math.atan(
      (faces.rightEarPosition.y - faces.leftEarPosition.y) /
      (faces.rightEarPosition.x - faces.leftEarPosition.x)
    )
  ) => angleRad * 180 / Math.PI

  return (
    <View style={(face && face[0] !== undefined) ? {
      position: 'absolute',
      // left: faces.noseBasePosition.y - glassesWidth * 1.73,
      // top: faces.leftEarPosition.y
      left: '30%',
      top:'30%'
    } : null}>

      {(face && face[0] !== undefined) ? <Image
        source={require("../assets/hair.png")}
        style={{
          width: glassesWidth,
          height: glassesHeight,
          resizeMode: 'contain',
          transform: [{ rotate: `${transformAngle()}deg` }]
        }}
      /> : null}

    </View>

    /* {   (face && face[0]!==undefined) ?  <View style = {{...eyeStyle(translatedLeftEyePosition)}} /> : <Text>Not face</Text> }
    {   (face && face[0]!==undefined) ?  <View style = {{position:'absolute', left:translatedLeftEyePosition.x,     
  borderColor: 'black',
  backgroundColor:'yellow'}} /> : <Text>Not face</Text> }
    {   (face && face[0]!==undefined) ?  <View style = { {...eyeStyle(translatedRightEyePosition)}} /> : <Text>Not face</Text> } */
        // const eyeWidth = faces.size ? faces.size/4 : 0
  // console.log("eyeWidth ", eyeWidth)
  // const translatedEyePositionX = (eyePosition) => {
  //     if(eyePosition!==undefined){
  //       return eyePosition.x - eyeWidth / 2 - faces.containerX
  //     }
  //     else {
  //       return 0
  //     }
  // }
  // const translatedEyePositionY = eyePosition => {
  //    if(eyePosition!==undefined){
  //       return eyePosition.y - eyeWidth / 2 - faces.containerY
  //    }
  //    else {
  //      return 0
  //    }
  //   }

  // const translatedLeftEyePosition = {
  //     x: translatedEyePositionX( faces?.leftEyePosition ),
  //     y: translatedEyePositionY( faces?.leftEyePosition)
  // }

  // console.log(translatedLeftEyePosition)


  // const translatedRightEyePosition = {
  //     x: translatedEyePositionX( faces?.rightEyePosition),
  //     y: translatedEyePositionY( faces?.rightEyePosition)
  // }
  //   const eyeStyle = (eyePosition, eyeBorderWidth = eyeWidth / 6) => ({
  //     position: 'absolute',
  //     left: eyePosition?.x,
  //     top: eyePosition?.y,
  //     borderRadius: eyeWidth,
  //     width: eyeWidth,
  //     height: eyeWidth,
  //     borderWidth: eyeBorderWidth,
  //     borderColor: 'black',
  //     backgroundColor:'yellow'
  //   });
  );
};

export default Mask;