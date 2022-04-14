//import useState hook to create menu collapse state
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.svg';
import Avatar from '../assets/images/avatar.png';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css 
//import "react-pro-sidebar/dist/css/styles.css";
//import "./Header.css";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse} <img className="logo" src={Logo}/></p>
            </div>
           {/* <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click 
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div> */}
            
          </SidebarHeader>
          <SidebarContent>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z" fill="#B9B7DA"/>
                        </svg>
            Home
            </NavLink> 
            <NavLink to='/predictions'  id="predict" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>           
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M14.6295 8.14817C14.6295 11.7278 11.7276 14.6297 8.14799 14.6297C4.56836 14.6297 1.6665 11.7278 1.6665 8.14817C1.6665 4.56855 4.56836 1.66669 8.14799 1.66669C11.7276 1.66669 14.6295 4.56855 14.6295 8.14817Z"
                                  fill="#B9B7DA"
                              />
                              <path
                                  d="M18.3332 18.3334L12.7776 12.7778M14.6295 8.14817C14.6295 11.7278 11.7276 14.6297 8.14799 14.6297C4.56836 14.6297 1.6665 11.7278 1.6665 8.14817C1.6665 4.56855 4.56836 1.66669 8.14799 1.66669C11.7276 1.66669 14.6295 4.56855 14.6295 8.14817Z"
                                  stroke="#B9B7DA"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                              />
                              <path
                                  className="lastStroke"
                                  d="M3.59508 9.11041C3.22563 9.52092 3.2589 10.1532 3.66941 10.5227C4.07992 10.8921 4.71221 10.8589 5.08167 10.4483L3.59508 9.11041ZM6.58838 7.27938L7.33167 6.61041C7.14203 6.3997 6.87187 6.27938 6.58838 6.27938C6.30489 6.27938 6.03473 6.3997 5.84508 6.61041L6.58838 7.27938ZM8.83838 9.77938L8.09508 10.4483C8.28473 10.6591 8.55489 10.7794 8.83838 10.7794C9.12186 10.7794 9.39203 10.6591 9.58167 10.4483L8.83838 9.77938ZM12.5817 7.11501C12.9511 6.7045 12.9179 6.07221 12.5073 5.70275C12.0968 5.33329 11.4645 5.36657 11.0951 5.77708L12.5817 7.11501ZM5.08167 10.4483L7.33167 7.94834L5.84508 6.61041L3.59508 9.11041L5.08167 10.4483ZM5.84508 7.94834L8.09508 10.4483L9.58167 9.11041L7.33167 6.61041L5.84508 7.94834ZM9.58167 10.4483L12.5817 7.11501L11.0951 5.77708L8.09508 9.11041L9.58167 10.4483Z"
                                  fill="#1E1E39"
                              />
                          </svg>
            Predictions
            </NavLink>
            <NavLink to='/mediafeed' className={({ isActive }) => (isActive ? 'active' : 'inactive')}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V13C17 14.1046 16.1046 15 15 15H12.7808L12.903 15.4887L13.7071 16.2929C13.9931 16.5789 14.0787 17.009 13.9239 17.3827C13.7691 17.7563 13.4045 18 13 18H7.00003C6.59557 18 6.23093 17.7563 6.07615 17.3827C5.92137 17.009 6.00692 16.5789 6.29292 16.2929L7.09706 15.4887L7.21925 15H5C3.89543 15 3 14.1046 3 13V5ZM8.7713 12C8.75657 11.9997 8.74189 11.9997 8.72725 12H5V5H15V12H11.2728C11.2582 11.9997 11.2435 11.9997 11.2288 12H8.7713Z" fill="#B9B7DA"/>
                </svg>
            Media Feed
            </NavLink>

            <NavLink id="disabled" to="/sdfdskd">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.16611 4.99891C5.17437 4.95809 7.91528 3.81033 10 1.94446C12.0847 3.81033 14.8256 4.95809 17.8339 4.99891C17.9431 5.64968 18 6.31821 18 7.00003C18 12.2249 14.6608 16.6698 10 18.3172C5.33923 16.6698 2 12.2249 2 7.00003C2 6.31821 2.05686 5.64968 2.16611 4.99891ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                                  fill="#3D3D59"
                              />
                          </svg>
                          Media Feed
                      </NavLink>
                      <NavLink id="disabled" to="/sdfdskd">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.16611 4.99891C5.17437 4.95809 7.91528 3.81033 10 1.94446C12.0847 3.81033 14.8256 4.95809 17.8339 4.99891C17.9431 5.64968 18 6.31821 18 7.00003C18 12.2249 14.6608 16.6698 10 18.3172C5.33923 16.6698 2 12.2249 2 7.00003C2 6.31821 2.05686 5.64968 2.16611 4.99891ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                                  fill="#3D3D59"
                              />
                          </svg>
                          Live Analytics
                      </NavLink>
            
            
          </SidebarContent>

          <SidebarFooter>
              <div className="userProBtn">
                <img src={Avatar} alt="Avatar"/>
                <h2>Devon Kane</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M6.75 3.75L12 9L6.75 14.25" stroke="#605E8D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>

            <Menu iconShape="square">
              <MenuItem ><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
<rect width="44" height="44" rx="3.7963" fill="#060D1C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.8266 7.17371L7.17529 7.17371V14.9679C13.2416 12.4124 20.5127 13.605 25.4545 18.5457C30.3974 23.4875 31.5897 30.7592 29.0313 36.825H36.8266V7.17371Z" fill="#C0FF2C"/>
<ellipse cx="13.6308" cy="30.3096" rx="6.45652" ry="6.45514" fill="white"/>
</svg> <p>Powered by nVenue</p></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;