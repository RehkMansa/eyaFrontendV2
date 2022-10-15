import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/aboutpage";
import Homepage from "../pages/homepage";

const AllRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <MainLayout isHomePage />,
            children: [
                {
                    element: <Homepage />,
                    index: true,
                },
            ],
        },
        {
            element: <MainLayout isHomePage={false} />,
            children: [
                {
                    path: "about-us",
                    element: <AboutPage />,
                },
                {
                    path: "properties",
                    element: <Homepage />,
                },
            ],
        },
    ]);

    return routes;
};

export default AllRoutes;
