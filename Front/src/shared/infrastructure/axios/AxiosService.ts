import {useAxiosStore} from "@/store/axiosStore.ts";
import {AxiosInstance} from "axios";

class AxiosService {
    getAxiosInstance(requireAuth: boolean): AxiosInstance {
        const axiosStore = useAxiosStore();
        return <AxiosInstance>axiosStore.getAxiosInstance(requireAuth);
    }

    async getData(requireAuth: boolean, url: string, data?: any) {
        return await this.getAxiosInstance(requireAuth).get(url, data);
    }

    async postData(requireAuth: boolean, url: string, data: any) {
        return await this.getAxiosInstance(requireAuth).post(url, data);
    }

    async deleteData(requireAuth: boolean, url: string, data: any) {
        return await this.getAxiosInstance(requireAuth).delete(url, data);
    }

    async putData(requireAuth: boolean, url: string, data: any) {
        return await this.getAxiosInstance(requireAuth).put(url, data);
    }
}

export {
    AxiosService,
}