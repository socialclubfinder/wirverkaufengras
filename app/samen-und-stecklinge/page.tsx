import { Metadata } from 'next';
import { Card } from "@/components/ui/card";
import { seedCompanies } from "../data/seed-companies";
import { Leaf, ExternalLink, Sprout, Scaling as Seedling } from "lucide-react";
import { CompanyLogo } from "@/components/company-logo";

export const metadata: Metadata = {
  title: 'Cannabis Samen & Stecklinge kaufen | Große Auswahl an Cannabis Seeds',
  description: 'Cannabis Samen & Stecklinge online kaufen ✓ Beste Samenbanken ✓ Feminisierte & Autoflowering Seeds ✓ Schneller Versand ✓ Top Genetik ✓',
  keywords: 'cannabis samen kaufen, cannabis stecklinge, cannabis seeds, hanf samen, marijuana seeds, cannabis genetik, feminisierte samen',
};

export default function SamenUndStecklingePage() {
  const seeds = Object.entries(seedCompanies).filter(([_, company]) => company.type === "seeds");
  const seedlings = Object.entries(seedCompanies).filter(([_, company]) => company.type === "seedlings");

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Top Ad Banner */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <a 
            href="https://dutch-passion.com/?a_aid=wirverkaufengras" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-[728px] h-[90px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
          >
            <img
              src="https://dutch-passion.postaffiliatepro.com/accounts/default1/0mkbva/ab8b4376.jpg"
              alt="Stake.com Advertisement"
              width={728}
              height={90}
              className="w-[728px] h-[90px]"
            />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cannabis Samen & Stecklinge kaufen
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Premium Cannabis Seeds & Stecklinge von vertrauenswürdigen Anbietern
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Hochwertige Cannabis Samen und Stecklinge online kaufen. Wir haben die besten 
            Samenbanken und Anbieter für Sie ausgewählt. Große Auswahl an feminisierten 
            und automatisch blühenden Cannabis Seeds.
          </p>
        </div>

        {/* Seeds Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Sprout className="h-8 w-8 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cannabis Samen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seeds.map(([name, company]) => (
              <Card key={name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CompanyLogo domain={company.domain} name={name} />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
                    </div>
                    <a 
                      href={company.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{company.info}</p>
                  <div className="mt-4">
                    <a
                      href={company.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                    >
                      Shop besuchen
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Seedlings Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Seedling className="h-8 w-8 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cannabis Stecklinge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seedlings.map(([name, company]) => (
              <Card key={name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <CompanyLogo domain={company.domain} name={name} />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
                    </div>
                    <a 
                      href={company.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{company.info}</p>
                  <div className="mt-4">
                    <a
                      href={company.domain}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                    >
                      Shop besuchen
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom Ad Banner */}
        <div className="mt-16 flex justify-center">
          <a 
            href="https://www.royalqueenseeds.com/?utm_source=postaffiliatepro&utm_medium=affiliate&utm_campaign=test&a_aid=54839603" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-[728px] h-[90px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
          >
            <img
              src="/rqseeds.png"
              alt="Royal Queen Seeds"
              width={728}
              height={90}
              className="w-[728px] h-[90px]"
            />
          </a>
        </div>
      </div>
    </main>
  );
}