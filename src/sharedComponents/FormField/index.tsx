import React, { FC, ChangeEvent } from 'react';

// UI
import { Input, InputProps } from '@chakra-ui/react'

// HOC
import WithForm from 'HOC/withForm';

type FormFieldProps = {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
} & InputProps

const FormFieldInput: FC<FormFieldProps> = props => {    
    return (
        <Input {...props} />
    )
}

export default WithForm(FormFieldInput);
