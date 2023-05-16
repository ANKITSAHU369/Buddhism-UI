const Navbar = ({ navClass, setNavClass, setVow, setOpenSecion }) => {
  return (
    <div className={`navbarContainer ${navClass}`}>
      <ul>
        <li>
          <a
            href="#"
            onClick={() => {
              setNavClass("navbarDec");
            }}
          >
            Landing
          </a>
        </li>
        <li>
          <a
            href="#mainSectionId"
            onClick={() => {
              setOpenSecion(true);

              setNavClass("navbarDec");
              setVow(true);
            }}
          >
            4 Vows
          </a>
        </li>
        <li>
          <a
            href="#preceptsSectionId"
            onClick={() => {
              setOpenSecion(true);
              setNavClass("navbarDec");
            }}
          >
            10 Precepts
          </a>
        </li>

        <li>
          <a
            href="#conclusionContainerId"
            onClick={() => {
              setOpenSecion(true);
              setNavClass("navbarDec");
            }}
          >
            Conclusion
          </a>
        </li>
        <li>
          <a
            href="#sourcesSectionId"
            onClick={() => {
              setOpenSecion(true);
              setNavClass("navbarDec");
            }}
          >
            Sources
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
