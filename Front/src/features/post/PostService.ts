import {CatchError} from "@/shared/infrastructure/error/NomalError.ts";
import {useAxiosStore} from "@/store/axiosStore.ts";

const url = "/public/board/post"

class PostService {
    axiosService() {
        const axiosStore = useAxiosStore();
        return axiosStore.getAxiosService();
    }

    @CatchError
    async getBoardPost(num: string): Promise<any> {
        return (await this.axiosService()?.getData(false, `${url}/view/${num}`)).data;
    }
}

export {
    PostService
}