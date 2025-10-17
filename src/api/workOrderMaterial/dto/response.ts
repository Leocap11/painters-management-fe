import type z from 'zod';
import type { workOrderMaterialResponseDtoSchema } from '../validator/validator';

export type WorkOrderMaterialResponseDTO = z.infer<typeof workOrderMaterialResponseDtoSchema>;
