import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="IT_Village" caption="" className="logobg" />
              <br />
              <span>
                Agar savol tug'ilsa <br /> Dushanbadan – Jumagacha 09:00 dan
                18:00 gacha murojat qilishingiz mumkin
              </span>
              <br />
              <br />
              <h3>+(998)94-312-77-74</h3>
              <br />
              <button className="button-primary">Konsultatsiya olish</button>
            </div>
            <ul>
              <h3>UMUMIY</h3>
              <li>
                <Link href="/">Biz haqimizda</Link>
              </li>
              <li>
                <Link href="/">Jamoa</Link>
              </li>
              <li>
                <Link href="/">Portfolio</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Biz bilan bog'lanish</Link>
              </li>
            </ul>
            <ul>
              <h3>XIZMATLAR</h3>
              <li>
                <Link href="/">Mukammal platformalarni yaratish</Link>
              </li>
              <li>
                <Link href="/">Raqamli marketing</Link>
              </li>
              <li>
                <Link href="/">B2B</Link>
              </li>
              <li>
                <Link href="/">E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>ALOQA</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 BARCHA HUQUQLAR HIMOYALANGAN.</span>
            </div>
            <div className="connect">
              <span> &nbsp; | &nbsp; </span>
              <span>IT_VILLAGE</span>
              <span> &nbsp; | &nbsp; </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
