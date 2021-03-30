import React from 'react'
import { View ,Text,Image,StyleSheet,  TextInput, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <>
    <View>
      <ScrollView>
    
    <View style={styles.header}>
   
    <Text style={styles.text}>Request Verification</Text>
    </View>
   
    <View>
      <Text style={styles.tex}>
      From one of your health Care providers / 
      </Text>
      <Text style={styles.tex}>
      Ethical Data Partners
      </Text>
     
      
    </View>
    <View style={{padding:10}}>
    <View style={styles.both}>
    
    <View>
    <Image source={{uri:"https://images.unsplash.com/photo-1543080853-556086153871?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFuJTIwZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} style={styles.img}/>
    </View>
    <View style={styles.texts}>
    <Text style={{fontWeight:'bold',color:"#48575E",fontSize:17}}>Dr.Rivera</Text>
    <Text style={{ color:"#6A767D"}}>Pediacitrion</Text>
    <Text  style={{ color:"#6A767D"}}>Healthy Children</Text>
    </View>
    
    </View>

    <View style={styles.both}>
    <View style={{}}>
    <Image source={{uri:"https://images.unsplash.com/photo-1596199757746-4d68503325ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} style={styles.img}/>
    </View>
    <View style={styles.texts}>
    <Text  style={{fontWeight:'bold',color:"#48575E",fontSize:17}}>Dr.Martinez</Text>
    <Text  style={{ color:"#6A767D"}}>MD</Text>
    <Text  style={{ color:"#6A767D"}}>Healthy Children</Text>
    </View>
    
    </View>

    <View style={styles.boths}>
      <View>
        <Text style={{fontSize:15,marginLeft:40,color:"#48575E"}}>By</Text>
        <Text style={{fontSize:15,color:"#48575E"}}>Genuis Care Id</Text>
      </View>
      <View  style={{height:45,flexDirection:"row",paddingLeft:20,borderWidth:1,borderColor:"#DDE1E3",borderRadius:6,width:190}}>
        <TextInput 
         
        placeholder="Enter Access Code"

        />
      <View style={{}}>
        <Icon style={{marginTop:-3}}
    name="checksquare"
    color="#4191CC"
    size={50}
    />
    </View>
    </View>
      
    </View>

    <View>
      <Text style={{textAlign:'center',fontSize:15,marginTop:15, color:"#5A6163"}}>Or send a email or text your Doctor</Text>
    </View>
    <View style={{ marginTop:10,marginLeft:18}}>
      <Text style={styles.big}>Email</Text>
        <TextInput
        placeholder="Enter Your Email"
style={{paddingLeft:20,borderWidth:1,marginRight:18,borderRadius:6,borderColor:"#DDE1E3",height:50}}
        />
      </View>
      <View style={{ marginTop:10,marginLeft:18}}>
      <Text style={styles.big}>Mobile Phone Number</Text>
        <TextInput
        style={{paddingLeft:20,borderWidth:1,marginRight:18,borderRadius:6,borderColor:"#DDE1E3",height:50}}
        placeholder="Enter Mobile Phone Number"

        />
      </View>
      <View>
      {/* <Button style={{}}
        title="Send Request"
        // onPress={() => Alert.alert('Simple Button pressed')}
     /> */}
     <TouchableOpacity style={{backgroundColor:'#0390CC',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:'60%',alignSelf:'center',marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold"}}>Send Request</Text>
     </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
   </>
   )}
   

      
    
const styles=StyleSheet.create({
  header:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:12,
    backgroundColor:"#00B8E0",
    marginBottom:15
    
  },
  img:{
    width:60,
    height:60,
    borderRadius:60/2,
    marginLeft:10,
    // marginTop:10
  },
  both:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:15,
    padding:10,
    elevation:2,
    marginBottom:5,
    marginTop:5,
    // marginRight:20

    // justifyContent:'center'
  },
  boths:{
    flexDirection:'row',
    marginLeft:0,
    justifyContent:'space-evenly',
    marginTop:5,
    padding:14,
    elevation:5,
    backgroundColor:"white",
    borderRadius:10
  },
  tex:{
    marginLeft:20,
    fontSize:18,
    color:"#B7BCBD"
    
  },
  texts:{

    // marginTop:10,
    marginLeft:20,
    
  },
  text:{
    fontSize:20,
    color:"white"
    
  },
  big:{
    fontSize:17,
    marginBottom:3,
    color:"#797F81"
  }
 
})

export default App;
