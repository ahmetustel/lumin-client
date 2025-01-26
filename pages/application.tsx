// pages/application.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";
import ReservationCard from "../components/ReservationCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export const getServerSideProps = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
//   const reservations = await res.json();
//   return { props: { reservations } };
// };

const Application = () => {
  const router = useRouter();
  const [role, setRole] = useState("");

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
    fetcher,
    { refreshInterval: 10000 } // 10 saniyede bir yenilenir
  );

  useEffect(() => {
    // Örnek: Role'ü API'den veya localStorage'dan alabilirsiniz
    const fetchRole = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`);
        if (res.ok) {
          const user = await res.json();
          setRole(user.role);
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error(err);
        router.push("/login");
      }
    };
    fetchRole();
  }, [router]);

  if (error) return <div>Rezervasyonlar yüklenemedi.</div>;
  if (!data) return <div>Yükleniyor...</div>;

  // Admin ise tüm verileri vs. handle edebilir
  // Staff ise sadece flight reservation gibi ek kurallar
  const visibleReservations = data.slice(0, 5); // Maksimum 5 kayıt gösterme

  // return <div>{role === "admin" ? <AdminView /> : <StaffView />}</div>;
  return (
    <div>
      {/* {data.slice(0, 5).map((reservation) => (
        <ReservationCard key={reservation.id} reservation={reservation} />
      ))} */}
      <h1>Uygulama Sayfası</h1>
      <div>Yetkili Rol: {role}</div>
      {visibleReservations.map((resv: any) => (
        <ReservationCard key={resv.id} reservation={resv} />
      ))}
    </div>
  );
};

export default Application;
