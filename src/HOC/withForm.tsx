/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react'

type WithFormProps = {
    helperText?: string;
    label?: string;
    name: string;
    control: Control;
    rules?: RegisterOptions
}


const WithForm = <P extends object>(Component: React.ComponentType<P>) => (props: WithFormProps & P) => {
    const { helperText, label, name, control, rules, ...rest } = props;
    return ( 
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <FormControl isRequired={!!(rules?.required && label)} isInvalid={!!error}>
                    {label && <FormLabel>{label}</FormLabel>}
                    <Component {...rest as P} {...field} />
                    {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
                    {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            )}
        />
    )
}


export default WithForm;