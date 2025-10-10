import { getPagedResponseDtoSchema, getResponseDtoSchema } from '@/api/common/validator';
import z from 'zod';

export const Material = z.object({
  id: z.string(),
  productCode: z.string().nullable(),
  name: z.string(),
  costPerSquareMeter: z.number().positive(),
  note: z.string().nullable(),
  vatPercentage: z.number(),
  supplierId: z.string(),
});

export const materialResponseDtoSchema = getResponseDtoSchema(Material);
export const materialsResponseDtoSchema = getPagedResponseDtoSchema(z.array(Material));
