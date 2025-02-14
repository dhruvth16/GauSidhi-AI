import cowImg from "../../assets/cow.jpg";

function ImpactSection() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Making a Real Impact
            </h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered platform is revolutionizing Indian cattle farming
              by preserving indigenous breeds, improving milk yield, and
              supporting sustainable farming practices.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-indigo-600">30%</h4>
                <p className="text-gray-600">Increase in Milk Yield</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="text-2xl font-bold text-indigo-600">50+</h4>
                <p className="text-gray-600">Breeds Preserved</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={cowImg}
              alt="Sustainable Farming"
              className="rounded-lg shadow-xl h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
