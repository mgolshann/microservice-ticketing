import { OrderCreatedListener } from './events/listener/order-created-listener';
import { kafkaWrapper } from './kafka-wrapper'

require('dotenv').config();

// Connecting to mongodb 
const start = async () => {

    if (!process.env.KAFKA_BOOTSTRAP_SERVERS) throw new Error('KAFKA_BOOTSTRAP_SERVERS must be definded');
 
    try {

        const kafkaConfig = {        
            clientId: `${process.env.CLIENT_ID}`,
            brokers: [`${process.env.KAFKA_BOOTSTRAP_SERVERS}`]
        };

        await kafkaWrapper.connect(kafkaConfig);

        new OrderCreatedListener(kafkaWrapper.client).listen()
        
    } catch (err) {
        console.error(err)
    }
    
}

start();