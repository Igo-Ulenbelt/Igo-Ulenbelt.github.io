import {Router as VaadinRouter} from "@vaadin/router";

export const routes = [
    {
        path: '/frontend-project-v2b_letsgo/',
        component: 'kpn-home',
    },
    {
        path: '/frontend-project-v2b_letsgo/flexBoost',
        component: 'flex-boost-information',
    },
    {
        path: '/frontend-project-v2b_letsgo/boost',
        component: 'kpn-boost',
    },
    {
        path: '/frontend-project-v2b_letsgo/flex',
        component: 'kpn-flex',
    },
    {
        path: '/frontend-project-v2b_letsgo/voting-advice',
        component: 'kpn-voting-advice',
    },
    {
        path: '/frontend-project-v2b_letsgo/cao',
        component: 'cao-information',
    },
    {
        path: '/frontend-project-v2b_letsgo/myKpn',
        component: 'kpn-my-kpn',
    },
    {
        path: '/frontend-project-v2b_letsgo/admin/home',
        component: 'kpn-request-home',
    },
    {
        path: '/frontend-project-v2b_letsgo/admin/requestBoost',
        component: 'kpn-request-boost',
    },
    {
        path: '/logout',
        action: () => {
            localStorage.removeItem('userId');
            VaadinRouter.go('/frontend-project-v2b_letsgo/');
        },
    },
];
