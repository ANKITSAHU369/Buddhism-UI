import { buddhaCover } from "../../src/assets/index";

const LandingSection = ({ setVow, setOpenSecion }) => {
  return (
    <div style={{ height: "100vh", background: "#ececec" }}>
      <div className="coverImageContainer">
        <img src={buddhaCover} className="coverImage" alt="landing"/>
        <div className="headingWrapper">
          <div className="heading left">Effective</div>
          <div className="heading right">Buddhism</div>
        </div>
      </div>
      <div className="bottomWrapper">
        <div className="thesisWrapper">
          <p
            style={{
              fontSize: 35,
              margin: "15px 0",
              fontWeight: 400,
              textDecoration: "underline",
            }}
          >
            Thesis
          </p>
          <p style={{ fontSize: 18 }}>
            Buddhism is an amazing philosophy full of wisdom with great truths,
            however I believe Buddhists have lost the way of the Buddha and lack
            a real basis of impact. Effective Buddhism is a solution to those
            who seek to follow the Buddhist Path as Buddha Wanted. If Buddha was
            alive today, imagine the amount of change and impact he would be
            having.
          </p>
        </div>
        <div className="exploreBtn">
          <a
            href="#mainSectionId"
            onClick={() => {
              setOpenSecion(true);
              setVow(true);
            }}
          >
            Explore more
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
