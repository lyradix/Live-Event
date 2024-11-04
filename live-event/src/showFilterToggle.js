import React, { useState } from 'react';

const FilterToggle = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div>
      <button onClick={toggleFilter}>
        {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
      </button>
      {isFilterVisible && (
        <div>
          show this
        </div>
      )}
    </div>
  );
};

export default FilterToggle;
