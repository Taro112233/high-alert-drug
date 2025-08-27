// app/page.tsx
// High Alert Drug Calculator Page
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator,
  AlertTriangle, 
  Shield, 
  ExternalLink,
  Heart,
  Droplets,
  Zap,
  Activity,
  Syringe
} from 'lucide-react';

interface DrugCalculator {
  name: string;
  category: string;
  indication: string;
  url: string;
  icon: React.ReactNode;
  riskLevel: 'high' | 'critical';
  description: string;
}

const drugCalculators: DrugCalculator[] = [
  {
    name: '3% NaCl',
    category: 'Electrolyte',
    indication: 'Hyponatremia correction',
    url: 'https://script.google.com/macros/s/AKfycbyZgz_Q5Qr1IYZbha0OkhduUIFjVZwjSpXXMiNkivVjoVtaCa_zfQY_2pEBmkWZMfLqTQ/exec',
    icon: <Droplets className="w-5 h-5" />,
    riskLevel: 'high',
    description: 'Hypertonic saline for severe hyponatremia'
  },
  {
    name: 'Adrenaline',
    category: 'Vasopressor',
    indication: 'Cardiac arrest, Anaphylaxis',
    url: 'https://script.google.com/macros/s/AKfycbzEz1kUsx5KSetQa5vusP1Q1YmqADAj-xuXiYSUa_rWg8udq7WrOM4ZkPd5Y0OzRNfh/exec',
    icon: <Zap className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'Emergency vasopressor and inotrope'
  },
  {
    name: 'Alteplase',
    category: 'Thrombolytic',
    indication: 'Stroke, MI, PE',
    url: 'https://script.google.com/macros/s/AKfycbwBzy0tft1yC7ATEY2Hip23KPqy7_7mQlApPg1AEE9lCG8UiAJYgbLnV8YNMUJGdM8C/exec',
    icon: <Activity className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'Tissue plasminogen activator'
  },
  {
    name: 'Amiodarone',
    category: 'Antiarrhythmic',
    indication: 'Arrhythmias',
    url: 'https://script.google.com/macros/s/AKfycbxOqJVOKhQt3dAmcJc90RZP8fl55dbNwW9pgFjyTWaZ-EDzj3-S2E0oO18hbKAd3hkM/exec',
    icon: <Heart className="w-5 h-5" />,
    riskLevel: 'high',
    description: 'Class III antiarrhythmic agent'
  },
  {
    name: 'Calcium Gluconate',
    category: 'Electrolyte',
    indication: 'Hypocalcemia, Hyperkalemia',
    url: 'https://script.google.com/macros/s/AKfycbziEJpwtp_JFCmDM5HlHZ3w_4Q1nM4KCyt0GnfSvQPrd9BpuGVT1dklfXwDE7rF-hnN/exec',
    icon: <Shield className="w-5 h-5" />,
    riskLevel: 'high',
    description: 'Calcium replacement therapy'
  },
  {
    name: 'Digoxin',
    category: 'Cardiac Glycoside',
    indication: 'Heart failure, Atrial fibrillation',
    url: 'https://script.google.com/macros/s/AKfycbwao5KSursVLRwUNUm7CX9yOZpk9knBFd8GLpnpho-jmMLhUTeNqFiIyNJnDNS9iswM/exec',
    icon: <Heart className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'Narrow therapeutic window'
  },
  {
    name: 'Dopamine',
    category: 'Vasopressor',
    indication: 'Shock, Heart failure',
    url: 'https://script.google.com/macros/s/AKfycbwnHYS5wn1jxsDTIvgBvrrcluZ0OhXgMbFatTzm8kf_U3spaKJwQRKOhMwiRVJqTaPJNA/exec',
    icon: <Activity className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'Dose-dependent vasopressor effects'
  },
  {
    name: 'Heparin',
    category: 'Anticoagulant',
    indication: 'Thrombosis prevention',
    url: 'https://script.google.com/macros/s/AKfycbwDhmOtIazZ7c2azgQuK7FEgKjoS3NSmWd7PO4P3dXsKItRjCaVjKy5oa8pqP1j2FhE/exec',
    icon: <Droplets className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'Requires careful monitoring'
  },
  {
    name: 'KCl (Potassium Chloride)',
    category: 'Electrolyte',
    indication: 'Hypokalemia correction',
    url: 'https://script.google.com/macros/s/AKfycbzvwHOvVPNRQzv0GxXIl-IEGIBJzKnuF0bQXObmY9fgYRDTlMqoAMZY39O8-h5gXjTq/exec',
    icon: <Zap className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'High risk of cardiac complications'
  },
  {
    name: 'Levophed (Norepinephrine)',
    category: 'Vasopressor',
    indication: 'Septic shock',
    url: 'https://script.google.com/macros/s/AKfycbyC9qYIhJ2uLuyaF0Mg5RtFDF3TpE9VNt3BM1NxG_nsLB1BR38y409FeA37sa2J61A/exec',
    icon: <Heart className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'First-line vasopressor'
  },
  {
    name: 'Magnesium Sulfate',
    category: 'Electrolyte',
    indication: 'Hypomagnesemia, Eclampsia',
    url: 'https://script.google.com/macros/s/AKfycbyo0Rq5_RGbli6t987xPU0KOs_y98Kzk8oKWzFzJ0COAGcfZeZIFiwrXufU6xUe-3Ff/exec',
    icon: <Shield className="w-5 h-5" />,
    riskLevel: 'high',
    description: 'Monitor for respiratory depression'
  },
  {
    name: 'Morphine',
    category: 'Opioid Analgesic',
    indication: 'Severe pain management',
    url: 'https://script.google.com/macros/s/AKfycbzV3JN60ojrqOCAikoNfqUu8O2rL5zB3xlw-KRt61Qse0KZklEcZVPlVubvfWTAugmM/exec',
    icon: <Syringe className="w-5 h-5" />,
    riskLevel: 'critical',
    description: 'Risk of respiratory depression'
  },
  {
    name: 'RI IV (Ringer\'s Lactate)',
    category: 'IV Fluid',
    indication: 'Volume replacement',
    url: 'https://script.google.com/macros/s/AKfycbzwUQAdq40Sd2qRkqi617X5jL-cz1eevb0CoooONcdZZu7UugEezLMbf-9Q9UFElVc6BQ/exec',
    icon: <Droplets className="w-5 h-5" />,
    riskLevel: 'high',
    description: 'Balanced crystalloid solution'
  }
];

const categories = ['All', 'Vasopressor', 'Electrolyte', 'Anticoagulant', 'Thrombolytic', 'Antiarrhythmic', 'Cardiac Glycoside', 'Opioid Analgesic', 'IV Fluid'];

export default function HighAlertDrugPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredDrugs = drugCalculators.filter(drug => {
    const matchesCategory = selectedCategory === 'All' || drug.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      drug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.indication.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getRiskBadgeColor = (riskLevel: 'high' | 'critical') => {
    return riskLevel === 'critical' 
      ? 'bg-red-100 text-red-800 border-red-200' 
      : 'bg-orange-100 text-orange-800 border-orange-200';
  };

  const getIconColor = (riskLevel: 'high' | 'critical') => {
    return riskLevel === 'critical' ? 'text-red-600' : 'text-orange-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">High Alert Drug Calculator</h1>
                <p className="text-sm text-gray-600">เครื่องคำนวณขนาดยาเสี่ยงสูง</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                <Shield className="w-3 h-3 mr-1" />
                High Risk Medications
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาชื่อยา เช่น Morphine, KCl..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Calculator className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs sm:text-sm px-2 sm:px-3 py-1.5"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Drug Calculator Cards */}
      <section className="py-8 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredDrugs.map((drug) => (
              <Card key={drug.name} className="border-0 shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-2 p-3 sm:p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        drug.riskLevel === 'critical' 
                          ? 'bg-red-100' 
                          : 'bg-orange-100'
                      }`}>
                        <span className={getIconColor(drug.riskLevel)}>
                          {React.cloneElement(drug.icon as React.ReactElement<{className?: string}>, {
                            className: 'w-4 h-4 sm:w-5 sm:h-5'
                          })}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {drug.name}
                        </CardTitle>
                        <p className="text-xs sm:text-sm text-gray-500">{drug.category}</p>
                      </div>
                    </div>
                    
                    <Badge className={`${getRiskBadgeColor(drug.riskLevel)} text-xs flex-shrink-0 ml-1`}>
                      {drug.riskLevel === 'critical' ? 'CRITICAL' : 'HIGH'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 p-3 sm:p-4">
                  <div className="space-y-2 sm:space-y-3">
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Indication:</p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{drug.indication}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Description:</p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{drug.description}</p>
                    </div>
                    
                    <div className="pt-2 sm:pt-3 border-t border-gray-100">
                      <a 
                        href={drug.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-xs sm:text-sm py-2 sm:py-2.5"
                        >
                          <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          เปิดเครื่องคำนวณ
                          <ExternalLink className="w-3 h-3 ml-1.5 sm:ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredDrugs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบยาที่ค้นหา</h3>
              <p className="text-gray-500 text-sm">ลองใช้คำค้นหาอื่น หรือเลือกหมวดหมู่ที่แตกต่าง</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}