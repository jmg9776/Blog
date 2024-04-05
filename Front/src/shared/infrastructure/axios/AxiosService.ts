import {createLocalAxios} from "@/shared/infrastructure/axios/crateLocalAxios.ts";
import {useAxiosStore} from "@/store/axiosStore.ts";
import {AxiosInstance} from "axios";

class AxiosService {
    AxiosInstance(requireAuth: boolean): AxiosInstance {
        const axiosStore = useAxiosStore();
        if (!axiosStore.axiosInstance) {
            axiosStore.initializeAxios(requireAuth);
        }
        return <AxiosInstance>axiosStore.getAxiosInstance();
    }

    async getData(requireAuth: boolean, url: string, data?: any) {
        return await this.AxiosInstance(requireAuth).get(url, data);
    }

    async postData(requireAuth: boolean, url: string, data: any) {
        return await this.AxiosInstance(requireAuth).post(url, data);
    }

    async deleteData(requireAuth: boolean, url: string, data: any) {
        const localAxios = createLocalAxios(requireAuth);
        return await localAxios.delete(url, data);
    }

    async putData(requireAuth: boolean, url: string, data: any) {
        const localAxios = createLocalAxios(requireAuth);
        return await localAxios.put(url, data);
    }
}

export {
    AxiosService,
}