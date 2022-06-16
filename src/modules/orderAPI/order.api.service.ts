import Axios from 'axios';
import { Injectable } from "@nestjs/common";
import { OrderDetailDto } from './dto/orderDetail.dto';

@Injectable()
export class OrderAPIService {
    async createOrder(): Promise<OrderDetailDto> {
        const url = `http://localhost:3003/order/${this._randNum()}`;
        const response = await Axios.post(url);
        return this._mapResponse(response.data);
    }

    async getOrder(id: string): Promise<OrderDetailDto> {
        const url = `http://localhost:3003/order/${id}`;
        const response = await Axios.post(url);
        return this._mapResponse(response.data);
    }

    private _randNum(): number {
        return Math.ceil(Math.random() * 100);
    }

    private _mapResponse(data: any): OrderDetailDto {
        return {
            id: data.id,
            customerName: data.customerName
        }
    }
}