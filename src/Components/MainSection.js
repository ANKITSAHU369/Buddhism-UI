import { useEffect, useState } from "react";
import { main_section_cover } from "../assets/index";

const MainSection = ({ vow, setVow }) => {
  const [vows, setVows] = useState({});

  useEffect(() => {
    vow &&
      setVows({
        vow1: (
          <div className="sample">
            Creations are numberless, <br />I vow to free them.
          </div>
        ),
        vow2: (
          <div className="sample">
            Delusions are inexhaustible,
            <br /> I vow to transform them.
          </div>
        ),
        vow3: (
          <div className="sample">
            Reality is boundless, <br /> I vow to perceive it.
          </div>
        ),
        vow4: (
          <div className="sample">
            The awakened way is unsurpassable,
            <br /> I vow to embody it.
          </div>
        ),
      });
    setVow(false);
    // eslint-disable-next-line
  }, [vow]);

  const handleOtherWayClick = () => {
    setVows({
      vow1: (
        <p className="sample">
          Living beings are limitless,
          <br /> I vow to liberate them all.
        </p>
      ),
      vow2: (
        <p className="sample">
          Blind passions are limitless,
          <br /> I vow to sever them all.
        </p>
      ),
      vow3: (
        <p className="sample">
          Dharma gates are inexhaustible,
          <br /> I vow to know them all.
        </p>
      ),
      vow4: (
        <p className="sample">
          Unsurpassed is awakening,
          <br /> I vow to realize it.
        </p>
      ),
    });
  };

  const handleLaymenWayClick = () => {
    setVows({
      vow1: <span className="sample">To save all people</span>,
      vow2: <span className="sample">To renounce all worldly desires</span>,
      vow3: <span className="sample">To learn all teachings</span>,
      vow4: <span className="sample">To attain perfect enlightenment</span>,
    });
  };

  return (
    <div className="mainSection" id="mainSectionId">
      <br />
      <div className="evidenceWrapper">
        <p className="evidenceHeading">
          In current Buddhist society, the top Buddhist role models have iron
          wills, but lack real ACTION or PURPOSE behind this because of a
          misinterpretation of Dharma. Buddha’s four main vows tell a different
          story of how the Buddha should act.
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: "55vh",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div className="vowsWrapper">
          <div className="vows vowsLeft">{vows.vow1}</div>
          <div className="vows vowsLeft">{vows.vow2}</div>
        </div>
        <img src={main_section_cover} className="mainCoverImage" alt="mainSection"/>
        <div className="vowsWrapper">
          <div className="vows vowsRight">{vows.vow3}</div>
          <div className="vows vowsRight">{vows.vow4}</div>
        </div>
      </div>

      <div className="vowsBtnWrapper">
        <button className="vowsBtn" onClick={handleOtherWayClick}>
          Said in other way!
        </button>
        <button className="vowsBtn" onClick={handleLaymenWayClick}>
          In most leymen terms!
        </button>
      </div>
    </div>
  );
};

export default MainSection;
