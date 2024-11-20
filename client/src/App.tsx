import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook />}/>
      <Route path='/books/delete' element={<DeleteBook />}/>
      <Route path='/books' element={<ShowBook />}/>
      <Route path='/books/edit' element={<EditBook />}/>
    </Routes>

    
  )
}

export default App
