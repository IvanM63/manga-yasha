import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href={"/manga"}>
          Belom ada apa apa di home, langsung ke Manga saja
        </Link>
      </div>
    </>
  );
}
