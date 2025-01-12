import MediaEvent from "@/components/mediaEvent";
import { events_18 } from "./events_18";

const Page = () => {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-center p-4 flex-col">
      <div className="font-bold flex text-center text-xl gap-4 items-center justify-center">
        Events of the year 2018-19
      </div>
      <div className="flex gap-4 items-center justify-center flex-wrap">
        {events_18.map((e, idx) => {
          return (
            <MediaEvent
              name={e.name}
              image={e.image}
              content={e.content}
              // quote={e.quote}
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
