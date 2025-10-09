import type { WorkOrderMaterial } from './workOrderMaterial';

export interface WorkOrderResponseDTO {
  id: string;
  netWorkOrderCost: number;
  totalWorkOrderVatCost: number;
  finalWorkOrderCost: number;
  startWorkOrderDate: string;
  endWorkOrderDate: string;
  isInvoiceSended: boolean;
  status: WorkOrderStatus;
  clientId: string;

  //relations
  WorkOrderMaterials: WorkOrderMaterial[];
}

export enum WorkOrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
  CREATED = 'CREATED',
}
