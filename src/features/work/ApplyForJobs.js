import React from "react";
import { Link } from "react-router-dom";
import JobDropdown from "components/Dropdowns/JobDropdown";

export default function ApplyForJobs() {
  return (
    <>
      <main className="Apply-page">
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg mt-6">
              <div className="px-9">
                <div className="flex flex-wrap justify-center">
                  <div className="text-center mb-12">
                    <h1 className="font-semibold text-4xl text-blueGray-600 mb-12">
                      Apply to Join the World's Top Talent Network
                    </h1>
                    <p className="font-semibold text-1xl text-blueGray-600"> Toptal is an exclusive network of the world's top talent in business, design, and technology. <br/> We provide access to top companies, a community of experts, and resources that can help accelerate your career. </p>
                  </div>      
                  <div className="w -full lg:w-6/12 px-4 lg:order-1 lg:self-center">
                    <button
                      className="w-full h-12 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xm  px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    > Sign in with Linkedin </button>
                    <p className="text-left text-sm m-4">By clicking Sign in with LinkedIn, you agree to let Bolo store your LinkedIn profile</p>
                    <div className="mt-12">
                      <hr className="my-4 md:min-w-full" />
                      <p className="w-10 h-10 -mt-8 bg-white rounded-full border text-center flex justify-center items-center mx-auto"> OR </p>
                    </div>
                    <div className="w-full">
                      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                          <JobDropdown/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full name"/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password_confirmation" type="password" placeholder="Confirm password"/>
                        </div>
                        
                      </form>
                      <p className="text-gray-500 text-sm">
                        You acknowledge that the Toptal screening process is confidential and that you will not publicly disclose details about this process. By submitting, you acknowledge that you have read and agreed to our <a>Terms and Conditions</a>, <a>Privacy Policy</a>, and <a>Cookie Policy</a>.
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="w-full mt-4 h-12 bg-lightBlue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Apply to Join Bolo
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3">
                    <div className="py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl block tracking-wide text-blueGray-600">
                          Work with top companies
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/airbnb.png"
                          />
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/bridgestone.png"
                          />
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/cavaliers.png"
                          />
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/airbnb.png"
                          />
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/motorola.png"
                          />
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/shopify.png"
                          />
                        </Link>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Link
                          to="/"
                          className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                          <img
                            alt="..."
                            className="align-middle border-none rounded-lg h-8"
                            src="/assets/img/companies/usc.png"
                          />
                        </Link>
                      </div>
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