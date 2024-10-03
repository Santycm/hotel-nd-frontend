export const Cards = () => {
    
  return (
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="./src/assets/imgHotel1.jpg" alt="hotel" className="w-full h-48 object-cover" />
        <div className="card-info p-4">
          <h2 className="text-xl font-bold mb-2">Hotel 1</h2>
          <p className="text-gray-700">Descripción del hotel 1</p>
        </div>
      </div>
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="./src/assets/imgHotel1.jpg" alt="hotel" className="w-full h-48 object-cover" />
        <div className="card-info p-4">
          <h2 className="text-xl font-bold mb-2">Hotel 2</h2>
          <p className="text-gray-700">Descripción del hotel 2</p>
        </div>
      </div>
      <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="./src/assets/imgHotel1.jpg" alt="hotel" className="w-full h-48 object-cover" />
        <div className="card-info p-4">
          <h2 className="text-xl font-bold mb-2">Hotel 3</h2>
          <p className="text-gray-700">Descripción del hotel 3</p>
        </div>
      </div>
    </div>
  );
}