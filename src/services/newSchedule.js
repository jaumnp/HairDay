import { apiConfig } from "./api-config.js";
import { schedulesHour } from "../models/schedules/load.js";

export async function newSchedule({ id, name, when }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        });

        schedulesHour();
        alert("Agendamento com sucesso");
    } catch (error) {
        console.log(error);
        alert("Erro ao angedar. Tente mais tarde!");
    }
}