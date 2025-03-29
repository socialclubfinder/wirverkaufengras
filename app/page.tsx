import { Card } from "@/components/ui/card";
import { companies } from "./data/companies";
import { Leaf, ExternalLink, MessageCircle } from "lucide-react";
import { CompanyLogo } from "@/components/company-logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Ad Banner Section */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <a 
            href="https://stake.com/?c=9BAmdcIb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-[728px] h-[90px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
          >
            <img
              src="/stake.gif"
              alt="Stake.com"
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
            wirverkaufengras.de
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Bestellen Sie Ihr Gras hier bei den führenden Telemedizin-Anbietern
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Wir bieten Ihnen eine sorgfältig ausgewählte Liste von vertrauenswürdigen Telemedizin-Anbietern, 
            die Ihnen bei der legalen Verschreibung von medizinischem Cannabis helfen. Alle gelisteten Anbieter 
            sind in Deutschland zugelassen und bieten professionelle Online-Konsultationen an.
          </p>
          <div className="mt-6">
            <a
              href="https://t.me/wirverkaufengras"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="font-medium">Folgen Sie uns auf Telegram</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(companies).map(([name, company]) => (
            <Card key={name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CompanyLogo domain={company.domain} name={name} />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
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
                    Website besuchen
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Ad Banner Section */}
        <div className="max-w-7xl mx-auto flex justify-center mt-20">
          <a 
            href="https://stake.com/?c=9BAmdcIb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-[728px] h-[90px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
          >
            <img
              src="/stake.gif"
              alt="Stake.com"
              width={728}
              height={90}
              className="w-[728px] h-[90px]"
            />
          </a>
        </div>

        {/* Footer Section */}
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} wirverkaufengras.de - Ihr Verzeichnis für medizinisches Cannabis</p>
          <p className="mt-2">
            Alle gelisteten Anbieter sind offiziell in Deutschland zugelassen. 
            Konsultieren Sie immer einen Arzt für medizinische Beratung.
          </p>
        </footer>
      </div>
    </main>
  );
}
