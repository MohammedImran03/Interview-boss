import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<WelcomePage/>}/>
<Route path='/home' element={<Home/>}/>
    </Routes>  
    </BrowserRouter>
  );
}

export default App;
