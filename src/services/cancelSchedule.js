import { apiConfig } from "./api-config";

export async function calcelSchedule({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${ id }`, {
            method: "DELETE"
        });

        alert("Agendamento calcelado com sucesso!");
    } catch (error) {
        
    }
}