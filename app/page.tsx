// app/page.tsx
// Minimal High Alert Drug Calculator Page
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calculator,
  Info, 
  ExternalLink
} from 'lucide-react';

interface DrugCalculator {
  name: string;
  url: string;
}

const drugCalculators: DrugCalculator[] = [
  {
    name: '3% NaCl',
    url: 'https://script.google.com/macros/s/AKfycbyZgz_Q5Qr1IYZbha0OkhduUIFjVZwjSpXXMiNkivVjoVtaCa_zfQY_2pEBmkWZMfLqTQ/exec'
  },
  {
    name: 'Adrenaline',
    url: 'https://script.google.com/macros/s/AKfycbxD_nc9CPQAq8lCiaMAuu4BMJJyIy6k1mifjis8kYwpIIGSgoZ_6wL76b6xKfrLIlW_/exec'
  },
  {
    name: 'Alteplase',
    url: 'https://script.google.com/macros/s/AKfycbwBzy0tft1yC7ATEY2Hip23KPqy7_7mQlApPg1AEE9lCG8UiAJYgbLnV8YNMUJGdM8C/exec'
  },
  {
    name: 'Amiodarone',
    url: 'https://script.google.com/macros/s/AKfycbxOqJVOKhQt3dAmcJc90RZP8fl55dbNwW9pgFjyTWaZ-EDzj3-S2E0oO18hbKAd3hkM/exec'
  },
  {
    name: 'Calcium Gluconate',
    url: 'https://script.google.com/macros/s/AKfycbziEJpwtp_JFCmDM5HlHZ3w_4Q1nM4KCyt0GnfSvQPrd9BpuGVT1dklfXwDE7rF-hnN/exec'
  },
  {
    name: 'Digoxin',
    url: 'https://script.google.com/macros/s/AKfycbwao5KSursVLRwUNUm7CX9yOZpk9knBFd8GLpnpho-jmMLhUTeNqFiIyNJnDNS9iswM/exec'
  },
  {
    name: 'Dopamine',
    url: 'https://script.google.com/macros/s/AKfycbwnHYS5wn1jxsDTIvgBvrrcluZ0OhXgMbFatTzm8kf_U3spaKJwQRKOhMwiRVJqTaPJNA/exec'
  },
  {
    name: 'Heparin',
    url: 'https://script.google.com/macros/s/AKfycbwDhmOtIazZ7c2azgQuK7FEgKjoS3NSmWd7PO4P3dXsKItRjCaVjKy5oa8pqP1j2FhE/exec'
  },
  {
    name: 'KCl (Potassium Chloride)',
    url: 'https://script.google.com/macros/s/AKfycbzvwHOvVPNRQzv0GxXIl-IEGIBJzKnuF0bQXObmY9fgYRDTlMqoAMZY39O8-h5gXjTq/exec'
  },
  {
    name: 'Levophed (Norepinephrine)',
    url: 'https://script.google.com/macros/s/AKfycbyC9qYIhJ2uLuyaF0Mg5RtFDF3TpE9VNt3BM1NxG_nsLB1BR38y409FeA37sa2J61A/exec'
  },
  {
    name: 'Magnesium Sulfate',
    url: 'https://script.google.com/macros/s/AKfycbyo0Rq5_RGbli6t987xPU0KOs_y98Kzk8oKWzFzJ0COAGcfZeZIFiwrXufU6xUe-3Ff/exec'
  },
  {
    name: 'Morphine',
    url: 'https://script.google.com/macros/s/AKfycbzV3JN60ojrqOCAikoNfqUu8O2rL5zB3xlw-KRt61Qse0KZklEcZVPlVubvfWTAugmM/exec'
  },
  {
    name: "RI IV (Ringer's Lactate)",
    url: 'https://script.google.com/macros/s/AKfycbzwUQAdq40Sd2qRkqi617X5jL-cz1eevb0CoooONcdZZu7UugEezLMbf-9Q9UFElVc6BQ/exec'
  }
];

export default function MinimalDrugCalculatorPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredDrugs = drugCalculators.filter(drug => 
    searchQuery === '' || drug.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">ระบบสนับสนุนข้อมูลยา</h1>
              <p className="text-gray-600 mt-1">โรงพยาบาลเถิน</p>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Drug List */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="ค้นหาชื่อยา..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Calculator className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Drug Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredDrugs.map((drug) => (
            <a 
              key={drug.name}
              href={drug.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                className="w-full h-auto py-4 px-4 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 text-gray-900 hover:text-blue-700 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-200"
                variant="outline"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="truncate">{drug.name}</span>
                  <ExternalLink className="w-4 h-4 ml-2 flex-shrink-0" />
                </div>
              </Button>
            </a>
          ))}
        </div>
        
        {filteredDrugs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบยาที่ค้นหา</h3>
            <p className="text-gray-500">ลองใช้คำค้นหาอื่น</p>
          </div>
        )}
      </main>
    </div>
  );
}