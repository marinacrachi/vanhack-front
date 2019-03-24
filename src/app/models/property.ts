export class Property {
    public id: string = ''
    public title: string = ''
    public price: number = 0
    public address: string = ''
    public propType: string = ''
    public picture: string = ''
    constructor(property) {
        Object.assign(this, property)
    }
}