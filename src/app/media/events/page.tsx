"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const years = [
  "2025-26", "2024-25", "2023-24", "2022-23",
  "2021-22", "2020-21", "2019-20", "2018-19",
  "2017-18", "2016-17", "2015", "2014", "2013",
];

const Events = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl font-bold mb-2">Journey Through Our Events</h2>
        <p className="text-gray-600">
          Explore the milestones and memories that shaped <span className="text-green-700 font-semibold">Vriksh</span> over the years. Every event is a step closer to meaningful change.
        </p>
      </div>

      {/* Event Photo Gallery */}
      <div className="flex justify-center gap-6 flex-wrap mb-12">
        <Image src="/images/events/Home Page Event - 4.jpg" alt="Event 1" width={280} height={200} className="rounded-xl shadow-md" />
        <Image src="/images/events/homepage-1.jpg" alt="Event 2" width={280} height={200} className="rounded-xl shadow-md" />
        <Image src="/images/events/Home Page Event - 2.jpg" alt="Event 3" width={280} height={200} className="rounded-xl shadow-md" />
      </div>

      {/* Year Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {years.map((year, index) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link
              href={`/media/events/${year}`}
              className="group flex items-center gap-3 justify-center min-w-[240px] px-6 py-4 bg-white/30 text-black border border-gray-300 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <CalendarDaysIcon className="w-5 h-5 text-green-700 group-hover:text-green-800 transition" />
              <span className="font-semibold">{year}</span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-16 max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <blockquote className="italic text-gray-700">
          &ldquo;At Vriksh, every small event becomes a big step toward transformation.&rdquo;
        </blockquote>
        <p className="mt-2 font-semibold text-green-700"></p>
      </div>
    </section>
  );
};

export default Events;
