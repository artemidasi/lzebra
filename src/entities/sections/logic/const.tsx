import iconSrc_1 from 'public/images/logic/1.png';
import iconSrc_2 from 'public/images/logic/2.png';
import iconSrc_3 from 'public/images/logic/3.png';

import { Item } from './type';

export const items: Item[] = [
  {
    iconSrc: iconSrc_1,
    title: 'Подключить',
    maxWidth: {
      desktop: 100,
      mobile: 60,
    },
    description:
      'Загрузите накладную / акт выполненных работ / строительную смету / счет фактуру / зарплатную ведомость. Эль-Зебра распознает документ и автоматически выгрузит нужные поля в таблицу или CRM',
    files: [
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.1C11.7655 6.00328 11.4355 5.92261 11.1403 5.76538C10.8451 5.60815 10.594 5.37938 10.41 5.1L9.6 3.9C9.41789 3.62347 9.16997 3.39648 8.8785 3.2394C8.58702 3.08231 8.26111 3.00005 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 13H17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 13H10"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        title: 'Local and web sourse',
      },
      {
        icon: (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 7.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 3.5H19C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V7.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 17.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V17.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.9996 16.5L14.0996 14.6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        title: 'DOCX/PDF/XLSX/JPEG/ECT',
      },
    ],
  },
  {
    iconSrc: iconSrc_2,
    title: 'Применить',
    maxWidth: {
      desktop: 78,
      mobile: 50,
    },
    description:
      'Проверьте загрузку данных в пункте назначения. Отчет можно скачать / проанализировать / показать руководству / передать в другой отдел',
    files: [
      {
        icon: (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 3.25H9C8.44772 3.25 8 3.69772 8 4.25V9.25C8 9.80228 8.44772 10.25 9 10.25H20C20.5523 10.25 21 9.80228 21 9.25V4.25C21 3.69772 20.5523 3.25 20 3.25Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 9.25L5 12.25L2 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14.25H9C8.44772 14.25 8 14.6977 8 15.25V20.25C8 20.8023 8.44772 21.25 9 21.25H20C20.5523 21.25 21 20.8023 21 20.25V15.25C21 14.6977 20.5523 14.25 20 14.25Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        title: 'WYSIWYG DB EDITOR',
      },
    ],
  },
  {
    iconSrc: iconSrc_3,
    title: 'Расширить',
    maxWidth: {
      desktop: 76,
      mobile: 48,
    },
    description:
      'Написать про то что начинаем с одного бизнес процесса и шаг за шагом расширяем внедрение во всех отделах компании',
    files: [
      {
        icon: (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.9902 6.98999L14.9202 10.43"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.1362 12.25C18.2054 13.198 17.095 13.9511 15.8698 14.4651C14.6447 14.9792 13.3294 15.244 12.0007 15.244C10.6721 15.244 9.3568 14.9792 8.13165 14.4651C6.9065 13.9511 5.79607 13.198 4.86523 12.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9998 21.25L18.8398 17.41"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 21.25L11.02 6.98999"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7.25C13.1046 7.25 14 6.35457 14 5.25C14 4.14543 13.1046 3.25 12 3.25C10.8954 3.25 10 4.14543 10 5.25C10 6.35457 10.8954 7.25 12 7.25Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        title: 'CUSTOM AI MACROS',
      },
    ],
  },
];
