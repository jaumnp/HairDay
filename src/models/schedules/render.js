import dayjs from "dayjs";

const periodContainers = {
  morning:   document.getElementById("period-morning"),
  afternoon: document.getElementById("period-afternoon"),
  night:     document.getElementById("period-night"),
};

function createScheduleCard({ schedule, date }) {
  const scheduleCard = document.createElement("li");
  const scheduleHour = document.createElement("strong");
  const scheduleName = document.createElement("span");
  const scheduleImag = document.createElement("img");

  scheduleCard.dataset.id = schedule.id;

  scheduleHour.textContent = date.format("HH:mm");
  scheduleName.textContent = schedule.name;
  
  scheduleImag.classList.add("cancel-icon");
  scheduleImag.src = "./src/assets/cancel.svg";
  scheduleImag.alt = "Cancelar";

  scheduleCard.append(scheduleHour, scheduleName, scheduleImag);

  return scheduleCard;
}

export function renderDailySchedules({ dailyschedules = [] }) { 
  Object.values(periodContainers).forEach(container => container.innerHTML = "");

  const fragments = {
    morning: document.createDocumentFragment(),
    afternoon: document.createDocumentFragment(),
    night: document.createDocumentFragment(),
  };

  dailyschedules.forEach(schedule => {
    const date = dayjs(schedule.when);
    const hour = date.hour();
    
    const card = createScheduleCard({ schedule, date });

    if (hour < 12) {
      fragments.morning.append(card);
    } else if (hour < 19) {
      fragments.afternoon.append(card);
    } else {
      fragments.night.append(card);
    }
  });

  periodContainers.morning.append(fragments.morning);
  periodContainers.afternoon.append(fragments.afternoon);
  periodContainers.night.append(fragments.night);
}