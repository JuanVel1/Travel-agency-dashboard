import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout('routes/admin/Admin-layout.tsx',[
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users','routes/admin/all-users.tsx'),
    ]),
    index("routes/home.tsx")] satisfies RouteConfig;
