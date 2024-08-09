import React from "react";

function Footer() {
  return (
    <footer class="text-white py-5 text-center bg-[#111]">
      <div class="flex justify-between px-[50px]">
        <div class="max-w-[50%]">
          <div class="flex flex-col w-full items-start">
            <h3 className="m-0 text-[16px] text-[#a9a9a9]">Official Sales Partner:</h3>
            <h1 className="m-0 text-[36px] text-[#3cb371]">Sampattee</h1>
          </div>
          <div class="flex flex-col w-full items-start">
            <div class="address">
              <h4 className="text-left my-5 mb-1 text-[14px] text-[#a9a9a9]">Address</h4>
              <p className="my-1">
                Plot No. 152, Industrial Area, Phase-2 – 160002, Chandigarh,
                India
              </p>
            </div>
            <div class="phone">
              <h4 className="text-left my-5 mb-1 text-[14px] text-[#a9a9a9]">Phone</h4>
              <p className="my-1">
                Office : +91-98768-11177,
                <br />
                Office : +91-82890-11177
              </p>
            </div>
            <div class="email">
              <h4 className="text-left my-5 mb-1 text-[14px] text-[#a9a9a9]">Email</h4>
              <p className="my-1">info@example.com</p>
            </div>
          </div>
        </div>
        <div class="max-w-[40%]">
          <h3 className="mb-5 text-[18px]">Schedule your site visit now:</h3>
          <form className="flex flex-col" action="#">
            <input className="p-2.5 mb-2.5 border-none rounded" type="text" placeholder="Enter your name" required />
            <input className="p-2.5 mb-2.5 border-none rounded" type="tel" placeholder="Enter your phone number" required />
            <input className="p-2.5 mb-2.5 border-none rounded" type="email" placeholder="Enter your email" required />
            <button className="p-2.5 bg-[#3cb371] text-white border-none rounded cursor-pointer transition-colors duration-300 hover:bg-[#2e8b57]" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <div class="text-center py-2.5 text-[14px] bg-[#000]">
        <p className="m-0">Beverly Golf Avenue © 2023 Managed By Tangent Promoters LLP</p>
      </div>
    </footer>
  );
}

export default Footer;
