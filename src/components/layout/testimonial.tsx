export default function Testi() {
  return (
    <div className="flex flex-row justify-center mt-[50px]">
      <div className="flex flex-col gap-5">
        <p className="font-[700] text-[24px] text-center">Testimonial</p>
        <p className="text-center mb-[20px]">Berbagai review positif dari para pelanggan kami</p>
        <div className="flex flex-row w-[620px] rounded-[16px] bg-[#F1F3FF] px-[50px] py-[70px] gap-5">
          <img className="w-[80px] h-[80px] self-center" src="src/assets/img_photo.png" />
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2">
              <img
                className="w-[16px] h-[16px]"
                src="src/assets/icon_star.svg"
              />
              <img
                className="w-[16px] h-[16px]"
                src="src/assets/icon_star.svg"
              />
              <img
                className="w-[16px] h-[16px]"
                src="src/assets/icon_star.svg"
              />
              <img
                className="w-[16px] h-[16px]"
                src="src/assets/icon_star.svg"
              />
              <img
                className="w-[16px] h-[16px]"
                src="src/assets/icon_star.svg"
              />
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </p>
            <p>John Dee 32, Bromo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
