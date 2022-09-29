import './App.css'
import CakeView from './features/cake/CakeView'
import UserView from './features/user/UserView'
import IcecreamView from './features/icecream/IcecreamView'

function App() {

  return (
    <div className="container">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  )
}

export default App
