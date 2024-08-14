import React, { useState, useEffect } from 'react';

import styles from '~styles/LoginHeader.module.css';

function LoginHeader() {
  const [activeLink, setActiveLink] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (type) => {
    setActiveLink(type);
    setMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav__links}>
          <li>
            <a
              href="#"
              className={activeLink === 1 ? styles.active : ''}
              onClick={() => handleLinkClick(1)}
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 2 ? styles.active : ''}
              onClick={() => handleLinkClick(2)}
            >
              Tạo mã QR
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 3 ? styles.active : ''}
              onClick={() => handleLinkClick(3)}
            >
              Kết nối dịch vụ
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 4 ? styles.active : ''}
              onClick={() => handleLinkClick(4)}
            >
              Đăng nhập
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLink === 5 ? styles.active : ''}
              onClick={() => handleLinkClick(5)}
            >
              Đăng ký
            </a>
          </li>
        </ul>
        {/* <div className={styles.logo}>
          <img src="/vietqr-logo.png" alt="VietQR Logo" />{' '}
        </div> */}
        <ul className={styles.nav__links_right}>
          <li>
            <a href="#">Liên hệ</a>
          </li>
          <li>
            <a href="#">
              Tiếng Việt <span className={styles.dropdown}>&#9662;</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LoginHeader;
