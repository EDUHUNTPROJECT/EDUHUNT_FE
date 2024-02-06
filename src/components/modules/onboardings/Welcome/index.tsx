import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function Welcome({ setStep }: IProps) {
  return (
    <>
      <div className="w-2/4">
        <Image
          src={"/images/onboarding1.jpg"}
          width={1000}
          height={1000}
          alt=""
        ></Image>
      </div>
      <div className="flex justify-center items-center flex-col gap-10 max-w-[600px] text-center">
        <p className="text-4xl">
          Xin chào, <strong>Tran Van Bao Thang (K17 DN)!</strong>
        </p>
        <p className="text-xl text-stone-800">
          Chào mừng bạn đã đến với <strong>CHOLAR-HUNT</strong> - Nơi tìm kiếm
          và kết nối học bổng!
        </p>
        <p className="text-xl text-stone-800 w-4/5">
          Bạn hãy trả lời một vài câu hỏi để giúp chúng mình biết hơn về bản
          thân nhé!
        </p>
        <div className="w-2/3 flex flex-col gap-2">
          <Button
            type="primary"
            shape="round"
            size="large"
            block
            onClick={() => setStep((prev) => prev + 1)}
          >
            BẮT ĐẦU
          </Button>
          <Button type="default" shape="round" size="large" block>
            BỎ QUA
          </Button>
        </div>
      </div>
    </>
  );
}

export default Welcome;
