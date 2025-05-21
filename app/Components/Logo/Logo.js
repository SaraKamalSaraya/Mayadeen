"use client"
import "./style.css";
import icon from "../../assets/images/icon.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="logoSection">
      <Image src={icon} alt="icon" className="logo" height={60} width={60} />
      <div className="titleWrapper">
        <p className="title ar">مـــيـــاديــــــــن</p>
        <p className="title en">MAYADEEN</p>
        <p className="desc">منصة تحليل سباقات الخيول</p>
      </div>
    </div>
  );
}
