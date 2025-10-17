import { getResponseDtoSchema } from '@/api/common/validator';
import { Material } from '@/api/material/validator/validator';
import z from 'zod';

export const WorkOrderMaterial = z.object({
  id: z.string(),
  workOrderId: z.string(),
  squareMeters: z.number(),
  unitPrice: z.number(),
  Material: Material,
});

export const workOrderMaterialResponseDtoSchema = getResponseDtoSchema(WorkOrderMaterial);
