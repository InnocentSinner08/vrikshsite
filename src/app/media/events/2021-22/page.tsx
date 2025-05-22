import MediaEvent from "@/components/mediaEvent";
import { events_21 } from "./events_21";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Events of the year 2021-22</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl">
        {events_21.map((e, idx) => (
          <MediaEvent
            key={idx}
            name={e.name}
            image={e.image}
            content={e.content}
            date={e.date}
            instagram={e.instagram}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
