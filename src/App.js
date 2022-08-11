import "./App.css";
import Common from "./Components/Common/Common";
import Receive from "./Components/Receive/Receive";
import Campus from "./Components/Campus/Campus";
import Review from "./Components/Review/Review";
import AboutDev from "./Components/AbouDev/AboutDev";
import Admission from "./Components/Admission/Admission";

function App() {
  return (
    <>
      <AboutDev />
      <Receive />
      <Campus />
      <Admission />
      <Common />
      <Review />
    </>
  );
}

export default App;
