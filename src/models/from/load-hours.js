import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./select-hours.js";

const hourContainer = document.getElementById("hours");

function addHourHeader(period) {
    const li = document.createElement("li");

    li.classList.add("hour-period");
    li.textContent = period;

    hourContainer.append(li);
}

export function hoursLoad({ date, dailyschedules }) {
    const schedules = dailyschedules.map(schedule => dayjs(schedule.when).format("HH:mm"));

    const hourFragment = document.createDocumentFragment();

    const opening = openingHours.map(hour => {
        const [scheduleHour] = hour.split(":");

        const isAvaliable = !schedules.includes(hour) && !dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

        hourContainer.innerHTML = "";

        return {
            hour,
            isAvaliable
        }
    });

    opening.forEach(({ hour, isAvaliable }) => {
        const li = document.createElement("li");

        li.classList.add("hour");
        li.classList.add(isAvaliable ? "hour-available" : "hour-unavailable");
        li.textContent = hour;

        if(hour === "9:00") addHourHeader("Manhã");
        if(hour === "13:00") addHourHeader("Tarde");
        if(hour === "18:00") addHourHeader("Noite");

        hourFragment.append(li);
    });

    hourContainer.append(hourFragment);

    hoursClick();
}