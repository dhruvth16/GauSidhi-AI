import { useState } from "react";
import { Leaf, Heart, Sandwich, Droplets } from "lucide-react";
import Hygiene from "../components/components/Hygiene";
import Food from "../components/components/Food";
import Care from "../components/components/Care";
import Diet from "../components/components/Diet";
import BreedInfo from "../components/components/BreedInfo";
import QuickTips from "../components/components/QuickTips";

const breeds = [
  { id: 1, name: "Gir", origin: "Gujarat", milkYield: "1800-2500L/year" },
  { id: 2, name: "Sahiwal", origin: "Punjab", milkYield: "2000-2500L/year" },
  { id: 3, name: "Red Sindhi", origin: "Sindh", milkYield: "1700-2200L/year" },
  {
    id: 4,
    name: "Tharparkar",
    origin: "Rajasthan",
    milkYield: "1800-2300L/year",
  },
  { id: 5, name: "Rathi", origin: "Rajasthan", milkYield: "1600-2100L/year" },
];

function FarmerDashboard() {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [age, setAge] = useState("");
  const [milkProduction, setMilkProduction] = useState("");
  const [activeTab, setActiveTab] = useState("diet");

  return (
    <>
      <div className="p-6 max-w-7xl mx-auto pt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Breed Care Management
          </h1>
          <p className="text-gray-600">
            Comprehensive care guide for your cattle
          </p>
        </div>

        {/* Breed Selection and Info Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Breed
            </label>
            <select
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Choose a breed</option>
              {breeds.map((breed) => (
                <option key={breed.id} value={breed.name}>
                  {breed.name}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age (in years)
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter age"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Daily Milk Production (L)
            </label>
            <input
              type="number"
              value={milkProduction}
              onChange={(e) => setMilkProduction(e.target.value)}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter milk production"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {[
              {
                id: "diet",
                name: "Diet Plan",
                icon: <Leaf className="h-5 w-5" />,
              },
              {
                id: "care",
                name: "Care Instructions",
                icon: <Heart className="h-5 w-5" />,
              },
              {
                id: "food",
                name: "Food Habits",
                icon: <Sandwich className="h-5 w-5" />,
              },
              {
                id: "hygiene",
                name: "Hygiene Tips",
                icon: <Droplets className="h-5 w-5" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                border-b-2 py-4 px-1 flex items-center space-x-2
                ${
                  activeTab === tab.id
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Diet activeTab={activeTab} />

            <Care activeTab={activeTab} />

            <Food activeTab={activeTab} />

            <Hygiene activeTab={activeTab} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Breed Information */}
            <BreedInfo />
            {/* Quick Tips */}
            <QuickTips />
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmerDashboard;
