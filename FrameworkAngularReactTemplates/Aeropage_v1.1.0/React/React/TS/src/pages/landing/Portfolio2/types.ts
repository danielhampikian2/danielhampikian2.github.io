import type { IconType } from "react-icons";

export type ResourceType = {
  name: string;
  icon: IconType;
  percentage: number;
}

export type AccoladeType = {
  title: string;
  subTitle: string;
  divider?: boolean
}

export type TestimonialSlideType = {
  name: string;
  position: string;
  description: string;
  image: string;
}

export type BlogType = {
  title: string;
  date: string;
  image: string;
}