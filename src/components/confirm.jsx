import {
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  RadioGroup,
  HStack,
  Radio,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

function Confirm() {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const values = getValues();

  return (
    <Flex flexDir={"column"} p={4}>
      <Heading>Confirm Details</Heading>

      <Flex flexWrap={"wrap"} justify="space-between" p={4}>
        <FormControl isRequired w={"45%"} isInvalid={errors.firstname}>
          <FormLabel>First name</FormLabel>
          <Input
            placeholder="First name"
            {...register("firstname", {
              required: "First name is required.",
              minLength: { value: 6, message: "Length cannot be lower than 6" },
            })}
          />
          <FormErrorMessage>{errors.firstname?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired w={"45%"} isInvalid={errors.lastname}>
          <FormLabel>Last name</FormLabel>
          <Input
            placeholder="Last name"
            {...register("lastname", {
              required: "Last name is required.",
              minLength: { value: 2, message: "Length cannot be lower than 2" },
            })}
          />
          <FormErrorMessage>{errors.lastname?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex flexWrap={"wrap"} justify="space-between" p={4}>
        <FormControl isRequired w={"45%"} isInvalid={errors.country}>
          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Select country"
            {...register("country", { required: "true" })}
          >
            <option>Korea</option>
            <option>India</option>
          </Select>
          <FormErrorMessage>Please select a country</FormErrorMessage>
        </FormControl>
        <FormControl as="fieldset" isRequired w={"45%"}>
          <FormLabel as="legend">Gender</FormLabel>
          <RadioGroup defaultValue={values.gender}>
            <HStack flexWrap={"wrap"} align="flex-start">
              <Radio value="male" {...register("gender")}>
                Male
              </Radio>
              <Radio value="female" {...register("gender")}>
                Female
              </Radio>
              <Radio value="others" {...register("gender")}>
                Others
              </Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </Flex>

      <Flex flexWrap={"wrap"} justify="space-between" p={4}>
        <FormControl isRequired isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/,
                message: "Email format is invalid.",
              },
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <Flex flexWrap={"wrap"}>
        <HStack gap={8} align={"start"} p={4}>
          <Box>
            <Text w={"max-content"}>Card details</Text>
          </Box>
          <Box>
            <Flex pb={2} gap={8} flexWrap={"wrap"}>
              <FormControl isRequired w="225px" isInvalid={errors.nameoncard}>
                <FormLabel>Name on card</FormLabel>
                <Input
                  type="text"
                  placeholder="Name on Card"
                  {...register("nameoncard", { required: "Name is required." })}
                />
                <FormErrorMessage>
                  {errors.nameoncard?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isRequired w="225px" isInvalid={errors.expiry}>
                <FormLabel>Expiry</FormLabel>
                <Input
                  type="month"
                  {...register("expiry", {
                    required: "Expiry date is required.",
                    validate: (value) =>
                      new Date(value) < new Date()
                        ? "Expiry cannot be less than Present."
                        : true,
                  })}
                />
                <FormErrorMessage>{errors.expiry?.message}</FormErrorMessage>
              </FormControl>
            </Flex>

            <Flex pt={2} gap={8} flexWrap={"wrap"}>
              <FormControl isRequired w="225px" isInvalid={errors.cardnumber}>
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="number"
                  placeholder="1234 1234 1234 1234"
                  {...register("cardnumber", {
                    required: "Card number is required.",
                    minLength: {
                      value: 16,
                      message: "The minimum length is 16",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.cardnumber?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired w="225px" isInvalid={errors.ccv}>
                <FormLabel>CCV</FormLabel>
                <Input
                  type="number"
                  placeholder="•••"
                  {...register("ccv", {
                    required: "CCV is required.",
                    minLength: {
                      value: 3,
                      message: "Minimum value is 3",
                    },
                    maxLength: {
                      value: 3,
                      message: "Maximum value is 3",
                    },
                  })}
                />
                <FormErrorMessage>{errors.ccv?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Box>
        </HStack>

        <Flex gap={8} align={"start"} p={4} flexWrap={"wrap"}>
          <Box>
            <Text fontWeight={"medium"} align={"start"}>
              Email address
            </Text>
            <Text>Invoices will be sent to this email address.</Text>
          </Box>

          <Box>
            <Flex
              flexWrap={"wrap"}
              flexDir={"column"}
              pb={2}
              gap={1}
              justify={"flex-start"}
            >
              <FormControl isRequired w={"349px"}>
                <Input type="email" placeholder="Email" />
                <FormErrorMessage>Email address is required.</FormErrorMessage>
              </FormControl>
              <Button colorScheme="blue" variant="ghost" size="sm">
                Add another
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Confirm;
