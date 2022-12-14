import mongoose from 'mongoose';
import { updateIfCurrentPlugin } from 'mongoose-update-if-current';

// An interface that describes the properties
// that are required to create a new ticket
interface ticketAttr {
    title: string;
    price: number;
    userId: string;
}

// An interface that describe the properties
// that a ticket Document has
interface TicketDoc extends mongoose.Document {
    title: string;
    price: number;
    userId: string;
    version: number;
    orderId?: string;
}

// An interface that describe the properties
// that a User Model has
interface TicketModel extends mongoose.Model<TicketDoc> {
    build(attrs: ticketAttr): TicketDoc;
}


const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        userId: {
            type: String,
            required: true
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
ticketSchema.plugin(updateIfCurrentPlugin);

/* 
Every time we want to creat a user 
we must to call User.build() function 
if we use "new User" typescript cannot do type checking  
*/
ticketSchema.statics.build = (userAttr: ticketAttr) => {
    return new Ticket(userAttr);
}

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);


export { Ticket }

