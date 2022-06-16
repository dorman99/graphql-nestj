import Axios from 'axios';
import { BadRequestException, Injectable } from "@nestjs/common";
import { PaymentDetailDto } from './dto/paymentDetail.dto';

@Injectable()
export class PaymentAPIService {
    async createPayment(orderId: string):  Promise<PaymentDetailDto> {
        const url = `http://localhost:3004/payment/order/${orderId}`;
        const response = await Axios.post(url);
        return this._mapResponse(response.data);
    }

    async getPayment(orderId: string): Promise<PaymentDetailDto> {
        try {
            const url = `http://localhost:3004/payment/order/${orderId}`;
            const response = await Axios.post(url);
            return this._mapResponse(response.data);
        } catch (err) {
            throw new BadRequestException(err)
        }
    }

    _mapResponse(data: any): PaymentDetailDto {
        return {
            id: data.id, 
            orderId: data.orderId, 
            status: data.status
        }
    }
}