import { FaArrowLeftLong } from "react-icons/fa6";
import FilledButton from "../Buttons/FilledButton";
import "./style.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { cards } from "./dataFromApis";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="content mainPadding">
        <div className="topSection">
          <p className="title">عنـوان رئيـسـي</p>
          <p className="desc">الـعنــوان الـفرعــي هنــا أو التـفــاصـيــل</p>
          <FilledButton title="إذهب إلى" afterIcon={<IoMdArrowRoundBack />} />
        </div>
        <div className="bottomSection">
          {cards?.length > 0 &&
            cards.map((item, index) => {
              return <div className="singleCard" key={index}>
                <p className="date">{item.date}</p>
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>;
            })}
        </div>
      </div>
    </div>
  );
}
