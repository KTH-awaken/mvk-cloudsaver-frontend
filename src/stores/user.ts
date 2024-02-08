import { defineStore } from 'pinia';
import axios from "axios";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
}

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        users: [] as User[],
        isLoading: false,
        error: null as string | null,
    }),
    actions: {
        testError() {
            this.error = "Test error";
        },
        async fetchUsers() {
            this.users = [];
            this.error = null;
            this.isLoading = true;
            try {
                const url = "https://dummyjson.com/users";
                const response = await axios.get(url);                
                this.users = response.data.users;
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
