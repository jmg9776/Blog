import {createLocalAxios, CatchError } from "@/util/http-commons.ts";
import {AxiosResponse} from "axios";

const local = createLocalAxios();
const url = "/public/board"

class ApiService {
    @CatchError
    async getBardCategoryInfoAll(
        success: (response: AxiosResponse) => void,
    ): Promise<void> {
        const response = await local.get(`${url}/info/category`);
        success(response);
    }

    @CatchError
    async getBoardPostList(
        success: (response: AxiosResponse) => void,
        search: string,
        page: string
    ): Promise<void> {
        const params = new URLSearchParams({
            page: page,
            size: '6'
        });
        const response = await local.get(`${url}/post/${search}?${params}`);
        success(response);
    }
}

export {
    ApiService
}