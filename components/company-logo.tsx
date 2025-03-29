"use client"
import { 
  Leaf, 
  Pill, 
  Heart, 
  Star, 
  Stethoscope, 
  Activity, 
  Cross, 
  Flower2, 
  Sun, 
  Sparkles, 
  TreePine 
} from 'lucide-react';

interface CompanyLogoProps {
  domain: string;
  name: string;
}

// Typing each icon explicitly
const companyIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  'Bloomwell': Flower2 as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'CannGo': Leaf as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'Quick-Green': TreePine as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'DoktorABC': Stethoscope as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'DrAnsay': Heart as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'Telecan': Activity as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'enmedify': Cross as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'nowomed': Pill as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'Kanna Medics': Star as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'CannCura': Sun as React.ComponentType<React.SVGProps<SVGSVGElement>>,
  'GreenMedical': Sparkles as React.ComponentType<React.SVGProps<SVGSVGElement>>,
};

export function CompanyLogo({ name }: CompanyLogoProps) {
  const IconComponent = companyIcons[name] || Leaf;

  return (
    <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
      <IconComponent className="w-4 h-4 text-green-600 dark:text-green-400" />
    </div>
  );
}
