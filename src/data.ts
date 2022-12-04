
export interface item  {
    id:number,
    todo: string,
    completed: boolean,
    userId: number

}


const data: item[] =  [{"id":1,"todo":"1 Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"2 Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"3 Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"4 Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"5 Solve a Rubik's cube","completed":false,"userId":31}]

export default data