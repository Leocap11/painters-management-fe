import Axios from 'axios';
import type {
  CreateWorkOrderMaterialRequestDTO,
  CreateWorkOrderRequestDTO,
  UpdateWorkOrderRequestDTO,
  WorkOrdersRequest,
} from './dto/request';
import { validateZodSchema } from '@/shared/config/validation';
import { workOrderResponseDtoSchema, workOrdersResponseDtoSchema } from './validator/validator';
import type { WorkOrder } from '@/models/workOrder';
import { FromWorkOrderResponseDTOToWorkOrder, FromWorkOrdersResponseDTOToWorkOrder } from './mapper/mapper';
import type { Paged, PagedInput } from '../common/validator';
import { workOrderMaterialResponseDtoSchema } from '../workOrderMaterial/validator/validator';
import { FromWorkOrderMaterialResponseDTOToWorkOrderMaterial } from '../workOrderMaterial/mapper/mapper';
import type { WorkOrderMaterial } from '@/models/workOrderMaterial';

export const WorkOrderApi = {
  post: async (input: CreateWorkOrderRequestDTO): Promise<void> => {
    await Axios.post(`/work-orders`, input);
  },

  delete: async (id: string): Promise<void> => {
    await Axios.delete(`/work-orders/${id}`);
  },
  patch: async (input: UpdateWorkOrderRequestDTO): Promise<void> => {
    const { id, ...rest } = input;
    await Axios.patch(`/work-orders/${id}`, rest);
  },

  getById: async (id: string): Promise<WorkOrder> => {
    const res = await Axios.get(`/work-orders/${id}`);

    const validRes = await validateZodSchema(workOrderResponseDtoSchema, res.data);

    return FromWorkOrderResponseDTOToWorkOrder(validRes);
  },

  getAllWorkOrders: async ({
    pageNumber,
    pageSize,
    filters: { clientId, isInvoiceSended, materialIds, periodDateFrom, periodDateTo, workOrderStatus, city, search },
  }: PagedInput<WorkOrdersRequest>): Promise<Paged<WorkOrder[]>> => {
    const res = await Axios.get('/work-orders', {
      params: {
        pageNumber,
        pageSize,
        clientId,
        isInvoiceSended,
        materialIds,
        periodDateFrom,
        periodDateTo,
        workOrderStatus,
        city,
        search,
      },
    });

    const validRes = await validateZodSchema(workOrdersResponseDtoSchema, res.data);

    return FromWorkOrdersResponseDTOToWorkOrder(validRes);
  },

  addMaterial: async (input: CreateWorkOrderMaterialRequestDTO): Promise<WorkOrderMaterial> => {
    const res = await Axios.post(`/work-orders/${input.workOrderId}/material`, input);

    const validRes = await validateZodSchema(workOrderMaterialResponseDtoSchema, res.data);

    return FromWorkOrderMaterialResponseDTOToWorkOrderMaterial(validRes);
  },
};
