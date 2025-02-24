import Heading from "@/components/ui/Heading/Heading";
import Carousel from "./components/Carousel/Carousel";
import styles from "./MainPage.module.scss";
import Subtitle from "@/components/ui/Subtitle/Subtitle";

import AboutImage from "@/assets/images/about-1.png";
import MpguLogo from "@/assets/images/mpgu-logo.png";

import Image from "next/image";
import Heading2 from "@/components/ui/Heading2/Heading2";
import Paragraph from "@/components/ui/Paragraph/Paragraph";
import Preferences from "./components/Preferences/Preferences";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.carouselWrapper}>
        <Carousel />
      </div>
      <section className={styles.offerBlock}>
        <div className="container">
          <div className={styles.offerBlockContent}>
            <Heading2 variant="white">СПО «Высота»</Heading2>
            <Heading>
              Лучшее лето твоей жизни начинается{" "}
              <span className={styles.accent}>здесь!</span>{" "}
            </Heading>
            <Subtitle variant="white">
              Стань вожатым, получи уникальный опыт, найди друзей и проведи лето
              с пользой!
            </Subtitle>
          </div>
        </div>
      </section>
      <main className={styles.pageContent}>
        <section className={styles.aboutWrapper}>
          <div className="container">
            <div className={styles.about}>
              <Heading2 className={styles.aboutHeading}>Кто мы такие?</Heading2>
              <Subtitle>
                Мы - студенческий педагогический отряд ««Высота»».
              </Subtitle>
              <div className={styles.aboutTextContainer}>
                <Paragraph variant="white">
                  С 2015 года работаем в лагерях России вожатыми,
                  культорганизаторами, старшими вожатыми. Раскрываем крылья
                  мечты и помогаем детям верить в себя. Мы — команда, друзья и
                  семья.
                </Paragraph>
              </div>
              <div className={styles.aboutTextContainer}>
                <p className={styles.aboutContainedText}>
                  Лучший педагогический отряд Москвы 2024 и лучший
                  педагогический отряд России 2021.
                </p>
                <div className={styles.aboutImageContainer}>
                  <Image
                    src={AboutImage}
                    alt="СПО Высота"
                    className={styles.aboutImage}
                  />
                </div>
              </div>
              <Heading2 className={styles.aboutHeading} variant="black">
                Ты из МПГУ?
              </Heading2>
              <div className={styles.aboutRow}>
                <Paragraph variant="black" className={styles.aboutText}>
                  Это прекрасно, ведь мы тоже! Наш отряд состоит в штабе
                  студенческих отрядов МПГУ, а находится наш отряд в Москве.
                </Paragraph>
                <div className={styles.aboutMpguLogo}>
                  <Image
                    src={MpguLogo}
                    alt="СПО Высота"
                    className={styles.aboutImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Preferences />
        <div className="container">
          <Heading2 className={styles.aboutHeading} variant="black">
            Анкета закрывается совсем скоро, лучше поспешить. Мы ждем твою
            заявку!
          </Heading2>
        </div>
        <div className="container">
          <div className={styles.question}>
            <Heading2 className={styles.questionHeading} variant="white">
              Есть вопросы? Смело пишите нашему{" "}
              <a
                href="https://vk.com/oliska_s_privetom"
                rel="noreferrer"
                className={styles.questionLink}
              >
                командиру
              </a>
            </Heading2>
          </div>
        </div>
      </main>
      <div className={styles.buttons}>
        <a href="https://clck.ru/3DM7ZK" className={styles.formButton}>
          Заполнить анкету
        </a>
        {/* <a href="https://clck.ru/3DM7ZK" className={styles.vkButton}>
          VK
        </a> */}
      </div>
    </div>
  );
};

export default MainPage;
