import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const Admin = () => {
  const {
    register: admin,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);

  // Manejar el envio del formulario
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
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Admin</h1>

      <div className="bg-slate-800 p-8 rounded-md shadow-lg w-full max-w-md text-white">

        {/*Formulario para crear una nueva suite*/}

        <form onSubmit={onSubmit} className="space-y-4">

          {/*Input de nombre de la suite*/}
          <div>
            <input
              type="text"
              {...admin("name", {
                required: "El nombre de la habitacion es requerido",
                minLength: {
                  value: 2,
                  message:
                    "El nombre de la habitacion debe tener al menos 2 caracteres",
                },
              })}
              placeholder="Nombre de la habitacion"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/*Input del precio de la suite*/}
          <div>
            <input
              type="number"
              {...admin("price", {
                required: "El precio de la habitacion es requerido",
                min: {
                  value: 1,
                  message: "El precio debe ser un valor mayor a 0",
                },
              })}
              placeholder="Precio de la habitacion"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>

          {/*Input de la capacidad de la suite*/}
          <div>
            <input
              type="number"
              {...admin("capacity", {
                required: "La capacidad de la habitacion es requerida",
                min: {
                  value: 1,
                  message: "La capacidad debe ser al menos 1",
                },
                max: {
                  value: 5,
                  message: "La capacidad no puede exceder de 5",
                },
              })}
              placeholder="Capacidad de la habitacion"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900"
            />
            {errors.capacity && (
              <span className="text-red-500 text-sm">
                {errors.capacity.message}
              </span>
            )}
          </div>

          {/*Input del count de la suite*/}
          <div>
            <input
              type="number"
              {...admin("count", {
                required: "El numero de habitaciones (count) es requerido",
                min: {
                  value: 1,
                  message: "Debe haber al menos 1 habitacion disponible",
                },
                max: {
                  value: 100,
                  message: "El numero de habitaciones no puede exceder de 100",
                },
              })}
              placeholder="Numero de habitaciones disponibles"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900"
            />
            {errors.count && (
              <span className="text-red-500 text-sm">
                {errors.count.message}
              </span>
            )}
          </div>

          {/*Input de la descripcion de la suite*/}
          <div>
            <textarea
              {...admin("description", {
                required: "La descripcion de la habitacion es requerida",
                minLength: {
                  value: 10,
                  message:
                    "La descripcion de la habitacion debe tener al menos 10 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "La descripcion no puede exceder de 50 caracteres",
                },
              })}
              placeholder="Descripcion de la habitacion"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900 h-24"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

           {/* Input para subir imagen */}
           <div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-900"
            />
            {selectedFiles.length === 0 && (
              <span className="text-red-500 text-sm">
                Debe subir al menos una imagen
              </span>
            )}
          </div>

          {/*Boton para enviar el formulario*/}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Crear suite
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
