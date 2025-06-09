import React, { FC } from 'react';
import { useTranslation } from "react-i18next";

// components
import Table from 'shared/components/Table';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Widget: FC = () => {
    const { t } = useTranslation();
    return (
        <Table 
            title={
                <Link href="https://zustand.docs.pmnd.rs/getting-started/introduction" isExternal>
                    CORE API <ExternalLinkIcon mx='2px' />
                </Link>
            } 
            dataSource={[
                {
                    key: '1',
                    name: t('widget.zustand.create'),
                    description: t('widget.zustand.createDescription'),
                    keyRole: t('widget.zustand.createKeyrole')
                },
                {
                    key: '2',
                    name: t('widget.zustand.useStore'),
                    description: t('widget.zustand.useStoreDescription'),
                    keyRole: t('widget.zustand.useStoreKeyrole')
                },
                {
                    key: '3',
                    name: t('widget.zustand.setState'),
                    description: t('widget.zustand.setStateDescription'),
                    keyRole: t('widget.zustand.setStateKeyrole')
                },
                {
                    key: '4',
                    name: t('widget.zustand.getState'),
                    description: t('widget.zustand.getStateDescription'),
                    keyRole: t('widget.zustand.getStateKeyrole')
                },
                {
                    key: '5',
                    name: t('widget.zustand.subscribe'),
                    description: t('widget.zustand.subscribeDescription'),
                    keyRole: t('widget.zustand.subscribeKeyrole')
                },
                {
                    key: '6',
                    name: t('widget.zustand.updaterFunction'),
                    description: t('widget.zustand.updaterFunctionDescription'),
                    keyRole: t('widget.zustand.updaterFunctionKeyrole')
                },
                {
                    key: '7',
                    name: t('widget.zustand.shallowMerge'),
                    description: t('widget.zustand.shallowMergeDescription'),
                    keyRole: t('widget.zustand.shallowMergeKeyrole')
                },
                {
                    key: '8',
                    name: t('widget.zustand.replace'),
                    description: t('widget.zustand.replaceDescription'),
                    keyRole: t('widget.zustand.replaceKeyrole')
                },
                {
                    key: '9',
                    name: t('widget.zustand.createWithEqualityFn'),
                    description: t('widget.zustand.createWithEqualityFnDescription'),
                    keyRole: t('widget.zustand.createWithEqualityFnKeyrole')
                },
                {
                    key: '10',
                    name: t('widget.zustand.equalityFn'),
                    description: t('widget.zustand.equalityFnDescription'),
                    keyRole: t('widget.zustand.equalityFnKeyrole')
                }
            ]} 
            columns={[
                {
                    title: t('widget.zustand.nameColumn'),
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: t('widget.zustand.descriptionColumn'),
                    dataIndex: 'description',
                    key: 'description'
                },
                {
                    title: t('widget.zustand.keyRoleColumn'),
                    dataIndex: 'keyRole',
                    key: 'keyRole'
                }
            ]} 
        />
    );
}

export default Widget; 