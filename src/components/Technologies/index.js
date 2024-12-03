export default function Technologies() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg", 
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  ];

  return (
    <section id="technologies" className="bg-[#1e3151] py-10 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Tecnologias que utilizo
        </h2>
        <div className="overflow-hidden">
          <div className="animate-scroll">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Technology Logo ${index}`}
                className="mx-4 h-16"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`clone-${index}`}
                src={logo}
                alt={`Technology Logo Clone ${index}`}
                className="mx-4 h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
