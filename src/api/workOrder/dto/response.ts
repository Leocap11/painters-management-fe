import type z from 'zod';
import type { workOrderResponseDtoSchema, workOrdersResponseDtoSchema } from '../validator/validator';

export type WorkOrderResponseDTO = z.infer<typeof workOrderResponseDtoSchema>;
export type WorkOrdersResponseDTO = z.infer<typeof workOrdersResponseDtoSchema>;
