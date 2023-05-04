import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Bizning xizmatlarimiz" />
            <p>
              IT-Villageda ilm ulashish bilan birgalikda dasturiy ta'minot va
              raqamli marketingni ishlab chiqish ham yo'lgan qo'yilgan.{" "}
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="batafsil" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
