"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const today = dayjs(); // 今日の日付

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  const startOfMonth = currentDate.startOf("month");
  const daysInMonth = currentDate.daysInMonth();
  const startDay = startOfMonth.day();
  const days = [...Array(daysInMonth).keys()].map((d) => d + 1);

  return (
    <div className="p-4 max-w-full mx-auto text-center">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevMonth} 
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          ←
        </button>
        <h2 className="text-lg font-bold">{currentDate.format("YYYY年 MM月")}</h2>
        <button 
          onClick={nextMonth} 
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-3">
        {[...Array(startDay).fill(null), ...days].map((day, idx) => {
          const isToday =
            currentDate.year() === today.year() &&
            currentDate.month() === today.month() &&
            day === today.date();

          return (
            <div
              key={idx}
              className={`w-30 h-25 flex items-start justify-start border rounded text-lg p-1 ${
                isToday ? "bg-blue-500 text-white font-bold" : "bg-white-100"
              }`}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
