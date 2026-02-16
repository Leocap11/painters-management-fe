import z from 'zod';

export type CreateMaterialRequestDTO = z.infer<typeof CreateMaterialRequestSchema>;

export const CreateMaterialRequestSchema = z.object({
  productCode: z.string().optional(),
  name: z.string(),
  costPerSquareMeter: z.number().positive(),
  instructionForUse: z.string().optional(),
  supplierId: z.string(),
  vatPercentage: z.number().positive(),
});

export type UpdateMaterialRequestDTO = z.infer<typeof UpdateMaterialRequestSchema>;

export const UpdateMaterialRequestSchema = z.object({
  id: z.string(),
  productCode: z.string().optional(),
  name: z.string().optional(),
  costPerSquareMeter: z.number().positive().optional(),
  instructionForUse: z.string().optional(),
  vatPercentage: z.number().positive().optional(),
});

export interface MaterialsRequest {
  productCode: string;
  supplierId: string;
  name: string;
  search: string;
}
