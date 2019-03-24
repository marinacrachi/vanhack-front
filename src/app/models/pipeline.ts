export class Pipeline {
    public idClient: string = ''
    public idProperty: string = ''
    public agentName: string = ''
    public status: string = ''
    constructor(pipeline) {
        Object.assign(this, pipeline)
    }
}