import { renderDailySchedules } from "./render.js";
import { scheduleFetchByDay } from "../../services/schedulesFetchByDay.js";
import { hoursLoad } from "../from/load-hours.js";

const schedulesDate = document.getElementById("date");

export async function schedulesHour() {
    const date = schedulesDate.value;
    const dailyschedules = await scheduleFetchByDay({ date });

    renderDailySchedules({ dailyschedules });

    hoursLoad({ date, dailyschedules });
}