import "./App.css";
import Common from "./Components/Common/Common";
import Receive from "./Components/Receive/Receive";
import Campus from "./Components/Campus/Campus";
import Review from "./Components/Review/Review";
import AboutDev from "./Components/AbouDev/AboutDev";
import Admission from "./Components/Admission/Admission";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <AboutDev />
      <Receive />
      <Campus />
      <Admission />
      <Common />
      <Review />
      <Footer/>
    </>
  );
}

export default App;
