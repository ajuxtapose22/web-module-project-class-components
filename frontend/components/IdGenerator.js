class IdGenerator {
    constructor() {
      this.id = 0;
    }
  
    getId() {
      return ++this.id;
    }
  }
  
  const idGenerator = new IdGenerator();
  export default idGenerator;
  