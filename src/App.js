import { BrowserRouter, Route, Routes } from 'react-router-dom';


import { Feed, VideoDetail, SearchFeed, Login, Register} from './components';
import ProtectedRoutes from './Services/ProtectedRoutes';


const App = () => (
    <BrowserRouter>    
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='/' element={<ProtectedRoutes/>}/>
        <Route exact path='/home' element={<Feed/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );

export default App