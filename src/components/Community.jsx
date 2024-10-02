import { Container } from "./Grid";
import line from "../assets/img/icon-line.png"
import shap from "../assets/img/community-shap.png"
import bShap from "../assets/img/community-bottom-shap.png"


export default function Community() {
    return (
        <div className="community relative z-[1] pb-[100px] ">
            <Container>
                <div className="relative z-[1]">
                    <div className="community-content p-5 lg:p-7 xl:p-10 rounded-[15px] lg:rounded-[50px]  xl:rounded-[76px] bg-[#FDD836]">
                        <div className="community-content-text py-10 lg:py-14 xl:py-[93px]  border-[2px] lg:border-[5px] border-[#0A0C11]  rounded-[15px] lg:rounded-[48px] xl:rounded-[68px] text-center bg-[#FBC02D]">
                            <h4 className="uppercase mb-4 lg:mb-6 xl:mb-8 ">Join our community</h4>
                            <p className=" text-xl lg:text-[28px] xl:text-[40px] w-full md:w-[70%] lg:w-[55%] text-center mx-auto text-black font-bold !leading-[150%]">Stay connected with us on social media and join the vibrant community today!</p>
                        </div>
                        <div className="community-content-icon mt-[55px] mb-[55px] lg:mb-[100px] xl:mb-[168px] px-5 lg:px-8 3xl:px-[44px] flex items-center justify-between">
                            <div className="icon-area relative z-0 ">
                                <div className="icon-shap w-6 lg:w-8 xl:w-10 h-14 lg:h-20 left-1/2 -top-[60px] translate-x-[-50%] absolute z-10"><img className="w-full h-full" src={line} alt="" /></div>
                                <a href="#" className="icon border lg:border-[2px] border-[#000100] bg-white flex items-center justify-center rounded-[10px] lg:rounded-[15px] xl:rounded-[25px]">
                                    <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.865 14.0749C4.865 14.0749 16.0316 9.45714 19.8937 7.86191C21.405 7.2742 26.4426 5.17521 26.4426 5.17521C26.4426 5.17521 28.7934 4.25166 28.5415 6.4346C28.4576 7.35816 27.9538 10.4647 27.4501 13.907C26.6944 18.7766 25.8548 24.0661 25.8548 24.0661C25.8548 24.0661 25.6869 25.5773 24.5954 25.8292C23.504 26.0811 21.6569 24.9057 21.405 24.6538C21.1531 24.4859 16.5353 21.5473 14.8562 20.12C14.4364 19.7002 13.8486 18.9445 14.9401 18.021C17.291 15.922 20.0616 13.2353 21.7408 11.5561C22.4965 10.8005 23.2521 8.95338 20.0616 11.1363C15.4439 14.3268 10.994 17.2654 10.994 17.2654C10.994 17.2654 9.98652 17.937 8.05545 17.3493C6.12439 16.7616 3.85749 16.006 3.85749 16.006C3.85749 16.006 2.26226 15.0824 4.865 14.0749Z" fill="black" />
                                    </svg>
                                </a>
                            </div>
                            <div className="icon-area relative z-0 ">
                                <div className="icon-shap w-6 lg:w-8 xl:w-10 h-14 lg:h-20 left-1/2 -top-[60px] translate-x-[-50%] absolute z-10"><img className="w-full h-full" src={line} alt="" /></div>
                                <a href="#" className="icon border lg:border-[2px] border-[#000100] bg-white flex items-center justify-center rounded-[10px] lg:rounded-[15px] xl:rounded-[25px]">
                                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2679 13.2493L0.222168 0.766357H8.17909L14.3802 8.48166L21.0052 0.801096H25.3874L16.4991 11.1179L27.0382 24.2304H19.105L12.3904 15.8868L5.22196 24.2072H0.815968L10.2679 13.2493ZM20.2613 21.9175L5.10108 3.07922H7.02187L22.163 21.9175H20.2613Z" fill="black" />
                                    </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="community-shap absolute z-10 -bottom-[60px] md:-bottom-40 left-1/2 translate-x-[-50%]"><img className="w-full h-full object-contain" src={shap} alt="" />
                    </div>
                </div>
            </Container>
            <div className="community-bottm-shap h-[272px] absolute -z-10 w-full -bottom-10 md:-bottom-5 left-0"><img className="w-full h-full object-contain" src={bShap} alt="" /></div>
        </div>
    )
}
