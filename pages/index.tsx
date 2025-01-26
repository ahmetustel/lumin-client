// pages/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return <div>Yükleniyor...</div>;
};

export default Home;
