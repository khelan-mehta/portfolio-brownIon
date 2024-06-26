import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AnimateOnScroll
      Component={({}) => (
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      )}
      animationProps={{
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
        transition: { duration: 1, ease: "easeInOut" },
      }}
    />
  );
};

export default Image;
