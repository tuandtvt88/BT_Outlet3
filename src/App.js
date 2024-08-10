import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Main} from "./dulieu3/Main";
import {Cart} from "./dulieu3/Cart";
import {Login} from "./dulieu3/Login";
import {Detail} from "./dulieu3/Detail";
import {Register} from "./dulieu3/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Main/>}>
            <Route path={'cart'} element={<Cart/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'detail'} element={<Detail/>}/>
            <Route path={'register'} element={<Register/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
