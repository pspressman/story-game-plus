// src/pages/story/[moduleId]/[storyId].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import StoryGame from '../../../components/StoryGame';
import { loadStoryModule, getModuleConfig } from '../../../data/storyModules';

// Import all story modules
import aesopStories from '../../../data/stories/aesop';
import greekStories from '../../../data/stories/greek';
import bibleStories from '../../../data/stories/bible';
import worldStories from '../../../data/stories/world';

export default function StoryPage({ initialModuleData, initialStoryData, moduleId, storyId }) {
  const router = useRouter();
  const [storyData, setStoryData] = useState(initialStoryData);
  const [moduleData, setModuleData] = useState(initialModuleData);
  const [loading, setLoading] = useState(false);
  
  // Use effect is still needed for client-side navigation
  useEffect(() => {
    if (router.isFallback) {
      setLoading(true);
      return;
    }
    
    // If we already have initial data from getStaticProps, use that
    if (initialModuleData && initialStoryData) {
      setModuleData(initialModuleData);
      setStoryData(initialStoryData);
      setLoading(false);
      return;
    }
    
    async function fetchStory() {
      if (router.query.moduleId && router.query.storyId) {
        setLoading(true);
        const mData = await loadStoryModule(router.query.moduleId);
        setModuleData(mData);
        
        if (mData && mData.stories) {
          const story = mData.stories.find(s => s.id === router.query.storyId);
          setStoryData(story);
        }
        
        setLoading(false);
      }
    }
    
    fetchStory();
  }, [router.query.moduleId, router.query.storyId, router.isFallback, initialModuleData, initialStoryData]);
  
  if (router.isFallback || loading) {
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

// This function generates all possible [moduleId]/[storyId] combinations
export async function getStaticPaths() {
  // Create an array of all possible module/story combinations
  const paths = [];
  
  // Aesop stories
  aesopStories.forEach(story => {
    paths.push({ params: { moduleId: 'aesop', storyId: story.id } });
  });
  
  // Greek stories
  greekStories.forEach(story => {
    paths.push({ params: { moduleId: 'greek', storyId: story.id } });
  });
  
  // Bible stories
  bibleStories.forEach(story => {
    paths.push({ params: { moduleId: 'bible', storyId: story.id } });
  });
  
  // World stories
  worldStories.forEach(story => {
    paths.push({ params: { moduleId: 'world', storyId: story.id } });
  });
  
  return {
    paths,
    fallback: false // Set to 'blocking' if you want to generate pages on-demand
  };
}

// This function gets the data for a specific story
export async function getStaticProps({ params }) {
  const { moduleId, storyId } = params;
  const moduleConfig = getModuleConfig();
  
  // Get all stories for this module
  let stories;
  switch (moduleId) {
    case 'aesop':
      stories = aesopStories;
      break;
    case 'greek':
      stories = greekStories;
      break;
    case 'bible':
      stories = bibleStories;
      break;
    case 'world':
      stories = worldStories;
      break;
    default:
      stories = [];
  }
  
  // Find the specific story
  const storyData = stories.find(story => story.id === storyId) || null;
  
  // Create the module data structure
  const moduleData = moduleConfig[moduleId] ? {
    ...moduleConfig[moduleId],
    stories
  } : null;
  
  return {
    props: {
      initialModuleData: moduleData,
      initialStoryData: storyData,
      moduleId,
      storyId
    },
    // Re-generate at most once per 10 seconds if a request comes in
    revalidate: 10
  };
}