import { makeAutoObservable } from 'mobx';

type TSortBy = 'status' | 'date' | undefined


class Filters {
    sortBy: TSortBy

    constructor() {
        makeAutoObservable(this)
    }

    setSort = (value: TSortBy) => {
        this.sortBy = value;
    }

}

export type { Filters } ;

export default Filters;