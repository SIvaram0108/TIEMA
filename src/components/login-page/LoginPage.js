import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LoginPage extends Component {
  render() {
    const login=this.props.login;
    var loginNav="";
    if(login==="student"){
      loginNav=<Link to="/dept-login">department login</Link>;
    }
    else if (login==="department"){
      loginNav=<Link to="/">student login</Link>;
    }

    return (
      <React.Fragment>
        <div>
       <section className="h-screen">
        <div className="px-6 h-full text-gray-800"> 
           <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            {/* image */}
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample image" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>                  
                {/* Email input */}
                <div className="mb-6">
                  <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Email address" />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password" />
                </div>
                <div className="flex justify-between items-center mb-6">
                  {/* <a href="#" className='text-gray-800'>Department Login</a> */}
                  {/* <Link to='/dept-login'>dept login</Link> */}
                  {loginNav}
                  <a href="#!" className="text-gray-800">Forgot password?</a>
                </div>
                <div className="text-center lg:text-left">
                  <button type="button" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Login
                  </button>
                </div>
                <div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
      </React.Fragment>
    )
  }
}

export default LoginPage;