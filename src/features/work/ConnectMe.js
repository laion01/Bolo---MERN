import React from "react";

export default function ConnectMe() {
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
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company-name" type="text" placeholder="Company name"/>
                        </div>
                        <div className="mb-4">
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact-name" type="text" placeholder="Contact name"/>
                        </div>
                      </form>
                      <p className="text-gray-500 text-sm">
                      By completing signup, you are agreeing to Toptal’s Terms of Service, Privacy Policy, and Cookie Policy and that Toptal may monitor or record audio or video calls for quality assurance and training purposes.
                      </p>
                      <hr className="mt-4 md:min-w-full" />
                      <div className="flex items-center justify-center">
                        <button className="px-12 mt-4 h-12 bg-lightBlue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Connect Me with Talent
                        </button>
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