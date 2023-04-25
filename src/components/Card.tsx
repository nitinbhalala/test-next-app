import React from "react";
import Image from "next/image";

import { UserData, selectedProileDetail } from "../assets/staticData";

function Card() {
  return (
    <div className="flex flex-col w-full max-w-lg">
      <div className="py-2">
        {" "}
        <Image
          src="/images/icons/back-icon.svg"
          height="30"
          width="30"
          alt="medii-logo"
          className="text-white hover:cursor-pointer"
        />
      </div>
      <div className="relative pt-7">
        <div className="absolute flex flex-col items-center justify-center w-full -top-4">
          <div className="inline-block p-2 bg-[#F4F0FF] rounded-full">
            <Image
              src="/images/user-1.jpg"
              height="70"
              width="70"
              alt="user-icon"
              className="text-white rounded-full hover:cursor-pointer"
            />
          </div>
          <h2 className="text-lg pt-0.5 font-bold capitalize text-center">
            boris McCranie
          </h2>
        </div>
        <div className="bg-white  rounded-3xl shadow-2xl pt-[3.8rem] pb-4">
          <div className="flex flex-wrap xs:flex-nowrap py-4 my-5 mx-3 bg-[#FAF8FF] rounded-[18px] justify-between">
            {selectedProileDetail.map((item, index) => {
              const { image, title, count } = item;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center flex-1"
                >
                  <Image
                    src={`/images/icons/${image ?? "star.svg"}`}
                    height="20"
                    width="20"
                    alt="star"
                    className="rounded-full hover:cursor-pointer"
                  />
                  <h3 className="block text-[15px] leading-3 mt-1.5 font-bold">
                    {count ?? ""}
                  </h3>
                  <h3 className="block text-[12px] font-medium capitalize text-[#7C7097] ">
                    {title ?? ""}
                  </h3>
                  {index !== selectedProileDetail.length - 1 && (
                    <div className="absolute w-full max-w-[100px] px-6 rotate-90 -right-10">
                      <hr className="left-0 w-full border-l border-[#DFDBE6]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="px-4 xs:px-8 mt-3">
            <hr />
            <div className="relative py-2 px-2">
              <hr className="border-[0.12rem] font-semibold w-3.5  border-[#FABA51] absolute rotate-90 bottom-[19px] left-0" />
              <span className="capitalize px-2  font-semibold text-[#666469] text-sm">
                top ranking
              </span>
            </div>
            <hr />
            <div className="flex flex-col gap-2 py-2">
              {UserData.map((user, index) => {
                const { name, score, image } = user;
                return (
                  <div key={index} className="flex  flex-col gap-2">
                    <div className="text-[#523B90] flex flex-wrap xs:flex-nowrap justify-center xs:justify-start items-center gap-2">
                      <span className="block min-w-[28px] text-base font-bold">{`#${
                        index + 1
                      }`}</span>
                      <div className="flex p-1 bg-[#F4F0FF] rounded-full flex-shrink-0">
                        <Image
                          src={`/images/${image ?? "user2"}.jpg`}
                          height="40"
                          width="40"
                          alt="user-icon"
                          className="text-white rounded-full hover:cursor-pointer"
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className="block font-bold text-[#252427]">
                          {name ?? ""}
                        </span>
                        <span className="block font-medium text-sm text-[#7E729A] capitalize">
                          score:{" "}
                          <span className="text-[#523B90] font-bold">
                            {score ?? ""}
                          </span>
                        </span>
                      </div>
                    </div>
                    {index !== UserData.length - 1 && <hr />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
