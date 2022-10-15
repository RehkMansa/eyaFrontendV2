import { useRoutes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/aboutpage";
import ContactUs from "../pages/contactUs";
import Error404 from "../pages/Error404";
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
                {
                    path: "contact-us",
                    element: <ContactUs />,
                },
                {
                    path: "*",
                    element: <Error404 />,
                },
            ],
        },
    ]);

    return routes;
};

export default AllRoutes;
