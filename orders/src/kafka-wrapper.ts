import { Kafka } from "kafkajs";

interface KafkaConfig {
    clientId: string,
    brokers: string[] //['kafka1:9092', 'kafka2:9093']
}

class KafkaWrapper {
    private _client?: Kafka;

    get client() {
        if (!this._client) {
            throw new Error("Cannot access KAFKA client before connecting")
        }
        return this._client
    }

    async connect(kafkaConfig: KafkaConfig): Promise<void> {
        this._client = new Kafka(kafkaConfig);
    }  

}

export const kafkaWrapper = new KafkaWrapper();