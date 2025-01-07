const Impact = () => {
  return (
    <div className="bg-[#D9D9D9] flex flex-col gap-2 py-10 md:py-12">
      <div className="text-center text-3xl font-bold ">OUR IMPACT</div>
      <div className="w-full p-4 grid md:grid-cols-4 gap-4 grid-cols-2 bg-[#D9D9D9] items-center">
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">990+</div>
          <div className="text-green text-xl"></div>
          <div className="text-xs">No. of Students Helped</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">10K+</div>
          <div className="text-green text-xl"></div>
          <div className="text-xs">Library footfall</div>
        </div>

        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">30000</div>
          <div className="text-green text-xl"></div>
          <div className="text-xs">masks donated by vriksh during corona</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-2">
          <div className="font-extrabold text-4xl text-green">100+</div>
          <div className="text-green text-xl"></div>
          <div className="text-xs">students studying in IIT/NIT.</div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
