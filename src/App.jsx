import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserAppBar from './User/Layout'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './User/Home/Home '
import About from './User/About/About'
import UserLayout from './User/Layout'
import SingleBlog from './User/Blog/SingleBlog'
import AdminLayout from './Admin/AdminLayout'
import AdminBlogs from './Admin/Home/AdminBlogs'
import AddBlog from './Admin/Blog/AddBlog'
import EditBlog from './Admin/Blog/EditBlog'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <BrowserRouter>
      <Routes>
        <Route Path="/" element={<UserLayout />}>
         <Route path="" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="blog/:id" element={<SingleBlog />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout/>}>
         <Route path="home" element={<AdminBlogs />} />
          <Route path="add" element={<AddBlog />} />
          <Route path="edit/:id" element={<EditBlog />} />
        </Route>
      </Routes>
      {/* admin layout starts */}
     

     </BrowserRouter>
    
    </>
  );
}

export default App
