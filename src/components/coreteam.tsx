"use client";

import Link from "next/link";
import { AtSign } from "react-feather";
import { FaLinkedin } from "react-icons/fa";

const coremember = [
    {
        id: 1,
        name: "Chandrakant Pateshwari",
        role: "Founder and Secretary",
        phone: "+48 30 40 95 13",
        email: "joan@supply.co",
        imageUrl: "/images/team/coreteam/cp bhaiya.png",
    },
    {
        id: 2,
        name: "Dugeshwar Prasad",
        role: "President",
        phone: "+48 30 40 95 39",
        email: "olsm@supply.co",
        imageUrl: "/images/team/coreteam/dugeshwar_prasad.jpeg",
    },

    {
        id: 3,
        name: "Ranjeet Kumar",
        role: "Treasurer",
        phone: "+48 30 40 95 28",
        email: "math@supply.co",
        imageUrl: "/images/team/coreteam/ranjeet bhaiya.jpg",
    },

];

const faculty = [
    {
        id: 1,
        name: "Mr. Kuldip Prasad",
        role: "Executive Member and Physics Faculty",
        phone: "+48 30 40 95 81",
        email: "olma@supply.co",
        imageUrl: "/images/team/coreteam/kuldeep sir.jpg",
    },
    {
        id: 2,
        name: "Dr. Sunil Kumar",
        role: "Executive Member and Chemistry Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team//coreteam/sunil sir.jpg",
    },
    {
        id: 3,
        name: "Dinesh Kumar Sharma",
        role: "Math Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/coreteam/dinesh sir.jpg",
    },
    {
        id: 4,
        name: "Dr.  Madhumita Patel",
        role: "Biology Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/coreteam/madhumita maam.jpg",
    },
    {
        id: 5,
        name: "Dr. H.S. Jaggi",
        role: "Physics Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/coreteam/jaggi sir.jpg",
    },
    {
        id: 6,
        name: "Mr. Vijay Kumar Giri",
        role: "Maths Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/coreteam/vijay sir.jpg",
    },
];

const vrikshfederation = [
    {
        id: 1,
        name: "Sujal Kumar",
        role: "President",
        phone: "+48 30 40 95 81",
        email: "olma@supply.co",
        imageUrl: "/images/team/alumni/Sujal_Kumar.jpg",
        linkedin: "https://www.linkedin.com/in/sujal-kumar-aab83525b"
    },
    {
        id: 2,
        name: "Rupam Kumar",
        role: "Secretary",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Rupam_Kumar.jpg",
        linkedin: "https://www.linkedin.com/in/rupam-kumar-86a999254"
    },
];
const vrikshpathshala = [
<<<<<<< HEAD
    {
        id: 1,
        name: "Sachin Kumar",
        role: "President",
        phone: "+48 30 40 95 81",
        email: "olma@supply.co",
        imageUrl: "/images/team/alumni/Sachin_Kumar.jpg",
        linkedin: "https://www.linkedin.com/in/sachin-kumar-a889a9292"
    },
    {
        id: 2,
        name: "Amit Kumar",
        role: "Seceratary",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Amit_Kumar3.jpg",
        // linkedin: "https://www.linkedin.com/in/madhu-kumari-5a5a36293/"
    },
    {
        id: 3,
        name: "Meghnath Kumar",
        role: "Seceratary",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Meghnath_Kumar.jpg",
        // linkedin: "https://www.linkedin.com/in/madhu-kumari-5a5a36293/"
    },
=======
  {
    id: 1,
    name: "Sachin Kumar",
    role: "President",
    phone: "+48 30 40 95 81",
    email: "olma@supply.co",
    imageUrl: "/images/team/alumni/Sachin_Kumar.jpg",
    linkedin: "https://www.linkedin.com/in/sachin-kumar-a889a9292",
  },
  {
    id: 2,
    name: "Amit Kumar",
    role: "Seceratary",
    phone: "+48 30 40 95 90",
    email: "grha@supply.co",
    imageUrl: "/images/team/alumni/Amit_Kumar3.jpg",
    // linkedin: "https://www.linkedin.com/in/madhu-kumari-5a5a36293/"
  },
  {
    id: 3,
    name: "Meghnath Kumar",
    role: "Seceratary",
    phone: "+48 30 40 95 90",
    email: "grha@supply.co",
    imageUrl: "/images/team/alumni/Meghnath_Kumar.jpg",
    linkedin: "https://www.linkedin.com/in/meghnath-kumar-072b53292"
  },
>>>>>>> d114d5af2d17f3c509063eaf38fe32845551d7d8
];
const studentactivitycentre = [
    {
        id: 1,
        name: "Ram Ratan Kumar",
        role: "President",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Ram_Ratan.jpg",
        linkedin: "https://www.linkedin.com/in/madhu-kumari-5a5a36293/"
    }
];
const technical = [
    {
        id: 1,
        name: "Sahul Kumar",
        role: "Web Devloper",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Sahul_Kumar.jpeg",
        linkedin: "https://www.linkedin.com/in/sahul-kumar-1028bb282/"
    },
    {
        id: 2,
        name: "Sahitya Kumar Choubey",
        role: "Web Developer",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/coreteam/Sahatiya.jpeg",
        linkedin: "https://www.linkedin.com/in/sahitya-kumar-choubey/"
    },
    {
        id: 3,
        name: "Sheetal Raj",
        role: "Content Writer",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Sheetal_Raj.jpg",
        linkedin: "https://www.linkedin.com/in/sheetal-raj-964ab5271"
    },
    {
        id: 4,
        name: "Suraj Kumar",
        role: "Technical Assistant",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Suraj.jpg",
        linkedin: "https://www.linkedin.com/in/suraj-kumar-79b355326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 5,
        name: "Manish Kumar",
        role: "Technical Assistant",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/alumni/Manish_Kumar.jpg",
        linkedin: "https://in.linkedin.com/in/manish-choudhary-55b52026a"
    }

];


const CoreTeam = () => {
    return (
        <section className="py-10 px-6 bg-amber-100">
            <h1 className="text-4xl font-bold text-center mb-6">Core Member</h1>

            {/* Core Member*/}
            <h2 className="text-2xl font-semibold text-center mb-4">

            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {coremember.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                       <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        {/* <p className="text-sm text-gray-500">{member.phone}</p> */}
                        {/* <Link href={`mailto:${member.email}`} className="text-sm text-blue-500 flex items-center justify-center"><AtSign size={20}></AtSign></Link> */}

                    </div>
                ))}
            </div>

            {/* Faculty */}
            <h2 className="text-2xl font-semibold text-center mt-12 mb-4">
                Vriksh Pathshala
            </h2>
            <h2 className="text-0.5xl font-semibold text-center mt-12 mb-4">
                A. Step-Up For IITJEE/NEET
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                
                {faculty.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        {/* <p className="text-sm text-gray-500">{member.phone}</p> */}
                        {/* <Link href={`mailto:${member.email}`} className="text-sm text-blue-500 flex items-center justify-center"><AtSign size={18}></AtSign></Link> */}
                    </div>
                ))}
            </div>
            <h2 className="text-0.5xl font-semibold text-center mt-12 mb-4">
                B. Co-ordinator
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {vrikshpathshala.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        {/* <p className="text-sm text-gray-500">{member.role}</p> */}
                        {/* <p className="text-sm text-gray-500">{member.phone}</p> */}

                        {member.linkedin && (
                            <div className="mt-2 flex justify-center">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
                                </a>
                            </div>
                        )}
                        {/* <Link href={`mailto:${member.email}`} className="text-sm text-blue-500 flex items-center justify-center"><AtSign size={18}></AtSign></Link> */}
                    </div>
                ))}
            </div>

            {/* Federation */}
            <h2 className="text-2xl font-semibold text-center mt-12 mb-4">
                Vriksh Federation
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {vrikshfederation.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        {/* <p className="text-sm text-gray-500">{member.phone}</p> */}
                        {member.linkedin && (
                            <div className="mt-2 flex justify-center">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
                                </a>
                            </div>
                        )}
                        {/* <Link href={`mailto:${member.email}`} className="text-sm text-blue-500 flex items-center justify-center"><AtSign size={18}></AtSign></Link> */}

                    </div>
                ))}
            </div>

            {/* Vriksh Pathshala */}
            
            {/* Student Activity Centre */}
            <h2 className="text-2xl font-semibold text-center mt-12 mb-4">
                Student Activity Centre
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {studentactivitycentre.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        {/* <p className="text-sm text-gray-500">{member.phone}</p> */}

                        {member.linkedin && (
                            <div className="mt-2 flex justify-center">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
                                </a>
                            </div>
                        )}
                        {/* <Link href={`mailto:${member.email}`} className="text-sm text-blue-500 flex items-center justify-center"><AtSign size={18}></AtSign></Link> */}
                    </div>
                ))}
            </div>
            {/* {Technical} */}
            <h2 className="text-2xl font-semibold text-center mt-12 mb-4">
                Technical Team
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {technical.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        {/* <p className="text-sm text-gray-500">{member.phone}</p> */}
                        {member.linkedin && (
                            <div className="mt-2 flex justify-center">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition-colors" />
                                </a>
                            </div>
                        )}
                        {/* <Link href={`mailto:${member.email}`} className="text-sm text-blue-500 flex items-center justify-center"><AtSign size={18}></AtSign></Link> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreTeam;
