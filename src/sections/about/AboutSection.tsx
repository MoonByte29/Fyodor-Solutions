import React, { useState } from "react";

interface Section {
  id: string;
  number: string;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    id: "history",
    number: "01",
    title: "Our History",
    content:
      "Founded as Miral Software Labs, our company initially focused on providing Robotic Process Automation (RPA) solutions to enhance business efficiency, along with maintenance services for web design and app development. Our commitment to timely delivery and meticulous attention to detail quickly garnered the attention of international clients. Today, rebranded as Aventiq, we serve a diverse clientele across the USA, UK, Europe, and UAE, spanning industries such as finance, manufacturing, supply chain, and utilities.",
  },
  {
    id: "mission",
    number: "02",
    title: "Our Mission",
    content:
      "Our mission is to empower businesses through innovative technology solutions, focusing on efficiency, scalability, and sustainability. We strive to deliver solutions that drive measurable value, ensuring that our clients remain competitive in their respective industries.",
  },
  {
    id: "vision",
    number: "03",
    title: "Our Vision",
    content:
      "Our vision is to become a global leader in delivering transformative digital solutions, helping businesses unlock their full potential by leveraging cutting-edge technologies. We aim to continuously innovate, driving sustainable growth and making a lasting impact on the industries we serve.",
  },
];

const AboutSection = () => {
  const [openSection, setOpenSection] = useState<string | null>("");

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="py-20 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              ABOUT
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            The Story of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Innovating with purpose, leading with vision
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 min-w-screen max-h-fit">
          {/* Left Column */}
          <div className="text-justify text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            quaerat magnam, provident maiores tenetur totam, debitis blanditiis
            temporibus, illo fugit nisi sint suscipit corporis numquam
            praesentium! Culpa, quis! Laborum culpa enim quisquam dolores
            asperiores accusantium reiciendis cupiditate maxime, saepe aut ex
            perspiciatis eum quis nihil qui dolorum sed ipsum deserunt mollitia
            odio illum incidunt distinctio? Consequatur neque rerum velit
            impedit sed ipsa temporibus fugiat excepturi numquam ducimus dolore,
            ipsum obcaecati inventore eius mollitia, laboriosam illum minima
            nobis? Neque quasi reiciendis facilis, debitis, aperiam blanditiis
            mollitia molestias quas excepturi totam rem autem magni vel deserunt
            quibusdam doloribus! Nulla, perspiciatis repellendus. Architecto.
          </div>

          {/* Right Column - Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white/10 rounded-xl shadow-lg overflow-hidden border border-white/20 backdrop-blur-sm"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-800 font-bold text-xl">
                        {section.number}
                      </span>
                    </div>
                    <h2
                      className={`text-xl font-semibold ${
                        openSection === section.id
                          ? "text-white/80"
                          : "text-white/60"
                      }`}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <svg
                    className={`w-6 h-6 text-slate-500 transform transition-transform duration-300 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expanded Content */}
                <div
                  className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    openSection === section.id
                      ? "max-h-96 opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <div className="pl-16 border-t border-white/10 pt-6">
                    <p className="text-gray-200">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
