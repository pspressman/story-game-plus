import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Import your story data
import aesopStories from '../data/stories/aesop';
import greekStories from '../data/stories/greek';
import bibleStories from '../data/stories/bible';
import worldStories from '../data/stories/world';

const moduleConfig = {
  aesop: {
    title: "Aesop's Fables",
    description: "Classic fables with timeless morals",
    icon: "📚",
    color: "blue",
    stories: aesopStories
  },
  greek: {
    title: "Greek Mythology",
    description: "Epic tales from ancient Greece",
    icon: "🏛️",
    color: "purple",
    stories: greekStories
  },
  bible: {
    title: "Bible Stories",
    description: "Stories of faith and wisdom",
    icon: "✨",
    color: "green",
    stories: bibleStories
  },
  world: {
    title: "World Mythology",
    description: "Legends from around the globe",
    icon: "🌍",
    color: "orange",
    stories: worldStories
  }
};

export default function ModulePage({ moduleId, moduleData }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  
  if (!moduleData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Module Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const difficulties = ['All', ...new Set(moduleData.stories.map(story => story.difficulty))];
  const filteredStories = selectedDifficulty === 'All' 
    ? moduleData.stories 
    : moduleData.stories.filter(story => story.difficulty === selectedDifficulty);

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    green: 'bg-green-500 hover:bg-green-600',
    orange: 'bg-orange-500 hover:bg-orange-600'
  };

  return (
    <>
      <Head>
        <title>{moduleData.title} - Visualization Reading Game</title>
        <meta name="description" content={moduleData.description} />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header with Back Button */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Modules
            </Link>
            
            <div className="text-center">
              <div className="text-6xl mb-4">{moduleData.icon}</div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{moduleData.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{moduleData.description}</p>
              <p className="text-gray-500">{moduleData.stories.length} stories available</p>
            </div>
          </div>

          {/* Difficulty Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Difficulty:
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <Link 
                key={story.id} 
                href={`/story/${moduleId}/${story.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{story.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{story.title}</h3>
                      <p className="text-sm text-gray-500">{story.estimatedTime}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{story.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      story.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      story.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {story.difficulty}
                    </span>
                    
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {story.theme}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No stories found for the selected difficulty.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { moduleId } = params;
  const moduleData = moduleConfig[moduleId];

  if (!moduleData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      moduleId,
      moduleData,
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(moduleConfig).map((moduleId) => ({
    params: { moduleId },
  }));

  return {
    paths,
    fallback: false,
  };
}