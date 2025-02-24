"use client";

import Heading2 from "@/components/ui/Heading2/Heading2";
import styles from "./Preferences.module.scss";
import Image, { StaticImageData } from "next/image";

import Preference1 from "@/assets/images/preference-1.png";
import Preference2 from "@/assets/images/preference-2.png";
import Preference3 from "@/assets/images/preference-3.png";
import Preference4 from "@/assets/images/preference-4.png";
import Preference5 from "@/assets/images/preference-5.jpg";
import Preference6 from "@/assets/images/preference-6.png";
import Preference7 from "@/assets/images/preference-7.png";

import { useEffect, useState } from "react";
import classNames from "classnames";

interface IItem {
  id: number;
  snippet: string;
  image: StaticImageData;
}

const data: IItem[] = [
  {
    id: 0,
    snippet: "Работа летом",
    image: Preference1,
  },
  {
    id: 1,
    snippet: "Вожатство",
    image: Preference2,
  },
  {
    id: 2,
    snippet: "Друзья и единомышленники",
    image: Preference3,
  },
  {
    id: 3,
    snippet: "Закрытие вожатской практики",
    image: Preference4,
  },
  {
    id: 4,
    snippet: "НЕскучная молодость",
    image: Preference7,
  },

  {
    id: 5,
    snippet: "Бесплатная школа вожатых",
    image: Preference5,
  },
  {
    id: 6,
    snippet: "Первый педагогический опыт",
    image: Preference6,
  },
];

const Preferences = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className={styles.preferencesWrapper}>
      <div className="container">
        <div className={styles.preferences}>
          <div className={styles.heading}>
            <Heading2>Стань участником лучшего движения в стране!</Heading2>
            <div className={styles.snippets}>
              {data.map((item) => (
                <div
                  className={classNames(
                    styles.snippet,
                    item.id === currentSlide && styles.active
                  )}
                  onClick={() => setCurrentSlide(item.id)}
                  key={item.id}
                >
                  <span>{item.snippet}</span>
                </div>
              ))}
            </div>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.slide,
                    item.id == currentSlide && styles.active
                  )}
                >
                  <Image src={item.image} alt={`slide-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preferences;
