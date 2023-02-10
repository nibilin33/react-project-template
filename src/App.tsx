import { useEffect, useState } from 'react'
import './App.css'
import {i18n,i18nConfig} from './i18n/index';
import React from 'react';
function App() {
  const [data,setData] = useState({});
  useEffect(()=>{
    fetch('/api/user').then(async (res)=>{
      const result = await res.json();
      setData(result);
    });
  },[]);
  return (
    <div className="App">
      <button onClick={()=>{
        i18nConfig.locale = 'en';
      }}>English</button>
      <button  onClick={()=>{
        i18nConfig.locale = 'zh';
      }}>中文</button>
      <div>{i18n('hello world')}</div>
      <div>{i18n('hello world 2')}</div>
      <div>{i18n('enter')}</div>
      <div>{i18n('test')}</div>
      <div>{i18n('test2')}</div>
      <p>Mock Data</p>
      <h5>{JSON.stringify(data)}</h5>
    </div>
  )
}

export default App
