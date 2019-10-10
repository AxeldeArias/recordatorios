import React from 'react';
import { Modal,TextInput, StyleSheet, Text, View, FlatList} from 'react-native';
import item from './item'
import Button from './Button'
import datos from './Datos';

export default class App extends React.Component {
  state = {
    data : datos,
    isVisible: false
  }
  
  handlePress = () =>{
    this.setState({isVisible:true});

  }
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
      <View style = {[styles.container,styles.center] }>
        <Text style={styles.modalTitle}>Ingrese su recordatorio</Text>
        <TextInput style = {styles.input}></TextInput>
      </View>
      </Modal>

    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center'
  },
  input:{
    borderWidth: 1,
    borderRadius:4,
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
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
});
