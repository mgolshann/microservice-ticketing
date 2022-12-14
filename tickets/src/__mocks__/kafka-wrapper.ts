import { Message } from 'kafkajs'
import { Topics } from '@mgbg_tickets/common';

export const kafkaWrapper = {
    client: {
        producer: {
            send: jest
                .fn()
                .mockImplementation(
                    (topic: string, messages: Message[]) => {
                        return 'salammmmmmmmmmmmmmmmm'
                    }
               ),
        }
    }
}

