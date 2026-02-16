import type z from 'zod';
import type { clientResponseDtoSchema, clientsResponseDtoSchema } from '../validator/validator';

export type ClientResponseDTO = z.infer<typeof clientResponseDtoSchema>;
export type ClientsResponseDTO = z.infer<typeof clientsResponseDtoSchema>;
