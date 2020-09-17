import React from 'react'
import FormLogin from './components/FormLogin'
import Navigator from './components/Navigator'

function App() {
  if (localStorage.getItem('Token') && localStorage.getItem('rol')){
    return <Navigator />
  }else{
    return <FormLogin />
  }
}

export default App;
