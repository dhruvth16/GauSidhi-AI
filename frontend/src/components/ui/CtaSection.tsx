import { useNavigate } from "react-router-dom";
import Button from "./Button";

function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Join the AI-Powered Farming Revolution!
        </h2>
        <Button
          text="Sign Up for Early Access"
          size="lg"
          variant="secondary"
          onClick={() => navigate("/register")}
        />
        <div className="mt-12">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-l-full w-64 focus:outline-none bg-white"
          />
          <button className="bg-gray-900 text-white px-6 py-3 rounded-r-full hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
