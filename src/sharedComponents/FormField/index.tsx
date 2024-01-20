// UI
import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

// HOC
import WithForm from 'HOC/withForm';


const Input = WithForm<InputProps>(ChakraInput)
const Field = WithForm();

export default {
    Input,
    Field
};
