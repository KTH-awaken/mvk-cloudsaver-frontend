// import { defineStore } from 'pinia';
// import axios from 'axios';


// interface Data{
//     resource_name:string,
//     label: string,  
//     custom_name:string,
//     usage:{
//       cpu_usage:string,
//       memory_usage: string,
//       timestamp: number,
//       cpu_percentage:number,
//       energy_consumption: string
//     }[],
//   }

//   // Use the correct endpoint for your API
// const endpoint = "http://localhost:8080/api/AFRY/100"

// export const useUsageStore = defineStore('usage', {
//     state: () => ({
//       data: [] as Data[],
//       isLoading: false,
//       error: null as string | null,
//     }),
//     actions: {
//       async fetchUsage() {
//         this.data = [];
//         this.isLoading = true;
//         this.error = null;
//         try {
//           const response = await axios.get(endpoint);
//           // Directly assigning fetched data assuming it matches the Data interface
//           this.data = response.data;
//         } catch (error) {
//           this.error = error instanceof Error ? error.message : "An error occurred";
//           console.error(error);
//         } finally {
//           this.isLoading = false;
//         }
//       },
//     },
//   });

import { defineStore } from 'pinia';
import axios from 'axios';

interface UsageData {
  cpu_usage: string;
  memory_usage: string;
  timestamp: number;
  cpu_percentage: number;
  energy_consumption: string;
}

export interface Data {
  resource_name: string;
  label: string;
  custom_name: string;
  usage: UsageData[];
}

const endpoint = "http://localhost:8080/api/AFRY/100";

export const useUsageStore = defineStore('usage', {
  state: () => ({
    data: [] as Data[],
    isLoading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchUsage() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get<Data[]>(endpoint);
        this.data = response.data;
      } catch (error) {
        this.error = error instanceof Error ? error.message : "An error occurred";
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
