import Calendar from "@/components/calender";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center my-4">カレンダー</h1>
      <Calendar />
    </main>
  );
}
