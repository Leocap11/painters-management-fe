import type { Client } from '@/models/client';
import type { ClientResponseDTO, ClientsResponseDTO } from '../dto/response';
import type { Paged } from '@/api/common/validator';

export const FromClientResponseDTOToClientModel = async (source: ClientResponseDTO): Promise<Client> => {
  return source.data;
};

export const FromClientsResponseDTOToClientModel = async (source: ClientsResponseDTO): Promise<Paged<Client[]>> => {
  return { data: source.data, pagination: source.pagination };
};
