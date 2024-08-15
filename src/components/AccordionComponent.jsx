import { useState } from "react";
import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { InboxIcon, PresentationChartBarIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function AccordionComponent({ list }) {
    const [open, setOpen] = useState(0);
    const { dropdownList } = list;

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Accordion
            key={list.id}
            open={open === 1}
            icon={
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                        open === 1 ? "rotate-180" : ""
                    }`}
                />
            }
        >
            <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border-b-0 p-3"
                >
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mr-auto font-normal"
                    >
                        {list.title}
                    </Typography>
                </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
                {dropdownList.map((dropdownListValue) => (
                    <List className="p-0 ml-5" key={dropdownListValue.title}>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                {dropdownListValue.title}
                            </Typography>
                        </ListItem>
                    </List>
                ))}
            </AccordionBody>
        </Accordion>
    );
}
