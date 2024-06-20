import React, { useState } from 'react';

function SearchByCoreCurriculumAndFlags({ handleSearch, results }) {
  const [coreCurriculum, setCoreCurriculum] = useState();
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
        <select
          className="dropdown"
          value={coreCurriculum}
          onChange={(e) => setCoreCurriculum(e.target.value)}
        >
          <option value="">Select Core Curriculum</option>
          {coreCurriculums.map((cc, index) => (
            <option key={index} value={cc}>
              {cc}
            </option>
          ))}
        </select>
        <div className="checkbox-group">
          {flagOptions.map((flag) => (
            <div key={flag} className="checkbox-wrapper">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={flags.includes(flag)}
                  onChange={() => handleFlagChange(flag)}
                />
                {flag}
              </label>
            </div>
          ))}
        </div>
        <button className="search-button" onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchByCoreCurriculumAndFlags;
