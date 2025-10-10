import type { ClientsRequest, CreateClientRequestDTO, UpdateClientRequestDTO } from './dto/request';
import type { Paged, PagedInput } from './../common/validator';
import type { Client } from '@/models/client';
import { Axios } from '@/shared/config/axios';
import { FromClientResponseDTOToClientModel, FromClientsResponseDTOToClientModel } from './mapper/mapper';
import { validateZodSchema } from '@/shared/config/validation';
import { clientResponseDtoSchema, clientsResponseDtoSchema } from './validator/validator';

export const ClientApi = {
  getById: async (id: string): Promise<Client> => {
    const res = await Axios.get(`/clients/${id}`);

    const validRes = await validateZodSchema(clientResponseDtoSchema, res.data);

    return FromClientResponseDTOToClientModel(validRes);
  },

  getAllClient: async ({
    pageNumber,
    pageSize,
    filters: { city, search },
  }: PagedInput<ClientsRequest>): Promise<Paged<Client[]>> => {
    const res = await Axios.get('/clients', {
      params: {
        pageNumber,
        pageSize,
        city,
        search,
      },
    });

    const validRes = await validateZodSchema(clientsResponseDtoSchema, res.data);

    return FromClientsResponseDTOToClientModel(validRes);
  },

  post: async (input: CreateClientRequestDTO): Promise<void> => {
    await Axios.post(`/clients`, input);
  },

  delete: async (id: string): Promise<void> => {
    await Axios.delete(`/clients/${id}`);
  },
  patch: async (input: UpdateClientRequestDTO): Promise<void> => {
    const { id, ...rest } = input;
    await Axios.patch(`/clients/${id}`, rest);
  },
};
