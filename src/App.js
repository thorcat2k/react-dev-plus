import "./App.css";
import Common from "./Components/Common/Common";
import Receive from "./Components/Receive/Receive";
import Campus from "./Components/Campus/Campus";

import Review from "./Components/Review/Review";
import AboutDev from "./Components/AbouDev/AboutDev";
import Navbar from "./Components/Navbar/Navbar";



function App() {
  return (
    <>
      <Navbar/>

      <AboutDev />
      <Receive />
      <Campus />

      <Common />
      <Review />
    </>
  );
}

export default App;
