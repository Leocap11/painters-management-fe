import z from 'zod';

export const getResponseDtoSchema = <T>(value: z.ZodType<T>) =>
  z.object({
    outcome: z.boolean(),
    data: value,
  });

export const getPagedResponseDtoSchema = <T>(data: z.ZodType<T>) =>
  z.object({
    outcome: z.boolean(),
    data,
    pagination: z.object({
      pageNumber: z.number().positive(),
      pageSize: z.number().positive(),
      totalItems: z.number().positive(),
      totalPages: z.number().positive(),
    }),
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Paged<D extends readonly any[]> {
  data: D;
  pagination: {
    pageNumber: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface PagedInput<T> {
  pageNumber: number;
  pageSize: number;
  filters: T;
}
