// src/pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import ModuleSelector from '../components/ModuleSelector';
import StoryGrid from '../components/StoryGrid';
import { loadStoryModule } from '../data/storyModules';

export default function Home() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleModuleSelect = async (moduleId) => {
    setLoading(true);
    const data = await loadStoryModule(moduleId);
    setModuleData(data);
    setSelectedModule(moduleId);
    setLoading(false);
  };
  
  return (
    <>
      <Head>
        <title>Visualization Reading Game</title>
        <meta name="description" content="Enhance reading comprehension through visualization exercises" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-3 text-blue-800">
            Visualization Reading Game
          </h1>
          <p className="text-center text-blue-600 mb-10 max-w-2xl mx-auto">
            Choose a story collection and test your imagination skills! This game helps improve 
            reading comprehension by enhancing your ability to create mental images.
          </p>
          
          {!selectedModule ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center">Story Collections</h2>
              <ModuleSelector onModuleSelect={handleModuleSelect} />
            </>
          ) : loading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
              <p className="mt-2">Loading stories...</p>
            </div>
          ) : (
            <>
              <button 
                onClick={() => setSelectedModule(null)}
                className="mb-6 inline-flex items-center text-blue-700 hover:text-blue-900"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Collections
              </button>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{moduleData.icon}</span>
                <h2 className="text-2xl font-bold">{moduleData.name}</h2>
              </div>
              
              <StoryGrid stories={moduleData.stories} moduleId={selectedModule} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
