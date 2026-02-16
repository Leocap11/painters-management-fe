import type { Paged, PagedInput } from './../common/validator';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ClientApi } from './client.api';
import type { ClientsRequest } from './dto/request';
import type { Client } from '@/models/client';

export const useClientQuery = (clientId: string) =>
  useQuery({
    queryKey: ['client', clientId],
    queryFn: () => ClientApi.getById(clientId),
    enabled: !!clientId,
  });

export const useClientsQuery = ({ pageNumber, pageSize, filters }: PagedInput<ClientsRequest>) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['client-list', pageNumber, pageSize, filters],
    queryFn: () => ClientApi.getAllClient({ pageSize, pageNumber, filters }),
    placeholderData: () => {
      return queryClient.getQueryData<Paged<Client[]>>(['client-list', pageNumber - 1, pageSize]);
    },
  });
};

export const useDeleteClientMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ClientApi.delete,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['client-list'] }),
  });
};

export const usePatchClientMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ClientApi.patch,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['client'] }),
  });
};

export const usePostClientMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ClientApi.post,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['client-list'] }),
  });
};
