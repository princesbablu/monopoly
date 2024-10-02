import { Container, Row, Col } from './Grid'
import star from '../assets/img/btnStar.png'
import logo from '../assets/img/about-logo.png'
export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="about-wrap text-center">
              <div className="inner">
                <div className="Logo flex justify-center">
                  <img src={logo} alt="" />
                </div>
                <div className="content">
                  <h2 className='tracking-[3px]'>About us</h2>
                  <p className='uppercase'>Welcome to The  Monopoly meme —where adventure, mischief, and a good dose of silliness come together! Inspired by the legendary   meme Club, we’ve taken the spirit of carefree camaraderie and injected it with a healthy dose of meme culture.</p>
                  <a href="#" target='_blank' className="btn">Get Started <img src={star} alt="" /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
