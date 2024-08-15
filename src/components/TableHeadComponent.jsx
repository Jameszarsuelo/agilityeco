import { Typography } from "@material-tailwind/react";

export default function TableHeadComponent({tableHead}) {
    return (
        <tr>
            {tableHead.map((head, index) => (
                <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                        {head}
                    </Typography>
                </th>
            ))}
        </tr>
    );
}
