// src/utils/visualizationDomains.js
export const visualizationDomains = {
  "what": {
    name: "Object Identification",
    icon: "🔍",
    templateSentence: "What would [X] look like?"
  },
  "shape": {
    name: "Shape Properties",
    icon: "◼️",
    templateSentence: "What shape would [X] most likely be?"
  },
  "background": {
    name: "Environment",
    icon: "🌄",
    templateSentence: "What would you see in the background of this scene?"
  },
  "size": {
    name: "Relative Size",
    icon: "📏",
    templateSentence: "How large would [X] appear compared to [Y]?"
  },
  "where": {
    name: "Spatial Position",
    icon: "📍",
    templateSentence: "Where would [X] be positioned in relation to [Y]?"
  },
  "perspective": {
    name: "Viewing Angle",
    icon: "👁️",
    templateSentence: "From what angle would you see this scene?"
  },
  "color": {
    name: "Visual Appearance",
    icon: "🎨",
    templateSentence: "What color would [X] most likely be?"
  },
  "movement": {
    name: "Action",
    icon: "🏃",
    templateSentence: "How would [X] be moving in this scene?"
  },
  "when": {
    name: "Time Context",
    icon: "🕒",
    templateSentence: "What time of day/year would this likely be?"
  },
  "number": {
    name: "Quantity",
    icon: "🔢",
    templateSentence: "How many [X] would you visualize in this scene?"
  },
  "mood": {
    name: "Emotional Context",
    icon: "😊",
    templateSentence: "What expression would be on [X]'s face?"
  },
  "sound": {
    name: "Auditory Elements",
    icon: "🔊",
    templateSentence: "What sounds would you hear in this scene?"
  }
};

// Functions to help construct balanced visualization questions
export function getDomainTemplate(domain) {
  return visualizationDomains[domain]?.templateSentence || "";
}

export function analyzeDomainCoverage(storyQuestions) {
  const coverage = Object.keys(visualizationDomains).reduce((acc, domain) => {
    acc[domain] = 0;
    return acc;
  }, {});
  
  storyQuestions.forEach(q => {
    if (q.type === "question" && q.domain) {
      coverage[q.domain] = (coverage[q.domain] || 0) + 1;
    }
  });
  
  return coverage;
}
