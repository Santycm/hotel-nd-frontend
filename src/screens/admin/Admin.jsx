import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const redirect = useNavigate()

  const {
    register: admin,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (selectedFiles.length === 0) {
        alert("Debe subir al menos una imagen");
        return;
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("capacity", data.capacity);
      formData.append("count", data.count);
      formData.append("description", data.description);

  
      selectedFiles.forEach((file) => {
        formData.append("image_gallery", file); 
      });

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/createSuite`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      alert('Suite creada correctamente'); 
      reset(); 
    } catch (error) {
      console.error("Error en el backend es:", error);
      alert('Fallo creacion de suite'); 
    }
  });

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleNavigation =(path)=>{
    redirect(path);
  }

  return (
    <div className="min-h-screen bg-contentColor py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-gray-900 py-6 bg-gray-50 border-b border-gray-200">
        Panel de Administracion
      </h1>
      <div className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre de la habitacion
            </label>
            <input
              type="text"
              {...admin("name", {
                required: "El nombre de la habitacion es requerido",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
              })}
              placeholder="Nombre de la habitacion"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio de la habitacion
            </label>
            <input
              type="number"
              {...admin("price", {
                required: "El precio es requerido",
                min: { value: 1, message: "El precio debe ser mayor a 0" },
              })}
              placeholder="Precio de la habitacion"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
            {errors.price && (
              <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacidad
            </label>
            <input
              type="number"
              {...admin("capacity", {
                required: "La capacidad es requerida",
                min: { value: 1, message: "Debe haber al menos 1 persona" },
                max: { value: 5, message: "Maximo 5 personas" },
              })}
              placeholder="Capacidad de la habitacion"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
            {errors.capacity && (
              <span className="text-red-500 text-sm mt-1">{errors.capacity.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Numero de habitaciones
            </label>
            <input
              type="number"
              {...admin("count", {
                required: "El numero de habitaciones es requerido",
                min: { value: 1, message: "Debe haber al menos 1 habitacion" },
                max: { value: 10, message: "Maximo 100 habitaciones" },
              })}
              placeholder="Numero de habitaciones disponibles"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
            {errors.count && (
              <span className="text-red-500 text-sm mt-1">{errors.count.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripcion
            </label>
            <textarea
              {...admin("description", {
                required: "La descripcion es requerida",
                minLength: { value: 10, message: "Minimo 10 caracteres" },
                maxLength: { value: 100, message: "Maximo 100 caracteres" },
              })}
              placeholder="Descripcion de la habitacion"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
            {errors.description && (
              <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subir imagenes
            </label>
            <div className="flex items-center space-x-2">
              <CameraIcon className="w-6 h-6 text-gray-400" />
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Crear suite
            </button>
            <button 
              onClick={() => handleNavigation("/allreservation")} 
              className="w-full px-4 py-2 border border-gray-800 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Ver reservas
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Admin;
