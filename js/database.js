// Adres URL pliku JSON
const url = 'database.json';
parsedJSON = '';
searchResultsGL = '';
searchLock = 1;
current = 0;
searchText = '';

 // Inicjalizacja mapy
const aepMap = new Map();


csvData =`
identyfikator,skrajne_lata,link
AEp15,~1500,https://caak.upjp2.edu.pl/j/5fd9f6ca8fe5bb3c4fef4b1e/s/0/f
AEp35,1660,https://caak.upjp2.edu.pl/j/5fd9f6cea84a183c3fbab9e2/s/0/f
AEp80,1730,https://caak.upjp2.edu.pl/j/5e4a845085925c58390ac555/s/0/f
AEp81,1732,https://caak.upjp2.edu.pl/j/5f0d7c6565285c0903339d18/s/0/f
AEp82,1737,https://caak.upjp2.edu.pl/j/5f1a71493f5f2408d94abee2/s/0/f
AEp83,1738,https://caak.upjp2.edu.pl/j/5f0d7d738ec31f735295a94f/s/0/f
AEp87,1743,https://caak.upjp2.edu.pl/j/60a5194ba1fd3c0d6f2756b0/s/0/f
AEp88,1746,https://caak.upjp2.edu.pl/j/60a519a1b8ee080987a0285f/s/0/f
AEp89,1748,https://caak.upjp2.edu.pl/j/60a51a74b93d6c0967278bee/s/0/f
AEp90,1750,https://caak.upjp2.edu.pl/j/60a51addfcb1be07f560bfc1/s/0/f
AEp91,1752,https://caak.upjp2.edu.pl/j/60a62c36fdeed9095ec0e990/s/0/f
AEp92,1754,https://caak.upjp2.edu.pl/j/5f1031d578bbb208d7defdc7/s/0/f
AEp93,1756,https://caak.upjp2.edu.pl/j/5f2d40953ce7600867e3d3de/s/0/f
AEp94,1758,https://caak.upjp2.edu.pl/j/5f4f8e2f99b1ae0d2c1df953/s/0/f
AEp95,1757,https://caak.upjp2.edu.pl/j/5f105ad278bbb208d7df052b/s/0/f
AEp96,1758,https://caak.upjp2.edu.pl/j/5f0d8c7b3f5f2408d9485fec/s/0/f
AEp97,1758,https://caak.upjp2.edu.pl/j/5f0da2961536770904bff132/s/0/f
AEp98,1773,https://caak.upjp2.edu.pl/j/5f2bd0e3c7b200083bbe31a6/s/0/f
AEp99,1773,https://caak.upjp2.edu.pl/j/5f2bf33b5ec1890890969da6/s/0/f
AEp100,1773,https://caak.upjp2.edu.pl/j/5f6334fc9249af0ad4c5a232/s/0/f
AEp101,1782,https://caak.upjp2.edu.pl/j/60a657f38495dc0955f8848f/s/0/f
AEp102,1782,https://caak.upjp2.edu.pl/j/5f59eb1c4dbce3082cec6dfd/s/0/f
AEp103,1782,https://caak.upjp2.edu.pl/j/5f633200b4f16a0a7d276396/s/0/f
AEp104,1763,https://caak.upjp2.edu.pl/j/60a658d9d821e409356456cc/s/0/f
AEp105,1764,https://caak.upjp2.edu.pl/j/60a6593a18cc195ab86fc5f5/s/0/f
AEp106,1766,https://caak.upjp2.edu.pl/j/60a659de18cc195ab86fc5fa/s/0/f
AEp107,1769,https://caak.upjp2.edu.pl/j/60a65a66a0b2f25ee8c0d0d6/s/0/f
AEp108,1775,https://caak.upjp2.edu.pl/j/60e6d4a459a8ad5e381eb4eb/s/0/f
AEp109,1780,https://caak.upjp2.edu.pl/j/60e6d4bd4eb0f873e5e828cd/s/0/f
AEp110,1781,https://caak.upjp2.edu.pl/j/60e6d4e5822135619812579d/s/0/f
AEp111,1781,https://caak.upjp2.edu.pl/j/60e6d510f6ee3e1a7be48845/s/0/f
AEp112,1781,https://caak.upjp2.edu.pl/j/60e6d52692c63e2758433225/s/0/f
AEp113,1783,https://caak.upjp2.edu.pl/j/60e6d5324d1fcc2b340f6541/s/0/f
AEp114,1785,https://caak.upjp2.edu.pl/j/60e6d54b4eb0f873e5e8299a/s/0/f
AEp115,1787,https://caak.upjp2.edu.pl/j/60e6d566ec702c282485c918/s/0/f
AEp116,1789,https://caak.upjp2.edu.pl/j/60e6d59af6e9840d1bad6e96/s/0/f
AEp117,1789,https://caak.upjp2.edu.pl/j/60e6d5cd9d1b2334b76015b0/s/0/f
AEp118,1790,https://caak.upjp2.edu.pl/j/60e6d5e4f6e9840d1bad6ef2/s/0/f
AEp119,1790,https://caak.upjp2.edu.pl/j/60e6d5f7f6ee3e1a7be4897b/s/0/f
AEp120,1794,https://caak.upjp2.edu.pl/j/60e6d614ec702c282485c9e5/s/0/f
AEp121,1797,https://caak.upjp2.edu.pl/j/60e6d629f6e9840d1bad6f62/s/0/f
AEp122,1800,https://caak.upjp2.edu.pl/en/j/60e6d6297226e95d8f19c289/s/0/f
AEp123,1817,https://caak.upjp2.edu.pl/en/j/5f7da7c7924c0d4dfd2e231e/s/0/f
AEp124,1818,https://caak.upjp2.edu.pl/j/60e6d65cec702c282485c9f8/s/0/f
AEp125,1819,https://caak.upjp2.edu.pl/j/60e6d6734eb0f873e5e82aaa/s/0/f
AEp126,1819,https://caak.upjp2.edu.pl/j/60e6d684f6ee3e1a7be489c8/s/0/f
Aadm1,?,https://caak.upjp2.edu.pl/j/5e42838133a040386152a9bb/s/0/f
Aadm2,?,https://caak.upjp2.edu.pl/j/5e3c241d445e795858225922/s/0/f
Aadm3,1545-1546,https://caak.upjp2.edu.pl/j/5e42a30cd3b9d61aece6cd64/s/0/f
Aadm4,1546,https://caak.upjp2.edu.pl/j/5e43dfe55fbac11dd7389319/s/0/f
Aadm5,1550-1550,https://caak.upjp2.edu.pl/j/5e43ef3c1b28b362770dec86/s/0/f
Aadm6,1572-1572,https://caak.upjp2.edu.pl/j/5e4a5ea813e0af5864a7da2a/s/0/f
Aadm7,1591,https://caak.upjp2.edu.pl/j/5e4a719f13e0af5864a7e2d5/s/0/f
Aadm8,1600,https://caak.upjp2.edu.pl/j/5e4a7d4264a98b7072ba9751/s/0/f
Aadm9,1606-1607,https://caak.upjp2.edu.pl/j/5e564c6ae4b4d569f5565374/s/0/f
Aadm9a,1606-1607,https://caak.upjp2.edu.pl/j/5e5657dbf0c25e79af5dbeb1/s/0/f
Aadm10,1616,https://caak.upjp2.edu.pl/j/5e5666414a1503583a3e1941/s/0/f
Aadm15,1657-1658,https://caak.upjp2.edu.pl/j/5ea2b62eb3c7261dcd211e28/s/0/f
Aadm16,1680,https://caak.upjp2.edu.pl/j/5ea69e337346f71db9d78771/s/0/f
Aadm17,1681,https://caak.upjp2.edu.pl/j/5ea6bf93d5fa2a1dbd53b68f/s/0/f
Aadm18,1699,https://caak.upjp2.edu.pl/j/5ea7fcb76686c01d98900502/s/0/f
Aadm19,1702,https://caak.upjp2.edu.pl/j/5ea810d569bc731d9db3b190/s/0/f
Aadm20,1704,https://caak.upjp2.edu.pl/j/5eba66d48425ba0a10308a90/s/0/f
Aadm21,1705,https://caak.upjp2.edu.pl/j/5eba7427017c180a4077fe37/s/0/f
Aadm22,1706,https://caak.upjp2.edu.pl/j/5ec4f3c5f8027a0b2d623396/s/0/f
Aadm23,1707,https://caak.upjp2.edu.pl/j/5ec4fa34b970c20a0546014e/s/0/f
Aadm24,1719-1720,https://caak.upjp2.edu.pl/j/5ec4fe512cc5430a3ba4bf15/s/0/f
Aadm25,1732-1733,https://caak.upjp2.edu.pl/j/5ec78e43fb62a62b624e9a6e/s/0/f
Aadm26,1746,https://caak.upjp2.edu.pl/j/5ec7a09f017c180a4078dd75/s/0/f
Aadm27,1800,https://caak.upjp2.edu.pl/j/5ec7aca13126e52c128a075f/s/0/f
Aadm28,1841,https://caak.upjp2.edu.pl/j/5ec7b13e3caeaa0a34af765c/s/0/f
AG1,1746-1746,https://caak.upjp2.edu.pl/j/5e427f93eaf77f6b39fb5211/s/0/f
AG2,1748,https://caak.upjp2.edu.pl/j/5e429527445e79585823a538/s/0/f
AG3,1750-1754,https://caak.upjp2.edu.pl/j/5e42a84129fd527f3627d5e8/s/0/f
AG4,1759,https://caak.upjp2.edu.pl/j/5e43eca2e989ba5907d6ca1a/s/0/f
AG5,1784-1785,https://caak.upjp2.edu.pl/j/5e4fd0e5d3b9d61aececa2bd/s/0/f
AG6,1780,https://caak.upjp2.edu.pl/j/5e57aba55fa17b58888f6436/s/0/f
AG7,1786-1786,https://caak.upjp2.edu.pl/j/5e5e604e3e2e8847d13af884/s/0/f
AG8,1783-1792,https://caak.upjp2.edu.pl/j/5e679116f0ec1d0486a298eb/s/0/f
AG9,1783,https://caak.upjp2.edu.pl/j/5e662818225d0b0593ed2908/s/0/f
AG10,1786-1787,https://caak.upjp2.edu.pl/j/5e6616af9a34a1057efe311f/s/0/f
AG11,1787,https://caak.upjp2.edu.pl/j/5e6778ce65643a0487fda4be/s/0/f
AG12,1788-1791,https://caak.upjp2.edu.pl/j/5ecd0774b910e40a2f75e8fe/s/0/f
AG13,1800-1803,https://caak.upjp2.edu.pl/j/5ebbdd4fb910e40a2f74c5b3/s/0/f
AG14,1803-1804,https://caak.upjp2.edu.pl/j/5ebd2939559c490a4cbf413a/s/0/f
AG15,?,https://caak.upjp2.edu.pl/j/5ebd26166268a00a20b4b9f5/s/0/f
AEP71,~1690,https://sdm.upjp2.edu.pl/obiekty-archiwalne/volumen-v-actorum-episcopalium-r-d-joannis-malachowski-episcopi-cracoviensis-ducis-severiae-per-annos-1690-et-1691-acticatorum-quorum-index-ad-finem-praesentis-voluminis-exhibetur-adnotatus
AEP72,~1693,https://sdm.upjp2.edu.pl/obiekty-archiwalne/volumen-vi-actorum-episcopalium-r-d-joannis-malachowski-episcopi-cracoviensis-ducis-severiae-de-anno-1692-et-1693-quorum-index-ad-finem-videatur
AEP73,1694-1696,https://sdm.upjp2.edu.pl/obiekty-archiwalne/volumen-vii-actorum-episcopalium-joannis-malachowski-episcopi-cracoviensis-ducis-severiae-de-anno-1694-1696-quorum-index-ad-finem-videatur
AEP74,~1705,https://sdm.upjp2.edu.pl/obiekty-archiwalne/volumen-viii-actorum-episcopalium-r-d-joannis-malachowski-episcopi-cracoviensis-ducis-severiae-de-anno-1697-quorum-index-videatur-ad-finem
AEP76,1710-1713, https://sdm.upjp2.edu.pl/obiekty-archiwalne/acta-actorum-episcopalium-r-d-casimiri-a-lubna-lubinski-episcopi-cracoviensis-ducis-severiae-ab-anno-1710-usque-ad-annum-1713-conscripta-volumen-i
AEP75,~1712,https://sdm.upjp2.edu.pl/obiekty-archiwalne/volumen-ix-actorum-episcopalium-r-d-joannis-malachowski-episcopi-cracoviensis-ducis-severiae-de-anno-1698-et-1699-ad-diem-7-augusti-quorum-index-videatur-ad-finem
AEP70,1688-1689,https://sdm.upjp2.edu.pl/obiekty-archiwalne/acta-actorum-episcopalium-r-d-joannis-a-malachowice-malachowski-episcopi-cracoviensis-a-die-16-julii-anni-1688-et-1689-acticatorum-volumen-iv
AEP79,1670-1675, https://sdm.upjp2.edu.pl/obiekty-archiwalne/acta-actorum-episcopalium-r-d-andreae-trzebicki-ab-anno-1670-ad-annum-1675-mensem-martinum-acticatorum-volumen-v
AEP78,1720-1723,https://sdm.upjp2.edu.pl/obiekty-archiwalne/acta-actorum-episcopalium-r-d-constantini-feliciani-in-szaniawy-szaniawski-episcopi-cracoviensis-ducis-severiae-per-annos-1720-1723-conscripta-volumen-i
AEP77,1714-1719,https://sdm.upjp2.edu.pl/obiekty-archiwalne/acta-actorum-episcopalium-r-d-casimiri-a-lubna-lubinski-episcopi-cracoviensis-ducis-severiae-ab-anno-1714-ad-annum-1719-conscripta-volumen-ii
AOff206,1795-1796,https://caak.upjp2.edu.pl/en/j/5f3ccbaf1d8384083d69d5d1/s/0/f
AOff205,1791-1795,https://caak.upjp2.edu.pl/en/j/5f3ccda84d06ac088a8a08dd/s/0/f
AOff204,1778-1783,https://caak.upjp2.edu.pl/en/j/5f3cdb80d0cc44087e33f263/s/0/f
AOff203,1776-1777,https://caak.upjp2.edu.pl/en/j/5f3ceb03b593ba085fe9c490/s/0/f
AOff202,1774-1775,https://caak.upjp2.edu.pl/en/j/5f3cfb06b4ab9e61853d160a/s/0/f
AOff201,1771,https://caak.upjp2.edu.pl/en/j/5f573394d26cda5071a38ef0/s/0/f
AOff200,1768,https://caak.upjp2.edu.pl/en/j/5f57346a4c2b1a502c0041b5/s/0/f
AOff199,1767,https://caak.upjp2.edu.pl/en/j/5f57359a6d7df0505901ffbc/s/0/f
AOff198,1766,https://caak.upjp2.edu.pl/en/j/5f5736278ab7ae504d3180e7/s/0/f
AOff197,1765,https://caak.upjp2.edu.pl/en/j/5f573ca2311a5f507641818d/s/0/f
AOff196,1764,https://caak.upjp2.edu.pl/en/j/5f573df5aa682a7d5715cee9/s/0/f
AOff195,1763,https://caak.upjp2.edu.pl/en/j/5f573fbeb81c26503962fbf1/s/0/f
AOff194,1762,https://caak.upjp2.edu.pl/en/j/5f574181615c265040a6f94e/s/0/f
AOff193,1761,https://caak.upjp2.edu.pl/en/j/5f5743bd52f8d9501c589d8d/s/0/f
AOff192,1760,https://caak.upjp2.edu.pl/en/j/5f5744a0e697f85026be84b8/s/0/f
AOff191,1759,https://caak.upjp2.edu.pl/en/j/5f57458ff1eea150470092e8/s/0/f
AOff190,1758,https://caak.upjp2.edu.pl/en/j/5f5745cbd26cda5071a39ba5/s/0/f
AOff189,1757,https://caak.upjp2.edu.pl/en/j/5f57475faa682a7d5715d04c/s/0/f
AOff188,1756,https://caak.upjp2.edu.pl/en/j/5f5747dc5aa4a6504cbe3340/s/0/f
AOff187,1755,https://caak.upjp2.edu.pl/en/j/5f574869311a5f50764187fe/s/0/f
AOff186,1753,https://caak.upjp2.edu.pl/en/j/5f57578c5aa4a6504cbe3784/s/0/f
AOff185,1752,https://caak.upjp2.edu.pl/en/j/5f5759a05aa4a6504cbe3830/s/0/f
AOff184,1751,https://caak.upjp2.edu.pl/en/j/5f5759d85aa4a6504cbe3841/s/0/f
AOff183,1750,https://caak.upjp2.edu.pl/en/j/5f575a268e3237506bbbc5a0/s/0/f
AOff182,1748,https://caak.upjp2.edu.pl/en/j/5f575a9c3c9fd5353b10319f/s/0/f
AOff181,1747,https://caak.upjp2.edu.pl/en/j/5f575b04f1eea150470098bd/s/0/f
AOff180,1745-1746,https://caak.upjp2.edu.pl/en/j/5f575b7bd26cda5071a3a19b/s/0/f
AOff179,1744,https://caak.upjp2.edu.pl/en/j/5f575be05aa4a6504cbe3918/s/0/f
AOff178,1743,https://caak.upjp2.edu.pl/en/j/5f575c6e52f8d9501c58a419/s/0/f
AOff177,1741-1742,https://caak.upjp2.edu.pl/en/j/5f575e423c9fd5353b10337f/s/0/f
AOff176,1741,https://caak.upjp2.edu.pl/en/j/5f575e7f4c2b1a502c0055e2/s/0/f
AOff175,1738-1739,https://caak.upjp2.edu.pl/en/j/5f575ee5b4653c5063d4ffc8/s/0/f
AOff174,1737,https://caak.upjp2.edu.pl/en/j/5f8eb421d43d2c196ade8bdc/s/0/f
AOff173,1736,https://caak.upjp2.edu.pl/en/j/5f8eb67b9b7863394338ed2d/s/0/f
AOff172,1734-1735,https://caak.upjp2.edu.pl/en/j/5f8eb8f5cb3db053e8a7a3c4/s/0/f
AOff171,1730-1734,https://caak.upjp2.edu.pl/en/j/5fa3ddbfe001ab08a340fd08/s/0/f
AOff170,1729-1730,https://caak.upjp2.edu.pl/en/j/5ff850c0f235eb285e81d2f6/s/0/f
AOff169,1727-1728,https://caak.upjp2.edu.pl/en/j/5ff850f3f235eb285e81d2fb/s/0/f
AOff168,1724-1726,https://caak.upjp2.edu.pl/en/j/5ff85133619442067bf760ce/s/0/f
AOff167,1720-1723,https://caak.upjp2.edu.pl/en/j/5ff85173619442067bf760d3/s/0/f
AOff166,1714-1719,https://caak.upjp2.edu.pl/en/j/5ff851ad619442067bf760d8/s/0/f
AOff165,1710-1717,https://caak.upjp2.edu.pl/en/j/5ffc1f73301dd32857d16f82/s/0/f
AOff164,1697-1698,https://caak.upjp2.edu.pl/en/j/6006b04d1c1a805e226792cb/s/0/f
AOff163,1698,https://caak.upjp2.edu.pl/en/j/6006b071bf4340645ca4d52b/s/0/f
AOff162,1695,https://caak.upjp2.edu.pl/en/j/5f57394af1eea15047008a73/s/0/f
AOff161,1695,https://caak.upjp2.edu.pl/en/j/5f4f56c0b3c4720d19c4b537/s/0/f
AOff160,1690,https://caak.upjp2.edu.pl/en/j/6006b09f25c80368bfc42244/s/0/f
AOff159,1681,https://caak.upjp2.edu.pl/en/j/5f083a78ceca5f0928579b1e/s/0/f
AOff158,1671-1681,https://caak.upjp2.edu.pl/en/j/5f1a6ef4ceca5f09285c6658/s/0/f
AOff157,1686-189,https://caak.upjp2.edu.pl/en/j/6006b0d7b4a0126bb5b11446/s/0/f
AOff156,1683-1685,https://caak.upjp2.edu.pl/en/j/5f58d753d71fa1085963164f/s/0/f
AOff155,1678-1679,https://caak.upjp2.edu.pl/en/j/5f58a16b1a771a08293cb92e/s/0/f
AOff154,1675,https://caak.upjp2.edu.pl/en/j/5f084fccceca5f092857b668/s/0/f
AOff153,1676,https://caak.upjp2.edu.pl/en/j/5f1a6974abc17909014217f8/s/0/f
AOff152,1675,https://caak.upjp2.edu.pl/en/j/5f1a6b32c2c918091b45b7c0/s/0/f
AOff151,1647-1698,https://caak.upjp2.edu.pl/en/j/6006b12f9fb09a28639f19d6/s/0/f
AOff150,1673,https://caak.upjp2.edu.pl/en/j/60643ccf47e3216fcf2d376b/s/0/f
AOff149,1670,https://caak.upjp2.edu.pl/en/j/60a50cd3437c01093e9f6159/s/0/f
AOff148,1670,https://caak.upjp2.edu.pl/en/j/60a50d0eb93d6c096727829e/s/0/f
AOff147,1670,https://caak.upjp2.edu.pl/en/j/60a50d43fdeed9095ec0a8f6/s/0/f
AOff146,1670,https://caak.upjp2.edu.pl/en/j/60a50d7841f35c3242b3fd80/s/0/f
AOff145,1670,https://caak.upjp2.edu.pl/en/j/60a50dae0c7cc246cf5b93e1/s/0/f
AOff144,1670,https://caak.upjp2.edu.pl/en/j/60a50e30b93d6c096727839c/s/0/f
AOff143,1670,https://caak.upjp2.edu.pl/en/j/60a50e713892654460a1ac14/s/0/f
AOff142,1670,https://caak.upjp2.edu.pl/en/j/60a50e9c3892654460a1ac44/s/0/f
AOff141,1670,https://caak.upjp2.edu.pl/en/j/60a50ede5274e4697fdf0701/s/0/f
AOff140,1670,https://caak.upjp2.edu.pl/en/j/60a50f2114b3e109568e5dda/s/0/f
`;


// Funkcja do wczytywania i parsowania pliku JSON
async function fetchAndParseJson(url) {
  const statusField = document.getElementById("status");
  statusField.innerHTML = "Wczytywanie bazy...";
    try {
      const response = await fetch(url); // Pobierz dane z URL
      if (!response.ok) {
        statusField.innerHTML = "Błąd: Nie można wczytać bazy";
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json(); // Parsuj dane JSON
      return data;
    } catch (error) {
      statusField.innerHTML = "Błąd podczas wczytywania i parsowania pliku JSON";
      console.error('Błąd podczas wczytywania i parsowania pliku JSON:', error);
    }
  }
  
  function searchInJson(data, searchString) {
    const results = [];
    const searchLower = searchString.toLowerCase(); // Zamień szukaną frazę na małe litery

    data.pages.forEach(page => {
        if (page.pageData) {
            page.pageData.forEach((line, index) => {
                if (line.toLowerCase().includes(searchLower)) { // Zamień linię na małe litery i porównaj
                    results.push({
                        sourceFile: page.sourceFile,
                        pageName: page.pageName,
                        textData: page.pageData,
                    });
                }
            });
        }
    });
  
    searchResultsGL = results;
    return results;
  }
  
  function addElement(s1, s2, s3, s4) {
  
    // result header
    const rDiv = document.getElementById("results");
    if(s2 ==''){
      const newDiv2 = document.createElement("div");
      const Content2 = document.createTextNode(s1);
      newDiv2.className = 'rsum';
      newDiv2.appendChild(Content2);
      rDiv.appendChild(newDiv2);
      return;
    }

    // create a new div element
    const newDiv1 = document.createElement("div");
    const newDiv2 = document.createElement("div");
    const newDiv3 = document.createElement("div");
    const newDiv4 = document.createElement("div");
  
    // and give it some content
    const Content1 = document.createTextNode(s1);
    const Content2 = document.createTextNode("Strona " + s2);
    const Content3 = document.createTextNode(s3);
    const Content4 = document.createTextNode("Rok " + s4);
  
    // add the text node to the newly created div
    newDiv1.appendChild(Content1);
    newDiv2.appendChild(Content2);
    newDiv3.appendChild(Content3);
    newDiv4.appendChild(Content4);
  
    newDiv1.className = 'r1';
    newDiv2.className = 'r2';
    newDiv3.className = 'r3';
    newDiv4.className = 'r4';

    if (aepMap.has(s3.toLowerCase())){
      caak_data = aepMap.get(s3.toLowerCase());
      caak_url = caak_data.link;
      lata = caak_data.skrajneLata;
      if (caak_url.includes('sdm.upjp2.edu.pl'))
      {
        newDiv2.innerHTML = "Strona " + s2 + "<br/> <a href=" + caak_url + " target='_blank'> SKAN </a>";
      }
      else
      {
        var caak_page = parseInt(s2)-1;
        caak_url = caak_url.replace(/\/s\/\d+\//, `/s/${caak_page.toString()}/`);
        newDiv2.innerHTML = "Strona " + s2 + "<br/> <a href=" + caak_url + " target='_blank'> SKAN </a>";
      }
      const Content4 = document.createTextNode(lata);
      newDiv4.appendChild(Content4);
    }
  
    

    // add the newly created element and its content into the DOM

    rDiv.appendChild(newDiv3);
    rDiv.appendChild(newDiv4);
    rDiv.appendChild(newDiv2);
    rDiv.appendChild(newDiv1);
  }
  
  function showResults() {
    const resultDiv = document.getElementById("results");
    const nextRDiv = document.getElementById("next_results");
    if  (nextRDiv !== null){
      nextRDiv.remove();
    }
    searchResultsGL.slice(current, current+20).forEach(result => {
      addElement(result.textData, result.pageName, result.sourceFile,'');
    }); 
  
    current += 20;
    var divs = document.querySelectorAll('.r1');
  
    // highlight
    divs.forEach(function(div) {
      var text = div.textContent;
      var newText = text.replace(new RegExp(searchText, 'gi'), '<span class="highlight">' + searchText + '</span>');
      div.innerHTML = newText;
    })
    if (current < searchResultsGL.length){
      const nextDiv = document.createElement("div");
      nextDiv.innerHTML = "<a href='javascript:showResults();'> DALEJ >>> </a>",   "", "";
      nextDiv.id = "next_results";
      nextDiv.className = "next_results";
      resultDiv.appendChild(nextDiv);
    }
  }
  
  const form = document.getElementById("searchForm");
  form.addEventListener("submit", handleSearchResults);
  
  function handleSearchResults()
  {
    event.preventDefault();
    if (searchLock == 0){
  
      current = 0;
      var resultDiv = document.getElementById('results');
      resultDiv.style.display = 'block';
  
      var divElement = document.getElementById('results');
      divElement.innerHTML = '';
  
      searchText = document.getElementById("searchValue").value;
      const searchResults = searchInJson(parsedJSON,searchText);
  
      if (searchResults.length > 0) {
        console.log('Znaleziono dopasowania:');
        addElement("Znaleziono: " + searchResults.length + ' strony', '', '', '');
        showResults();
      } else {
        console.log('Nie znaleziono dopasowań.');
        addElement("Znaleziono: 0 stron", '', '', '');
      }
    }
  }

  const rows = csvData.split('\n').map(row => row.split(','));
  
  // Przetworzenie danych do mapy
  for (let i = 1; i < rows.length; i++) { // Rozpocznij od 1, pomijając nagłówek
    const row = rows[i];
    const identyfikator = row[0].toLowerCase();
    const skrajneLata = row[1];
    const link = row[2];
  
    // Dodaj do mapy
    aepMap.set(identyfikator, { skrajneLata, link });
  }
  
  // Przykład użycia mapy
  aepMap.forEach((value, key) => {
    console.log(`Identyfikator: ${key}, Skrajne lata: ${value.skrajneLata}, Link: ${value.link}`);
  });

  // Wywołaj funkcję i obsłuż wynik
  fetchAndParseJson(url)
    .then(parsedData => {
      console.log('Wczytane i sparsowane dane JSON');
      parsedJSON = parsedData;
      const statusField = document.getElementById("status");
      searchLock=0;
      statusField.innerHTML = "Załadowano: " + parsedJSON.pages.length + " stron";
      const dbinfo = document.getElementById("dbinfo");
      dbinfo.innerHTML = "Wersja bazy: " + parsedJSON.wersjaBazy;
    });
  