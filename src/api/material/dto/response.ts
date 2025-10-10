import type z from 'zod';
import type { materialResponseDtoSchema, materialsResponseDtoSchema } from '../validator/validator';

export type MaterialResponseDTO = z.infer<typeof materialResponseDtoSchema>;
export type MaterialsResponseDTO = z.infer<typeof materialsResponseDtoSchema>;
