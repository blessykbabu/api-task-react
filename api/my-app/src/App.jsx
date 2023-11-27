import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './axios.css'
import AxiosComponent from './component/axios'
import Frm from './component/frm'
import Form from './component/FormComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <AxiosComponent/>   */}
     {/* <Frm/>  */}
     <Form/>
     </>
  )
  }
export default App
