import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import BookmarksScreen from './components/BookmarksScreen'
import JobCardDetails from './components/JobCardDetails'
import './App.css'

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
    <Route exact path = '/'element={<Home/>} />
    <Route path = "/page" element={<BookmarksScreen/>}/>
    <Route path="/job/:id" element={<JobCardDetails/>} />
    </Routes>
  </BrowserRouter>
  )
}


export default App
