import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/aboutpage";
import Homepage from "../pages/homepage";
import Properties from "../pages/properties";
import SingleProperty from "../pages/properties/SingleProperty";

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
                    element: <Properties />,
                },
                {
                    path: "properties/:id",
                    element: <SingleProperty />,
                },
            ],
        },
    ]);

    return routes;
};

export default AllRoutes;
