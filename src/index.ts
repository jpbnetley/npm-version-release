/**
 * Logs a message to the console with a "Frontend log:" prefix.
 *
 * @param message - The message to be logged to the console.
 */
export function logFrontend(message: string): void {
  console.log(`Frontend log: ${message}`);
} 

/**
 * Logs a message to the backend console with a "Backend log:" prefix.
 *
 * @param message - The message to be logged.
 */
export function logBackend(message: string): void {
  console.log(`Backend log: ${message}`);
}