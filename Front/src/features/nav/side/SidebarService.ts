import {CatchError} from "@/shared/infrastructure/error/NomalError.ts";
import {useAxiosStore} from "@/store/axiosStore.ts";

const url = "/public/board"

class ApiService {
    axiosService() {
        const axiosStore = useAxiosStore();
        return axiosStore.getAxiosService();
    }

    @CatchError
    async getBardCategoryInfoAll(): Promise<any> {
        return (await this.axiosService()?.getData(false, `${url}/info/category`)).data;
    }
}

export {
    ApiService
}