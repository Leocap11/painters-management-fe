import { getPagedResponseDtoSchema, getResponseDtoSchema } from '@/api/common/validator';
import z from 'zod';

export const Supplier = z.object({
  id: z.string(),
  name: z.string(),
  vatNumber: z.string(),
  address: z.string(),
  city: z.string(),
  email: z.email().nullable(),
  mobilePhone: z.string().nullable(),
  telephone: z.string().nullable(),
});

export const supplierResponseDtoSchema = getResponseDtoSchema(Supplier);
export const suppliersResponseDtoSchema = getPagedResponseDtoSchema(z.array(Supplier));
