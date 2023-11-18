"use client";
import * as Form from "@radix-ui/react-form";
import styled from "styled-components";
import { motion } from "framer-motion";
import { errorColor } from "./colors";

interface textFieldProps {
  name: string;
  subText?: string;
  label: string;
  onChange?: any;
  defaultValue?: any;
  validation?: any;
  placeHolder?: string;
  errorMessage?: string;
  value?: any;
  type?: string;
}

export const TextField = ({ ...props }: textFieldProps) => {
  const { name, subText, label, validation, errorMessage } = props;

  return (
    <Form.Field name={name}>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Label style={{ marginTop: 20 }}>{label}</Label>
        <Form.Control asChild>
          <InputText {...props} />
        </Form.Control>
      </div>
      {errorMessage?.length && !validation ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </motion.div>
      ) : null}
      {subText?.length ? (
        <Form.Message>
          <p className="text-xs mt-1">{subText}</p>
        </Form.Message>
      ) : null}
    </Form.Field>
  );
};

const InputText = styled.input`
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

const Label = styled(Form.Label)`
  font-weight: semi-bold;
`;

const ErrorMessage = styled(Form.Message)`
  color: ${errorColor};
`;
