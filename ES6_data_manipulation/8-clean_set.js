export default function cleanSet(set, startString) {
  // If startString is empty or not a string, return empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  
  // Process the set
  const result = [];
  
  for (const value of set) {
    // Only process string values that start with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Append the rest of the string (after startString)
      result.push(value.slice(startString.length));
    }
  }
  
  // Join with '-' and return
  return result.join('-');
}
