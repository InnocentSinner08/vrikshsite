"use client";
import { useState } from "react";

const events = [
    {
        id: 1,
        title: "Vihangam Yoga Vaidik Hawan",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 1.jpg",
        content: "The VRIKSH BE THE CHANGE organized a Vihangam Yoga Vedic Havan for students in Vriksh Digital Class. This initiative aids in managing stress, enhancing concentration, and fostering inner peace. It also promotes spiritual growth and mental clarity, crucial for students to remain focused on their studies. It also encourages holistic development and instills a sense of discipline and mindfulness in students.",
    },
    {
        id: 2,
        title: "Bihar Times Conclave 2024",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 2.jpg",
        content: "Mr. Chandrakant Pateshwari, Founder of Vriksh Pathshala and part of the trust Vriksh Be The Change, was invited to the Bihar Times Conclave. He shared insights on nurturing young minds and preserving the legacy of Patwatoli, the Village of IITians in Gaya. He was honored with the Change Agent of Bihar award, recognizing the significant impact of Vriksh's efforts in the community, fostering academic excellence and holistic development.",
    },
    {
        id: 3,
        title: "Celebrating Children's Day",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 3.jpg",
        content: "The VRIKSH BE THE CHANGE celebrated Children's Day with immense joy, laughter, and a plethora of fun activities. PATHSHALA students enjoyed exciting games, creating cherished memories. Prizes were awarded to runners and winners, boosting their activeness and relieving stress and anxiety. The games refreshed their minds, promoting physical fitness, teamwork, and cognitive skills development. This celebration fostered a sense of community and holistic development among the students.",
    },
    {
        id: 4,
        title: "Celebrating the sparkle of Diwali",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 4.jpg",
        content: "Celebrating the sparkle of Diwali with the guiding lights who brighten our path every day! Thank you, Sunil Sir, Kuldip Sir, and Yugesh Bhaiya, for your unwavering support, wisdom, and inspiration. Your teachings enlighten our minds and lift our spirits. As we revel in the joy and light of Diwali, we honor the knowledge and joy you bring into our lives. Here's to a festival as radiant as your guidance, fostering growth, unity, and a fresh outlook in our journey.",
    },
    
];

const MediaBody = () => {
    const [openEventId, setOpenEventId] = useState(null);

    const toggleDetails = (id:any) => {
        // Toggle the visibility of event details
        setOpenEventId(openEventId === id ? null : id);
    };

    return (
        <section className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-center mb-10">Recent Events</h1>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="rounded-lg shadow-lg overflow-hidden bg-amber-100 border-2 border-black shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Event Image */}
                        <div className="h-48 w-full relative border-b-2 border-black">
                            <img
                                src={event.imageUrl}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Event Details */}
                        <div className="p-5 text-center">
                            <p className="text-sm text-gray-500 mb-1">
                                {/* {event.subtitle} */}
                            </p>
                            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

                            {/* Toggle Button */}
                            <button
                                onClick={() => toggleDetails(event.id)}
                                className="inline-block text-sm font-medium border border-gray-900 py-2 px-5 hover:bg-gray-900 hover:text-white transition-all"
                            >
                                {openEventId === event.id ? "HIDE DETAILS" : "READ MORE"}
                            </button>

                            {/* Event Content (Dropdown) */}
                            {openEventId === event.id && (
                                <div className="mt-4 text-left text-gray-700">
                                    <p>{event.content}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MediaBody;