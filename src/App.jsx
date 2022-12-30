import { FormProvider, useForm } from "react-hook-form";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Flex, Button, Center, Heading } from "@chakra-ui/react";
import Details from "./components/details.jsx";
import Payment from "./components/payment.jsx";
import Confirm from "./components/confirm.jsx";

function App() {
  const myForm = useForm();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const onClickNext = async () => {
    const { trigger } = myForm,
      result = await trigger();
    if (result) nextStep();
  };

  const onSubmit = (data) => {
    nextStep();
    console.log("on submit");
    ShowResult(data);
  };
  const ShowResult = async function (data) {
    console.log(data);
    window.alert(`You submitted:\n\n${JSON.stringify(data, null, 2)}`);
  };
  return (
    <FormProvider {...myForm}>
      <form>
        <Flex flexDir="column" p={4}>
          <Steps activeStep={activeStep}>
            <Step label="Details">
              <Details />
            </Step>
            <Step label="Payment">
              <Payment />
            </Step>
            <Step label="Confirm&amp;Send">
              <Confirm />
            </Step>
          </Steps>
          <Flex p={4}>
            {activeStep === 3 ? (
              <Center p={4} flexDir="column" w={"100%"}>
                <Heading fontSize="xl">Woohoo! All steps completed!</Heading>
                <Button mt={6} size="sm" onClick={reset}>
                  Reset
                </Button>
              </Center>
            ) : (
              <>
                <Button
                  mr={4}
                  size="sm"
                  variant="ghost"
                  onClick={prevStep}
                  isDisabled={activeStep === 0}
                >
                  Prev
                </Button>
                {activeStep !== 2 ? (
                  <Button size="sm" onClick={onClickNext} colorScheme="blue">
                    Next
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={myForm.handleSubmit(onSubmit)}
                  >
                    Confirm
                  </Button>
                )}
              </>
            )}
          </Flex>
        </Flex>
      </form>
    </FormProvider>
  );
}

export default App;
