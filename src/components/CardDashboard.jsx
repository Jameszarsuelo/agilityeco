import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function CardDashboard() {
    return (
        <Card className="w-full">
            <CardBody>
                <Typography variant="h2" color="blue-gray" className="mb-3 text-right">
                    24
                </Typography>
                <Typography variant="lead" color="blue-gray">
                    Jobs Booked
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                    <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2"
                    >
                        More Info
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}
