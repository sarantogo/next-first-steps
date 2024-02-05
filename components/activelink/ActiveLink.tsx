"use client";

import Link from "next/link";
import style from "./activelink.module.css";
import { usePathname } from "next/navigation";
interface Props {
  path: string;
  name: string;
}
export const ActiveLink = ({ path, name }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`${style.link} ${
        pathName.includes(path) && style.active_link
      }`}
    >
      {name}
    </Link>
  );
};
