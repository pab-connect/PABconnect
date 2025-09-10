import React, { useState } from "react";
import { Upload } from "lucide-react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      
      {/* Preview da imagem selecionada */}
      {selectedImage && (
        <div className="flex flex-col items-center gap-4">
          <img
            alt="preview"
            className="w-64 md:w-48 h-64 md:h-48 object-cover rounded-md shadow-md"
            src={URL.createObjectURL(selectedImage)}
          />
          <button
            className="h-12 w-32 md:text-lg md:h-10 bg-gray-400 cursor-pointer text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            Remover
          </button>
        </div>
      )}

      {/* Input escondido */}
      <input
        id="image-upload"
        type="file"
        className="hidden"
        onChange={(e) => setSelectedImage(e.target.files[0])}
        required
        accept=".jpg,.png,.jpeg"
      />

      {/* Label estilizado como botão */}
      <label
        htmlFor="image-upload"
        className="flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400"
      >
        <Upload className="w-10 h-10 text-gray-400 mb-2" />
        <span className="text-gray-500">Clique ou arraste para fazer upload</span>
      </label>
    </div>
  );
};

export default UploadAndDisplayImage;
