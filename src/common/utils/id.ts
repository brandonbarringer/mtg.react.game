import type { Id } from '@/common/types/Id';
export function createId<T extends string>(prefix: T): Id<T> {
  // Uint16Array is a typed array of 16-bit unsigned integer values
  const array = new Uint16Array(1);
  // Populate the array with cryptographically secure random numbers
  window.crypto.getRandomValues(array);
  // The result is a secure, random 16-bit integer
  return `${prefix}-${array[0]}`;
}