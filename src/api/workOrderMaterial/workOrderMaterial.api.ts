import { Axios } from "@/shared/config/axios";
import type { UpdateWorkOrderMaterialRequestDTO } from "./dto/request";

export const WorkOrderMaterialApi = {
    delete: async (id: string): Promise<void> => {
        await Axios.delete(`/work-order-materials/${id}`);
    },
    patch: async (input: UpdateWorkOrderMaterialRequestDTO): Promise<void> => {
        const { id, ...rest } = input;
        await Axios.patch(`/work-order-materials/${id}`, rest);
    },



};
