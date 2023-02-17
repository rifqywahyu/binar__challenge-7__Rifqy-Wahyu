import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex flex-row justify-between bg-[#F1F3FF]">
      <div className="flex flex-col gap-5 ml-[200px]">
        <p className="font-[700] text-[36px] w-[568px]">
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
        </p>
        <p className="text-[14px] w-[468px]">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <Link to="/Cari">
          <button
            type="button"
            className="text-white bg-[#5CB85F] px-3 py-2 w-fit"
          >
            Mulai Sewa Mobil
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <img src="src/assets/img_car.png" />
      </div>
    </div>
  );
}
