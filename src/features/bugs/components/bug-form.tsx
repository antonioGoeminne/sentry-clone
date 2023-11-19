import * as Form from "@radix-ui/react-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@ui/text-field";
import { Button } from "@ui/Button";
import { secondary } from "@ui/colors";
import { usePostBug } from "..";
import { Bug } from "../types";
import { Autocomplete } from "@ui/Autocomplete";
import { useGetProjectsByText } from "@features/projects/api/use-projects";
import { Project } from "@features/projects/types";
import { DEFAULT_BUGS_STATUS } from "@config/index";

export const BugForm = ({ toggleModal }: any) => {
  const schema = yup
    .object({
      name: yup.string().min(1).required(),
      status: yup.string().min(1).required(),
      project_id: yup.string().min(1).required(),
      project_name: yup.string().min(1).required(),
      date: yup.date(),
    })
    .required();
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [projectsData] = useGetProjectsByText(watch("project_name"));

  const { mutate } = usePostBug();

  const handleData = async (data: Bug) => {
    await mutate({ ...data, created_at: new Date() });
    toggleModal();
  };

  const handleSelectProjectId = (project: Project) => {
    setValue("project_id", project.id);
  };

  const handleSelectStatus = (status: string) => {
    setValue("status", status);
  };

  return (
    <Form.Root onSubmit={handleSubmit((data: Bug) => handleData(data))}>
      <Controller
        name="project_name"
        control={control}
        render={({ field: { onChange } }) => (
          <Autocomplete
            data={projectsData}
            setInputValue={onChange}
            handleSelectItem={handleSelectProjectId}
          />
        )}
      />
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
          <Autocomplete
            data={DEFAULT_BUGS_STATUS}
            setInputValue={onChange}
            handleSelectItem={handleSelectStatus}
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
