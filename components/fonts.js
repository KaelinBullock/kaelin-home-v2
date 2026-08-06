import { Global } from '@emotion/react';

const Fonts = () => (
   <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');

      @font-face {
        font-family: 'OCR A Extended';
        src: url('/fonts/OCRAEXT.TTF') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
      font-family: 'Space Grotesk';
      src: url('/fonts/SpaceGrotesk-VariableFont_wght.ttf') format('truetype');
      font-weight: 100 700;
      font-style: normal;
      }
   `}
    
   />
);



export default Fonts;