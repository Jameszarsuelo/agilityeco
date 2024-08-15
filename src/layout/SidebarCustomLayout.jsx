import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Button,
    Avatar,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import AccordionLayout from "../components/AccordionComponent";
import "../layout/sidebar.css";

import { sidebarList } from "../data/SidebarList";
import { NavLink } from "react-router-dom";

export default function SidebarCustomLayout() {
    return (
        <>
            <Card className="h-screen sticky top-0 ">
                <div className="mb-2 flex items-center gap-4 p-4 justify-center bg-[#212121]">
                    <img
                        src="https://dev-ami.indigo21.com/images/AgilityEco_WhiteLogo.png"
                        alt="brand"
                        className="h-12 w-17"
                    />
                </div>
                <div className="overflow-auto">
                    <List>
                        {sidebarList.map((list) => {
                            if (list.hasDropdown) {
                                return (
                                    <AccordionLayout
                                        key={list.id}
                                        list={list}
                                    />
                                );
                            } else {
                                return (
                                    <NavLink
                                        to={list.link}
                                        className={({ isActive }) =>
                                            isActive ? " active" : ""
                                        }
                                        key={list.id}
                                    >
                                        <ListItem>
                                            <ListItemPrefix>
                                                <InboxIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="mr-auto font-normal"
                                            >
                                                {list.title}
                                            </Typography>
                                        </ListItem>
                                    </NavLink>
                                );
                            }
                        })}
                    </List>
                </div>
                <div className="relative bottom-0 mt-auto w-full">
                    <div className="flex flex-row place-content-center gap-5 px-3 py-2 justify-between">
                        <div className="relative">
                            <Typography variant="h6">Welcome, Tania</Typography>
                            <Typography variant="small">
                                Property Inspector
                            </Typography>
                        </div>
                        <Avatar
                            variant="circular"
                            size="md"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                    </div>
                    <div className="bg-gray-200 py-2">
                        <div className="grid grid-cols-2 gap-4 m-2">
                            <Button
                                size="sm"
                                className="flex items-center place-content-center gap-3"
                            >
                                <UserCircleIcon className="h-5 w-5" />
                            </Button>

                            <Button
                                variant="outlined"
                                size="sm"
                                className="flex items-center place-content-center gap-3"
                            >
                                <PowerIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
}
