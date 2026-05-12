export default function groceriesList() {
  // Create and return a new Map with grocery items
  const groceries = new Map();
  
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  return groceries;
}
