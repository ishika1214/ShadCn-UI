import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";

interface ISignUp {
  setNewUser: Dispatch<SetStateAction<boolean>>;
}

const SignUp: React.FC<ISignUp> = ({ setNewUser }) => {
  const [user, setuser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isError, setIsError] = useState<boolean>(false);

  const handleSignUp = () => {
    if (
      !user.email.length ||
      !user.password.length ||
      !isEmailValid() ||
      !isPasswordValid()
    ) {
      setIsError(true);
      return;
    }
    setNewUser(false);
  };
  const isEmailValid = (): boolean => {
    // Regular expression for email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(user.email);
  };

  const isPasswordValid = (): boolean => {
    // Password should be at least 8 characters long
    return user.password.length >= 8;
  };
  return (
    <div className=" flex items-center justify-center ">
      <div className=" p-12 w-[500px]">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-balance text-muted-foreground">
            Enter your information to create an account.
          </p>
        </div>

        <div className="grid gap-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Max"
                value={user.firstName}
                onChange={(e) => {
                  setuser({ ...user, firstName: e.target.value });
                }}
                required
              />
              {isError && !user.firstName.length && (
                <p className="text-red-600">Firstname is required</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Robinson"
                value={user.lastName}
                onChange={(e) => {
                  setuser({ ...user, lastName: e.target.value });
                }}
                required
              />
              {isError && !user.lastName.length && (
                <p className="text-red-600">LastName is required</p>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={user.email}
              onChange={(e) => {
                setuser({ ...user, email: e.target.value });
              }}
              required
            />
            {isError &&
              (!user.email.length ? (
                <p className="text-red-600">Email is required</p>
              ) : !isEmailValid() ? (
                <p className="text-red-600">Invalid Email</p>
              ) : (
                <></>
              ))}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => {
                setuser({ ...user, password: e.target.value });
              }}
            />
            {isError &&
              (!user.password.length ? (
                <p className="text-red-600">password is required</p>
              ) : !isPasswordValid() ? (
                <p className="text-red-600">
                  password should be atleast 8 character
                </p>
              ) : (
                <></>
              ))}
          </div>
          <Button type="submit" className="w-full" onClick={handleSignUp}>
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <div className="underline" onClick={() => setNewUser(false)}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
