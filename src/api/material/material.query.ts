import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { materialApi } from './material.api';
import type { Paged, PagedInput } from '../common/validator';
import type { Material } from '@/models/material';
import type { MaterialsRequest } from './dto/request';

export const useMaterialQuery = (materialId: string) =>
  useQuery({
    queryKey: ['material', materialId],
    queryFn: () => materialApi.getById(materialId),
    enabled: !!materialId,
  });

export const useMaterialsQuery = ({ pageNumber, pageSize, filters }: PagedInput<MaterialsRequest>) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['client-list', pageNumber, pageSize, filters],
    queryFn: () => materialApi.getAllMaterial({ pageSize, pageNumber, filters }),
    placeholderData: () => {
      return queryClient.getQueryData<Paged<Material[]>>(['material-list', pageNumber - 1, pageSize]);
    },
  });
};

export const useDeleteMaterialMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: materialApi.delete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['material-list'] }),
  });
};

export const usePatchMaterialMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: materialApi.patch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['material'] }),
  });
};

export const usePostMaterialMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: materialApi.post,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['material-list'] }),
  });
};
