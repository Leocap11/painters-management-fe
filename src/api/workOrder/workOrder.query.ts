import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { WorkOrderApi } from './workOrder.api';
import type { Paged, PagedInput } from '../common/validator';
import type { WorkOrdersRequest } from './dto/request';
import type { WorkOrder } from '@/models/workOrder';

export const useWorkOrderQuery = (workOrderId: string) =>
  useQuery({
    queryKey: ['work-order', workOrderId],
    queryFn: () => WorkOrderApi.getById(workOrderId),
    enabled: !!workOrderId,
  });

export const useWorkOrdersQuery = ({ pageNumber, pageSize, filters }: PagedInput<WorkOrdersRequest>) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['supplier-list', pageNumber, pageSize, filters],
    queryFn: () => WorkOrderApi.getAllWorkOrders({ pageSize, pageNumber, filters }),
    placeholderData: () => {
      return queryClient.getQueryData<Paged<WorkOrder[]>>(['work-order-list', pageNumber - 1, pageSize]);
    },
  });
};

export const useDeleteWorkOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WorkOrderApi.delete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['work-order-list'] }),
  });
};

export const usePatchWorkOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WorkOrderApi.patch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['work-order'] }),
  });
};

export const usePostWorkOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WorkOrderApi.post,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['work-order-list'] }),
  });
};

export const usePostWorkOrderAddMaterialMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: WorkOrderApi.addMaterial,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['work-order-list', 'work-order'] }),
  });
};
