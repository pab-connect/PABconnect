import ProfileHeader from "../components/Profile/ProfileHeader";
import Skills from "../components/Profile/Skills";
import Experience from "../components/Profile/Experience";
import MediaTabs from "../components/Profile/MediaTabs";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

// Dados da jogadora (mock)
const playerData = {
  name: "Mario Silva",
  team: "Passa a Bola FC",
  location: "São Paulo, Brasil",
  avatar: "https://picsum.photos/200/300",
  bio: "Apaixonado por futebol, sempre em busca de novos desafios.",
  experience: [
    { club: "Time A", year: "2019-2021" },
    { club: "Time B", year: "2021-2023" },
  ],
  media: {
    images: ["https://picsum.photos/200/300"],
    videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
  },
  skills: [
    { name: "Estratégia", level: 4 },
    { name: "Comunicação", level: 3 },
    { name: "Trabalho em equipe", level: 5 },
  ],
};

// Componente de Card reutilizável e responsivo
const ProfileCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-4 sm:p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
      {title}
    </h3>
    {children}
  </div>
);

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#DAD0F0]">
      <Header />

      <div className="flex flex-1 pt-[88px]">
        <Sidebar isDesktop={true} />

        <main className="flex-1 p-4 lg:p-8 lg:ml-64">
          <ProfileHeader
            name={playerData.name}
            team={playerData.team}
            location={playerData.location}
            avatar={playerData.avatar}
          />

          <div className="mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Coluna esquerda */}
            <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
              <ProfileCard title="Sobre mim">
                <p className="text-gray-600">{playerData.bio}</p>
              </ProfileCard>

              <ProfileCard title="Experiência e clubes">
                <Experience items={playerData.experience} />
              </ProfileCard>

              <MediaTabs media={playerData.media} />
            </div>

            {/* Coluna direita */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <ProfileCard title="Habilidades">
                <Skills skills={playerData.skills} />
              </ProfileCard>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
