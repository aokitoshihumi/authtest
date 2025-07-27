"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { LoginContainer, LoginForm } from "@/styles/styles";
import { Button, Card, TextField } from "@mui/material";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //非同期のルーティング
      router.push("/dashboard");
    } catch (error) {
      setErrorMessage("Eメールまたはパスワードが間違っています。");
    }
  };

  return (
    <>
      <LoginContainer>
        <Card sx={LoginForm}>
          <header className="text-3xl mt-5">ログイン</header>
          <h1 className="m-4">フォームに入力してください</h1>
          <TextField
            type="text"
            sx={{ marginBottom: "5px" }}
            label="Eメールを入力"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="text"
            sx={{ marginBottom: "50px" }}
            label="パスワードを入力"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <h1 className="text-red-500">{errorMessage}</h1>}
          <Button onClick={handleSignIn}>入力確定</Button>
          <Button>
            <Link href="/signup">新規登録</Link>
          </Button>
        </Card>
      </LoginContainer>
    </>
  );
}
