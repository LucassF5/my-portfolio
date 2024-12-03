export default function Contacts() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      link: "https://www.linkedin.com/in/lucas-franco-dev/",
    },
    {
      name: "GitHub",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      link: "https://github.com/LucassF5",
    },
    {
      name: "Email",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      link: "mailto:franco100lucas@gmail.com",
    },
  ];

  return (
    <section id="contacts" className="bg-[#1e3151] py-10 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <div className="flex justify-center space-x-20">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="group transform hover:scale-110 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={contact.icon}
                alt={contact.name}
                className="w-16 h-16 rounded-full bg-gray-800 p-3 shadow-lg"
              />
              <p className="text-gray-400 mt-2 group-hover:text-[#61DAFB]">
                {contact.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
