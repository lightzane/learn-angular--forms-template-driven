export class SampleFormModel {
    constructor (
        public name:string,
        public phone:number,
        public email:string,
        public topic:string,
        public timePreference:string,
        public address:{
            'street':string,
            'city':string,
            'postalCode':number
        },
        public uaenaSubscription:boolean
    ) {}
}
