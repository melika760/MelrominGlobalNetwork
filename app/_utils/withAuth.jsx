"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "@/config/firebaseConfig";
import { Loader } from "lucide-react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/sign-in");
      }
    }, [user, loading, router]);

    if (loading) {
      return <div className="items-center flex justify-center">
         <Loader className="animate-spin"/>
         Loading...</div>;
    }

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
