// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "header": "Welcome to My Resume",
      "contacts.title": "Contacts",
      "contacts.email": "Email",
      "contacts.phone": "Phone",
      "contacts.github": "GitHub",
      "projects.title": "Projects",
      "projects.description1": "Project 1 description",
      "projects.description2": "Project 2 description",
      "skills.title": "Skills",
      "skills.skill1": "Skill 1",
      "skills.skill2": "Skill 2",
      "skills.skill3": "Skill 3",
      "skills.skill4": "Skill 4"
    }
  },
  ru: {
    translation: {
      "header": "Добро пожаловать в мое резюме",
      "contacts.title": "Контакты",
      "contacts.email": "Эл. почта",
      "contacts.phone": "Телефон",
      "contacts.github": "GitHub",
      "projects.title": "Проекты",
      "projects.description1": "Описание проекта 1",
      "projects.description2": "Описание проекта 2",
      "skills.title": "Навыки",
      "skills.skill1": "Навык 1",
      "skills.skill2": "Навык 2",
      "skills.skill3": "Навык 3",
      "skills.skill4": "Навык 4"
    }
  },
  es: {
    translation: {
      "header": "Bienvenido a mi currículum",
      "contacts.title": "Contactos",
      "contacts.email": "Correo electrónico",
      "contacts.phone": "Teléfono",
      "contacts.github": "GitHub",
      "projects.title": "Proyectos",
      "projects.description1": "Descripción del proyecto 1",
      "projects.description2": "Descripción del proyecto 2",
      "skills.title": "Habilidades",
      "skills.skill1": "Habilidad 1",
      "skills.skill2": "Habilidad 2",
      "skills.skill3": "Habilidad 3",
      "skills.skill4": "Habilidad 4"
    }
  },
  eu: {
    translation: {
      "header": "Ongi etorri nire curriculumean",
      "contacts.title": "Kontaktua",
      "contacts.email": "Posta elektronikoa",
      "contacts.phone": "Telefonoa",
      "contacts.github": "GitHub",
      "projects.title": "Proiektuak",
      "projects.description1": "Proiektuaren 1 deskribapena",
      "projects.description2": "Proiektuaren 2 deskribapena",
      "skills.title": "Trebetasunak",
      "skills.skill1": "Trebetasuna 1",
      "skills.skill2": "Trebetasuna 2",
      "skills.skill3": "Trebetasuna 3",
      "skills.skill4": "Trebetasuna 4"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
