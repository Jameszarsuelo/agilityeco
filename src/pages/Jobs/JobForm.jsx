import {
    Card,
    CardBody,
    Typography,
    Stepper,
    Step,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { stepperValues } from "../../data/StepperValue.jsx";

export default function JobForm() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <Card className="w-full">
            <CardBody>
                <div className="w-full px-24 py-4">
                    <Stepper
                        activeStep={activeStep}
                        isLastStep={(value) => setIsLastStep(value)}
                        isFirstStep={(value) => setIsFirstStep(value)}
                    >
                        {stepperValues.map((step) => {
                            return (
                                <Step
                                    onClick={() => setActiveStep(step.id)}
                                    key={step.id}
                                >
                                    {step.icon}
                                    <div className="absolute -bottom-[4.5rem] w-max text-center">
                                        <Typography
                                            className="hidden lg:block"
                                            variant="h6"
                                            color={
                                                activeStep === step.id
                                                    ? "blue-gray"
                                                    : "gray"
                                            }
                                        >
                                            {step.label}
                                        </Typography>
                                        <Typography
                                            color={
                                                activeStep === step.id
                                                    ? "blue-gray"
                                                    : "gray"
                                            }
                                            className="font-normal hidden lg:block"
                                        >
                                            {step.instruction}
                                        </Typography>
                                    </div>
                                </Step>
                            );
                        })}
                    </Stepper>
                </div>

                {stepperValues.map((step) => {
                    if (step.id === activeStep) {
                        return (
                            <Card className="mt-0 lg:mt-20 w-full " key={step.id}>
                                <CardBody>
                                    <div className="lg:flex lg:flex-row gap-20 mx-10">
                                        {step.content}
                                    </div>
                                </CardBody>
                            </Card>
                        );
                    }

                    return false;
                })}

                <div className="mt-10 flex justify-between">
                    <Button onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}
