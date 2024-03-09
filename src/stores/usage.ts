import { defineStore } from "pinia";
import axios from "axios";

export interface PodUsage {
    custom_name: string;
    namespace: string;
    pod_name: string;
    resource_name: string;
    usage: UsageRecord[];
}
interface UsageRecord {
    _id: string;
    cpu_usage: string;
    memory_usage: string;
    timestamp: number;
    cpu_percentage: string;
    energy_consumption: string;

  }

//todo by till rikitg resource name
const endpoint = "https://cloudsaverbackendapi.app.cloud.cbh.kth.se/api/systeminfo/AFRY"

export const useUsageStore = defineStore({
    id: 'usage',
    state: () => ({
        usage: [] as PodUsage[],
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