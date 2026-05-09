import { calcelSchedule } from "../../services/cancelSchedule.js"
import { schedulesHour } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach(schedule => {
    schedule.addEventListener("click", async (event) => {
        console.dir(event.target);

        if(event.target.classList.contains("cancel-icon")) {
            const scheduleCard = event.target.parentElement;

            const { id } = scheduleCard.dataset;

            if(id) {
                const isConfirm = confirm("tem certeza que deseja cancelar?");

                if(isConfirm) {
                    await calcelSchedule({ id });
                    schedulesHour();
                }
            }
        }
    });
});