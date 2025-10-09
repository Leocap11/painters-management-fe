import { envSchema } from './env-schema';

const envParsed = envSchema.safeParse(import.meta.env);

if (!envParsed.success) {
  console.error(envParsed.error);
  throw new Error('There is an error with the server environment variables');
}

export const Env = envParsed.data;
