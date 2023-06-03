import Image from "next/image";

export default function Loader() {
  return (
    <Image src="/spinner.svg" alt="Loading Spinner" width={80} height={80} />
  );
}
