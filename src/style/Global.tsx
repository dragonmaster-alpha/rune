import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { ArcaneTheme } from '@arcanefinance/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ArcaneTheme {}
}

// :root {
//   --font-default: "Alegreya Sans";
//   --font-accent: "Exocet B";
//   --font-accent-zh-cn: "Xingkai";
//   --font-accent-ko-kr: "Kodia";
//   --font-alternative: "Open Sans";
// }

const GlobalStyle = createGlobalStyle`
@font-face{font-family:"Exocet D";src:url(/fonts/ExocetD.woff) format("woff");font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:"Exocet Reaper";src:url(/fonts/ExocetReaperMedium.woff) format("woff");font-weight:normal;font-style:normal;font-display:swap}

  // @font-face{font-family:"Exocet";src:url(/fonts/ExocetLight.woff2) format("woff2"),url(/fonts/ExocetLight.woff) format("woff");font-weight:300;font-style:normal;font-display:swap}
  // @font-face{font-family:"Exocet B";src:url(/fonts/ExocetB.woff) format("woff");font-weight:500;font-style:normal;font-display:swap}

  * {
    font-family: 'Exocet D', sans-serif;
    text-transform: uppercase;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    background: #000; // url(https://d3a5h34gwy5glx.cloudfront.net/assets/images/d4-updates-bg-desktop.f3b4e10dfd3e58e8a0690f5b5c093370.jpg) repeat 0 0;
    cursor: url("/images/cursor2.png"), pointer;
    overflow-x: hidden;
    line-height: 130%;
    
    // /images/background.png
    // https://d3a5h34gwy5glx.cloudfront.net/assets/images/d4-updates-bg-desktop.f3b4e10dfd3e58e8a0690f5b5c093370.jpg
    background-size: stretch;

    img {
      height: auto;
      max-width: 100%;
      image-rendering: -webkit-optimize-contrast;
    }

    .rune-loading {
      body.good-quality & {
        animation: a .9s linear 0ms infinite;
      }
    }
  }

  hr {
    border-color: #b8925c;
  }

  a:hover, button:hover {
    cursor: url("/images/cursor3.png"), pointer;
  }

  @keyframes a {
    0% {
        transform: rotateY(0deg)
    }

    to {
        transform: rotateY(1turn)
    }
  }


#stars, #stars2, #stars3 {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 118px 18px #a2c3e0 , 1139px 1119px  #a2c3e0 , 1962px 921px  #e0a2a2 , 381px 1645px  #a2c3e0 , 1237px 964px  #e0a2a2 , 1362px 1447px  #a2c3e0 , 1449px 197px  #e0a2a2 , 31px 153px  #a2c3e0 , 697px 884px  #e0a2a2 , 958px 1491px  #a2c3e0 , 1599px 1700px  #e0a2a2 , 342px 1664px  #a2c3e0 , 528px 705px  #e0a2a2 , 180px 1635px  #a2c3e0 , 1526px 624px  #e0a2a2 , 824px 1576px  #a2c3e0 , 383px 1664px  #e0a2a2 , 1406px 156px  #a2c3e0 , 1200px 623px  #e0a2a2 , 549px 1487px  #a2c3e0 , 240px 383px  #e0a2a2 , 1256px 1103px  #a2c3e0 , 1375px 1126px  #e0a2a2 , 1771px 659px  #a2c3e0 , 602px 1724px  #e0a2a2 , 1998px 855px  #a2c3e0 , 112px 1010px  #e0a2a2 , 45px 1616px  #a2c3e0 , 1873px 1033px  #e0a2a2 , 1525px 295px  #a2c3e0 , 1707px 717px  #e0a2a2 , 1581px 936px  #a2c3e0 , 1285px 736px  #e0a2a2 , 1801px 164px  #a2c3e0 , 616px 88px  #e0a2a2 , 138px 477px  #a2c3e0 , 940px 938px  #e0a2a2 , 36px 1524px  #a2c3e0 , 92px 1776px  #e0a2a2 , 155px 1533px  #a2c3e0 , 1596px 478px  #e0a2a2 , 23px 1847px  #a2c3e0 , 1751px 1454px  #e0a2a2 , 80px 501px  #a2c3e0 , 328px 873px  #e0a2a2 , 1396px 677px  #a2c3e0 , 1166px 1070px  #e0a2a2 , 1288px 787px  #a2c3e0 , 1848px 1060px  #e0a2a2 , 209px 1005px  #a2c3e0 , 562px 1429px  #e0a2a2 , 929px 1300px  #a2c3e0 , 298px 901px  #e0a2a2 , 656px 77px  #a2c3e0 , 634px 1728px  #e0a2a2 , 1784px 54px  #a2c3e0 , 742px 1079px  #e0a2a2 , 1172px 1242px  #a2c3e0 , 1123px 1436px  #e0a2a2 , 698px 1120px  #a2c3e0 , 1606px 576px  #e0a2a2 , 599px 1918px  #a2c3e0 , 506px 1529px  #e0a2a2 , 200px 1857px  #a2c3e0 , 1542px 753px  #e0a2a2 , 1669px 1255px  #a2c3e0 , 589px 1659px  #e0a2a2 , 695px 1441px  #a2c3e0 , 1518px 312px  #e0a2a2 , 1289px 879px  #a2c3e0 , 1517px 1566px  #e0a2a2 , 910px 1195px  #a2c3e0 , 1063px 187px  #e0a2a2 , 1510px 1989px  #a2c3e0 , 1381px 924px  #e0a2a2 , 1049px 1465px  #a2c3e0 , 964px 1501px  #e0a2a2 , 9px 685px  #a2c3e0 , 1466px 718px  #e0a2a2 , 1999px 1461px  #a2c3e0 , 617px 755px  #e0a2a2 , 1042px 1611px  #a2c3e0 , 1532px 870px  #e0a2a2 , 778px 604px  #a2c3e0 , 375px 1809px  #e0a2a2 , 1439px 1622px  #a2c3e0 , 1542px 891px  #e0a2a2 , 796px 1372px  #a2c3e0 , 1314px 1295px  #e0a2a2 , 978px 1913px  #a2c3e0 , 698px 1517px  #e0a2a2 , 1361px 1244px  #a2c3e0 , 80px 1179px  #e0a2a2 , 795px 1407px  #a2c3e0 , 1256px 1639px  #e0a2a2 , 1732px 10px  #a2c3e0 , 933px 832px  #e0a2a2 , 1940px 583px  #a2c3e0 , 1613px 604px  #e0a2a2 , 991px 290px  #a2c3e0 , 93px 517px  #e0a2a2 , 593px 1464px  #a2c3e0 , 268px 133px  #e0a2a2 , 1122px 334px  #a2c3e0 , 1369px 1489px  #e0a2a2 , 170px 366px  #a2c3e0 , 494px 1251px  #e0a2a2 , 871px 1569px  #a2c3e0 , 303px 717px  #e0a2a2 , 651px 662px  #a2c3e0 , 1179px 278px  #e0a2a2 , 601px 904px  #a2c3e0 , 1024px 223px  #e0a2a2 , 1541px 158px  #a2c3e0 , 1648px 1306px  #e0a2a2 , 1830px 320px  #a2c3e0 , 770px 1916px  #e0a2a2 , 1289px 481px  #a2c3e0 , 217px 1729px  #e0a2a2 , 1568px 628px  #a2c3e0 , 396px 803px  #e0a2a2 , 1132px 137px  #a2c3e0 , 1476px 1639px  #e0a2a2 , 762px 1025px  #a2c3e0 , 960px 630px  #e0a2a2 , 1717px 977px  #a2c3e0 , 332px 1173px  #e0a2a2 , 532px 1361px  #a2c3e0 , 264px 1922px  #e0a2a2 , 233px 78px  #a2c3e0 , 841px 1990px  #e0a2a2 , 1584px 781px  #a2c3e0 , 1969px 1630px  #e0a2a2 , 1556px 345px  #a2c3e0 , 15px 192px  #e0a2a2 , 1572px 1307px  #a2c3e0 , 1993px 1928px  #e0a2a2 , 1256px 1547px  #a2c3e0 , 1326px 1098px  #e0a2a2 , 1886px 629px  #a2c3e0 , 400px 1420px  #e0a2a2 , 100px 1726px  #a2c3e0 , 177px 1877px  #e0a2a2 , 642px 503px  #a2c3e0 , 271px 590px  #e0a2a2 , 1333px 1844px  #a2c3e0 , 565px 1982px  #e0a2a2 , 445px 1000px  #a2c3e0 , 1181px 1850px  #e0a2a2 , 414px 1847px  #a2c3e0 , 853px 1461px  #e0a2a2 , 1784px 552px  #a2c3e0 , 1110px 105px  #e0a2a2 , 1804px 381px  #a2c3e0 , 448px 106px  #e0a2a2 , 553px 855px  #a2c3e0 , 721px 1193px  #e0a2a2 , 1532px 180px  #a2c3e0 , 119px 831px  #e0a2a2 , 1557px 330px  #a2c3e0 , 789px 1613px  #e0a2a2 , 516px 650px  #a2c3e0 , 897px 1107px  #e0a2a2 , 117px 614px  #a2c3e0 , 629px 1068px  #e0a2a2 , 107px 1046px  #a2c3e0 , 1179px 295px  #e0a2a2 , 769px 1513px  #a2c3e0 , 702px 1668px  #e0a2a2 , 1768px 1127px  #a2c3e0 , 986px 1974px  #e0a2a2 , 1104px 174px  #a2c3e0 , 125px 1578px  #e0a2a2 , 1589px 387px  #a2c3e0 , 240px 1053px  #e0a2a2 , 484px 764px  #a2c3e0 , 1394px 1736px  #e0a2a2 , 1540px 1793px  #a2c3e0 , 395px 355px  #e0a2a2 , 754px 392px  #a2c3e0 , 727px 257px  #e0a2a2 , 1506px 1163px  #a2c3e0 , 795px 147px  #e0a2a2 , 1502px 1188px  #a2c3e0 , 794px 1013px  #e0a2a2 , 1360px 529px  #a2c3e0 , 38px 796px  #e0a2a2 , 1818px 739px  #a2c3e0 , 730px 724px  #e0a2a2 , 1870px 944px  #a2c3e0 , 921px 1143px  #e0a2a2 , 1909px 253px  #a2c3e0 , 624px 1964px  #e0a2a2 , 1367px 30px  #a2c3e0 , 215px 717px  #e0a2a2 , 960px 606px  #a2c3e0 , 307px 380px  #e0a2a2 , 1231px 1848px  #a2c3e0 , 1562px 1104px  #e0a2a2 , 1322px 152px  #a2c3e0 , 663px 673px  #e0a2a2 , 1015px 633px  #a2c3e0 , 1190px 1113px  #e0a2a2 , 253px 414px  #a2c3e0 , 33px 478px  #e0a2a2 , 1948px 1086px  #a2c3e0 , 350px 268px  #e0a2a2 , 25px 752px  #a2c3e0 , 849px 505px  #e0a2a2 , 733px 1353px  #a2c3e0 , 793px 887px  #e0a2a2 , 1790px 1754px  #a2c3e0 , 1452px 1287px  #e0a2a2 , 980px 1316px  #a2c3e0 , 1206px 1469px  #e0a2a2 , 105px 826px  #a2c3e0 , 1538px 1677px  #e0a2a2 , 1890px 1889px  #a2c3e0 , 837px 1922px  #e0a2a2 , 1801px 1326px  #a2c3e0 , 1028px 1713px  #e0a2a2 , 725px 1374px  #a2c3e0 , 714px 368px  #e0a2a2 , 1535px 955px  #a2c3e0 , 1078px 578px  #e0a2a2 , 1416px 1882px  #a2c3e0 , 235px 1228px  #e0a2a2 , 1235px 139px  #a2c3e0 , 1515px 1147px  #e0a2a2 , 614px 212px  #a2c3e0 , 1967px 933px  #e0a2a2 , 767px 1696px  #a2c3e0 , 234px 1697px  #e0a2a2 , 1694px 209px  #a2c3e0 , 553px 1128px  #e0a2a2 , 1363px 1481px  #a2c3e0 , 249px 1517px  #e0a2a2 , 390px 1113px  #a2c3e0 , 933px 1933px  #e0a2a2 , 492px 282px  #a2c3e0 , 983px 1434px  #e0a2a2 , 959px 8px  #a2c3e0 , 880px 1657px  #e0a2a2 , 743px 1498px  #a2c3e0 , 282px 1451px  #e0a2a2 , 453px 223px  #a2c3e0 , 1393px 202px  #e0a2a2 , 398px 909px  #a2c3e0 , 1717px 188px  #e0a2a2 , 151px 781px  #a2c3e0 , 961px 306px  #e0a2a2 , 385px 511px  #a2c3e0 , 249px 740px  #e0a2a2 , 79px 1328px  #a2c3e0 , 225px 1176px  #e0a2a2 , 427px 1144px  #a2c3e0 , 1454px 726px  #e0a2a2 , 666px 806px  #a2c3e0 , 1961px 1486px  #e0a2a2 , 170px 870px  #a2c3e0 , 954px 304px  #e0a2a2 , 298px 200px  #a2c3e0 , 1237px 1560px  #e0a2a2 , 740px 6px  #a2c3e0 , 344px 1418px  #e0a2a2 , 109px 1878px  #a2c3e0 , 1489px 85px  #e0a2a2 , 705px 83px  #a2c3e0 , 1969px 1857px  #e0a2a2 , 360px 682px  #a2c3e0 , 556px 1577px  #e0a2a2 , 1898px 1198px  #a2c3e0 , 724px 900px  #e0a2a2 , 86px 1767px  #a2c3e0 , 76px 1786px  #e0a2a2 , 837px 3px  #a2c3e0 , 1407px 100px  #e0a2a2 , 1309px 1061px  #a2c3e0 , 1305px 1097px  #e0a2a2 , 574px 927px  #a2c3e0 , 1806px 1132px  #e0a2a2 , 942px 407px  #a2c3e0 , 844px 1518px  #e0a2a2 , 1771px 1304px  #a2c3e0 , 1376px 642px  #e0a2a2 , 978px 1166px  #a2c3e0 , 527px 1362px  #e0a2a2 , 705px 864px  #a2c3e0 , 875px 1058px  #e0a2a2 , 1225px 1510px  #a2c3e0 , 94px 1897px  #e0a2a2 , 157px 377px  #a2c3e0 , 1742px 9px  #e0a2a2 , 649px 425px  #a2c3e0 , 566px 552px  #e0a2a2 , 1961px 1795px  #a2c3e0 , 1668px 1601px  #e0a2a2 , 923px 612px  #a2c3e0 , 1858px 917px  #e0a2a2 , 335px 962px  #a2c3e0;

  body.good-quality & {
    animation: animStar 50s linear infinite;
  }

}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 118px 18px #a2c3e0 , 1139px 1119px  #a2c3e0 , 1962px 921px  #e0a2a2 , 381px 1645px  #a2c3e0 , 1237px 964px  #e0a2a2 , 1362px 1447px  #a2c3e0 , 1449px 197px  #e0a2a2 , 31px 153px  #a2c3e0 , 697px 884px  #e0a2a2 , 958px 1491px  #a2c3e0 , 1599px 1700px  #e0a2a2 , 342px 1664px  #a2c3e0 , 528px 705px  #e0a2a2 , 180px 1635px  #a2c3e0 , 1526px 624px  #e0a2a2 , 824px 1576px  #a2c3e0 , 383px 1664px  #e0a2a2 , 1406px 156px  #a2c3e0 , 1200px 623px  #e0a2a2 , 549px 1487px  #a2c3e0 , 240px 383px  #e0a2a2 , 1256px 1103px  #a2c3e0 , 1375px 1126px  #e0a2a2 , 1771px 659px  #a2c3e0 , 602px 1724px  #e0a2a2 , 1998px 855px  #a2c3e0 , 112px 1010px  #e0a2a2 , 45px 1616px  #a2c3e0 , 1873px 1033px  #e0a2a2 , 1525px 295px  #a2c3e0 , 1707px 717px  #e0a2a2 , 1581px 936px  #a2c3e0 , 1285px 736px  #e0a2a2 , 1801px 164px  #a2c3e0 , 616px 88px  #e0a2a2 , 138px 477px  #a2c3e0 , 940px 938px  #e0a2a2 , 36px 1524px  #a2c3e0 , 92px 1776px  #e0a2a2 , 155px 1533px  #a2c3e0 , 1596px 478px  #e0a2a2 , 23px 1847px  #a2c3e0 , 1751px 1454px  #e0a2a2 , 80px 501px  #a2c3e0 , 328px 873px  #e0a2a2 , 1396px 677px  #a2c3e0 , 1166px 1070px  #e0a2a2 , 1288px 787px  #a2c3e0 , 1848px 1060px  #e0a2a2 , 209px 1005px  #a2c3e0 , 562px 1429px  #e0a2a2 , 929px 1300px  #a2c3e0 , 298px 901px  #e0a2a2 , 656px 77px  #a2c3e0 , 634px 1728px  #e0a2a2 , 1784px 54px  #a2c3e0 , 742px 1079px  #e0a2a2 , 1172px 1242px  #a2c3e0 , 1123px 1436px  #e0a2a2 , 698px 1120px  #a2c3e0 , 1606px 576px  #e0a2a2 , 599px 1918px  #a2c3e0 , 506px 1529px  #e0a2a2 , 200px 1857px  #a2c3e0 , 1542px 753px  #e0a2a2 , 1669px 1255px  #a2c3e0 , 589px 1659px  #e0a2a2 , 695px 1441px  #a2c3e0 , 1518px 312px  #e0a2a2 , 1289px 879px  #a2c3e0 , 1517px 1566px  #e0a2a2 , 910px 1195px  #a2c3e0 , 1063px 187px  #e0a2a2 , 1510px 1989px  #a2c3e0 , 1381px 924px  #e0a2a2 , 1049px 1465px  #a2c3e0 , 964px 1501px  #e0a2a2 , 9px 685px  #a2c3e0 , 1466px 718px  #e0a2a2 , 1999px 1461px  #a2c3e0 , 617px 755px  #e0a2a2 , 1042px 1611px  #a2c3e0 , 1532px 870px  #e0a2a2 , 778px 604px  #a2c3e0 , 375px 1809px  #e0a2a2 , 1439px 1622px  #a2c3e0 , 1542px 891px  #e0a2a2 , 796px 1372px  #a2c3e0 , 1314px 1295px  #e0a2a2 , 978px 1913px  #a2c3e0 , 698px 1517px  #e0a2a2 , 1361px 1244px  #a2c3e0 , 80px 1179px  #e0a2a2 , 795px 1407px  #a2c3e0 , 1256px 1639px  #e0a2a2 , 1732px 10px  #a2c3e0 , 933px 832px  #e0a2a2 , 1940px 583px  #a2c3e0 , 1613px 604px  #e0a2a2 , 991px 290px  #a2c3e0 , 93px 517px  #e0a2a2 , 593px 1464px  #a2c3e0 , 268px 133px  #e0a2a2 , 1122px 334px  #a2c3e0 , 1369px 1489px  #e0a2a2 , 170px 366px  #a2c3e0 , 494px 1251px  #e0a2a2 , 871px 1569px  #a2c3e0 , 303px 717px  #e0a2a2 , 651px 662px  #a2c3e0 , 1179px 278px  #e0a2a2 , 601px 904px  #a2c3e0 , 1024px 223px  #e0a2a2 , 1541px 158px  #a2c3e0 , 1648px 1306px  #e0a2a2 , 1830px 320px  #a2c3e0 , 770px 1916px  #e0a2a2 , 1289px 481px  #a2c3e0 , 217px 1729px  #e0a2a2 , 1568px 628px  #a2c3e0 , 396px 803px  #e0a2a2 , 1132px 137px  #a2c3e0 , 1476px 1639px  #e0a2a2 , 762px 1025px  #a2c3e0 , 960px 630px  #e0a2a2 , 1717px 977px  #a2c3e0 , 332px 1173px  #e0a2a2 , 532px 1361px  #a2c3e0 , 264px 1922px  #e0a2a2 , 233px 78px  #a2c3e0 , 841px 1990px  #e0a2a2 , 1584px 781px  #a2c3e0 , 1969px 1630px  #e0a2a2 , 1556px 345px  #a2c3e0 , 15px 192px  #e0a2a2 , 1572px 1307px  #a2c3e0 , 1993px 1928px  #e0a2a2 , 1256px 1547px  #a2c3e0 , 1326px 1098px  #e0a2a2 , 1886px 629px  #a2c3e0 , 400px 1420px  #e0a2a2 , 100px 1726px  #a2c3e0 , 177px 1877px  #e0a2a2 , 642px 503px  #a2c3e0 , 271px 590px  #e0a2a2 , 1333px 1844px  #a2c3e0 , 565px 1982px  #e0a2a2 , 445px 1000px  #a2c3e0 , 1181px 1850px  #e0a2a2 , 414px 1847px  #a2c3e0 , 853px 1461px  #e0a2a2 , 1784px 552px  #a2c3e0 , 1110px 105px  #e0a2a2 , 1804px 381px  #a2c3e0 , 448px 106px  #e0a2a2 , 553px 855px  #a2c3e0 , 721px 1193px  #e0a2a2 , 1532px 180px  #a2c3e0 , 119px 831px  #e0a2a2 , 1557px 330px  #a2c3e0 , 789px 1613px  #e0a2a2 , 516px 650px  #a2c3e0 , 897px 1107px  #e0a2a2 , 117px 614px  #a2c3e0 , 629px 1068px  #e0a2a2 , 107px 1046px  #a2c3e0 , 1179px 295px  #e0a2a2 , 769px 1513px  #a2c3e0 , 702px 1668px  #e0a2a2 , 1768px 1127px  #a2c3e0 , 986px 1974px  #e0a2a2 , 1104px 174px  #a2c3e0 , 125px 1578px  #e0a2a2 , 1589px 387px  #a2c3e0 , 240px 1053px  #e0a2a2 , 484px 764px  #a2c3e0 , 1394px 1736px  #e0a2a2 , 1540px 1793px  #a2c3e0 , 395px 355px  #e0a2a2 , 754px 392px  #a2c3e0 , 727px 257px  #e0a2a2 , 1506px 1163px  #a2c3e0 , 795px 147px  #e0a2a2 , 1502px 1188px  #a2c3e0 , 794px 1013px  #e0a2a2 , 1360px 529px  #a2c3e0 , 38px 796px  #e0a2a2 , 1818px 739px  #a2c3e0 , 730px 724px  #e0a2a2 , 1870px 944px  #a2c3e0 , 921px 1143px  #e0a2a2 , 1909px 253px  #a2c3e0 , 624px 1964px  #e0a2a2 , 1367px 30px  #a2c3e0 , 215px 717px  #e0a2a2 , 960px 606px  #a2c3e0 , 307px 380px  #e0a2a2 , 1231px 1848px  #a2c3e0 , 1562px 1104px  #e0a2a2 , 1322px 152px  #a2c3e0 , 663px 673px  #e0a2a2 , 1015px 633px  #a2c3e0 , 1190px 1113px  #e0a2a2 , 253px 414px  #a2c3e0 , 33px 478px  #e0a2a2 , 1948px 1086px  #a2c3e0 , 350px 268px  #e0a2a2 , 25px 752px  #a2c3e0 , 849px 505px  #e0a2a2 , 733px 1353px  #a2c3e0 , 793px 887px  #e0a2a2 , 1790px 1754px  #a2c3e0 , 1452px 1287px  #e0a2a2 , 980px 1316px  #a2c3e0 , 1206px 1469px  #e0a2a2 , 105px 826px  #a2c3e0 , 1538px 1677px  #e0a2a2 , 1890px 1889px  #a2c3e0 , 837px 1922px  #e0a2a2 , 1801px 1326px  #a2c3e0 , 1028px 1713px  #e0a2a2 , 725px 1374px  #a2c3e0 , 714px 368px  #e0a2a2 , 1535px 955px  #a2c3e0 , 1078px 578px  #e0a2a2 , 1416px 1882px  #a2c3e0 , 235px 1228px  #e0a2a2 , 1235px 139px  #a2c3e0 , 1515px 1147px  #e0a2a2 , 614px 212px  #a2c3e0 , 1967px 933px  #e0a2a2 , 767px 1696px  #a2c3e0 , 234px 1697px  #e0a2a2 , 1694px 209px  #a2c3e0 , 553px 1128px  #e0a2a2 , 1363px 1481px  #a2c3e0 , 249px 1517px  #e0a2a2 , 390px 1113px  #a2c3e0 , 933px 1933px  #e0a2a2 , 492px 282px  #a2c3e0 , 983px 1434px  #e0a2a2 , 959px 8px  #a2c3e0 , 880px 1657px  #e0a2a2 , 743px 1498px  #a2c3e0 , 282px 1451px  #e0a2a2 , 453px 223px  #a2c3e0 , 1393px 202px  #e0a2a2 , 398px 909px  #a2c3e0 , 1717px 188px  #e0a2a2 , 151px 781px  #a2c3e0 , 961px 306px  #e0a2a2 , 385px 511px  #a2c3e0 , 249px 740px  #e0a2a2 , 79px 1328px  #a2c3e0 , 225px 1176px  #e0a2a2 , 427px 1144px  #a2c3e0 , 1454px 726px  #e0a2a2 , 666px 806px  #a2c3e0 , 1961px 1486px  #e0a2a2 , 170px 870px  #a2c3e0 , 954px 304px  #e0a2a2 , 298px 200px  #a2c3e0 , 1237px 1560px  #e0a2a2 , 740px 6px  #a2c3e0 , 344px 1418px  #e0a2a2 , 109px 1878px  #a2c3e0 , 1489px 85px  #e0a2a2 , 705px 83px  #a2c3e0 , 1969px 1857px  #e0a2a2 , 360px 682px  #a2c3e0 , 556px 1577px  #e0a2a2 , 1898px 1198px  #a2c3e0 , 724px 900px  #e0a2a2 , 86px 1767px  #a2c3e0 , 76px 1786px  #e0a2a2 , 837px 3px  #a2c3e0 , 1407px 100px  #e0a2a2 , 1309px 1061px  #a2c3e0 , 1305px 1097px  #e0a2a2 , 574px 927px  #a2c3e0 , 1806px 1132px  #e0a2a2 , 942px 407px  #a2c3e0 , 844px 1518px  #e0a2a2 , 1771px 1304px  #a2c3e0 , 1376px 642px  #e0a2a2 , 978px 1166px  #a2c3e0 , 527px 1362px  #e0a2a2 , 705px 864px  #a2c3e0 , 875px 1058px  #e0a2a2 , 1225px 1510px  #a2c3e0 , 94px 1897px  #e0a2a2 , 157px 377px  #a2c3e0 , 1742px 9px  #e0a2a2 , 649px 425px  #a2c3e0 , 566px 552px  #e0a2a2 , 1961px 1795px  #a2c3e0 , 1668px 1601px  #e0a2a2 , 923px 612px  #a2c3e0 , 1858px 917px  #e0a2a2 , 335px 962px  #a2c3e0;

}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 826px 1321px #a2c3e0 , 1146px 459px  #a2c3e0 , 1620px 1096px  #e0a2a2 , 333px 509px  #a2c3e0 , 367px 1164px  #e0a2a2 , 1317px 1665px  #a2c3e0 , 1697px 1159px  #e0a2a2 , 32px 1720px  #a2c3e0 , 376px 185px  #e0a2a2 , 275px 109px  #a2c3e0 , 1726px 924px  #e0a2a2 , 1735px 1093px  #a2c3e0 , 78px 1994px  #e0a2a2 , 1934px 1472px  #a2c3e0 , 1529px 410px  #e0a2a2 , 1209px 829px  #a2c3e0 , 1444px 1119px  #e0a2a2 , 1202px 39px  #a2c3e0 , 1516px 130px  #e0a2a2 , 1728px 718px  #a2c3e0 , 359px 1167px  #e0a2a2 , 1110px 10px  #a2c3e0 , 1952px 1103px  #e0a2a2 , 821px 925px  #a2c3e0 , 1201px 999px  #e0a2a2 , 1547px 467px  #a2c3e0 , 1621px 1187px  #e0a2a2 , 1604px 1558px  #a2c3e0 , 1456px 1025px  #e0a2a2 , 1769px 576px  #a2c3e0 , 426px 570px  #e0a2a2 , 943px 717px  #a2c3e0 , 862px 1040px  #e0a2a2 , 141px 898px  #a2c3e0 , 190px 1512px  #e0a2a2 , 1174px 1639px  #a2c3e0 , 1229px 309px  #e0a2a2 , 1808px 1748px  #a2c3e0 , 1994px 1766px  #e0a2a2 , 683px 1297px  #a2c3e0 , 977px 811px  #e0a2a2 , 740px 1124px  #a2c3e0 , 135px 856px  #e0a2a2 , 295px 1662px  #a2c3e0 , 494px 385px  #e0a2a2 , 1879px 717px  #a2c3e0 , 1540px 1350px  #e0a2a2 , 561px 241px  #a2c3e0 , 1286px 257px  #e0a2a2 , 1665px 1636px  #a2c3e0 , 1868px 1013px  #e0a2a2 , 1724px 711px  #a2c3e0 , 7px 305px  #e0a2a2 , 1895px 1865px  #a2c3e0 , 1134px 1174px  #e0a2a2 , 1379px 1795px  #a2c3e0 , 138px 279px  #e0a2a2 , 647px 1313px  #a2c3e0 , 1501px 793px  #e0a2a2 , 291px 448px  #a2c3e0 , 480px 79px  #e0a2a2 , 10px 1592px  #a2c3e0 , 25px 1584px  #e0a2a2 , 1007px 1912px  #a2c3e0 , 337px 516px  #e0a2a2 , 1452px 1803px  #a2c3e0 , 37px 1326px  #e0a2a2 , 812px 955px  #a2c3e0 , 412px 1377px  #e0a2a2 , 1010px 791px  #a2c3e0 , 728px 496px  #e0a2a2 , 1157px 987px  #a2c3e0 , 1947px 1867px  #e0a2a2 , 833px 1212px  #a2c3e0 , 1211px 4px  #e0a2a2 , 127px 837px  #a2c3e0 , 1699px 53px  #e0a2a2 , 1110px 1855px  #a2c3e0 , 1343px 262px  #e0a2a2 , 585px 1093px  #a2c3e0 , 1173px 1456px  #e0a2a2 , 402px 155px  #a2c3e0 , 1167px 223px  #e0a2a2 , 389px 1489px  #a2c3e0 , 1143px 1819px  #e0a2a2 , 1021px 15px  #a2c3e0 , 1266px 1470px  #e0a2a2 , 613px 25px  #a2c3e0 , 1582px 1496px  #e0a2a2 , 190px 71px  #a2c3e0 , 353px 537px  #e0a2a2 , 341px 216px  #a2c3e0 , 869px 1216px  #e0a2a2 , 1829px 1620px  #a2c3e0 , 107px 210px  #e0a2a2 , 949px 830px  #a2c3e0 , 259px 1102px  #e0a2a2 , 794px 1377px  #a2c3e0 , 1929px 1697px  #e0a2a2 , 1008px 1194px  #a2c3e0 , 420px 1016px  #e0a2a2 , 993px 1465px  #a2c3e0 , 1714px 497px  #e0a2a2 , 1837px 497px  #a2c3e0 , 1809px 577px  #e0a2a2 , 1751px 1315px  #a2c3e0 , 1127px 68px  #e0a2a2 , 1984px 1459px  #a2c3e0 , 1484px 24px  #e0a2a2 , 523px 583px  #a2c3e0 , 1085px 883px  #e0a2a2 , 1257px 1848px  #a2c3e0 , 1106px 827px  #e0a2a2 , 1352px 620px  #a2c3e0 , 1456px 1339px  #e0a2a2 , 1486px 367px  #a2c3e0 , 816px 1774px  #e0a2a2 , 1072px 1906px  #a2c3e0 , 332px 1136px  #e0a2a2 , 635px 1338px  #a2c3e0 , 1402px 689px  #e0a2a2 , 1013px 1663px  #a2c3e0 , 1905px 681px  #e0a2a2 , 430px 865px  #a2c3e0 , 1581px 1139px  #e0a2a2 , 1353px 1940px  #a2c3e0 , 1225px 1071px  #e0a2a2 , 1165px 726px  #a2c3e0 , 1923px 1357px  #e0a2a2 , 239px 412px  #a2c3e0 , 682px 713px  #e0a2a2 , 1857px 564px  #a2c3e0 , 406px 742px  #e0a2a2 , 657px 310px  #a2c3e0 , 1440px 953px  #e0a2a2 , 509px 101px  #a2c3e0 , 1158px 131px  #e0a2a2 , 1826px 463px  #a2c3e0 , 1740px 1904px  #e0a2a2 , 297px 306px  #a2c3e0 , 481px 212px  #e0a2a2 , 838px 1881px  #a2c3e0 , 89px 929px  #e0a2a2 , 498px 416px  #a2c3e0 , 860px 1798px  #e0a2a2 , 1715px 6px  #a2c3e0 , 1874px 1170px  #e0a2a2 , 425px 1071px  #a2c3e0 , 304px 1601px  #e0a2a2 , 1707px 1392px  #a2c3e0 , 357px 1851px  #e0a2a2 , 214px 1315px  #a2c3e0 , 1698px 763px  #e0a2a2 , 1296px 465px  #a2c3e0 , 1627px 519px  #e0a2a2 , 254px 1861px  #a2c3e0 , 1183px 1983px  #e0a2a2 , 13px 1041px  #a2c3e0 , 1574px 1306px  #e0a2a2 , 1634px 355px  #a2c3e0 , 1897px 1917px  #e0a2a2 , 103px 1762px  #a2c3e0 , 1925px 821px  #e0a2a2 , 721px 932px  #a2c3e0 , 1607px 1508px  #e0a2a2 , 1613px 1393px  #a2c3e0 , 1605px 406px  #e0a2a2 , 273px 877px  #a2c3e0 , 116px 957px  #e0a2a2 , 692px 1507px  #a2c3e0 , 1299px 1913px  #e0a2a2 , 735px 1090px  #a2c3e0 , 480px 190px  #e0a2a2 , 103px 1209px  #a2c3e0 , 1586px 6px  #e0a2a2 , 179px 1831px  #a2c3e0 , 881px 761px  #e0a2a2 , 1157px 1395px  #a2c3e0 , 1795px 854px  #e0a2a2 , 794px 1977px  #a2c3e0 , 1708px 761px  #e0a2a2 , 824px 276px  #a2c3e0 , 1791px 1496px  #e0a2a2 , 850px 1487px  #a2c3e0 , 579px 1954px  #e0a2a2 , 495px 907px  #a2c3e0 , 1030px 1220px  #e0a2a2 , 316px 4px  #a2c3e0 , 1377px 372px  #e0a2a2 , 1662px 1468px  #a2c3e0 , 1138px 454px  #e0a2a2 , 13px 1961px  #a2c3e0 , 928px 1207px  #e0a2a2 , 1451px 1196px  #a2c3e0 , 1086px 661px  #e0a2a2 , 743px 842px  #a2c3e0 , 1249px 795px  #e0a2a2 , 868px 101px  #a2c3e0 , 687px 1222px  #e0a2a2 , 811px 29px  #a2c3e0;

  body.good-quality & {
    animation: animStar 100s linear infinite;
  }

}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 826px 1321px #a2c3e0 , 1146px 459px  #a2c3e0 , 1620px 1096px  #e0a2a2 , 333px 509px  #a2c3e0 , 367px 1164px  #e0a2a2 , 1317px 1665px  #a2c3e0 , 1697px 1159px  #e0a2a2 , 32px 1720px  #a2c3e0 , 376px 185px  #e0a2a2 , 275px 109px  #a2c3e0 , 1726px 924px  #e0a2a2 , 1735px 1093px  #a2c3e0 , 78px 1994px  #e0a2a2 , 1934px 1472px  #a2c3e0 , 1529px 410px  #e0a2a2 , 1209px 829px  #a2c3e0 , 1444px 1119px  #e0a2a2 , 1202px 39px  #a2c3e0 , 1516px 130px  #e0a2a2 , 1728px 718px  #a2c3e0 , 359px 1167px  #e0a2a2 , 1110px 10px  #a2c3e0 , 1952px 1103px  #e0a2a2 , 821px 925px  #a2c3e0 , 1201px 999px  #e0a2a2 , 1547px 467px  #a2c3e0 , 1621px 1187px  #e0a2a2 , 1604px 1558px  #a2c3e0 , 1456px 1025px  #e0a2a2 , 1769px 576px  #a2c3e0 , 426px 570px  #e0a2a2 , 943px 717px  #a2c3e0 , 862px 1040px  #e0a2a2 , 141px 898px  #a2c3e0 , 190px 1512px  #e0a2a2 , 1174px 1639px  #a2c3e0 , 1229px 309px  #e0a2a2 , 1808px 1748px  #a2c3e0 , 1994px 1766px  #e0a2a2 , 683px 1297px  #a2c3e0 , 977px 811px  #e0a2a2 , 740px 1124px  #a2c3e0 , 135px 856px  #e0a2a2 , 295px 1662px  #a2c3e0 , 494px 385px  #e0a2a2 , 1879px 717px  #a2c3e0 , 1540px 1350px  #e0a2a2 , 561px 241px  #a2c3e0 , 1286px 257px  #e0a2a2 , 1665px 1636px  #a2c3e0 , 1868px 1013px  #e0a2a2 , 1724px 711px  #a2c3e0 , 7px 305px  #e0a2a2 , 1895px 1865px  #a2c3e0 , 1134px 1174px  #e0a2a2 , 1379px 1795px  #a2c3e0 , 138px 279px  #e0a2a2 , 647px 1313px  #a2c3e0 , 1501px 793px  #e0a2a2 , 291px 448px  #a2c3e0 , 480px 79px  #e0a2a2 , 10px 1592px  #a2c3e0 , 25px 1584px  #e0a2a2 , 1007px 1912px  #a2c3e0 , 337px 516px  #e0a2a2 , 1452px 1803px  #a2c3e0 , 37px 1326px  #e0a2a2 , 812px 955px  #a2c3e0 , 412px 1377px  #e0a2a2 , 1010px 791px  #a2c3e0 , 728px 496px  #e0a2a2 , 1157px 987px  #a2c3e0 , 1947px 1867px  #e0a2a2 , 833px 1212px  #a2c3e0 , 1211px 4px  #e0a2a2 , 127px 837px  #a2c3e0 , 1699px 53px  #e0a2a2 , 1110px 1855px  #a2c3e0 , 1343px 262px  #e0a2a2 , 585px 1093px  #a2c3e0 , 1173px 1456px  #e0a2a2 , 402px 155px  #a2c3e0 , 1167px 223px  #e0a2a2 , 389px 1489px  #a2c3e0 , 1143px 1819px  #e0a2a2 , 1021px 15px  #a2c3e0 , 1266px 1470px  #e0a2a2 , 613px 25px  #a2c3e0 , 1582px 1496px  #e0a2a2 , 190px 71px  #a2c3e0 , 353px 537px  #e0a2a2 , 341px 216px  #a2c3e0 , 869px 1216px  #e0a2a2 , 1829px 1620px  #a2c3e0 , 107px 210px  #e0a2a2 , 949px 830px  #a2c3e0 , 259px 1102px  #e0a2a2 , 794px 1377px  #a2c3e0 , 1929px 1697px  #e0a2a2 , 1008px 1194px  #a2c3e0 , 420px 1016px  #e0a2a2 , 993px 1465px  #a2c3e0 , 1714px 497px  #e0a2a2 , 1837px 497px  #a2c3e0 , 1809px 577px  #e0a2a2 , 1751px 1315px  #a2c3e0 , 1127px 68px  #e0a2a2 , 1984px 1459px  #a2c3e0 , 1484px 24px  #e0a2a2 , 523px 583px  #a2c3e0 , 1085px 883px  #e0a2a2 , 1257px 1848px  #a2c3e0 , 1106px 827px  #e0a2a2 , 1352px 620px  #a2c3e0 , 1456px 1339px  #e0a2a2 , 1486px 367px  #a2c3e0 , 816px 1774px  #e0a2a2 , 1072px 1906px  #a2c3e0 , 332px 1136px  #e0a2a2 , 635px 1338px  #a2c3e0 , 1402px 689px  #e0a2a2 , 1013px 1663px  #a2c3e0 , 1905px 681px  #e0a2a2 , 430px 865px  #a2c3e0 , 1581px 1139px  #e0a2a2 , 1353px 1940px  #a2c3e0 , 1225px 1071px  #e0a2a2 , 1165px 726px  #a2c3e0 , 1923px 1357px  #e0a2a2 , 239px 412px  #a2c3e0 , 682px 713px  #e0a2a2 , 1857px 564px  #a2c3e0 , 406px 742px  #e0a2a2 , 657px 310px  #a2c3e0 , 1440px 953px  #e0a2a2 , 509px 101px  #a2c3e0 , 1158px 131px  #e0a2a2 , 1826px 463px  #a2c3e0 , 1740px 1904px  #e0a2a2 , 297px 306px  #a2c3e0 , 481px 212px  #e0a2a2 , 838px 1881px  #a2c3e0 , 89px 929px  #e0a2a2 , 498px 416px  #a2c3e0 , 860px 1798px  #e0a2a2 , 1715px 6px  #a2c3e0 , 1874px 1170px  #e0a2a2 , 425px 1071px  #a2c3e0 , 304px 1601px  #e0a2a2 , 1707px 1392px  #a2c3e0 , 357px 1851px  #e0a2a2 , 214px 1315px  #a2c3e0 , 1698px 763px  #e0a2a2 , 1296px 465px  #a2c3e0 , 1627px 519px  #e0a2a2 , 254px 1861px  #a2c3e0 , 1183px 1983px  #e0a2a2 , 13px 1041px  #a2c3e0 , 1574px 1306px  #e0a2a2 , 1634px 355px  #a2c3e0 , 1897px 1917px  #e0a2a2 , 103px 1762px  #a2c3e0 , 1925px 821px  #e0a2a2 , 721px 932px  #a2c3e0 , 1607px 1508px  #e0a2a2 , 1613px 1393px  #a2c3e0 , 1605px 406px  #e0a2a2 , 273px 877px  #a2c3e0 , 116px 957px  #e0a2a2 , 692px 1507px  #a2c3e0 , 1299px 1913px  #e0a2a2 , 735px 1090px  #a2c3e0 , 480px 190px  #e0a2a2 , 103px 1209px  #a2c3e0 , 1586px 6px  #e0a2a2 , 179px 1831px  #a2c3e0 , 881px 761px  #e0a2a2 , 1157px 1395px  #a2c3e0 , 1795px 854px  #e0a2a2 , 794px 1977px  #a2c3e0 , 1708px 761px  #e0a2a2 , 824px 276px  #a2c3e0 , 1791px 1496px  #e0a2a2 , 850px 1487px  #a2c3e0 , 579px 1954px  #e0a2a2 , 495px 907px  #a2c3e0 , 1030px 1220px  #e0a2a2 , 316px 4px  #a2c3e0 , 1377px 372px  #e0a2a2 , 1662px 1468px  #a2c3e0 , 1138px 454px  #e0a2a2 , 13px 1961px  #a2c3e0 , 928px 1207px  #e0a2a2 , 1451px 1196px  #a2c3e0 , 1086px 661px  #e0a2a2 , 743px 842px  #a2c3e0 , 1249px 795px  #e0a2a2 , 868px 101px  #a2c3e0 , 687px 1222px  #e0a2a2 , 811px 29px  #a2c3e0;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 680px 770px #a2c3e0 , 247px 1445px  #a2c3e0 , 529px 1582px  #e0a2a2 , 330px 634px  #a2c3e0 , 325px 600px  #e0a2a2 , 594px 1030px  #a2c3e0 , 1146px 353px  #e0a2a2 , 604px 1942px  #a2c3e0 , 1429px 662px  #e0a2a2 , 433px 1592px  #a2c3e0 , 1005px 1938px  #e0a2a2 , 1136px 1888px  #a2c3e0 , 899px 968px  #e0a2a2 , 1135px 654px  #a2c3e0 , 1282px 1546px  #e0a2a2 , 1966px 1420px  #a2c3e0 , 1838px 1237px  #e0a2a2 , 267px 694px  #a2c3e0 , 589px 1972px  #e0a2a2 , 381px 1011px  #a2c3e0 , 1207px 109px  #e0a2a2 , 68px 1569px  #a2c3e0 , 441px 140px  #e0a2a2 , 1729px 1984px  #a2c3e0 , 1718px 644px  #e0a2a2 , 1805px 747px  #a2c3e0 , 326px 1706px  #e0a2a2 , 1694px 688px  #a2c3e0 , 936px 1546px  #e0a2a2 , 1753px 1180px  #a2c3e0 , 1912px 346px  #e0a2a2 , 1246px 667px  #a2c3e0 , 266px 533px  #e0a2a2 , 173px 960px  #a2c3e0 , 444px 1351px  #e0a2a2 , 1482px 141px  #a2c3e0 , 282px 1485px  #e0a2a2 , 326px 1357px  #a2c3e0 , 1978px 285px  #e0a2a2 , 1847px 815px  #a2c3e0 , 1199px 1152px  #e0a2a2 , 749px 322px  #a2c3e0 , 214px 89px  #e0a2a2 , 1953px 895px  #a2c3e0 , 281px 560px  #e0a2a2 , 1304px 274px  #a2c3e0 , 1308px 664px  #e0a2a2 , 245px 1149px  #a2c3e0 , 1552px 1950px  #e0a2a2 , 1107px 462px  #a2c3e0 , 1424px 680px  #e0a2a2 , 1030px 1436px  #a2c3e0 , 247px 476px  #e0a2a2 , 684px 709px  #a2c3e0 , 578px 312px  #e0a2a2 , 1803px 1812px  #a2c3e0 , 1849px 925px  #e0a2a2 , 432px 1495px  #a2c3e0 , 1049px 1441px  #e0a2a2 , 1660px 758px  #a2c3e0 , 220px 1137px  #e0a2a2 , 262px 924px  #a2c3e0 , 11px 1779px  #e0a2a2 , 525px 599px  #a2c3e0 , 232px 388px  #e0a2a2 , 868px 1011px  #a2c3e0 , 171px 1074px  #e0a2a2 , 20px 341px  #a2c3e0 , 1377px 1408px  #e0a2a2 , 223px 856px  #a2c3e0 , 529px 768px  #e0a2a2 , 1493px 45px  #a2c3e0 , 217px 974px  #e0a2a2 , 297px 509px  #a2c3e0 , 215px 992px  #e0a2a2 , 1463px 1124px  #a2c3e0 , 51px 10px  #e0a2a2 , 1865px 784px  #a2c3e0 , 177px 1024px  #e0a2a2 , 1907px 288px  #a2c3e0 , 317px 812px  #e0a2a2 , 1700px 529px  #a2c3e0 , 1797px 1062px  #e0a2a2 , 336px 848px  #a2c3e0 , 1759px 595px  #e0a2a2 , 129px 787px  #a2c3e0 , 1162px 312px  #e0a2a2 , 711px 838px  #a2c3e0 , 1385px 21px  #e0a2a2 , 1968px 37px  #a2c3e0 , 1245px 516px  #e0a2a2 , 1437px 1441px  #a2c3e0 , 1931px 586px  #e0a2a2 , 1738px 1618px  #a2c3e0 , 851px 675px  #e0a2a2 , 1605px 1214px  #a2c3e0 , 1032px 1453px  #e0a2a2 , 1898px 1988px  #a2c3e0 , 1830px 379px  #e0a2a2 , 1669px 1980px  #a2c3e0;
  body.good-quality & {
    animation: animStar 150s linear infinite;
  }

}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 680px 770px #a2c3e0 , 247px 1445px  #a2c3e0 , 529px 1582px  #e0a2a2 , 330px 634px  #a2c3e0 , 325px 600px  #e0a2a2 , 594px 1030px  #a2c3e0 , 1146px 353px  #e0a2a2 , 604px 1942px  #a2c3e0 , 1429px 662px  #e0a2a2 , 433px 1592px  #a2c3e0 , 1005px 1938px  #e0a2a2 , 1136px 1888px  #a2c3e0 , 899px 968px  #e0a2a2 , 1135px 654px  #a2c3e0 , 1282px 1546px  #e0a2a2 , 1966px 1420px  #a2c3e0 , 1838px 1237px  #e0a2a2 , 267px 694px  #a2c3e0 , 589px 1972px  #e0a2a2 , 381px 1011px  #a2c3e0 , 1207px 109px  #e0a2a2 , 68px 1569px  #a2c3e0 , 441px 140px  #e0a2a2 , 1729px 1984px  #a2c3e0 , 1718px 644px  #e0a2a2 , 1805px 747px  #a2c3e0 , 326px 1706px  #e0a2a2 , 1694px 688px  #a2c3e0 , 936px 1546px  #e0a2a2 , 1753px 1180px  #a2c3e0 , 1912px 346px  #e0a2a2 , 1246px 667px  #a2c3e0 , 266px 533px  #e0a2a2 , 173px 960px  #a2c3e0 , 444px 1351px  #e0a2a2 , 1482px 141px  #a2c3e0 , 282px 1485px  #e0a2a2 , 326px 1357px  #a2c3e0 , 1978px 285px  #e0a2a2 , 1847px 815px  #a2c3e0 , 1199px 1152px  #e0a2a2 , 749px 322px  #a2c3e0 , 214px 89px  #e0a2a2 , 1953px 895px  #a2c3e0 , 281px 560px  #e0a2a2 , 1304px 274px  #a2c3e0 , 1308px 664px  #e0a2a2 , 245px 1149px  #a2c3e0 , 1552px 1950px  #e0a2a2 , 1107px 462px  #a2c3e0 , 1424px 680px  #e0a2a2 , 1030px 1436px  #a2c3e0 , 247px 476px  #e0a2a2 , 684px 709px  #a2c3e0 , 578px 312px  #e0a2a2 , 1803px 1812px  #a2c3e0 , 1849px 925px  #e0a2a2 , 432px 1495px  #a2c3e0 , 1049px 1441px  #e0a2a2 , 1660px 758px  #a2c3e0 , 220px 1137px  #e0a2a2 , 262px 924px  #a2c3e0 , 11px 1779px  #e0a2a2 , 525px 599px  #a2c3e0 , 232px 388px  #e0a2a2 , 868px 1011px  #a2c3e0 , 171px 1074px  #e0a2a2 , 20px 341px  #a2c3e0 , 1377px 1408px  #e0a2a2 , 223px 856px  #a2c3e0 , 529px 768px  #e0a2a2 , 1493px 45px  #a2c3e0 , 217px 974px  #e0a2a2 , 297px 509px  #a2c3e0 , 215px 992px  #e0a2a2 , 1463px 1124px  #a2c3e0 , 51px 10px  #e0a2a2 , 1865px 784px  #a2c3e0 , 177px 1024px  #e0a2a2 , 1907px 288px  #a2c3e0 , 317px 812px  #e0a2a2 , 1700px 529px  #a2c3e0 , 1797px 1062px  #e0a2a2 , 336px 848px  #a2c3e0 , 1759px 595px  #e0a2a2 , 129px 787px  #a2c3e0 , 1162px 312px  #e0a2a2 , 711px 838px  #a2c3e0 , 1385px 21px  #e0a2a2 , 1968px 37px  #a2c3e0 , 1245px 516px  #e0a2a2 , 1437px 1441px  #a2c3e0 , 1931px 586px  #e0a2a2 , 1738px 1618px  #a2c3e0 , 851px 675px  #e0a2a2 , 1605px 1214px  #a2c3e0 , 1032px 1453px  #e0a2a2 , 1898px 1988px  #a2c3e0 , 1830px 379px  #e0a2a2 , 1669px 1980px  #a2c3e0;
}


#stars4 {
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 680px 770px #a2c3e0 , 247px 1445px  #a2c3e0 , 529px 1582px  #e0a2a2 , 330px 634px  #a2c3e0 , 325px 600px  #e0a2a2 , 594px 1030px  #a2c3e0 , 1146px 353px  #e0a2a2 , 604px 1942px  #a2c3e0 , 1429px 662px  #e0a2a2 , 433px 1592px  #a2c3e0 , 1005px 1938px  #e0a2a2 , 1136px 1888px  #a2c3e0 , 899px 968px  #e0a2a2 , 1135px 654px  #a2c3e0 , 1282px 1546px  #e0a2a2 , 1966px 1420px  #a2c3e0 , 1838px 1237px  #e0a2a2 , 267px 694px  #a2c3e0 , 589px 1972px  #e0a2a2 , 381px 1011px  #a2c3e0 , 1207px 109px  #e0a2a2 , 68px 1569px  #a2c3e0 , 441px 140px  #e0a2a2 , 1729px 1984px  #a2c3e0 , 1718px 644px  #e0a2a2 , 1805px 747px  #a2c3e0 , 326px 1706px  #e0a2a2 , 1694px 688px  #a2c3e0 , 936px 1546px  #e0a2a2 , 1753px 1180px  #a2c3e0 , 1912px 346px  #e0a2a2 , 1246px 667px  #a2c3e0 , 266px 533px  #e0a2a2 , 173px 960px  #a2c3e0 , 444px 1351px  #e0a2a2 , 1482px 141px  #a2c3e0 , 282px 1485px  #e0a2a2 , 326px 1357px  #a2c3e0 , 1978px 285px  #e0a2a2 , 1847px 815px  #a2c3e0 , 1199px 1152px  #e0a2a2 , 749px 322px  #a2c3e0 , 214px 89px  #e0a2a2 , 1953px 895px  #a2c3e0 , 281px 560px  #e0a2a2 , 1304px 274px  #a2c3e0 , 1308px 664px  #e0a2a2 , 245px 1149px  #a2c3e0 , 1552px 1950px  #e0a2a2 , 1107px 462px  #a2c3e0 , 1424px 680px  #e0a2a2 , 1030px 1436px  #a2c3e0 , 247px 476px  #e0a2a2 , 684px 709px  #a2c3e0 , 578px 312px  #e0a2a2 , 1803px 1812px  #a2c3e0 , 1849px 925px  #e0a2a2 , 432px 1495px  #a2c3e0 , 1049px 1441px  #e0a2a2 , 1660px 758px  #a2c3e0 , 220px 1137px  #e0a2a2 , 262px 924px  #a2c3e0 , 11px 1779px  #e0a2a2 , 525px 599px  #a2c3e0 , 232px 388px  #e0a2a2 , 868px 1011px  #a2c3e0 , 171px 1074px  #e0a2a2 , 20px 341px  #a2c3e0 , 1377px 1408px  #e0a2a2 , 223px 856px  #a2c3e0 , 529px 768px  #e0a2a2 , 1493px 45px  #a2c3e0 , 217px 974px  #e0a2a2 , 297px 509px  #a2c3e0 , 215px 992px  #e0a2a2 , 1463px 1124px  #a2c3e0 , 51px 10px  #e0a2a2 , 1865px 784px  #a2c3e0 , 177px 1024px  #e0a2a2 , 1907px 288px  #a2c3e0 , 317px 812px  #e0a2a2 , 1700px 529px  #a2c3e0 , 1797px 1062px  #e0a2a2 , 336px 848px  #a2c3e0 , 1759px 595px  #e0a2a2 , 129px 787px  #a2c3e0 , 1162px 312px  #e0a2a2 , 711px 838px  #a2c3e0 , 1385px 21px  #e0a2a2 , 1968px 37px  #a2c3e0 , 1245px 516px  #e0a2a2 , 1437px 1441px  #a2c3e0 , 1931px 586px  #e0a2a2 , 1738px 1618px  #a2c3e0 , 851px 675px  #e0a2a2 , 1605px 1214px  #a2c3e0 , 1032px 1453px  #e0a2a2 , 1898px 1988px  #a2c3e0 , 1830px 379px  #e0a2a2 , 1669px 1980px  #a2c3e0;

  body.good-quality & {
    animation: animStar 50s linear infinite;
  }
zoom: 0.001;
}
#stars4:after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 680px 770px #a2c3e0 , 247px 1445px  #a2c3e0 , 529px 1582px  #e0a2a2 , 330px 634px  #a2c3e0 , 325px 600px  #e0a2a2 , 594px 1030px  #a2c3e0 , 1146px 353px  #e0a2a2 , 604px 1942px  #a2c3e0 , 1429px 662px  #e0a2a2 , 433px 1592px  #a2c3e0 , 1005px 1938px  #e0a2a2 , 1136px 1888px  #a2c3e0 , 899px 968px  #e0a2a2 , 1135px 654px  #a2c3e0 , 1282px 1546px  #e0a2a2 , 1966px 1420px  #a2c3e0 , 1838px 1237px  #e0a2a2 , 267px 694px  #a2c3e0 , 589px 1972px  #e0a2a2 , 381px 1011px  #a2c3e0 , 1207px 109px  #e0a2a2 , 68px 1569px  #a2c3e0 , 441px 140px  #e0a2a2 , 1729px 1984px  #a2c3e0 , 1718px 644px  #e0a2a2 , 1805px 747px  #a2c3e0 , 326px 1706px  #e0a2a2 , 1694px 688px  #a2c3e0 , 936px 1546px  #e0a2a2 , 1753px 1180px  #a2c3e0 , 1912px 346px  #e0a2a2 , 1246px 667px  #a2c3e0 , 266px 533px  #e0a2a2 , 173px 960px  #a2c3e0 , 444px 1351px  #e0a2a2 , 1482px 141px  #a2c3e0 , 282px 1485px  #e0a2a2 , 326px 1357px  #a2c3e0 , 1978px 285px  #e0a2a2 , 1847px 815px  #a2c3e0 , 1199px 1152px  #e0a2a2 , 749px 322px  #a2c3e0 , 214px 89px  #e0a2a2 , 1953px 895px  #a2c3e0 , 281px 560px  #e0a2a2 , 1304px 274px  #a2c3e0 , 1308px 664px  #e0a2a2 , 245px 1149px  #a2c3e0 , 1552px 1950px  #e0a2a2 , 1107px 462px  #a2c3e0 , 1424px 680px  #e0a2a2 , 1030px 1436px  #a2c3e0 , 247px 476px  #e0a2a2 , 684px 709px  #a2c3e0 , 578px 312px  #e0a2a2 , 1803px 1812px  #a2c3e0 , 1849px 925px  #e0a2a2 , 432px 1495px  #a2c3e0 , 1049px 1441px  #e0a2a2 , 1660px 758px  #a2c3e0 , 220px 1137px  #e0a2a2 , 262px 924px  #a2c3e0 , 11px 1779px  #e0a2a2 , 525px 599px  #a2c3e0 , 232px 388px  #e0a2a2 , 868px 1011px  #a2c3e0 , 171px 1074px  #e0a2a2 , 20px 341px  #a2c3e0 , 1377px 1408px  #e0a2a2 , 223px 856px  #a2c3e0 , 529px 768px  #e0a2a2 , 1493px 45px  #a2c3e0 , 217px 974px  #e0a2a2 , 297px 509px  #a2c3e0 , 215px 992px  #e0a2a2 , 1463px 1124px  #a2c3e0 , 51px 10px  #e0a2a2 , 1865px 784px  #a2c3e0 , 177px 1024px  #e0a2a2 , 1907px 288px  #a2c3e0 , 317px 812px  #e0a2a2 , 1700px 529px  #a2c3e0 , 1797px 1062px  #e0a2a2 , 336px 848px  #a2c3e0 , 1759px 595px  #e0a2a2 , 129px 787px  #a2c3e0 , 1162px 312px  #e0a2a2 , 711px 838px  #a2c3e0 , 1385px 21px  #e0a2a2 , 1968px 37px  #a2c3e0 , 1245px 516px  #e0a2a2 , 1437px 1441px  #a2c3e0 , 1931px 586px  #e0a2a2 , 1738px 1618px  #a2c3e0 , 851px 675px  #e0a2a2 , 1605px 1214px  #a2c3e0 , 1032px 1453px  #e0a2a2 , 1898px 1988px  #a2c3e0 , 1830px 379px  #e0a2a2 , 1669px 1980px  #a2c3e0;
}

#moon {
  display: none;
  width: 380px;
  height: 360px;
  overflow: hidden;
  position: fixed;
  top: 100%;
  left: 100%;
  /* box-shadow: -40px 0px 200px 10px rgba(112, 139, 162, 0.3), 40px 0px 200px 10px rgba(176, 146, 147, 0.3); */

  body.good-quality & {
    display: block;
    animation: rotate 10s infinite linear;
  }
  background: transparent url(/images/sorc.gif) no-repeat 0 0;
  background-size: 1100px;
  zoom: 0.6;
  z-index: 1;
}

#sun {
  display: none;
  width: 380px;
  height: 360px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 50%;
  /* box-shadow: -40px 0px 200px 10px rgba(112, 139, 162, 0.3), 40px 0px 200px 10px rgba(176, 146, 147, 0.3); */

  body.good-quality & {
    display: block;
    animation: rotate 30s infinite linear;
  }
  animation-delay: 5s;
  background: transparent url(/images/sorc.gif) no-repeat 0 0;
  background-size: 1100px;
  z-index: 1;
  zoom: 0.9;
  // filter: invert(1);

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    zoom: 0.6;
    display: none;
  }
}

#blackhole {
  overflow: hidden;
  position: absolute;
  top: 170px;
  left: calc(50% - 25vh);
  width: 50vh;
  height: 50vh;
  background: transparent url(/images/blackhole-7.png) no-repeat 0 0;

  @media (min-width: 768px) {
    top: 190px;
    top: 150px;
    left: calc(50% - 30vh);
    width: 60vh;
    height: 60vh;
  }

  filter: contrast(1.5);
  background-size: contain;

  body.good-quality & {
    animation-name: spin;
    animation-duration: 80000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

}

#guardian {
  overflow: hidden;
  position: fixed;
  top: calc(50% - 300px);
  left: calc(50% - 300px);
  background: transparent url(/images/tyrael.gif) no-repeat 0 0;

  width: 600px;
  height: 600px;
  /* mix-blend-mode: soft-light; */
  filter: contrast(1.2);
  background-size: contain;
  top: 43%;
  zoom: 0.6;
  mix-blend-mode: screen;
  /* animation: rotateStatic 20s infinite linear;
  animation-delay: 5s;
  transform: rotate(0deg); */


}
`

export default GlobalStyle
