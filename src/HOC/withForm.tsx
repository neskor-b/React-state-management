/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react'

import { FormContext } from 'sharedComponents/Form';

type WithFormProps = {
    helperText?: string;
    label?: string;
    name: string;
    rules?: RegisterOptions,
    children?: (data: UseFormReturn) => React.ReactNode
}


const WithForm = <P extends object>(Component?: React.ComponentType<P>) => (props: WithFormProps & P) => {
    const { helperText, label, name, rules, children, ...rest } = props;
    const formData = useContext(FormContext);
    return ( 
        <Controller
            name={name}
            control={formData?.control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <FormControl isRequired={!!(rules?.required && label)} isInvalid={!!error}>
                    {label && <FormLabel>{label}</FormLabel>}
                    {Component && !children &&
                        <Component 
                            {...rest as P} 
                            {...field}
                        />
                    }
                    {children && children({ ...formData, ...rest, ...field } as UseFormReturn)}
                    {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
                    {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            )}
        />
    )
}


export default WithForm;