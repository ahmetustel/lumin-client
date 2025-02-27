// pages/application.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";
import ReservationCard from "../components/ReservationCard";
import { FiLogOut, FiRefreshCcw } from 'react-icons/fi';

const fetcher = async (url: string) => {
  const token = localStorage.getItem('token');
  
  console.log('Fetching with token:', token); // Debug için

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
  
  if (!res.ok) {
    const error = new Error('Rezervasyonlar yüklenemedi');
    console.error('Fetch error:', {
      status: res.status,
      statusText: res.statusText,
      url: res.url
    });
    throw error;
  }
  
  const data = await res.json();
  if (!data || !Array.isArray(data)) {
    throw new Error('Geçersiz veri formatı');
  }
  
  return data;
};

// export const getServerSideProps = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
//   const reservations = await res.json();
//   return { props: { reservations } };
// };

const Application = () => {
  const router = useRouter();
  const [role, setRole] = useState("");

  const { data, error, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
    fetcher,
    { 
      refreshInterval: 10000,
      revalidateOnFocus: false
    }
  );

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    const token = localStorage.getItem('token');
    
    if (!token || !userRole) {
      router.push("/login");
      return;
    }
    
    setRole(userRole);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    router.push('/login');
  };

  if (error) {
    console.error('Fetch error:', error);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-red-500 mb-4">Rezervasyonlar yüklenemedi.</p>
          <button
            onClick={() => mutate()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }
  
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Son 5 rezervasyonu göster
  const visibleReservations = data?.slice(0, 5) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Lumin AI Rezervasyon Sistemi
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                {role === 'admin' ? 'Yönetici' : 'Personel'}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center text-red-500 hover:text-red-600"
              >
                <FiLogOut className="mr-2" />
                Çıkış
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Son 5 Rezervasyon
          </h2>
          <button
            onClick={() => mutate()}
            className="flex items-center text-blue-500 hover:text-blue-600"
          >
            <FiRefreshCcw className="mr-2" />
            Yenile
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleReservations.map((resv: any) => (
            <ReservationCard 
              key={resv.id} 
              reservation={resv}
              isAdmin={role === 'admin'}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Application;
