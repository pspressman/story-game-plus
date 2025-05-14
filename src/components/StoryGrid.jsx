// src/components/StoryGrid.jsx
import StoryCard from './StoryCard';

export default function StoryGrid({ stories, moduleId }) {
  if (!stories || stories.length === 0) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <p className="text-gray-600">No stories available in this collection yet.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stories.map(story => (
        <StoryCard 
          key={story.id} 
          story={story} 
          moduleId={moduleId}
        />
      ))}
    </div>
  );
}
