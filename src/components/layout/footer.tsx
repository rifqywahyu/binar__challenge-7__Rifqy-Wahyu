export default function Footer() {
  return (
    <footer className="flex flex-row justify-between mx-[200px] py-[50px] mt-[50px]">
      <div className="flex flex-col gap-5">
        <p className="w-[268px]">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="flex flex-col gap-5">
        <p>Our services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="flex flex-col gap-5">
        <p>Connect with us</p>
        <div className="flex flex-row gap-5">
          <img className="w-[32px]" src="src/assets/icon_facebook.svg" />
          <img className="w-[32px]" src="src/assets/icon_instagram.svg" />
          <img className="w-[32px]" src="src/assets/icon_twitter.svg" />
          <img className="w-[32px]" src="src/assets/icon_mail.svg" />
          <img className="w-[32px]" src="src/assets/icon_twitch.svg" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p>Copyright Binar 2022</p>
        <div className="col bg-[#0D28A6] w-[100px] h-[34px]"></div>
      </div>
    </footer>
  );
}
