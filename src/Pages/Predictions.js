import React from 'react'
import { Carousel, Button, Dropdown } from "react-bootstrap";
import { useState } from 'react';
//import '../assets/CSS/predict.css'

const Predictions = () => {
   
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
      <>     
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

              <div className="menuWrapper filtermenu mt-5 mb-5">
                  <div className="d-flex align-items-center gap-4">
                      <Button className="disableBtn" variant="primary" size="lg" disabled>
                          BestBET
                      </Button>
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

              <div className='scrollWrwpper'>
                  <div className="gameInfo">
                      <div className="gameInfoWrapper d-flex gap-5 flex-wrap justify-content-between w-100">
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">REACH</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">22</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">WALK</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">4</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">HIT BY PITCH</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">12</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">HIT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">22</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">SINGLE</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">10</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">DOUBLE</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">4</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">TRIPLE</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">2</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">HOME RUN</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-red fs-18 position-relative">
                                              <span className="position-absolute bottom-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0L5 5L10 0H0Z" fill="#FF4E3E" />
                                                  </svg>
                                              </span>
                                              4
                                          </h4>
                                          <h2 className="fs-48 text-white">2</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">EXTRA BASE HIT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">2</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">RUN BATTED IN</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">2</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">78</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">IN PLAY OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">46</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">GROUND OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">38</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">FLY OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">38</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">STRIKEOUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-red fs-18 position-relative">
                                              <span className="position-absolute bottom-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0L5 5L10 0H0Z" fill="#FF4E3E" />
                                                  </svg>
                                              </span>
                                              4
                                          </h4>

                                          <h2 className="fs-48 text-white">29</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">GROUND OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">38</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">FLY OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">38</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">STRIKEOUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-red fs-18 position-relative">
                                              <span className="position-absolute bottom-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0L5 5L10 0H0Z" fill="#FF4E3E" />
                                                  </svg>
                                              </span>
                                              4
                                          </h4>

                                          <h2 className="fs-48 text-white">29</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">STRIKEOUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-red fs-18 position-relative">
                                              <span className="position-absolute bottom-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0L5 5L10 0H0Z" fill="#FF4E3E" />
                                                  </svg>
                                              </span>
                                              4
                                          </h4>

                                          <h2 className="fs-48 text-white">29</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">FLY OUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-green fs-18 position-relative">
                                              <span className="position-absolute top-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 5L5 0L10 5H0Z" fill="#17BD8D" />
                                                  </svg>
                                              </span>
                                              12
                                          </h4>
                                          <h2 className="fs-48 text-white">38</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="gameInfoItem mb-4">
                              <div className="d-flex flex-column align-items-center">
                                  <div className="infoTop-blue d-flex align-items-center justify-content-center">
                                      <h4 className="infoTopContent text-white ">STRIKEOUT</h4>
                                  </div>
                                  <div>
                                      <div className="infoBottom d-flex align-items-center justify-content-between px-3">
                                          <h4 className="text-red fs-18 position-relative">
                                              <span className="position-absolute bottom-arrow">
                                                  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0 0L5 5L10 0H0Z" fill="#FF4E3E" />
                                                  </svg>
                                              </span>
                                              4
                                          </h4>

                                          <h2 className="fs-48 text-white">29</h2>
                                          <h3 className="fs-4 fw-light text-white">%</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
        </div>
      </>
     
  );
}

export default Predictions;




