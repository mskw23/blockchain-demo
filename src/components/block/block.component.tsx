import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  blockchainActions,
  selectPickedNode,
  selectPickedNodeId,
} from "../../features/blockchain";
import { mineBlockchain } from "../../features/blockchain/blockchain.thunks";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSHA256, isHashValid, mine } from "../../utils/functions";

export type BlockProps = {
  blockId: number;
  nonce: number;
  data: string;
  prev: string | null;
  hash: string;
};

type BlockComponentProps = {
  block: BlockProps;
};

export function BlockComponent({ block }: BlockComponentProps) {
  const [loading, setLoading] = useState(false);
  const nodeId = useAppSelector(selectPickedNodeId);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue, getValues, watch } =
    useForm<BlockProps>({
      defaultValues: block,
    });
  const hash = watch("hash");
  const onSubmit: SubmitHandler<BlockProps> = async (data) => {
    setLoading(true);
    dispatch(
      mineBlockchain({ block: data, blockId: block.blockId, nodeId })
    ).then(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    setValue("hash", block.hash);
    setValue("nonce", block.nonce);
    setValue("prev", block.prev);
    setValue("data", block.data);
  }, [block.hash, block.nonce, block.prev, block.data, setValue]);
  const onChange = (a) => {
    dispatch(
      blockchainActions.changeData({
        nodeId,
        blockId: block.blockId,
        data: a.target.value,
      })
    );
  };
  return (
    <Box
      borderWidth="2px"
      borderColor={isHashValid(hash) ? "blue.400" : "red.400"}
      borderRadius="lg"
      p="4">
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="blockId">Block number</FormLabel>
        <Input
          {...register("blockId")}
          _disabled={{ opacity: 1 }}
          disabled
          type="number"
        />

        <FormLabel mt="4" htmlFor="nonce">
          Nonce
        </FormLabel>
        <Input
          {...register("nonce")}
          _disabled={{ opacity: 1 }}
          disabled
          type="number"
        />

        <FormLabel mt="4" htmlFor="data">
          Data
        </FormLabel>
        <Textarea {...register("data", { onChange })} />

        <FormLabel mt="4" htmlFor="prev">
          Previous hash
        </FormLabel>
        <Input {...register("prev")} _disabled={{ opacity: 1 }} disabled />

        <FormLabel mt="4" htmlFor="hash">
          Hash
        </FormLabel>
        <Input {...register("hash")} _disabled={{ opacity: 1 }} disabled />

        <Button isLoading={loading} mt="4" colorScheme="blue" type="submit">
          Mine
        </Button>
      </FormControl>
    </Box>
  );
}
