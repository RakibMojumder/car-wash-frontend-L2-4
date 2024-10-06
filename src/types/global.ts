import { ReactNode } from "react";

export type TPath = {
  name?: string;
  path: string;
  element: ReactNode;
};

export type TRecentBookingProps = {
  _id: string;
  date: string;
  service: {
    image: string;
    name: string;
    price: number;
  };
  slot: {
    startTime: string;
    endTime: string;
  };
};
