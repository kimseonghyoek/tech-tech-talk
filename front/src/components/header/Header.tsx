import { Desktop, Tablet } from "../../util/responsive";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import HeaderItem from "./HeaderItem";
import { checkLogin, showItem } from "../../recoil/store";
import CustomHeader from "./style";
import axios from "axios";
import LocalStorage from "../../util/localstorage";
import DropDown from "../dropdown/DropDown";

function Header() {
  const public_url = process.env.PUBLIC_URL;
  const movePage = useNavigate();

  // state
  const [show_item, setShow] = useRecoilState<boolean>(showItem);
  const [check_login, setLogin] = useRecoilState<boolean>(checkLogin);

  const changeShowItem = () => {
    setShow(!show_item);
    console.log(show_item);
  };

  return (
    <CustomHeader>
      <div className="top-item">
        <Link to="/comm">
          <p>커뮤니티</p>
        </Link>
        <Link to="/used">
          <p>중고거래</p>
        </Link>
      </div>
      <div className="main">
        <Desktop>
          <>
            <Link to="/comm">
              <img src={`${public_url}/imgs/ttt.png`} alt="logo" />
            </Link>
            <ul>
              <Link to={"/comm/softwares"}>
                <li>
                  <p>소프트웨어</p>
                </li>
              </Link>
              <Link to={"/comm/keyboard"}>
                <li>
                  <p>키보드</p>
                </li>
              </Link>
              <Link to={"/comm/mouse"}>
                <li>
                  <p>마우스</p>
                </li>
              </Link>
              <Link to={"/comm/pc"}>
                <li>
                  <p>PC 부품</p>
                </li>
              </Link>
              <Link to={"/comm/other"}>
                <li>
                  <p>그 외 제품</p>
                </li>
              </Link>
            </ul>
          </>
        </Desktop>

        <Tablet>
          <>
            <div className="tablet-main">
              <div className="side-box">
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  onClick={changeShowItem}
                />
              </div>
              <Link to="/">
                <img src={`${public_url}/imgs/ttt.png`} alt="logo" />
                {/* <h1>Tech-Tech-Talk</h1> */}
              </Link>
            </div>
          </>
        </Tablet>
      </div>
      {show_item ? (
        <div className="header-items">
          <ul>
            <HeaderItem url="#" item="소프트웨어" />
            <HeaderItem url="#" item="키보드" />
            <HeaderItem url="#" item="마우스" />
            <HeaderItem url="#" item="PC 부품" />
            <HeaderItem url="#" item="그 외 제품" />
          </ul>
        </div>
      ) : null}
    </CustomHeader>
  );
}

Header.defaultProps = {
  login: false,
};

export default Header;
