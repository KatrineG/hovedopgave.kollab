import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { search } from './search/index';
import { searchIndex } from '../searchIndex';
import './search.css';

/**
 * Reusable Search component
 * @param {Array} [data] - Optional: custom data array to search (default: uses searchIndex)
 * @param {string[]} [fields] - Optional: fields to search in each object
 * @param {function} [renderResult] - Optional: custom render function for each result
 */
const Search = ({ data, fields, renderResult }) => {
  const [term, setTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  
  // Use provided data or default to searchIndex
  const dataToSearch = data || searchIndex;
  const defaultFields = fields || ['title', 'intro', 'content', 'desc', 'short', 'long', 'bullets'];
  
  const results = search(dataToSearch, term, defaultFields);
const limitedResults = results.filter(item => item.title && item.title.trim() !== '').slice(0, 5);

  const handleResultClick = (item) => {
    // Map page names to routes
    const pageRoutes = {
      'home': '/',
      'services': '/services',
      'digital': '/digital',
    };
    
    const route = pageRoutes[item.page] || '/';
    navigate(route);
    setTerm(''); // Clear search after navigation
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!term || limitedResults.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < limitedResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : limitedResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < limitedResults.length) {
          handleResultClick(limitedResults[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setTerm('');
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Søg..."
        value={term}
        onChange={e => {
          setTerm(e.target.value);
          setSelectedIndex(0);
        }}
        onKeyDown={handleKeyDown}
      />
      {term && limitedResults.length > 0 && (
        <ul className="search-results">
          {limitedResults.map((item, idx) => (
            <li 
              key={idx}
              className={selectedIndex === idx ? 'selected' : ''}
              onClick={() => handleResultClick(item)}
              onMouseOver={() => setSelectedIndex(idx)}
            >
              {renderResult ? renderResult(item) : (
                <div>
                  {item.title && <strong>{item.title.substring(0, 16)}{item.title.length > 30 ? '... ' : ''}</strong>}

                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      {term && limitedResults.length === 0 && (
        <div className="search-no-results">
          No results found
        </div>
      )}
    </div>
  );
};

export default Search;
