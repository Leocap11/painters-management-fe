import { z } from 'zod';

export const envSchema = z.object({
  VITE_APPLICATION_MODE: z.enum(['production', 'development', 'uat']),
  VITE_API_BASE_URL: z.string(),
});
