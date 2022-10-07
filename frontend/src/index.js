import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import en from './resources/en.json'
import ua from './resources/ua.json'

const getLanguage = () => navigator.userLanguage ||
    (navigator.languages && navigator.languages.length && navigator.languages[0])
    || navigator.language
    || navigator.browserLanguage
    || navigator.systemLanguage
    || 'en';

i18next.init({
    resources: {en: {translation: en}, ua: {translation: ua}, ru: {translation: ua}},
    lng: getLanguage(),
    fallbackLng: "en"
})
    .then(() => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<React.StrictMode>
            <App/>
        </React.StrictMode>);

        reportWebVitals();
    })