import { NavLink } from "react-router-dom";
// import {FaBars} from 'react-icons/fa'; 


export default function Navigation() {
  return (
    <div>
      <nav>
        <h1>
          <NavLink  className="logo" to="/digifab2022">
           LUAN
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink className="navBtn" to="/about">
              Om meg
            </NavLink>
          </li>
          <li>
            <NavLink className="navBtn" to="/pictures">
              Bilder
            </NavLink>
          </li>
          <li>
            <NavLink className="navBtn" to="/skills">
              Kompetanse
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="navBtn" to="/works">
              Erfaringer
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
