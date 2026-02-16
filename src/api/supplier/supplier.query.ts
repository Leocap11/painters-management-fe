import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { Paged, PagedInput } from '../common/validator';
import type { SuppliersRequest } from './dto/request';
import { SupplierApi } from './supplier.api';
import type { Supplier } from '@/models/supplier';

export const useSupplierQuery = (supplierId: string) =>
  useQuery({
    queryKey: ['supplier', supplierId],
    queryFn: () => SupplierApi.getById(supplierId),
    enabled: !!supplierId,
  });

export const useSuppliersQuery = ({ pageNumber, pageSize, filters }: PagedInput<SuppliersRequest>) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['supplier-list', pageNumber, pageSize, filters],
    queryFn: () => SupplierApi.getAllSuppliers({ pageSize, pageNumber, filters }),
    placeholderData: () => {
      return queryClient.getQueryData<Paged<Supplier[]>>(['supplier-list', pageNumber - 1, pageSize]);
    },
  });
};

export const useDeleteSupplierMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SupplierApi.delete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['supplier-list'] }),
  });
};

export const usePatchSupplierMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SupplierApi.patch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['supplier'] }),
  });
};

export const usePostSupplierMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SupplierApi.post,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['supplier-list'] }),
  });
};
