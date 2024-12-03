import capa from "../../images/capa.jpeg"; // Verifique o caminho da imagem
import NavBar from "../NavBar";

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="bg-gradient-to-b from-[#6a0dad] to-[#1e3a8a] py-10 text-white"
    >
      <NavBar />
      <div className="container mx-auto text-center">
        <div className="relative inline-block">
          <img
            src={capa}
            alt="Foto de capa"
            className="w-40 h-40 mx-auto rounded-full shadow-lg ring-4 ring-[#61DAFB] transform hover:scale-110 transition duration-300 object-cover"
          />
        </div>
        <h1 className="text-5xl font-extrabold mt-6">
          Olá, sou <span className="text-[#61DAFB]">Lucas Franco</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Sou um desenvolvedor graduando em{" "}
          <span className="text-[#becf3c] font-medium">Análise e Desenvolvimento de Sistemas</span>, 
          apaixonado por criar soluções tecnológicas inovadoras. 
          Meu foco é em{" "}
          <span className="text-[#dff11f] font-medium">desenvolvimento back e front end </span> 
          usando ferramentas modernas como React, Tailwind, e Ruby on Rails.
        </p>
        <p className="mt-2 text-lg text-gray-400">
          Busco desafios que promovam aprendizado contínuo e impacto real, 
          colaborando para projetos que façam a diferença.
        </p>
      </div>
    </section>
  );
}
