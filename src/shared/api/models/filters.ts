import TtodoStatus from "./todoStatus"
import Ttodo from "./todo";

type TFilters = {
    status: TtodoStatus | ''
    search: string,
    orderby: keyof Ttodo,
    order: 'asc' | 'desc',
}

export default TFilters;
