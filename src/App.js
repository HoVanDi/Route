import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home.jsx';
// import { BrowserRouter as Routes , Route} from 'react-router-dom';
// path đại diện cho đường dẫn và element chứa component tương ứng sẽ được hiển thị khi đường dẫn trùng khớp.
// Route được sử dụng để định nghĩa các route cụ thể
import { Routes,Route} from "react-router-dom"; //Routes và Route: Đây là các thành phần được import từ thư viện 'react-router-dom'
import './App.css';
import Index from './components/Index';

function App() {
  return (
    <div>
      <Index></Index>
    <Routes>
                <Route exact path='/Home' element={<Home/>}></Route> 
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/About' element={<About/>}></Route>
        </Routes>
        <p>Rối loạn Thầy Đình</p>
        </div>
  );
}

export default App;
