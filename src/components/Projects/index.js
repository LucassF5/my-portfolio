import { useState } from "react";
export default function Projects() {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => setFlip(!flip);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-800 to-blue-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">Projetos</h2>
        
        {/* Grid com 3 cartões por linha */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <a href="https://github.com/LucassF5/Depot" target="_blank" rel="noopener noreferrer">
            <div className={`project-card w-full h-80 perspective-1000`} onClick={handleFlip}>
              <div className={`card-inner w-full h-full transition-transform duration-500 ${flip ? "rotate-y-180" : ""}`}>
                {/* Frente do cartão */}
                <div className="card-front w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-4">
                  <h3 className="text-2xl font-bold text-[#61DAFB]">Depot</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Projeto de E-commerce utilizando Ruby on Rails, Tailwind CSS, Hotwire e Stimulus.
                  </p>
                </div>
                {/* Verso do cartão */}
                <div className="card-back w-full h-full bg-[#1F1F1F] rounded-xl shadow-lg flex justify-center items-center p-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
                    alt="Ruby"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a href="https://github.com/LucassF5/ecommerce-rails-api" target="_blank" rel="noopener noreferrer">
            <div className={`project-card w-full h-80 perspective-1000`} onClick={handleFlip}>
              <div className={`card-inner w-full h-full transition-transform duration-500 ${flip ? "rotate-y-180" : ""}`}>
                {/* Frente do cartão */}
                <div className="card-front w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-4">
                  <h3 className="text-2xl font-bold text-[#61DAFB]">Order API</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Desenvolvimento de um sistema de e-commerce com Ruby on Rails, PostgreSQL e autenticação JWT.
                  </p>
                </div>
                {/* Verso do cartão */}
                <div className="card-back w-full h-full bg-[#1F1F1F] rounded-xl shadow-lg flex justify-center items-center p-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
                    alt="Ruby on Rails"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a href="https://github.com/LucassF5/RailsLoja" target="_blank" rel="noopener noreferrer">
            <div className={`project-card w-full h-80 perspective-1000`} onClick={handleFlip}>
              <div className={`card-inner w-full h-full transition-transform duration-500 ${flip ? "rotate-y-180" : ""}`}>
                {/* Frente do cartão */}
                <div className="card-front w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-4">
                  <h3 className="text-2xl font-bold text-[#61DAFB]">Rails Loja</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Portal de vendas online com Ruby on Rails para gerenciamento de produtos e pedidos.
                  </p>
                </div>
                {/* Verso do cartão */}
                <div className="card-back w-full h-full bg-[#1F1F1F] rounded-xl shadow-lg flex justify-center items-center p-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
                    alt="Ruby"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <a href="https://github.com/LucassF5/ShopList" target="_blank" rel="noopener noreferrer">
            <div className={`project-card w-full h-80 perspective-1000`} onClick={handleFlip}>
              <div className={`card-inner w-full h-full transition-transform duration-500 ${flip ? "rotate-y-180" : ""}`}>
                {/* Frente do cartão */}
                <div className="card-front w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-4">
                  <h3 className="text-2xl font-bold text-[#61DAFB]">ShopList</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Sistema de gerenciamento de tarefas com Ruby on Rails e Bootstrap para ministrar aulas de programação.
                  </p>
                </div>
                {/* Verso do cartão */}
                <div className="card-back w-full h-full bg-[#1F1F1F] rounded-xl shadow-lg flex justify-center items-center p-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
                    alt="Ruby"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 5 */}
          <a href="https://github.com/LucassF5/MarvelApp" target="_blank" rel="noopener noreferrer">
            <div className={`project-card w-full h-80 perspective-1000`} onClick={handleFlip}>
              <div className={`card-inner w-full h-full transition-transform duration-500 ${flip ? "rotate-y-180" : ""}`}>
                {/* Frente do cartão */}
                <div className="card-front w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-4">
                  <h3 className="text-2xl font-bold text-[#61DAFB]">MarvelApp</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Projeto mobile com React Native para listagem de personagens da Marvel.
                  </p>
                </div>
                {/* Verso do cartão */}
                <div className="card-back w-full h-full bg-[#1F1F1F] rounded-xl shadow-lg flex justify-center items-center p-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Native"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          {/* Card 6 */}
          <a href="https://github.com/LucassF5/Alura-Space" target="_blank" rel="noopener noreferrer">
            <div className={`project-card w-full h-80 perspective-1000`} onClick={handleFlip}>
              <div className={`card-inner w-full h-full transition-transform duration-500 ${flip ? "rotate-y-180" : ""}`}>
                {/* Frente do cartão */}
                <div className="card-front w-full h-full bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center p-4">
                  <h3 className="text-2xl font-bold text-[#61DAFB]">Alura Space</h3>
                  <p className="mt-4 text-lg text-gray-300">
                    Projeto de fotos espaciais com Django, Python, HTML, CSS e JavaScript.
                  </p>
                </div>
                {/* Verso do cartão */}
                <div className="card-back w-full h-full bg-[#1F1F1F] rounded-xl shadow-lg flex justify-center items-center p-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                    alt="Django"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
