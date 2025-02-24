import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Subtitle.module.scss";
import classNames from "classnames";

interface IProps {
  children: ReactNode;
  variant?: "black" | "white";
}

const Subtitle: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children, variant = "black" } = props;
  return (
    <p className={classNames(styles.subtitle, styles[`variant-${variant}`])}>
      {children}
    </p>
  );
};

export default Subtitle;
