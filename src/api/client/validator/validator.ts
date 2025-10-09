import z from 'zod';

export const Client = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  address: z.string(),
  city: z.string(),

  //optional fields
  fiscalCode: z.string().nullable(),
  vatNumber: z.string().nullable(),
  mobilePhone: z.string().nullable(),
  telephone: z.string().nullable(),
  email: z.email().nullable(),
});
