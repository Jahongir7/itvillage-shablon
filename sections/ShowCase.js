import { showcase } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const ShowCase = () => {
  return (
    <>
      <section className="showcase bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="PORTFOLIO" /> <br />
            <br />
            <Title
              title="Quyida Biz qilgan ba'zi ishlarni ko'rishingiz mumkin"
              className="title-bg"
            />
          </div>
          <br />
          <br />
          <div className="grid-3">
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
