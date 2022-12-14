import { Message } from 'kafkajs'
import { Topics } from '@mgbg_tickets/common';


export const kafkaWrapper = {
    client: {
        producer: jest.fn().mockImplementation(
                (topic: string, messages: Message[]) => {
                return 'salammmmmmmmmmmmmmmmm'
            }
        )        
    }
}



export const kafkaWrapper2 = {
    client: {
        producer: {
            send: jest.fn().mockImplementation(
                (topic: string, messages: Message[]) => {
                return 'salammmmmmmmmmmmmmmmm'
            })
        }
    }
}

