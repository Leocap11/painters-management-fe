import type { Material } from '@/models/material';
import type { MaterialResponseDTO, MaterialsResponseDTO } from '../dto/response';
import type { Paged } from '@/api/common/validator';

export const FromMaterialResponseDTOToMaterial = async (source: MaterialResponseDTO): Promise<Material> => {
  return source.data;
};

export const FromMaterialsResponseDTOToMaterials = async (source: MaterialsResponseDTO): Promise<Paged<Material[]>> => {
  return { data: source.data, pagination: source.pagination };
};
