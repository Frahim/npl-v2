import React from "react";
import { Dropdown } from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';

function Header(){   

    return(
        <>
        <div className="headerWrapper">
            <h1>Home</h1>
            <div className="rightpPart">
                <DropdownButton id="dropdown-League-button" className="Leaguebtn" title="League">
                    <Dropdown.Item href="#/action-1">ALl</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">MLB</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">MLB</Dropdown.Item>
                </DropdownButton>

                <DropdownButton id="dropdown-Status-button" className="Statusbtn" title="Status">
                    <Dropdown.Item href="#/action-1">ALL</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Live</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Previous</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Upcoming</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
        <div className="headerbotom">
            <ul>
                <li>MLB Live Games (10)</li>
                <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M5.66667 4.83333V1.5M12.3333 4.83333V1.5M4.83333 8.16667H13.1667M3.16667 16.5H14.8333C15.7538 16.5 16.5 15.7538 16.5 14.8333V4.83333C16.5 3.91286 15.7538 3.16667 14.8333 3.16667H3.16667C2.24619 3.16667 1.5 3.91286 1.5 4.83333V14.8333C1.5 15.7538 2.24619 16.5 3.16667 16.5Z" stroke="#B9B7DA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span>Tuesday, May 18th</span> </li>
                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M9 5.66667V9L11.5 11.5M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#B9B7DA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span>8:45pm CT</span></li>
            </ul>
        </div>
        </>
        

    )
}

export default Header; 