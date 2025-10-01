import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const header = document.querySelector("header");

    if (header) {
      const setBodyPadding = () => {
        const height = Math.round(header.offsetHeight);
        document.body.style.paddingTop = `${height}px`;
      };

      const handleScroll = () => {
        if (window.scrollY > 0) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      };

      setBodyPadding();
      handleScroll();

      window.addEventListener("resize", setBodyPadding);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", setBodyPadding);
        window.removeEventListener("scroll", handleScroll);
        document.body.style.paddingTop = "";
      };
    }
  }, []);

  return (
    <header>
      <div className='limit-width header-wrap'>
        <div className='Logo'>👊<div className='golden'>BYS</div></div>
        <nav>
          <a href="?page=privacy">Privacy</a>
          <a href="?page=tos">Terms</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;