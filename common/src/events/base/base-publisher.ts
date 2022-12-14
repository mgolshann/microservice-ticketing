import { Kafka } from "kafkajs";
import { Topics } from '../topics';

interface Event {
  topic: Topics;
  data: any;
}

export abstract class Publisher<T extends Event> {
   
  abstract topic: T['topic'];
  protected client: Kafka;

  constructor(client: Kafka) {
    this.client = client
  }

  async publish(msg: T['data']) {

    const producer = this.client.producer();
    
    await producer.connect()

    await producer.send({
        topic: this.topic,
        messages: [
            { value: JSON.stringify(msg) },
        ],
    })  
    // .then(console.log)
    // .catch(e => console.error(`[example/producer] ${e.message}`, e))
    await producer.disconnect();
  }


}
