import TFilters from "./filters";

type TQuery = {
    status?: TFilters['status']
    title?: TFilters['search']
    orderby?: TFilters['orderby']
    order?: TFilters['order']
}

export default TQuery