import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Icon } from "@iconify/react";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          <Link href="/" className="title-link">
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href="/">
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          <div className="flex">
            <span> {data.catgeory} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
        {data.catgeory === "ANDROID" ? (
          <a
            className="myFlex myBtn"
            style={{ color: "white" }}
            href="https://drive.google.com/u/0/uc?id=1R_VwK8vFEl3WLlNtd1B01H0j4fZpvitI&export=download&confirm=t&uuid=6d46ffa3-4a83-4c0a-8c75-9080a5233514&at=ALt4Tm1RdQArOxWS-d8mh2_dbjvm:1690508408242"
            rel="noopener noreferrer"
            download
          >
            <Icon icon="flat-color-icons:android-os" width={32} height={32} />
            <b>Yuklab olish</b>
          </a>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
