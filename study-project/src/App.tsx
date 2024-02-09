import './App.scss'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import Orders from "./pages/Orders.tsx";
import RHF from "./pages/RHF.tsx";
import FramerMotion from "./pages/FramerMotion.tsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='rhf' element={<RHF/>}/>
          <Route path='framer_motion' element={<FramerMotion/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
