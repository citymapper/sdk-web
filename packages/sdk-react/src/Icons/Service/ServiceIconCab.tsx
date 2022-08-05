import React from 'react'
import SVGIcon from '../SVGIcon'

const ServiceIconCab: React.FC<React.ComponentProps<typeof SVGIcon>> = (
  props
) => {
  return (
    <SVGIcon
      width="18px"
      height="24px"
      viewBox="0 0 18 24"
      fill="none"
      {...props}
    >
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00001 5.25V2.89993C6.00001 2.5277 6.00001 2.34158 6.04896 2.19095C6.14787 1.88653 6.38654 1.64785 6.69097 1.54894C6.84159 1.5 7.02771 1.5 7.39995 1.5H10.6001C10.9723 1.5 11.1584 1.5 11.3091 1.54894C11.6135 1.64785 11.8522 1.88653 11.9511 2.19095C12 2.34158 12 2.5277 12 2.89993V5.25H6.00001ZM2.75013 17.25C2.26681 17.25 1.875 17.6418 1.875 18.1251V20.1249C1.875 20.6082 2.26681 21 2.75013 21H3.62487C4.10819 21 4.5 20.6082 4.5 20.1249V18.1251C4.5 17.6418 4.10819 17.25 3.62487 17.25H2.75013ZM14.3751 17.25C13.8918 17.25 13.5 17.6418 13.5 18.1251V20.1249C13.5 20.6082 13.8918 21 14.3751 21H15.2499C15.7332 21 16.125 20.6082 16.125 20.1249V18.1251C16.125 17.6418 15.7332 17.25 15.2499 17.25H14.3751ZM12.75 14.25H5.25005V17.25H12.75V14.25Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.96469 8.25163L1.96469 8.25162C2.14287 7.138 2.23196 6.58119 2.44442 6.13116C2.87294 5.22349 3.67046 4.54342 4.63444 4.26369C5.11238 4.125 5.67627 4.125 6.80407 4.125H11.1958C12.3236 4.125 12.8875 4.125 13.3655 4.26369C14.3294 4.54342 15.127 5.22349 15.5555 6.13116C15.7679 6.58119 15.857 7.138 16.0352 8.25163L16.5048 11.1863C17.2279 11.5631 17.7533 12.2463 17.9244 13.0571C18.0221 13.5199 17.9459 14.0914 17.7934 15.2343L17.689 16.0161C17.5908 16.7522 17.5417 17.1202 17.4087 17.4178C17.1405 18.0181 16.6231 18.471 15.9925 18.6575C15.68 18.75 15.3087 18.75 14.5661 18.75H3.48259C2.74626 18.75 2.37809 18.75 2.06745 18.6587C1.44077 18.4746 0.925009 18.0273 0.654102 17.4329C0.519814 17.1383 0.467747 16.7739 0.363614 16.0449L0.252849 15.2696C0.0884235 14.1186 0.00621099 13.5431 0.101009 13.077C0.265098 12.2702 0.779776 11.587 1.49239 11.2035L1.96469 8.25163ZM7.02258 15.2011L7.03301 15.2048C7.04593 15.2094 7.07033 15.2176 7.10622 15.2283C7.17797 15.2499 7.29576 15.2816 7.45966 15.3144C7.78718 15.3799 8.30041 15.4498 9.00004 15.4498C9.69967 15.4498 10.2129 15.3799 10.5404 15.3144C10.7043 15.2816 10.8221 15.2499 10.8939 15.2283C10.9297 15.2176 10.9541 15.2094 10.9671 15.2048L10.9775 15.2011C11.3607 15.0516 11.7935 15.2387 11.9465 15.6214C12.1004 16.0061 11.9133 16.4426 11.5286 16.5965L11.25 15.9C11.5286 16.5965 11.5284 16.5966 11.5282 16.5967L11.5277 16.5969L11.5266 16.5973L11.5243 16.5982L11.5189 16.6003L11.5046 16.6057C11.4937 16.6099 11.4797 16.615 11.4627 16.6209C11.4287 16.6328 11.3828 16.648 11.325 16.6654C11.2092 16.7001 11.0458 16.7434 10.8347 16.7856C10.4122 16.8701 9.80041 16.9501 9.00004 16.9501C8.19967 16.9501 7.5879 16.8701 7.16542 16.7856C6.95432 16.7434 6.79086 16.7001 6.67511 16.6654C6.61725 16.648 6.57134 16.6328 6.53738 16.6209C6.52041 16.615 6.50642 16.6099 6.49543 16.6057L6.48119 16.6003L6.47575 16.5982L6.47346 16.5973L6.47241 16.5969L6.47192 16.5967C6.47168 16.5966 6.47144 16.5965 6.75004 15.9L6.47144 16.5965C6.08677 16.4426 5.89967 16.0061 6.05354 15.6214C6.2066 15.2387 6.6394 15.0516 7.02258 15.2011ZM3.78152 8.40438C3.90332 7.5518 3.96422 7.12552 4.17 6.80486C4.35135 6.52229 4.61015 6.29783 4.91553 6.15827C5.26206 5.9999 5.69268 5.9999 6.55391 5.9999H11.4461C12.3074 5.9999 12.738 5.9999 13.0845 6.15827C13.3899 6.29783 13.6487 6.52229 13.83 6.80486C14.0358 7.12552 14.0967 7.5518 14.2185 8.40438L14.4959 10.3457C14.5404 10.6576 14.5627 10.8135 14.5154 10.9347C14.4739 11.0411 14.397 11.1299 14.2975 11.186C14.1842 11.2499 14.0267 11.2499 13.7117 11.2499H4.28839C3.97334 11.2499 3.81581 11.2499 3.70254 11.186C3.6031 11.1299 3.52612 11.0411 3.48462 10.9347C3.43736 10.8135 3.45963 10.6576 3.50419 10.3457L3.78152 8.40438ZM3.09361 15.562C3.87016 15.562 4.49968 14.9325 4.49968 14.156C4.49968 13.3794 3.87016 12.7499 3.09361 12.7499C2.31706 12.7499 1.68754 13.3794 1.68754 14.156C1.68754 14.9325 2.31706 15.562 3.09361 15.562ZM14.906 15.562C15.6826 15.562 16.3121 14.9325 16.3121 14.156C16.3121 13.3794 15.6826 12.7499 14.906 12.7499C14.1295 12.7499 13.5 13.3794 13.5 14.156C13.5 14.9325 14.1295 15.562 14.906 15.562Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}

export default ServiceIconCab