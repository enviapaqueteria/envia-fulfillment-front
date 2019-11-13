const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'project-dashboard',
                'title': 'Project',
                'type' : 'item',
                'url'  : '/apps/project'
            }
        ]
    },
    {
        'id'      : 'e-commerce',
        'title'   : 'E-Commerce',
        'type'    : 'collapse',
        'icon'    : 'shopping_cart',
        'url'     : '/apps/e-commerce',
        'children': [
            {
                'id'   : 'e-commerce-products',
                'title': 'Products',
                'type' : 'item',
                'url'  : '/apps/e-commerce/products',
                'exact': true
            },
            {
                'id'   : 'e-commerce-product-detail',
                'title': 'Product Detail',
                'type' : 'item',
                'url'  : '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
                'exact': true
            },
            {
                'id'   : 'e-commerce-new-product',
                'title': 'New Product',
                'type' : 'item',
                'url'  : '/apps/e-commerce/products/new',
                'exact': true
            },
            {
                'id'   : 'e-commerce-orders',
                'title': 'Orders',
                'type' : 'item',
                'url'  : '/apps/e-commerce/orders',
                'exact': true
            },
            {
                'id'   : 'e-commerce-order-detail',
                'title': 'Order Detail',
                'type' : 'item',
                'url'  : '/apps/e-commerce/orders/1',
                'exact': true
            }
        ]
    },
    {
        'id'   : 'send-inventory',
        'title': 'Send Inventory',
        'type' : 'item',
        'url'  : '/send-inventory'
    }
];

export default navigationConfig;
