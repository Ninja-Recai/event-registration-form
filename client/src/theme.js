import PropTypes from 'prop-types';

export const theme = {
  white: '#ffffff',
  black: '#000000',
  prim: '#449c73',
  alt: '#ffb25b',
  light: '#f0eeee',
  dark: '#180c29',
  highlight: '#f0cacf',
  fsSm: '1.4rem',
  fsReg: '1.6rem',
  fsMd: '2rem',
  fsLg: '3rem',
};

export const themePropType = PropTypes.shape({
  white: PropTypes.string.isRequired,
  black: PropTypes.string.isRequired,
  prim: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
  dark: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  fsSm: PropTypes.string.isRequired,
  fsReg: PropTypes.string.isRequired,
  fsMd: PropTypes.string.isRequired,
  fsLg: PropTypes.string.isRequired,
});
