import {AxiosResponse} from "axios";
import {ISneakers} from "../interfaces/sneakers_interface";
import {axiosService} from "./axios_service";
import {urls} from "../constants";

type Res<T> = Promise<AxiosResponse<T>>

const sneakersService = {
    getAll: (): Res<ISneakers[]> => axiosService.get(urls.users)
}

export {
    sneakersService
}
