import Image from "next/image";
import React from "react";

export default function SectionTitle({
  title,
  image,
}: {
  title: string;
  image: any;
}) {
  return (
    <h2 className="font-merriweather flex items-center gap-3 text-4xl">
      {title}
      <Image src={image} alt="Search" width={45} height={30} />
    </h2>
  );
}
