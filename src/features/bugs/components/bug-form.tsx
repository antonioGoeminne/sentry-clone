import * as Form from "@radix-ui/react-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@ui/text-field";
import { Button } from "@ui/Button";
import { secondary } from "@ui/colors";

export const BugForm = () => {
  const schema = yup
    .object({
      name: yup.string().min(1).required(),
      status: yup.string().min(1).required(),
    })
    .required();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (e) => console.log(e);

  return (
    <Form.Root onSubmit={handleSubmit((data) => handleData(data))}>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange } }) => (
          <TextField
            validation={!errors["name"]}
            placeHolder={"Write a bug name"}
            errorMessage="Name is required"
            onChange={onChange}
            label="Name"
            name="name"
          />
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { onChange } }) => (
          <TextField
            validation={!errors["status"]}
            placeHolder={"Todo.."}
            errorMessage="status is required"
            onChange={onChange}
            label="Status"
            name="status"
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field: { onChange } }) => (
          <TextField
            type={"date"}
            validation={!errors["date"]}
            placeHolder={"date.."}
            onChange={onChange}
            label="Date"
            name="date"
          />
        )}
      />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Form.Submit asChild>
          <Button
            styles={{
              ["background-color"]: secondary,
              color: "white",
              width: 200,
              height: 30,
            }}
          >
            Submit
          </Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
};
