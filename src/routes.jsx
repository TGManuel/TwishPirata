import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { Auth } from "./pages/auth/Auth";

const routes = [
    {path: '/auth', element: <Auth/>},
    {path: '/*', element: <DashboardPage/>},
]
    



export default routes