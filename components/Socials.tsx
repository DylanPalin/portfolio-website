import React from 'react';

export default function Socials({ onMailClick }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><a href="https://linkedin.com/in/dylanpalin" className="fa fa-linkedin"></a></li>
      <li><a href="https://github.com/dylanpalin" className="fa fa-github"></a></li>
      <li><a href="#" onClick={onMailClick} className="fa fa-envelope"></a></li>
  </ul>
  );
}
