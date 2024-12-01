"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const path = usePathname();

  if (path === "/workflows/editor") {
    router.replace("/workflows");
  }

  return <div>Editor Page</div>;
};

export default Page;
