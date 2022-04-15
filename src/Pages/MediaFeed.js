import React from 'react';
import {Table} from 'react-bootstrap';
import { Carousel, Button, Dropdown } from "react-bootstrap";
import { useState } from 'react';
import Navigation from '../components/Navigation';
const MediaFeed = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
      <>
       <Navigation />
        <div className='predictionWrapper'>            
        <div className='predictionContentWrappper'>        
    
            <div className='hh'>
                        <div className="d-flex headerItemWrapper bg-black">
                            <div className="header-item header-first-item py-4">
                                <div className="headerItemContent header-border-r px-3 h-100">
                                    <h1 className="topHeading topHeading m-0 py-2">LAD</h1>
                                    <p className="topHeadingPra mb-0">106-56, 48-33 Away</p>
                                </div>
                            </div>
                            <div className="header-item heading-Item py-4 ">
                                <div className="headerSliderItem header-border-r px-4 h-100">
                                    <div>
                                        <h4 className="fs-4 text-white text-center">PITCHING</h4>
                                        <Carousel activeIndex={index} onSelect={handleSelect}>
                                            <Carousel.Item>
                                                <Carousel.Caption>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">M. Scherzer</p>
                                                        <p className="fs-6 text-white mb-0">ERA</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">Pitch Count: 12</p>
                                                        <p className="fs-6 text-white mb-0">2.46</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Carousel.Caption>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">Pitch Count: 12</p>
                                                        <p className="fs-6 text-white mb-0">2.46</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">M. Scherzer</p>
                                                        <p className="fs-6 text-white mb-0">ERA</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Carousel.Caption>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">M. Scherzer2</p>
                                                        <p className="fs-6 text-white mb-0">ERA</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">Pitch Count: 12</p>
                                                        <p className="fs-6 text-white mb-0">2.46</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div className="header-item heading-Item py-4 ">
                                <div className="headerSliderItem header-border-r px-4 h-100">
                                    <div className="d-flex align-items-center gap-2 justify-content-center">
                                        <div>
                                            <h2 className="fs-64 fw-bold text-white">2</h2>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-warning fs-18 mb-0">Bot 9</p>
                                            <div className="text-center py-2">
                                                <svg width="76" height="53" viewBox="0 0 76 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.2" x="16.1621" y="52.7422" width="21.5178" height="21.5178" transform="rotate(-135 16.1621 52.7422)" fill="white" />
                                                    <rect opacity="0.2" x="23.2578" y="15.2155" width="21.5178" height="21.5178" transform="rotate(-45 23.2578 15.2155)" fill="white" />
                                                    <rect x="60.7852" y="52.7422" width="21.5178" height="21.5178" transform="rotate(-135 60.7852 52.7422)" fill="#FBBA28" />
                                                </svg>
                                            </div>
                                            <p className="text-warning fs-18 mb-0">0-2</p>
                                        </div>
                                        <div>
                                            <h2 className="fs-64 fw-bold text-white">1</h2>
                                            <ul className="m-0 p-0 list-unstyled circleCountWrapper d-flex gap-2">
                                                <li className="circleCount bg-warning"></li>
                                                <li className="circleCount bg-warning"></li>
                                                <li className="circleCount"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-item heading-Item py-4 ">
                                <div className="headerSliderItem header-border-r px-4 h-100">
                                    <div>
                                        <h4 className="fs-4 text-white text-center">BATTING</h4>
                                        <Carousel activeIndex={index} onSelect={handleSelect}>
                                            <Carousel.Item>
                                                <Carousel.Caption>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">W. Flores</p>
                                                        <p className="fs-6 text-white mb-0">AVG</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">This Game: 1-3</p>
                                                        <p className="fs-6 text-white mb-0">.262</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Carousel.Caption>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">Pitch Count: 12</p>
                                                        <p className="fs-6 text-white mb-0">2.46</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">M. Scherzer</p>
                                                        <p className="fs-6 text-white mb-0">ERA</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <Carousel.Caption>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">M. Scherzer2</p>
                                                        <p className="fs-6 text-white mb-0">ERA</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="fs-6 text-white mb-0">Pitch Count: 12</p>
                                                        <p className="fs-6 text-white mb-0">2.46</p>
                                                    </div>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div className="header-item header-second-item py-4">
                                <div className="headerItemContent  px-3 h-100">
                                    <h1 className="topHeading topHeading m-0 py-2">SF</h1>
                                    <p className="topHeadingPra mb-0">107-55, 54-27 Home</p>
                                </div>
                            </div>
                        </div>
            </div>
            <div className="menuWrapper filtermenu mt-5">
                        <div className="d-flex align-items-center ">
                            <div className='btnmainWrap d-flex'>
                                <div className='btnwrwpper'>
                                <Button className="whiteBtn" variant="primary" size="lg" disabled>
                                    All
                                </Button>
                                </div>
                                <div className='btnwrwpper'>
                                <Button className="activeBtn" variant="primary" size="lg" >
                                    BestBET
                                </Button>
                                </div>
                                </div>
                            

                            <div className="d-flex align-items-center dropdownWrapper">
                                <Dropdown className="DropdownMenu">
                                    <Dropdown.Toggle className="btnFirstItem" id="dropdown-basic">
                                        Pitch
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="DropdownMenu">
                                    <Dropdown.Toggle className="btnItem" id="dropdown-basic">
                                        At-Bat
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="DropdownMenu">
                                    <Dropdown.Toggle className="btnItem" id="dropdown-basic">
                                        Top Inning
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="DropdownMenu">
                                    <Dropdown.Toggle className="btnItem" id="dropdown-basic">
                                        Bottom Inning
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="DropdownMenu">
                                    <Dropdown.Toggle className="btnItem" id="dropdown-basic">
                                        Full Inning
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="DropdownMenu">
                                    <Dropdown.Toggle className="btnItem" id="dropdown-basic">
                                        Game
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
            </div>       
            <div className="section-padding-48 bg-clr-black scrollWrwpper">
                <div className=" tableWrapper">
                    <Table striped bordered hover>
                        <thead>
                            <tr className="tableHeading">
                                <th className="text-uppercase">
                                    output
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    Odds
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    Change
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    quip
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    output
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    Odds
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    Change
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                                <th className="text-uppercase">
                                    quip
                                    <span className="ms-2">
                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M3 0.600098C3.19891 0.600098 3.38968 0.681373 3.53033 0.826044L5.78033 3.14033C6.07322 3.44159 6.07322 3.93003 5.78033 4.23129C5.48744 4.53256 5.01256 4.53256 4.71967 4.23129L3 2.46249L1.28033 4.23129C0.987437 4.53256 0.512563 4.53256 0.21967 4.23129C-0.0732233 3.93003 -0.0732232 3.44159 0.21967 3.14033L2.46967 0.826044C2.61032 0.681373 2.80109 0.600098 3 0.600098ZM0.21967 7.7689C0.512563 7.46764 0.987437 7.46764 1.28033 7.7689L3 9.5377L4.71967 7.7689C5.01256 7.46764 5.48744 7.46764 5.78033 7.7689C6.07322 8.07016 6.07322 8.5586 5.78033 8.85987L3.53033 11.1742C3.23744 11.4754 2.76256 11.4754 2.46967 11.1742L0.21967 8.85987C-0.0732233 8.5586 -0.0732233 8.07016 0.21967 7.7689Z"
                                                fill="#7371A0"
                                            />
                                        </svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="tableBody">
                            <tr>
                                <td>Reach</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Reach</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Walk</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Walk</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Hit By Pitch</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Hit By Pitch</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Hit</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Hit</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Single</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Single</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Double</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Double</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Trippple</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Trippple</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Home Run</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Home Run</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>Extra Base Hit</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>Extra Base Hit</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>RBI</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>RBI</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                            <tr>
                                <td>In Play Out</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                                <td>In Play Out</td>
                                <td>22%</td>
                                <td>+5%</td>
                                <td>86%</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
        </div>


      </>
     
  );
}

export default MediaFeed;