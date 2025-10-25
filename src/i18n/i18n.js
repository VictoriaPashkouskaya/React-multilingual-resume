// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "header": "Welcome to My Resume",
      "selectLanguage": "Select your preferred language",
      "contacts.title": "Contacts",
      "contacts.email": "Email",
      "contacts.phone": "Phone",
      "contacts.github": "GitHub",
      "projects.title": "Projects",
      "projects.description1": "Project 1 description",
      "projects.description2": "Project 2 description",
      "skills": {
        "title": "Skills",
        "categoryDigital": "Digital / Technical",
        "categorySocial": "Social / Interpersonal",
        "digital": {
          "systems": "Operating systems: installation, configuration and maintenance of Windows, Linux and macOS.",
          "office": "Office suite: Advanced use of Microsoft Office (Word, Excel, PowerPoint, Access).",
          "presentation": "Presentation & design tools: PowerPoint, Canva, Figma; creation of visual presentations and prototypes.",
          "googleTools": "Google Workspace tools: Drive, Gmail, Calendar, Meet, Keep, Docs.",
          "hardware": "Hardware: diagnosis, cleaning, assembly, maintenance of equipment and installation of components.",
          "peripherals": "Peripherals: basic configuration and maintenance of printers, scanners and external devices.",
          "docs": "Document management: organization and digital filing, version control, cloud storage.",
          "networks": "Networks: basic knowledge of TCP/IP, DHCP, DNS, VPN, routers and switches.",
          "security": "IT security: data protection, backups, management of access permissions.",
          "webDev": "Web development: HTML5, CSS3, JavaScript, React, Bootstrap, responsive design.",
          "git": "Version control: Git, GitHub, GitLab.",
          "databases": "Databases: basic knowledge of MySQL, MongoDB.",
          "virtualization": "Virtualization: experience with VMware, VirtualBox.",
          "support": "Technical support: incident resolution, remote assistance, internal customer support.",
          "projectManagement": "Project management: use of Trello, Jira for planning and task tracking.",
          "teamwork": "Communication and teamwork: coordination with users and technical departments."
        },
        "social": {
          "teamwork": "Communication and teamwork: coordination with users and technical departments.",
          "teamwork": "Teamwork and collaboration in academic and work projects.",
          "leadership": "Leadership and task coordination.",
          "communication": "Clear and effective communication.",
          "problemSolving": "Problem solving and incident analysis.",
          "planning": "Project and activity planning and organization."
        }
      }
    }
  },

  ru: {
    translation: {
      "header": "Добро пожаловать в мое резюме",
      "selectLanguage": "Выберите предпочитаемый язык",
      "contacts.title": "Контакты",
      "contacts.email": "Эл. почта",
      "contacts.phone": "Телефон",
      "contacts.github": "GitHub",
      "projects.title": "Проекты",
      "projects.description1": "Описание проекта 1",
      "projects.description2": "Описание проекта 2",
      "skills": {
        "title": "Навыки",
        "categoryDigital": "Цифровые / Технические",
        "categorySocial": "Социальные / Межличностные",
        "digital": {
          "systems": "Операционные системы: установка, настройка и обслуживание Windows, Linux и macOS.",
          "office": "Офисные приложения: продвинутый уровень работы с Microsoft Office (Word, Excel, PowerPoint, Access).",
          "presentation": "Инструменты презентаций и дизайна: PowerPoint, Canva, Figma; создание визуальных презентаций и прототипов.",
          "googleTools": "Инструменты Google Workspace: Диск, Gmail, Календарь, Meet, Keep, Документы.",
          "hardware": "Аппаратное обеспечение: диагностика, чистка, сборка, обслуживание ПК и установка компонентов.",
          "peripherals": "Периферия: базовая конфигурация и обслуживание принтеров, сканеров и внешних устройств.",
          "docs": "Управление документами: организация и цифровой архив, контроль версий, облачное хранение.",
          "networks": "Сети: базовые знания TCP/IP, DHCP, DNS, VPN, роутеров и коммутаторов.",
          "security": "Информационная безопасность: защита данных, резервные копии, управление правами доступа.",
          "webDev": "Веб-разработка: HTML5, CSS3, JavaScript, React, Bootstrap, адаптивный дизайн.",
          "git": "Контроль версий: Git, GitHub, GitLab.",
          "databases": "Базы данных: базовые знания MySQL, MongoDB.",
          "virtualization": "Виртуализация: опыт работы с VMware, VirtualBox.",
          "support": "Техническая поддержка: решение инцидентов, удалённая помощь, поддержка внутренних пользователей.",
          "projectManagement": "Управление проектами: использование Trello, Jira для планирования и отслеживания задач.",
          "teamwork": "Коммуникация и командная работа: координация с пользователями и техническими отделами."
        },
        "social": {
          "teamwork": "Коммуникация и командная работа: координация с пользователями и техническими отделами.",
          "teamwork": "Работа в команде и сотрудничество в академических и рабочих проектах.",
          "leadership": "Лидерство и координация задач.",
          "communication": "Чёткая и эффективная коммуникация.",
          "problemSolving": "Решение проблем и анализ инцидентов.",
          "planning": "Планирование и организация проектов и мероприятий."
        }
      }
    }
  },

  es: {
    translation: {
      "header": "Bienvenido a mi currículum",
      "selectLanguage": "Seleccione su idioma preferido",
      "contacts.title": "Contactos",
      "contacts.email": "Correo electrónico",
      "contacts.phone": "Teléfono",
      "contacts.github": "GitHub",
      "projects.title": "Proyectos",
      "projects.description1": "Descripción del proyecto 1",
      "projects.description2": "Descripción del proyecto 2",
      "skills": {
        "title": "Competencias",
        "categoryDigital": "Competencia Digital: Técnicas / Digitales",
        "categorySocial": "Sociales / Interpersonales",
        "digital": {
          "systems": "Sistemas operativos: Instalación, configuración y mantenimiento de Windows, Linux y macOS.",
          "office": "Ofimática: Uso avanzado de Microsoft Office (Word, Excel, PowerPoint, Access).",
          "presentation": "Herramientas de presentación y diseño: PowerPoint, Canva, Figma; creación de presentaciones visuales y prototipos.",
          "googleTools": "Herramientas de Google Workspace: Drive, Gmail, Calendar, Meet, Keep, Docs.",
          "hardware": "Hardware: Diagnóstico, limpieza, ensamblaje, mantenimiento de equipos e instalación de componentes.",
          "peripherals": "Periféricos: Configuración y mantenimiento básico de impresoras, escáneres y dispositivos externos.",
          "docs": "Gestión documental: Organización y archivo digital, control de versiones, almacenamiento en la nube.",
          "networks": "Redes: Conocimientos básicos de TCP/IP, DHCP, DNS, VPN, routers y switches.",
          "security": "Seguridad informática: Protección de datos, copias de seguridad, gestión de permisos de acceso.",
          "webDev": "Desarrollo web: HTML5, CSS3, JavaScript, React, Bootstrap, diseño responsivo.",
          "git": "Control de versiones: Git, GitHub, GitLab.",
          "databases": "Bases de datos: Conocimientos básicos de MySQL, MongoDB.",
          "virtualization": "Virtualización: Experiencia con VMware, VirtualBox.",
          "support": "Soporte técnico: Resolución de incidencias, asistencia remota, atención al cliente interno.",
          "projectManagement": "Gestión de proyectos: Uso de Trello, Jira para planificación y seguimiento de tareas.",
                },
        "social": {
          "teamwork": "Comunicación y trabajo en equipo: Coordinación con usuarios y departamentos técnicos.",
          "teamwork": "Trabajo en equipo y colaboración en proyectos académicos y laborales.",
          "leadership": "Liderazgo y coordinación de tareas.",
          "communication": "Comunicación clara y efectiva.",
          "problemSolving": "Resolución de problemas y análisis de incidencias.",
          "planning": "Planificación y organización de proyectos y actividades."
        }
      }
    }
  },

  eu: {
    translation: {
      "header": "Ongi etorri nire curriculumean",
      "selectLanguage": "Hautatu nahiago duzun hizkuntza",
      "contacts.title": "Kontaktua",
      "contacts.email": "Posta elektronikoa",
      "contacts.phone": "Telefonoa",
      "contacts.github": "GitHub",
      "projects.title": "Proiektuak",
      "projects.description1": "Proiektuaren 1 deskribapena",
      "projects.description2": "Proiektuaren 2 deskribapena",
      "skills": {
        "title": "Gaitasunak",
        "categoryDigital": "Digitalak / Teknikoak",
        "categorySocial": "Gizarte / Elkarreragileak",
        "digital": {
          "systems": "Sistema eragileak: Windows, Linux eta macOS instalazioa, konfigurazioa eta mantentzea.",
          "office": "Ofimatika: Microsoft Office erabilera aurreratua (Word, Excel, PowerPoint, Access).",
          "presentation": "Aurkezpen eta diseinu tresnak: PowerPoint, Canva, Figma; aurkezpen bisualak eta prototipoak sortzea.",
          "googleTools": "Google Workspace tresnak: Drive, Gmail, Calendar, Meet, Keep, Docs.",
          "hardware": "Hardwarea: diagnostikoa, garbiketa, muntaketa, ekipamenduaren mantentzea eta osagaiak instalatzea.",
          "peripherals": "Periferikoak: inprimagailu, eskaneatzaile eta kanpoko gailuen oinarrizko konfigurazioa eta mantentzea.",
          "docs": "Dokumentuen kudeaketa: antolaketa eta artxibatze digitalean, bertsio kontrola, hodeiko biltegiratzea.",
          "networks": "Sareak: TCP/IP, DHCP, DNS, VPN, router eta switchen oinarrizko ezagutzak.",
          "security": "Segurtasun informatikoa: datuen babesa, segurtasun kopiak, sarbide baimen kudeaketa.",
          "webDev": "Web garapena: HTML5, CSS3, JavaScript, React, Bootstrap, erantzunkizuneko diseinua.",
          "git": "Bertsio kontrola: Git, GitHub, GitLab.",
          "databases": "Datu baseak: MySQL, MongoDB oinarrizko ezagutza.",
          "virtualization": "Birtualizazioa: VMware eta VirtualBox esperientzia.",
          "support": "Laguntza teknikoa: arazoen konponbidea, urruneko laguntza, barne bezeroen zerbitzua.",
        },
        "social": {
          "projectManagement": "Proiektu kudeaketa: Trello, Jira erabilera zereginak planifikatzeko eta jarraipena egiteko.",
          "teamwork": "Komunikazioa eta talde lana: erabiltzaileekin eta teknikako sailen arteko koordinazioa.",          "teamwork": "Talde-lana eta lankidetza ikasketa eta lan proiektuetan.",
          "leadership": "Lidergoa eta zereginak koordinatzea.",
          "communication": "Komunikazio argia eta eraginkorra.",
          "problemSolving": "Arazoak konpontzea eta gertakariak aztertzea.",
          "planning": "Proiektu eta jardueren planifikazioa eta antolaketa."
        }
      }
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
