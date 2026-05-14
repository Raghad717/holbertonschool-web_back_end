/**
 * Executes a math function and records its result or error in a queue.
 * @param {Function} mathFunction - The function to be executed.
 * @returns {Array} A queue containing the result/error and a completion message.
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
   
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    
    queue.push(String(error));
  } finally {
    
    queue.push('Guardrail was processed');
  }

  return queue;
}
