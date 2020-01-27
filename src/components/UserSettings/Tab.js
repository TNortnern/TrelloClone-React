import React from 'react';

const Tab = ({tab, children}) => {
    const shouldRender = () => {
        if (tab.assigned === tab.current) {
            return (
            <div className="settings-tab-content">
                {children}
            </div>
            )
        }
        return <div></div>
    }
    return (
        shouldRender()
    );
}

export default Tab;