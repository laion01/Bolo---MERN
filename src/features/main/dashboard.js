/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Dashboard() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h1 className="font-semibold text-4xl text-blueGray-600">
                Hire vetted remote developers
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Hire the top 1% of 1 million+ software developers using Turing’s Intelligent Talent Cloud. Get Silicon Valley-caliber engineers with a 100% risk-free two-week trial.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Hire developers
                </a>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Looking for jobs instead? <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                >
                  Apply for jobs
                </a>
              </p>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="/assets/img/pattern_react.png"
          alt="..."
        />
      </section>

      <section className="block relative z-1">
        <div className="container mx-auto">
          <h1 className="font-semibold text-4xl text-blueGray-600 mb-24">
            What Turing offers
          </h1>
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h- rounded-lg"
                        src="/assets/img/promo/promo-card-img04.svg"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Intelligent vetting
                  </h5>
                  <p> Developers vetted over 5+ hours of rigorous tests and interviews.</p>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/assets/img/promo/promo-card-img05.svg"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Fast hiring
                  </h5>
                  <p> Hire experienced developers in a matter of 3 days.</p>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/assets/img/promo/promo-card-img06.svg"
                      />
                    </div>
                  </Link>
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Remote work made easy
                  </h5>
                  <p> Timezone-matched for easy communication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xr"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src="/assets/img/pic-skills-mobile.png"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <h1 className="text-3xl font-semibold">
                100+ skills available
              </h1>
              <p className="mt-6 mb-8 text-lg leading-relaxed text-blueGray-500">
                Hire developers vetted across seniority levels for 100+ skills, including React, Node, Python, Angular, Swift, React Native, Java, and many more.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                target="_blank"
                className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mt-6 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Find developers
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <h1 className="text-3xl font-semibold">
                Introducing Turing’s Intelligent Talent Cloud
              </h1>
              <p className="mt-6 mb-8 text-lg leading-relaxed text-blueGray-500">
              Hire intelligently with developers sourced by software, vetted by software, matched by software & managed by software.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                target="_blank"
                className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mt-6 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Hire now
              </a>
            </div>
          </div>
          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src="/assets/img/documentation.png"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-32 pt-48">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              src="/assets/img/promo/promo-card-img06.svg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <h1 className="text-3xl font-semibold">
                Go #Boundaryless with Turing
              </h1>
              <p className="mt-6 mb-8 text-lg leading-relaxed text-blueGray-500">
                Turing has you covered with daily stand-ups, productivity trackers, billing, and developers working in your timezone.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                target="_blank"
                className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mt-6 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
               Let's go
              </a>
            </div>
          </div>
          
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Hire and manage remote developers
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Tell us the skills you need and we'll find the best developer for you in days, not weeks.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Hire developers
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
