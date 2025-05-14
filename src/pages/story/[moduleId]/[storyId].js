// src/pages/story/[moduleId]/[storyId].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import StoryGame from '../../../components/StoryGame';
import { loadStoryModule } from '../../../data/storyModules';

export default function StoryPage() {
  const router = useRouter();
  const { moduleId, storyId } = router.query;
  const [storyData, setStoryData] = useState(null);
  const [moduleData, setModuleData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchStory() {
      if (moduleId && storyId) {
        setLoading(true);
        const mData = await loadStoryModule(moduleId);
        setModuleData(mData);
        
        if (mData && mData.stories) {
          const story = mData.stories.find(s => s.id === storyId);
          setStoryData(story);
        }
        
        setLoading(false);
      }
    }
    
    fetchStory();
  }, [moduleId, storyId]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
          <p className="mt-2">Loading story...</p>
        </div>
      </div>
    );
  }
  
  if (!storyData || !moduleData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Story Not Found</h1>
            <p className="mb-6">The story you requested could not be found.</p>
            <Link href="/" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{storyData.title} - Visualization Reading Game</title>
        <meta name="description" content={`Test your visualization skills with ${storyData.title}`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href={`/module/${moduleId}`}
            className="mb-6 inline-flex items-center text-blue-700 hover:text-blue-900"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to {moduleData.name}
          </Link>
          
          <StoryGame 
            gameContent={storyData.content} 
            title={storyData.title}
            moduleId={moduleId}
            storyId={storyId}
          />
        </div>
      </main>
    </>
  );
}
