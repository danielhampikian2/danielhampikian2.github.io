import { IconType } from "react-icons";

export type PortfolioSliderType = {
  title: string;
  subTitle: string;
  image: string;
}

export type StepType = {
  title: string;
  description: string;
  icon: IconType;
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
  date: string;
  type: string;
  image: string;
}