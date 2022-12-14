
import mongoose from 'mongoose';
import { Order, OrderStatus } from './order'
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

interface TicketAttr {
    id: string,
    title: string,
    price: number
}

interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attr: TicketAttr): TicketDoc;
    findByIdAndEvent(event: { id: string, version: number}): Promise<TicketDoc | null>
}

export interface TicketDoc extends mongoose.Document {
    title: string,
    price: number,
    version: number,
    isReserved(): Promise<boolean>
}

const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true,
            min: 0
        }
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                delete ret.__v;
            }
        }
    }
);

/*
mongoose-update-if-current :
This plugin brings optimistic concurrency control to Mongoose documents
 by incrementing document version numbers on each save, and preventing 
 previous versions of a document from being saved over the current version.
*/
// this line below will change __v to version
ticketSchema.set('versionKey', 'version');
// ticketSchema.plugin(updateIfCurrentPlugin);


// ما اومدیم پلاگین مانگوس آپدیت ایف کارنت رو حذف کردیم چون خودمون اومدیم منطقش رو پیاده کردیم
// به این شکل که گفتیم از میدلور سیو استفاده میکنیم و زمانی که داره آپدیتی صورت میگیه فیلد ورژن
// رو یک شماره کمتر کن
// با حذف اون پلاگین دیگه وابستگی ما به پلاگین هم از بین میره
// اگه دو روزه دیگه متد ورژنینگ ما عوض شد کافیه بیام این زیر و اون پیاده کنیم
// مثلا تو بعضی از متدها از تایم برای ورژنینگ استفاده میکنم 
// خیلی راحت میتونیم بیام پاییم و ما هم بگیم بر اساس تایم باشه ولی در حالت قبلی وابستگی به پلاگین داشتیم 
ticketSchema.pre('save', function(done) {
    // pre is mongoose middleware and run before any save
    // reassign the where property
    // @ts-ignore
    this.$where = { 
        // whatever is current version is minus 1 
        version: this.get('version') - 1
    }

    done();
});

ticketSchema.statics.findByIdAndEvent = (event: { id: string, version: number}) => {
    return Ticket.findOne({
        _id: event.id,
        version: event.version - 1,
    });
}

ticketSchema.statics.build = (attr: TicketAttr) => {
    // Notice: we don't have id instead we have _id so we should assign the id into _id
    // so we can no longer user the belove line 
    
    // ************** return new Ticket(attr) **************

    // instead we should use line below 
    // because we have to use value of id that came from *Ticket Service* and insert it inot _id 

    // also if you change any field in TicketAttr you need to 
    // come below and add it into the below object

    return new Ticket({
        _id: attr.id,
        title: attr.title,
        price: attr.price
    })

}

ticketSchema.methods.isReserved = async function() {
    // this === the ticket document that we just called 'isReserved' on
    const existingOrder = await Order.findOne({
        ticket: this,
        status: {
            $in: [
                OrderStatus.Created,
                OrderStatus.Compelete,
                OrderStatus.AwaitingPayment
            ]
        }
    });

    return !!existingOrder;
}


const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };