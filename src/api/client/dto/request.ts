import z from 'zod';

export interface ClientsRequest {
  city: string;
  search: string;
}

export type CreateClientRequestDTO = z.infer<typeof CreateClientRequestSchema>;

export const CreateClientRequestSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city: z.string(),
  fiscalCode: z.string().optional(),
  vatNumber: z.string().optional(),
  mobilePhone: z.string().optional(),
  telephone: z.string().optional(),
  email: z.string().optional(),
});

export type UpdateClientRequestDTO = z.infer<typeof UpdateClientRequestSchema>;

export const UpdateClientRequestSchema = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  fiscalCode: z.string().optional(),
  vatNumber: z.string().optional(),
  mobilePhone: z.string().optional(),
  telephone: z.string().optional(),
  email: z.string().optional(),
});
