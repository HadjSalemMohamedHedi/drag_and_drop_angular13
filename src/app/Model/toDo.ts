export class toDo {
  id: any;
  title:any;
  content:any;
  state:any;


  constructor(id:number=0, title:string="", content:string="", state:string=""){
    this.id=id;
    this.title=title;
    this.content=content;
    this.state=state;
  }

}
