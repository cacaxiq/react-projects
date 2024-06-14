import Footer from "@/Components/footer";
import Sidebar from "@/Components/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="row flex-nowrap">

      <Sidebar activePage={""}></Sidebar>

      <div className="col py-3">
        <span>Oi</span>
      </div>
    </div>

  );
}
