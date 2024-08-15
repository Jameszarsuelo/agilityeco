import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layout/RootLayout";
import ManageJobs from "./pages/Jobs/ManageJobs";
import JobForm from "./pages/Jobs/JobForm.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Dashboard /> },
            {
                path: "manage-jobs",
                element: <ManageJobs />,
            },
            { path: "manage-jobs/edit/:id", element: <JobForm /> },
            { path: "manage-jobs/create", element: <JobForm /> },
            { path: "update-survey", element: <ManageJobs /> },
            { path: "reports", element: <ManageJobs /> },
            { path: "history", element: <ManageJobs /> },
        ],
    },
]);
