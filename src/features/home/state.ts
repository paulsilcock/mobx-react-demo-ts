import { observable } from 'mobx';
import Item from '../../model/item';


class HomePageState {
    @observable
    public items: Item[]

    constructor() {
        this.items = [
            {
                description: "This is the description",
                favourite: false,
                hasUpdates: true,
                lastViewed: new Date(2018, 4, 28, 17, 52, 19),
                overview: [ 2, 3, 8, 7, 12, 0.5, 1, 3 ],
                statusOk: true,
                things: 3203,
                title: "Item 1"
            },
            {
                description: "Another description",
                favourite: false,
                hasUpdates: true,
                lastViewed: new Date(2018, 5, 18, 13, 12, 39),
                overview: [ 0.2, 2, 3, 4, 1, 17, 1, 1.2 ],
                statusOk: false,
                things: 1344,
                title: "Item 2"
            },
            {
                description: "Blah blah",
                favourite: true,
                hasUpdates: true,
                lastViewed: new Date(2018, 5, 28, 15, 12, 39),
                overview: [ 2, 8, 7, 9, 11, 7, 8, 9 ],
                statusOk: true,
                things: 45523,
                title: "Third item",
            },
            {
                description: "Yet another description",
                favourite: false,
                hasUpdates: true,
                lastViewed: new Date(2018, 6, 1, 18, 10, 31),
                overview: [ 20, 19, 2, 1, 17, 18, 18, 19 ],
                statusOk: true,
                things: 4525,
                title: "(4)",
            },
            {
                description: "Go on one more then",
                favourite: false,
                hasUpdates: true,
                lastViewed: new Date(2018, 6, 1, 18, 11, 31),
                overview: [ 0.5, 19, 21, 22, 17, 18, 18, 19 ],
                statusOk: true,
                things: 33442,
                title: "No. 5",
            }
        ]
    }
}

export default HomePageState;