import {Route, Routes} from 'react-router-dom'
import './App.css'
import { LoginPage } from './components/auth/login';
import TodoWrapper from './components/TodoWrapper';
import PrivateRoute from './utils/router/privateRoute';



function App() {
  return (
    <Routes>
     <Route element={<PrivateRoute
     />}>
      <Route path='/' element={<TodoWrapper/>}/>
     </Route>
     <Route path='login' element={<LoginPage/>}/>

    </Routes>
    
    
  )
}

export default App;
