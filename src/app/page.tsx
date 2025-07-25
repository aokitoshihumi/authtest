"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { Todo } from "@/types";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";
import { addDoc, collection,getDocs } from "firebase/firestore";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async(user) => {
      if (!user) {
        router.push("/login");
      }
      try{
        //getDocsでcollection,dbのTodoListに保存されているものを引っ張ってきている
        const querySnapshot = await getDocs(collection(db, "TodoList"));
        const todos = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            content: data.content,
            check: data.check
          };
        });
        setTodoList(todos);
      } catch (error) {
        console.log("取得失敗");
      }
    });

    return () => unsub();
  }, [router]);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    try {
      //addDoc, collection, db,　TodoListでTodoListにcontentとcheckを追加している。
      await addDoc(collection(db, "TodoList"), {
        content: value,
        check: false,
      })
    

      setTodoList((list) => {
        return [...list, {  content: value, check: true }];
      });
    } catch (error) {
      console.log("保存に失敗しました:",error)
    }
    setValue("");
  };

  return (
    <>
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="やるべきことを記述"
          />
          <button
            className="cursor-pointer p-4 bg-gray-200"
            onClick={handleSubmit}
          >
            ✓
          </button>
        </div>
        <TodoList todoList={todoList} />
    </>
  );
}
