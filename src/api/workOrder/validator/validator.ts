import { getPagedResponseDtoSchema, getResponseDtoSchema } from '@/api/common/validator';
import { WorkOrderMaterial } from '@/api/workOrderMaterial/validator/validator';
import { WorkOrderStatus } from '@/models/workOrder';
import z from 'zod';

export const WorkOrder = z.object({
  id: z.string(),
  netWorkOrderCost: z.number().positive(),
  totalWorkOrderVatCost: z.number().positive(),
  finalWorkOrderCost: z.number().positive(),
  startWorkOrderDate: z.string(),
  endWorkOrderDate: z.string(),
  isInvoiceSended: z.boolean(),
  status: z.enum(WorkOrderStatus),
  clientId: z.string(),

  //relations
  WorkOrderMaterials: z.array(WorkOrderMaterial),
});

export const workOrderResponseDtoSchema = getResponseDtoSchema(WorkOrder);
export const workOrdersResponseDtoSchema = getPagedResponseDtoSchema(z.array(WorkOrder));
