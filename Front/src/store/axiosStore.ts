import { defineStore } from 'pinia';
import { createLocalAxios } from "@/shared/infrastructure/axios/crateLocalAxios.ts";
import { AxiosInstance } from "axios";
import { AxiosService } from "@/shared/infrastructure/axios/AxiosService";

export const useAxiosStore = defineStore('axiosStore', {
    state: () => ({
        axiosInstances: {
            nonAuth: null as AxiosInstance | null,
            auth: null as AxiosInstance | null,
            fileUpload: null as AxiosInstance | null,
        },
        axiosService: null as AxiosService | null,
    }),
    actions: {
        initAxiosInstance(key: 'nonAuth' | 'auth' | 'fileUpload', requireAuth = false, isFileUpload = false) {
            if (!this.axiosInstances[key]) {
                this.axiosInstances[key] = createLocalAxios(requireAuth, isFileUpload);
            }
            return this.axiosInstances[key];
        },
        getAxiosInstance(requireAuth: boolean) {
            return this.initAxiosInstance(requireAuth ? 'auth' : 'nonAuth', requireAuth);
        },
        getFileUploadInstance() {
            return this.initAxiosInstance('fileUpload', true, true);
        },
        getAxiosService() {
            if (this.axiosService == null) {
                this.axiosService = new AxiosService();
            }
            return this.axiosService;
        }
    },
});
