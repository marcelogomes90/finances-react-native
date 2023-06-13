import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({ balance, expanses }) {
  return(
    <View style={styles.container}>

      <View>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
      
      <View>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expanses}>{expanses}</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 22,
    marginTop: -16,
    marginHorizontal: 14,
    borderRadius: 4,
    zIndex: 99
  },
  itemTitle: {
    fontSize: 20,
    color: '#aaaaaa'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencySymbol: {
    color: '#aaaaaa',
    marginRight: 4
  },
  balance: {
    fontSize: 22,
    color: '#2ecc71'
  },
  expanses: {
    fontSize: 22,
    color: '#e74c3c'
  }
})