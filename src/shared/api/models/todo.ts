import TtodoStatus from './todoStatus';
type Ttodo = {
    id: string;
    title: string;
    status: TtodoStatus;
    createdAt: string;
    completedAt?: string;
}

export default Ttodo;