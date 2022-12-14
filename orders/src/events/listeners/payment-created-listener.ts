import { Listener, NotFoundError, OrderStatus, PaymentCreatedEvent, Topics } from "@mgbg_tickets/common";
import { PaymentCreatedGroup } from '../queue-group-name';
import { Order } from '../../models/order';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent>{
    topic: Topics.PaymentCreated = Topics.PaymentCreated;
    groupId = PaymentCreatedGroup;

    async onMessage(data: any) {
        console.log('PaymentCreatedListener:', data);

        const order = await Order.findById(data.orderId);
        if (!order) throw new NotFoundError();

        order.set({
            status: OrderStatus.Compelete
        });
        await order.save();

        /*
        نکته اینکه زمانی که شما هر تغییری به رکوردتون میدیم فیلد ورژن تغییر میکنه
        ولی از اونجا که ما اوردرمون کامل شد و دیگه قرار نیست که این رکورد تغییری درش اتفاق بیافته
        پس دیگه به اطلاع باقی سرویس ها نمیرسونیم که فلان رکورد اورد ورژنش عوض شده
        تا احتمالا سرویس های دیگه ای که اورود رو ذخیره میکنن بیان و ورژن خودشون رو سینک کنن
        چون نیازی نیست و دیگه قرار نیست این رکورد تغییر کنه چون سفارش ما تکمیل شده
       ولی اگه دوست داشته باشید میتونی یک ایونت دیگه ایجاد کنید و بگید اوردر آپدیت شده 
       تا بقیه سرویس ها بفهمنن و خودشون رو سینک کنن
        */
    }
}