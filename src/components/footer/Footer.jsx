import React from "react";
import InputBox from "../inputBox/InputBox";
import Button from "../buttons/Button";

function Footer() {
  return (
    <footer id="footer" class="text-white pt-5 text-center bg-black">
      <div class="md:flex-row flex flex-col-reverse justify-between px-[50px]">
        <div class="w-full md:max-w-[50%]">
          <div class="flex flex-col w-full items-start">
            <h3 className="m-0 text-[16px] text-[#a9a9a9]">
              Official Sales Partner:
            </h3>
            <div className="h-full flex items-center">
              <img
                className="h-[70%]"
                src="/assets/sampatteeLogo.jpg"
                alt="Sampattee"
              />
            </div>
          </div>
          <div class="flex flex-col w-full items-start">
            <div class="address">
              <h4 className="text-left my-5 mb-1 text-[14px] text-[#a9a9a9]">
                Address
              </h4>
              <p className="my-1">
                Industrial Area, Mohali – 160055, Punjab,
                India
              </p>
            </div>
            <div class="phone">
              <h4 className="text-left my-5 mb-1 text-[14px] text-[#a9a9a9]">
              </h4>
              <p className="my-1">
                Office : +91-92163-20050,
                <br />
                Office : +91-97803-42464
              </p>
            </div>
            <div class="email">
              <h4 className="text-left my-5 mb-1 text-[14px] text-[#a9a9a9]">
                Email
              </h4>
              <p className="my-1">sampatteereality@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="w-full my-5 md:pl-[78px] md:max-w-[50%]">
          <h3 className="mb-5 font-bold text-[20px]">
            Schedule your site visit now:
          </h3>
          <form className="flex flex-col gap-4" action="#">
            <InputBox
              id={"firstName"}
              placeholder={"Enter your Name"}
              type={"text"}
            />
            <InputBox
              id={"email"}
              placeholder={"Enter your Email"}
              type={"email"}
            />
            <InputBox
              id={"firstName"}
              placeholder={"Enter your Phone Number"}
              type={"text"}
            />
            <Button width={"100%"} title={"Submit"} />
          </form>
        </div>
      </div>
      <div class="text-center py-2.5 text-[14px] bg-[#000]">
        <p className="m-0">
          Sampattee © 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
