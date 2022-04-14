import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import logInLogo from '../assets/images/logo.svg'
import logInLogo2 from '../assets/images/loginLogo2.png'




const Login = () => {
  return (
      <div className="login  d-flex align-items-center justify-content-center">
          <div className="loginWrapper px-4 py-5">
              <img src={logInLogo} className="mx-auto d-flex" alt="" />
              <div className="loginForm text-center text-white my-5">
                  <h2>Please Sign In</h2>
                  <Form className="text-start pt-5" /*onSubmit={handleSubmit}*/>
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                          <Form.Control className="emailBox" type="email" placeholder="name@example.com" id="email" name="email" /*onChange={e => setUserName(e.target.value)}*//>
                      </Form.Group>
                      <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput2">
                          <Form.Control className="passwordBox" type="password" placeholder="Password" id="password" name="password" /*onChange={e => setPassword(e.target.value)}*//>
                          <div className='position-absolute eyeIcon '>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L16.2339 14.8197C17.7715 13.5924 18.939 11.9211 19.5424 9.99996C18.2681 5.94288 14.4778 3 10.0002 3C8.37665 3 6.84344 3.38692 5.48779 4.07358L3.70711 2.29289ZM7.96813 6.55391L9.48201 8.0678C9.6473 8.02358 9.82102 8 10.0003 8C11.1048 8 12.0003 8.89543 12.0003 10C12.0003 10.1792 11.9767 10.353 11.9325 10.5182L13.4463 12.0321C13.7983 11.4366 14.0003 10.7419 14.0003 10C14.0003 7.79086 12.2094 6 10.0003 6C9.25838 6 8.56367 6.20197 7.96813 6.55391Z"
                                      fill="#7371A0"
                                  />
                                  <path
                                      d="M12.4541 16.6967L9.74965 13.9923C7.74013 13.8681 6.1322 12.2601 6.00798 10.2506L2.33492 6.57754C1.50063 7.57223 0.856368 8.73169 0.458008 10C1.73228 14.0571 5.52257 17 10.0002 17C10.8469 17 11.6689 16.8948 12.4541 16.6967Z"
                                      fill="#7371A0"
                                  />
                              </svg>
                          </div>
                      </Form.Group>
                      <button type="submit" className="submitBtn ">
                          Submit
                      </button>
                  </Form>
                  <div className="poweredBy pt-4">
                      <img src={logInLogo2} className="w-auto mt-5 pb-2" alt="" />
                      <p>Powered by nVenue</p>
                  </div>
              </div>
          </div>
      </div>
  );
}


export default Login; 