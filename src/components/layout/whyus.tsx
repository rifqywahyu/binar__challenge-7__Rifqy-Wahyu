export default function WhyUs() {
  return (
    <div className="mt-[50px] mx-[200px]">
      <div className="flex flex-col gap-5">
        <p className="text-[24px] font-[700]">Why Us?</p>
        <p className="text-[14px]">Mengapa harus pilih Binar Car?</p>
      </div>
      <div className="flex flex-row justify-between gap-10 mt-[25px]">
        <div className="rounded-[12px] p-4 flex flex-col border-2 border-[#d0d0d0] gap-3">
          <img className="w-[32px]" src="src/assets/icon_complete.svg" />
          <p className="font-[700]">Mobil Lengkap</p>
          <p className="w-[220px]">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </p>
        </div>
        <div className="rounded-[12px] p-4 flex flex-col border-2 border-[#d0d0d0] gap-3">
          <img className="w-[32px]" src="src/assets/icon_price.svg" />
          <p className="font-[700]">Harga Murah</p>
          <p className="w-[220px]">
          Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
          </p>
        </div>
        <div className="rounded-[12px] p-4 flex flex-col border-2 border-[#d0d0d0] gap-3">
          <img className="w-[32px]" src="src/assets/icon_time.svg" />
          <p className="font-[700]">Layanan 24 Jam</p>
          <p className="w-[220px]">
          Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
          </p>
        </div>
        <div className="rounded-[12px] p-4 flex flex-col border-2 border-[#d0d0d0] gap-3">
          <img className="w-[32px]" src="src/assets/icon_professional.svg" />
          <p className="font-[700]">Sopir Profesional</p>
          <p className="w-[220px]">
          Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
          </p>
        </div>
      </div>
    </div>
  );
}
