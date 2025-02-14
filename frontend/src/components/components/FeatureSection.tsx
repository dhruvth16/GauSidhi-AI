import {
  Database,
  FileSearch,
  Heart,
  LineChart,
  Microscope,
  Smartphone,
} from "lucide-react";
import Card from "../ui/Card";

function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          What Makes Us Unique?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={<FileSearch className="w-8 h-8" />}
            title="AI Breed Detection"
            desc="Identify cow breeds instantly"
          />
          <Card
            icon={<LineChart className="w-8 h-8" />}
            title="Population Analysis"
            desc="Track breed population trends"
          />
          <Card
            icon={<Heart className="w-8 h-8" />}
            title="AI Disease Detection"
            desc="Diagnose diseases & get treatment recommendations"
          />
          <Card
            icon={<Database className="w-8 h-8" />}
            title="Smart Breeding"
            desc="AI-based breeding pair selection"
          />
          <Card
            icon={<Microscope className="w-8 h-8" />}
            title="Genetic Research"
            desc="Improve milk yield & breed resilience"
          />
          <Card
            icon={<Smartphone className="w-8 h-8" />}
            title="Farmer-Friendly App"
            desc="Easy access to all insights"
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
