import Axios from 'axios';
import type { CreateSupplierRequestDTO, SuppliersRequest, UpdateSupplierRequestDTO } from './dto/request';
import type { Supplier } from '@/models/supplier';
import { validateZodSchema } from '@/shared/config/validation';
import { supplierResponseDtoSchema, suppliersResponseDtoSchema } from './validator/validator';
import { FromSupplierResponseDTOToSupplier, FromSuppliersResponseDTOToSupplier } from './mapper/mapper';
import type { Paged, PagedInput } from '../common/validator';

export const SupplierApi = {
  post: async (input: CreateSupplierRequestDTO): Promise<void> => {
    await Axios.post(`/suppliers`, input);
  },

  delete: async (id: string): Promise<void> => {
    await Axios.delete(`/suppliers/${id}`);
  },
  patch: async (input: UpdateSupplierRequestDTO): Promise<void> => {
    const { id, ...rest } = input;
    await Axios.patch(`/suppliers/${id}`, rest);
  },

  getById: async (id: string): Promise<Supplier> => {
    const res = await Axios.get(`/suppliers/${id}`);

    const validRes = await validateZodSchema(supplierResponseDtoSchema, res.data);

    return FromSupplierResponseDTOToSupplier(validRes);
  },

  getAllSuppliers: async ({
    pageNumber,
    pageSize,
    filters: { name, city, search },
  }: PagedInput<SuppliersRequest>): Promise<Paged<Supplier[]>> => {
    const res = await Axios.get('/suppliers', {
      params: {
        pageNumber,
        pageSize,
        name,
        city,
        search,
      },
    });

    const validRes = await validateZodSchema(suppliersResponseDtoSchema, res.data);

    return FromSuppliersResponseDTOToSupplier(validRes);
  },
};
