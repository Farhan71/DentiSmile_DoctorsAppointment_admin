import "./App.css"
import {
  BrowserRouter as Router, Routes, 
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./Components/Dashboard/AllPatients/AllPatients";
import AdminSettings from "./Components/Dashboard/AdminSettings/AdminSettings";
import Login from "./Components/Dashboard/Login/Login";
import AllDoctors from "./Components/Dashboard/AllDoctors/AllDoctors";

function App() {
  let loggedInUser = {name:"", email:"", error:""}
  
  if (sessionStorage.length !== 0) {
    let user;
    user = JSON.parse(sessionStorage.user);
    loggedInUser.name = user.name
    loggedInUser.email = user.email
    loggedInUser.error = user.error

  }
  
  
  return (
    <div className="App">
       <Router>
        <Routes>
          
          <Route path="/" element={ <Login/> }> </Route>

          <Route path="/login" element={<Login/>}> </Route>

          <Route path="/dashboard" element={loggedInUser.name==="" ? <Login/>:<Dashboard/>}> </Route>

          <Route path="/doctors" element={loggedInUser.name==="" ? <Login/>:<AllDoctors></AllDoctors>}> </Route>

          <Route path="/allPatients" element={loggedInUser.name==="" ? <Login/>:<AllPatients/>}> </Route>

          <Route path="/adminSettings" element={ loggedInUser.name==="" ? <Login/>:<AdminSettings/>}> </Route>
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
