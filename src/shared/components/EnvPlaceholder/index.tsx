import React from 'react';
import { Box, Heading, Link, Text, VStack, Flex, useColorMode } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const EnvPlaceholder = () => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();
    return (
        <VStack
            spacing={4}
            align="stretch"
            p={4}>
            <Heading size="md" color="red.500">{t('envPlaceholder.title')}</Heading>
            <Text>{t('envPlaceholder.description')}</Text>   
            <Box
                bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                p={4}
                borderRadius="md">
                <Text fontFamily="monospace" whiteSpace="pre">
                    {t('envPlaceholder.variables.apiKey')}
                </Text>
                <Text fontFamily="monospace" whiteSpace="pre">
                    {t('envPlaceholder.variables.protocol')}
                </Text>
                <Text fontFamily="monospace" whiteSpace="pre">
                    {t('envPlaceholder.variables.apiUrl')}
                </Text>
            </Box>
            <Text>{t('envPlaceholder.where')}</Text>
            <VStack align="stretch" pl={4}>
                <Text><strong>REACT_APP_API_KEY</strong> - {t('envPlaceholder.apiKeyDesc')}</Text>
                <Text><strong>REACT_APP_API_URL</strong> - {t('envPlaceholder.apiUrlDesc')}</Text>
                <Text><strong>REACT_APP_PROTOCOL</strong> - {t('envPlaceholder.protocolDesc')}</Text>
                <Link
                    isExternal
                    variant="underline"
                    href="https://mockapi.io"
                >
                    <Flex alignItems="center" gap={1}>
                        {t('envPlaceholder.createApi')}
                        <LinkIcon />
                    </Flex>
                </Link>
            </VStack>
        </VStack>
    );
};

export default EnvPlaceholder;