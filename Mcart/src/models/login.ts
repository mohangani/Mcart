
export interface Login{
    userName:string,
    password:string
    }
  
    export interface IToken{
        name:string,
        expirationDate:Date,
        expirationInMs:number,
        role:string,
        token:string,
    }