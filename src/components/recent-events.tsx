"use client";
import { useState } from "react";

const events = [
    {
        id: 1,
        title: "Vihangam Yoga Vaidik Hawan",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 1.jpg",
        content: "At Vriksh Be The Change, we believe in holistic development that nurtures both the mind and the soul. This Vedic Havan, guided by Vihangam Yoga principles, was organized to bring positivity, focus, and spiritual well-being to our students.The sacred rituals and teachings provided an opportunity for everyone to connect with their inner selves while fostering discipline and mindfulness. Together, we aim to create a balance of education, values, and spirituality for a brighter future.",
    },
    {
        id: 2,
        title: "Bihar Times Conclave 2024",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 2.jpg",
        content: "Mr. Chandrakant Pateshwari, the visionary founder of Vriksh Pathshala and a pillar of Vriksh Be The Change, was invited to the prestigious Bihar Times Conclave.In his inspiring address, he highlighted the importance of nurturing young minds and preserving the rich legacy of Patwatoli—the Village of IITians in Gaya. His relentless dedication to education and holistic development has transformed countless lives, making a lasting impact on the community.Honored with the Change Agent of Bihar Award, this recognition is a testament to Vriksh's mission of empowering the less privileged through academic excellence and values. 🌱📚",
    },
    {
        id: 3,
        title: "Celebrating Children's Day",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 3.jpg",
        content: "With endless joy, laughter, and enthusiasm, Children's Day was celebrated with our amazing PATHSHALA students. The day was packed with exciting games and activities that created cherished memories and boosted their spirits.Prizes were awarded to winners and runners-up, encouraging participation and promoting active engagement. The games not only refreshed their minds but also enhanced physical fitness, teamwork, and cognitive skills, fostering holistic development.This celebration was more than just fun—it was a day of bonding, learning, and nurturing young minds in a stress-free and happy environment.",
    },
    {
        id: 4,
        title: "Celebrating the sparkle of Diwali",
        subtitle: "Caption",
        imageUrl: "/images/events/Home Page Event - 4.jpg",
        content: "This Diwali, we express heartfelt gratitude to Sunil Sir, Kuldip Sir, and Yugesh Bhaiya, the pillars of wisdom and inspiration who brighten our path every day. Your unwavering support and invaluable teachings illuminate our minds and uplift our spirits.As we celebrate the festival of lights, we honor the knowledge and joy you bring into our lives, fostering growth, unity, and a fresh perspective in our journey. May this Diwali be as radiant as your guidance, filling our hearts with warmth and positivity. ",
    },

];

const MediaBody = () => {
    const [openEventId, setOpenEventId] = useState<number | null>(null);

    const toggleDetails = (id: number) => {
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
                        className="rounded-lg shadow-lg overflow-hidden bg-amber-100 border-2 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Event Image */}
                        <div className="h-48 w-full relative border-b-2">
                            <img
                                src={event.imageUrl}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Event Details */}
                        <div className="p-5 text-center relative">
                            <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

                            {/* Toggle Button */}
                            <button
                                onClick={() => toggleDetails(event.id)}
                                className="inline-block text-sm font-medium border py-2 px-5 hover:bg-gray-900 hover:text-white transition-all"
                            >
                                {openEventId === event.id ? "HIDE DETAILS" : "READ MORE"}
                            </button>

                            {/* Event Content (Expanding with Animation) */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openEventId === event.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="mt-4 text-left text-gray-700">{event.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MediaBody;
