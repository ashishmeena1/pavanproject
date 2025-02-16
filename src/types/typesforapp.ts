
export type Typedata = {
    type:string,
    startingprice:string,
    highestprice:string
}

export type statetype = typeof Array<Typedata> | null;

export interface storetype{
    state:statetype,
    event:{
        type:additem | removeitem
    }
}

