export default class Item {
    constructor(
        public title: string, 
        public description: string, 
        public hasUpdates: boolean,
        public lastViewed: Date,
        public statusOk: boolean,
        public overview: number[],
        public favourite: boolean
    ) { }
}