import { useEffect, useState } from 'react';
import { Container } from './Grid'
import { Link } from 'react-scroll';
import Logo from './Logo';
import Social from './Social';


export default function Header() {
  const navLinks = [
    {
      btn_title: 'About',
      to: 'about'
    },
    {
      btn_title: 'How to buy',
      to: 'how'
    },
    {
      btn_title: 'Roadmap',
      to: 'roadmap'
    },
    {
      btn_title: 'white paper',
      to: '/',
      isLink: true,
    },
    {
      btn_title: 'Tokenomics',
      to: 'tokenomy'
    },
  ];
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart = () => {
    setIsMenu(!isMenu);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);

  return (
    <>
      <header className={`heading ${scrolled ? 'position-fixed' : ''}`}>
        <Container>
          <div className='heading-wrap flex items-center justify-between'>
            <Logo />
            <nav className={`heading-menu ${isMenu ? 'show-menu' : ''}`}>
              <div className="title flex items-center justify-between lg:hidden">
                <Logo />
                <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4181_4837)">
                      <path d="M30 10L10 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 10L30 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4181_4837">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </button>
              </div>
              <ul className="lg:flex items-center">
                {navLinks.map((link, index) => (
                  <li key={index} className='d-block'>
                    {link.isLink ?
                      <a href={link.to} target='_blank' className="heading-link uppercase">{link.btn_title}</a>
                      :
                      <Link className="heading-link uppercase" to={link.to} spy={true} smooth={true} duration={600} offset={-150} onClick={() => handleTouchStart(link.to)}>{link.btn_title}</Link>
                    }
                  </li>
                ))}
              </ul>
            </nav>
            <div className="heading-actions flex items-center flex-wrap">
              <Social />
              <button className="heading-toggler lg:hidden" onClick={() => setIsMenu(!isMenu)}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66504 10H33.3317" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.66504 20H33.3317" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.66504 30H33.3317" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
