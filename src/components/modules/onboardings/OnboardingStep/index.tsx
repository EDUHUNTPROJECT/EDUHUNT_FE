import { Button, FloatButton } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface IProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  question: string;
  options: string[];
}

function OnboardingStep({ step, setStep, question, options }: IProps) {
  return (
    <>
      <div className="w-2/4">
        <Image
          src={`/images/onboarding1.jpg`}
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-10 max-w-[600px] text-center">
        {step > 1 && (
          <div className="fixed left-20 top-20">
            <Button
              type="default"
              shape="round"
              size="large"
              onClick={() => setStep((prev) => prev - 1)}
              icon={<ArrowLeftOutlined />}
            >
              Quay lại
            </Button>
          </div>
        )}
        <p className="text-4xl">
          Xin chào, <strong>Tran Van Bao Thang (K17 DN)!</strong>
        </p>
        <p className="text-xl text-stone-800">{`${question}`}</p>
        <div className="w-2/3 flex flex-col gap-2">
          {options?.map((option, index) => (
            <Button
              key={index}
              type="primary"
              shape="round"
              size="large"
              block
              onClick={() => setStep((prev) => prev + 1)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default OnboardingStep;
