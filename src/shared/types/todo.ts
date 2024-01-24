import TtodoStatus from './todoStatus';
type Ttodo = {
    id: string;
    title: string;
    status: TtodoStatus;
    createdAt: string;
    updatedAt?: string;
}

export default Ttodo;