import { Kafka } from 'kafkajs';
import { Topics } from '../topics';
interface Event {
    topic: Topics;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract topic: T['topic'];
    abstract groupId: string;
    abstract onMessage(msg: T['data']): void;
    protected client: Kafka;
    constructor(client: Kafka);
    listen(): Promise<void>;
    parseData(msg: any): any;
}
export {};
