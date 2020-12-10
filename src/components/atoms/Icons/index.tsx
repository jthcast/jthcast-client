import React, { CSSProperties, SVGAttributes } from 'react';
import './Icons.scss';

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
  onClick?: () => void;
}

interface IconContentProps {
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
  onClick?: () => void;
  iconName: string;
}

interface IconDetailProps {
  [name: string]: { viewBox: string; d: string };
}

const icons: IconDetailProps = {
  IconAngleDown: {
    viewBox: '0 0 320 512',
    d:
      'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
  },
  IconArrowToTop: {
    viewBox: '64 64 896 896',
    d:
      'M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z',
  },
  IconBars: {
    viewBox: '0 0 448 512',
    d:
      'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
  },
  IconCommentDots: {
    viewBox: '0 0 512 512',
    d:
      'M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z',
  },
  IconEye: {
    viewBox: '0 0 576 512',
    d:
      'M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z',
  },
  IconEnvelope: {
    viewBox: '0 0 512 512',
    d:
      'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z',
  },
  IconEyeSlash: {
    viewBox: '0 0 640 512',
    d:
      'M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z',
  },
  IconGithub: {
    viewBox: '0 0 448 512',
    d:
      'M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z',
  },
  IconHome: {
    viewBox: '64 64 896 896',
    d:
      'M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z',
  },
  IconLaptopCode: {
    viewBox: '0 0 640 512',
    d:
      'M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z',
  },
  IconLink: {
    viewBox: '0 0 512 512',
    d:
      'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z',
  },
  IconLinkedIn: {
    viewBox: '0 0 448 512',
    d:
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
  },
  IconObjectGroup: {
    viewBox: '0 0 512 512',
    d:
      'M500 128c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v12H96V44c0-6.627-5.373-12-12-12H12C5.373 32 0 37.373 0 44v72c0 6.627 5.373 12 12 12h12v256H12c-6.627 0-12 5.373-12 12v72c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h72c6.627 0 12-5.373 12-12v-72c0-6.627-5.373-12-12-12h-12V128h12zm-52-64h32v32h-32V64zM32 64h32v32H32V64zm32 384H32v-32h32v32zm416 0h-32v-32h32v32zm-40-64h-12c-6.627 0-12 5.373-12 12v12H96v-12c0-6.627-5.373-12-12-12H72V128h12c6.627 0 12-5.373 12-12v-12h320v12c0 6.627 5.373 12 12 12h12v256zm-36-192h-84v-52c0-6.628-5.373-12-12-12H108c-6.627 0-12 5.372-12 12v168c0 6.628 5.373 12 12 12h84v52c0 6.628 5.373 12 12 12h200c6.627 0 12-5.372 12-12V204c0-6.628-5.373-12-12-12zm-268-24h144v112H136V168zm240 176H232v-24h76c6.627 0 12-5.372 12-12v-76h56v112z',
  },
  IconPlay: {
    viewBox: '0 0 448 512',
    d:
      'M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z',
  },
  IconSearch: {
    viewBox: '0 0 512 512',
    d:
      'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
  },
  IconSearchPlus: {
    viewBox: '0 0 512 512',
    d:
      'M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z',
  },
  IconSpinner: {
    viewBox: '0 0 1024 1024',
    d:
      'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
  },
  IconTimes: {
    viewBox: '0 0 352 512',
    d:
      'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  },
  IconTimesCircle: {
    viewBox: '0 0 512 512',
    d:
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
  },
  IconUser: {
    viewBox: '0 0 448 512',
    d:
      'M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z',
  },
  IconUserTie: {
    viewBox: '0 0 448 512',
    d:
      'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z',
  },
  IconLogo: {
    viewBox: '0 0 512 512',
    d:
      'M472.929 396.064c3.905 3.905 3.907 10.263-.142 14.019-102.927 95.484-263.807 93.168-363.922-6.948C8.749 303.02 6.433 142.14 101.917 39.213c3.756-4.049 10.113-4.047 14.019-.142l32.249 32.25c3.906 3.905 3.884 10.221.179 14.317-69.899 77.261-67.601 196.612 6.893 271.105 74.493 74.494 193.844 76.792 271.105 6.893 4.096-3.705 10.412-3.727 14.317.178l32.25 32.25z M416.925 82.239c7.435-1.993 14.24 4.812 12.247 12.247l-49.857 186.069c-1.992 7.435-11.287 9.926-16.73 4.482L226.374 148.826c-5.444-5.443-2.953-14.738 4.482-16.73l186.069-49.857z',
  },
};

const getRotateDegree = (viewBox: string) => {
  const viewBoxArray = viewBox.split(' ');

  return `${+viewBoxArray[2] / 2} ${+viewBoxArray[3] / 2}`;
};

const IconTemplate = ({
  className,
  style,
  spin,
  rotate,
  onClick,
  iconName,
}: IconContentProps): JSX.Element => {
  return (
    <svg
      viewBox={icons[iconName].viewBox}
      focusable="false"
      className={`jth-icon${className ? ` ${className}` : ``}${
        spin ? ' spin' : ``
      }`}
      style={style}
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        transform={
          rotate
            ? `rotate(${rotate} ${getRotateDegree(icons[iconName].viewBox)})`
            : undefined
        }
        d={icons[iconName].d}
      />
    </svg>
  );
};

const IconAngleDown = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconAngleDown';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconArrowToTop = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconArrowToTop';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconBars = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconBars';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconCommentDots = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconCommentDots';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconEye = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconEye';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconEnvelope = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconEnvelope';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconEyeSlash = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconEyeSlash';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconGithub = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconGithub';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconHome = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconHome';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLaptopCode = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLaptopCode';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLink = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLink';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLinkedIn = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLinkedIn';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconObjectGroup = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconObjectGroup';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconPlay = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconPlay';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSearch = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSearch';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSearchPlus = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSearchPlus';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconSpinner = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconSpinner';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconTimes = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconTimes';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconTimesCircle = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconTimesCircle';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconUser = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconUser';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconUserTie = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconUserTie';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLogo = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const icon = 'IconLogo';
  return (
    <IconTemplate
      className={className}
      style={style}
      spin={spin}
      rotate={rotate}
      onClick={onClick}
      iconName={icon}
    />
  );
};

const IconLogoColored = ({
  className,
  style,
  spin,
  rotate,
  onClick,
}: IconProps): JSX.Element => {
  const viewBox = '0 0 512 512';
  return (
    <svg
      viewBox={viewBox}
      focusable="false"
      className={`jth-icon${className ? ` ${className}` : ``}${
        spin ? ' spin' : ``
      }`}
      style={style}
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        transform={
          rotate ? `rotate(${rotate} ${getRotateDegree(viewBox)})` : undefined
        }
        fill="#614CF6"
        d="M472.929 396.064c3.905 3.905 3.907 10.263-.142 14.019-102.927 95.484-263.807 93.168-363.922-6.948C8.749 303.02 6.433 142.14 101.917 39.213c3.756-4.049 10.113-4.047 14.019-.142l32.249 32.25c3.906 3.905 3.884 10.221.179 14.317-69.899 77.261-67.601 196.612 6.893 271.105 74.493 74.494 193.844 76.792 271.105 6.893 4.096-3.705 10.412-3.727 14.317.178l32.25 32.25z"
      />
      <path
        transform={
          rotate ? `rotate(${rotate} ${getRotateDegree(viewBox)})` : undefined
        }
        fill="#F6A54C"
        d="M416.925 82.239c7.435-1.993 14.24 4.812 12.247 12.247l-49.857 186.069c-1.992 7.435-11.287 9.926-16.73 4.482L226.374 148.826c-5.444-5.443-2.953-14.738 4.482-16.73l186.069-49.857z"
      />
    </svg>
  );
};

export {
  IconAngleDown,
  IconArrowToTop,
  IconBars,
  IconCommentDots,
  IconEnvelope,
  IconEye,
  IconEyeSlash,
  IconGithub,
  IconHome,
  IconLaptopCode,
  IconLink,
  IconLinkedIn,
  IconObjectGroup,
  IconPlay,
  IconSearch,
  IconSearchPlus,
  IconSpinner,
  IconTimes,
  IconTimesCircle,
  IconUser,
  IconUserTie,
  IconLogo,
  IconLogoColored,
};
