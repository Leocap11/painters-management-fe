import type { Paged } from './../../common/validator';
import type { Supplier } from '@/models/supplier';
import type { SupplierResponseDTO, SuppliersResponseDTO } from '../dto/response';

export const FromSupplierResponseDTOToSupplier = async (source: SupplierResponseDTO): Promise<Supplier> => {
  return source.data;
};

export const FromSuppliersResponseDTOToSupplier = async (source: SuppliersResponseDTO): Promise<Paged<Supplier[]>> => {
  return { data: source.data, pagination: source.pagination };
};
