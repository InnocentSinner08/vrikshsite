import MediaBody from "@/components/recent-events";
import Link from "next/link";
import { NewspaperIcon, CalendarDaysIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
const Media = () => {
  return (
    <>
      <MediaBody />
      <main className="w-full flex flex-wrap justify-between items-center p-6 gap-8">
        

<div className="p-4 flex flex-row gap-6 justify-center mx-auto">
  <Link
    href="#"
    className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow"
  >
    <NewspaperIcon className="w-5 h-5" />
    Press Release
  </Link>
  <Link
    href="/media/events"
    className="flex items-center gap-2 px-5 py-2 bg-green text-white rounded hover:bg-green-700 transition shadow"
  >
    <CalendarDaysIcon className="w-5 h-5" />
    Past Events
  </Link>
  <Link
    href="#"
    className="flex items-center gap-2 px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition shadow"
  >
    <PencilSquareIcon className="w-5 h-5" />
    Blogs
  </Link>
</div>



      </main>
    </>
  );
};

export default Media;
