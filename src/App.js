import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import EmpListing from './empListing';
import EmpCreate from './empCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './empDetail';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD operation.</h1>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<EmpListing></EmpListing>}></Route>
          <Route path = '/posts/create' element = {<EmpCreate></EmpCreate>}></Route>
          <Route path = '/posts/edit/:empID' element = {<EmpEdit></EmpEdit>}></Route>
          <Route path = '/posts/detail/:empID' element = {<EmpDetail></EmpDetail>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
