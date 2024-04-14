
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import './i18n';
import Header from "./components/header/Header";
import Slider from "./components/main/slider/Slider";
import Interesting from "./components/main/interesting/Interesting";
import Video from "./components/main/video/Video";
import './App.scss'
import Anons from "./components/main/anons/Anons";
import Error from "./components/main/error/Error";
import Learn from "./components/main/learn/Learn";
import Feedback from "./components/main/feedback/Feedback";
import About from "./components/main/about/About";
import Price from "./components/main/price-card/Price";
import Recive from "./components/main/recive/Recive";
import Questions from "./components/main/questions/Questions";
import Footer from "./components/footer/Footer";
import { HelmetProvider } from "react-helmet-async";
import MetaTags from "./components/MetaTags";


function App() {
  const { t } = useTranslation();
 
  return (
    <Suspense fallback={<div>...louder</div>}>
      <HelmetProvider>        
        <MetaTags/>
          <div className="App">
            <div className="page">
              <div className="page__wrap">
                  <Header />
                  <main className="main">               
                    <div className="main__wrap">
                      <div className="section-title">
                        <h1 className="title">{t('main.title')}</h1>
                        <div className="title-description">{t('main.description1')}<br/>{t('main.description2')}<br/>{t('main.description3')}</div>
                      </div>
                      <Slider />
                      <Interesting />
                      <Video />
                      <Anons />
                      <Error />
                      <Learn />
                      <Feedback />
                      <About />
                      <Price />
                      <Recive />
                      <Questions />
                      <Footer/>
                    </div>
                  </main> 
              </div>
            </div>
          </div>
        </HelmetProvider>
      </Suspense>
  );
}

export default App;
