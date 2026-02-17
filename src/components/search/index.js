// src/components/search/index.js
// Simple search utility function

/**
 * Filters an array of objects or strings by a search term.
 * @param {Array} data - The array to search.
 * @param {string} term - The search term.
 * @param {string[]} [fields] - Optional: fields to search in each object (if array of objects).
 * @returns {Array} Filtered results.
 */
export function search(data, term, fields) {
  if (!term) return data;
  const lowerTerm = term.toLowerCase();
  return data.filter(item => {
    if (typeof item === 'string') {
      return item.toLowerCase().includes(lowerTerm);
    }
    if (typeof item === 'object' && fields && Array.isArray(fields)) {
      return fields.some(field =>
        String(item[field] || '').toLowerCase().includes(lowerTerm)
      );
    }
    return false;
  });
}
