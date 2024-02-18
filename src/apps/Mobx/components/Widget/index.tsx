import React, { FC } from 'react';
import Table from 'shared/components/Table';

const dataSource = [
    {
        key: '1',
        name: 'Observable',
        description: 'Tracks changes to data structures, arrays, maps, sets, or primitive values. MobX monitors these for modifications.',
        keyRole: 'Makes your data reactive.'
    },
    {
        key: '2',
        name: 'Computed',
        description: 'Derived values that automatically update when the observables they depend on change. They are recalculated lazily.',
        keyRole: 'Automatically updates based on observable changes.'
    },
    {
        key: '3',
        name: 'Action',
        description: 'Functions that modify observables. Actions make state changes predictable and manageable.',
        keyRole: 'Ensures predictable state updates.'
    },
    {
        key: '4',
        name: 'Reaction',
        description: 'Automatically runs side effects in response to observable changes, using functions like autorun and reaction.',
        keyRole: 'Updates the UI or triggers effects in response to state changes.'
    }
];
  
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Key Role',
        dataIndex: 'keyRole',
        key: 'keyRole'
    }
];


const Widget: FC = () => (
    <Table 
        title="CORE API" 
        dataSource={dataSource} 
        columns={columns} 
    />
)

export default Widget;