import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
      <nav className="footer__navigation">
        <ul className="footer__navigation_container">
          <Link href="/" className="footer__link">Главная</Link>
          <Link href="https://praktikum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</Link>
        </ul>
        <ul className="footer__social">
          <li className="footer__social-link">
            <Link href="https://github.com/Nolmm">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 .895C5.417.895.895 5.423.895 11c0 4.466 2.897 8.25 6.91 9.59.503.093.689-.217.689-.49 0-.242-.007-.874-.013-1.718-2.81.608-3.405-1.352-3.405-1.352-.46-1.167-1.123-1.477-1.123-1.477-.918-.626.068-.614.068-.614 1.011.075 1.55 1.042 1.55 1.042.9 1.545 2.364 1.098 2.941.838.093-.652.354-1.098.64-1.353-2.246-.254-4.604-1.122-4.604-4.993 0-1.104.391-2.004 1.042-2.711-.105-.254-.452-1.284.1-2.674 0 0 .85-.273 2.779 1.036a9.807 9.807 0 012.53-.341 9.844 9.844 0 012.532.341c1.929-1.309 2.779-1.036 2.779-1.036.552 1.39.205 2.42.1 2.674.644.707 1.035 1.607 1.035 2.71 0 3.884-2.363 4.734-4.615 4.988.36.31.688.93.688 1.874 0 1.352-.012 2.438-.012 2.773 0 .273.18.583.695.483 4.013-1.34 6.904-5.124 6.904-9.584C21.105 5.423 16.583.895 11 .895z" fill="#191717" />
              </svg>
            </Link></li>
          <li className="footer__social-link"><Link target="_blank" href="https://facebook.com">
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" fill="#000" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )

}

export default Footer;