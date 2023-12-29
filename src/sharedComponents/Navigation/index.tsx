import React, { FC } from "react";

// UI
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

// components
import TabsNavigation from "./components/TabsNavigation";

// hooks
import { useNavigation } from "./hooks/useNavigation";

// types
import { TActiveMenuType } from "./types";


const Navigation: FC = () => {
    const { tabsNavigation } = useNavigation();

    const activeMenuType = useBreakpointValue<TActiveMenuType>({
        md: {
            tabs: true,
            menu: false
        },
        base: {
            tabs: false,
            menu: true
        }
    })

    const showTip = false;

    return (
        <Box p={2}>
            <TabsNavigation
                activeTab={tabsNavigation.activeValue}
                show={activeMenuType?.tabs}
                onChange={tabsNavigation.onChange}
            />
            {showTip && (
                <Text
                    fontSize="2xl"
                    textAlign="center"
                    p={'20%'}
                >
                    Select state management
                </Text>
            )}
        </Box>
    );
}

export default Navigation;