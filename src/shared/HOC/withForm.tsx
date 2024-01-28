/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { Controller, RegisterOptions, UseFormReturn, ControllerRenderProps } from 'react-hook-form';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    StyleProps
} from '@chakra-ui/react'

import { FormContext } from 'shared/components/Form';

type WithFormProps = {
    helperText?: string;
    label?: string;
    name: string;
    rules?: RegisterOptions,
    children?: ({ formData, input }: { formData: UseFormReturn, input: ControllerRenderProps}) => React.ReactNode,
    wrapperStyles?: StyleProps
    hideErrorMessage?: boolean,
}

const WithForm = <P extends object>(Component?: React.ComponentType<P>) => (props: WithFormProps & P) => {
    const { helperText, label, name, rules, wrapperStyles, hideErrorMessage, children, ...rest } = props;
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
                    {children && children({ formData, input: field })}
                    {error?.message && !hideErrorMessage && <FormErrorMessage>{error.message}</FormErrorMessage>}
                    {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
                </FormControl>
            )}
        />
    )
}


export default WithForm;