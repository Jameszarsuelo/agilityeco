import SelectComponent from "../../components/SelectComponent";

export default function ClientJobType() {
    return (
        <>
            <div className="basis-1/2">
                <SelectComponent label="Client" />
            </div>
            <div className="basis-1/2">
                <SelectComponent label="Job Type" />
            </div>
        </>
    );
}
