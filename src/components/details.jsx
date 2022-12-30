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
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

function Details() {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const values = getValues();

  return (
    <Flex flexDir={"column"} p={4}>
      <Heading>Personal Details</Heading>

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
          <RadioGroup defaultValue={values.gender || "male"}>
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
    </Flex>
  );
}
export default Details;
