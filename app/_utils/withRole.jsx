"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth, db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const withRole = (requiredRole) => (WrappedComponent) => {
  return (props) => {
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
      const checkRole = async () => {
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().role !== requiredRole) {
            router.push(requiredRole === "Supplier" ? "/dashboard" : "/Forwarderdashboard")
          }
        }
      };

      if (!loading && user) {
        checkRole();
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withRole;
