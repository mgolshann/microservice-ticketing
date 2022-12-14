import { Kafka } from "kafkajs";
import { Topics } from '../topics';
interface Event {
    topic: Topics;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract topic: T['topic'];
    protected client: Kafka;
    constructor(client: Kafka);
    publish(msg: T['data']): Promise<void>;
}
export {};
