import {
    CogIcon,
    UserIcon,
    BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import ClientJobType from "../pages/Jobs/ClientJobType";
import PropertyDetails from "../pages/Jobs/PropertyDetails";
import Measure from "../pages/Jobs/Measure";

export const stepperValues = [
    {
        id: 0,
        label: "Client & Job Type",
        instruction: "Select Client & Job Type",
        icon: <UserIcon className="h-5 w-5" />,
        content: <ClientJobType />,
    },
    {
        id: 1,
        label: "Property Details",
        instruction: "Fill out the required fields for the property",
        icon: <BuildingLibraryIcon className="h-5 w-5" />,
        content: <PropertyDetails />,
    },
    {
        id: 2,
        label: "Measures",
        instruction: "Select Measures for the property",
        icon: <UserIcon className="h-5 w-5" />,
        content: <Measure />,
    },
    {
        id: 3,
        label: "Job Notes",
        instruction: "Add Notes",
        icon: <CogIcon className="h-5 w-5" />,
        content: <ClientJobType />,
    },
    {
        id: 4,
        label: "Job Data",
        instruction: "Verfication Data",
        icon: <UserIcon className="h-5 w-5" />,
        content: <ClientJobType />,
    },
];
