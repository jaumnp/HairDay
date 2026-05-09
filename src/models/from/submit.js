import dayjs from "dayjs";
import { newSchedule } from "../../services/newSchedule.js";

const dateInput = document.getElementById("date");
const form = document.querySelector("form");
const userName = document.getElementById("client");

const currentDate = dayjs(new Date()).format("YYYY-MM-DD");

dateInput.value = currentDate;
dateInput.min = currentDate;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const selectedHour = document.querySelector(".hour-selected");

  try {
    const name = userName.value.trim();

    if (!name) return;

    const [hour] = selectedHour.innerText.split(":");
    const when = dayjs(dateInput.value).add(hour, "hour");

    const id = new Date().getTime();

    await newSchedule({
      id,
      name,
      when,
    });

    userName.value = ""
  } catch (error) {}
});
