import React, { useEffect, useRef } from "react";
import { Building2, Database, Globe2, Languages } from "lucide-react";

const DataInsights = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;
      
      const cards = spotlightRef.current.querySelectorAll('.group\\/card');
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    const element = spotlightRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const insights = [
    {
      title: "Issuer Universe",
      Icon: Building2,
      description: "Public and Private Companies",
      details: [
        "Factories, mines, pipelines, plantations, dams, ports",
        "Prompt Intelligence on any new name",
        "All major global indices covered: equities, fixed income, multi-asset",
      ],
    },
    {
      title: "Data Universe",
      Icon: Database,
      description: "Public and Subscription Datasets",
      details: [
        "Global Media",
        "Local News",
        "Regulatory Updates",
        "Government Agencies",
        "Sanctions",
        "Court filings / Lawsuits",
        "NGOs",
        "Patents & Permits",
      ],
    },
    {
      title: "Geographic Universe",
      Icon: Globe2,
      description: "Connector Universe",
      details: [
        "SharePoint",
        "Teams",
        "Outlook",
        "Google Drive",
        "Sales CRM",
        "Product Databases",
        "In-House Research",
        "Credit Opinions",
        "External & Subscription Datasets",
      ],
    },
    {
      title: "Language Universe",
      Icon: Languages,
      description: "Languages",
      details: [
        "Native support for languages of top 30 countries by GDP",
        "Key supply chain locations",
      ],
    },
  ];

  return (
    <section className="bg-gray-950 py-16 px-4 text-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Stop chasing data and missing material insights. Start making
          better-informed decisions, faster.
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Augment your internal data with unrivaled global intelligence and
          AI-driven insights categorized, ranked, and mapped to international
          frameworks — all tailored to your priorities.
        </p>

        <div ref={spotlightRef} className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-4">
          {insights.map((item, index) => (
            <div
              key={index}
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 p-6 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">

                {/* Icon and Title */}
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="mb-3">
                    <div className="w-16 h-16 rounded-full bg-gray-800/30 p-2 mb-3 flex items-center justify-center text-indigo-400">
                      <item.Icon size={32} />
                    </div>
                  </div>
                  <span className="btn-sm relative rounded-full bg-gray-800/40 px-3 py-1 text-sm font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                    <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                      {item.title}
                    </span>
                  </span>
                </div>

                {/* Description */}
                {item.description && (
                  <div className="mb-4">
                    <h3 className="text-indigo-300 font-semibold text-2xl">
                      {item.description}
                    </h3>
                  </div>
                )}

                {/* Details */}
                <ul className="text-indigo-200/65 text-left space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-lg">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataInsights;