import { Droplets, Info } from "lucide-react";

export interface HygieneProps {
  activeTab: string;
}

function Hygiene({ activeTab }: HygieneProps) {
  return (
    <>
      {activeTab === "hygiene" && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Hygiene Best Practices
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Droplets className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Daily Cleaning</h3>
                <p className="text-gray-600">
                  Regular cleaning of shelter, feeding area, and water troughs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Info className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Disease Prevention
                </h3>
                <p className="text-gray-600">
                  Regular health checks, vaccination schedule, pest control
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hygiene;
