import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --background: #F6F3EE;
    --button-active: #6C9460;
    --button-disabled: #D1E1CE;

    // Red
    --red900: #AF2620;
    --red800: #BD302B;
    --red700: #CA3632;
    --red600: #DC4038;
    --red500: #EB4939;
    --red400: #E75752;
    --red300: #DE7574;
    --red200: #EA9B9A;
    --red100: #FCCDD2;
    --red50: #FDEBEE

    //Green
    --green900: #44523F;
    --green800: #56714D;
    --green700: #608256;
    --green600: #6C9460;
    --green500: #76A369;
    --green400: #87B07E;
    --green300: #9ABD93;
    --green200: #B5CFB0;
    --green100: #D1E1CE;
    --green50: #ECF3EB;

    //Brown
    --brown900: #695545;
    --brown800: #796451;
    --brown700: #87725B;
    --brown600: #988166;
    --brown500: #A58D6F;
    --brown400: #B5A087;
    --brown300: #C5B4A0;
    --brown200: #D7CABD;
    --brown100: #E7DFD6;
    --brown50: #F6F3EE;

    //Gray
    --gray900: #222222;
    --gray800: #434343;
    --gray700: #626262;
    --gray600: #767676;
    --gray500: #9F9F9F;
    --gray400: #BEBEBE;
    --gray300: #E1E1E1;
    --gray200: #EFEFEF;
    --gray100: #F5F5F5;
    --gray50: #FAFAFA;
  }
`;
export default Colors;
