import React from 'react';
import { Modal,TextInput, StyleSheet, Text, View, FlatList} from 'react-native';
import {item,Button} from './componentes'

export default class App extends React.Component {
  state = {
    data : [],
    isVisible: false,
    text : ""
  }
  
  handlePress = () =>{ 
    this.setState({isVisible:true}); 
  } 
  handleSave = () =>{
    const {text,data} = this.state;
    const datos = [{key: Math.random().toString(),title: text}].concat(data)
    this.setState({
      data:datos,
      isVisible:false,
      text:""
    })

  }
  handleChange = text => this.setState({text})
  
  
  render(){
    const {data} = this.state;
    return (
    <View style={[styles.container,styles.gray]}>
      <View style = {styles.header}>
        <Text style = {styles.title}>
          Recordatorios </Text>
      </View>
      <View style = {styles.view}>
        <Button title ='Agregar'
        onPress={this.handlePress}/>
      </View>
      <FlatList data = {data} 
      renderItem= {item}/>

      <Modal animationType='slide' visible = {this.state.isVisible}> 
        <View style = {[styles.container,styles.center]}>
          <Text style={styles.modalTitle}>Ingrese su recordatorio</Text>
          <TextInput 
            onChangeText = {this.handleChange} 
            style = {styles.input}
            placeholder = "Recordatorio.."
            value = {this.state.text}
          />
          <Button  title ='Guardar' onPress={this.handleSave}/> 
        </View>
      </Modal>

    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  gray:{
    backgroundColor:'#eee',
  },
  modalTitle:{
    fontSize: 28
  },
  center:{
    justifyContent: 'center',
    alignItems:'center'
  },
  input:{
    width:'90%',
    borderWidth: 1,
    borderRadius: 4,
    padding: 15
  },
  header:{
    height:100,
    borderBottomWidth:1,
    borderBottomColor: '#ddd'
  },
  title:{ 
    textAlign:'center',
    marginTop: 50,
    fontSize:28

  },
  view:{
    margin: 15,
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }
});
