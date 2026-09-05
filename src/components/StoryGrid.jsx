// src/components/StoryGrid.jsx
import { useState, useEffect } from 'react';
import StoryCard from './StoryCard';
import { getReadMap, statusOf, getReadSummary } from '../lib/readTracker';

export default function StoryGrid({ stories, moduleId }) {
  const [readMap, setReadMap] = useState(null);

  // Read state exists only in the browser. Loading it in an effect rather than
  // during render keeps the server HTML and the first client render identical.
  useEffect(() => {
    setReadMap(getReadMap());
  }, []);

  if (!stories || stories.length === 0) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <p className="text-gray-600">No stories available in this collection yet.</p>
      </div>
    );
  }

  const summary = readMap ? getReadSummary(readMap, moduleId, stories) : null;

  return (
    <div>
      {summary && <ReadSummary summary={summary} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map(story => (
          <StoryCard
            key={story.id}
            story={story}
            moduleId={moduleId}
            readStatus={readMap ? statusOf(readMap, moduleId, story.id) : null}
          />
        ))}
      </div>
    </div>
  );
}

function ReadSummary({ summary }) {
  const { total, read, started, latest, daysSinceLatest } = summary;
  const when =
    daysSinceLatest === null ? '' :
    daysSinceLatest === 0 ? 'today' :
    daysSinceLatest === 1 ? 'yesterday' :
    `${daysSinceLatest} days ago`;

  return (
    <p className="text-sm text-gray-500 mb-4">
      {read} of {total} read
      {started > 0 && ` · ${started} started`}
      {latest && ` · last finished: ${latest.title} (${when})`}
    </p>
  );
}
