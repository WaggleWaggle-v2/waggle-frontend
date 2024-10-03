import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  // ChosunCentennial
  @font-face {
    font-family: 'ChosunCentennial';
    src: local('ChosunCentennial'), local('ChosunCentennial');
    font-weight: 400;
    src : url('/fonts/ChosunCentennial_subset.woff2') format("woff2");
  }

  // EBSHMJESaeron
  @font-face {
    font-family: 'EBSHMJESaeron';
    src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
    font-weight: 300;
    src: url('/fonts/EBSHMJESaeron-L.woff2') format('woff2');
  }
  @font-face {
    font-family: 'EBSHMJESaeron';
    src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
    font-weight: 600;
    src: url('/fonts/EBSHMJESaeron-R.woff2') format('woff2');
  }
  @font-face {
    font-family: 'EBSHMJESaeron';
    src: local('EBSHMJESaeron'), local('EBSHMJESaeron');
    font-weight: 900;
    src: url('/fonts/EBSHMJESaeron-SB.woff2') format('woff2');
  }

  // EBSHunminjeongeum
  @font-face {
    font-family: 'EBSHunminjeongeum';
    src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
    font-weight: 300;
    src: url('/fonts/EBSHunminjeongeum-L.woff2') format('woff2');
  }
  @font-face {
    font-family: 'EBSHunminjeongeum';
    src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
    font-weight: 600;
    src: url('/fonts/EBSHunminjeongeum-R.woff2') format('woff2');
  }
  @font-face {
    font-family: 'EBSHunminjeongeum';
    src: local('EBSHunminjeongeum'), local('EBSHunminjeongeum');
    font-weight: 900;
    src: url('/fonts/EBSHunminjeongeum-SB.woff2') format('woff2');
  }

  // Pretendard (URL은 그대로 사용)
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Light.subset.woff2') format('woff2');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.subset.woff2') format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.subset.woff2') format('woff2');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraBold.subset.woff2') format('woff2');
    font-weight: 900;
  }
`;

export default Fonts;
