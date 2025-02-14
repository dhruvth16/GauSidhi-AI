import { Droplets, Heart, Shrub } from "lucide-react";

function QuickTips() {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-green-100 rounded-full">
              <Shrub className="h-4 w-4 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">
              Maintain regular feeding schedule
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-blue-100 rounded-full">
              <Droplets className="h-4 w-4 text-blue-600" />
            </div>
            <p className="text-sm text-gray-600">
              Ensure clean water availability
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-purple-100 rounded-full">
              <Heart className="h-4 w-4 text-purple-600" />
            </div>
            <p className="text-sm text-gray-600">Regular health check-ups</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickTips;
