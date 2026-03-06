"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const today = new Date();

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="w-full h-[500px] md:h-[650px] overflow-x-auto">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        defaultDate={today}
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleOnChangeView}
        style={{ height: "100%" }}
        min={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0)}
        max={new Date(today.getFullYear(), today.getMonth(), today.getDate(), 17, 0)}
      />
    </div>
  );
};

export default BigCalendar;