import React,  {FC } from 'react';
import {
    Table as ChakraTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Card
} from '@chakra-ui/react';

type Props = {
    dataSource: Record<string, any>[];
    columns: {key: string; title: string; dataIndex: string}[]
    title: React.ReactNode,
}

const Table: FC<Props> = ({ dataSource, columns, title }) => {
    return (
        <Card variant="outline">
            <TableContainer>
                <ChakraTable whiteSpace="normal">
                    <TableCaption fontWeight="bold" placement="top">{title}</TableCaption>
                    <Thead>
                        <Tr>
                            {columns.map(column => (
                                <Th key={column.key}>{column.title}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataSource.map(data => (
                            <Tr key={data.key}>
                                {columns.map(column => (
                                    <Td key={column.key}>{data[column.dataIndex]}</Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </ChakraTable>
            </TableContainer>
        </Card>
    );
};

export default Table;
