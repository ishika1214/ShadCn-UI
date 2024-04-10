import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SignUp from "./SignUp";
import { useRouter } from "next/navigation";
const SingIn = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<boolean>(false);
  const [user, setuser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const isEmailValid = (): boolean => {
    // Regular expression for email validation
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(user.email);
  };

  const isPasswordValid = (): boolean => {
    // Password should be at least 8 characters long
    return user.password.length >= 8;
  };

  const [isError, setIsError] = useState<boolean>(false);

  const handleSignIn = () => {
    if (
      !user.email.length ||
      !user.password.length ||
      !isEmailValid() ||
      !isPasswordValid()
    ) {
      setIsError(true);
      return;
    }
    router.push("/music");
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {newUser ? (
        <SignUp setNewUser={setNewUser} />
      ) : (
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={user.email}
                  onChange={(e) => {
                    setuser({ ...user, email: e.target.value });
                  }}
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) => {
                    setuser({ ...user, password: e.target.value });
                  }}
                  required
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
              <Button type="submit" className="w-full" onClick={handleSignIn}>
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <div className="underline" onClick={() => setNewUser(true)}>
                Sign up
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hidden bg-muted lg:block">
        <Image
          src="https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          width="1920"
          height="900"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};
export default SingIn;
