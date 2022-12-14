import { Kafka } from 'kafkajs';
import { Topics } from '../topics';

interface Event {
    topic: Topics;
    data: any;
}

export abstract class Listener<T extends Event> {

    abstract topic: T['topic'];
    abstract groupId: string;
    abstract onMessage(msg: T['data']): void;
    
    protected client: Kafka;

    constructor(client: Kafka) {
        this.client = client
    }

    async listen() {

        const subscribeOptions = {
            topic: this.topic, 
            fromBeginning: true 
        };

        const consumer = this.client.consumer({ groupId: this.groupId });

        await consumer.connect();
        await consumer.subscribe(subscribeOptions);

        await consumer.run({
            eachMessage: async ({ topic, partition, message }: any) => {
                this.onMessage(this.parseData(message))
            },
          });

    }

    parseData(msg: any) {
        return JSON.parse(msg.value.toString('utf8'))
        // return typeof msg.value === 'string'
        //     ? JSON.parse(msg)
        //     : JSON.parse(msg.toString('utf8'));
    }

}