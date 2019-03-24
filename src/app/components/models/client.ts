export class Client {
    public id: string = ''
    public email: string = ''
    public name: string = ''
    public birthday: string = ''
    public wage: string = ''
    constructor(client) {
        Object.assign(this, client)
    }
}