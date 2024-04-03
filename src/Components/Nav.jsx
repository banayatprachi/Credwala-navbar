
import { menulist } from "../Menulist";
import MenuItems from "./Menuitems";
const Nav = () => {
  return (
    <nav>
      <ul className="menus">
        {" "}
        {menulist.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}{" "}
      </ul>{" "}
    </nav>
  );
};

export default Nav;

