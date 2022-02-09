import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PlayerIcon from 'react-native-vector-icons/Ionicons';
import AppbarIcon from  'react-native-vector-icons/Octicons';
import { LinearProgress } from '@mui/material';
//import TrackPlayer from 'react-native-track-player';

function HelloWorld(){
   const Heil = () =>{
      console.log("Hello World");
   }
}

const Musicplayer = () => {

  const load = 100;

  return (
    <View style={styles.container}>
      <View style={styles.Appbar}>
         <Text style={{textAlign: 'center'}}>Playlist</Text>
         <AppbarIcon name="settings" size={30} />  
      </View>
      <View style={styles.Picture}>
          <Image 
            style={{
               width: 300,
               height: 300,
            }}
            source={{
               uri:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
            }}
          />
         <Text style={{fontSize: 30}}> Song Title </Text>
         <Text>Song Artist</Text>
      </View>
      
      <View style={styles.BotNav}>
         <PlayerIcon name="play-forward" size={50} />
         <PlayerIcon.Button
            name="play" 
            size={50}
            onPress={() => HelloWorld()}
         >
         </PlayerIcon.Button> 
         <PlayerIcon name="play-back-sharp" size={50} />
      </View>
    </View>
  );
};

export default Musicplayer;

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: "center",
   },
   
   Appbar:{
      flexDirection: "row",
      paddingTop: 40
   },
   
   Picture:{
      paddingBottom: 20,
      paddingTop: 20   
   },

   BotNav:{
      paddingTop: 20,
      flexDirection: "row"
   },

   progressBar:{
      paddingBottom: 20
   }
});