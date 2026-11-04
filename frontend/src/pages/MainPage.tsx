import Header from "@/components/Header";
import { useState } from "react";

export default function MainPage() {
  const [headerTitle, setHeaderTitle] = useState("Friends");
  return (
    <div>
      <Header title={headerTitle}></Header>
    </div>
  );
}
