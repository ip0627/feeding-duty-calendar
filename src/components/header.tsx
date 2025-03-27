"use client"; // クライアントコンポーネントとして指定

import { useState, useEffect } from "react";

export default function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.getFullYear() + 
        "/" + String(now.getMonth() + 1).padStart(2, "0") + 
        "/" + String(now.getDate()).padStart(2, "0");
      setCurrentDate(formattedDate);
    };

    updateDate(); // 初回実行

    const timer = setInterval(updateDate, 1000 * 60 * 60); // 1時間ごとに更新

    return () => clearInterval(timer); // クリーンアップ
  }, []);

  return (
    <header className="w-full bg-blue-500 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Feeding Duty Schedule</h1>
      <div className="flex items-center space-x-6">
        <p className="text-lg">{currentDate}</p> {/* ← 日付を表示 */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Sign out</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
