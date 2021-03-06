import React from 'react';

export const ProjectDashboardAppConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/apps/project',
            component: React.lazy(() => import('./ProjectDashboardApp'))
        }
    ]
};
