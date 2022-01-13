import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// views
import ApplyForJobs from "features/work/ApplyForJobs.js";
import HireDevelopers from "features/work/HireDevelopers.js";

export default function Work() {
  return (
    <>
      <div className="relative">
        <div className="px-4 md:px-10 mx-auto w-full">
          <Routes>
            <Route path="/apply" element={<ApplyForJobs/>} />
            <Route path="/hire" element={<HireDevelopers/>} />
            <Route path="/*" element={<Navigate to="/work/apply" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
