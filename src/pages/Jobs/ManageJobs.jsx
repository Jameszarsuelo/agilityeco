import { MagnifyingGlassIcon, HomeIcon } from "@heroicons/react/24/outline";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import SelectComponent from "../../components/SelectComponent";
import TableHeadComponent from "../../components/TableHeadComponent";
import TableBodyComponent from "../../components/TableBodyComponent";
import { Link } from "react-router-dom";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Booked",
        value: "booked",
    },
    {
        label: "Unbooked",
        value: "unbooked",
    },
];

const TABLE_HEAD = [
    "Job Number",
    "Cert#",
    "UMR",
    "Job Status",
    "Property Inspector",
    "Booked Date",
    "Postcode",
    "Installer",
    "Remediation Deadline",
    "NC Level",
    "Close Date",
    "Deadline",
    "Invoice Status",
    "Action",
];

const TABLE_ROWS = [
    {
        jobId: "1",
        jobNumber: "AES0000000001-01",
        cert: "WH11766",
        umr: "WH11766-SPV",
        jobStatus: "job_fail_deadlineExpired",
        pi: "Stephen Dawson",
        bookedDate: "",
        postcode: "PO16 7LU",
        installer: "A&D Carbon Solutions",
        remediationDeadline: "0000-00-00 00:00:00",
        ncLevel: "23/04/18",
        closeDate: "2024-04-25 15:16:23",
        deadline: "2023-04-28 00:00:00",
        invoiceStatus: "not_invoiceable",
    },
    {
        jobId: "2",
        jobNumber: "AES0000000001-01",
        cert: "WH11766",
        umr: "WH11766-SPV",
        jobStatus: "job_fail_deadlineExpired",
        pi: "Stephen Dawson",
        bookedDate: "",
        postcode: "PO16 7LU",
        installer: "A&D Carbon Solutions",
        remediationDeadline: "0000-00-00 00:00:00",
        ncLevel: "23/04/18",
        closeDate: "2024-04-25 15:16:23",
        deadline: "2023-04-28 00:00:00",
        invoiceStatus: "not_invoiceable",
    },
    {
        jobId: "3",
        jobNumber: "AES0000000001-01",
        cert: "WH11766",
        umr: "WH11766-SPV",
        jobStatus: "job_fail_deadlineExpired",
        pi: "Stephen Dawson",
        bookedDate: "",
        postcode: "PO16 7LU",
        installer: "A&D Carbon Solutions",
        remediationDeadline: "0000-00-00 00:00:00",
        ncLevel: "23/04/18",
        closeDate: "2024-04-25 15:16:23",
        deadline: "2023-04-28 00:00:00",
        invoiceStatus: "not_invoiceable",
    },
];

export default function ManageJobs() {
    return (
        <>
            <Card className="h-full w-full mb-5">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none"
                >
                    <div className="items-center justify-between gap-8">
                        <Typography variant="h5" color="blue-gray">
                            Job Filter
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Customize the form to filter the job based on the
                            requirements
                        </Typography>
                    </div>
                </CardHeader>

                <CardBody>
                    <div className="lg:flex gap-10">
                        <div className=" lg:basis-3/4 w-full">
                            <SelectComponent label="Job Status" />
                            <SelectComponent label="Client" />
                            <SelectComponent label="Outward Postcode" />
                        </div>
                        <div className=" lg:basis-1/4 w-full">
                            <Card className="w-full bg-[#212121] text-white">
                                <CardBody>
                                    <Typography variant="h1" className="mb-2">
                                        56
                                    </Typography>
                                    <Typography>No. of Jobs</Typography>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className="h-full w-full">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none "
                >
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Job List
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal"
                            >
                                See information about all jobs
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Button
                                variant="outlined"
                                className="flex items-center gap-3"
                                size="sm"
                            >
                                <CloudArrowUpIcon
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                />{" "}
                                Upload Jobs
                            </Button>
                            <Link to="create">
                                <Button
                                    className="flex items-center gap-3"
                                    size="sm"
                                >
                                    <HomeIcon
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    />{" "}
                                    Create Job
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-0">
                    <table className="mt-4">
                        <thead>
                            <TableHeadComponent tableHead={TABLE_HEAD} />
                        </thead>
                        <tbody>
                            <TableBodyComponent tableRows={TABLE_ROWS} />
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                    >
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}
