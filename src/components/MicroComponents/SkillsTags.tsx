"use client";

import Link from "next/link";

type SkillsTagsProps = {
  name: string;
  color: string;
  hoverColor: string;
  link: string;
};

export default function SkillsTags({
  name,
  color,
  hoverColor,
  link,
}: SkillsTagsProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`${color} ${hoverColor} text-white rounded-full px-3 py-1 text-sm font-medium cursor-pointer transition-colors duration-200`}
      >
        {name}
      </div>
    </Link>
  );
}