"use client";

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("success");
    } catch {
      alert("エラー");
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("../");
    } catch {
      alert("エラー");
    }
  };

  return (
    <div className="p-4">
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 block w-full"
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 block w-full"
      />
      <button
        className="bg-blue-500 cursor-pointer text-white px-4 py-2 mr-2"
        onClick={handleSignup}
      >
        登録
      </button>
      <button
        className="bg-green-500 cursor-pointer text-white px-4 py-2"
        onClick={handleLogin}
      >
        ログイン
      </button>
    </div>
  );
}
