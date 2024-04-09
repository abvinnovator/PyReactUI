import Input from "./normal/Input"
import Shape from "./numpy/Shape"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/shape" element={<Shape />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
