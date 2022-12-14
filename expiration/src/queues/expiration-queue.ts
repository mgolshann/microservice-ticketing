import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/publisher/expiration-complete-publisher';
import { kafkaWrapper } from '../kafka-wrapper';

interface Payload {
    orderId: string
}

const expirationQueue = Queue<Payload>('order:expiration', {
    redis: {
        host: process.env.REDIS_HOST,
    }
});

expirationQueue.process(async (job) => {
    
    console.log(
        'I want to publish an expiration:complete event for orderId', 
        job.data.orderId
    );

    new ExpirationCompletePublisher(kafkaWrapper.client).publish({
        orderId: job.data.orderId
    })
});

export { expirationQueue };