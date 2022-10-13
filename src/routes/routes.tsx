import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";

const AllRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            index: true,
        },
    ]);

    return routes;
};

export default AllRoutes;
