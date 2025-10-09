import type { Material } from './material';

export interface WorkOrderMaterial {
  id: string;
  workOrderId: string;
  squareMeters: number;
  unitPrice: number;
  Material: Material;
}
