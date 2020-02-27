import { Controller, Get } from '@nestjs/common';
import Tracer from 'elastic-apm-node-opentracing';
import { TracerService } from './tracer/tracer.service';


class DB {
    async getData(){
        return new Promise((resolve) => {
            setTimeout(resolve, 100)
        });
    }
}

const db = new DB();

@Controller()
export class AppController {
    constructor(private readonly tracer: TracerService){
    }

  @Get('/')
  async getUsers() {
      const name = 'User test'
      const type = 'user'

      const trans = this.tracer.agent.startTransaction(name, type)
      await db.getData();
      trans.end()
      return 'hello';
  }
}
