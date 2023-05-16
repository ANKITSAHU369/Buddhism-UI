import { icon_1, icon_3, icon_4 } from "../assets";

const SourcesSection = () => {
  return (
    <div id="sourcesSectionId" className="sourcesContainer">
      <div className="sourcesHeading">Sources</div>

      <div className="sourcesWrapper">
        <div className="sources">
          <img src={icon_1} className="sourcesIcons" alt="icon_1"/>
          <h2>Four Truths, Four Vows</h2>
          <p style={{ height: "120px" }}>
            One of the attractive ideas to come out of Stephen Batchelor’s
            recent teaching is a mapping of the Four Noble Truths onto the Four
            Bodhisattva Vows of the Zen tradition, a concept Batchelor got from
            former Zen priest and current Vipassana teacher Gil Fronsdal.
          </p>
          <a
            href="https://secularbuddhism.org/four-truths-four-vows/"
            target="_blank"
            rel="noreferrer"
            className="sourcesLink"
          >
            Read more
          </a>
        </div>
        <div className="sources">
          <img src={icon_4} className="sourcesIcons" alt="icon_2"/>
          <h2>List of Buddha claimants</h2>
          <p style={{ height: "120px" }}>
            This is a list of notable people who have claimed to have attained
            enlightenment and become buddhas, claimed to be manifestations of
            bodhisattvas, identified themselves as Gautama Buddha or Maitreya
            Buddha, or been honored as buddhas or bodhisattvas.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/List_of_Buddha_claimants"
            target="_blank"
            rel="noreferrer"
            className="sourcesLink"
          >
            Read more
          </a>
        </div>

        <div className="sources">
          <img src={icon_3} className="sourcesIcons" alt="icon_3"/>
          <h2>Voice of Courage and Hope</h2>
          <p style={{ height: "120px" }}>
            Every year since 1983, Daisaku Ikeda, as the SGI president, has
            issued a peace proposal, exploring the interrelation between core
            Buddhist concepts and the diverse challenges global society faces.
          </p>
          <a
            href="https://www.worldtribune.org/peace-proposal/"
            target="_blank"
            rel="noreferrer"
            className="sourcesLink"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default SourcesSection;
