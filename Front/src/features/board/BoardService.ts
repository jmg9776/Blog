import {CatchError} from "@/shared/infrastructure/error/NomalError.ts";
import {useAxiosStore} from "@/store/axiosStore.ts";

const url = "/public/board"

class BoardService {
    axiosService() {
        const axiosStore = useAxiosStore();
        return axiosStore.getAxiosService();
    }

    @CatchError
    async getBoardPostList(search: string, page: string): Promise<any> {
        const params = new URLSearchParams({
            page: page,
            size: '6'
        });
        return (await this.axiosService()?.getData(false, `${url}/post/${search}?${params}`)).data;
    }
}

export {
    BoardService
}