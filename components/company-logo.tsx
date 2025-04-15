"use client"

import { useState } from 'react';
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
  TreePine,
  LucideIcon
} from 'lucide-react';

interface CompanyLogoProps {
  domain: string;
  name: string;
}

const companyIcons: Record<string, LucideIcon> = {
  'Bloomwell': Flower2,
  'CannGo': Leaf,
  'Quick-Green': TreePine,
  'DoktorABC': Stethoscope,
  'DrAnsay': Heart,
  'Telecan': Activity,
  'enmedify': Cross,
  'nowomed': Pill,
  'Kanna Medics': Star,
  'CannCura': Sun,
  'GreenMedical': Sparkles,
};

export function CompanyLogo({ name }: CompanyLogoProps) {
  const IconComponent = companyIcons[name] || Leaf;
  
  return (
    <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
      <IconComponent className="w-4 h-4 text-green-600 dark:text-green-400" />
    </div>
  );
}