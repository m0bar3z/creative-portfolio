/* eslint-disable max-len */
import { type FC, memo } from "react";
import Link from "next/link";
import clsx from "clsx";
import { MdArrowOutward } from "react-icons/md";

interface ButtonPropsType {
  linkField: string;
  label: string;
  showIcon?: boolean;
  className?: string;
}

const Button: FC<ButtonPropsType> = ({ linkField, showIcon = true, label, className }) => {
  return (
    <Link
      as={"button"}
      href={linkField}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-slate-800 transition-transform ease-out hover:scale-105",
        className
      )}
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"></span>
      <span className="relative flex items-center justify-center gap-2 ">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
};

export default memo(Button);
