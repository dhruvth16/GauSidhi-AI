import { Leaf } from "lucide-react";
import { HygieneProps } from "./Hygiene";

function Diet({ activeTab }: HygieneProps) {
  return (
    <>
      {activeTab === "diet" && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Balanced Diet Plan
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <Leaf className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Morning Feed</h3>
                <p className="text-gray-600">
                  Green fodder (20-25kg), Concentrate mix (2-3kg)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Leaf className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Afternoon Feed</h3>
                <p className="text-gray-600">
                  Dry fodder (15-20kg), Mineral mixture (50-100g)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Leaf className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Evening Feed</h3>
                <p className="text-gray-600">
                  Mixed fodder (15kg), Concentrate mix (2kg)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Diet;
