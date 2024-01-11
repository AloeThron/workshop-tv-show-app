/** @format */

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar({ onChange, className, value }: Props) {
  return (
    <div
      className={
        "min-w-[300px] w-[500px] ring-2 ring-slate-700 rounded-md flex items-center gap-2 px-2 transition-all group"
      }
    >
      <AiOutlineSearch
        className="text-2xl text-slate-700"
      />
      <input
        onChange={onChange}
        type="text"
        value={value}
        placeholder="Seach for Tv shows"
        className="w-full h-[38px] rounded-md bg-inherit outline-none p-2"
      />
    </div>
  );
}
