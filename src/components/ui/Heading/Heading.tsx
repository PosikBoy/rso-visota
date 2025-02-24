import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Heading.module.scss";

interface IProps {
  children: ReactNode;
}

const Heading: FC<PropsWithChildren<IProps>> = (props: IProps) => {
  const { children } = props;
  return <h1 className={styles.heading}>{children}</h1>;
};

export default Heading;
