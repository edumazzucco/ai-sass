import Image from "next/image";

type LoaderProps = {
  text?: string;
};

export const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-bounce">
        <Image fill alt="Loading logo" src="/logo.svg" />
      </div>
      <p className="text-sm text-muted-foreground animate-pulse text-center max-w-[180px]">
        {text ?? "IA is thinking..."}
      </p>
    </div>
  );
};
