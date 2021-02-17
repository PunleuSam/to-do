import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const headerPropTypes = {
  className: PropTypes.string,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className="header__container">
      <nav className="navbar">
        <span className="header__span navbar-brand">
          <FontAwesomeIcon className="d-inline-block" icon={faCheckCircle} size="lg" alt="check emoji" />
        </span>
        <span className="header__span">Complete your work before you died!</span>
      </nav>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
