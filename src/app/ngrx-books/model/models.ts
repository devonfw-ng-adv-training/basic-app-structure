export class NgRxBook {

  constructor(public title: string, public collection: Collections) {
  }
}


export enum Collections {

  TO_READ = 'to_read', READING = 'reading', READ = 'read'
}
