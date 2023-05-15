import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title
              title="Hozirni o'zida biz bilan bog'laning"
              className="title-bg"
            />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>(97) 221-34-57</h3>
                  <span>Har qanday vaqtda murojatningizni qabul qilamiz</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Yangiariq, Xorazm</h3>
                  <span>
                    Manzil: Yangiariq tumani hokimiyati ro'parasidagi Istirohat
                    bog'i markazi
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>technologyvillage22@gmail.com</h3>
                  <span>Elektron pochta</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>jahongirchat@gmail.com</h3>
                  <span>Vakansiya bo'yicha murojat</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Online so'rov qoldirish" />
              <p className="desc-p">
                Xizmatlarimizdan foydalanmoqchimisiz ? Unda quyidagi formani
                to'ldiring
              </p>

              <form>
                <div className="grid-2">
                  <div className="inputs">
                    <span>ISM</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>E-pochta</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>tahminiy summa</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>qancha muddatga</span>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputs">
                  <span>USHBU LOYIHANGIZ HAQIDA QISQACHA IZOH*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>
                <button className="button-primary">Yuborish</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
