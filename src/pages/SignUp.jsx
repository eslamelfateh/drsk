import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { keys } from "./keys";
import { connect, useDispatch } from "react-redux";
import Header from "../component/header";

// import signUp from "../redux/user/user.reducer";

function SignUp() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_, setPassword_] = useState("");
  const [kind, setKind] = useState("student");
  const [gender, setGender] = useState("male");


  async function signUp(e) {
    e.preventDefault();
    let item = {
      name,
      phone: mobileNumber,
      email,
      password,
      password_,
      kind,
      gender,
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
      "https://b479-197-43-13-201.eu.ngrok.io/api/v1/users/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className=" md:py-10 pb-10">

              <div className="max-w-3xl mx-auto text-center font-bold text-2xl py-7 md:py-5">
                <h1 className="h3">{keys.welcome}</h1>
              </div>

              {/* Form */}
              <div className="max-w-lg mx-auto">
                <form>
                  <div  className="flex flex-wrap justify-around -mx-3 mb-4 " >
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text text-lg font-bold font-medium m-2">Teacher</span>
                        <input
                          type="radio"
                          name="radio-1"
                          value='teacher'
                          class="radio checked:bg-red-500"
                          checked={kind === 'teacher'}
                          onChange={(e)=>setKind(e.target.value)}
                        />
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text text-lg font-bold font-medium m-2">Student</span>
                        <input
                          type="radio"
                          name="radio-1"
                          value='student'
                          class="radio checked:bg-blue-500"
                          checked={kind === 'student'}
                          onChange={(e)=>setKind(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3 float-right">
                      <label
                        className="text-lg font-bold font-medium float-right mb-2 "
                        htmlFor="name"
                      >
                        {keys.name.label}{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right "
                        placeholder={keys.name.input}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div  className="flex flex-wrap justify-around -mx-3 mb-4 " >
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text text-lg font-bold font-medium m-2">Female</span>
                        <input
                          type="radio"
                          name="radio-2"
                          value='female'
                          class="radio checked:bg-blue-500"
                          checked={gender === 'female'}
                          onChange={(e)=>setGender(e.target.value)}
                        />
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text text-lg font-bold font-medium m-2">Male</span>
                        <input
                          type="radio"
                          name="radio-2"
                          value='male'
                          class="radio checked:bg-red-500"
                          checked={gender === 'male'}
                          onChange={(e)=>setGender(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="text-lg font-bold font-medium float-right mb-2"
                        htmlFor="name"
                      >
                        {keys.mobileNumber}{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="mobileNumber"
                        type="number"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right"
                        placeholder="Enter your Mobile number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="text-lg font-bold font-medium float-right mb-2"
                        htmlFor="email"
                      >
                        {keys.email.label}{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right "
                        placeholder={keys.email.inputUP}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="text-lg font-bold font-medium float-right mb-2"
                        htmlFor="password"
                      >
                        {keys.password.label}{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right"
                        placeholder={keys.password.inputUP}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="text-lg font-bold font-medium float-right mb-2"
                        htmlFor="password"
                      >
                        {keys.password_.label}{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm text-right"
                        placeholder={keys.password_.inputUP}
                        onChange={(e) => setPassword_(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={signUp}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                  {/* <div className="text-sm text-gray-500 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
                  </div> */}
                </form>
                {/* <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div> */}
                {/* <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg
                          className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                  </div>
                </form> */}
                {/* <div className="text-gray-600 text-center mt-6">
                  Already using Simple?{" "}
                  <Link
                    to="/signin"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   signUp:user => dispatch(signUp(user))
// })

// export default connect(null,mapDispatchToProps)(SignUp);
export default SignUp;
