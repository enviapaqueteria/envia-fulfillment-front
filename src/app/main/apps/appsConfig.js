import {ProjectDashboardAppConfig} from './project/ProjectDashboardAppConfig';
import {ECommerceAppConfig} from './e-commerce/ECommerceAppConfig';

export const appsConfig = [
    ProjectDashboardAppConfig,
    ECommerceAppConfig
];

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
