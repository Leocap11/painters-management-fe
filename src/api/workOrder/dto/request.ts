import { WorkOrderStatus } from '@/models/workOrder';
import z from 'zod';

export interface WorkOrdersRequest {
  city: string;
  clientId: string;
  materialIds: string[];
  periodDateFrom: string;
  periodDateTo: string;
  workOrderStatus: WorkOrderStatus;
  isInvoiceSended: boolean;
  search: string;
}

export type CreateWorkOrderRequestDTO = z.infer<typeof CreateWorkOrderRequestSchema>;

export const CreateWorkOrderRequestSchema = z.object({
  clientId: z.string(),
  startWorkOrderDate: z.string(),
  endWorkOrderDate: z.string(),
  workOrderMaterials: z.array(
    z.object({
      materialId: z.string(),
      squareMeters: z.number().positive(),
      unitPrice: z.number().positive(),
    }),
  ),
});

export type UpdateWorkOrderRequestDTO = z.infer<typeof UpdateWorkOrderRequestSchema>;

export const UpdateWorkOrderRequestSchema = z.object({
  id: z.string(),
  startWorkOrderDate: z.string().optional(),
  endWorkOrderDate: z.string().optional(),
  isInvoiceSended: z.boolean().optional(),
  status: z.enum(WorkOrderStatus).optional(),
});

export type CreateWorkOrderMaterialRequestDTO = z.infer<typeof CreateWorkOrderMaterialRequestSchema>;

export const CreateWorkOrderMaterialRequestSchema = z.object({
  workOrderId: z.string(),
  unitPrice: z.number().positive(),
  materialId: z.string(),
  squareMeters: z.number().positive(),
});
