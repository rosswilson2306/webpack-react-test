import React from 'react';

const DUMMY_NAVLINKS = [
  {
    id: 1, text: 'About', url: '/about'
  },
  {
    id: 2, text: 'Contact', url: '/contact'
  },
  {
    id: 1, text: 'FAQs', url: '/faqs'
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {DUMMY_NAVLINKS.map(item => (
          <li key={item.id} className="navbar__item">
            <a href={item.url} className="navbar__link">{item.text}</a>
          </li>
        ))}       
      </ul>
    </nav>
  );
};

export default Navbar;
