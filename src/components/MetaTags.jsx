import React from 'react';
import { Helmet } from "react-helmet";

const MetaTags = ({ lang }) => {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{getTitle(lang)}</title>
      {/* Другие мета-теги */}
    </Helmet>
  );
};
const getTitle = (lang) => {
  switch (lang) {
    case 'en':
      return 'Your Website - English Title';
    case 'ru':
      return 'Ru';
    // Другие языки
    default:
      return 'Your Website';
  }
};

export default MetaTags;