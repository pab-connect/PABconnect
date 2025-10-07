import CardUserList from "./CardUserList";
import { useState } from "react";

export default function ModalBox() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const users = [
    { name: "Alice", message: "Mensagem" },
    { name: "Bruno", message: "Mensagem" },
    { name: "Carla", message: "Mensagem" },
    { name: "Daniel", message: "Mensagem" },
    { name: "Evelyn", message: "Mensagem" },
  ];

  return (
    <div className="flex h-screen bg-purple-100">
      {/* Lista de usuários */}
      <div className="w-1/3 bg-white shadow-md rounded-xl m-4 p-2">
        <h2 className="text-center font-bold text-purple-700 border-b pb-2 mb-2">
          Mensagens
        </h2>
        <div className="flex flex-col space-y-2">
          {users.map((usuario, id) => (
            <CardUserList
              key={id}
              name={usuario.name}
              message={usuario.message}
              onClick={() => {
                setSelectedUser(usuario);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal com formulário */}
      {showModal && (
        <div className="fixed flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-2xl shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3 className="text-center text-purple-700 font-bold mb-4">
              {selectedUser?.name}
            </h3>

            <div className="flex flex-col space-y-3">

              <input
                type="text"
                placeholder="Escreva sua mensagem"
                className="border border-purple-400 rounded-xl p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-purple-600 text-white rounded-xl py-2 hover:bg-purple-700 transition">
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}