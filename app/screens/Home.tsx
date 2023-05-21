import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, useAuht } from '../context/AuthContext';
import axios from "axios";

export default function Home() {

    useEffect(()=>{
        const testCall = async ()=>{
           const result = axios.get(`${API_URL}/users`);
           console.log("demee",result)
        }
        testCall();
    },[]);
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}