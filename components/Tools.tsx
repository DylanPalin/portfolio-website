export default function Tools() {
  return (
    <section id="frameworks" title="Frameworks & Languages">
      <div style={iconContainerStyle as React.CSSProperties}>
        {/* First Row of Icons */}
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
      </div>
      
      <div style={iconContainerStyle as React.CSSProperties}>
        {/* Second Row of Icons */}
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
      
    </section>
  );
}

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center',     // Center vertically
  gap: '1rem',
  flexWrap: 'wrap',
  marginTop: '1rem',
};

const iconStyle = {
  fontSize: '5rem', // Adjust the size as needed
  color: 'inherit', // Optionally adjust color
  textDecoration: 'none',
};

const linkStyle = {
  textDecoration: 'none', // Ensures no underline on hover
};