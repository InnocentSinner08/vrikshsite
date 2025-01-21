import Link from "next/link";
import React from "react";

const Events = () => {
  return (
    <div className="flex flex-col p-4 gap-4 w-full">
      <div className="font-bold text-center">Events</div>
      <div className="flex gap-4 items-center justify-center flex-wrap ">
        <Link
          href="/media/events/2025-26"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2025-26
        </Link>
        <Link
          href="/media/events/2024-25"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2024-25
        </Link>
        <Link
          href="/media/events/2023-24"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2023-24
        </Link>
        <Link
          href="/media/events/2022-23"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2022-23
        </Link>
        <Link
          href="/media/events/2021-22"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2021-22
        </Link>
        <Link
          href="/media/events/2020-21"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2020-21
        </Link>
        <Link
          href="/media/events/2019-20"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2019-20
        </Link>
        <Link
          href="/media/events/2018-19"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2018-19
        </Link>
        <Link
          href="/media/events/2017-18"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2017-18
        </Link>
        <Link
          href="/media/events/2016-17"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2016-17
        </Link>
        <Link
          href="/media/events/2015"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2015
        </Link>
        <Link
          href="/media/events/2014"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2014
        </Link>
        <Link
          href="/media/events/2013"
          className="bg-[#D9D9D9] px-4 py-3 text-center min-w-[300px]"
        >
          2013
        </Link>
      </div>
    </div>
  );
};

export default Events;
