// src/components/MediaTabs/MediaTabs.jsx
import { useState } from "react"

const MediaTabs = ({ media }) => {
  const [activeTab, setActiveTab] = useState("images")

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <div className="flex justify-center border-b border-gray-200">
        <button
          onClick={() => setActiveTab("videos")}
          // Padding e tamanho do texto ajustados
          className={`py-2 px-4 sm:px-8 text-base sm:text-lg font-semibold transition-colors duration-300 ${
            activeTab === "videos"
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500"
          }`}
        >
          Vídeos
        </button>
        <button
          onClick={() => setActiveTab("images")}
          className={`py-2 px-4 sm:px-8 text-base sm:text-lg font-semibold transition-colors duration-300 ${
            activeTab === "images"
              ? "border-b-2 border-purple-600 text-purple-600"
              : "text-gray-500"
          }`}
        >
          Imagens
        </button>
      </div>

      {/* Grid responsivo: 2 colunas em mobile, 3 em tablets/desktop */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {activeTab === "images" &&
          media.imagens.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`media-${index}`}
              className="w-full h-auto object-cover rounded-md aspect-video"
            />
          ))}
        {activeTab === "videos" &&
          media.videos.map((vidSrc, index) => (
            <div key={index} className="relative cursor-pointer group">
              <video
                src={vidSrc}
                controls
                className="w-full h-auto object-cover rounded-md aspect-video"
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default MediaTabs
