import { Injectable } from '@nestjs/common';
import Tracer from 'elastic-apm-node-opentracing';

@Injectable()
export class TracerService {
    public readonly tracer: Tracer;
    public readonly agent: any;

    constructor(){
        this.tracer = global['tracer'] as Tracer;
        this.agent = global['agent'];
        this.agent.setUserContext({
            id: 1,
            username: 'azolotykh',
            hello: 'email@email.com'
        })
    }
}
