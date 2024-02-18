import React from "react";
import { useTranslation } from 'react-i18next';

// UI
import { Text } from "@chakra-ui/react";


const Placeholder = () => {
    const { t } = useTranslation();
    return (
        <Text
            textAlign="center"
            p={10}
            color="gray.500"
            fontWeight="bold"
            fontSize="large"
        >
            {t('mainPlaceholder.title')}
        </Text>
    )
}

export default Placeholder;
