import HeartButton from "@/components/HeartButton/HeartButton";

export default function Home() {
  return (
    <section>
      <div className="container">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <li className="w-[300px] h-[300px] border border-gray-300 rounded-xl p-4 shadow-md bg-white flex justify-center items-center">
            <HeartButton />
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
