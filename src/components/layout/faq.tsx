export default function FAQ() {
  return (
    <div className="flex flex-row justify-between mx-[200px] mt-[50px]">
      <div className="flex flex-col gap-10">
        <p className="text-[24px] font-[700]">Frequently Asked Question</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="border-2 border-[#d0d0d0] p-3 w-[600px] rounded-[12px]">
          <p>Apa saja syarat yang dibutuhkan?</p>
        </div>
        <div className="border-2 border-[#d0d0d0] p-3 w-[600px] rounded-[12px]">
          <p>Berapa hari minimal sewa mobil lepas kunci?</p>
        </div>
        <div className="border-2 border-[#d0d0d0] p-3 w-[600px] rounded-[12px]">
          <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
        </div>
        <div className="border-2 border-[#d0d0d0] p-3 w-[600px] rounded-[12px]">
          <p>Apakah Ada biaya antar-jemput?</p>
        </div>
        <div className="border-2 border-[#d0d0d0] p-3 w-[600px] rounded-[12px]">
          <p>Bagaimana jika terjadi kecelakaan</p>
        </div>
      </div>
    </div>
  );
}
