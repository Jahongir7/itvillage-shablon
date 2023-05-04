import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Biz bilan biznesingizni yuqori bosqichga olib chiqing!" />{" "}
            <br />
            <TitleLogo title="Hoziroq operator bilan bog'laning" />
          </div>
          <div>
            <button className="button-primary">Operator</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
