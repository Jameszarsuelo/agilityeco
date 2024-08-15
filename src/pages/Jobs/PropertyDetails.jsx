import { Typography } from "@material-tailwind/react";
import InputComponent from "../../components/InputComponent";
import SelectComponent from "../../components/SelectComponent";

export default function PropertyDetails() {
    return (
        <>
            <div className="basis-1/2">
                <div className="mb-10">
                    <Typography variant="h4" className="mb-3">
                        Job Details
                    </Typography>
                    <InputComponent label="Cert Number" />
                    <SelectComponent label="Scheme" />
                    <InputComponent label="Lodged by TMLN" />
                    <SelectComponent label="Lodged by Name" />
                </div>
                <Typography variant="h4" className="mb-3">
                    Property Contact Details
                </Typography>
                <InputComponent label="Contact Name" />
                <InputComponent label="Contact Email" />
                <InputComponent label="Contact Primary Tel" />
                <InputComponent label="Contact Secondary Tel" />
            </div>
            <div className="basis-1/2">
                <div className="mb-10">
                    <Typography variant="h4" className="mb-3">
                        Property Details
                    </Typography>
                    <InputComponent label="Property Number" />
                    <InputComponent label="Property Address 1"></InputComponent>
                    <InputComponent label="Property Address 2"></InputComponent>
                    <InputComponent label="Property Address 3"></InputComponent>
                    <InputComponent label="Property City" />
                    <InputComponent label="Property County" />
                    <InputComponent label="Property Post Code" />
                </div>

                <Typography variant="h4" className="mb-3">
                    Installer Details
                </Typography>

                <InputComponent label="Sub Installer Name" />
                <InputComponent label="Sub Installer TMLN" />
            </div>
        </>
    );
}
