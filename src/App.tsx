import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import CreateRequest from './pages/CreateRequest'
import ListRequests from './pages/ListRequests'

function App() {
  return (
	  <Routes>
		<Route index element={<Home />} />
		<Route path='/login' element={<Login />} />
		<Route path='/register' element={<Register />} />
		<Route path='/dashboard' element={<Dashboard />} >
			<Route path='create' element={<CreateRequest />} />
			<Route path='available' element={<ListRequests />} />
		</Route>
	  </Routes>     

  )
}

export default App
