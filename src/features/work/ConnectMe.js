import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  attemptAddCompany,
} from "app/thunks/work";

export default function ConnectMe() {
  const { isAuth, isAdmin } = useSelector((state) => state.user);
  const { values } = useSelector((state) => state.devtype);
  const [serverError, setServerError] = useState("");
  const [email, setEmail] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [contactname, setContactname] = useState("");
  const [registerStep, setRegisterStep] = useState("register"); // Use an enum with TS;
  
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(attemptAddCompany({email, companyname, contactname, values}))
      .then((data) => {
        // setEmail(email);
        // setRegisterStep("resend");
        console.log(data);
        setServerError("");
        alert('Successfuly registered!')
      })
      .catch((error) => {
        if (error.response) {
          setServerError(error.response.data.message);
        }
      });
  };

  return (
    <>
      <main className="HireDevelopers-page">
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded-lg">
              <div className="px-9">
                <div className="flex flex-wrap justify-center">
                  <div className="w -full lg:w-6/12 px-4 lg:order-1 lg:self-center">
                    <div className="w-full max-w-xs">
                      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="mb-4 text-xl">Success! Let's connect you with talent.</h1>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company-name" type="text" placeholder="Company name" value={companyname} onChange={(e) => setCompanyname(e.target.value)}/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact-name" type="text" placeholder="Contact name" value={contactname} onChange={(e) => setContactname(e.target.value)}/>
                        </div>
                        <p className="text-gray-500 text-sm">
                          By completing signup, you are agreeing to Toptal’s Terms of Service, Privacy Policy, and Cookie Policy and that Toptal may monitor or record audio or video calls for quality assurance and training purposes.
                          </p>
                          <hr className="mt-4 md:min-w-full" />
                          <div className="text-red-400 text-center mb-3 font-bold">
                            <small>{serverError}</small>
                          </div>
                          <div className="flex items-center justify-center">
                            <button className="px-12 mt-4 h-12 bg-lightBlue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                              onClick={onSubmit}>
                              Connect Me with Talent
                            </button>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}