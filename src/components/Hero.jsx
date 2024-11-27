import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
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
          Dominate the Web3 Revolution   {` `}
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
          Empowering new-age startups to amplify their brand voice through compelling content and drive high-quality growth through Value First Content Approach.
          At WSDM, we specialize in crafting tailored strategies that resonate with your audience and propel your growth. 
          <br/> <div>Let's collaborate to elevate your brand and drive impactful results. </div>
          <br/><div className="text-3xl text-[#A055FF]">Ready To Stir Shit Up in the Web3 Space?</div>
          </div>



          <Button href="https://qt99gbb8s2q.typeform.com/to/hzRKqFCV">
          Get Your Free Web3 Growth Plan
          </Button>
        </div>
        
          <ScrollParallax>
          <BackgroundCircles />
          </ScrollParallax>
     

        {/* <CompanyLogos className="relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
