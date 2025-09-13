import CriarPostIndexJogadora from "../components/CriarPostIndexJogadora/CriarPostIndexJogadora";
import PostUser from "../components/PostUser/PostUser";
import PostMarta from "../components/PostMarta/PostMarta";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

export default function IndexJogadora() {
  return (
    <div className="flex flex-1 bg-[#DAD0F0]">
      <Header />
      <div className="flex flex-1 flex-col items-center pt-30 p-6 gap-5 lg:ml-64 lg:pt-30 lg:p-10">
        <Sidebar isDesktop={true} />
        <CriarPostIndexJogadora />
        <hr className="w-full my-4 border-t-2 border-[#9f92bc]" />
        <PostUser />
        <PostMarta />
      </div>
    </div>
  );
}
