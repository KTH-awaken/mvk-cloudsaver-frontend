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
export interface PodData {
    pod_name: string;
    content: {key:string,value:string}[];
}

export const useAnalysisStore = defineStore({
    id: "analysis",
    state: () => ({
        usage: [] as PodData[],
        isLoading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchNamespaces({
            resource,
            limit,
        }: {
            resource: string;
            limit: number;
        }) {
            const endpoint =
                `http://localhost:8080/api/${resource}/${limit}`;
            this.usage = [];
            this.error = null;
            this.isLoading = true;

            try {
                const url = endpoint;
                const response = await axios.get(url);
                const data: PodData[]  = response.data.map((item: PodUsage) => {
                    const totalEnergyConsumption = item.usage.reduce(
                        (acc: number, record: UsageRecord) => {
                            return acc + parseFloat(record.energy_consumption);
                        },
                        0
                    );
                    const averageCpu =
                        item.usage.reduce(
                            (acc: number, record: UsageRecord) => {
                                return acc + parseFloat(record.cpu_percentage);
                            },
                            0
                        ) / item.usage.length;
                    return {
                        pod_name: item.pod_name,
                        content: [
                            {value: "%"+ averageCpu.toFixed(2).toString(), key: "Average CPU Usage"},
                            {value: totalEnergyConsumption.toFixed(2), key: "Total Energy Consumption"}
                        ]
                    };
                });

                
                console.log(data);
                
                
                this.usage = data;
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
});
