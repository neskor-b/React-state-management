import TFilters from "shared/api/models/filters"


export const prepareQuery = ({ filters }: { filters: TFilters }) => ({
    ...(filters.status && { status: filters.status }),
    ...(filters.search && { title: filters.search }),
    ...(filters.orderby && { orderby: filters.orderby }),
    ...(filters.order && { order: filters.order })
})