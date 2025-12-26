import HeartButton from "@/components/HeartButton/HeartButton";
import VanLoader from "@/components/VanLoader/VanLoader";

export default function Home() {
  return (
    <section>
      <div className="container">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <li className="items">
            <HeartButton />
          </li>
          <li className="items">
            <VanLoader />
          </li>
        </ul>
      </div>
    </section>
  );
}
