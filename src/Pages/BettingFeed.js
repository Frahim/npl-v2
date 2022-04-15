import React from 'react';
import { Table } from 'react-bootstrap';
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
                            <h2 className='gameTitle'>Current Batter</h2>
                            <div className='mainwrapTabil'>
                                <div className='d-flex headerRow'>
                                    <div className='hRow id'>MARKET ID</div>
                                    <div className='hRow desc'>DESCRIPTION</div>
                                    <div className='hRow optiontb justify-content-center'>option</div>
                                    <div className='hRow meta'>meta
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRow '>Nullable</div>
                                            <div className='inhRow '>Nullifed</div>
                                            <div className='inhRow '>Resolved</div>
                                            <div className='inhRow '>Open</div>
                                            <div className='inhRow '>Updated</div>
                                            <div className='inhRow '>Closed</div>
                                            <div className='inhRow '>Rec Close</div>
                                        </div>
                                    </div>
                                    <div className='hRow'>result</div>
                                    <div className='hRow bestbet'>bestbet
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowbestbet '>GMI</div>
                                            <div className='inhRowbestbet '>INT</div>
                                            <div className='inhRowbestbet'>TOT</div>
                                        </div>
                                    </div>
                                </div>
                            {/* row end */}
                                <div className='d-flex bodyRow'>
                                    <div className='hRow id'>AB-BIN-1</div>
                                    <div className='hRow desc'>Will Altuve Reach Base?</div>                                   
                                    <div className='optiontb  dd-flex'>
                                            <div className='hRow '>Reach(46%) +120</div>
                                            <div className='hRow '>No Reach (54%) -120</div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>                                       
                                    </div>
                                    <div className='meta'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '>*</div>
                                            <div className='inhRowB '>12:05:23</div>
                                            <div className='inhRowB '>12:05:28</div>
                                            <div className='inhRowB '>12:06:05</div>
                                            <div className='inhRowB '>12:06:06</div>
                                        </div>
                                    </div>
                                    <div className='hRow'>Reach</div>
                                    <div className='bestbet bestbetRow'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowbe textGreen'>6</div>
                                            <div className='inhRowbe '>4</div>
                                            <div className='inhRowbe bgGreen'>10</div>
                                        </div>
                                    </div>
                                </div> 
                            {/* row end */}
                            <div className='d-flex bodyRow'>
                                    <div className='hRow id'>AB-BIN-1</div>
                                    <div className='hRow desc'>Will Altuve Reach Base?</div>                                   
                                    <div className='optiontb  dd-flex'>
                                            <div className='hRow '>Reach(46%) +120</div>
                                            <div className='hRow '>No Reach (54%) -120</div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>                                       
                                    </div>
                                    <div className='meta'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '>*</div>
                                            <div className='inhRowB '>12:05:23</div>
                                            <div className='inhRowB '>12:05:28</div>
                                            <div className='inhRowB '>12:06:05</div>
                                            <div className='inhRowB '>12:06:06</div>
                                        </div>
                                    </div>
                                    <div className='hRow'>Reach</div>
                                    <div className='bestbet bestbetRow'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowbe'>6</div>
                                            <div className='inhRowbe'>4</div>
                                            <div className='inhRowbe'>10</div>
                                        </div>
                                    </div>
                                </div> 
                            {/* row end */}
                            <div className='d-flex bodyRow'>
                                    <div className='hRow id'>AB-BIN-1</div>
                                    <div className='hRow desc'>Will Altuve Reach Base?</div>                                   
                                    <div className='optiontb  dd-flex'>
                                            <div className='hRow '>Reach(46%) +120</div>
                                            <div className='hRow '>No Reach (54%) -120</div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>                                       
                                    </div>
                                    <div className='meta'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '>*</div>
                                            <div className='inhRowB '>12:05:23</div>
                                            <div className='inhRowB '>12:05:28</div>
                                            <div className='inhRowB '>12:06:05</div>
                                            <div className='inhRowB '>12:06:06</div>
                                        </div>
                                    </div>
                                    <div className='hRow'>Reach</div>
                                    <div className='bestbet bestbetRow'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowbe'>6</div>
                                            <div className='inhRowbe'>4</div>
                                            <div className='inhRowbe'>10</div>
                                        </div>
                                    </div>
                                </div> 
                            {/* row end */}
                            <div className='d-flex bodyRow'>
                                    <div className='hRow id'>AB-BIN-1</div>
                                    <div className='hRow desc'>Will Altuve Reach Base?</div>                                   
                                    <div className='optiontb  dd-flex'>
                                            <div className='hRow '>Reach(46%) +120</div>
                                            <div className='hRow '>No Reach (54%) -120</div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>
                                            <div className='hRow '></div>                                       
                                    </div>
                                    <div className='meta'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '></div>
                                            <div className='inhRowB '>*</div>
                                            <div className='inhRowB '>12:05:23</div>
                                            <div className='inhRowB '>12:05:28</div>
                                            <div className='inhRowB '>12:06:05</div>
                                            <div className='inhRowB '>12:06:06</div>
                                        </div>
                                    </div>
                                    <div className='hRow'>Reach</div>
                                    <div className='bestbet bestbetRow'>
                                        <div className='innerRowtb d-flex'>
                                            <div className='inhRowbe'>6</div>
                                            <div className='inhRowbe'>4</div>
                                            <div className='inhRowbe'>10</div>
                                        </div>
                                    </div>
                                </div> 
                            {/* row end */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}

export default MediaFeed;