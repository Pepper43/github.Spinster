import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.navigate('WelcomePage')}>
        <Text style={styles.backBtnText}>←</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username or Email</Text>
          <TextInput style={styles.input} placeholder='Username or Email'/>
            <TouchableOpacity style={styles.clearBtn} onPress={()=>setRetypePassword("")}>
              <Text style={styles.clearnBtnText}>✖</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input} placeholder='Password'/>
            <TouchableOpacity style={styles.clearBtn} onPress={()=>setRetypePassword("")}>
              <Text style={styles.clearnBtnText}>✖</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dontHaveBtn} onPress={()=>navigation.navigate('SignUp')}> 
          <Text style={styles.dontHaveText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#7D0AD1",
    flex:1,
  },
  contentContainer:{
    backgroundColor:"#4B0082",
    position:'absolute',
    borderRadius:50,
    width:412,
    height:755,
    left:0,
    top:195
  },
  headerText:{
    color:"#fff",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    marginVertical:35,
  },
  inputContainer:{
    width:"80%",
    alignSelf:'center',
    marginBottom:20,
    position:'relative',
  },
  input :{
    width:"100%",
    paddingVertical:15,
    paddingHorizontal:20,
    backgroundColor:'#fff',
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    fontSize:15,
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  inputLabel:{
    fontSize:15,
    fontWeight:'regular',
    color:"#fff",
    marginBottom:10,
  },
  dontHaveBtn:{
    margin:20,
  },
  dontHaveText:{
    color:"#fff",
    fontSize:15,
    textAlign:'center',
    fontWeight:'400',
  },
  loginBtn:{
    backgroundColor:"#FFCC00",
    borderRadius:15,
    paddingVertical:15,
    paddingHorizontal:25,
    alignSelf:'center',
    marginTop:20,
    shadowColor:"#000",
    shadowOffset:{width:0, height:4},
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:5,
  },
  btnText:{
    color:"#000",
    fontWeight:'bold',
    fontSize:20,
  },
  clearBtn:{
    position:'absolute',
    right:15,
    top:'63%',
    transform:[{translateY: -10}],
    width:24,
    height:24,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  },
  clearnBtnText:{
    color:"#000",
    fontSize:15,
  },
  backBtn:{
    marginLeft:10,
  },
  backBtnText:{
    fontSize:50,
    color:"#fff"
  },
})