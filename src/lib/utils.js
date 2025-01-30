import clsx from "clsx";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import { twMerge } from "tailwind-merge";

export function capitalizeFirstLetter(value) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date, formatStr) {
  return format(date, formatStr, { locale: ru });
}

export function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(price);
}

export function getResponseError(error) {
  const errorMessage = "API Error, please try again.";

  if (typeof error !== "object") {
    return errorMessage;
  }

  if (error.name === "Fetch User") {
    return error.message;
  }

  if (Object.hasOwn(error, "response") && Object.hasOwn(error.response, "data")) {
    if (Object.hasOwn(error.response.data, "errors")) {
      return error.response.data.errors;
    }

    if (Object.hasOwn(error.response.data, "message")) {
      return error.response.data.message;
    }
  }

  if (Object.hasOwn(error, "message")) {
    return error.message;
  }

  if (!error.response) {
    console.error(`API ${error.config.url} not found`);

    return errorMessage;
  }

  if (import.meta.env.DEV) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  }

  return errorMessage;
}
