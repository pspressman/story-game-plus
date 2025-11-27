#!/usr/bin/env node

/**
 * Story ID Checker for Visualization Game
 * 
 * This script checks all story files in the visualization game project
 * to ensure they have proper structure and required fields.
 * 
 * Usage: node check-story-ids.js
 */

const fs = require('fs');
const path = require('path');

// Categories to check
const CATEGORIES = ['aesop', 'greek', 'bible', 'world'];

// Required fields for each story
const REQUIRED_FIELDS = ['id', 'title', 'content'];

// Color codes for terminal output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

function checkCategory(category) {
  console.log(`\n${colors.yellow}Checking ${category} stories...${colors.reset}\n`);
  
  const categoryPath = path.join('./src/data/stories', category);
  const indexPath = path.join(categoryPath, 'index.js');
  
  // Check if category exists
  if (!fs.existsSync(categoryPath)) {
    console.log(`${colors.red}❌ Category folder not found: ${categoryPath}${colors.reset}`);
    return;
  }
  
  // Check if index exists
  if (!fs.existsSync(indexPath)) {
    console.log(`${colors.red}❌ Index file not found: ${indexPath}${colors.reset}`);
    return;
  }
  
  // Get all story files (excluding index.js)
  const storyFiles = fs.readdirSync(categoryPath)
    .filter(file => file.endsWith('.js') && file !== 'index.js')
    .map(file => file.replace('.js', ''));
  
  console.log(`Found ${storyFiles.length} story files\n`);
  
  let problemsFound = 0;
  
  // Check each story file
  storyFiles.forEach(filename => {
    const filepath = path.join(categoryPath, `${filename}.js`);
    
    try {
      // Clear require cache to get fresh data
      delete require.cache[require.resolve(filepath)];
      
      const storyModule = require(filepath);
      const story = storyModule.default || storyModule;
      
      let issues = [];
      
      // Check for default export
      if (!storyModule.default) {
        issues.push('No default export');
      }
      
      // Check if it's an object (not an array)
      if (Array.isArray(story)) {
        issues.push('Exports array instead of single story object');
      }
      
      // Check required fields
      REQUIRED_FIELDS.forEach(field => {
        if (!story || !story[field]) {
          issues.push(`Missing ${field}`);
        }
      });
      
      // Check content structure
      if (story && story.content && Array.isArray(story.content)) {
        const hasStorySegments = story.content.some(item => item.type === 'story');
        const hasQuestions = story.content.some(item => item.type === 'question');
        
        if (!hasStorySegments) {
          issues.push('No story segments in content');
        }
        if (!hasQuestions) {
          issues.push('No questions in content');
        }
        
        // Check for question integrity
        story.content.forEach((item, index) => {
          if (item.type === 'question') {
            if (!item.question) issues.push(`Question at index ${index} missing question text`);
            if (!item.options || !Array.isArray(item.options)) issues.push(`Question at index ${index} missing options`);
            if (typeof item.correctAnswer !== 'number') issues.push(`Question at index ${index} missing correctAnswer`);
          }
        });
      }
      
      // Report results
      if (issues.length > 0) {
        console.log(`${colors.red}❌ ${filename}${colors.reset}`);
        issues.forEach(issue => console.log(`   - ${issue}`));
        if (story && story.title) {
          console.log(`   Title: "${story.title}"`);
        }
        problemsFound++;
      } else {
        console.log(`${colors.green}✓ ${filename}${colors.reset} - id: ${story.id}`);
      }
      
    } catch (e) {
      console.log(`${colors.red}❌ ${filename} - ERROR: ${e.message}${colors.reset}`);
      problemsFound++;
    }
  });
  
  // Check index.js imports
  console.log(`\n${colors.yellow}Checking ${category}/index.js imports...${colors.reset}`);
  
  try {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const importRegex = /import\s+(\w+)\s+from\s+['"]\.\/([^'"]+)['"]/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(indexContent)) !== null) {
      imports.push({
        variable: match[1],
        file: match[2]
      });
    }
    
    // Check if imported files exist
    imports.forEach(imp => {
      const expectedFile = imp.file.endsWith('.js') ? imp.file : `${imp.file}.js`;
      const expectedPath = path.join(categoryPath, expectedFile);
      
      if (!fs.existsSync(expectedPath)) {
        console.log(`${colors.red}❌ Import references non-existent file: ${imp.file}${colors.reset}`);
        problemsFound++;
      }
    });
    
    // Check for stories that exist but aren't imported
    const importedFiles = imports.map(imp => imp.file.replace('.js', ''));
    const missingImports = storyFiles.filter(file => !importedFiles.includes(file));
    
    if (missingImports.length > 0) {
      console.log(`${colors.yellow}⚠️  Stories not imported in index.js:${colors.reset}`);
      missingImports.forEach(file => console.log(`   - ${file}`));
    }
    
  } catch (e) {
    console.log(`${colors.red}❌ Error reading index.js: ${e.message}${colors.reset}`);
  }
  
  console.log(`\n${colors.yellow}Summary: ${problemsFound} problems found in ${category}${colors.reset}`);
}

// Main execution
console.log(`${colors.green}=== Story ID Checker ===${colors.reset}`);
console.log('Checking story files for proper structure and required fields...');

// Check all categories
CATEGORIES.forEach(checkCategory);

console.log(`\n${colors.green}=== Check Complete ===${colors.reset}\n`);

// Additional utility to check a specific file
if (process.argv[2]) {
  const specificFile = process.argv[2];
  console.log(`\n${colors.yellow}Checking specific file: ${specificFile}${colors.reset}`);
  
  try {
    const story = require(specificFile).default;
    console.log(JSON.stringify(story, null, 2));
  } catch (e) {
    console.log(`${colors.red}Error loading file: ${e.message}${colors.reset}`);
  }
}