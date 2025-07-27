"use client";

import React, { useState } from "react";
import { LoginContainer, LoginForm } from "@/styles/styles";
import { Card } from "@mui/material";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
export default function SignUpPage() {
  const [createEmail, setCreateEmail] = useState<string>("");
  const [createPassword, setCreatePassword] = useState<string>("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, createEmail, createPassword);
      router.push("/login");
      //トースト必要？
    } catch (error) {
      alert("error");
    }
  };
  return (
    <>
      <LoginContainer>
        <Card sx={LoginForm}>
          <header className="text-3xl mt-5">新規登録</header>
          <h1 className="m-4">フォームに入力してください</h1>
          <TextField
            type="text"
            sx={{ marginBottom: "5px" }}
            label="Eメールを入力"
            variant="outlined"
            value={createEmail}
            onChange={(e) => setCreateEmail(e.target.value)}
          />
          <TextField
            type="text"
            sx={{ marginBottom: "50px" }}
            label="パスワードを入力"
            variant="outlined"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
          />
          <Button onClick={handleSignUp}>入力確定</Button>
          <Button>
            <Link href="/login">ログイン画面に戻る</Link>
          </Button>
        </Card>
      </LoginContainer>
    </>
  );
}
