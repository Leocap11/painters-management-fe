import { z } from 'zod';

export async function validateZodSchema<Shape extends z.ZodRawShape>(schema: z.ZodObject<Shape>, data: unknown) {
  const validationResult = await schema.safeParseAsync(data);

  if (!validationResult.success) {
    console.error('Validation Error:', validationResult.error.issues);
    throw new Error(`Validation failed: ${validationResult.error.message}`);
  }

  return validationResult.data;
}

export async function validateZodArraySchema<Shape extends z.ZodRawShape>(
  schema: z.ZodArray<z.ZodObject<Shape>>,
  data: unknown,
) {
  const validationResult = await schema.safeParseAsync(data);

  if (!validationResult.success) {
    console.error('Validation Error:', validationResult.error.issues);
    throw new Error(`Validation failed: ${validationResult.error.message}`);
  }

  return validationResult.data;
}
