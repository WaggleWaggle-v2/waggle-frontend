import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  // ChosunCentennial
  @font-face {
    font-family: 'ChosunCentennial';
    src: local('ChosunCentennial'), local('ChosunCentennial');
    font-weight: 400;
    src : url('/fonts/ChosunCentennial.woff') format("woff");
  }

  // EBSHMJESaeron
  @font-face {
    font-family: 'EBSHMJESaeron';
    src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
    font-weight: 300;
    src: url('/fonts/EBSHMJESaeron-L.woff') format('woff');
  }
  @font-face {
    font-family: 'EBSHMJESaeron';
    src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
    font-weight: 600;
    src: url('/fonts/EBSHMJESaeron-R.woff') format('woff');
  }
  @font-face {
    font-family: 'EBSHMJESaeron';
    src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
    font-weight: 900;
    src: url('/fonts/EBSHMJESaeron-SB.woff') format('woff');
  }

  // EBSHunminjeongeum
  @font-face {
    font-family: 'EBSHunminjeongeum';
    src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
    font-weight: 300;
    src: url('/fonts/EBSHunminjeongeum-L.woff') format('woff');
  }
  @font-face {
    font-family: 'EBSHunminjeongeum';
    src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
    font-weight: 600;
    src: url('/fonts/EBSHunminjeongeum-R.woff') format('woff');
  }
  @font-face {
    font-family: 'EBSHunminjeongeum';
    src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
    font-weight: 900;
    src: url('/fonts/EBSHunminjeongeum-SB.woff') format('woff');
  }

  // Pretendard (URL은 그대로 사용)
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
