import type { WorkOrderMaterial } from '@/models/workOrderMaterial';
import type { WorkOrderMaterialResponseDTO } from '../dto/response';

export const FromWorkOrderMaterialResponseDTOToWorkOrderMaterial = async (
  source: WorkOrderMaterialResponseDTO,
): Promise<WorkOrderMaterial> => {
  return {
    id: source.data.id,
    squareMeters: source.data.squareMeters,
    unitPrice: source.data.unitPrice,
    workOrderId: source.data.workOrderId,
    Material: {
      id: source.data.Material.id,
      costPerSquareMeter: source.data.Material.costPerSquareMeter,
      name: source.data.Material.name,
      note: source.data.Material.note,
      productCode: source.data.Material.productCode,
      supplierId: source.data.Material.supplierId,
      vatPercentage: source.data.Material.vatPercentage,
    },
  };
};
