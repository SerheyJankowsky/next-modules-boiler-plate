import en from "./src/modules/localization/messages/en.json";

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
