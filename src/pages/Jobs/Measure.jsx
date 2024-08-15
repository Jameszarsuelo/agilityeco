import InputComponent from "../../components/InputComponent";
import SelectComponent from "../../components/SelectComponent";
import TableBodyComponent from "../../components/TableBodyComponent";
import TableHeadComponent from "../../components/TableHeadComponent";

const TABLE_HEAD = [
    "Job Number",
    "Cert#",
    "UMR",
    "Job Status",
];

const TABLE_ROWS = [
    {
        jobNumber: "AES0000000001-01",
        cert: "WH11766",
        umr: "WH11766-SPV",
        jobStatus: "job_fail_deadlineExpired",
    },
    {
        jobNumber: "AES0000000001-01",
        cert: "WH11766",
        umr: "WH11766-SPV",
        jobStatus: "job_fail_deadlineExpired",
    },
    {
        jobNumber: "AES0000000001-01",
        cert: "WH11766",
        umr: "WH11766-SPV",
        jobStatus: "job_fail_deadlineExpired",
    },
];

export default function Measure() {
    return (
        <>
            <div className="w-full lg:basis-1/2">
                <InputComponent label="UMR" />
                <SelectComponent label="Measure CAT" />
                <InputComponent label="Info" />
            </div>
            <div className="w-full lg:basis-1/2">
                <table className="mt-4">
                    <thead>
                        <TableHeadComponent tableHead={TABLE_HEAD} />
                    </thead>
                    <tbody>
                        <TableBodyComponent tableRows={TABLE_ROWS} />
                    </tbody>
                </table>
            </div>
        </>
    );
}
