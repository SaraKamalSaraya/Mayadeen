"use client";

import "./style.css";
import Logo from "../Logo/Logo";
import { footerLinks } from "@/app/constants/links";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa6";
import { navRightLinks } from "../Navbar/links";
import FilledButton from "../Buttons/FilledButton";

export default function Footer() {
  return (
    <div className="footer">
      <div className="topSection mainPadding">
        <div className="right">
          <div className="logoWrapperSection">
            <Logo />
            <span>
              <FaTiktok />
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </span>
          </div>
          <ul>
            {navRightLinks?.length > 0 &&
              navRightLinks.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
          </ul>
        </div>
        <div className="left">
          <p className="title">النشرة البريدية</p>
          <p className="desc">النص أو الوصف يكتب هنا</p>
          <div className="group">
            <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <FilledButton title={'اشترك'} className={'rounded'} />
          </div>
        </div>
      </div>
      <div className="bottomSection mainPadding">
        <p>جميع الحقوق محفوظة</p>
        <div className="leftSection">
          {footerLinks?.length > 0 &&
            footerLinks.map((item, index) => {
              return (
                <p key={index}>
                  {item.title}
                  {index !== footerLinks.length - 1 && (
                    <span style={{ margin: "0 5px" }}>|</span>
                  )}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
}
