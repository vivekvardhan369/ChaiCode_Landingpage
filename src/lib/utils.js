/**
 * Concatenates class names conditionally.
 * @param  {...any} classes - The class names to concatenate.
 * @returns {string} - The concatenated class names.
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }