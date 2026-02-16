import { useMutation, useQueryClient } from "@tanstack/react-query";
import { WorkOrderMaterialApi } from "./workOrderMaterial.api";

export const usePatchWorkOrderMaterialMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: WorkOrderMaterialApi.patch,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['work-order'] }),
    });
};


export const useDeleteWorkOrderMaterialMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: WorkOrderMaterialApi.delete,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['work-order'] }),
    });
};
