import { Heart, Home } from "lucide-react";
import { HygieneProps } from "./Hygiene";

function Care({ activeTab }: HygieneProps) {
  return (
    <>
      {activeTab === "care" && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Basic Care Instructions
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Daily Health Check
                </h3>
                <p className="text-gray-600">
                  Monitor temperature, appetite, and behavior
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Home className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Shelter Requirements
                </h3>
                <p className="text-gray-600">
                  Clean, dry area with proper ventilation
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Care;
