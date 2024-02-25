import {defineStore} from 'pinia';
import {createLocalAxios} from "@/shared/infrastructure/axios/crateLocalAxios.ts";
import {AxiosInstance} from "axios";
import {AxiosService} from "@/shared/infrastructure/axios/AxiosService.ts";

export const useAxiosStore = defineStore('axiosStore', {
    state: () => ({
        axiosInstance: null as AxiosInstance | null,
        axiosService: null as AxiosService | null,
    }),
    actions: {
        initializeAxios(requireAuth: boolean, isFormData: boolean = false) {
            this.axiosInstance = createLocalAxios(requireAuth, isFormData);
        },
        getAxiosInstance() {
            return this.axiosInstance;
        },
        getAxiosService() {
            if (this.axiosService == null) {
                this.axiosService = new AxiosService();
            }
            return this.axiosService;
        }
    },
});
