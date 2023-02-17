export default function Services() {
  return (
    <div className="flex flex-row justify-center gap-10 mt-[50px]">
      <div className="flex flex-col">
        <img src="src/assets/img_service.png" />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-[700] text-[24px] w-[468px]">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </p>
        <p className="text-[14px] w-[468px]">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="flex flex-row gap-5">
          <img src="src/assets/icon_check.svg" />
          <p className="text-[14px]">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
        </div>
        <div className="flex flex-row gap-5">
          <img src="src/assets/icon_check.svg" />
          <p className="text-[14px]">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
        </div>
        <div className="flex flex-row gap-5">
          <img src="src/assets/icon_check.svg" />
          <p className="text-[14px]">Sewa Mobil Jangka Panjang Bulanan</p>
        </div>
        <div className="flex flex-row gap-5">
          <img src="src/assets/icon_check.svg" />
          <p className="text-[14px]">Gratis Antar - Jemput Mobil di Bandara</p>
        </div>
        <div className="flex flex-row gap-5">
          <img src="src/assets/icon_check.svg" />
          <p className="text-[14px]">Layanan Airport Transfer / Drop In Out</p>
        </div>
      </div>
    </div>
  );
}
