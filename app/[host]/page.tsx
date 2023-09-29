import Image from "next/image";

export default function Home({ params }: any) {
  return <div>Host: {params.host}</div>;
}
