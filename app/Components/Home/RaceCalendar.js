"use client";
import { useState } from "react";
import "./style.css";
import { FaArrowLeft, FaArrowRight, FaRegClock } from "react-icons/fa6";
import { DAYS } from "@/app/constants/daysOfTheWeek";
import { RaceCalendarData } from "./dataFromApis";
import { IoClose } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import FilledButton from "../Buttons/FilledButton";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function RaceCalendarSection() {
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [openEventIndex, setOpenEventIndex] = useState(null);

  const handleClickOpenEventIndex = (index) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  function getDaysInMonth(year, month) {
    const date = new Date(year, month - 1, 1);
    const daysArray = [];
    while (date.getMonth() === month - 1) {
      const dayEn = date
        .toLocaleDateString("en-US", { weekday: "short" })
        .toUpperCase();
      const dayAr = DAYS.find((d) => d.en === dayEn)?.ar || "";
      const isFriday = dayEn === "FRI";

      daysArray.push({
        dayNumber: date.getDate(),
        dayNameArabic: dayAr,
        isFriday: isFriday,
      });

      date.setDate(date.getDate() + 1);
    }
    return daysArray;
  }

  const daysInSelectedMonth = getDaysInMonth(selectedYear, selectedMonth);

  const onClickPreviousMonth = () => {
    let prevMonth = selectedMonth - 1;
    let prevYear = selectedYear;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear--;
    }
    setSelectedMonth(prevMonth);
    setSelectedYear(prevYear);
  };

  const onClickNextMonth = () => {
    let nextMonth = selectedMonth + 1;
    let nextYear = selectedYear;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
    setSelectedMonth(nextMonth);
    setSelectedYear(nextYear);
  };

  return (
    <div className="raceCalendarSection mainPadding">
      <p className="sectionTitle">رزنامة السباقات</p>
      <div className="calendarWrapper">
        <div className="headers">
          <div className="cellWrapper dateData">
            <div>
              <p className="year">{selectedYear}</p>
              <p className="month">
                {new Date(selectedYear, selectedMonth - 1).toLocaleDateString(
                  "ar-EG",
                  { month: "long" }
                )}
              </p>
            </div>
            <div className="arrows">
              <span className="arrowWrapper" onClick={onClickPreviousMonth}>
                <FaArrowRight />
              </span>
              <span className="arrowWrapper" onClick={onClickNextMonth}>
                <FaArrowLeft />
              </span>
            </div>
          </div>
          <div className="cellWrapper events">الأحداث</div>
        </div>
        <div className="calendar">
          <div className="cellWrapper">
            {daysInSelectedMonth.map(
              ({ dayNumber, dayNameArabic, isFriday }) => (
                <div key={dayNumber} className="smallCell top">
                  <div className={`dayNumber ${isFriday && "isFriday"}`}>
                    {dayNumber}
                  </div>
                  <div>{dayNameArabic}</div>
                </div>
              )
            )}
          </div>
          <div className="cellWrapper">
            {daysInSelectedMonth.map(({ dayNumber }) => {
              const dayData = RaceCalendarData.find(
                (d) => d.dayNumber === dayNumber
              );

              return (
                <div key={dayNumber} className="smallCell bottom">
                  <div className="eventsContainer">
                    {dayData?.events?.map((event, index) => (
                      <div
                        key={index}
                        className="eventWrapper"
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <div
                          className="eventIndicator"
                          onClick={() => handleClickOpenEventIndex(event.id)}
                        ></div>

                        {openEventIndex === event.id && (
                          <div className="eventDetails">
                            <div className="head">
                              {event.name}
                              <IoClose
                                onClick={() => setOpenEventIndex(null)}
                              />
                            </div>
                            <p className="category">{event.category}</p>
                            <div className="dateAndTime">
                              <div className="date">
                                <FaRegCalendarAlt />
                                {event.date}
                              </div>
                              <div className="time">
                                <FaRegClock />
                                {event.time}
                              </div>
                            </div>
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>المسافة</td>
                                  <td className="answer">
                                    {event.distenation} كم
                                  </td>
                                </tr>
                                <tr>
                                  <td>النوع</td>
                                  <td className="answer">{event.type}</td>
                                </tr>
                                <tr>
                                  <td>العمر</td>
                                  <td className="answer">{event.age} سنوات</td>
                                </tr>
                                <tr>
                                  <td>الجائزة</td>
                                  <td className="answer">{event.prize} ر.س</td>
                                  <td>
                                    <FilledButton
                                      title={"تفاصيل"}
                                      afterIcon={<IoMdArrowRoundBack />}
                                      size="sm"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
