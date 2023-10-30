import * as Form from "@radix-ui/react-form";

export const BugForm = () => {
  return (
    <Form.Root>
      <Form.Field name="email">
        <Form.Label>Email</Form.Label>
        <Form.Message match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message match="typeMismatch">
          Please provide a valid email
        </Form.Message>
        <Form.Control asChild>
          <input type="email" required />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button style={{ marginTop: 10 }}>Post question</button>
      </Form.Submit>
    </Form.Root>
  );
};
