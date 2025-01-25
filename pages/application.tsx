// pages/application.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";
import ReservationCard from "../components/ReservationCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  const reservations = await res.json();
  return { props: { reservations } };
};

const Application = () => {
  const router = useRouter();

  const { data, error } = useSWR("/api/reservations", fetcher, {
    refreshInterval: 10000,
  });
  if (error) return <div>Failed to load reservations.</div>;
  if (!data) return <div>Loading...</div>;

  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch user role from stored token or API
    const fetchRole = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`);
      if (res.ok) {
        const data = await res.json();
        setRole(data.role);
      } else {
        router.push("/login");
      }
    };
    fetchRole();
  }, [router]);

  // return <div>{role === "admin" ? <AdminView /> : <StaffView />}</div>;
  return (
    <div>
      {data.slice(0, 5).map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))}
    </div>
  );
};

export default Application;
