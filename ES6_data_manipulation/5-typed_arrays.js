export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  
  // Create a DataView to work with the buffer
  const dataView = new DataView(buffer);
  
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  
  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);
  
  // Return the DataView (or the buffer if needed)
  return dataView;
}
