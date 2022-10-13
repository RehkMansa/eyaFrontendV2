import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Homepage from "../pages/homepage";

const AllRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                },
            ],
        },
    ]);

    return routes;
};

export default AllRoutes;
