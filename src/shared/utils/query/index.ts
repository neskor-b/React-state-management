import TFilters from "shared/api/models/filters"


export const prepareQuery = (filters?: TFilters) => {
    if (!filters) {
        return {}
    }
    return {
        ...(filters.status && { status: filters.status }),
        ...(filters.search && { title: filters.search })
    }
    
}