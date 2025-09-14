// src/components/MediaTabs/MediaTabs.jsx
import React, { useState } from "react"

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
          media.images.map((imgSrc, index) => (
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
              <img
                src={vidSrc}
                alt={`video-thumb-${index}`}
                className="w-full h-auto object-cover rounded-md aspect-video"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
                </svg>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default MediaTabs
