export default function Navbar() {
  return (
    <nav className="bg-[#F1F3FF] flex flex-row justify-between px-[200px] py-[25px]">
      <div className="col bg-[#0D28A6] w-[100px] h-[34px]">
        
      </div>
      <div className="col">
        <ul className="flex flex-row gap-8">
          <li className="pt-2">Our Services</li>
          <li className="pt-2">Why Us</li>
          <li className="pt-2">Testimonial</li>
          <li className="pt-2">FAQ</li>
          <li>
            <button type="button" className="text-white bg-[#5CB85F] px-3 py-2">
                Register
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
