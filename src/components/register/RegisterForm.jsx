"use client";
import { Input, Button } from "@nextui-org/react";
const RegisterForm = () => {
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
          name="userName"
          type="text"
          label="username"
          color="default"
          className="w-80 mt-3"
        />
        <Input
          name="password"
          type="password"
          label="password"
          color="default"
          className="w-80 mt-3"
        />
        <Input
          name="img"
          type="text"
          label="image url"
          color="default"
          className="w-80 mt-3"
        />
        <Button color="primary" variant="flat" className="mt-3">
          Register
        </Button>
      </form>
    </>
  );
};
export default RegisterForm;
