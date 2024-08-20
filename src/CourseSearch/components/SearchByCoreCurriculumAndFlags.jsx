import React, { useState } from 'react';
import '../styles/SearchByCoreCurriculumAndFlags.css';


function SearchByCoreCurriculumAndFlags({ handleSearch, results }) {
  const [coreCurriculum, setCoreCurriculum] = useState('');
  const [flags, setFlags] = useState([]);

  const coreCurriculums = [
    'First-year Signature Course',
    'English Composition and Writing Flag',
    'Humanities',
    'American and Texas Government',
    'United States History',
    'Social and Behavioral Sciences',
    'Mathematics',
    'Natural Science and Technology, Part I',
    'Natural Science and Technology, Part II',
    'Visual and Performing Arts',
  ];

  const flagOptions = [
    'Cultural Diversity in the United States',
    'Ethics',
    'Global Cultures',
    'Independent Inquiry',
    'Quantitative Reasoning',
    'Writing',
  ];

  const handleFlagChange = (flag) => {
    setFlags((prevFlags) =>
      prevFlags.includes(flag)
        ? prevFlags.filter((f) => f !== flag)
        : [...prevFlags, flag]
    );
  };

  const onSearch = () => {
    handleSearch('Core Curriculum and Flags', { coreCurriculum, flags });
  };

  return (
    <div className="tab-content active" role="tabpanel">
      <div className="search-row">
        <div className="search-bar">
          <select
            className="dropdown"
            value={coreCurriculum}
            onChange={(e) => setCoreCurriculum(e.target.value)}
          >
            <option value="">Choose Core Curriculum</option>
            {coreCurriculums.map((cc, index) => (
              <option key={index} value={cc}>
                {cc}
              </option>
            ))}
          </select>
        </div>
        <div className="checkbox-group">
          {flagOptions.map((flag) => (
            <div
              key={flag}
              className={`checkbox-wrapper ${flags.includes(flag) ? 'selected' : ''}`}
              onClick={() => handleFlagChange(flag)}
            >
              <div className="checkbox">
                {flags.includes(flag) && <span className="checkmark">✓</span>}
              </div>
              <label className="checkbox-label">{flag}</label>
            </div>
          ))}
        </div>
        <button className="search-button" onClick={onSearch}>SEARCH</button>
      </div>
    </div>
  );
}

export default SearchByCoreCurriculumAndFlags;
