import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../Constants/AppColors'
import { Typographies } from '../../Constants/Typographies'
import GenreItem from './Items/GenreItem'
import AppButton from '../../Components/AppButton'

const genreData=[
  {
    "_id":"1",
    "genreImage": require('../../Images/genreImages/img_fire.png'),
    "genreName":"Action"
  },
  {
    "_id":"2",
    "genreImage":require('../../Images/genreImages/img_heart.png'),
    "genreName":"Romance"
  },
  {
    "_id":"3",
    "genreImage":require('../../Images/genreImages/img_sneeze.png'),
    "genreName":"Drama"
  },
  {
    "_id":"4",
    "genreImage":require('../../Images/genreImages/img_faceScreaming.png'),
    "genreName":"Horror"
  },
  {
    "_id":"5",
    "genreImage":require('../../Images/genreImages/img_unicorn.png'),
    "genreName":"Fantasy"
  },
  {
    "_id":"6",
    "genreImage":require('../../Images/genreImages/img_Camera.png'),
    "genreName":"Mistery"
  },
  {
    "_id":"7",
    "genreImage":require('../../Images/genreImages/img_ball.png'),
    "genreName":"Magic"
  },
  {
    "_id":"8",
    "genreImage":require('../../Images/genreImages/img_lol.png'),
    "genreName":"comedy"
  },
  {
    "_id":"9",
    "genreImage":require('../../Images/genreImages/img_Calendar.png'),
    "genreName":"Daily Life"
  },
  {
    "_id":"10",
    "genreImage":require('../../Images/genreImages/img_Clock.png'),
    "genreName":"Psychology"
  },
  {
    "_id":"11",
    "genreImage":require('../../Images/genreImages/img_Airplane.png'),
    "genreName":"Adventure"
  },
  {
    "_id":"12",
    "genreImage":require('../../Images/genreImages/img_Cold_face.png'),
    "genreName":"Thriller"
  }
]
  

const ChooseGenre = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topText}>
      <Text style={[Typographies.h1,{color:AppColors.primary_black, fontWeight:'700'}]}>Let Us Know!</Text>
      <Text style={[styles.text, Typographies.h5]}>Choose your genre to find favorite titles here!</Text>
      </View>
      <View style={{alignItems:'center', marginTop:6}}>

    
     <FlatList
     data={genreData}
     renderItem={({item})=><GenreItem data={item}></GenreItem>}
      keyExtractor={item=> item._id}
     numColumns={3}
     horizontal={false}
     >
  
     </FlatList>
     </View>
     <View style={styles.buttonContainer}>
      <AppButton type='disabled' value='Continue' ></AppButton>
     </View>
    </View>
  )
}

export default ChooseGenre

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: AppColors.primary_white
  },
  topText:{
    alignItems:'center',
    marginTop:10
  },
  text:{
    width: 218,
    textAlign:'center'
  },
  buttonContainer:{
    paddingHorizontal:25,
    marginTop:20
  }
})