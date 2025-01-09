"use client";
import React, { useState, useEffect, useRef } from "react";

const Impact = () => {
  const [counts, setCounts] = useState({
    students: 0,
    footfall: 0,
    masks: 0,
    iitStudents: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const targets = {
    students: 990,
    footfall: 10000,
    masks: 30000,
    iitStudents: 100,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => ({
        students:
          prev.students < targets.students
            ? Math.min(
                prev.students + targets.students / steps,
                targets.students
              )
            : prev.students,
        footfall:
          prev.footfall < targets.footfall
            ? Math.min(
                prev.footfall + targets.footfall / steps,
                targets.footfall
              )
            : prev.footfall,
        masks:
          prev.masks < targets.masks
            ? Math.min(prev.masks + targets.masks / steps, targets.masks)
            : prev.masks,
        iitStudents:
          prev.iitStudents < targets.iitStudents
            ? Math.min(
                prev.iitStudents + targets.iitStudents / steps,
                targets.iitStudents
              )
            : prev.iitStudents,
      }));
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div
      ref={componentRef}
      className="bg-[#D9D9D9] flex flex-col gap-2 py-10 md:py-12"
    >
      <div className="text-center text-3xl font-bold">OUR IMPACT</div>
      <div className="w-full p-4 grid md:grid-cols-4 gap-4 grid-cols-2 bg-[#D9D9D9] items-center">
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">
            {Math.round(counts.students)}+
          </div>
          <div className="text-xs text-center">No. of Students Helped</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">
            {Math.round(counts.footfall / 1000)}K+
          </div>
          <div className="text-xs">Library footfall</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">
            {Math.round(counts.masks / 1000)}K+
          </div>
          <div className="text-xs text-center">
            Masks donated by vriksh during COVID-19
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">
            {Math.round(counts.iitStudents)}+
          </div>
          <div className="text-xs text-center">
            Students studying in IIT/NIT.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
