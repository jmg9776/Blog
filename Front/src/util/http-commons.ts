import axios, {AxiosInstance} from "axios";

const { VITE_VUE_API_URL, DEV } = import.meta.env;

function CatchError(_: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>) {
    const method = descriptor.value;

    descriptor.value = async function(...args: any[]) {
        try {
            return await method.apply(this, args);
        } catch (error) {
            if (DEV) console.log(`Error in ${propertyName}:`, error);
        }
    };
}

function createLocalAxios(): AxiosInstance {
    return axios.create({
      baseURL: VITE_VUE_API_URL,
      withCredentials: true,
      headers: {
          "Content-Type": "application/json;charset=utf-8",
      },
  });
}

export { createLocalAxios, CatchError };
