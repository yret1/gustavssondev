import Image from "next/image";

interface CheckboxProps {
  text: string;
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, checked }) => {
  return (
    <section className="w-full flex justify-start gap-4 items-center">
      <Image
        src={checked ? "/check.svg" : "/addon.svg"}
        width={25}
        height={25}
        alt="Checkbox indicating a package choice"
      />
      <p className="text-lg text-white text-opacity-70">{text}</p>
    </section>
  );
};

export default Checkbox;
