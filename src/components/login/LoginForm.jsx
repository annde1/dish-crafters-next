"use client";
import { Input, Button } from "@nextui-org/react";
const LoginForm = () => {
  return (
    <>
      <form>
        <Input
          name="email"
          type="email"
          label="Email"
          color="default"
          className="w-80"
        />
        <Input
          name="password"
          type="password"
          label="password"
          color="default"
          className="w-80 mt-3"
        />
        <Button color="primary" variant="flat" className="mt-3">
          Login
        </Button>
      </form>
    </>
  );
};
export default LoginForm;
