import { Metadata } from 'next';
import { Card } from "@/components/ui/card";
import { Leaf, ClipboardList, Stethoscope, FileCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Cannabis Rezept online bekommen | Schnell & Einfach zum Gras Rezept',
  description: 'Cannabis Rezept schnell & einfach online erhalten ✓ Legales Gras auf Rezept ✓ Diskrete Telemedizin Beratung ✓ Meist noch am selben Tag ✓',
  keywords: 'cannabis rezept, gras rezept, cannabis auf rezept, medizinisches cannabis, cannabis arzt, online cannabis rezept, telemedizin cannabis, gras kaufen, gras online kaufen',
};

export default function RezeptPage() {
  const benefits = [
    {
      title: "Schnell & Unkompliziert",
      icon: Clock,
      content: "Online-Termine oft noch am selben Tag verfügbar. Keine langen Wartezeiten."
    },
    {
      title: "100% Legal & Sicher",
      icon: CheckCircle2,
      content: "Alle Anbieter sind offiziell in Deutschland zugelassen und arbeiten nach strengen medizinischen Standards."
    },
    {
      title: "Diskret & Bequem",
      icon: FileCheck,
      content: "Beratung von zu Hause aus – keine persönlichen Arztbesuche notwendig."
    }
  ];

  const steps = [
    {
      title: "Anbieter wählen",
      icon: ClipboardList,
      content: "Wählen Sie einen unserer geprüften Telemedizin-Anbieter aus. Alle Anbieter haben Erfahrung mit der Cannabis-Therapie."
    },
    {
      title: "Online-Termin buchen",
      icon: Stethoscope,
      content: "Füllen Sie den kurzen Fragebogen aus und buchen Sie einen Termin – meist noch am selben Tag möglich."
    },
    {
      title: "Rezept erhalten",
      icon: FileCheck,
      content: "Nach der Beratung erhalten Sie bei medizinischer Indikation Ihr Rezept – schnell und unkompliziert."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      {/* Top Ad Banner */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-center">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cannabis Rezept online erhalten
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Schnell & einfach zum legalen Cannabis Rezept
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Medizinisches Cannabis legal kaufen: Mit unseren Telemedizin-Partnern 
            erhalten Sie Ihr Cannabis-Rezept schnell, diskret und unkompliziert – direkt von zu Hause aus.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Zu den Anbietern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                    <benefit.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{benefit.content}</p>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          So einfach geht's
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                    <step.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{step.content}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Unsere Partner-Ärzte sind Experten auf dem Gebiet der Cannabis-Therapie und beraten Sie 
            professionell und verständnisvoll. Die Verschreibung erfolgt nur bei medizinischer Notwendigkeit 
            und nach sorgfältiger Prüfung Ihrer individuellen Situation.
          </p>
        </div>

        {/* Bottom Ad Banner */}
        <div className="mt-16 flex justify-center">
          <a 
            href="https://stake.com/?c=68wA9WEm" 
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
    </main>
  );
}
