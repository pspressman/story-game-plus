// src/components/StoryCard.jsx
import Link from 'next/link';

export default function StoryCard({ story, moduleId }) {
  // Map difficulty to visual indicator
  const difficultyBadge = {
    'Easy': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Hard': 'bg-red-100 text-red-800'
  };

  // Count questions for display
  const questionCount = story.content.filter(item => item.type === "question").length;
  
  return (
    <Link 
      href={`/story/${moduleId}/${story.id}`}
      className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
    >
      <div className="mb-3">
        <span className="text-3xl">{story.icon || '📖'}</span>
      </div>
      <h3 className="font-bold text-lg text-blue-800 mb-2">{story.title}</h3>
      
      <div className="flex items-center space-x-2 mb-3">
        <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyBadge[story.difficulty] || 'bg-gray-100 text-gray-800'}`}>
          {story.difficulty || 'Medium'}
        </span>
        {story.theme && (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
            {story.theme}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{story.description || 'Test your visualization skills with this story!'}</p>
      
      <div className="flex items-center text-sm text-gray-500">
        <div className="flex items-center mr-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span>{story.estimatedTime || '5-10 min'}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{questionCount} questions</span>
        </div>
      </div>
    </Link>
  );
}
