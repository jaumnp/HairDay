import { schedulesHour } from "./schedules/load.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded");
    schedulesHour();
});