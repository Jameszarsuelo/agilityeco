import { PencilIcon } from "@heroicons/react/24/outline";
import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function TableBodyComponent({ tableRows }) {
    return (
        <>
            {tableRows.map((rowData, rowDataIndex) => {
                const isLast = rowDataIndex === tableRows.length - 1;
                const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                return (
                    <tr key={rowData.jobId} className="even:bg-blue-gray-50/50">
                        {Object.keys(rowData)
                            .slice(1)
                            .map((dataValue, dataValueIndex) => {
                                return (
                                    <td
                                        className={classes}
                                        key={dataValueIndex}
                                    >
                                        <Typography
                                            variant="small"
                                            color="black"
                                        >
                                            {tableRows[rowDataIndex][dataValue]}
                                        </Typography>
                                    </td>
                                );
                            })}
                        <td className={classes}>
                            <div className="flex">
                                <Link to={`edit/${rowData.jobId}`} relative="">
                                    <Tooltip content="Edit Job">
                                        <IconButton variant="text">
                                            <PencilIcon className="h-4 w-4" />
                                        </IconButton>
                                    </Tooltip>
                                </Link>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
