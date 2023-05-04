import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="IT-Village" caption="" className="logobg" />
          <h1 className="hero-title">KUCHLI KADRLARGA EGA AKADEMIYA</h1>

          <div className="sub-heading">
            <TitleSm title="VEBSAYT" /> <span>.</span>
            <TitleSm title="MOBIL ILOVALAR" /> <span>.</span>
            <TitleSm title="RAQAMLI MARKETING" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="O'z biznesingizni biz bilan rivojlantiring" />
            <p>
              USAID tashkiloti bilan "Mitra Travel" firmasi hamkorligida
              yoshlarga 4 ta yo'nalishida ta'lim berib kelinmoqda. Bular
              "JavaScript", "Python", "Android" va "SMM" yo'nalishlari.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />

      <div className="text-center">
        <Title title="So'ngi yangilik va maqolalar" />
      </div>
    </>
  );
};

export default Hero;
