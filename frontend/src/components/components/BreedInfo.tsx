function BreedInfo() {
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Breed Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Origin</span>
            <span className="font-medium text-gray-900">Gujarat</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Average Milk Yield</span>
            <span className="font-medium text-gray-900">2000-2500L/year</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Temperature Tolerance</span>
            <span className="font-medium text-gray-900">High</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreedInfo;
