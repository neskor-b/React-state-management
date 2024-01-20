/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    StyleProps
} from '@chakra-ui/react'

import { FormContext } from 'sharedComponents/Form';

type WithFormProps<P> = {
    helperText?: string;
    label?: string;
    name: string;
    rules?: RegisterOptions,
    children?: (data: UseFormReturn & P & { value?: any }) => React.ReactNode,
    wrapperStyles?: StyleProps
}

const WithForm = <P extends object>(Component?: React.ComponentType<P>) => (props: WithFormProps<P> & P) => {
    const { helperText, label, name, rules, wrapperStyles, children, ...rest } = props;
    const formData = useContext(FormContext);
    
    return ( 
        <Controller
            name={name}
            control={formData?.control}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <FormControl 
                    isRequired={!!(rules?.required && label)} 
                    isInvalid={!!error}
                    {...wrapperStyles}
                >
                    {label && <FormLabel>{label}</FormLabel>}
                    {Component && !children &&
                        <Component 
                            {...rest as P} 
                            {...field}
                        />
                    }
                    {children && children({...formData,...rest as P, ...field})}
                    {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
                    {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            )}
        />
    )
}


export default WithForm;