
import { Col, Row, Container } from "./Grid";
import shap from "../assets/img/roadmap-img.png"


export default function Roadmap() {
    const roadmapcard = [
        {
            title: "50 M de cap = 1 new millo evento de partida monopoly precio 0.0000642"
        },
        {
            title: "100 M de cap = 2 new millos 2% precio 0.00012857"
        },
        {
            title: "250 M de cap = 5 new millos 2% precio 0.00032142"
        },
        {
            title: "500 M de cap = 15 new millos 3% precio 0.000642857"
        },
        {
            title: "750 M de cap = 30 new millos 4% precio 0.000964285"
        },
        {
            title: "1000 M de cap = 47 new millos 4.7% precio 0.00128571"
        },
    ]
    return (
        <div className="roadmap mb-16 lg:mb-[150px] xl:mb-[200px]">
            <Container>
                <div className="relative z-0">
                    <div className="roadmap-title mb-6 lg:mb-8 xl:mb-12"><h3>Roadmap</h3></div>
                    <Row>
                        {roadmapcard.map((item, idx) => (
                            <Col xs={12}
                            md={idx >= 4 ? 6 : 12} 
                            lg={idx >= 4 ? 6 : 12}
                            xxl={idx >= 3 ? 4 : 12}
                              key={idx} className="mb-4 lg:mb-5 last:mb-0">
                                <div className={`roadmap-card p-6 lg:p-8 xl:p-[42px] h-auto  2xl:${idx<=3 ? "xl:p-[42px] w-full md:w-[365px] 3xl:w-[500px] relative z-0":"w-full"} 3xl:${idx<=2 ? "roadmap-card  p-6 lg:p-8 xl:p-[42px] w-full md:w-[365px] 3xl:w-[500px] relative z-0":"w-full"}  relative z-0`}>
                                    <span className="text-white uppercase text-end  absolute  -z-10 right-5 top-2">0{idx + 1}</span>
                                    <p className="text-base lg:text-lg xl:text-[22px] !leading-[140%] text-white uppercase ">{item.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="roadmap-shap absolute -z-10 right-5 top-1/2 xl:top-5  translate-y-[-50%] xl:translate-y-0 xl:right-40  "><img className="w-full h-full object-contain" src={shap} alt="" /></div>
                </div>
            </Container>
        </div>
    )
}
