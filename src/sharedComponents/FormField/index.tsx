// UI
import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

// HOC
import WithForm from 'HOC/withForm';


const Input = WithForm<InputProps>(ChakraInput)

export default {
    Input
};
