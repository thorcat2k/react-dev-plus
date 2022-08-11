import "./App.css";
import Common from "./Components/Common/Common";
import Receive from "./Components/Receive/Receive";
import Campus from "./Components/Campus/Campus";
import Review from "./Components/Review/Review";
import AboutDev from "./Components/AbouDev/AboutDev";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <AboutDev />
      <Receive />
      <Campus />
      <Common />
      <Review />
      <Footer/>
    </>
  );
}

export default App;
