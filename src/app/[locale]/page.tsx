import {hasLocale, useTranslations} from 'next-intl';
import {setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import {use} from "react";

type Props = {
    params: Promise<{locale: string}>;
};

export default function IndexPage({params}: Props) {
  // const {locale} = use(params); uncoment it to work on 16

  // if (!hasLocale(routing.locales, locale)) {
  //     notFound();
  // }

  // Enable static rendering
  //setRequestLocale(locale);

  const t = useTranslations('IndexPage');
  return <h1>{t('title')}</h1>;
}
