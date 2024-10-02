import { Container, Row, Col } from './Grid'
import Token from './Token'
import img from '../assets/img/banner-img.png'
import style1 from '../assets/img/banner-style-1.png'
import style2 from '../assets/img/banner-style-2.png'
import style3 from '../assets/img/banner-style-3.png'
import bottomStyle from '../assets/img/banner-bottom-style.png'

export default function Banner() {
  return (
    <div className='banner'>
      <img src={style1} className="style style-1" alt="" />
      <Container>
        <Row className='justify-center'>
          <Col xs={12} md={10} lg={6} className='xl:!p-0'>
            <div className="banner-content">
              <span className='inline-block font-normal leading-[140%] uppercase'>Welcome to Our Website</span>
              <h1 className='font-normal leading-[80%] tracking-[-2px]'>Go Meme</h1>
              <p>Revolutionizing the mere world, we are here to create the most millionaire-producing coin ever. GO HARD OR GO HOME.</p>
              <Token />
              <img src={style2} alt="" className="style style-2" />
              <img src={style3} alt="" className="style style-3" />
            </div>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <div className="banner-img">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <img src={bottomStyle} className='absolute bottom-0 -z-10 bottomStyle' alt="" />
    </div>
  )
}
