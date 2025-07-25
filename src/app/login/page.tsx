"use client";

import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { LoginContainer, LoginForm } from "@/styles/styles";
import { Button, Card, TextField } from "@mui/material";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const useCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
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
          <header className="text-3xl mt-5">Sign in</header>
          <h1 className="m-4">Pleace sigin in to continue.</h1>
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
          { errorMessage && (
            <h1 className="text-red-500">
              {errorMessage}
            </h1>
          )}
          <Button onClick={handleSignIn}>入力確定</Button>
          <Button>
            <Link href="/signup">新規登録</Link>
          </Button>
        </Card>
      </LoginContainer>
    </>
  );
}
