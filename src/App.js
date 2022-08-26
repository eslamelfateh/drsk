import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassRoom from "./pages/ClassRoom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Teacher from "./pages/Teacher";


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/classroom" element={<ClassRoom />} />
      </Routes>
    </div>
  );
}

export default App;
