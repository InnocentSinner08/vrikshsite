import MediaEvent from "@/components/mediaEvent";
import { events_20 } from "./events_20";
import UnderConstruction from "@/components/workinprogress";

const Page = () => {
  return (
  
    <div className="w-full flex flex-wrap gap-4 justify-center p-4 flex-col">
      <div className="font-bold flex text-center text-xl gap-4 items-center justify-center">
        Events of the year 2021
      </div>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {events_20.map((e, idx) => {
          return (
            <MediaEvent
              name={e.name}
              image={e.image}
              content={e.content}
              date={e.date}
              instagram={e.instagram}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
