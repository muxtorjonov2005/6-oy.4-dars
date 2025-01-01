import React from 'react'
import './App.css'
import NameForm from './components/NameForm'
import ReverseText from './components/ReverseText'
import PasswordField from './components/PasswordField'
import ColorPick from './components/ColorPick'
import UserForm from './components/UserForm'
import AddInputs from './components/AddInputs'
import VotingForm from './components/VotingForm'
import Calculator from './components/Calculator'
import FormWithValidation from './components/FormWithValidation'
// import FormWithAgreement from './components/FormWithAgreement'

function App() {
  return (
    <div className='container'>
      <NameForm/>
      <ReverseText/>
      <PasswordField/>
      <ColorPick/>
      <UserForm/>
      <AddInputs/>
      <VotingForm/>
      {/* <Calculator/> */}
      <FormWithValidation/>
      {/* <FormWithAgreement/> */}
    </div>
  )
}

export default App