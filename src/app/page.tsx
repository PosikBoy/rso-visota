import MainPage from "@/components/screens/MainPage/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "СПО «Высота» | МПГУ",
  description:
    "Мы — студенческий педагогический отряд «Высота». Вожатые. Команда. Друзья. Семья. Двигаемся #вместе_к_высотам с 2015 года.",

  openGraph: {
    locale: "ru",
    url: "/",
    title: "СПО «Высота» | МПГУ",
    description:
      "Мы — студенческий педагогический отряд «Высота». Вожатые. Команда. Друзья. Семья. Двигаемся #вместе_к_высотам с 2015 года.",
    siteName: "СПО «Высота» | МПГУ",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return <MainPage />;
}
