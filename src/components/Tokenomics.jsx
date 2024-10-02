import { Col, Container, Row } from "./Grid";
import tokenImg from "../assets/img/tokenmos-img.png"
import shap from "../assets/img/tokenmos-bottom.png"

export default function Tokenomics() {
  const tokenmoscard = [
    {
      title:"10",
      subtitle:"Marketing"
    },
    {
      title:"17.7",
      subtitle:"new millos"
    },
    {
      title:"47.3",
      subtitle:"liquidity"
    },
    {
      title:"15",
      subtitle:"cex"
    },
    {
      title:"10",
      subtitle:"early"
    },
  ]
  return (
    <div className="tokenomy  mb-12 lg:mb-20 xl:mb-[105px] ">
    <Container className="relative z-0">
        <Row className="justify-center">
            <Col xs={12} md={7} >
               <div className="tokenomy-title text-center">
                    <h3 className="mb-6 lg:mb-10 xl:mb-[58px] uppercase ">tokEnomics</h3>
                    <p className="text-white uppercase">777.777.777.777 Tokens</p>
               </div>
            </Col>
        </Row>
        <Row className="items-center">
            <Col xs={12} md={7} lg={7}  className="mb-5 md:mb-0">
               <div className="tokenomy-image"><img src={tokenImg} alt="" /></div>
            </Col>
            <Col xs={12} md={5} lg={5} xxl={4}>
                {tokenmoscard.map((item,idx)=>(<div className="tokenomy-text mb-4 lg:mb-5 last:mb-0" key={idx}>
                   <p className="text-title text-white  leading-[80%] mb-2 lg:mb-3   uppercase">{item.title}%</p>
                   <p className="text-base lg:text-lg xl:text-[22px] !leading-[80%] uppercase text-white">{item.subtitle}</p>
                </div>))}
            </Col>
        </Row>
        <div className="tokenomy-bottom-shap absolute -z-10 w-[95%] left-1/2 translate-x-[-50%] bottom-0 h-[150px] xl:h-[190px] 3xl:h-[230px] mx-auto"><img className="w-full h-full" src={shap} alt="" /></div>
    </Container>
</div>
  )
}
