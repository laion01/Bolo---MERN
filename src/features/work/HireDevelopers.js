import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSession from 'react-client-session';
import CardProblem from "components/Cards/CardProblem.js";
import ConnectMe from "./ConnectMe.js";
import { setAnswer, setCurrentAnswer, setProblemIndex } from "app/actions/devtype";
import { current } from "@reduxjs/toolkit";

export default function HireDevelopers() {
  const { values, currentValue } = useSelector((state) => state.devtype);
  const {user, isAuth, isAdmin} = useSelector((state) => state.user);
    const [index, setIndex] = useState(0);

    const dispatch = useDispatch();

    const nextQuestion = () => {
      // if(index + 1 === problems.length)
      //   return
      if(index + 1  < problems.length) {
        dispatch(setProblemIndex(index+1));
        dispatch(setCurrentAnswer(values[index+1]));
      }
      setIndex(index+1)
      
    }
    const prevQuestion = () => {
      if(index === 0)
        return 
        
      dispatch(setProblemIndex(index-1));
      dispatch(setCurrentAnswer(values[index-1]));
      setIndex(index-1)
      
    }
  return (
    <>
      <main className="HireDevelopers-page">
        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded-lg">
              { index < problems.length
                ? <div className="px-9">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        {index > 0
                          ? <div className="py-6 px-3 mt-32 sm:mt-0">
                              <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => prevQuestion()}
                              > Back </button>
                              <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => nextQuestion()}
                                disabled={!currentValue.length}
                              > Next </button>
                            </div>
                          : <div className="py-6 px-3 mt-32 sm:mt-0">
                              <button
                                className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => nextQuestion()}
                                disabled={!currentValue.length}
                              > Get Started </button>
                            </div>
                        }
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                              {index+1}
                            </span>
                            <span className="text-sm text-blueGray-400">
                              Step
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      {
                        <CardProblem {...problems[index]} />
                      }
                    </div>
                  </div>
                :
                  <ConnectMe/>
              }
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const problems = [
    {
        q: "What role would you like to hire?",
        c: "Thanks for your interest in hiring through Bolo! Before we get started, we'd like to ask a few questions to better understand your business needs.",
        w: "",
        checks: [
            {text : "Developers", comment : "Software developers, Data Scientists, Devops, and QA"},
            {text : "Designers", comment : "Web, Mobile, Branding, and Visual Designers"},
            {text : "Project Managers", comment : "Digital Project managers, IT project Managers, Scrum Masters, and Angile Coaches"},
            {text : "Product Managers", comment : "Digital Product Managers, Product Owners, and Business Analysts" },
            {text : "Finance Experts", comment : "Financial Modelers, Fundraising Advisors, M&A and FP&A Experts" }
        ]
    },
    {
        q: "How many people are employed at your company?",
        c: "",
        w: "",
        checks: [
            {text : "Less than 10", comment : "" },
            {text : "11 - 50", comment : "" },
            {text : "51 - 200", comment : "" },
            {text : "201 - 1000", comment : "" },
            {text : "10001 - 5000", comment : "" },
            {text : "More than 5000", comment : "" },
        ]
    },
    {
      q: "What type of project are you hiring for?",
      c: "",
      w: "",
      checks: [
          {text : "New Idea or project", comment : "" },
          {text : "Existing project that needs more resources", comment : "" },
          {text : "Ongoing assistance or consultation", comment : "" },
          {text : "None of the above, I'm just looking to learn more about Bolo.", comment : "" },
      ]
    },
    {
      q: "Do you have product specifications ready?",
      c: "",
      w: "",
      checks: [
          {text : "I have a rough idea of what I want to build", comment : "" },
          {text : "I have a clear idea of what I want to build, but I do not have written specifications and/or wireframes", comment : "" },
          {text : "I have clear written specifications and/or wireframes", comment : "" },
      ]
    },
    {
      q: "How long do you need the developer?",
      c: "",
      w: "",
      checks: [
          {text : "Less than 1 week", comment : "" },
          {text : "1 to 4 weeks", comment : "" },
          {text : "1 to 3 months", comment : "" },
          {text : "3 to 6 months", comment : "" },
          {text : "Longer than 6 months", comment : "" },
          {text : "I will decide later", comment : "" },
      ]
    },
    {
      q: "What level of time commitment will you require from the developer?",
      c: "",
      w: "Need flexibility? Bolo offers flexible commitment if you need to adjust the number of hours on your project.",
      checks: [
          {text : "Full time (40 or more hrs/week)", comment : "" },
          {text : "Par time (less than 40 hrs/week)", comment : "" },
          {text : "Hourly", comment : "" },
          {text : "I will decide later", comment : "" },
      ]
    },
    {
      q: "When do you need the developer to start?",
      c: "",
      w: "",
      checks: [
          {text : "Immediately", comment : "" },
          {text : "In 1 to 2 weeks", comment : "" },
          {text : "More than 2 weeks from now", comment : "" },
          {text : "I will decide later", comment : "" },
      ]
    },
    {
      q: "Are you open to working with a remote developer?",
      c: "",
      w: "",
      checks: [
          {text : "Yes", comment : "" },
          {text : "No", comment : "" },
          {text : "I'm not sure", comment : "" },
      ]
    },
    {
      q: "What level of team comtribution are you looking from the developer?",
      c: "",
      w: "",
      checks: [
          {text : "Entry Level", comment : "" },
          {text : "Junior Individual Contributor", comment : "" },
          {text : "Senior Individual Contributor", comment : "" },
          {text : "Mid-Level Management", comment : "" },
          {text : "Executive / Senior Leadership", comment : "" },
      ]
    },
    {
      q: "What is your budget for this role?",
      c: "",
      w: "Share your estimated budget range to receive top talent that meets your budget criteria. Availability is not guaranteed.",
      checks: [
          {text : "Less than $70/hr", comment : "" },
          {text : "$70 - $90/hr", comment : "" },
          {text : "$90 - $110/hr", comment : "" },
          {text : "More than $110/hr", comment : "" },
          {text : "Not sure on budget yet", comment : "" },
      ]
    }
]