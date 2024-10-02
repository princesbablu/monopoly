import { Container, Row, Col } from './Grid'
import img from '../assets/img/how-img.png'
import icon1 from '../assets/img/how-icon-1.png'
import icon2 from '../assets/img/how-icon-2.png'
import icon3 from '../assets/img/how-icon-3.png'

export default function How() {
    const howCard = [
        {
            icon: icon2,
            num: '02',
            title: 'get some solana',
            des: 'Get some Solana, either buy within your wallet or via an exchange and deposit to your wallet via the address shown.',
        },
        {
            icon: icon1,
            num: '01',
            title: 'Solana Wallet',
            des: 'Download your solana wallet of choice but we recommend phantom or solflare chrome extensions.',
        },
    
        {
            icon: icon3,
            num: '03',
            title: 'BUY SOME ',
            des: 'Go to Raydium and paste in the Monopoly Contract address. Select your desired amount and confirm.',
        },
    ]
    return (
        <div className="how">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="how-title text-center">
                            <h2>How to buy</h2>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="how-wrap relative z-[1] md:flex justify-end">
                            <img src={img} className='md:absolute how-img -top-5 -left-14' alt="" />
                            <div className="how-cards flex flex-wrap justify-center md:justify-end">
                                {howCard.map((item, index) => (
                                    <div className="single relative" key={index}>
                                        <div className="counter absolute top-0 right-7 md:right-10 lg:right-[70px] flex items-center justify-center uppercase">
                                            <span>{item.num} </span>
                                        </div>
                                        <div className="icon">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="text">
                                            <h5>{item.title}</h5>
                                            <p>{item.des} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
