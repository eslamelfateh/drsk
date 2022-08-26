import React, { useState } from "react";
import { Link } from "react-router-dom";
import { keys } from "./keys";
import { connect } from "react-redux";
import Header from '../component/header'
const SignIn = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn(e) {
    e.preventDefault();
    let item = {
      email,
      password,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(item);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://b479-197-43-13-201.eu.ngrok.io/api/v1/users/login/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header/>
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="md:py-10 pb-10">

              <div className="max-w-3xl mx-auto text-center font-bold text-2xl py-7 md:py-5">
                <h1 className="h3">
                  Welcome back. We exist to make entrepreneurism easier.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="text-lg font-bold font-medium float-right"
                        htmlFor="email"
                      >
                        {keys.email.label}
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right"
                        placeholder={keys.email.inputIN}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <Link
                          to="reset-password"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        ></Link>
                        <label
                          className="text-lg font-bold font-medium float-right"
                          htmlFor="password"
                        >
                          {keys.password.label}
                        </label>
                      </div>
                      <input
                        id="password"
                        type="password"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right"
                        placeholder={keys.password.inputIN}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2">
                            Keep me signed in
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={signIn}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <div className="text-gray-600 text-center mt-6">
                  <Link
                    to="/signup"
                    className="text-indigo-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
