import { Text, View, StyleSheet } from "react-native";

const dados = [
  {
    id: 1,
    nome: "Hyoran",
    cargo: "Monitor"
  },
  {
    id:2,
    nome: "Gabriel",
    cargo: "Aluno"
  }
]

export default function Index() {
  return (
    <View
     style={style.container} >
    
    {
      dados.map(item => (
          <Text>{item.nome}</Text>
      ))
    }

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
