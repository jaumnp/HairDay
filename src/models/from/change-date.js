import { schedulesHour } from "../schedules/load.js"

const scheduleComponent = document.getElementById("date");

scheduleComponent.addEventListener("change", () => { schedulesHour() });

