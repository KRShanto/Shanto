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
    <h2 className="flex items-center gap-3 font-merriweather text-4xl max-[1600px]:text-3xl max-[700px]:text-2xl">
      {title}
      <Image src={image} alt="Search" width={45} height={30} />
    </h2>
  );
}
