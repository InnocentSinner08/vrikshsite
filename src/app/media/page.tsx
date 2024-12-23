import Link from "next/link";

const Media = () => {
  return (
    <main className="w-full flex flex-wrap justify-between items-center p-6 gap-8">
      <div className="p-4 flex flex-col gap-4">
        <Link
          href="/media/events"
          className="bg-[#D9D9D9] px-4 py-3 text-center font-semibold rounded-sm"
        >
          Ongoing Events
        </Link>
        <Link
          href="/media/events"
          className="bg-[#D9D9D9] px-4 py-3 text-center font-semibold rounded-sm"
        >
          Past Events
        </Link>
        <Link
          href="/blogs"
          className="bg-[#D9D9D9] px-4 py-3 text-center font-semibold rounded-sm"
        >
          Blogs
        </Link>
      </div>
      <div className="flex flex-col grow bg-[#D9D9D9] h-full max-w-[350px] p-4 gap-4 rounded-sm">
        <div className="font-bold text-center">Current Events</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          tenetur quis facere quam rerum officiis dolore, quos, itaque vitae
          odit pariatur omnis atque. Voluptate, temporibus quia? Deleniti
          accusamus dignissimos hic?
        </div>
      </div>
    </main>
  );
};

export default Media;
