import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [{
  id: 1,
  label: 'Conta de luz',
  value: '325,00',
  date: '15/03/2023',
  type: 'expense'
}, {
id: 2,
label: 'Salário',
value: '4.000,00',
date: '10/03/2023',
type: 'revenue'
}, {
  id: 3,
  label: 'Pix Cliente',
  value: '1.000,00',
  date: '08/03/2023',
  type: 'revenue'
}]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Marcelo Gomes"/>
      <Balance balance="4.500,00" expanses="-325,00"/>
      <Actions />
      <Text style={styles.title}>Ultimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 14,
    marginBottom: 24
  },
  list: {
     marginHorizontal: 14
  }
});