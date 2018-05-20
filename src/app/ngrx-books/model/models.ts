import * as uuid from 'uuid/v4';

export class NgRxBook {
  public readonly id = uuid();
  constructor(public title: string, public collection: Collections) {
  }
}


export enum Collections {
  TO_READ = 'to_read', READING = 'reading', READ = 'read'
}
