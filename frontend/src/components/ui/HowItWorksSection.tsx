import Card from "./Card";
import { Brain, Database, LineChart, Upload } from "lucide-react";

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          How Our AI Helps Farmers & Researchers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card
            icon={<Upload className="w-8 h-8" />}
            title="Upload a Cow Image"
            desc="AI detects breed & health status"
          />
          <Card
            icon={<LineChart className="w-8 h-8" />}
            title="Get Instant Analysis"
            desc="See population trends & disease risks"
          />
          <Card
            icon={<Brain className="w-8 h-8" />}
            title="Receive Smart Suggestions"
            desc="Get breeding & treatment recommendations"
          />
          <Card
            icon={<Database className="w-8 h-8" />}
            title="Track & Improve"
            desc="Monitor breed health & optimize farming"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
