"use client";
import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sahul Kumar",
    designation: "Student",
    imageUrl: "/images/team/puneet-bali.jpg",
    bio: "Experienced leader with expertise in technology and management.",
  },
  {
    id: 2,
    name: "Rupam Kumar",
    designation: "Student",
    imageUrl: "/images/team/subroto-roy.jpg",
    bio: "Focused on leveraging technology for impactful solutions.",
  },
  {
    id: 3,
    name: "Sujal Kumar",
    designation: "Student",
    imageUrl: "/images/team/rajesh-ss.jpg",
    bio: "Expert in operational strategies and efficiency.",
  },
  {
    id: 4,
    name: "Amish Manjul",
    designation: "Student",
    imageUrl: "/images/team/john-flynn.jpg",
    bio: "Strategic thinker and advisor to the board.",
  },
  {
    id: 5,
    name: "Sheetal Raj",
    designation: "Student",
    imageUrl: "/images/team/rashmi-jain.jpg",
    bio: "Specialized in branding and digital marketing.",
  },
  {
    id: 6,
    name: "Rohit Kumar",
    designation: "Student",
    imageUrl: "/images/team/sushanta-bhuyan.jpg",
    bio: "Ensures financial stability and growth for the organization.",
  },
];

const Alumini = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Alumni</h1>
      <p className="text-center text-gray-700 mb-10">
        Working together for <span className="text-amber-500">change</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-200 hover:shadow-xl transition-shadow"
          >
            {/* Profile Image */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Designation */}
            <h2 className="text-lg font-semibold text-center mt-4">
              {member.name}
            </h2>
            <p className="text-sm text-gray-500 text-center">{member.designation}</p>

            {/* Expand Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => toggleDetails(member.id)}
                className="bg-amber-500 text-white px-4 py-1 rounded-full hover:bg-amber-600 transition-colors"
              >
                {expandedId === member.id ? "Hide Bio" : "Read Bio"}
              </button>
            </div>

            {/* Bio */}
            {expandedId === member.id && (
              <div className="mt-4 text-gray-700 text-sm text-center border-t pt-3">
                {member.bio}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumini;
