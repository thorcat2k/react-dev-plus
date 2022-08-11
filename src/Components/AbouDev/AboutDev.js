import "./AboutDev.css";
const dataAboutDev = [
  { content: "Apply Devplus" },
  { content: "Testing and Interview" },
  { content: "1st plus (+) campus" },
  { content: "2nd plus (++) campus" },
  { content: "Onboard & start your career" },
];
function AboutDev() {
  return (
    <div className="container-hero hero">
      <div className="hero">
        <div className="hero-right">
          <h4 className="ti fade-up ">Road to be a devplus</h4>
          <ul className="part">
            {dataAboutDev.map((item, index) => (
              <li className="fade-up" key={index}>
                <div className="num">
                  <span>{index + 1}</span>
                </div>
                <div className="content">{item.content}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-left fade-up">
          <div className="author">ABOUT DEVPLUS</div>
          <h2 className="title">
            The Fact: Skilled labour shortage for software companies but full of
            freshers and low level juniors
          </h2>
          <div className="text">
            Our responsibility is filling the gap between the quality of
            graduate students and the quality of engineers. Devplus will help
            reducing the cost of re-training and accelerating the skill-up
            progress of students and freshers.
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutDev;
