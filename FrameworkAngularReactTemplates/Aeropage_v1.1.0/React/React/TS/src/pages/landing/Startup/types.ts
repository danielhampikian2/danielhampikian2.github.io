import { IconType } from "react-icons";

export type StatisticType = {
  state: string;
  title: string;
}

export type ServiceType = {
  title: string;
  description: string;
  icon: IconType
}

export type TestimonialSlideType = {
  name: string;
  position: string;
  description: string;
  image: string;
}

export type BlogType = {
  title: string;
  description: string;
  image: string;
}