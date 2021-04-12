import React from 'react';
import PropTypes from 'prop-types';
import ContextPages from './ContextPages';
//test
function ProviderPages({ children }) {
  return (
    <ContextPages.Provider
      value={
        {

        }
      }
    >
      {children}
    </ContextPages.Provider>
  );
}

ProviderPages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderPages;
