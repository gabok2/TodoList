import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#191919",
    padding:24,
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    position:"relative",
    bottom:55,
  },
  input:{
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 6,
    padding:16,
    flex:1,
    marginRight: 5,
    fontSize: 16,
    color: "#fff",
    borderColor: "#0D0D0D",
    borderWidth: 1,
 
    
  },
  button:{
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  count:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

  },
  countCriadas:{
    flexDirection: "row",
    alignItems: "center",

  },
  criadas:{
    color: "#4EA8DE",
    marginRight: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  countCriadasNumber:{
    backgroundColor: "#333333",
    paddingLeft:8,
    paddingRight:8,
    paddingTop:2,
    paddingBottom:2,
    borderRadius:999,
    alignItems: "center",
    justifyContent: "center",

  },
  criadasNumber:{
    color: "#fff",

  },
  countConcluidas:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  concluidas:{
    color: "#8284FA",
    marginRight: 5,
    fontSize: 14,
    fontWeight: "bold",

  },
  countConcluidasNumber:{
    backgroundColor: "#333333",
    paddingLeft:8,
    paddingRight:8,
    paddingTop:2,
    paddingBottom:2,
    borderRadius:999,
    alignItems: "center",
    justifyContent: "center",
  },
  concluidasNumber:{
    color: "#fff",
  },
  linha:{
    marginTop: 20,
    width: 350,
    height: 1,
    backgroundColor: "#333333",
  },
  emptyContainer:{
    

  },
  main:{
    paddingTop: 48,
    alignItems: "center",
    justifyContent: "center",

  },
  emptyText:{
    paddingTop: 16,
    color: "#808080",
    fontSize: 16,
    fontWeight: "bold",

  },
  emptyTextSecond:{
    color: "#808080",
    fontSize: 15,
   

  }

 
})