import type {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";
import styles from "./StarBorder.module.css";

interface StarBorderProps<T extends ElementType> extends ComponentPropsWithoutRef<T> {
  as?: T;
  className?: string;
  children?: ReactNode;
  color?: string;
  speed?: CSSProperties["animationDuration"];
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

const StarBorder = <T extends ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  backgroundColor = "#000000",
  textColor = "#ffffff",
  borderColor = "#222222",
  borderRadius = 20,
  children,
  style,
  ...rest
}: StarBorderProps<T>) => {
  const Component = (as || "button") as ElementType;

  const mergedStyle = {
    padding: `${thickness}px 0`,
    borderRadius: `${borderRadius}px`,
    ...style,
  } as CSSProperties;

  return (
    <Component
      className={`${styles.container} ${className}`}
      style={mergedStyle}
      {...rest}
    >
      <div
        className={styles.borderGradientBottom}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={styles.borderGradientTop}
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={styles.innerContent}
        style={{
          background: backgroundColor,
          color: textColor,
          borderColor,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;