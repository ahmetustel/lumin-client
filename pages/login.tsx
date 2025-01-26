// pages/login.tsx
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      if (res.ok) {
        // Başarılı login ise token vs. saklama
        router.push("/application");
      } else {
        alert("Giriş başarısız!");
      }
    } catch (error) {
      console.error(error);
      alert("Sunucuya bağlanırken hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Şifre"
      />
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default Login;
