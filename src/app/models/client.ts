export class Client {
    public id: string = ''
    public email: string = ''
    public name: string = ''
    public birthday: string = ''
    public wage: number = 0
    constructor(client) {
        Object.assign(this, client)
    }
}