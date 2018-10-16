import React from 'react';
export const ChevronDown = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
export const ChevroUp = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);
export const ArrowLeft = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);
export const ArrowRight = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
export const List = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3" y2="6" />
    <line x1="3" y1="12" x2="3" y2="12" />
    <line x1="3" y1="18" x2="3" y2="18" />
  </svg>
);
export const Feather = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17" y1="15" x2="9" y2="15" />
  </svg>
);
export const Check = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
export const More = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);
export const Minus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
export const Plus = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
export const Clock = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
export const Pin = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Money1 = props => (
  <svg
    width={props.size}
    height={props.size}
    viewBox={`0 0 ${props.size} ${props.size}`}
  >
    <defs>
      <path
        d="M11.1180347,4.29599778 L8.30905029,5.50200864 L13.3736544,8.13757647 C13.6548645,8.28391528 13.8312733,8.57458233 13.8312733,8.89159044 L13.8312733,9.51720657 C13.8316517,9.53181894 13.8316499,9.54640887 13.8312733,9.56096238 L13.8312733,12.7913489 C13.8315556,12.8039694 13.8315545,12.8165722 13.8312733,12.8291483 L13.8312733,16.1171327 C13.8315573,16.1297895 13.8315561,16.1424283 13.8312733,16.1550399 L13.8312733,18.1592079 L17.3061867,16.6818694 L17.3061867,14.0664756 C17.3056009,14.0482946 17.3056044,14.0301512 17.3061867,14.0120696 L17.3061867,10.7421653 C17.3055995,10.7239653 17.3056031,10.7058011 17.3061867,10.6876991 L17.3061867,7.59715272 C17.305809,7.58255451 17.3058108,7.56797859 17.3061867,7.55343891 L17.3061867,7.44771863 L11.1180347,4.29599778 Z M13.1505074,3.42337487 L18.5419523,6.16932054 C18.6360846,6.21726357 18.7186974,6.28131972 18.7871252,6.35713995 L20.7620834,5.4651715 L15.1656928,2.55817414 L13.1505074,3.42337487 Z M19.0061867,8.12354399 L19.0061867,9.42926128 L22.124293,8.10310549 C22.5562871,7.91937491 23.0554306,8.12063226 23.2391612,8.55262636 C23.4228918,8.98462046 23.2216344,9.48376393 22.7896403,9.66749451 L19.0061867,11.2766279 L19.0061867,12.7498702 L22.1222175,11.4148165 C22.5537223,11.2299396 23.0533983,11.429871 23.2382752,11.8613758 C23.423152,12.2928806 23.2232206,12.7925566 22.7917159,12.9774335 L19.0061867,14.5993316 L19.0061867,15.9591246 L22.1244017,14.6334343 C22.5564214,14.4497637 23.0555369,14.6510904 23.2392074,15.0831101 C23.4228779,15.5151297 23.2215512,16.0142452 22.7895316,16.1979157 L13.3197527,20.2239352 C13.3156398,20.2257226 13.3115101,20.2274783 13.3073639,20.2292022 L8.49319827,22.2759157 C8.26094089,22.3746586 7.99681465,22.365086 7.7723146,22.2497891 L0.978714598,18.7607891 C0.561124302,18.5463266 0.3964567,18.0339466 0.610919215,17.6163563 C0.82538173,17.198766 1.33776177,17.0340984 1.75535207,17.2485609 L8.19463179,20.555592 L12.1312733,18.8819526 L12.1312733,17.443305 L8.50564328,19.0510774 C8.27075616,19.1552372 8.00135817,19.1475558 7.77278776,19.0301812 L0.978454431,15.5411812 C0.560854728,15.326737 0.396164651,14.8143641 0.610608849,14.3967644 C0.825053048,13.9791647 1.33742587,13.8144747 1.75502557,14.0289188 L8.18792539,17.3323169 L12.1312733,15.5836537 L12.1312733,14.1212006 L8.50766046,15.7393547 C8.27233804,15.8444399 8.00204662,15.8370843 7.77278776,15.7193562 L0.978454431,12.2303562 C0.560854728,12.015912 0.396164651,11.5035391 0.610608849,11.0859394 C0.825053048,10.6683397 1.33742587,10.5036497 1.75502557,10.7180938 L8.18671822,14.020872 L12.1312733,12.2593984 L12.1312733,10.8545565 L8.51014517,12.4851234 C8.26828957,12.5940292 7.98945898,12.58379 7.75624245,12.4574387 L0.753621851,8.66358251 C0.608349666,8.58487744 0.495214117,8.46996871 0.419338507,8.33609463 C0.335891734,8.25815651 0.26687959,8.16203727 0.218944388,8.05038883 C0.0337418662,7.61902373 0.233296067,7.11919691 0.66466117,6.93399439 L14.8649278,0.837244388 C15.0990703,0.736717529 15.3659611,0.746535283 15.5920848,0.863993344 L22.8570958,4.63774131 C23.1951996,4.81336647 23.3657994,5.18445156 23.3024,5.54075054 C23.3409786,5.89633285 23.1506526,6.2517409 22.8069789,6.40695738 L19.0061867,8.12354399 Z M6.29120348,6.36835206 L2.8293143,7.85468139 L8.19595429,10.7622016 L11.7013619,9.18374275 L6.29120348,6.36835206 Z"
        id="path-1"
      />
    </defs>
    <g
      id="icon-/-money"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Icon-🎨" transform="translate(0.000000, 1.000000)">
        <mask id="mask-2" fill="white">
          <use href="#path-1" />
        </mask>
        <use id="Mask" fill="#231F20" fillRule="nonzero" href="#path-1" />
        <g id="color-/-black" mask="url(#mask-2)" fill={props.color}>
          <g transform="translate(0.000000, -1.000000)" id="Shape">
            <rect x="0" y="0" width="24" height="24" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const Money = props => (
  <svg
    width="24px"
    height="22px"
    viewBox="0 0 24 22"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path
        d="M2.4,3.6 L2.4,2.4 C2.4,1.0745166 3.4745166,0 4.8,0 L19.2,0 C20.5254834,0 21.6,1.0745166 21.6,2.4 L21.6,3.6 C21.6,4.2627417 21.0627417,4.8 20.4,4.8 C19.7372583,4.8 19.2,4.2627417 19.2,3.6 C19.2,2.9372583 18.6627417,2.4 18,2.4 L6,2.4 C5.3372583,2.4 4.8,2.9372583 4.8,3.6 C4.8,4.2627417 4.2627417,4.8 3.6,4.8 C2.9372583,4.8 2.4,4.2627417 2.4,3.6 Z M14.4,14.4 C14.4196741,15.2700092 13.9668572,16.0825059 13.2165887,16.5234143 C12.4663201,16.9643227 11.5361621,16.9645553 10.7856731,16.5240222 C10.0351842,16.0834891 9.58196102,15.2712189 9.6012,14.4012 C9.63004139,13.0969441 10.6954386,12.0545852 12.0000133,12.054259 C13.304588,12.0539328 14.3705063,13.0957587 14.4,14.4 Z M21.6,11.5884 L19.6116,9.6 C21.5664,9.6 21.6,10.0608 21.6,11.5884 Z M19.6116,19.2 L21.6,17.2116 C21.6,19.164 21.144,19.2 19.6116,19.2 Z M7.782,19.2 L2.982,14.4 L7.782,9.6 L16.218,9.6 L21.018,14.4 L16.218,19.2 L7.782,19.2 Z M2.4,17.2116 L4.3884,19.2 C2.436,19.2 2.4,18.744 2.4,17.2116 Z M4.3884,9.6 L2.4,11.5884 C2.4,9.6336 2.8608,9.6 4.3884,9.6 Z M21.6,7.2 L2.4,7.2 C1.0745166,7.2 0,8.2745166 0,9.6 L0,19.2 C0,20.5254834 1.0745166,21.6 2.4,21.6 L21.6,21.6 C22.9254834,21.6 24,20.5254834 24,19.2 L24,9.6 C24,8.2745166 22.9254834,7.2 21.6,7.2 Z"
        id="path-1"
      />
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Privat_01.2" transform="translate(-675.000000, -1454.000000)">
        <g id="02" transform="translate(215.000000, 1144.000000)">
          <g id="Stacked-Group-4" transform="translate(0.000000, 245.000000)">
            <g id="#1-copy" transform="translate(390.000000, 0.000000)">
              <g id="icon" transform="translate(40.000000, 34.000000)">
                <g
                  id="icon-/-money-copy"
                  transform="translate(30.000000, 30.000000)"
                >
                  <g id="Icon-🎨" transform="translate(0.000000, 1.000000)">
                    <g>
                      <mask id="mask-2" fill="white">
                        <use href="#path-1" />
                      </mask>
                      <use
                        id="Mask"
                        fill="#000000"
                        fill-rule="nonzero"
                        href="#path-1"
                      />
                      <g
                        id="Color/primary/blue"
                        mask="url(#mask-2)"
                        fill="#108EC8"
                      >
                        <g transform="translate(0.000000, -1.000000)">
                          <rect x="0" y="0" width="24" height="24" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="coins" transform="translate(0.000000, 4.000000)" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
export default List;
