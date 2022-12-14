import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties
// that are required to create a new user
interface userAttr {
    email: string;
    password: string;
}

// An interface that describe the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: userAttr): UserDoc;
}

// An interface that describe the properties
// that a user Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
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

// Execute before a save document
userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashedPassword = await Password.toHash(this.get('password'));
        this.set('password', hashedPassword);
    }
    done();
});

// Every time we want to creat a user
// We must to call User.build() function 
// If we use "new User" typescript cannot do type checking  
userSchema.statics.build = (userAttr: userAttr) => {
    return new User(userAttr);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User }







/*
1 ==================================================================>
برای ساخت یک اوردر جدید باید از دستور زیر استفاده کنیم
new Order({ userId: '', status: '', expiresAt: '', ticketId: '' })

ولی با این کار نمیتونیم مقادیری که داره به اوردر 
پاس داده میشه رو ولیدیت کنیم. یعنی میتونیم تعداد فیلدهای
کمی بهش پاس بدیم یا تعداد فیلدهای زیادی بهش پاس بدیم 

برای اینکه جلو این کار رو بگیریم میام یک تابع جدید ایجاد میکنیم که ورودیش یک اینترفیس هست
حالا اون اینترفیس میاد و پارامتر های ارسالی به این تابع رو اعتبار سنجی میکنیه . داخل اون تابع هم ما
یک نمونه اورودر جدید با مقادیری که پاس داده شده رو بر میگردونیم

حالا برای اینکه از تابع کاستومی که ایجاد کردیم استفاده کنیم باید در بخش اسکپورتمون اون تابع جدید رو هم 
به همراه اورودر اسکپورتش کنیم 


const buildOrder = (attrs: OrderAttr) => {
    return new Order(attrs)
}

buildOrder({
    userId: '',
    status: '',
    expiresAt: '',
    ticketId: ''
})

export { Order, buildOrder }


2 ==================================================================>
حالا اینکه تو هر مدلی بخواهیم این تابعی که ساختیم رو 
اسکپورت کنیم در کنار خود اورودر یکم کار رو ساخت میکنه
چیکار میکنیم میام اون تابعی که ساختیم رو میچسبونیم 
به دل همون مدلمون که دیگه نخواهیم اسکپورتش کنیم

برای اینکار از روش زیر استفاده میکنیم

orderSchema.statics.build = (orderAttr: OrderAttr) => {
    return new Order(orderAttr)
}

Order.build({
    
})

اما با انجام این کار تایپ اسکریپت به ما ارور میده که تایپ اسکریپت متوجه نمیشه که شما 
یک پراپرتی به یک استیت آبجکت اساین کردی و  هیچ شناختی از تابع بیلد نداره 
و به تابع بیلد گیر میده و ما باید 
اطلاعات بیشتری از این تابع در اختیار تایپ اسکریپت قرار بدیم. 
جالبه که اگه تو جاوااسکریپت بودیم مشکلی نداشت و تا همین مرحله اوکی بود

برای اینکار میایم و این اینترفیس رو تعریف میکنیم

interface UserModel extends mongoose.Model<any> {
    build(attr: OrderAttr): any
}

با تعریف این اینترفیس به تایث اسکریپت میگیم که قرار یک تابعی به نام 
build
تویه مدل
Order مون
داشته باشیم


با این کار ما گفتیم تمام پراپرتی هایی که داخل 
mongoose.Model
هستن رو اضافه کن به
UserModel ی که من ساختم
و داخل یوزرمدل ما میایم تابع 
build رو مشخص میکنیم

حالا کاری که در انتها باید انجام بدیم اینکه مدلی که جدید ساختیم که شامل تمام پراپرتی های 
mongoose.Model
هست و همینطور
UserModel
ما که داخلش تابع بیلد هست
رو به مونگوس معرفی کنیم

برای اینکار میام و از دستور زیر استفاده میکنیم

const Order = mongoose.model<any, UserModel>('Order', orderSchema);

با انجام این کار میبینیم که خطا از تابع 
build 
برداشته میشه

Order.build({
    userId: '',
    status: '',
    expiresAt: '',
    ticketId: ''
})

3 ==================================================================>

تا اینجا تونستیم مشکلاتی که داشتیم رو حل کنیم 
یک مورد دیگه مونده اونم اینکه 
پراپرتی هایی که به مدلمون ارسال میشه با اون داکیومنتی که 
در نهاییت داخل مونگو قرار میگیره فرق میکنه

const user = new User({ email: '', password: ''})

console.log(user)
// { email: '', password: '', createdAt: '', updatedAt: ''}

همانطور که در مثال بالا دیدید ما دو تا پراپرتی به مدلمون پاس دادیم ولی چیزی
که در نهایت داخل داکیومنت مانگو قرار گرفت چهارتا فیلد هست که به طور اتوماتیک
دو تا فیلد کیریت و آپدیت هم ساخته شده

برای اینکه این مشکل رو حل کنیم و بتونیم یک 
custom document
برای خودمون داشته باشیم میایم و یک اینترفیس جدید ایجاد میکنیم که از 
mongoose.document
اگستند شده باشه و مقادیری که میخواهیم در داکیومنت نهایی ما قرار بگیره رو مشخص میکنیم به شکل زیر

interface OrderDoc extends mongoose.Document {
    userId: string,
    status: string,
    expiresAt: string,
    ticketId: string
}

در نهایت اینترفیس جدیدمون رو باید به مونگو معرفی کنیم 

const Order = mongoose.model<OrderDoc, UserModel>('Order', orderSchema);

و همینطور جایی که اوردر مودلمون رو ساختیم میریم و به تابع بلید میگیم
شما به جای اینکه خروجیت از نوع انی باشه باید خروجیت از نوع
OrderDoc
باشه

interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attr: OrderAttr): OrderDoc
}


4 =======================================================================>

حالا میتونیم تست بگیریم که اینترفیس هایی که ساختیم درست هست یا نه
با انجام این تست میبینیم که کار درست پیش رفته

const order = Order.build({
    userId: 'test',
    status: 'test',
    expiresAt: 'test',
    ticketId: 'test'
});
وقتی موس رو روی کلمه اوردر میاری میبینی که چیزی که بر میگرده یک 
OrderDoc 
هست

حالا میتونیم توسط اورودر به مقادیر داخل 
OrderDoc 
دسترسی داشته باشین

order.userId
order.status
order.expiresAt
order.ticketId

حالا سوال؟؟
اگه بخواهیم بگیم که من میخوام در خروجی مثلا فیلد
order.updatedAt
هم داشته باشم باید این فیلد رو تو کدوم اینترفیس اضافه کنم

جواب:
برای اینکار باید اون فیلد رو به 
OrderDoc
اضافه کنی




*/