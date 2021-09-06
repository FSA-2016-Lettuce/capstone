const moment = require('moment');

const avatarList = [
  { src: '/avatarImages/girl_blueShirt_brownHair.jpeg' },
  { src: '/avatarImages/girl_brownShirt_redHair.jpeg' },
  { src: '/avatarImages/girl_purpleShirt_blueHair.jpeg' },
  { src: '/avatarImages/girl_redShirt_blonde.png' },
  { src: '/avatarImages/girl_redShirt_brownHair.jpeg' },
  { src: '/avatarImages/girl_redShirt_lightBrownHair.jpeg' },
  { src: '/avatarImages/guy_burgundyShirt_brownHair.jpeg' },
  { src: '/avatarImages/guy_greenShirt_brownHair.jpeg' },
  { src: '/avatarImages/guy_greyShirt_brownHair.jpeg' },
  { src: '/avatarImages/guy_yellopwShirt_brownHair.jpeg' },
  { src: '/avatarImages/guy_yellowShirt_blackHair.jpeg' },
  { src: '/avatarImages/guy_yellowShirt_brownHair.jpeg' },
  { src: '/avatarImages/lady_yellowShirtVest_greyHair.jpeg' },
  { src: '/avatarImages/oldGuy_greenShirt_greyHair.jpeg' },
  { src: '/avatarImages/YoungGirl_purpleShirt_blueHair.jpeg' },
  { src: '/avatarImages/youngGuy_redShirt_brownHair.jpeg' },
  { src: '/avatarImages/guy_burgundyShirt_blondeHair.jpeg' },
  { src: '/avatarImages/youngGirl_business_blonde.jpeg' },
];

const users = [
  {
    username: 'cody@gmail.com',
    firstName: 'Cody',
    lastName: 'Coder',
    password: 'cody123',
    pace: 300,
    distance: 5280,
    runningStyle: 'HOBBY',
    homeLat: 48.85837,
    homeLng: 2.294481,
    profileImg: '/cody.png',
  },
  {
    username: 'sarah@gmail.com',
    password: 'sarah123',
    firstName: 'Sarah',
    lastName: 'Z',
    pace: 420,
    distance: 15840,
    runningStyle: 'HOBBY',
    homeLat: 59.9375,
    homeLng: 30.308611,
  },
  {
    username: 'nicole@gmail.com',
    password: 'nicole123',
    firstName: 'Nicole',
    lastName: 'Y',
    pace: 540,
    distance: 31680,
    runningStyle: 'HOBBY',
    homeLat: -16.5004,
    homeLng: -151.7415,
  },
  {
    username: 'matt@gmail.com',
    password: 'matt123',
    firstName: 'Matt',
    lastName: 'G',
    pace: 480,
    distance: 15840,
    runningStyle: 'HOBBY',
    homeLat: 51.517677,
    homeLng: -0.120395,
  },
  {
    username: 'gary@gmail.com',
    password: 'gary123',
    firstName: 'Gary',
    lastName: 'K',
    pace: 450,
    distance: 52800,
    runningStyle: 'HOBBY',
    homeLat: 13.736717,
    homeLng: 100.523186,
  },
  {
    username: 'meredith@gmail.com',
    password: 'meredith123',
    firstName: 'Meredith',
    lastName: 'C',
    pace: 510,
    distance: 21120,
    runningStyle: 'HOBBY',
    homeLat: 49.2827,
    homeLng: -123.1207,
  },
];

const futureDate = moment().add(3, 'days');
const pastDate = moment().subtract(3, 'days');
const now = moment();

const runs = [
  {
    startDate: futureDate,
    pace: 300,
  },
  {
    startDate: futureDate,
    pace: 510,
  },
  {
    startDate: pastDate,
    pace: 510,
  },
  {
    startDate: pastDate,
    pace: 450,
  },
  {
    startDate: now,
    pace: 480,
  },
  {
    startDate: now,
    pace: 540,
  },
  {
    startDate: futureDate,
    pace: 540,
  },
  {
    startDate: futureDate,
    pace: 510,
  },
  {
    startDate: futureDate,
    pace: 450,
  },
  {
    startDate: now,
    pace: 480,
  },
  {
    startDate: pastDate,
    pace: 420,
  },
];

const routes = [
  { name: 'Crocheron Park Run' },
  { name: 'English Bay Scramble' },
  { name: 'Stanley Park Stroll' },
  { name: 'Chinatown Jaunt' },
  { name: 'Yaletown Docks' },
  { name: 'Burrard Street Bridge' },
  { name: 'Stroll Like A Queen' },
  { name: "St. Paul's" },
  { name: "Regent's Park" },
  { name: 'Tower & Millenium Bridges' },
  { name: 'Whitechapel Haunt' },
];

const routeOnePath = [
  [40.759253, -73.774953],
  [40.76006, -73.775218],
  [40.76147, -73.769917],
  [40.76897, -73.77377],
  [40.769715, -73.770168],
  [40.769894, -73.7702],
  [40.770144, -73.7693],
  [40.77027, -73.7686],
  [40.770356, -73.768239],
  [40.770602, -73.768027],
  [40.770823, -73.767928],
  [40.770983, -73.76762],
  [40.771018, -73.766655],
  [40.771454, -73.766332],
  [40.771796, -73.766354],
  [40.772013, -73.766907],
  [40.771954, -73.767954],
  [40.77152, -73.769428],
  [40.77087, -73.770246],
  [40.770289, -73.77063],
  [40.770283, -73.770803],
  [40.769648, -73.770643],
  [40.767974, -73.77836],
  [40.760309, -73.774321],
  [40.760077, -73.775225],
  [40.759253, -73.774953],
];

const routeOneWaypoints = routeOnePath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 1,
}));

const routeTwoPath = [
  [49.26086978, -123.1435138],
  [49.26105353, -123.1635865],
  [49.26149321, -123.1669933],
  [49.26232262, -123.1685656],
  [49.26248993, -123.1839006],
  [49.27221866, -123.1835082],
  [49.27254387, -123.1825783],
  [49.27201854, -123.177977],
  [49.27156186, -123.1715494],
  [49.27298432, -123.1659657],
  [49.27385386, -123.1642179],
  [49.27385386, -123.1609613],
  [49.27326085, -123.1596534],
  [49.26575179, -123.1600688],
  [49.26553691, -123.1433138],
  [49.26122888, -123.1434779],
];

const routeTwoWaypoints = routeTwoPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 2,
}));

const routeThreePath = [
  [49.28535653, -123.1281469],
  [49.29325728, -123.1402706],
  [49.29305788, -123.1424427],
  [49.29308353, -123.1445856],
  [49.29287232, -123.1465409],
  [49.29355503, -123.1479299],
  [49.29500412, -123.1485915],
  [49.29630657, -123.1510742],
  [49.29729015, -123.1496467],
  [49.29765534, -123.1473982],
  [49.2978745, -123.1452097],
  [49.29852666, -123.145131],
  [49.29989938, -123.1443517],
  [49.30197614, -123.1448979],
  [49.30293353, -123.14587],
  [49.30380763, -123.146145],
  [49.30357656, -123.1471938],
  [49.3030118, -123.1477377],
  [49.30167259, -123.1481007],
  [49.30061919, -123.1501032],
  [49.30007161, -123.1527255],
  [49.30058803, -123.1549097],
  [49.30064838, -123.1567775],
  [49.29952483, -123.1576054],
  [49.29816941, -123.1570298],
  [49.29801946, -123.153522],
  [49.2967165, -123.1511483],
  [49.29618451, -123.1491127],
  [49.29611891, -123.1468669],
  [49.29509087, -123.1451693],
  [49.29373555, -123.1426116],
  [49.29251086, -123.1413303],
  [49.28466671, -123.1290667],
  [49.2853623, -123.1280515],
];

const routeThreeWaypoints = routeThreePath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 3,
}));

const routeFourPath = [
  [49.28517411, -123.1210279],
  [49.28554709, -123.1206861],
  [49.28623348, -123.1193725],
  [49.2852179, -123.1178387],
  [49.28626877, -123.1162912],
  [49.28192758, -123.1095983],
  [49.28091279, -123.1042965],
  [49.2808242, -123.0996459],
  [49.27949231, -123.09979],
  [49.27939492, -123.1015423],
  [49.27920141, -123.1043624],
  [49.27971774, -123.1077012],
  [49.28107741, -123.1076247],
  [49.28155304, -123.110195],
  [49.28662603, -123.1178738],
  [49.28476544, -123.1205994],
  [49.28519113, -123.1209255],
];

const routeFourWaypoints = routeFourPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 4,
}));

const routeFivePath = [
  [49.27926713, -123.1230162],
  [49.27712616, -123.126299],
  [49.27528959, -123.1233816],
  [49.27296272, -123.1197626],
  [49.26921431, -123.1177067],
  [49.26853463, -123.1168481],
  [49.26756337, -123.115882],
  [49.26684047, -123.1177865],
  [49.26667412, -123.1193413],
  [49.26655274, -123.120335],
  [49.26621784, -123.1205982],
  [49.2662886, -123.127596],
  [49.26757875, -123.125109],
  [49.26796698, -123.1227137],
  [49.26844056, -123.1217238],
  [49.2679035, -123.1211286],
  [49.26766003, -123.119136],
  [49.26917583, -123.1187329],
  [49.26944056, -123.1177979],
  [49.27003436, -123.1181245],
  [49.2731507, -123.1199989],
  [49.27500063, -123.1229541],
  [49.27644804, -123.1251016],
  [49.27862528, -123.1220025],
  [49.27925728, -123.123033],
];

const routeFiveWaypoints = routeFivePath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 5,
}));

const routeSixPath = [
  [49.27899545, -123.1332087],
  [49.27769949, -123.1312699],
  [49.27687075, -123.1327473],
  [49.27260784, -123.1451923],
  [49.27250219, -123.1503313],
  [49.27759868, -123.1500106],
  [49.27758899, -123.1515711],
  [49.27665519, -123.1520656],
  [49.27324513, -123.1551996],
  [49.26730945, -123.1551872],
  [49.26716797, -123.1455727],
  [49.27178137, -123.1455341],
  [49.27301074, -123.1445816],
  [49.27720716, -123.1325947],
  [49.27826737, -123.1344236],
  [49.27901129, -123.1333431],
];

const routeSixWaypoints = routeSixPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 6,
}));

const routeSevenPath = [
  [51.50205916, -0.140057453],
  [51.50157655, -0.141236514],
  [51.50064111, -0.143556898],
  [51.50116873, -0.144106708],
  [51.50114188, -0.144276358],
  [51.50116393, -0.144491983],
  [51.50122123, -0.144709179],
  [51.5013138, -0.14491332],
  [51.50157476, -0.145343165],
  [51.50169648, -0.145439242],
  [51.50177664, -0.145572473],
  [51.50184236, -0.145784304],
  [51.50187743, -0.14598019],
  [51.50188252, -0.146149714],
  [51.50184153, -0.146355301],
  [51.50188665, -0.14645207],
  [51.50207343, -0.146597098],
  [51.50207929, -0.146921268],
  [51.50191221, -0.147512653],
  [51.50182441, -0.147555463],
  [51.50170397, -0.147687353],
  [51.50159278, -0.147881436],
  [51.501515, -0.14806414],
  [51.50150007, -0.148246258],
  [51.50152546, -0.148441955],
  [51.50160965, -0.148604249],
  [51.50173294, -0.148762143],
  [51.5018591, -0.148850321],
  [51.50197398, -0.14891943],
  [51.50205478, -0.148947362],
  [51.50212831, -0.149321447],
  [51.50216532, -0.149594047],
  [51.50217757, -0.149684697],
  [51.50207628, -0.14972734],
  [51.50199051, -0.149857993],
  [51.50191465, -0.150064251],
  [51.50187701, -0.150263426],
  [51.50183656, -0.150446654],
  [51.50179868, -0.150531312],
  [51.5016837, -0.150545645],
  [51.50162077, -0.150492315],
  [51.50113411, -0.149575649],
  [51.50056901, -0.14883515],
  [51.50044094, -0.14865079],
  [51.50032947, -0.148442017],
  [51.50022868, -0.148319285],
  [51.49990903, -0.148018626],
  [51.49980258, -0.147837871],
  [51.49970289, -0.147511354],
  [51.49952021, -0.147586854],
  [51.49941678, -0.147556176],
  [51.49929213, -0.147456976],
  [51.4990737, -0.147222555],
  [51.49886256, -0.146920953],
  [51.4987676, -0.146654849],
  [51.49873664, -0.146439204],
  [51.4987778, -0.145847881],
  [51.49889183, -0.145582301],
  [51.49907314, -0.145196398],
  [51.49924647, -0.144854521],
  [51.49932951, -0.144708382],
  [51.49928043, -0.144406068],
  [51.49921754, -0.14403234],
  [51.49922315, -0.143879706],
  [51.49930785, -0.143737213],
  [51.49944627, -0.143644803],
  [51.49953766, -0.143552707],
  [51.49956126, -0.143423856],
  [51.49961901, -0.143237107],
  [51.49976155, -0.143076761],
  [51.49998544, -0.142919496],
  [51.50039054, -0.143310658],
  [51.50063633, -0.143549962],
  [51.5020533, -0.140045111],
];

const routeSevenWaypoints = routeSevenPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 7,
}));

const routeEightPath = [
  [51.51327638, -0.099095847],
  [51.51328299, -0.098420286],
  [51.51089315, -0.086649433],
  [51.51074021, -0.085277106],
  [51.51062987, -0.083196424],
  [51.50967703, -0.080644889],
  [51.5103225, -0.080329855],
  [51.51080933, -0.080219717],
  [51.5114993, -0.080016833],
  [51.51204124, -0.080389974],
  [51.51174514, -0.081507554],
  [51.51156912, -0.082929293],
  [51.51191625, -0.085123423],
  [51.51212837, -0.085949209],
  [51.51288927, -0.087921303],
  [51.51286188, -0.088512981],
  [51.51459802, -0.089749312],
  [51.51485669, -0.089741936],
  [51.51513124, -0.092201103],
  [51.51525439, -0.092994953],
  [51.51562374, -0.093942694],
  [51.5160066, -0.095850583],
  [51.51631498, -0.096602943],
  [51.51635023, -0.096952468],
  [51.51533424, -0.097231166],
  [51.51514414, -0.097735673],
  [51.51584755, -0.100553585],
  [51.51533914, -0.10079666],
  [51.51451177, -0.100663137],
  [51.51381843, -0.100763468],
  [51.51344987, -0.099919913],
  [51.51328412, -0.099023972],
];

const routeEightWaypoints = routeEightPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 8,
}));

const routeNinePath = [
  [51.52503751, -0.14711139],
  [51.5366257, -0.152302408],
  [51.53651846, -0.152812949],
  [51.53507801, -0.158869461],
  [51.53502726, -0.158799598],
  [51.53195659, -0.159973484],
  [51.53237273, -0.163658755],
  [51.5323517, -0.163756236],
  [51.53229963, -0.163686834],
  [51.53191005, -0.162390741],
  [51.52979608, -0.157517963],
  [51.52955924, -0.15715729],
  [51.52856724, -0.155386173],
  [51.52813694, -0.155824944],
  [51.52770465, -0.155941285],
  [51.52742966, -0.155905159],
  [51.52693731, -0.15566464],
  [51.52668645, -0.155330873],
  [51.5263617, -0.154738566],
  [51.52623924, -0.154313205],
  [51.5261967, -0.15406355],
  [51.52764574, -0.153679303],
  [51.52830048, -0.149865914],
  [51.52480964, -0.148436464],
  [51.52503711, -0.147118242],
];

const routeNineWaypoints = routeNinePath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 9,
}));

const routeTenPath = [
  [51.51124471, -0.098407399],
  [51.51119831, -0.095672049],
  [51.5108211, -0.09302102],
  [51.51033001, -0.090106633],
  [51.50969657, -0.087177576],
  [51.50903188, -0.082001332],
  [51.50924818, -0.080708759],
  [51.50956287, -0.079955813],
  [51.50959335, -0.079064732],
  [51.50946056, -0.077719353],
  [51.50955895, -0.076113192],
  [51.50937334, -0.076053282],
  [51.50942214, -0.075543097],
  [51.50904607, -0.07406258],
  [51.50707153, -0.074433563],
  [51.50299472, -0.077175996],
  [51.50292862, -0.07723182],
  [51.50288827, -0.077350591],
  [51.50290609, -0.077483088],
  [51.50328715, -0.079015049],
  [51.50321895, -0.07907301],
  [51.50349097, -0.079917382],
  [51.50368337, -0.080757332],
  [51.50528, -0.084764007],
  [51.50569716, -0.08576158],
  [51.50619525, -0.088380463],
  [51.50482417, -0.090128258],
  [51.50470583, -0.092277881],
  [51.5049269, -0.095652519],
  [51.50514903, -0.097191604],
  [51.50663437, -0.097912406],
  [51.50673714, -0.098080421],
  [51.50696243, -0.097906371],
  [51.50713431, -0.097599928],
  [51.50736151, -0.097868401],
  [51.50777371, -0.097812451],
  [51.50785845, -0.097918462],
  [51.50798379, -0.097923281],
  [51.50808491, -0.098070363],
  [51.50814191, -0.098178887],
  [51.50820088, -0.098271822],
  [51.50843971, -0.098273791],
  [51.50846303, -0.098567619],
  [51.5086063, -0.098587966],
  [51.51123742, -0.098406435],
];

const routeTenWaypoints = routeTenPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 10,
}));

const routeElevenPath = [
  [51.51526607, -0.07175169],
  [51.51620642, -0.069432626],
  [51.51744034, -0.066640824],
  [51.51854321, -0.062630251],
  [51.51995699, -0.05628163],
  [51.52106719, -0.049984641],
  [51.5206573, -0.049670152],
  [51.5184943, -0.045617502],
  [51.51829725, -0.044654254],
  [51.51781803, -0.043318933],
  [51.51771276, -0.042668665],
  [51.51676168, -0.042586606],
  [51.51602451, -0.041635092],
  [51.51569641, -0.041434681],
  [51.51476222, -0.041376804],
  [51.51296858, -0.041762833],
  [51.5132358, -0.043631494],
  [51.5131692, -0.045740465],
  [51.51342802, -0.048127966],
  [51.51417512, -0.052749161],
  [51.51465024, -0.058773905],
  [51.51508268, -0.070107495],
  [51.51555896, -0.070635094],
  [51.51526305, -0.071746996],
];

const routeElevenWaypoints = routeElevenPath.map((coord, index) => ({
  pathIndex: index + 1,
  latitude: coord[0],
  longitude: coord[1],
  routeId: 11,
}));

module.exports = {
  avatarList,
  runs,
  users,
  routes,
  routeOneWaypoints,
  routeTwoWaypoints,
  routeThreeWaypoints,
  routeFourWaypoints,
  routeFiveWaypoints,
  routeSixWaypoints,
  routeSevenWaypoints,
  routeEightWaypoints,
  routeNineWaypoints,
  routeTenWaypoints,
  routeElevenWaypoints,
};
