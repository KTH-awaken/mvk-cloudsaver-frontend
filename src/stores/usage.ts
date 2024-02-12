import { defineStore } from "pinia";
import axios from "axios";

export interface Usage {
    _id: string
    timestamp: number
    cpu_usage: number,
    gpu_usage: string,
    gpu_energy: string,
    memory_usage: number,
    disk_usage: number,
    network_usage_sent: number,
    network_usage_recv: number
}
const endpoint = "http://localhost:8080/api/systeminfo/30"

export const useUsageStore = defineStore({
    id: 'usage',
    state: () => ({
        usage: [] as Usage[],
        isLoading: false,
        error: null as string | null,
    }),
    actions: {
    
        async fetchUsage() {
            this.usage = [];
            this.error = null;
            this.isLoading = true;
            try {
                const url = endpoint
                const response = await axios.get(url);     
                console.log(response.data);
                                           
                this.usage = response.data;
            } catch (error) {
                this.error =
                    error instanceof Error
                        ? error.message
                        : "An error occurred";
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        },
    },
})