export default function Tools() {
  return (
    <>
      <div style={iconContainerStyle as React.CSSProperties}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-javascript-plain" style={iconStyle}></i>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-typescript-plain" style={iconStyle}></i>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-html5-plain" style={iconStyle}></i>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-react-original" style={iconStyle as React.CSSProperties}></i>
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-nodejs-plain" style={iconStyle}></i>
        </a>
        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-ruby-plain" style={iconStyle}></i>
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-nextjs-original-wordmark" style={iconStyle as React.CSSProperties}></i>
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-sass-original" style={iconStyle}></i>
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-express-original" style={iconStyle}></i>
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-postgresql-plain" style={iconStyle}></i>
        </a>
        <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-jest-plain" style={iconStyle}></i>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          <i className="devicon-git-plain" style={iconStyle}></i>
        </a>
      </div>
      </>
  );
}

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center',     // Center vertically
  gap: '2.1rem',
  flexWrap: 'wrap',
  padding: '1rem',
  paddingBottom: '2rem',
};

const iconStyle = {
  fontSize: '7rem', // Default size
  color: 'inherit', // Optionally adjust color
  textDecoration: 'none',
};

const linkStyle = {
  textDecoration: 'none', // Ensures no underline on hover
};

// // Add media queries for responsive sizing
// const responsiveIconStyle = {
//   ...iconStyle,
//   '@media (max-width: 1200px)': {
//     fontSize: '5rem',
//   },
//   '@media (max-width: 992px)': {
//     fontSize: '4rem',
//   },
//   '@media (max-width: 768px)': {
//     fontSize: '3rem',
//   },
//   '@media (max-width: 576px)': {
//     fontSize: '1rem',
//   },
// };