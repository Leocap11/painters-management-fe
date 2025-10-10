import Axios from 'axios';
import type { CreateMaterialRequestDTO, MaterialsRequest, UpdateMaterialRequestDTO } from './dto/request';
import { validateZodSchema } from '@/shared/config/validation';
import type { Material } from '@/models/material';
import { materialResponseDtoSchema, materialsResponseDtoSchema } from './validator/validator';
import { FromMaterialResponseDTOToMaterial, FromMaterialsResponseDTOToMaterials } from './mapper/mapper';
import type { Paged, PagedInput } from '../common/validator';

export const MaterialApi = {
  post: async (input: CreateMaterialRequestDTO): Promise<void> => {
    await Axios.post(`/materials`, input);
  },

  delete: async (id: string): Promise<void> => {
    await Axios.delete(`/clients/${id}`);
  },
  patch: async (input: UpdateMaterialRequestDTO): Promise<void> => {
    const { id, ...rest } = input;
    await Axios.patch(`/materials/${id}`, rest);
  },

  getById: async (id: string): Promise<Material> => {
    const res = await Axios.get(`/materials/${id}`);

    const validRes = await validateZodSchema(materialResponseDtoSchema, res.data);

    return FromMaterialResponseDTOToMaterial(validRes);
  },

  getAllMaterial: async ({
    pageNumber,
    pageSize,
    filters: { name, productCode, supplierId, search },
  }: PagedInput<MaterialsRequest>): Promise<Paged<Material[]>> => {
    const res = await Axios.get('/materials', {
      params: {
        pageNumber,
        pageSize,
        name,
        supplierId,
        productCode,
        search,
      },
    });

    const validRes = await validateZodSchema(materialsResponseDtoSchema, res.data);

    return FromMaterialsResponseDTOToMaterials(validRes);
  },
};
