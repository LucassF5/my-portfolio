export default function NavBar() {
  return (
    <nav className="bg-gray-900 p-4 rounded-full mb-10 w-3/5 mx-auto shadow-lg ring-2 ring-gray-700 hover:ring-blue-500 transition duration-300">
      <div className="container flex justify-center space-x-6">
        <ul className="flex space-x-36 text-lg font-medium">
          <li>
            <a
              href="#technologies"
              className="text-gray-300 hover:text-[#61DAFB] transition duration-300"
            >
              Tecnologias
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-[#61DAFB] transition duration-300"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="text-gray-300 hover:text-[#61DAFB] transition duration-300"
            >
              Contatos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
