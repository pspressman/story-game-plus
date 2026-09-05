// src/data/storyModules.js
export const moduleConfig = {
  "aesop": {
    name: "Aesop's Fables",
    icon: "📚",
    color: "blue",
    description: "Classic fables with moral lessons from ancient times",
    difficulty: "Easy"
  },
  "greek": {
    name: "Greek Mythology",
    icon: "🏛️",
    color: "purple",
    description: "Epic tales of gods, heroes and mythical creatures",
    difficulty: "Medium"
  },
  "bible": {
    name: "Bible Stories",
    icon: "✝️",
    color: "amber",
    description: "Famous stories from the Old and New Testament",
    difficulty: "Medium"
  },
  "world": {
    name: "World Mythology",
    icon: "🌍",
    color: "green",
    description: "Legends and myths from cultures around the world",
    difficulty: "Medium"
  },
  "ladder": {
    name: "The Ladder",
    icon: "🪜",
    color: "green",
    description: "Story curriculum from foundation to mastery",
    difficulty: "Beginner"
  }
};

// Dynamic story loading function
export async function loadStoryModule(moduleId) {
  try {
    // In a production app, you would dynamically import the module
    // For now, we'll just return a static mapping for simplicity
    switch (moduleId) {
      case 'aesop':
        return {
          ...moduleConfig[moduleId],
          stories: await import('../data/stories/aesop').then(module => module.default)
        };
      case 'greek':
        return {
          ...moduleConfig[moduleId],
          stories: await import('../data/stories/greek').then(module => module.default)
        };
      case 'bible':
        return {
          ...moduleConfig[moduleId],
          stories: await import('../data/stories/bible').then(module => module.default)
        };
      case 'world':
        return {
          ...moduleConfig[moduleId],
          stories: await import('../data/stories/world').then(module => module.default)
        };
      case 'ladder':
        return {
          ...moduleConfig[moduleId],
          stories: await import('../data/stories/ladder').then(module => module.default)
        };
      default:
        console.error(`Unknown story module: ${moduleId}`);
        return null;
    }
  } catch (error) {
    console.error(`Failed to load story module: ${moduleId}`, error);
    return null;
  }
}

export function getModuleConfig() {
  return moduleConfig;
}
