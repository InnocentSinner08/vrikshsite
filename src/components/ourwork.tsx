"use client"
import Image from 'next/image';
import { useState } from 'react';

type Part = {
    id: number;
    name: string;
    img: string;
    intro: string;
    desc: string;
    quote: string;
};

const parts: Part[] = [
    {
        id: 1,
        name: "Vriksh Music Class",
        img: "/images/homepage/slider1.jpg",
        intro: "Small Intro",
        desc: "At Vriksh Be The Change, we believe in holistic development, which is why we introduced VRIKSH MUSIC CLASS every Sunday from 4:00 PM to 6:00 PM to encourage extracurricular activities. Music fosters collaboration, patience, and creativity, helping students grow beyond academics. Our classes teach music theory, reading music, and playing instruments like the piano, trumpet, flute, violin, and more. Since its launch, the initiative has received an overwhelming response, with both Vriksh students and others joining to explore and enhance their musical talents. Through this program, we aim to nurture young minds, provide better opportunities, and inspire a lifelong love for music.",
        quote: "Music is a language that doesn't speak in particular words….."
    },
    {
        id: 2,
        name: "Vriksh Digital Class",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "VRIKSH DIGITAL CLASS is a transformative initiative by VRIKSH BE THE CHANGE, aimed at providing quality education through technology, especially for students lacking access to traditional classrooms. This program equips learners with modern skills, personalized support, and interactive learning experiences, ensuring they stay engaged and prepared for the future. By allowing students to learn at their own pace and collaborate with peers, the Digital Class fosters a strong educational community. With its positive impact on student engagement and accessibility, this initiative is making a significant difference in shaping brighter futures.",
        quote: "The more that you read, the more things you will know...."
    },
    {
        id: 3,
        name: "Vriksh Sports Club",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "VRIKSH SPORTS CLUB is a vibrant community for sports and fitness enthusiasts, offering indoor games like Table Tennis, Carrom, and Chess, along with outdoor sports such as Cricket, Badminton, and Football. It’s a space where individuals come together to stay active, interact with like-minded people, and motivate each other. Beyond physical fitness, sports instill teamwork, discipline, dedication, and perseverance, essential values for success in life. The club not only enhances physical abilities but also fosters social connections and personal growth, making it a perfect place for holistic development.",
        quote: "Sports not only test our physical abilities but also teach us the value of teamwork, hard work, and perseverance..."
    },
    {
        id: 4,
        name: "Student Activity Centre",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "STUDENT ACTIVITY CENTRE at VRIKSH BE THE CHANGE is a dynamic space designed to encourage students to exchange ideas, engage in discussions, and participate in diverse programs. It serves as a hub for learning, creativity, and collaboration, allowing students to relax, debate, and broaden their perspectives.  Rakhi Making Activity :As a heartfelt tribute, VRIKSH PATHSHALA students are crafting 1,000 Rakhis for our brave soldiers at the border, sending them love, respect, and gratitude through this meaningful gesture.",
        quote: "You learn by doing, and by falling over..."

    },
    {
        id: 5,
        name: "Shankaracharya Math Library",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "The Shankaracharya Math Library, also known as Bodhgaya Math, is a spiritual and cultural hub located in Bodhgaya, renowned for its involvement in social causes and religious discourses. The monastery houses a library, temple, cultural center, and a farm, offering a space for reflection, learning, and community activities. The library is home to a vast collection of ancient manuscripts, which are accessible to students for research and reading. Recognizing the importance of preserving these invaluable texts, the library is actively engaged in the digitization of manuscripts, a project in collaboration with the National Mission for Manuscripts to ensure their conservation and accessibility for future generations",
        quote:"The only thing that you absolutely have to know is the location of the library..."

    },
    {
        id: 6,
        name: "Vriksh Digital Class 2.0",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "Following the immense success of VRIKSH DIGITAL CLASS, the VRIKSH TEAM has launched VRIKSH DIGITAL CLASS 2.0, an enhanced and more efficient platform for students to learn. The main goal of this initiative is to provide a convenient learning environment for students from all localities, with the flexibility to study late into the night. The facility includes a restroom where students can take a break and recharge. Digital Class 2.0 aims to make students more knowledgeable, helping them prepare for the future. With more students expected to join, this initiative will open up opportunities for those with limited access to resources, promoting growth and learning together.",
        quote: "Great things never come from comfort zones..."
    },
    {
        id: 7,
        name: "Vriksh Public Library",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "VRIKSH BE THE CHANGE takes great pride in offering a Public Library that is accessible to everyone. The library boasts an extensive collection of books, magazines, and digital resources, all available for free. Public libraries play a crucial role in promoting literacy, critical thinking, and cultural understanding, and our library is no exception. It serves as a community hub, where people from diverse backgrounds can connect, share ideas, and learn from one another. The library is an inviting space for individuals of all ages, from students to adult learners, and by fostering a love for reading and providing free access to knowledge, it empowers individuals and opens doors to growth and learning.",
        quote: "In a world driven by technology, the library remains a sanctuary for the curious and a bridge to vast realms of knowledge..."
    },
    {
        id: 8,
        name: "Vriksh Student Federation",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "The concept of the VRIKSH STUDENTS FEDERATION originated from the students of VRIKSH PATHSHALA, who were eager to turn their ideas into reality. When a group of students approached us with their vision for forming this federation, we were truly impressed. The VRIKSH TEAM is delighted to support these students in bringing their ideas to life through this federation. To contribute to the welfare of students' education, the Vriksh Students Federation collects a small donation of one rupee per day from both students and alumni. This initiative aims to support and uplift students in their academic pursuits, fostering a sense of community and collaboration for a brighter future.",
        quote: "The future belongs to those who believe in the beauty of their dreams..."
    },
    {
        id: 9,
        name: "Vriksh Pathshala - Nur - Class 10",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "VRIKSH BE THE CHANGE offers VRIKSH PATHSHALA, an educational program for children from nursery to tenth grade, where seniors teach juniors in a supportive, inclusive environment. PATHSHALA bridges the educational gap, helping students improve academically, build confidence, and develop life skills. The program fosters empathy, social responsibility, and a love for learning while providing a safe space for growth. VRIKSH is dedicated to empowering the next generation through education.",
        quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
    },
    {
        id: 10,
        name: "Vriksh Pathshala - Step-Up For IITJEE/NEET",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "VRIKSH PATHSHALA also offers a STEP-UP program for IITJEE/NEET, helping students excel in competitive exams for engineering and medical fields. We thank the NEET-JEE ACADEMY for providing online classes and weekly tests. With expert teachers and a strategic approach, students gain a strong understanding of concepts. Regular tests build confidence and time-management skills, leading to top ranks and admission to prestigious institutes. Beyond academics, we promote personal growth, community spirit, and empowerment. Join us to unlock opportunities and transform lives.",
        quote: "Your hard work today will shape the trajectory of your future success..."
    },
    {
        id: 11,
        name: "Vriksh Sanskarshala",
        img: "/images/education.jpg",
        intro: "Small Intro",
        desc: "Vriksh Sanskarshala, part of VRIKSH BE THE CHANGE, teaches students essential values (sanskar) like respecting elders and addressing seniors as Bhaiya or Didi. In Vriksh Pathshala, senior students act as teachers, and gratitude is expressed after each class. Chandrakant Bhaiya, the founder, stresses that the goal in life is to be a good human being, not just wealthy. This holistic approach helps students grow with integrity, kindness, and the ability to face life’s challenges.",
        quote: "True success is not measured by wealth, but by the kindness, respect, and integrity we bring to the world...."
    },

];

export default function Ourwork() {
    const [selectedPart, setSelectedPart] = useState<Part | null>(null);

    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>

                {parts.map((part, index) => (
                    <div
                        key={part.id}
                        className={`flex flex-col md:flex-row items-center gap-6 mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Image Section with Hover Effect */}
                        <div className="relative w-full md:w-1/2 group">
                            <Image
                                src={part.img}
                                alt={part.name}
                                width={500}
                                height={300}
                                className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Hover Content (Intro) */}
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h3 className="text-2xl font-semibold">{part.name}</h3>
                            <p className="text-gray-600 mt-2">{part.desc.length > 200 ? part.desc.substring(0, 200) + "..." : part.desc}</p>

                            
                            <p className="italic text-gray-500 mt-2">&ldquo;{part.quote}&rdquo;</p>

                            <button
                                onClick={() => setSelectedPart(part)}
                                className="mt-2 text-green hover:underline"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}

                {/* Popup Modal for Read More */}
                {selectedPart && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                            <h3 className="text-2xl font-semibold mb-4">{selectedPart.name}</h3>
                            <p className="text-gray-700">{selectedPart.desc}</p>

                           
                            <p className="italic text-gray-500 mt-4">&ldquo;{selectedPart.quote}&rdquo;</p>
                            {/* Quote in italics and inverted commas */}

                            <button
                                onClick={() => setSelectedPart(null)}
                                className="mt-4 px-4 py-2 bg-green text-white rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}