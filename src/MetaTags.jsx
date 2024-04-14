import React from 'react';
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const MetaTags = ({ lang, title, description, keywords }) => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <html lang={t("seo.lang")} />
      <title>{lang}</title>
      <meta name="keywords" content={t("seo.keywords")} />
      <meta name="description" content={t("seo.description")} />
      <title>{t("seo.title") }</title>
    </Helmet>
  );
};


export default MetaTags;
