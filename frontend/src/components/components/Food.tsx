import { AlertCircle, Sandwich } from "lucide-react";
import { HygieneProps } from "./Hygiene";

function Food({ activeTab }: HygieneProps) {
  return (
    <>
      {activeTab === "food" && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Food Habits Guide
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <Sandwich className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Recommended Foods</h3>
                <p className="text-gray-600">
                  Fresh grass, hay, grain mix, mineral supplements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Foods to Avoid</h3>
                <p className="text-gray-600">
                  Moldy feed, contaminated water, certain weeds
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Food;
