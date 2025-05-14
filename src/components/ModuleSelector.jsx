// src/components/ModuleSelector.jsx
import { useState, useEffect } from 'react';
import { getModuleConfig } from '../data/storyModules';

export default function ModuleSelector({ onModuleSelect }) {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const config = getModuleConfig();
    setModules(Object.entries(config).map(([id, info]) => ({
      id,
      ...info
    })));
    setLoading(false);
  }, []);

  // Map color names to Tailwind classes
  const colorClasses = {
    'blue': 'border-blue-500 bg-blue-50 hover:bg-blue-100',
    'purple': 'border-purple-500 bg-purple-50 hover:bg-purple-100',
    'amber': 'border-amber-500 bg-amber-50 hover:bg-amber-100',
    'green': 'border-green-500 bg-green-50 hover:bg-green-100',
    'red': 'border-red-500 bg-red-50 hover:bg-red-100'
  };
  
  if (loading) return <div className="text-center py-10">Loading story collections...</div>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {modules.map(module => (
        <button
          key={module.id}
          onClick={() => onModuleSelect(module.id)}
          className={`p-6 rounded-lg shadow-md border-l-8 transition-all 
                     flex flex-col items-center text-center
                     ${colorClasses[module.color] || 'border-gray-500 bg-white hover:bg-gray-50'}`}
        >
          <span className="text-4xl mb-3">{module.icon}</span>
          <h2 className="text-2xl font-bold">{module.name}</h2>
          <div className="bg-white rounded-lg px-3 py-1 text-xs font-medium text-gray-600 mt-2">
            {module.difficulty}
          </div>
          <p className="text-gray-600 mt-3">{module.description}</p>
        </button>
      ))}
    </div>
  );
}
