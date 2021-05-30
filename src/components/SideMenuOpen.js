import { RiMenuFoldLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaSignal } from "react-icons/fa";
import { BiLayer } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import LogoWhiteUserpilot from "../images/LogoWhiteUserpilot.png";

const SideMenuOpen = ({ className, onClick }) => {
  return (
    <div className={className}>
      <div className="smo1">
        <img
          className="userpilotlogo"
          style={{ width: "35%" }}
          src={LogoWhiteUserpilot}
        />
        <RiMenuFoldLine
          className="closemenu"
          size="1.2rem"
          onClick={() => {
            onClick();
          }}
        />
      </div>

      <div className="smo2">
        <div>
          <FiUsers className="smo" />
          <span className="spansmo">PEOPLE</span>
          <IoIosArrowUp className="arrowup" size="1.5rem" />
        </div>

        <ul className="smopeople">
          <li>Users</li>
          <li>Companies</li>
          <li>Segments</li>
        </ul>
      </div>

      <div className="smo3">
        <FaSignal className="smo" />
        <span className="spansmo">GROWTH INSIGHTS</span>
        <IoIosArrowForward className="arrowforward" />
      </div>
      <div className="smo4">
        <BiLayer className="smo" />
        <span className="spansmo">ENGAGEMENT LAYER</span>
        <IoIosArrowForward className="arrowforward" />
      </div>
      <div className="smo5">
        <FiClock className="smo" />
        <span className="spansmo">NPS</span>
      </div>
      <div className="smo6">
        <FiSettings className="smo smset" />
        <span className="spansmo">CONFIGURE</span>
      </div>
      <div className="avatarOpen">
        <div className = "personalAvatar">JR</div>
        <div className="spanOnetwo">
          <span className="spanOne"> John Roosevelt </span>
          <span className="spanTwo">John@gmail.com</span>
        </div>
        <div className="arrowforward email">
        <IoIosArrowForward  />
      </div>
      </div>
     
    </div>
  );
};

export default SideMenuOpen;
