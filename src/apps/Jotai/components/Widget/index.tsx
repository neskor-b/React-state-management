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
                <Link href="https://jotai.org/docs/core/atom" isExternal>
                    CORE API <ExternalLinkIcon mx='2px' />
                </Link>
            } 
            dataSource={[
                {
                    key: '1',
                    name: t('widget.jotai.atom'),
                    description: t('widget.jotai.atomDescription'),
                    keyRole: t('widget.jotai.atomKeyrole')
                },
                {
                    key: '2',
                    name: t('widget.jotai.useAtom'),
                    description: t('widget.jotai.useAtomDescription'),
                    keyRole: t('widget.jotai.useAtomKeyrole')
                },
                {
                    key: '3',
                    name: t('widget.jotai.provider'),
                    description: t('widget.jotai.providerDescription'),
                    keyRole: t('widget.jotai.providerKeyrole')
                },
                {
                    key: '4',
                    name: t('widget.jotai.derived'),
                    description: t('widget.jotai.derivedDescription'),
                    keyRole: t('widget.jotai.derivedKeyrole')
                },
                {
                    key: '5',
                    name: t('widget.jotai.atomFamily'),
                    description: t('widget.jotai.atomFamilyDescription'),
                    keyRole: t('widget.jotai.atomFamilyKeyrole')
                },
                {
                    key: '6',
                    name: t('widget.jotai.selectAtom'),
                    description: t('widget.jotai.selectAtomDescription'),
                    keyRole: t('widget.jotai.selectAtomKeyrole')
                },
                {
                    key: '7',
                    name: t('widget.jotai.splitAtom'),
                    description: t('widget.jotai.splitAtomDescription'),
                    keyRole: t('widget.jotai.splitAtomKeyrole')
                },
                {
                    key: '8',
                    name: t('widget.jotai.atomWithStorage'),
                    description: t('widget.jotai.atomWithStorageDescription'),
                    keyRole: t('widget.jotai.atomWithStorageKeyrole')
                },
                {
                    key: '9',
                    name: t('widget.jotai.atomWithReset'),
                    description: t('widget.jotai.atomWithResetDescription'),
                    keyRole: t('widget.jotai.atomWithResetKeyrole')
                },
                {
                    key: '10',
                    name: t('widget.jotai.atomWithDefault'),
                    description: t('widget.jotai.atomWithDefaultDescription'),
                    keyRole: t('widget.jotai.atomWithDefaultKeyrole')
                },
                {
                    key: '11',
                    name: t('widget.jotai.atomWithObservable'),
                    description: t('widget.jotai.atomWithObservableDescription'),
                    keyRole: t('widget.jotai.atomWithObservableKeyrole')
                },
                {
                    key: '12',
                    name: t('widget.jotai.useAtomCallback'),
                    description: t('widget.jotai.useAtomCallbackDescription'),
                    keyRole: t('widget.jotai.useAtomCallbackKeyrole')
                },
                {
                    key: '13',
                    name: t('widget.jotai.useAtomValue'),
                    description: t('widget.jotai.useAtomValueDescription'),
                    keyRole: t('widget.jotai.useAtomValueKeyrole')
                },
                {
                    key: '14',
                    name: t('widget.jotai.useSetAtom'),
                    description: t('widget.jotai.useSetAtomDescription'),
                    keyRole: t('widget.jotai.useSetAtomKeyrole')
                }
            ]} 
            columns={[
                {
                    title: t('widget.jotai.nameColumn'),
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: t('widget.jotai.descriptionColumn'),
                    dataIndex: 'description',
                    key: 'description'
                },
                {
                    title: t('widget.jotai.keyRoleColumn'),
                    dataIndex: 'keyRole',
                    key: 'keyRole'
                }
            ]} 
        />
    );
}

export default Widget; 