import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Heading,
  InputRightElement,
  IconButton,
} from "@chakra-ui/core";
import { MdCheck } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useTexts } from "./LanguageContext";

type AddTextProps = {
  appId: string;
};

export const AddText: React.FC<AddTextProps> = ({ appId }) => {
  const [textKey, setTextKey] = React.useState("");
  const { push } = useHistory();
  const t = useTexts();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textKey.includes(" ") || textKey.length === 0) {
      alert("Tekstnøkkelen må være fyllt ut, og kan ikke inneholde mellomrom");
      return;
    }
    push(`/${appId}/${textKey}`);
  };
  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      borderWidth={1}
      borderColor="#ccc"
      backgroundColor="#eee"
      rounded="md"
      p={3}
      my={6}
      maxWidth={500}
    >
      <Heading as="h3" fontSize="xl">
        {t("appSide.nyTekst.tittel")}
      </Heading>
      <FormControl>
        <FormLabel htmlFor="text-key">{t("appSide.nyTekst.label")}</FormLabel>
        <InputGroup>
          <Input
            value={textKey}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTextKey(e.target.value)
            }
            placeholder={t("appSide.nyTekst.placeholder")}
            paddingRight="3rem"
          />
          <InputRightElement>
            <IconButton
              icon={MdCheck}
              size="sm"
              variant="solid"
              variantColor="green"
              type="submit"
              aria-label="Legg til"
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};
