import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";

const Admin = () => {
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
        alert("Debe subir al menos una imagen.");
        return;
      }

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("capacity", data.capacity);
      formData.append("count", data.count);
      formData.append("description", data.description);

      // Adjuntar archivos seleccionados
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/createSuite`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      reset();
    } catch (error) {
      console.log("Error en el backend es:", error);
    }
  });

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  return (
    <div className="flex flex-col items-center py-10 bg-contentColor min-h-screen px-4">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Panel de Administracion
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-gray-700">

        {/* Formulario para crear una nueva suite */}
        <form onSubmit={onSubmit} className="space-y-4">

          {/* Input de nombre de la suite */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
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
              className="w-full px-3 py-2 border rounded-md border-contentColor focus:ring focus:ring-indigo-300 text-gray-800 placeholder:text-gray-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Input del precio de la suite */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Precio de la habitacion
            </label>
            <input
              type="number"
              {...admin("price", {
                required: "El precio es requerido",
                min: { value: 1, message: "El precio debe ser mayor a 0" },
              })}
              placeholder="Precio de la habitacion"
              className="w-full px-3 py-2 border rounded-md border-contentColor focus:ring focus:ring-indigo-300 text-gray-800 placeholder:text-gray-500"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">{errors.price.message}</span>
            )}
          </div>

          {/* Input de la capacidad de la suite */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
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
              className="w-full px-3 py-2 border rounded-md border-contentColor focus:ring focus:ring-indigo-300 text-gray-800 placeholder:text-gray-500"
            />
            {errors.capacity && (
              <span className="text-red-500 text-sm">{errors.capacity.message}</span>
            )}
          </div>

          {/* Input del count de la suite */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Numero de habitaciones
            </label>
            <input
              type="number"
              {...admin("count", {
                required: "El numero de habitaciones es requerido",
                min: { value: 1, message: "Debe haber al menos 1 habitacion" },
                max: { value: 100, message: "Maximo 100 habitaciones" },
              })}
              placeholder="Número de habitaciones disponibles"
              className="w-full px-3 py-2 border rounded-md border-contentColor focus:ring focus:ring-indigo-300 text-gray-800 placeholder:text-gray-500"
            />
            {errors.count && (
              <span className="text-red-500 text-sm">{errors.count.message}</span>
            )}
          </div>

          {/* Input de la descripcion de la suite */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Descripcion
            </label>
            <textarea
              {...admin("description", {
                required: "La descripcion es requerida",
                minLength: { value: 10, message: "Minimo 10 caracteres" },
                maxLength: { value: 50, message: "Maximo 50 caracteres" },
              })}
              placeholder="Descripcion de la habitacion"
              className="w-full px-3 py-2 border rounded-md border-contentColor focus:ring focus:ring-indigo-300 text-gray-800 placeholder:text-gray-500"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description.message}</span>
            )}
          </div>

          {/* Input para subir imagen */}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">
              Subir imagenes
            </label>
            <div className="flex items-center space-x-2">
              <CameraIcon className="w-6 h-6 text-contentColor" />
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-md border-contentColor focus:ring focus:ring-indigo-300 text-gray-800"
              />
            </div>
            {selectedFiles.length === 0 && (
              <span className="text-red-500 text-sm">Debe subir al menos una imagen</span>
            )}
          </div>

          {/* Boton para enviar el formulario */}
          <button
            type="submit"
            className="w-full px-3 py-2 border rounded-md border-gray-300 text-white bg-contentColor hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            <span>Crear suite</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
