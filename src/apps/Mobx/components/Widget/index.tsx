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
                <Link href="https://mobx.js.org/api.html" isExternal>
                    CORE API <ExternalLinkIcon mx='2px' />
                </Link>
            } 
            dataSource={[
                {
                    key: '1',
                    name: t('widget.mobX.observable'),
                    description: t('widget.mobX.observableDescription'),
                    keyRole: t('widget.mobX.observableKeyrole')
                },
                {
                    key: '2',
                    name: t('widget.mobX.computed'),
                    description: t('widget.mobX.computedDescription'),
                    keyRole: t('widget.mobX.computedKeyrole')
                },
                {
                    key: '3',
                    name: t('widget.mobX.action'),
                    description: t('widget.mobX.actionDescription'),
                    keyRole: t('widget.mobX.actionKeyrole')
                },
                {
                    key: '4',
                    name: t('widget.mobX.reaction'),
                    description: t('widget.mobX.reactionDescription'),
                    keyRole: t('widget.mobX.reactionKeyrole')
                }
            ]} 
            columns={[
                {
                    title: t('widget.mobX.nameColumn'),
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: t('widget.mobX.descriptionColumn'),
                    dataIndex: 'description',
                    key: 'description'
                },
                {
                    title: t('widget.mobX.keyRoleColumn'),
                    dataIndex: 'keyRole',
                    key: 'keyRole'
                }
            ]} 
        />
    );
}

export default Widget;