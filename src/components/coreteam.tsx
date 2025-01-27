"use client";

const executiveTeam = [
    {
        id: 1,
        name: "Chandrakant Pateshwari",
        role: "Founder and Secretary",
        phone: "+48 30 40 95 13",
        email: "joan@supply.co",
        imageUrl: "/images/team/john-anderson.jpg",
    },
    {
        id: 2,
        name: "Ranjeet Kumar",
        role: "Treasurer",
        phone: "+48 30 40 95 28",
        email: "math@supply.co",
        imageUrl: "/images/team/maria-thompson.jpg",
    },
    {
        id: 3,
        name: "Dugeshwar Kumar",
        role: "President",
        phone: "+48 30 40 95 39",
        email: "olsm@supply.co",
        imageUrl: "/images/team/olivia-smith.jpg",
    },
    {
        id: 4,
        name: "Vishal Ranjan",
        role: "CMO",
        phone: "+48 30 40 95 47",
        email: "sawi@supply.co",
        imageUrl: "/images/team/sarah-williams.jpg",
    },
    {
        id: 5,
        name: "Kishunchand",
        role: "Lorem Forem",
        phone: "+48 30 40 95 56",
        email: "jacl@supply.co",
        imageUrl: "/images/team/james-clark.jpg",
    },
    {
        id: 6,
        name: "Bindu Devi",
        role: "Lorem Forem",
        phone: "+48 30 40 95 64",
        email: "emda@supply.co",
        imageUrl: "/images/team/emily-davis.jpg",
    },
    {
        id: 7,
        name: "PremLal",
        role: "Lorem Forem",
        phone: "+48 30 40 95 72",
        email: "miga@supply.co",
        imageUrl: "/images/team/michael-garcia.jpg",
    }
];

const boardOfDirectors = [
    {
        id: 4,
        name: "Mr. Kuldip Prasad",
        role: "Executive Member of Step- Up for IIT JEE",
        phone: "+48 30 40 95 81",
        email: "olma@supply.co",
        imageUrl: "/images/team/olivia-martinez.jpg",
    },
    {
        id: 5,
        name: "Dr. Sunil Kumar",
        role: "Executive Member of Step- Up for IIT JEE",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/greta-harris.jpg",
    },
    {
        id: 6,
        name: "Dinesh Kumar Sharma",
        role: "Math Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/greta-harris.jpg",
    },
    {
        id: 7,
        name: "Dr.  Madhumita Patel",
        role: "Biology Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/greta-harris.jpg",
    },
    {
        id: 8,
        name: "Dr. H.S. Jaggi",
        role: "Physics Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/greta-harris.jpg",
    },
    {
        id: 9,
        name: "Mr. Vijay Kumar Giri",
        role: "Maths Faculty",
        phone: "+48 30 40 95 90",
        email: "grha@supply.co",
        imageUrl: "/images/team/greta-harris.jpg",
    },
];

const CoreTeam = () => {
    return (
        <section className="py-10 px-6 bg-amber-100">
            <h1 className="text-4xl font-bold text-center mb-6">Core Team</h1>

            {/* Executive Leadership Team */}
            <h2 className="text-2xl font-semibold text-center mb-4">

            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {executiveTeam.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <div className="relative w-28 h-28 mx-auto rounded-full">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="absolute inset-[5%] w-[90%] h-[90%] rounded-full border-2 border-gray-300"
                            />
                        </div>
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <p className="text-sm text-gray-500">{member.phone}</p>
                        <p className="text-sm text-blue-500">{member.email}</p>

                    </div>
                ))}
            </div>

            {/* Board of Directors */}
            <h2 className="text-2xl font-semibold text-center mt-12 mb-4">
                
            </h2>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-6xl mx-auto">
                {boardOfDirectors.map((member) => (
                    <div key={member.id} className="text-center flex-shrink-0 w-[200px]">
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300"
                        />
                        <h3 className="font-semibold mt-3">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        <p className="text-sm text-gray-500">{member.phone}</p>
                        <p className="text-sm text-blue-500">{member.email}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreTeam;
