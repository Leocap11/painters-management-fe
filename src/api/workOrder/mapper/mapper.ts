import type { WorkOrder } from '@/models/workOrder';
import type { WorkOrderResponseDTO, WorkOrdersResponseDTO } from '../dto/response';
import type { Paged } from '@/api/common/validator';

export const FromWorkOrderResponseDTOToWorkOrder = async (source: WorkOrderResponseDTO): Promise<WorkOrder> => {
  return {
    clientId: source.data.clientId,
    endWorkOrderDate: source.data.endWorkOrderDate,
    finalWorkOrderCost: source.data.finalWorkOrderCost,
    id: source.data.id,
    isInvoiceSended: source.data.isInvoiceSended,
    netWorkOrderCost: source.data.netWorkOrderCost,
    startWorkOrderDate: source.data.startWorkOrderDate,
    status: source.data.status,
    totalWorkOrderVatCost: source.data.totalWorkOrderVatCost,
    WorkOrderMaterials: source.data.WorkOrderMaterials.map((wo) => ({
      id: wo.id,
      squareMeters: wo.squareMeters,
      unitPrice: wo.unitPrice,
      workOrderId: wo.workOrderId,
      Material: {
        id: wo.Material.id,
        costPerSquareMeter: wo.Material.costPerSquareMeter,
        name: wo.Material.name,
        note: wo.Material.note,
        productCode: wo.Material.productCode,
        supplierId: wo.Material.supplierId,
        vatPercentage: wo.Material.vatPercentage,
      },
    })),
  };
};

export const FromWorkOrdersResponseDTOToWorkOrder = async (
  source: WorkOrdersResponseDTO,
): Promise<Paged<WorkOrder[]>> => {
  return {
    data: source.data.map((dt) => ({
      clientId: dt.clientId,
      endWorkOrderDate: dt.endWorkOrderDate,
      finalWorkOrderCost: dt.finalWorkOrderCost,
      id: dt.id,
      isInvoiceSended: dt.isInvoiceSended,
      netWorkOrderCost: dt.netWorkOrderCost,
      startWorkOrderDate: dt.startWorkOrderDate,
      status: dt.status,
      totalWorkOrderVatCost: dt.totalWorkOrderVatCost,
      WorkOrderMaterials: dt.WorkOrderMaterials.map((wo) => ({
        id: wo.id,
        squareMeters: wo.squareMeters,
        unitPrice: wo.unitPrice,
        workOrderId: wo.workOrderId,
        Material: {
          id: wo.Material.id,
          costPerSquareMeter: wo.Material.costPerSquareMeter,
          name: wo.Material.name,
          note: wo.Material.note,
          productCode: wo.Material.productCode,
          supplierId: wo.Material.supplierId,
          vatPercentage: wo.Material.vatPercentage,
        },
      })),
    })),
    pagination: source.pagination,
  };
};
