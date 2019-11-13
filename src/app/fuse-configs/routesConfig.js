import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {appsConfig} from 'app/main/apps/appsConfig';
import {simpleComponentRoutes} from 'app/main/apps/send-inventory/SimpleComponentRoutes';

const routeConfigs = [
    ...appsConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    ...simpleComponentRoutes,
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/apps/project"/>
    },
    {
        component: () => <Redirect to="/pages/errors/error-404"/>
    }
];

export default routes;
