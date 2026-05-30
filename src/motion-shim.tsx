import React from 'react';

// A proxy that wraps HTML elements to substitute standard React elements and strip all framer-motion properties
export const motion = new Proxy(
  {},
  {
    get(target, prop) {
      if (typeof prop !== 'string') return undefined;

      const Component = prop;

      const motionComponent = React.forwardRef(({
        initial,
        animate,
        exit,
        variants,
        transition,
        whileHover,
        whileTap,
        whileInView,
        viewport,
        onAnimationStart,
        onAnimationComplete,
        onUpdate,
        custom,
        layout,
        ...props
      }: any, ref) => {
        return React.createElement(Component, { ...props, ref });
      });

      motionComponent.displayName = `motion.${prop}`;
      return motionComponent;
    },
  }
) as any;

export const AnimatePresence = ({ children }: any) => <>{children}</>;

export const useMotionValue = (initial: any) => ({
  get: () => initial,
  set: () => {},
  onChange: () => () => {},
});

export const useTransform = (value: any, r1: any, r2: any) => value;

export const animate = () => ({
  stop: () => {},
});
