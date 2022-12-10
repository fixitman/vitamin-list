import { item } from "./data"

export interface DataProvider<T,> {    
    saveData (d: T):void
    loadData ():T
}

export default class ListDataLocal implements DataProvider<item[]>{
    static tag = "THELIST"
    static instance = new ListDataLocal()
    private _data: item[]

    private constructor(_data : item[] = []){
        this._data = _data
    }
    saveData(d: item[]): void {
        this._data = d
        localStorage.setItem(ListDataLocal.tag,JSON.stringify( this._data))
    }

    loadData(): item[] {
        let loadedDataJSON = localStorage.getItem(ListDataLocal.tag)
        this._data = loadedDataJSON? JSON.parse(loadedDataJSON) : []
        return this._data
    }
}