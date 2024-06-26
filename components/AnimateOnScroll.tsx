import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  Component: React.ComponentType;
  animationProps: {
    initial: any;
    animate: any;
    exit: any;
    transition: { duration: number; ease: string };
  };
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  Component,
  animationProps,
}) => {
  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={animationProps.initial}
      animate={inView ? animationProps.animate : animationProps.exit}
      transition={animationProps.transition}
    >
      <Component />
    </motion.div>
  );
};

export default AnimateOnScroll;
