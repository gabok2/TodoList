import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container:{
    width: 327,
    
    minHeight: 64,
   borderRadius: 8,
   backgroundColor: '#262626',
   marginTop: 8,
   
  },
  main:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    
  },
  button:{
    width: 20,
    height: 20,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  
   
  },
  buttonSelect:{
    
    backgroundColor: "#5E60CE",
  },
  buttonUnselect:{
    borderColor: "#4EA8DE",
    borderWidth: 1,
  },

  textSelect:{
    color: "#808080",
    fontSize: 14,
    paddingLeft: 10,
    textDecorationLine: 'line-through',
  },
  textUnselect:{
    color: "#fff",
    fontSize: 14,
    paddingLeft: 10,
  },
  lixeira:{
   paddingLeft: 10,
    
  }
})