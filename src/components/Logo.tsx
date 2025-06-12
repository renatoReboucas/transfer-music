import Image from "next/image";

const Logo = () => {
  return (
    <div className="mb-4 flex items-center">
      <Image src="/icon.svg" alt="TransferMusic" width={32} height={32} />
      <span className="ml-2 text-2xl font-bold">TransferMusic</span>
    </div>
  );
};

export default Logo;
