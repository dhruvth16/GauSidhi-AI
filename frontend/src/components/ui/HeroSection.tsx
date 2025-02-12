import Button from "./Button";
import cowGif from "../../assets/cow-gif.gif";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-100 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Reviving Indian Cow Breeds with AI & Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI-driven breed detection, disease diagnosis, smart breeding, and
              genetic enhancement in one platform.
            </p>
            <div className="flex space-x-4">
              <Button
                text="Try Now"
                size="lg"
                variant="primary"
                onClick={() => navigate("/login")}
              />
              <Button text="Learn More" size="lg" variant="secondary" />
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={cowGif}
              alt="AI Cow Detection"
              className="rounded-lg shadow-xl h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
