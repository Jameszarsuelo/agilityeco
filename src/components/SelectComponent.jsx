import { Option, Select, Typography } from "@material-tailwind/react";

export default function SelectComponent({ label }) {
    return (
        <div className="mb-4 ">
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
            >
                {label}
            </Typography>
            <Select
                label="Select Version"
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                }}
                menuProps={{ className: "h-48" }}
            >
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
            </Select>
        </div>
    );
}
