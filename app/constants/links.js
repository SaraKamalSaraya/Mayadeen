import { FaCircleUser, FaMedal, FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { IoHelp } from "react-icons/io5";
import { CgSupport } from "react-icons/cg";

export const navRightLinks = [
  {
    title: "عـن ميـادين",
    mobileIcon: <IoHelp size={14} />,
    // will add navigation link / action / sub munu if provided
  },
  {
    title: "الخدمـات",
    mobileIcon: <CgSupport size={14} />,
  },
  {
    title: "المسـابقـات",
    afterIcon: <FaPlus color="var(--yellowColor)" size={12} />,
    mobileIcon: <FaMedal size={14} />,
  },
  {
    title: "البث المبـاشر",
    mobileIcon: <MdLiveTv size={14} />,
  },
  {
    title: "اتصـل بنـا",
    mobileIcon: <IoIosCall size={14} />,
  },
];
export const navLeftLinks = [
  {
    title: "بحث...",
    beforeIcon: <FaSearch size={14} />,
  },
  {
    title: "حسابي",
    beforeIcon: <FaCircleUser size={16} />,
    mobileIcon: <FaCircleUser size={16} />,
  },
];

export const footerLinks = [
  { title: "سياسة الخصوصية" },
  { title: "أحكام وشروط" },
  { title: "ميثاق العملاء" },
  { title: "أدوات الموقع" },
];
