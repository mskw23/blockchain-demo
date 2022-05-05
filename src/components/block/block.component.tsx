import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getSHA256, isHashValid, mine } from "../../utils/functions";

export type Block = {
  blockId: number;
  nonce: number;
  data: string;
  prev: string;
  hash: string;
};

type BlockComponentProps = {
  block: Block;
};

export function BlockComponent({ block }: BlockComponentProps) {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, getValues, watch } = useForm<Block>(
    {
      defaultValues: block,
    }
  );
  const hash = watch("hash");
  const onSubmit: SubmitHandler<Block> = async (data) => {
    setLoading(true);
    const newHash = await mine(block);
    setLoading(false);
    setValue("hash", newHash);
  };
  const onChange = () => setValue("hash", getSHA256(getValues()).toString());
  return (
    <Box
      borderWidth="2px"
      borderColor={isHashValid(hash) ? "blue.400" : "red.400"}
      borderRadius="lg"
      p="4">
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="blockId">Block number</FormLabel>
        <Input {...register("blockId", { onChange })} type="number" />

        <FormLabel mt="4" htmlFor="nonce">
          Nonce
        </FormLabel>
        <Input {...register("nonce", { onChange })} type="number" />

        <FormLabel mt="4" htmlFor="data">
          Data
        </FormLabel>
        <Textarea {...register("data", { onChange })} />

        <FormLabel mt="4" htmlFor="prev">
          Previous hash
        </FormLabel>
        <Input {...register("prev")} disabled />

        <FormLabel mt="4" htmlFor="hash">
          Hash
        </FormLabel>
        <Input {...register("hash")} disabled />

        <Button isLoading={loading} mt="4" colorScheme="blue" type="submit">
          Mine
        </Button>
      </FormControl>
    </Box>
  );
}
