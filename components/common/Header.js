import Link from "next/link";
import { TitleLogo } from "./Title";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import useWindowDimensions from "../screenSize";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();
  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <TitleLogo title="IT-Village" className="logomin" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Bosh sahifa
            </Link>
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Biz haqimizda
            </Link>
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Jamoa
            </Link>
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Xizmatlar
            </Link>
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Blog
            </Link>
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Bog'lanish
            </Link>
            <button className="button-primary">Konsultatsiya olish</button>
          </nav>
          {width < 880 ? (
            <button onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
            </button>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
