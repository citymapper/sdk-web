import React from 'react'
import SVGIcon from '../SVGIcon'

const ServiceIconTrolleybus: React.FC<React.ComponentProps<typeof SVGIcon>> = (
  props
) => {
  return (
    <SVGIcon
      viewBox="0 0 20 24"
      fill="none"
      width="20px"
      height="24px"
      {...props}
    >
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.94267 1.25024H4.75134C4.47521 1.25024 4.25136 1.02639 4.25136 0.750259C4.25136 0.47413 4.47521 0.250282 4.75134 0.250282H6.23882C6.24713 0.250075 6.25542 0.250076 6.2637 0.250282H9.23943C9.24774 0.250075 9.25603 0.250076 9.26431 0.250282H11.1276C11.4038 0.250282 11.6276 0.47413 11.6276 0.750259C11.6276 1.02639 11.4038 1.25024 11.1276 1.25024H10.0613L11.1998 3.52723C11.3232 3.77421 11.2231 4.07453 10.9762 4.19802C10.7292 4.32151 10.4289 4.2214 10.3054 3.97442L8.94328 1.25024H7.06065L8.19914 3.52723C8.32263 3.77421 8.22252 4.07453 7.97555 4.19802C7.72857 4.32151 7.42825 4.2214 7.30476 3.97442L5.94267 1.25024ZM3.25104 20.004C3.25104 19.5207 3.64285 19.1289 4.12617 19.1289H5.00144C5.48476 19.1289 5.87657 19.5207 5.87657 20.004V22.0045C5.87657 22.4878 5.48476 22.8797 5.00144 22.8797H4.12617C3.64285 22.8797 3.25104 22.4878 3.25104 22.0045V20.004ZM14.1283 20.004C14.1283 19.5207 14.5201 19.1289 15.0034 19.1289H15.8787C16.362 19.1289 16.7538 19.5207 16.7538 20.004V22.0045C16.7538 22.4878 16.362 22.8797 15.8787 22.8797H15.0034C14.5201 22.8797 14.1283 22.4878 14.1283 22.0045V20.004Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.02001 6.80179C1.88851 7.20648 1.82124 7.65774 1.78682 8.2521C1.77484 8.25182 1.76282 8.25168 1.75076 8.25168C0.922167 8.25168 0.250458 8.92339 0.250458 9.75198V12.0024C0.250458 12.831 0.922167 13.5027 1.75076 13.5027V17.1285C1.75076 18.0593 1.75076 18.5247 1.87315 18.9014C2.12049 19.6626 2.71732 20.2595 3.47857 20.5068C3.85523 20.6292 4.32065 20.6292 5.25148 20.6292H14.7534C15.6842 20.6292 16.1497 20.6292 16.5263 20.5068C17.2876 20.2595 17.8844 19.6626 18.1317 18.9014C18.2541 18.5247 18.2541 18.0593 18.2541 17.1285V13.5027C19.0827 13.5027 19.7544 12.831 19.7544 12.0024V9.75198C19.7544 8.92339 19.0827 8.25168 18.2541 8.25168C18.2421 8.25168 18.23 8.25183 18.2181 8.25211C18.1836 7.65775 18.1164 7.20648 17.9849 6.80179C17.4407 5.12704 16.1277 3.81401 14.4529 3.26985C13.6243 3.00061 12.6004 3.00061 10.5526 3.00061H9.45233C7.4045 3.00061 6.38059 3.00061 5.55194 3.26985C3.87719 3.81401 2.56417 5.12704 2.02001 6.80179ZM7.0018 6.75137C6.5875 6.75137 6.25165 6.41552 6.25165 6.00122C6.25165 5.58692 6.5875 5.25107 7.0018 5.25107H13.003C13.4173 5.25107 13.7532 5.58692 13.7532 6.00122C13.7532 6.41552 13.4173 6.75137 13.003 6.75137H7.0018ZM3.30611 9.02919C3.25104 9.19869 3.25104 9.40813 3.25104 9.827V12.6776C3.25104 13.0965 3.25104 13.3059 3.30611 13.4754C3.41742 13.8179 3.68599 14.0865 4.02855 14.1978C4.19805 14.2529 4.40748 14.2529 4.82636 14.2529H15.1785C15.5973 14.2529 15.8068 14.2529 15.9763 14.1978C16.3188 14.0865 16.5874 13.8179 16.6987 13.4754C16.7538 13.3059 16.7538 13.0965 16.7538 12.6776V9.827C16.7538 9.40813 16.7538 9.19869 16.6987 9.02919C16.5874 8.68663 16.3188 8.41806 15.9763 8.30675C15.8068 8.25168 15.5973 8.25168 15.1785 8.25168H4.82636C4.40748 8.25168 4.19805 8.25168 4.02855 8.30675C3.68599 8.41806 3.41742 8.68663 3.30611 9.02919ZM6.12609 17.2508C6.12609 18.0102 5.51047 18.6258 4.75106 18.6258C3.99165 18.6258 3.37603 18.0102 3.37603 17.2508C3.37603 16.4913 3.99165 15.8757 4.75106 15.8757C5.51047 15.8757 6.12609 16.4913 6.12609 17.2508ZM16.6258 17.2508C16.6258 18.0102 16.0101 18.6258 15.2507 18.6258C14.4913 18.6258 13.8757 18.0102 13.8757 17.2508C13.8757 16.4913 14.4913 15.8757 15.2507 15.8757C16.0101 15.8757 16.6258 16.4913 16.6258 17.2508Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
export default ServiceIconTrolleybus
