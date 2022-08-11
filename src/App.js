import "./App.css";
import Common from "./Components/Common/Common";
import Receive from "./Components/Receive/Receive";
import Campus from "./Components/Campus/Campus";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Receive/>
      <Campus/>
      <Common />
    </>
  );
}

export default App;
