import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos2 from "./CompanyLogos2";

const Hero2 = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          Dominate the AI Revolution {` `}
            <span className="inline-block relative">
              WSDM{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <div className="my-24 text-xl">
          Revolutionizing AI startups with powerful content that converts and campaigns that captivate. At WSDM Studios, we craft impactful and engaging long form Explainer Content, UGC for Social Media Content, Ad Creatives and growth strategies to make your AI tools irresistible. Let’s break down complexity, build trust, and supercharge your brand’s reach.
          <br/> <div>Let's collaborate to elevate your brand and drive impactful results. </div>
          <br/><div className="text-3xl text-[#A055FF]">Ready to Stir Shit Up in the AI Space?</div>
          </div>



          <Button href="https://forms.zohopublic.in/adityaadim1/form/AI/formperma/96-5GAKjQBXVpnF1b69RpMbIunX9OdrfJgqSmFcDuwk">
          GET A FREE REPORT ON COMPETITOR TRENDS & PLAN YOUR NEXT GROWTH MOVE
          </Button>
        </div>
        
          <ScrollParallax>
          <BackgroundCircles />
          </ScrollParallax>
     

        {/* <CompanyLogos2 className="relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero2;
