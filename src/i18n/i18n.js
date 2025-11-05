// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    "en": {
      "translation": {
        "header": {
          "intro": "IT technician with experience in ",
          "systems": "Windows and Linux",
          "skills_intro": "Knowledge of ",
          "skills_list": "HTML, CSS, JavaScript, React",
          "version_control": " and version control systems ",
          "git": "Git, GitHub",
          "expertise_intro": "Skilled in ",
          "expertise_list": "technical support, digital document management, hardware and peripherals maintenance, and creating professional presentations using PowerPoint, Canva, and Figma.",
          "focus": "Focused on incident resolution, system performance optimization,"
        },
        "selectLanguage": "Select your preferred language",
        "contacts": {
          "title": "Contacts",
          "email": "Email",
          "phone": "Phone",
          "github": "GitHub"
        },
        "projects": {
          "title": "Projects",
          "description1": "Project 1 description",
          "description2": "Project 2 description"
        },
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
            "teamwork": "Teamwork and collaboration in academic and work projects.",
            "leadership": "Leadership and task coordination.",
            "communication": "Clear and effective communication.",
            "problemSolving": "Problem solving and incident analysis.",
            "planning": "Project and activity planning and organization."
          }
        },
        "menu": {
          "languages": "Languages",
          "aboutMe": "About Me",
          "skills": "Skills",
          "education": "Education",
          "experience": "Experience",
          "history": "My History"
        },
        "languages": {
          "spanish": "Spanish",
          "basque": "Basque",
          "english": "English",
          "ukrainian": "Ukrainian",
          "russian": "Russian",
          "learningBasque": "Learning",
          "learningEnglish": "Learning"
        },
        "En": "EN",
        "Ru": "RU",
        "ES": "ES",
        "EU": "EU"
      }
    },
    "ru": {
      "translation": {
        "header": {
          "intro": "Технический специалист с опытом работы в ",
          "systems": "Windows и Linux",
          "skills_intro": "Знания в области ",
          "skills_list": "HTML, CSS, JavaScript, React",
          "version_control": " и системах контроля версий ",
          "git": "Git, GitHub",
          "expertise_intro": "Опыт в ",
          "expertise_list": "технической поддержке, цифровом документообороте, обслуживании оборудования и периферии, а также создании профессиональных презентаций с PowerPoint, Canva и Figma.",
          "focus": "Сфокусирована на решении инцидентов, оптимизации производительности системы и работе с пользователями."
        },
        "selectLanguage": "Выберите предпочитаемый язык",
        "contacts": {
          "title": "Контакты",
          "email": "Эл. почта",
          "phone": "Телефон",
          "github": "GitHub"
        },
        "projects": {
          "title": "Проекты",
          "description1": "Описание проекта 1",
          "description2": "Описание проекта 2"
        },
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
            "teamwork": "Работа в команде и сотрудничество в академических и рабочих проектах.",
            "leadership": "Лидерство и координация задач.",
            "communication": "Чёткая и эффективная коммуникация.",
            "problemSolving": "Решение проблем и анализ инцидентов.",
            "planning": "Планирование и организация проектов и мероприятий."
          }
        },
        "menu": {
          "languages": "Языки",
          "aboutMe": "Обо мне",
          "skills": "Навыки",
          "education": "Образование",
          "experience": "Опыт работы",
          "history": "Моя история"
        },
        "languages": {
          "spanish": "Испанский",
          "basque": "Баскский",
          "english": "Английский",
          "ukrainian": "Украинский",
          "russian": "Русский",
          "learningBasque": "Изучение",
          "learningEnglish": "Изучение"
        },
        "En": "EN",
        "Ru": "RU",
        "ES": "ES",
        "EU": "EU"
      }
    },
    "es": {
      "translation": {
        "header": {
          "intro": "Técnico en informática con experiencia en ",
          "systems": "Windows y Linux",
          "skills_intro": "Conocimientos en ",
          "skills_list": "HTML, CSS, JavaScript, React",
          "version_control": " y sistemas de control de versiones ",
          "git": "Git, GitHub",
          "expertise_intro": "Capacitado en ",
          "expertise_list": "soporte técnico, gestión documental digital, mantenimiento de hardware y periféricos, y creación de presentaciones profesionales con PowerPoint, Canva y Figma.",
          "focus": "Enfocado en la resolución de incidencias, optimización del rendimiento del sistema y atención al usuario."
        },
        "selectLanguage": "Seleccione su idioma preferido",
        "contacts": {
          "title": "Contactos",
          "email": "Correo electrónico",
          "phone": "Teléfono",
          "github": "GitHub"
        },
        "projects": {
          "title": "Proyectos",
          "description1": "Descripción del proyecto 1",
          "description2": "Descripción del proyecto 2"
        },
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
            "teamwork": "Comunicación y trabajo en equipo: Coordinación con usuarios y departamentos técnicos."
          },
          "social": {
            "teamwork": "Trabajo en equipo y colaboración en proyectos académicos y laborales.",
            "leadership": "Liderazgo y coordinación de tareas.",
            "communication": "Comunicación clara y efectiva.",
            "problemSolving": "Resolución de problemas y análisis de incidencias.",
            "planning": "Planificación y organización de proyectos y actividades."
          }
        },
        "menu": {
          "languages": "Idiomas",
          "aboutMe": "Sobre mí",
          "skills": "Habilidades",
          "education": "Educación",
          "experience": "Experiencia",
          "history": "Mi historia"
        },
        "languages": {
          "spanish": "Español",
          "basque": "Vasco",
          "english": "Inglés",
          "ukrainian": "Ucraniano",
          "russian": "Ruso",
          "learningBasque": "Aprendiendo",
          "learningEnglish": "Aprendiendo"
        },
        "En": "EN",
        "Ru": "RU",
        "ES": "ES",
        "EU": "EU"
      }
    },
    "eu": {
      "translation": {
        "header": {
          "intro": "Informatika teknikaria esperientziarekin ",
          "systems": "Windows eta Linux sistemetan",
          "skills_intro": "Ezagutza hauek ditu: ",
          "skills_list": "HTML, CSS, JavaScript, React",
          "version_control": " eta bertsio-kontrol sistemetan ",
          "git": "Git, GitHub",
          "expertise_intro": "Gaitasunak ditu ",
          "expertise_list": "laguntza teknikoan, dokumentu digitalen kudeaketan, hardware eta periferikoen mantentze-lanetan, eta aurkezpen profesionalak sortzen PowerPoint, Canva eta Figma erabiliz.",
          "focus": "Arazoak konpontzera, sistemaren errendimendua hobetzeko eta erabiltzaileen arreta eskaintzera bideratua."
        },
        "selectLanguage": "Hautatu nahiago duzun hizkuntza",
        "contacts": {
          "title": "Kontaktua",
          "email": "Posta elektronikoa",
          "phone": "Telefonoa",
          "github": "GitHub"
        },
        "projects": {
          "title": "Proiektuak",
          "description1": "Proiektuaren 1 deskribapena",
          "description2": "Proiektuaren 2 deskribapena"
        },
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
            "projectManagement": "Proiektu kudeaketa: Trello, Jira erabilera zereginak planifikatzeko eta jarraipena egiteko.",
            "teamwork": "Komunikazioa eta talde lana: erabiltzaileekin eta teknikako sailen arteko koordinazioa."
          },
          "social": {
            "teamwork": "Talde-lana eta lankidetza ikasketa eta lan proiektuetan.",
            "leadership": "Lidergoa eta zereginak koordinatzea.",
            "communication": "Komunikazio argia eta eraginkorra.",
            "problemSolving": "Arazoak konpontzea eta gertakariak aztertzea.",
            "planning": "Proiektu eta jardueren planifikazioa eta antolaketa."
          }
        },
        "menu": {
          "languages": "Hizkuntzak",
          "aboutMe": "Ni buruz",
          "skills": "Gaitasunak",
          "education": "Hezkuntza",
          "experience": "Esperientzia",
          "history": "Nire historia"
        },
        "languages": {
          "spanish": "Gaztelania",
          "basque": "Euskara",
          "english": "Ingelesa",
          "ukrainian": "Ukrainiera",
          "russian": "Errusiera",
          "learningBasque": "Ikasten",
          "learningEnglish": "Ikasten"
        },
        "En": "EN",
        "Ru": "RU",
        "ES": "ES",
        "EU": "EU"
      },
        "social": {
          "teamwork": "Talde-lana eta lankidetza ikasketa eta lan proiektuetan.",
          "leadership": "Lidergoa eta zereginak koordinatzea.",
          "communication": "Komunikazio argia eta eraginkorra.",
          "problemSolving": "Arazoak konpontzea eta gertakariak aztertzea.",
          "planning": "Proiektu eta jardueren planifikazioa eta antolaketa."
        }
      },
      
    };
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',          // Язык по умолчанию — испанский
    fallbackLng: 'en',  // Если перевода нет — английский
    interpolation: { escapeValue: false },
  });

export default i18n;
