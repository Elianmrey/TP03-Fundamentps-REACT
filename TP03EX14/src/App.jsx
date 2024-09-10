import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
function App() {


  return (
    <>
      <ProfileCard name='Jhon Carter'  email='email2@example.com' />
      
      <ProfileCard name='King Arthur' age={18} email='email2@example.com' tel='(+55) 859586585' address='Alameda dos bandeirantes.' />
    </>
  )
}

export default App
