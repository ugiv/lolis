import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import { Routes, Route } from 'react-router-dom';
import Signup from './screens/Signup';
import Layout from './screens/Layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
