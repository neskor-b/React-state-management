import React, { FC, MutableRefObject } from "react";

// form
import { useForm, UseFormProps, SubmitHandler } from "react-hook-form"

type FormProps = {
    onSubmit: (data: any) => void
    children: (data: any) => React.ReactNode,
    formConfig?: UseFormProps,
    formRef?: MutableRefObject<any>;
}

const Form: FC<FormProps> = ({ onSubmit, children, formConfig, formRef }) => {
    const { handleSubmit, ...rest } = useForm(formConfig);
    const onSubmitHandler: SubmitHandler<any> = data => onSubmit(data);

    if (formRef) {
        formRef.current = { ...rest } as UseFormProps;
    }
    return (    
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            {children(rest)}
        </form>
    )
}

export default Form;
