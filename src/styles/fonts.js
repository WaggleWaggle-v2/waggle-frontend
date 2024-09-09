import { createGlobalStyle } from 'styled-components';
import ChosunCentennial from '../fonts/ChosunCentennial.woff';

import EBSHMJESaeronL from '../fonts/EBSHMJESaeron-L.woff';
import EBSHMJESaeronR from '../fonts/EBSHMJESaeron-R.woff';
import EBSHMJESaeronSB from '../fonts/EBSHMJESaeron-SB.woff';

import EBSHunminjeongeumL from '../fonts/EBSHunminjeongeum-L.woff';
import EBSHunminjeongeumR from '../fonts/EBSHunminjeongeum-R.woff';
import EBSHunminjeongeumSB from '../fonts/EBSHunminjeongeum-SB.woff';

const Fonts = createGlobalStyle`
 // ChosunCentennial
 @font-face {
    font-family: 'ChosunCentennial';
    src: local('ChosunCentennial'), local('ChosunCentennial');
    font-weight: 400;
    src : url(${ChosunCentennial}) format("truetype");
}


 // EBSHMJESaeron
  @font-face {
        font-family: 'EBSHMJESaeron';
        src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
        font-weight: 300;
        src: url(${EBSHMJESaeronL}) format('truetype');
  }
  @font-face {
        font-family: 'EBSHMJESaeron';
        src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
        font-weight: 600;
        src: url(${EBSHMJESaeronR}) format('truetype');
  }
  @font-face {
        font-family: 'EBSHMJESaeron';
        src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
        font-weight: 900;
        src: url(${EBSHMJESaeronSB}) format('truetype');
  }

  // EBSHunminjeongeum
  @font-face {
        font-family: 'EBSHunminjeongeum';
        src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
        font-weight: 300;
        src: url(${EBSHunminjeongeumL}) format('truetype');
  }
  @font-face {
        font-family: 'EBSHunminjeongeum';
        src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
        font-weight: 600;
        src: url(${EBSHunminjeongeumR}) format('truetype');
  }
  @font-face {
        font-family: 'EBSHunminjeongeum';
        src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
        font-weight: 900;
        src: url(${EBSHunminjeongeumSB}) format('truetype');
  }

  // Pretendard
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    }
    @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    }
    @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    }
    @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 900;
    }
  `;
export default Fonts;
