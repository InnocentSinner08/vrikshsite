import MediaBody from "@/components/recent-events";
import Link from "next/link";

const Media = () => {
  return (
    <>
    <MediaBody/>
    <main className="w-full flex flex-wrap justify-between items-center p-6 gap-8">
      <div className="p-4 flex flex-row gap-10 justify-center mx-auto">
        <Link
          href="#"
          className="bg-[#D9D9D9] px-4 py-3 text-center font-semibold rounded-sm"
        >
          Press Release
        </Link>
        <Link
          href="/media/events"
          className="bg-[#D9D9D9] px-4 py-3 text-center font-semibold rounded-sm"
        >
          Past Events
        </Link>
        <Link
          href="#"
          className="bg-[#D9D9D9] px-4 py-3 text-center font-semibold rounded-sm"
        >
          Blogs
        </Link>
      </div>
     
    </main>
    </>
  );
};

export default Media;
