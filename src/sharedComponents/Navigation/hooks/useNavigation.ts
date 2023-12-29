import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// data
import { appsRoutes } from "router";

export const useNavigation = () => {
    const [activeTab, setActiveTab] = useState(-1);
    
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onTabsChange = (index: number) => {
        navigate(appsRoutes[index].path)
    }

    useEffect(() => {
        appsRoutes.forEach((route, index) => {
            if (route.path === pathname) {
                setActiveTab(index);
            } 
        });
    }, [pathname]);

    return {
        tabsNavigation: {
            onChange: onTabsChange,
            activeValue: activeTab
        }
    }
}
