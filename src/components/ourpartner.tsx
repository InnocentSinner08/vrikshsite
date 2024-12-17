"use client";

import { useState } from "react";

const partners = [
    {
        id: 1,
        name: "Partner 1",
        imageUrl: "/partner1.jpg",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum mauris ut erat volutpat, nec tincidunt metus tempus. Integer in turpis velit.",
    },
    {
        id: 2,
        name: "Partner 2",
        imageUrl: "/partner2.jpg",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
        id: 3,
        name: "Partner 3",
        imageUrl: "/partner3.jpg",
        description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
    },
    {
        id: 4,
        name: "Partner 3",
        imageUrl: "/partner3.jpg",
        description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",  
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
                        <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">
                            <img
                                src={partner.imageUrl}
                                alt={partner.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
                            <p
                                className={`text-gray-700 ${
                                    expandedId === partner.id
                                        ? "line-clamp-none"
                                        : "line-clamp-2"
                                }`}
                            >
                                {partner.description}
                            </p>
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
