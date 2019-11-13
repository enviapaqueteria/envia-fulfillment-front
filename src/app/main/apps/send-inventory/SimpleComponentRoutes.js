import React from 'react';

export const simpleComponentRoutes = [
    {
        path     : '/send-inventory',
        component: React.lazy(() => import('./SendInventory'))
    }
];
