import React, { MutableRefObject, createContext } from "react";

// form
import { useForm, UseFormProps, UseFormReturn, SubmitHandler } from "react-hook-form"

export const FormContext = createContext<UseFormReturn | null>(null);
type FormProps = {
    onSubmit: (data: any) => void
    children: ((data: any) => React.ReactNode) | React.ReactNode,
    formConfig?: UseFormProps,
    formRef?: MutableRefObject<any>;
}

const Form = ({ onSubmit, children, formConfig, formRef }: FormProps) => {
    const formData = useForm(formConfig);
    const onSubmitHandler: SubmitHandler<any> = data => onSubmit(data);

    if (formRef) {
        formRef.current = formData as UseFormProps;
    }

    return (    
        <form onSubmit={formData.handleSubmit(onSubmitHandler)}>
            <FormContext.Provider value={formData}>
                {typeof children === 'function' ? children(formData) : children}
            </FormContext.Provider>
        </form>
    )
}

export default Form;
