import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/ui/InputField.jsx'
import Button from './components/ui/Button.jsx'
import TextLink from './components/ui/TextLink.jsx'


function App() {

  return (
    <>
      <Button> Hello </Button>
      <InputField type="email" placeholder="Email"/>
      <InputField type="password" placeholder="password"/>
      <TextLink href="https://www.google.com">Google</TextLink>
    </>
  )
}

export default App
