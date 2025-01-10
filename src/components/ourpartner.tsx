"use client";

import { useState } from "react";

const partners = [
    // {
    //     id: 1,
    //     name: "JEEVIKA",
    //     imageUrl: "/images/ourpartner/jeevika logo.png",
    //     description: `JEEVIKA is our new collaborator, aims for free and fair education to underprivileged children. Jeevika is a government-supported initiative in Bihar, aimed at promoting rural livelihoods and empowering women through various interventions like self-help groups, skill development, and entrepreneurship.<br /><br />
    //     VRIKSH TEAM seeks to enhance the economic and social status of women in rural areas and improve their livelihood opportunities.<br /><br />
    //     Recently, we addressed 6000 students from 100 library centers running with the help of JEEVIKA from 32 districts of Bihar. We will install VRIKSH MODEL OF EDUCATION in each JEEVIKA’s library center as soon as possible.`,
    //   },
      {
        id: 2,
        name: "NEET-JEE ACADEMY",
        imageUrl: "/images/ourpartner/NeetJee_logo.png",
        description: `NEET-JEE ACADEMY is one of the close member in our STEP UP FOR NEET/JEE preparation, aiming free and fair education. With the help of Kuldip Sir and Sunil Sir who is running NEET-JEE ACADEMY in Delhi,VRIKSH students get mentors for JEE/NEET preparation through online classes. They teach their academic students offline and VRIKSH students online at the same time. They also support free offline classes to VRIKSH students at DELHI centre. They provides books at the minimal cost and test papers to us.<br /><br />
        We would like to thank Rajeev Ranjan Sir, Dinesh Sir, Jaggi Sir, Vijay Sir, Madhumati Ma'am, Ramchandra Sir who give their valuable time to our students and we hope that they will always support us in our FREE AND FAIR EDUCATION. We are sure the number of the mentors will keep increasing.`,
      },
      {
        id: 3,
        name: "NSS IIT Bombay",
        imageUrl: "/images/ourpartner/NSS Logo.png",
        description: `The National Service Scheme at IIT Bombay, being the largest student volunteer body, is the most active and persevering organization on campus in the field of social and community service, providing opportunities to students to contribute their bit to the welfare of society. NSS has departments spanning all avenues of community service right from educating the underprivileged to innovating solutions to social problems using technology.<br /><br />
        VRIKSH BE THE CHANGE would like to thank the NSS and IIT Bombay for doing an outstanding job of empowering students in their academic journey. Through live doubt classes, tutoring, and mentoring, they strive to make education accessible and inspiring.<br /><br />
        Special thanks to VRIKSH's alumni who constantly work for these and schedule proper classes.`,
      },
      {
        id: 4,
        name: "SBI",
        imageUrl: "/images/ourpartner/SBI logo.png",
        description: `VRIKSH BE THE CHANGE would like to express deep gratitude to the State Bank of India (SBI) for their instrumental support in setting up Digital Class 2.0. We highly appreciate SBI's generous contribution in providing essential equipment such as a TV, Inverter, Battery, Projector, and Study tables.<br /><br />
        The CSR (Corporate Social Responsibility) Activity undertaken by SBI is truly commendable, and the VRIKSH TEAM extends special thanks to CGM (Chief General Manager) Shri Om Dikshit Ji and his SBI TEAM for their commitment to supporting VRIKSH BE THE CHANGE in the future.`,
      },
      {
        id: 5,
        name: "Unique English School",
        imageUrl: "/images/ourpartner/SBI logo.png",
        description: `Unique English School is one of the close partners of VRIKSH BE THE CHANGE. This school is supporting a number of students of our trust by providing free and fair education.<br /><br />
        The VRIKSH TEAM was invited to participate in the SOCIO-SCIENCE EXHIBITION held in 201 6 by the director of the school, Hitendra Sir. PRIZE DISTRIBUTION was organized by the VRIKSH TEAM to the students who made projects to support societal change under the guidance of teachers.`,
      },
      {
        id: 6,
        name: "Concept N Solution",
        imageUrl: "/images/ourpartner/ConceptNSolution .jpg",
        description: `Concept N Solution is a vital collaborator in our NEET/JEE preparation, providing invaluable support with test papers and detailed solutions. This Gurugram-based institute helps Vriksh students grasp complex concepts and identify weak areas in their syllabus. Their comprehensive modules cover the entire syllabus, ensuring thorough preparation. The institute's practice papers, solution explanations, and strategic approach significantly boost confidence and competence. With expert guidance from experienced faculty, students gain insights and tips crucial for excelling in competitive exams. Partnering with Concept N Solution greatly enhances Vriksh students' chances of success in NEET/JEE exams.<br /><br />`,
      }
];

const Partners = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-10">Our Partners</h1>

            <div className="flex flex-col gap-8">
                {partners.map((partner, index) => (
                    <div
                        key={partner.id}
                        className={`flex items-center gap-5 border-b border-gray-300 pb-4 ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                        {/* Circle Image */}
                        {partner.name === "NeetJee" ? (
                            <div className="w-32 h-32 bg-gray-300 overflow-hidden">
                                <img
                                    src={partner.imageUrl}
                                    alt={partner.name}
                                    className="w-full h-full object-center"
                                />
                            </div>
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden border border-[#30BD19]">
                                <img
                                    src={partner.imageUrl}
                                    alt={partner.name}
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
                            <div
                                className={`text-gray-700 ${
                                    expandedId === partner.id ? "" : "line-clamp-2"
                                }`}
                                dangerouslySetInnerHTML={{ __html: partner.description }}
                            />
                            {partner.description.length > 100 && (
                                <button
                                    onClick={() => toggleExpand(partner.id)}
                                    className="text-blue-500 mt-2"
                                >
                                    {expandedId === partner.id ? "Show Less ▲" : "Read More ▼"}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
