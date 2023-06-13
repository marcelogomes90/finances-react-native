import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Movements({ date, label, type, value }) {
  const [showValue, setShowValue] = useState(false);

  return(
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>

      <Text style={styles.date}>{date}</Text>

      <View style={styles.content}>

        <Text style={styles.label}>{label}</Text>
        { showValue ? (
          <Text 
            style={type === 'expense' ? styles.expense : styles.revenue}
          >
            {type === 'expense' ? `R$ -${value}` : `R$ ${value}`}
          </Text>
        ) : (
          <View style={styles.skeleton}/>
        )}
        
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8
  },
  date: {
    color: '#aaaaaa',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  revenue: {
    fontWeight: 'bold',
    color: '#2ecc71',
    fontSize: 16
  },
  expense: {
    fontWeight: 'bold',
    color: '#e74c3c',
    fontSize: 16
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#aaaaaa',
    borderRadius: 8
  }
})