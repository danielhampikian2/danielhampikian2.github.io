import { IconType } from "react-icons";

export type PricingPlan = {
  name: string;
  price: number;
  title: string;
  subTitle: string;
  features: string[];
}

export type ServiceType = {
  title: string;
  description: string;
  icon: IconType;
}

export type TestimonialSliderType = {
  name: string;
  location: string;
  description: string;
  image: string;
}

export type FaqType = {
  title: string;
  description: string;
}