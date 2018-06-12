import { observable } from 'mobx';


class HomePageState {
    @observable
    public title: string;

    constructor(title: string) {
        this.title = title;
    }
}

export default HomePageState;