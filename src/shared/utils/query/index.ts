import TFilters from "shared/api/models/filters"
import TPagination from "shared/api/models/pagination"


export const prepareQuery = ({ filters, pagination }: { filters: TFilters, pagination: TPagination }) => ({
    ...(filters.status && { status: filters.status }),
    ...(filters.search && { title: filters.search }),
    ...(pagination.limit && { limit: pagination.limit }),
    ...(pagination.page && { page: pagination.page })
})