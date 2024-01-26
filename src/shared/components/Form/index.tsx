import React, { MutableRefObject, createContext } from "react";

// form
import { useForm, UseFormProps, SubmitHandler,  UseFormReturn } from "react-hook-form"

export const FormContext = createContext<UseFormReturn>({} as UseFormReturn);
type FormProps = {
    onSubmit: (data: any) => void,
    onError?: (data: any, e: any) => void,
    onUpdate?: (data: UseFormProps) => void,
    children: ((data: any) => React.ReactNode) | React.ReactNode,
    formConfig?: UseFormProps,
    formRef?: MutableRefObject<any>;
}

const Form = ({ onSubmit, onError, children, formConfig, formRef }: FormProps) => {
    const formData = useForm(formConfig);
    const onSubmitHandler: SubmitHandler<any> = data => onSubmit(data);
    const onErrorHandler: SubmitHandler<any> = (errors, e) => onError ? onError(errors, e) : null;

    const submitForm = formData.handleSubmit(onSubmitHandler, onErrorHandler)

    if (formRef) {
        formRef.current = {...formData, submitForm} as UseFormProps;
    }


    return (    
        <form onSubmit={submitForm}>
            <FormContext.Provider value={formData}>
                {typeof children === 'function' ? children(formData) : children}
            </FormContext.Provider>
        </form>
    )
}

export default Form;
