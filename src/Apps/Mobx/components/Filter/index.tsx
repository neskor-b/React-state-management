import React from 'react';

import Filters from 'shared/components/Filters';

const Filter = () => {
    return (
        <Filters filters={{ status: 'active', search: ''}} />
    );
};

export default Filter;