import { Input, Typography } from "@material-tailwind/react";

export default function InputComponent({ label }) {
    return (
        <div className="w-full mb-4">
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-medium"
            >
                {label}
            </Typography>
            <Input />
        </div>
    );
}
