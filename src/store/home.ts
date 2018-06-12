import { observable } from 'mobx';


class HomeStore {
    @observable
    public title: string;

    constructor(title: string) {
        this.title = title;
    }
}

export default HomeStore;