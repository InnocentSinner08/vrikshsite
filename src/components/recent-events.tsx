"use client";
import { useState } from "react";

const events = [
    {
        id: 1,
        title: "Event-1",
        subtitle: "Caption",
        imageUrl: "/images/events/homepage-1.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum mauris ut erat volutpat, nec tincidunt metus tempus.",
    },
    {
        id: 2,
        title: "Event-2",
        subtitle: "Caption",
        imageUrl: "/images/events/homepage-2.jpg",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
        id: 3,
        title: "Event-3",
        subtitle: "Caption",
        imageUrl: "/images/events/homepage-3.jpg",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    },
    {
        id: 4,
        title: "Event-4",
        subtitle: "Caption",
        imageUrl: "/images/events/homepage-4.jpg",
        content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
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
                                {event.subtitle}
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
