// This is for the moustache-like templates
// prevents collisions with JSP tags
_.templateSettings = {
	interpolate : /\{\{(.+?)\}\}/g
};

$(document).ready(function() {
	//var mainView = new MainView({el: "#main_container"});
	//mainView.render();

	// TODO test code, get data from server!
	var elements = {
		"nodes" : [ {
			"data" : {
				"id" : "2243",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "STAT6pY641",
				"__glayCluster" : 1,
				"SUID" : 2243,
				"name" : "STAT6pY641",
				"shared_name" : "STAT6pY641"
			},
			"position" : {
				"x" : 1231.3846435546875,
				"y" : 604.4743041992188
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2242",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "4EBP1pS65",
				"__glayCluster" : 1,
				"SUID" : 2242,
				"name" : "4EBP1pS65",
				"shared_name" : "4EBP1pS65"
			},
			"position" : {
				"x" : 1246.0,
				"y" : 863.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2241",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "Collagenase",
				"__glayCluster" : 1,
				"SUID" : 2241,
				"name" : "Collagenase",
				"shared_name" : "Collagenase"
			},
			"position" : {
				"x" : 1062.3809814453125,
				"y" : 1019.6872253417969
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2105",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "CyclinD1",
				"__glayCluster" : 1,
				"SUID" : 2105,
				"name" : "CyclinD1",
				"Degree" : 7,
				"shared_name" : "CyclinD1"
			},
			"position" : {
				"x" : 1159.0,
				"y" : 679.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2106",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "RbpS807",
				"__glayCluster" : 1,
				"SUID" : 2106,
				"name" : "RbpS807",
				"Degree" : 5,
				"shared_name" : "RbpS807"
			},
			"position" : {
				"x" : 1059.1090087890625,
				"y" : 853.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2107",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PLK1",
				"__glayCluster" : 8,
				"SUID" : 2107,
				"name" : "PLK1",
				"Degree" : 4,
				"shared_name" : "PLK1"
			},
			"position" : {
				"x" : 1205.0,
				"y" : 995.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2108",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "CyclinE1",
				"__glayCluster" : 1,
				"SUID" : 2108,
				"name" : "CyclinE1",
				"Degree" : 3,
				"shared_name" : "CyclinE1"
			},
			"position" : {
				"x" : 865.0,
				"y" : 847.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2109",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aCDK4",
				"__glayCluster" : 2,
				"SUID" : 2109,
				"name" : "aCDK4",
				"Degree" : 2,
				"shared_name" : "aCDK4"
			},
			"position" : {
				"x" : 1052.0,
				"y" : 585.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2240",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "MEKpS217",
				"__glayCluster" : 8,
				"SUID" : 2240,
				"name" : "MEKpS217",
				"shared_name" : "MEKpS217"
			},
			"position" : {
				"x" : 859.0,
				"y" : 416.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2239",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "MAPKpT202",
				"__glayCluster" : 8,
				"SUID" : 2239,
				"name" : "MAPKpT202",
				"shared_name" : "MAPKpT202"
			},
			"position" : {
				"x" : 1071.4234619140625,
				"y" : 337.16656494140625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2238",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aMEK",
				"__glayCluster" : 8,
				"SUID" : 2238,
				"name" : "aMEK",
				"shared_name" : "aMEK"
			},
			"position" : {
				"x" : 998.0,
				"y" : 259.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2237",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "bRAF",
				"__glayCluster" : 6,
				"SUID" : 2237,
				"name" : "bRAF",
				"shared_name" : "bRAF"
			},
			"position" : {
				"x" : 541.8778076171875,
				"y" : 668.3876953125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2236",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "SRCpY416",
				"__glayCluster" : 8,
				"SUID" : 2236,
				"name" : "SRCpY416",
				"shared_name" : "SRCpY416"
			},
			"position" : {
				"x" : 879.0,
				"y" : 546.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2235",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "SRC",
				"__glayCluster" : 8,
				"SUID" : 2235,
				"name" : "SRC",
				"shared_name" : "SRC"
			},
			"position" : {
				"x" : 815.731201171875,
				"y" : 416.1498718261719
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2234",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aBRAFm",
				"__glayCluster" : 6,
				"SUID" : 2234,
				"name" : "aBRAFm",
				"shared_name" : "aBRAFm"
			},
			"position" : {
				"x" : 751.0,
				"y" : 318.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2116",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aSRC",
				"__glayCluster" : 8,
				"SUID" : 2116,
				"name" : "aSRC",
				"Degree" : 1,
				"shared_name" : "aSRC"
			},
			"position" : {
				"x" : 844.1795654296875,
				"y" : 612.3077392578125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2233",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "4EBP1pT70",
				"__glayCluster" : 1,
				"SUID" : 2233,
				"name" : "4EBP1pT70",
				"shared_name" : "4EBP1pT70"
			},
			"position" : {
				"x" : 855.1755981445312,
				"y" : 1162.304443359375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2232",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "S6",
				"__glayCluster" : 1,
				"SUID" : 2232,
				"name" : "S6",
				"shared_name" : "S6"
			},
			"position" : {
				"x" : 832.3461303710938,
				"y" : 1286.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2231",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "TSC2",
				"__glayCluster" : 6,
				"SUID" : 2231,
				"name" : "TSC2",
				"shared_name" : "TSC2"
			},
			"position" : {
				"x" : 578.6795654296875,
				"y" : 949.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2230",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PAI-1",
				"__glayCluster" : 6,
				"SUID" : 2230,
				"name" : "PAI-1",
				"shared_name" : "PAI-1"
			},
			"position" : {
				"x" : 585.6094360351562,
				"y" : 1099.3429565429688
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2229",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "AKTpT308",
				"__glayCluster" : 3,
				"SUID" : 2229,
				"name" : "AKTpT308",
				"shared_name" : "AKTpT308"
			},
			"position" : {
				"x" : 570.0,
				"y" : 454.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2228",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "AKTpS473",
				"__glayCluster" : 3,
				"SUID" : 2228,
				"name" : "AKTpS473",
				"shared_name" : "AKTpS473"
			},
			"position" : {
				"x" : 643.3810424804688,
				"y" : 250.25889587402344
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2227",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "mTORpS2448",
				"__glayCluster" : 6,
				"SUID" : 2227,
				"name" : "mTORpS2448",
				"shared_name" : "mTORpS2448"
			},
			"position" : {
				"x" : 506.0,
				"y" : 465.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2226",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aAKT",
				"__glayCluster" : 3,
				"SUID" : 2226,
				"name" : "aAKT",
				"shared_name" : "aAKT"
			},
			"position" : {
				"x" : 502.0,
				"y" : 383.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2225",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aPI3K",
				"__glayCluster" : 3,
				"SUID" : 2225,
				"name" : "aPI3K",
				"shared_name" : "aPI3K"
			},
			"position" : {
				"x" : 572.0,
				"y" : 150.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2224",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "IGF1R-beta",
				"__glayCluster" : 8,
				"SUID" : 2224,
				"name" : "IGF1R-beta",
				"shared_name" : "IGF1R-beta"
			},
			"position" : {
				"x" : 717.384521484375,
				"y" : 720.5770874023438
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2223",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "b-Catenin",
				"__glayCluster" : 8,
				"SUID" : 2223,
				"name" : "b-Catenin",
				"shared_name" : "b-Catenin"
			},
			"position" : {
				"x" : 656.0,
				"y" : 533.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2122",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aPKC",
				"__glayCluster" : 8,
				"SUID" : 2122,
				"name" : "aPKC",
				"Degree" : 1,
				"shared_name" : "aPKC"
			},
			"position" : {
				"x" : 745.1795654296875,
				"y" : 609.5640869140625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2110",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "BIM",
				"__glayCluster" : 1,
				"SUID" : 2110,
				"name" : "BIM",
				"Degree" : 2,
				"shared_name" : "BIM"
			},
			"position" : {
				"x" : 1140.0897216796875,
				"y" : 550.2179565429688
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2222",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "p53",
				"__glayCluster" : 3,
				"SUID" : 2222,
				"name" : "p53",
				"shared_name" : "p53"
			},
			"position" : {
				"x" : 570.0,
				"y" : 325.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2221",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "Caveolin",
				"__glayCluster" : 3,
				"SUID" : 2221,
				"name" : "Caveolin",
				"shared_name" : "Caveolin"
			},
			"position" : {
				"x" : 564.0,
				"y" : 578.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2220",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "SMAD3",
				"__glayCluster" : 4,
				"SUID" : 2220,
				"name" : "SMAD3",
				"shared_name" : "SMAD3"
			},
			"position" : {
				"x" : 690.0,
				"y" : 835.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2111",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "CyclinB1",
				"__glayCluster" : 8,
				"SUID" : 2111,
				"name" : "CyclinB1",
				"Degree" : 2,
				"shared_name" : "CyclinB1"
			},
			"position" : {
				"x" : 1270.845947265625,
				"y" : 1104.34619140625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2123",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "Fibronectin",
				"__glayCluster" : 6,
				"SUID" : 2123,
				"name" : "Fibronectin",
				"Degree" : 1,
				"shared_name" : "Fibronectin"
			},
			"position" : {
				"x" : 817.8460083007812,
				"y" : 656.3077392578125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2124",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "ACCpS79",
				"__glayCluster" : 2,
				"SUID" : 2124,
				"name" : "ACCpS79",
				"Degree" : 2,
				"shared_name" : "ACCpS79"
			},
			"position" : {
				"x" : 1186.8590087890625,
				"y" : 803.9362182617188
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2219",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "GSK3abpS21",
				"__glayCluster" : 7,
				"SUID" : 2219,
				"name" : "GSK3abpS21",
				"shared_name" : "GSK3abpS21"
			},
			"position" : {
				"x" : 672.7347412109375,
				"y" : 635.2720947265625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2218",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "AKT",
				"__glayCluster" : 6,
				"SUID" : 2218,
				"name" : "AKT",
				"shared_name" : "AKT"
			},
			"position" : {
				"x" : 731.0,
				"y" : 504.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2113",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "p27",
				"__glayCluster" : 4,
				"SUID" : 2113,
				"name" : "p27",
				"Degree" : 3,
				"shared_name" : "p27"
			},
			"position" : {
				"x" : 571.9151000976562,
				"y" : 765.3875732421875
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2217",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "GSK3ab",
				"__glayCluster" : 7,
				"SUID" : 2217,
				"name" : "GSK3ab",
				"shared_name" : "GSK3ab"
			},
			"position" : {
				"x" : 710.5,
				"y" : 794.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2216",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "GSKpS9",
				"__glayCluster" : 7,
				"SUID" : 2216,
				"name" : "GSKpS9",
				"shared_name" : "GSKpS9"
			},
			"position" : {
				"x" : 811.0,
				"y" : 545.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2215",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PKCa",
				"__glayCluster" : 7,
				"SUID" : 2215,
				"name" : "PKCa",
				"shared_name" : "PKCa"
			},
			"position" : {
				"x" : 937.0,
				"y" : 326.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2214",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "STAT3",
				"__glayCluster" : 3,
				"SUID" : 2214,
				"name" : "STAT3",
				"shared_name" : "STAT3"
			},
			"position" : {
				"x" : 905.7279663085938,
				"y" : 266.1905517578125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2213",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "IGFBP2",
				"__glayCluster" : 6,
				"SUID" : 2213,
				"name" : "IGFBP2",
				"shared_name" : "IGFBP2"
			},
			"position" : {
				"x" : 991.0,
				"y" : 452.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2212",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "p38pT180",
				"__glayCluster" : 7,
				"SUID" : 2212,
				"name" : "p38pT180",
				"shared_name" : "p38pT180"
			},
			"position" : {
				"x" : 1006.7562866210938,
				"y" : 174.60252380371094
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2211",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "p38",
				"__glayCluster" : 7,
				"SUID" : 2211,
				"name" : "p38",
				"shared_name" : "p38"
			},
			"position" : {
				"x" : 1134.79541015625,
				"y" : 269.85887145996094
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2210",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "BCL-XL",
				"__glayCluster" : 3,
				"SUID" : 2210,
				"name" : "BCL-XL",
				"shared_name" : "BCL-XL"
			},
			"position" : {
				"x" : 470.1925354003906,
				"y" : 292.5640869140625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2209",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "BCL2",
				"__glayCluster" : 3,
				"SUID" : 2209,
				"name" : "BCL2",
				"shared_name" : "BCL2"
			},
			"position" : {
				"x" : 511.37200927734375,
				"y" : 189.34613037109375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2208",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aHDAC",
				"__glayCluster" : 3,
				"SUID" : 2208,
				"name" : "aHDAC",
				"shared_name" : "aHDAC"
			},
			"position" : {
				"x" : 744.662841796875,
				"y" : 245.93163299560547
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2207",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "p70S6KpT389",
				"__glayCluster" : 6,
				"SUID" : 2207,
				"name" : "p70S6KpT389",
				"shared_name" : "p70S6KpT389"
			},
			"position" : {
				"x" : 422.5518035888672,
				"y" : 391.16656494140625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2206",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "amTOR",
				"__glayCluster" : 6,
				"SUID" : 2206,
				"name" : "amTOR",
				"shared_name" : "amTOR"
			},
			"position" : {
				"x" : 416.9754638671875,
				"y" : 282.4100036621094
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2117",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "SRCpY527",
				"__glayCluster" : 2,
				"SUID" : 2117,
				"name" : "SRCpY527",
				"Degree" : 1,
				"shared_name" : "SRCpY527"
			},
			"position" : {
				"x" : 944.0,
				"y" : 417.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2205",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PI3Kp85",
				"__glayCluster" : 2,
				"SUID" : 2205,
				"name" : "PI3Kp85",
				"shared_name" : "PI3Kp85"
			},
			"position" : {
				"x" : 1032.0,
				"y" : 521.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2204",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "STAT3pY705",
				"__glayCluster" : 2,
				"SUID" : 2204,
				"name" : "STAT3pY705",
				"shared_name" : "STAT3pY705"
			},
			"position" : {
				"x" : 972.0,
				"y" : 555.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2203",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "TSC2pT1462",
				"__glayCluster" : 5,
				"SUID" : 2203,
				"name" : "TSC2pT1462",
				"shared_name" : "TSC2pT1462"
			},
			"position" : {
				"x" : 844.91845703125,
				"y" : 341.346923828125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2202",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "STAT5pY694",
				"__glayCluster" : 5,
				"SUID" : 2202,
				"name" : "STAT5pY694",
				"shared_name" : "STAT5pY694"
			},
			"position" : {
				"x" : 1141.2178955078125,
				"y" : 426.83343505859375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2201",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "YAPpS127",
				"__glayCluster" : 6,
				"SUID" : 2201,
				"name" : "YAPpS127",
				"shared_name" : "YAPpS127"
			},
			"position" : {
				"x" : 432.8974914550781,
				"y" : 585.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2200",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "c-JUNpS73",
				"__glayCluster" : 4,
				"SUID" : 2200,
				"name" : "c-JUNpS73",
				"shared_name" : "c-JUNpS73"
			},
			"position" : {
				"x" : 881.9524536132812,
				"y" : 1047.0474243164062
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2199",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "ACC1",
				"__glayCluster" : 2,
				"SUID" : 2199,
				"name" : "ACC1",
				"shared_name" : "ACC1"
			},
			"position" : {
				"x" : 985.0682678222656,
				"y" : 789.6530151367188
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2198",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "b-CateninpS",
				"__glayCluster" : 7,
				"SUID" : 2198,
				"name" : "b-CateninpS",
				"shared_name" : "b-CateninpS"
			},
			"position" : {
				"x" : 681.5733642578125,
				"y" : 936.892333984375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2197",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "YBIpS102",
				"__glayCluster" : 7,
				"SUID" : 2197,
				"name" : "YBIpS102",
				"shared_name" : "YBIpS102"
			},
			"position" : {
				"x" : 688.8778076171875,
				"y" : 435.76873779296875
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2196",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "HSP27",
				"__glayCluster" : 7,
				"SUID" : 2196,
				"name" : "HSP27",
				"shared_name" : "HSP27"
			},
			"position" : {
				"x" : 545.0,
				"y" : 506.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2195",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "IRS1",
				"__glayCluster" : 6,
				"SUID" : 2195,
				"name" : "IRS1",
				"shared_name" : "IRS1"
			},
			"position" : {
				"x" : 643.0,
				"y" : 713.8909301757812
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2112",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "c-Myc",
				"__glayCluster" : 4,
				"SUID" : 2112,
				"name" : "c-Myc",
				"Degree" : 2,
				"shared_name" : "c-Myc"
			},
			"position" : {
				"x" : 759.0,
				"y" : 964.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2194",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "SMAD3pS423",
				"__glayCluster" : 4,
				"SUID" : 2194,
				"name" : "SMAD3pS423",
				"shared_name" : "SMAD3pS423"
			},
			"position" : {
				"x" : 809.0,
				"y" : 832.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2193",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "GATA3",
				"__glayCluster" : 4,
				"SUID" : 2193,
				"name" : "GATA3",
				"shared_name" : "GATA3"
			},
			"position" : {
				"x" : 875.7213745117188,
				"y" : 983.4691162109375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2192",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "STAT5",
				"__glayCluster" : 8,
				"SUID" : 2192,
				"name" : "STAT5",
				"shared_name" : "STAT5"
			},
			"position" : {
				"x" : 739.8739624023438,
				"y" : 490.53399658203125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2191",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aJAK",
				"__glayCluster" : 5,
				"SUID" : 2191,
				"name" : "aJAK",
				"shared_name" : "aJAK"
			},
			"position" : {
				"x" : 1262.230712890625,
				"y" : 336.98822021484375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2190",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aSTAT3",
				"__glayCluster" : 5,
				"SUID" : 2190,
				"name" : "aSTAT3",
				"shared_name" : "aSTAT3"
			},
			"position" : {
				"x" : 1205.1658935546875,
				"y" : 308.7303161621094
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2189",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "COX2",
				"__glayCluster" : 3,
				"SUID" : 2189,
				"name" : "COX2",
				"shared_name" : "COX2"
			},
			"position" : {
				"x" : 637.9251098632812,
				"y" : 429.6531066894531
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2188",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "BAK",
				"__glayCluster" : 1,
				"SUID" : 2188,
				"name" : "BAK",
				"shared_name" : "BAK"
			},
			"position" : {
				"x" : 997.6834106445312,
				"y" : 1253.286865234375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2187",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PAX2",
				"__glayCluster" : 1,
				"SUID" : 2187,
				"name" : "PAX2",
				"shared_name" : "PAX2"
			},
			"position" : {
				"x" : 1153.0,
				"y" : 1257.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2114",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "CHK2pT68",
				"__glayCluster" : 8,
				"SUID" : 2114,
				"name" : "CHK2pT68",
				"Degree" : 3,
				"shared_name" : "CHK2pT68"
			},
			"position" : {
				"x" : 945.2246704101562,
				"y" : 900.5848388671875
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2115",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "ATR",
				"__glayCluster" : 1,
				"SUID" : 2115,
				"name" : "ATR",
				"Degree" : 1,
				"shared_name" : "ATR"
			},
			"position" : {
				"x" : 1061.0,
				"y" : 1134.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2186",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "S6pS235",
				"__glayCluster" : 6,
				"SUID" : 2186,
				"name" : "S6pS235",
				"shared_name" : "S6pS235"
			},
			"position" : {
				"x" : 350.2242889404297,
				"y" : 479.77764892578125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2185",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "S6pS240",
				"__glayCluster" : 6,
				"SUID" : 2185,
				"name" : "S6pS240",
				"shared_name" : "S6pS240"
			},
			"position" : {
				"x" : 426.0025939941406,
				"y" : 480.6999206542969
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2184",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "4EBP1pT37",
				"__glayCluster" : 1,
				"SUID" : 2184,
				"name" : "4EBP1pT37",
				"shared_name" : "4EBP1pT37"
			},
			"position" : {
				"x" : 1202.0,
				"y" : 1088.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2183",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "ERa",
				"__glayCluster" : 1,
				"SUID" : 2183,
				"name" : "ERa",
				"shared_name" : "ERa"
			},
			"position" : {
				"x" : 1230.0,
				"y" : 1289.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2182",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "Caspase9",
				"__glayCluster" : 6,
				"SUID" : 2182,
				"name" : "Caspase9",
				"shared_name" : "Caspase9"
			},
			"position" : {
				"x" : 366.6720275878906,
				"y" : 542.806884765625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2181",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "a-tubulin",
				"__glayCluster" : 7,
				"SUID" : 2181,
				"name" : "a-tubulin",
				"shared_name" : "a-tubulin"
			},
			"position" : {
				"x" : 1102.512451171875,
				"y" : 153.79499053955078
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2180",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "cRAFV",
				"__glayCluster" : 6,
				"SUID" : 2180,
				"name" : "cRAFV",
				"shared_name" : "cRAFV"
			},
			"position" : {
				"x" : 522.9232025146484,
				"y" : 818.5640869140625
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2179",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "Casp9cAsp31",
				"__glayCluster" : 7,
				"SUID" : 2179,
				"name" : "Casp9cAsp31",
				"shared_name" : "Casp9cAsp31"
			},
			"position" : {
				"x" : 1147.2987060546875,
				"y" : 356.0518798828125
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2118",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "CHK1pS345",
				"__glayCluster" : 2,
				"SUID" : 2118,
				"name" : "CHK1pS345",
				"Degree" : 1,
				"shared_name" : "CHK1pS345"
			},
			"position" : {
				"x" : 835.0,
				"y" : 214.72799682617188
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2178",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "EGFRV",
				"__glayCluster" : 4,
				"SUID" : 2178,
				"name" : "EGFRV",
				"shared_name" : "EGFRV"
			},
			"position" : {
				"x" : 954.0,
				"y" : 725.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2177",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "ELK1pS383",
				"__glayCluster" : 7,
				"SUID" : 2177,
				"name" : "ELK1pS383",
				"shared_name" : "ELK1pS383"
			},
			"position" : {
				"x" : 1041.0000305175781,
				"y" : 281.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2176",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "p21",
				"__glayCluster" : 3,
				"SUID" : 2176,
				"name" : "p21",
				"shared_name" : "p21"
			},
			"position" : {
				"x" : 695.0,
				"y" : 375.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2175",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "TAZpS89",
				"__glayCluster" : 1,
				"SUID" : 2175,
				"name" : "TAZpS89",
				"shared_name" : "TAZpS89"
			},
			"position" : {
				"x" : 918.1538696289062,
				"y" : 1372.1865234375
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2174",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PCNA",
				"__glayCluster" : 1,
				"SUID" : 2174,
				"name" : "PCNA",
				"shared_name" : "PCNA"
			},
			"position" : {
				"x" : 1204.0,
				"y" : 937.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2173",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "RAD51",
				"__glayCluster" : 1,
				"SUID" : 2173,
				"name" : "RAD51",
				"shared_name" : "RAD51"
			},
			"position" : {
				"x" : 1271.0260009765625,
				"y" : 763.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2172",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "PDK1pS241",
				"__glayCluster" : 3,
				"SUID" : 2172,
				"name" : "PDK1pS241",
				"shared_name" : "PDK1pS241"
			},
			"position" : {
				"x" : 961.578125,
				"y" : 145.77529525756836
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2171",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "IRS1pS307",
				"__glayCluster" : 6,
				"SUID" : 2171,
				"name" : "IRS1pS307",
				"shared_name" : "IRS1pS307"
			},
			"position" : {
				"x" : 440.0,
				"y" : 710.0
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2170",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "aMDM2",
				"__glayCluster" : 5,
				"SUID" : 2170,
				"name" : "aMDM2",
				"shared_name" : "aMDM2"
			},
			"position" : {
				"x" : 1182.153076171875,
				"y" : 137.24341583251953
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2169",
				"selected" : false,
				"node_fillColor" : "255,153,0",
				"canonicalName" : "G2M",
				"__glayCluster" : 5,
				"SUID" : 2169,
				"name" : "G2M",
				"shared_name" : "G2M"
			},
			"position" : {
				"x" : 1225.295166015625,
				"y" : 212.7306671142578
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2119",
				"selected" : false,
				"node_fillColor" : "255,153,102",
				"canonicalName" : "G1arrest",
				"__glayCluster" : 4,
				"SUID" : 2119,
				"name" : "G1arrest",
				"Degree" : 1,
				"shared_name" : "G1arrest"
			},
			"position" : {
				"x" : 618.2935791015625,
				"y" : 886.9420776367188
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2126",
				"selected" : false,
				"node_fillColor" : "255,153,102",
				"canonicalName" : "G2arrest",
				"__glayCluster" : 3,
				"SUID" : 2126,
				"name" : "G2arrest",
				"Degree" : 2,
				"shared_name" : "G2arrest"
			},
			"position" : {
				"x" : 841.7686767578125,
				"y" : 138.57262420654297
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2121",
				"selected" : false,
				"node_fillColor" : "255,153,102",
				"canonicalName" : "Sarrest",
				"__glayCluster" : 2,
				"SUID" : 2121,
				"name" : "Sarrest",
				"Degree" : 4,
				"shared_name" : "Sarrest"
			},
			"position" : {
				"x" : 863.9869995117188,
				"y" : 747.4873046875
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2168",
				"selected" : false,
				"node_fillColor" : "",
				"canonicalName" : "cellviab",
				"__glayCluster" : 1,
				"SUID" : 2168,
				"name" : "cellviab",
				"shared_name" : "cellviab"
			},
			"position" : {
				"x" : 732.3077392578125,
				"y" : 1041.6665344238281
			},
			"selected" : false
		} ],
			"edges" : [ {
			"data" : {
				"id" : "2424",
				"source" : "2243",
				"target" : "2242",
				"selected" : false,
				"canonicalName" : "STAT6pY641 (inhibit) 4EBP1pS65",
				"Column_4" : -0.289,
				"Column_5" : 0.289,
				"__glayCluster" : 1,
				"SUID" : 2424,
				"name" : "STAT6pY641 (inhibit) 4EBP1pS65",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "STAT6pY641 (inhibit) 4EBP1pS65"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2423",
				"source" : "2241",
				"target" : "2242",
				"selected" : false,
				"canonicalName" : "Collagenase (inhibit) 4EBP1pS65",
				"Column_4" : -0.281,
				"Column_5" : 0.281,
				"__glayCluster" : 1,
				"SUID" : 2423,
				"name" : "Collagenase (inhibit) 4EBP1pS65",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "Collagenase (inhibit) 4EBP1pS65"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2422",
				"source" : "2241",
				"target" : "2232",
				"selected" : false,
				"canonicalName" : "Collagenase (inhibit) S6",
				"Column_4" : -0.36,
				"Column_5" : 0.36,
				"__glayCluster" : 1,
				"SUID" : 2422,
				"name" : "Collagenase (inhibit) S6",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "Collagenase (inhibit) S6"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2421",
				"source" : "2241",
				"target" : "2187",
				"selected" : false,
				"canonicalName" : "Collagenase (activate) PAX2",
				"Column_4" : 0.237,
				"Column_5" : 0.237,
				"__glayCluster" : 1,
				"SUID" : 2421,
				"name" : "Collagenase (activate) PAX2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Collagenase (activate) PAX2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2420",
				"source" : "2241",
				"target" : "2193",
				"selected" : false,
				"canonicalName" : "Collagenase (activate) GATA3",
				"Column_4" : 0.367,
				"Column_5" : 0.367,
				"SUID" : 2420,
				"name" : "Collagenase (activate) GATA3",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Collagenase (activate) GATA3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2419",
				"source" : "2241",
				"target" : "2174",
				"selected" : false,
				"canonicalName" : "Collagenase (activate) PCNA",
				"Column_4" : 0.563,
				"Column_5" : 0.563,
				"__glayCluster" : 1,
				"SUID" : 2419,
				"name" : "Collagenase (activate) PCNA",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Collagenase (activate) PCNA"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2133",
				"source" : "2105",
				"target" : "2124",
				"selected" : false,
				"canonicalName" : "CyclinD1 (inhibit) ACCpS79",
				"Column_4" : -0.493,
				"Column_5" : 0.493,
				"SUID" : 2133,
				"name" : "CyclinD1 (inhibit) ACCpS79",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "CyclinD1 (inhibit) ACCpS79"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2132",
				"source" : "2105",
				"target" : "2110",
				"selected" : false,
				"canonicalName" : "CyclinD1 (inhibit) BIM",
				"Column_4" : -0.438,
				"Column_5" : 0.438,
				"__glayCluster" : 1,
				"SUID" : 2132,
				"name" : "CyclinD1 (inhibit) BIM",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "CyclinD1 (inhibit) BIM"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2131",
				"source" : "2105",
				"target" : "2106",
				"selected" : false,
				"canonicalName" : "CyclinD1 (activate) RbpS807",
				"Column_4" : 0.792,
				"Column_5" : 0.792,
				"__glayCluster" : 1,
				"SUID" : 2131,
				"name" : "CyclinD1 (activate) RbpS807",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "CyclinD1 (activate) RbpS807"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2134",
				"source" : "2106",
				"target" : "2105",
				"selected" : false,
				"canonicalName" : "RbpS807 (activate) CyclinD1",
				"Column_4" : 0.262,
				"Column_5" : 0.262,
				"__glayCluster" : 1,
				"SUID" : 2134,
				"name" : "RbpS807 (activate) CyclinD1",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "RbpS807 (activate) CyclinD1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2418",
				"source" : "2106",
				"target" : "2184",
				"selected" : false,
				"canonicalName" : "RbpS807 (activate) 4EBP1pT37",
				"Column_4" : 0.529,
				"Column_5" : 0.529,
				"__glayCluster" : 1,
				"SUID" : 2418,
				"name" : "RbpS807 (activate) 4EBP1pT37",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "RbpS807 (activate) 4EBP1pT37"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2136",
				"source" : "2107",
				"target" : "2111",
				"selected" : false,
				"canonicalName" : "PLK1 (activate) CyclinB1",
				"Column_4" : 0.989,
				"Column_5" : 0.989,
				"__glayCluster" : 1,
				"SUID" : 2136,
				"name" : "PLK1 (activate) CyclinB1",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PLK1 (activate) CyclinB1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2137",
				"source" : "2107",
				"target" : "2114",
				"selected" : false,
				"canonicalName" : "PLK1 (inhibit) CHK2pT68",
				"Column_4" : -0.464,
				"Column_5" : 0.464,
				"__glayCluster" : 1,
				"SUID" : 2137,
				"name" : "PLK1 (inhibit) CHK2pT68",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PLK1 (inhibit) CHK2pT68"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2135",
				"source" : "2107",
				"target" : "2106",
				"selected" : false,
				"canonicalName" : "PLK1 (activate) RbpS807",
				"Column_4" : 0.298,
				"Column_5" : 0.298,
				"SUID" : 2135,
				"name" : "PLK1 (activate) RbpS807",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PLK1 (activate) RbpS807"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2138",
				"source" : "2108",
				"target" : "2106",
				"selected" : false,
				"canonicalName" : "CyclinE1 (inhibit) RbpS807",
				"Column_4" : -0.207,
				"Column_5" : 0.207,
				"__glayCluster" : 1,
				"SUID" : 2138,
				"name" : "CyclinE1 (inhibit) RbpS807",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "CyclinE1 (inhibit) RbpS807"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2417",
				"source" : "2108",
				"target" : "2168",
				"selected" : false,
				"canonicalName" : "CyclinE1 (inhibit) cellviab",
				"Column_4" : -0.279,
				"Column_5" : 0.279,
				"__glayCluster" : 1,
				"SUID" : 2417,
				"name" : "CyclinE1 (inhibit) cellviab",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "CyclinE1 (inhibit) cellviab"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2140",
				"source" : "2109",
				"target" : "2106",
				"selected" : false,
				"canonicalName" : "aCDK4 (activate) RbpS807",
				"Column_4" : 0.376,
				"Column_5" : 0.376,
				"SUID" : 2140,
				"name" : "aCDK4 (activate) RbpS807",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aCDK4 (activate) RbpS807"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2141",
				"source" : "2109",
				"target" : "2121",
				"selected" : false,
				"canonicalName" : "aCDK4 (inhibit) Sarrest",
				"Column_4" : -0.493,
				"Column_5" : 0.493,
				"__glayCluster" : 1,
				"SUID" : 2141,
				"name" : "aCDK4 (inhibit) Sarrest",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aCDK4 (inhibit) Sarrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2416",
				"source" : "2109",
				"target" : "2117",
				"selected" : false,
				"canonicalName" : "aCDK4 (inhibit) SRCpY527",
				"Column_4" : -0.949,
				"Column_5" : 0.949,
				"__glayCluster" : 1,
				"SUID" : 2416,
				"name" : "aCDK4 (inhibit) SRCpY527",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aCDK4 (inhibit) SRCpY527"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2415",
				"source" : "2109",
				"target" : "2218",
				"selected" : false,
				"canonicalName" : "aCDK4 (activate) AKT",
				"Column_4" : 0.212,
				"Column_5" : 0.212,
				"SUID" : 2415,
				"name" : "aCDK4 (activate) AKT",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aCDK4 (activate) AKT"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2414",
				"source" : "2109",
				"target" : "2124",
				"selected" : false,
				"canonicalName" : "aCDK4 (inhibit) ACCpS79",
				"Column_4" : -0.461,
				"Column_5" : 0.461,
				"__glayCluster" : 1,
				"SUID" : 2414,
				"name" : "aCDK4 (inhibit) ACCpS79",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aCDK4 (inhibit) ACCpS79"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2413",
				"source" : "2109",
				"target" : "2211",
				"selected" : false,
				"canonicalName" : "aCDK4 (activate) p38",
				"Column_4" : 0.242,
				"Column_5" : 0.242,
				"SUID" : 2413,
				"name" : "aCDK4 (activate) p38",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aCDK4 (activate) p38"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2412",
				"source" : "2240",
				"target" : "2239",
				"selected" : false,
				"canonicalName" : "MEKpS217 (activate) MAPKpT202",
				"Column_4" : 0.668,
				"Column_5" : 0.668,
				"__glayCluster" : 1,
				"SUID" : 2412,
				"name" : "MEKpS217 (activate) MAPKpT202",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "MEKpS217 (activate) MAPKpT202"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2411",
				"source" : "2240",
				"target" : "2177",
				"selected" : false,
				"canonicalName" : "MEKpS217 (inhibit) ELK1pS383",
				"Column_4" : -0.238,
				"Column_5" : 0.238,
				"SUID" : 2411,
				"name" : "MEKpS217 (inhibit) ELK1pS383",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "MEKpS217 (inhibit) ELK1pS383"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2410",
				"source" : "2239",
				"target" : "2110",
				"selected" : false,
				"canonicalName" : "MAPKpT202 (inhibit) BIM",
				"Column_4" : -0.37,
				"Column_5" : 0.37,
				"SUID" : 2410,
				"name" : "MAPKpT202 (inhibit) BIM",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "MAPKpT202 (inhibit) BIM"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2409",
				"source" : "2238",
				"target" : "2239",
				"selected" : false,
				"canonicalName" : "aMEK (activate) MAPKpT202",
				"Column_4" : 0.748,
				"Column_5" : 0.748,
				"__glayCluster" : 1,
				"SUID" : 2409,
				"name" : "aMEK (activate) MAPKpT202",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aMEK (activate) MAPKpT202"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2408",
				"source" : "2238",
				"target" : "2240",
				"selected" : false,
				"canonicalName" : "aMEK (activate) MEKpS217",
				"Column_4" : 0.741,
				"Column_5" : 0.741,
				"__glayCluster" : 1,
				"SUID" : 2408,
				"name" : "aMEK (activate) MEKpS217",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aMEK (activate) MEKpS217"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2407",
				"source" : "2237",
				"target" : "2240",
				"selected" : false,
				"canonicalName" : "bRAF (activate) MEKpS217",
				"Column_4" : 0.398,
				"Column_5" : 0.398,
				"SUID" : 2407,
				"name" : "bRAF (activate) MEKpS217",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "bRAF (activate) MEKpS217"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2406",
				"source" : "2237",
				"target" : "2229",
				"selected" : false,
				"canonicalName" : "bRAF (activate) AKTpT308",
				"Column_4" : 0.34,
				"Column_5" : 0.34,
				"SUID" : 2406,
				"name" : "bRAF (activate) AKTpT308",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "bRAF (activate) AKTpT308"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2405",
				"source" : "2237",
				"target" : "2218",
				"selected" : false,
				"canonicalName" : "bRAF (activate) AKT",
				"Column_4" : 0.853,
				"Column_5" : 0.853,
				"__glayCluster" : 1,
				"SUID" : 2405,
				"name" : "bRAF (activate) AKT",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "bRAF (activate) AKT"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2404",
				"source" : "2236",
				"target" : "2240",
				"selected" : false,
				"canonicalName" : "SRCpY416 (activate) MEKpS217",
				"Column_4" : 0.661,
				"Column_5" : 0.661,
				"__glayCluster" : 1,
				"SUID" : 2404,
				"name" : "SRCpY416 (activate) MEKpS217",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRCpY416 (activate) MEKpS217"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2403",
				"source" : "2236",
				"target" : "2228",
				"selected" : false,
				"canonicalName" : "SRCpY416 (activate) AKTpS473",
				"Column_4" : 0.223,
				"Column_5" : 0.223,
				"SUID" : 2403,
				"name" : "SRCpY416 (activate) AKTpS473",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRCpY416 (activate) AKTpS473"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2402",
				"source" : "2236",
				"target" : "2224",
				"selected" : false,
				"canonicalName" : "SRCpY416 (inhibit) IGF1R-beta",
				"Column_4" : -0.222,
				"Column_5" : 0.222,
				"__glayCluster" : 1,
				"SUID" : 2402,
				"name" : "SRCpY416 (inhibit) IGF1R-beta",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SRCpY416 (inhibit) IGF1R-beta"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2401",
				"source" : "2236",
				"target" : "2205",
				"selected" : false,
				"canonicalName" : "SRCpY416 (activate) PI3Kp85",
				"Column_4" : 0.234,
				"Column_5" : 0.234,
				"SUID" : 2401,
				"name" : "SRCpY416 (activate) PI3Kp85",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRCpY416 (activate) PI3Kp85"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2400",
				"source" : "2236",
				"target" : "2235",
				"selected" : false,
				"canonicalName" : "SRCpY416 (activate) SRC",
				"Column_4" : 0.298,
				"Column_5" : 0.298,
				"__glayCluster" : 1,
				"SUID" : 2400,
				"name" : "SRCpY416 (activate) SRC",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRCpY416 (activate) SRC"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2399",
				"source" : "2235",
				"target" : "2240",
				"selected" : false,
				"canonicalName" : "SRC (inhibit) MEKpS217",
				"Column_4" : -0.683,
				"Column_5" : 0.683,
				"__glayCluster" : 1,
				"SUID" : 2399,
				"name" : "SRC (inhibit) MEKpS217",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SRC (inhibit) MEKpS217"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2398",
				"source" : "2235",
				"target" : "2228",
				"selected" : false,
				"canonicalName" : "SRC (activate) AKTpS473",
				"Column_4" : 0.288,
				"Column_5" : 0.288,
				"SUID" : 2398,
				"name" : "SRC (activate) AKTpS473",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRC (activate) AKTpS473"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2397",
				"source" : "2235",
				"target" : "2223",
				"selected" : false,
				"canonicalName" : "SRC (activate) b-Catenin",
				"Column_4" : 0.784,
				"Column_5" : 0.784,
				"__glayCluster" : 1,
				"SUID" : 2397,
				"name" : "SRC (activate) b-Catenin",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRC (activate) b-Catenin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2396",
				"source" : "2235",
				"target" : "2117",
				"selected" : false,
				"canonicalName" : "SRC (inhibit) SRCpY527",
				"Column_4" : -0.664,
				"Column_5" : 0.664,
				"SUID" : 2396,
				"name" : "SRC (inhibit) SRCpY527",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SRC (inhibit) SRCpY527"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2395",
				"source" : "2235",
				"target" : "2214",
				"selected" : false,
				"canonicalName" : "SRC (inhibit) STAT3",
				"Column_4" : -0.474,
				"Column_5" : 0.474,
				"SUID" : 2395,
				"name" : "SRC (inhibit) STAT3",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SRC (inhibit) STAT3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2394",
				"source" : "2235",
				"target" : "2192",
				"selected" : false,
				"canonicalName" : "SRC (activate) STAT5",
				"Column_4" : 0.532,
				"Column_5" : 0.532,
				"__glayCluster" : 1,
				"SUID" : 2394,
				"name" : "SRC (activate) STAT5",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRC (activate) STAT5"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2393",
				"source" : "2235",
				"target" : "2202",
				"selected" : false,
				"canonicalName" : "SRC (activate) STAT5pY694",
				"Column_4" : 0.9,
				"Column_5" : 0.9,
				"SUID" : 2393,
				"name" : "SRC (activate) STAT5pY694",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRC (activate) STAT5pY694"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2392",
				"source" : "2235",
				"target" : "2178",
				"selected" : false,
				"canonicalName" : "SRC (activate) EGFRV",
				"Column_4" : 0.86,
				"Column_5" : 0.86,
				"SUID" : 2392,
				"name" : "SRC (activate) EGFRV",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRC (activate) EGFRV"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2391",
				"source" : "2235",
				"target" : "2205",
				"selected" : false,
				"canonicalName" : "SRC (activate) PI3Kp85",
				"Column_4" : 0.332,
				"Column_5" : 0.332,
				"SUID" : 2391,
				"name" : "SRC (activate) PI3Kp85",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRC (activate) PI3Kp85"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2390",
				"source" : "2234",
				"target" : "2240",
				"selected" : false,
				"canonicalName" : "aBRAFm (activate) MEKpS217",
				"Column_4" : 1.0,
				"Column_5" : 1.0,
				"SUID" : 2390,
				"name" : "aBRAFm (activate) MEKpS217",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aBRAFm (activate) MEKpS217"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2389",
				"source" : "2234",
				"target" : "2218",
				"selected" : false,
				"canonicalName" : "aBRAFm (activate) AKT",
				"Column_4" : 0.24,
				"Column_5" : 0.24,
				"__glayCluster" : 1,
				"SUID" : 2389,
				"name" : "aBRAFm (activate) AKT",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aBRAFm (activate) AKT"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2148",
				"source" : "2116",
				"target" : "2114",
				"selected" : false,
				"canonicalName" : "aSRC (inhibit) CHK2pT68",
				"Column_4" : -0.995,
				"Column_5" : 0.995,
				"__glayCluster" : 1,
				"SUID" : 2148,
				"name" : "aSRC (inhibit) CHK2pT68",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aSRC (inhibit) CHK2pT68"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2388",
				"source" : "2116",
				"target" : "2240",
				"selected" : false,
				"canonicalName" : "aSRC (activate) MEKpS217",
				"Column_4" : 0.606,
				"Column_5" : 0.606,
				"__glayCluster" : 1,
				"SUID" : 2388,
				"name" : "aSRC (activate) MEKpS217",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aSRC (activate) MEKpS217"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2387",
				"source" : "2116",
				"target" : "2117",
				"selected" : false,
				"canonicalName" : "aSRC (activate) SRCpY527",
				"Column_4" : 0.34,
				"Column_5" : 0.34,
				"SUID" : 2387,
				"name" : "aSRC (activate) SRCpY527",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aSRC (activate) SRCpY527"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2386",
				"source" : "2116",
				"target" : "2229",
				"selected" : false,
				"canonicalName" : "aSRC (activate) AKTpT308",
				"Column_4" : 0.23,
				"Column_5" : 0.23,
				"SUID" : 2386,
				"name" : "aSRC (activate) AKTpT308",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aSRC (activate) AKTpT308"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2385",
				"source" : "2116",
				"target" : "2224",
				"selected" : false,
				"canonicalName" : "aSRC (inhibit) IGF1R-beta",
				"Column_4" : -0.389,
				"Column_5" : 0.389,
				"__glayCluster" : 1,
				"SUID" : 2385,
				"name" : "aSRC (inhibit) IGF1R-beta",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aSRC (inhibit) IGF1R-beta"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2384",
				"source" : "2116",
				"target" : "2236",
				"selected" : false,
				"canonicalName" : "aSRC (activate) SRCpY416",
				"Column_4" : 0.927,
				"Column_5" : 0.927,
				"__glayCluster" : 1,
				"SUID" : 2384,
				"name" : "aSRC (activate) SRCpY416",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aSRC (activate) SRCpY416"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2383",
				"source" : "2233",
				"target" : "2232",
				"selected" : false,
				"canonicalName" : "4EBP1pT70 (activate) S6",
				"Column_4" : 0.505,
				"Column_5" : 0.505,
				"__glayCluster" : 1,
				"SUID" : 2383,
				"name" : "4EBP1pT70 (activate) S6",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "4EBP1pT70 (activate) S6"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2382",
				"source" : "2233",
				"target" : "2199",
				"selected" : false,
				"canonicalName" : "4EBP1pT70 (activate) ACC1",
				"Column_4" : 0.802,
				"Column_5" : 0.802,
				"SUID" : 2382,
				"name" : "4EBP1pT70 (activate) ACC1",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "4EBP1pT70 (activate) ACC1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2381",
				"source" : "2233",
				"target" : "2217",
				"selected" : false,
				"canonicalName" : "4EBP1pT70 (activate) GSK3ab",
				"Column_4" : 0.871,
				"Column_5" : 0.871,
				"SUID" : 2381,
				"name" : "4EBP1pT70 (activate) GSK3ab",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "4EBP1pT70 (activate) GSK3ab"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2380",
				"source" : "2231",
				"target" : "2232",
				"selected" : false,
				"canonicalName" : "TSC2 (activate) S6",
				"Column_4" : 0.239,
				"Column_5" : 0.239,
				"SUID" : 2380,
				"name" : "TSC2 (activate) S6",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "TSC2 (activate) S6"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2379",
				"source" : "2231",
				"target" : "2230",
				"selected" : false,
				"canonicalName" : "TSC2 (inhibit) PAI-1",
				"Column_4" : -0.938,
				"Column_5" : 0.938,
				"__glayCluster" : 1,
				"SUID" : 2379,
				"name" : "TSC2 (inhibit) PAI-1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "TSC2 (inhibit) PAI-1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2378",
				"source" : "2231",
				"target" : "2237",
				"selected" : false,
				"canonicalName" : "TSC2 (activate) bRAF",
				"Column_4" : 0.228,
				"Column_5" : 0.228,
				"__glayCluster" : 1,
				"SUID" : 2378,
				"name" : "TSC2 (activate) bRAF",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "TSC2 (activate) bRAF"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2377",
				"source" : "2231",
				"target" : "2180",
				"selected" : false,
				"canonicalName" : "TSC2 (activate) cRAFV",
				"Column_4" : 0.972,
				"Column_5" : 0.972,
				"__glayCluster" : 1,
				"SUID" : 2377,
				"name" : "TSC2 (activate) cRAFV",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "TSC2 (activate) cRAFV"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2376",
				"source" : "2229",
				"target" : "2228",
				"selected" : false,
				"canonicalName" : "AKTpT308 (activate) AKTpS473",
				"Column_4" : 0.261,
				"Column_5" : 0.261,
				"__glayCluster" : 1,
				"SUID" : 2376,
				"name" : "AKTpT308 (activate) AKTpS473",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKTpT308 (activate) AKTpS473"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2375",
				"source" : "2229",
				"target" : "2219",
				"selected" : false,
				"canonicalName" : "AKTpT308 (activate) GSK3abpS21",
				"Column_4" : 0.404,
				"Column_5" : 0.404,
				"SUID" : 2375,
				"name" : "AKTpT308 (activate) GSK3abpS21",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKTpT308 (activate) GSK3abpS21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2374",
				"source" : "2229",
				"target" : "2210",
				"selected" : false,
				"canonicalName" : "AKTpT308 (inhibit) BCL-XL",
				"Column_4" : -0.221,
				"Column_5" : 0.221,
				"__glayCluster" : 1,
				"SUID" : 2374,
				"name" : "AKTpT308 (inhibit) BCL-XL",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "AKTpT308 (inhibit) BCL-XL"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2373",
				"source" : "2229",
				"target" : "2176",
				"selected" : false,
				"canonicalName" : "AKTpT308 (activate) p21",
				"Column_4" : 0.209,
				"Column_5" : 0.209,
				"__glayCluster" : 1,
				"SUID" : 2373,
				"name" : "AKTpT308 (activate) p21",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKTpT308 (activate) p21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2372",
				"source" : "2228",
				"target" : "2203",
				"selected" : false,
				"canonicalName" : "AKTpS473 (activate) TSC2pT1462",
				"Column_4" : 0.425,
				"Column_5" : 0.425,
				"SUID" : 2372,
				"name" : "AKTpS473 (activate) TSC2pT1462",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKTpS473 (activate) TSC2pT1462"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2371",
				"source" : "2227",
				"target" : "2228",
				"selected" : false,
				"canonicalName" : "mTORpS2448 (inhibit) AKTpS473",
				"Column_4" : -0.318,
				"Column_5" : 0.318,
				"SUID" : 2371,
				"name" : "mTORpS2448 (inhibit) AKTpS473",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "mTORpS2448 (inhibit) AKTpS473"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2370",
				"source" : "2227",
				"target" : "2207",
				"selected" : false,
				"canonicalName" : "mTORpS2448 (activate) p70S6KpT389",
				"Column_4" : 0.434,
				"Column_5" : 0.434,
				"__glayCluster" : 1,
				"SUID" : 2370,
				"name" : "mTORpS2448 (activate) p70S6KpT389",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "mTORpS2448 (activate) p70S6KpT389"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2369",
				"source" : "2226",
				"target" : "2228",
				"selected" : false,
				"canonicalName" : "aAKT (activate) AKTpS473",
				"Column_4" : 0.498,
				"Column_5" : 0.498,
				"__glayCluster" : 1,
				"SUID" : 2369,
				"name" : "aAKT (activate) AKTpS473",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aAKT (activate) AKTpS473"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2368",
				"source" : "2226",
				"target" : "2221",
				"selected" : false,
				"canonicalName" : "aAKT (inhibit) Caveolin",
				"Column_4" : -0.547,
				"Column_5" : 0.547,
				"__glayCluster" : 1,
				"SUID" : 2368,
				"name" : "aAKT (inhibit) Caveolin",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aAKT (inhibit) Caveolin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2367",
				"source" : "2226",
				"target" : "2229",
				"selected" : false,
				"canonicalName" : "aAKT (activate) AKTpT308",
				"Column_4" : 0.964,
				"Column_5" : 0.964,
				"__glayCluster" : 1,
				"SUID" : 2367,
				"name" : "aAKT (activate) AKTpT308",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aAKT (activate) AKTpT308"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2366",
				"source" : "2226",
				"target" : "2196",
				"selected" : false,
				"canonicalName" : "aAKT (activate) HSP27",
				"Column_4" : 0.243,
				"Column_5" : 0.243,
				"SUID" : 2366,
				"name" : "aAKT (activate) HSP27",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aAKT (activate) HSP27"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2365",
				"source" : "2226",
				"target" : "2176",
				"selected" : false,
				"canonicalName" : "aAKT (inhibit) p21",
				"Column_4" : -0.215,
				"Column_5" : 0.215,
				"__glayCluster" : 1,
				"SUID" : 2365,
				"name" : "aAKT (inhibit) p21",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aAKT (inhibit) p21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2364",
				"source" : "2225",
				"target" : "2228",
				"selected" : false,
				"canonicalName" : "aPI3K (activate) AKTpS473",
				"Column_4" : 0.63,
				"Column_5" : 0.63,
				"__glayCluster" : 1,
				"SUID" : 2364,
				"name" : "aPI3K (activate) AKTpS473",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPI3K (activate) AKTpS473"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2363",
				"source" : "2224",
				"target" : "2223",
				"selected" : false,
				"canonicalName" : "IGF1R-beta (inhibit) b-Catenin",
				"Column_4" : -0.523,
				"Column_5" : 0.523,
				"__glayCluster" : 1,
				"SUID" : 2363,
				"name" : "IGF1R-beta (inhibit) b-Catenin",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "IGF1R-beta (inhibit) b-Catenin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2362",
				"source" : "2224",
				"target" : "2123",
				"selected" : false,
				"canonicalName" : "IGF1R-beta (activate) Fibronectin",
				"Column_4" : 0.692,
				"Column_5" : 0.692,
				"SUID" : 2362,
				"name" : "IGF1R-beta (activate) Fibronectin",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "IGF1R-beta (activate) Fibronectin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2361",
				"source" : "2224",
				"target" : "2195",
				"selected" : false,
				"canonicalName" : "IGF1R-beta (inhibit) IRS1",
				"Column_4" : -0.208,
				"Column_5" : 0.208,
				"SUID" : 2361,
				"name" : "IGF1R-beta (inhibit) IRS1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "IGF1R-beta (inhibit) IRS1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2360",
				"source" : "2224",
				"target" : "2121",
				"selected" : false,
				"canonicalName" : "IGF1R-beta (inhibit) Sarrest",
				"Column_4" : -0.205,
				"Column_5" : 0.205,
				"SUID" : 2360,
				"name" : "IGF1R-beta (inhibit) Sarrest",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "IGF1R-beta (inhibit) Sarrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2359",
				"source" : "2223",
				"target" : "2224",
				"selected" : false,
				"canonicalName" : "b-Catenin (inhibit) IGF1R-beta",
				"Column_4" : -0.219,
				"Column_5" : 0.219,
				"__glayCluster" : 1,
				"SUID" : 2359,
				"name" : "b-Catenin (inhibit) IGF1R-beta",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "b-Catenin (inhibit) IGF1R-beta"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2150",
				"source" : "2122",
				"target" : "2108",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) CyclinE1",
				"Column_4" : -0.263,
				"Column_5" : 0.263,
				"SUID" : 2150,
				"name" : "aPKC (inhibit) CyclinE1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) CyclinE1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2358",
				"source" : "2122",
				"target" : "2223",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) b-Catenin",
				"Column_4" : -0.275,
				"Column_5" : 0.275,
				"__glayCluster" : 1,
				"SUID" : 2358,
				"name" : "aPKC (inhibit) b-Catenin",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) b-Catenin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2357",
				"source" : "2122",
				"target" : "2216",
				"selected" : false,
				"canonicalName" : "aPKC (activate) GSKpS9",
				"Column_4" : 0.293,
				"Column_5" : 0.293,
				"SUID" : 2357,
				"name" : "aPKC (activate) GSKpS9",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPKC (activate) GSKpS9"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2356",
				"source" : "2122",
				"target" : "2204",
				"selected" : false,
				"canonicalName" : "aPKC (activate) STAT3pY705",
				"Column_4" : 0.949,
				"Column_5" : 0.949,
				"SUID" : 2356,
				"name" : "aPKC (activate) STAT3pY705",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPKC (activate) STAT3pY705"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2355",
				"source" : "2122",
				"target" : "2196",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) HSP27",
				"Column_4" : -0.651,
				"Column_5" : 0.651,
				"SUID" : 2355,
				"name" : "aPKC (inhibit) HSP27",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) HSP27"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2354",
				"source" : "2122",
				"target" : "2195",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) IRS1",
				"Column_4" : -1.03,
				"Column_5" : 1.03,
				"SUID" : 2354,
				"name" : "aPKC (inhibit) IRS1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) IRS1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2353",
				"source" : "2122",
				"target" : "2220",
				"selected" : false,
				"canonicalName" : "aPKC (activate) SMAD3",
				"Column_4" : 0.817,
				"Column_5" : 0.817,
				"SUID" : 2353,
				"name" : "aPKC (activate) SMAD3",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPKC (activate) SMAD3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2352",
				"source" : "2122",
				"target" : "2189",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) COX2",
				"Column_4" : -0.368,
				"Column_5" : 0.368,
				"SUID" : 2352,
				"name" : "aPKC (inhibit) COX2",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) COX2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2351",
				"source" : "2122",
				"target" : "2227",
				"selected" : false,
				"canonicalName" : "aPKC (activate) mTORpS2448",
				"Column_4" : 0.85,
				"Column_5" : 0.85,
				"SUID" : 2351,
				"name" : "aPKC (activate) mTORpS2448",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPKC (activate) mTORpS2448"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2350",
				"source" : "2122",
				"target" : "2176",
				"selected" : false,
				"canonicalName" : "aPKC (activate) p21",
				"Column_4" : 0.334,
				"Column_5" : 0.334,
				"SUID" : 2350,
				"name" : "aPKC (activate) p21",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPKC (activate) p21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2349",
				"source" : "2122",
				"target" : "2236",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) SRCpY416",
				"Column_4" : -0.471,
				"Column_5" : 0.471,
				"__glayCluster" : 1,
				"SUID" : 2349,
				"name" : "aPKC (inhibit) SRCpY416",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) SRCpY416"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2348",
				"source" : "2122",
				"target" : "2194",
				"selected" : false,
				"canonicalName" : "aPKC (activate) SMAD3pS423",
				"Column_4" : 0.388,
				"Column_5" : 0.388,
				"SUID" : 2348,
				"name" : "aPKC (activate) SMAD3pS423",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aPKC (activate) SMAD3pS423"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2347",
				"source" : "2122",
				"target" : "2235",
				"selected" : false,
				"canonicalName" : "aPKC (inhibit) SRC",
				"Column_4" : -0.404,
				"Column_5" : 0.404,
				"__glayCluster" : 1,
				"SUID" : 2347,
				"name" : "aPKC (inhibit) SRC",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aPKC (inhibit) SRC"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2142",
				"source" : "2110",
				"target" : "2105",
				"selected" : false,
				"canonicalName" : "BIM (inhibit) CyclinD1",
				"Column_4" : -0.835,
				"Column_5" : 0.835,
				"__glayCluster" : 1,
				"SUID" : 2142,
				"name" : "BIM (inhibit) CyclinD1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "BIM (inhibit) CyclinD1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2346",
				"source" : "2110",
				"target" : "2173",
				"selected" : false,
				"canonicalName" : "BIM (inhibit) RAD51",
				"Column_4" : -0.726,
				"Column_5" : 0.726,
				"__glayCluster" : 1,
				"SUID" : 2346,
				"name" : "BIM (inhibit) RAD51",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "BIM (inhibit) RAD51"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2345",
				"source" : "2222",
				"target" : "2221",
				"selected" : false,
				"canonicalName" : "p53 (activate) Caveolin",
				"Column_4" : 0.812,
				"Column_5" : 0.812,
				"__glayCluster" : 1,
				"SUID" : 2345,
				"name" : "p53 (activate) Caveolin",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p53 (activate) Caveolin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2344",
				"source" : "2222",
				"target" : "2210",
				"selected" : false,
				"canonicalName" : "p53 (activate) BCL-XL",
				"Column_4" : 0.461,
				"Column_5" : 0.461,
				"__glayCluster" : 1,
				"SUID" : 2344,
				"name" : "p53 (activate) BCL-XL",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p53 (activate) BCL-XL"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2343",
				"source" : "2222",
				"target" : "2209",
				"selected" : false,
				"canonicalName" : "p53 (activate) BCL2",
				"Column_4" : 0.244,
				"Column_5" : 0.244,
				"__glayCluster" : 1,
				"SUID" : 2343,
				"name" : "p53 (activate) BCL2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p53 (activate) BCL2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2342",
				"source" : "2222",
				"target" : "2235",
				"selected" : false,
				"canonicalName" : "p53 (activate) SRC",
				"Column_4" : 0.865,
				"Column_5" : 0.865,
				"SUID" : 2342,
				"name" : "p53 (activate) SRC",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p53 (activate) SRC"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2341",
				"source" : "2221",
				"target" : "2224",
				"selected" : false,
				"canonicalName" : "Caveolin (activate) IGF1R-beta",
				"Column_4" : 0.491,
				"Column_5" : 0.491,
				"SUID" : 2341,
				"name" : "Caveolin (activate) IGF1R-beta",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Caveolin (activate) IGF1R-beta"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2340",
				"source" : "2221",
				"target" : "2220",
				"selected" : false,
				"canonicalName" : "Caveolin (activate) SMAD3",
				"Column_4" : 0.225,
				"Column_5" : 0.225,
				"SUID" : 2340,
				"name" : "Caveolin (activate) SMAD3",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Caveolin (activate) SMAD3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2339",
				"source" : "2221",
				"target" : "2189",
				"selected" : false,
				"canonicalName" : "Caveolin (inhibit) COX2",
				"Column_4" : -0.568,
				"Column_5" : 0.568,
				"__glayCluster" : 1,
				"SUID" : 2339,
				"name" : "Caveolin (inhibit) COX2",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "Caveolin (inhibit) COX2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2338",
				"source" : "2220",
				"target" : "2221",
				"selected" : false,
				"canonicalName" : "SMAD3 (activate) Caveolin",
				"Column_4" : 0.732,
				"Column_5" : 0.732,
				"SUID" : 2338,
				"name" : "SMAD3 (activate) Caveolin",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SMAD3 (activate) Caveolin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2337",
				"source" : "2220",
				"target" : "2112",
				"selected" : false,
				"canonicalName" : "SMAD3 (activate) c-Myc",
				"Column_4" : 0.779,
				"Column_5" : 0.779,
				"__glayCluster" : 1,
				"SUID" : 2337,
				"name" : "SMAD3 (activate) c-Myc",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SMAD3 (activate) c-Myc"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2336",
				"source" : "2220",
				"target" : "2194",
				"selected" : false,
				"canonicalName" : "SMAD3 (activate) SMAD3pS423",
				"Column_4" : 0.419,
				"Column_5" : 0.419,
				"__glayCluster" : 1,
				"SUID" : 2336,
				"name" : "SMAD3 (activate) SMAD3pS423",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SMAD3 (activate) SMAD3pS423"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2335",
				"source" : "2220",
				"target" : "2168",
				"selected" : false,
				"canonicalName" : "SMAD3 (activate) cellviab",
				"Column_4" : 0.488,
				"Column_5" : 0.488,
				"SUID" : 2335,
				"name" : "SMAD3 (activate) cellviab",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SMAD3 (activate) cellviab"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2143",
				"source" : "2111",
				"target" : "2107",
				"selected" : false,
				"canonicalName" : "CyclinB1 (activate) PLK1",
				"Column_4" : 0.533,
				"Column_5" : 0.533,
				"__glayCluster" : 1,
				"SUID" : 2143,
				"name" : "CyclinB1 (activate) PLK1",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "CyclinB1 (activate) PLK1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2151",
				"source" : "2123",
				"target" : "2105",
				"selected" : false,
				"canonicalName" : "Fibronectin (activate) CyclinD1",
				"Column_4" : 0.208,
				"Column_5" : 0.208,
				"SUID" : 2151,
				"name" : "Fibronectin (activate) CyclinD1",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Fibronectin (activate) CyclinD1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2334",
				"source" : "2123",
				"target" : "2224",
				"selected" : false,
				"canonicalName" : "Fibronectin (activate) IGF1R-beta",
				"Column_4" : 0.808,
				"Column_5" : 0.808,
				"SUID" : 2334,
				"name" : "Fibronectin (activate) IGF1R-beta",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Fibronectin (activate) IGF1R-beta"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2333",
				"source" : "2123",
				"target" : "2195",
				"selected" : false,
				"canonicalName" : "Fibronectin (activate) IRS1",
				"Column_4" : 0.79,
				"Column_5" : 0.79,
				"__glayCluster" : 1,
				"SUID" : 2333,
				"name" : "Fibronectin (activate) IRS1",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "Fibronectin (activate) IRS1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2152",
				"source" : "2124",
				"target" : "2105",
				"selected" : false,
				"canonicalName" : "ACCpS79 (inhibit) CyclinD1",
				"Column_4" : -0.241,
				"Column_5" : 0.241,
				"SUID" : 2152,
				"name" : "ACCpS79 (inhibit) CyclinD1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "ACCpS79 (inhibit) CyclinD1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2332",
				"source" : "2219",
				"target" : "2216",
				"selected" : false,
				"canonicalName" : "GSK3abpS21 (activate) GSKpS9",
				"Column_4" : 0.233,
				"Column_5" : 0.233,
				"__glayCluster" : 1,
				"SUID" : 2332,
				"name" : "GSK3abpS21 (activate) GSKpS9",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GSK3abpS21 (activate) GSKpS9"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2331",
				"source" : "2218",
				"target" : "2219",
				"selected" : false,
				"canonicalName" : "AKT (activate) GSK3abpS21",
				"Column_4" : 0.322,
				"Column_5" : 0.322,
				"SUID" : 2331,
				"name" : "AKT (activate) GSK3abpS21",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKT (activate) GSK3abpS21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2330",
				"source" : "2218",
				"target" : "2203",
				"selected" : false,
				"canonicalName" : "AKT (activate) TSC2pT1462",
				"Column_4" : 0.809,
				"Column_5" : 0.809,
				"SUID" : 2330,
				"name" : "AKT (activate) TSC2pT1462",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKT (activate) TSC2pT1462"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2329",
				"source" : "2218",
				"target" : "2201",
				"selected" : false,
				"canonicalName" : "AKT (activate) YAPpS127",
				"Column_4" : 0.541,
				"Column_5" : 0.541,
				"__glayCluster" : 1,
				"SUID" : 2329,
				"name" : "AKT (activate) YAPpS127",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKT (activate) YAPpS127"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2328",
				"source" : "2218",
				"target" : "2227",
				"selected" : false,
				"canonicalName" : "AKT (activate) mTORpS2448",
				"Column_4" : 0.322,
				"Column_5" : 0.322,
				"__glayCluster" : 1,
				"SUID" : 2328,
				"name" : "AKT (activate) mTORpS2448",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "AKT (activate) mTORpS2448"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2146",
				"source" : "2113",
				"target" : "2119",
				"selected" : false,
				"canonicalName" : "p27 (activate) G1arrest",
				"Column_4" : 0.833,
				"Column_5" : 0.833,
				"__glayCluster" : 1,
				"SUID" : 2146,
				"name" : "p27 (activate) G1arrest",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p27 (activate) G1arrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2145",
				"source" : "2113",
				"target" : "2112",
				"selected" : false,
				"canonicalName" : "p27 (inhibit) c-Myc",
				"Column_4" : -0.936,
				"Column_5" : 0.936,
				"__glayCluster" : 1,
				"SUID" : 2145,
				"name" : "p27 (inhibit) c-Myc",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "p27 (inhibit) c-Myc"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2327",
				"source" : "2113",
				"target" : "2219",
				"selected" : false,
				"canonicalName" : "p27 (inhibit) GSK3abpS21",
				"Column_4" : -0.479,
				"Column_5" : 0.479,
				"SUID" : 2327,
				"name" : "p27 (inhibit) GSK3abpS21",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "p27 (inhibit) GSK3abpS21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2326",
				"source" : "2113",
				"target" : "2197",
				"selected" : false,
				"canonicalName" : "p27 (inhibit) YBIpS102",
				"Column_4" : -0.936,
				"Column_5" : 0.936,
				"SUID" : 2326,
				"name" : "p27 (inhibit) YBIpS102",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "p27 (inhibit) YBIpS102"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2325",
				"source" : "2217",
				"target" : "2219",
				"selected" : false,
				"canonicalName" : "GSK3ab (activate) GSK3abpS21",
				"Column_4" : 0.281,
				"Column_5" : 0.281,
				"__glayCluster" : 1,
				"SUID" : 2325,
				"name" : "GSK3ab (activate) GSK3abpS21",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GSK3ab (activate) GSK3abpS21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2324",
				"source" : "2217",
				"target" : "2216",
				"selected" : false,
				"canonicalName" : "GSK3ab (activate) GSKpS9",
				"Column_4" : 0.462,
				"Column_5" : 0.462,
				"__glayCluster" : 1,
				"SUID" : 2324,
				"name" : "GSK3ab (activate) GSKpS9",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GSK3ab (activate) GSKpS9"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2323",
				"source" : "2217",
				"target" : "2198",
				"selected" : false,
				"canonicalName" : "GSK3ab (activate) b-CateninpS",
				"Column_4" : 0.231,
				"Column_5" : 0.231,
				"__glayCluster" : 1,
				"SUID" : 2323,
				"name" : "GSK3ab (activate) b-CateninpS",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GSK3ab (activate) b-CateninpS"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2322",
				"source" : "2215",
				"target" : "2216",
				"selected" : false,
				"canonicalName" : "PKCa (inhibit) GSKpS9",
				"Column_4" : -0.538,
				"Column_5" : 0.538,
				"__glayCluster" : 1,
				"SUID" : 2322,
				"name" : "PKCa (inhibit) GSKpS9",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PKCa (inhibit) GSKpS9"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2321",
				"source" : "2215",
				"target" : "2212",
				"selected" : false,
				"canonicalName" : "PKCa (inhibit) p38pT180",
				"Column_4" : -0.466,
				"Column_5" : 0.466,
				"__glayCluster" : 1,
				"SUID" : 2321,
				"name" : "PKCa (inhibit) p38pT180",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PKCa (inhibit) p38pT180"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2320",
				"source" : "2215",
				"target" : "2172",
				"selected" : false,
				"canonicalName" : "PKCa (activate) PDK1pS241",
				"Column_4" : 0.803,
				"Column_5" : 0.803,
				"SUID" : 2320,
				"name" : "PKCa (activate) PDK1pS241",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PKCa (activate) PDK1pS241"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2319",
				"source" : "2215",
				"target" : "2236",
				"selected" : false,
				"canonicalName" : "PKCa (inhibit) SRCpY416",
				"Column_4" : -0.546,
				"Column_5" : 0.546,
				"SUID" : 2319,
				"name" : "PKCa (inhibit) SRCpY416",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PKCa (inhibit) SRCpY416"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2318",
				"source" : "2215",
				"target" : "2235",
				"selected" : false,
				"canonicalName" : "PKCa (activate) SRC",
				"Column_4" : 0.281,
				"Column_5" : 0.281,
				"SUID" : 2318,
				"name" : "PKCa (activate) SRC",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PKCa (activate) SRC"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2317",
				"source" : "2214",
				"target" : "2213",
				"selected" : false,
				"canonicalName" : "STAT3 (activate) IGFBP2",
				"Column_4" : 0.647,
				"Column_5" : 0.647,
				"SUID" : 2317,
				"name" : "STAT3 (activate) IGFBP2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT3 (activate) IGFBP2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2316",
				"source" : "2214",
				"target" : "2202",
				"selected" : false,
				"canonicalName" : "STAT3 (activate) STAT5pY694",
				"Column_4" : 0.324,
				"Column_5" : 0.324,
				"SUID" : 2316,
				"name" : "STAT3 (activate) STAT5pY694",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT3 (activate) STAT5pY694"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2315",
				"source" : "2214",
				"target" : "2118",
				"selected" : false,
				"canonicalName" : "STAT3 (inhibit) CHK1pS345",
				"Column_4" : -0.318,
				"Column_5" : 0.318,
				"SUID" : 2315,
				"name" : "STAT3 (inhibit) CHK1pS345",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "STAT3 (inhibit) CHK1pS345"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2314",
				"source" : "2214",
				"target" : "2176",
				"selected" : false,
				"canonicalName" : "STAT3 (activate) p21",
				"Column_4" : 0.934,
				"Column_5" : 0.934,
				"__glayCluster" : 1,
				"SUID" : 2314,
				"name" : "STAT3 (activate) p21",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT3 (activate) p21"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2313",
				"source" : "2214",
				"target" : "2172",
				"selected" : false,
				"canonicalName" : "STAT3 (activate) PDK1pS241",
				"Column_4" : 0.613,
				"Column_5" : 0.613,
				"__glayCluster" : 1,
				"SUID" : 2313,
				"name" : "STAT3 (activate) PDK1pS241",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT3 (activate) PDK1pS241"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2312",
				"source" : "2213",
				"target" : "2123",
				"selected" : false,
				"canonicalName" : "IGFBP2 (activate) Fibronectin",
				"Column_4" : 0.706,
				"Column_5" : 0.706,
				"__glayCluster" : 1,
				"SUID" : 2312,
				"name" : "IGFBP2 (activate) Fibronectin",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "IGFBP2 (activate) Fibronectin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2311",
				"source" : "2211",
				"target" : "2212",
				"selected" : false,
				"canonicalName" : "p38 (activate) p38pT180",
				"Column_4" : 0.515,
				"Column_5" : 0.515,
				"__glayCluster" : 1,
				"SUID" : 2311,
				"name" : "p38 (activate) p38pT180",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p38 (activate) p38pT180"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2310",
				"source" : "2211",
				"target" : "2181",
				"selected" : false,
				"canonicalName" : "p38 (activate) a-tubulin",
				"Column_4" : 0.965,
				"Column_5" : 0.965,
				"__glayCluster" : 1,
				"SUID" : 2310,
				"name" : "p38 (activate) a-tubulin",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p38 (activate) a-tubulin"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2309",
				"source" : "2211",
				"target" : "2179",
				"selected" : false,
				"canonicalName" : "p38 (inhibit) Casp9cAsp31",
				"Column_4" : -0.95,
				"Column_5" : 0.95,
				"__glayCluster" : 1,
				"SUID" : 2309,
				"name" : "p38 (inhibit) Casp9cAsp31",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "p38 (inhibit) Casp9cAsp31"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2308",
				"source" : "2211",
				"target" : "2177",
				"selected" : false,
				"canonicalName" : "p38 (inhibit) ELK1pS383",
				"Column_4" : -0.381,
				"Column_5" : 0.381,
				"__glayCluster" : 1,
				"SUID" : 2308,
				"name" : "p38 (inhibit) ELK1pS383",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "p38 (inhibit) ELK1pS383"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2307",
				"source" : "2210",
				"target" : "2222",
				"selected" : false,
				"canonicalName" : "BCL-XL (activate) p53",
				"Column_4" : 0.655,
				"Column_5" : 0.655,
				"__glayCluster" : 1,
				"SUID" : 2307,
				"name" : "BCL-XL (activate) p53",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BCL-XL (activate) p53"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2306",
				"source" : "2210",
				"target" : "2209",
				"selected" : false,
				"canonicalName" : "BCL-XL (activate) BCL2",
				"Column_4" : 0.735,
				"Column_5" : 0.735,
				"__glayCluster" : 1,
				"SUID" : 2306,
				"name" : "BCL-XL (activate) BCL2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BCL-XL (activate) BCL2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2305",
				"source" : "2209",
				"target" : "2222",
				"selected" : false,
				"canonicalName" : "BCL2 (activate) p53",
				"Column_4" : 0.484,
				"Column_5" : 0.484,
				"__glayCluster" : 1,
				"SUID" : 2305,
				"name" : "BCL2 (activate) p53",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BCL2 (activate) p53"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2304",
				"source" : "2209",
				"target" : "2210",
				"selected" : false,
				"canonicalName" : "BCL2 (activate) BCL-XL",
				"Column_4" : 0.282,
				"Column_5" : 0.282,
				"__glayCluster" : 1,
				"SUID" : 2304,
				"name" : "BCL2 (activate) BCL-XL",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BCL2 (activate) BCL-XL"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2303",
				"source" : "2208",
				"target" : "2222",
				"selected" : false,
				"canonicalName" : "aHDAC (activate) p53",
				"Column_4" : 0.545,
				"Column_5" : 0.545,
				"__glayCluster" : 1,
				"SUID" : 2303,
				"name" : "aHDAC (activate) p53",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aHDAC (activate) p53"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2302",
				"source" : "2208",
				"target" : "2214",
				"selected" : false,
				"canonicalName" : "aHDAC (inhibit) STAT3",
				"Column_4" : -0.201,
				"Column_5" : 0.201,
				"__glayCluster" : 1,
				"SUID" : 2302,
				"name" : "aHDAC (inhibit) STAT3",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aHDAC (inhibit) STAT3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2301",
				"source" : "2208",
				"target" : "2189",
				"selected" : false,
				"canonicalName" : "aHDAC (inhibit) COX2",
				"Column_4" : -0.334,
				"Column_5" : 0.334,
				"__glayCluster" : 1,
				"SUID" : 2301,
				"name" : "aHDAC (inhibit) COX2",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aHDAC (inhibit) COX2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2300",
				"source" : "2208",
				"target" : "2126",
				"selected" : false,
				"canonicalName" : "aHDAC (inhibit) G2arrest",
				"Column_4" : -0.972,
				"Column_5" : 0.972,
				"__glayCluster" : 1,
				"SUID" : 2300,
				"name" : "aHDAC (inhibit) G2arrest",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aHDAC (inhibit) G2arrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2299",
				"source" : "2207",
				"target" : "2186",
				"selected" : false,
				"canonicalName" : "p70S6KpT389 (activate) S6pS235",
				"Column_4" : 0.434,
				"Column_5" : 0.434,
				"__glayCluster" : 1,
				"SUID" : 2299,
				"name" : "p70S6KpT389 (activate) S6pS235",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p70S6KpT389 (activate) S6pS235"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2298",
				"source" : "2207",
				"target" : "2185",
				"selected" : false,
				"canonicalName" : "p70S6KpT389 (activate) S6pS240",
				"Column_4" : 0.42,
				"Column_5" : 0.42,
				"__glayCluster" : 1,
				"SUID" : 2298,
				"name" : "p70S6KpT389 (activate) S6pS240",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "p70S6KpT389 (activate) S6pS240"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2297",
				"source" : "2206",
				"target" : "2207",
				"selected" : false,
				"canonicalName" : "amTOR (activate) p70S6KpT389",
				"Column_4" : 0.848,
				"Column_5" : 0.848,
				"__glayCluster" : 1,
				"SUID" : 2297,
				"name" : "amTOR (activate) p70S6KpT389",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "amTOR (activate) p70S6KpT389"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2149",
				"source" : "2117",
				"target" : "2118",
				"selected" : false,
				"canonicalName" : "SRCpY527 (activate) CHK1pS345",
				"Column_4" : 0.503,
				"Column_5" : 0.503,
				"__glayCluster" : 1,
				"SUID" : 2149,
				"name" : "SRCpY527 (activate) CHK1pS345",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SRCpY527 (activate) CHK1pS345"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2296",
				"source" : "2205",
				"target" : "2204",
				"selected" : false,
				"canonicalName" : "PI3Kp85 (activate) STAT3pY705",
				"Column_4" : 0.211,
				"Column_5" : 0.211,
				"__glayCluster" : 1,
				"SUID" : 2296,
				"name" : "PI3Kp85 (activate) STAT3pY705",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PI3Kp85 (activate) STAT3pY705"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2295",
				"source" : "2205",
				"target" : "2214",
				"selected" : false,
				"canonicalName" : "PI3Kp85 (activate) STAT3",
				"Column_4" : 0.267,
				"Column_5" : 0.267,
				"SUID" : 2295,
				"name" : "PI3Kp85 (activate) STAT3",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PI3Kp85 (activate) STAT3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2294",
				"source" : "2205",
				"target" : "2236",
				"selected" : false,
				"canonicalName" : "PI3Kp85 (inhibit) SRCpY416",
				"Column_4" : -0.407,
				"Column_5" : 0.407,
				"SUID" : 2294,
				"name" : "PI3Kp85 (inhibit) SRCpY416",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PI3Kp85 (inhibit) SRCpY416"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2293",
				"source" : "2205",
				"target" : "2235",
				"selected" : false,
				"canonicalName" : "PI3Kp85 (activate) SRC",
				"Column_4" : 0.44,
				"Column_5" : 0.44,
				"SUID" : 2293,
				"name" : "PI3Kp85 (activate) SRC",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PI3Kp85 (activate) SRC"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2292",
				"source" : "2204",
				"target" : "2202",
				"selected" : false,
				"canonicalName" : "STAT3pY705 (inhibit) STAT5pY694",
				"Column_4" : -0.702,
				"Column_5" : 0.702,
				"SUID" : 2292,
				"name" : "STAT3pY705 (inhibit) STAT5pY694",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "STAT3pY705 (inhibit) STAT5pY694"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2291",
				"source" : "2204",
				"target" : "2121",
				"selected" : false,
				"canonicalName" : "STAT3pY705 (inhibit) Sarrest",
				"Column_4" : -0.658,
				"Column_5" : 0.658,
				"__glayCluster" : 1,
				"SUID" : 2291,
				"name" : "STAT3pY705 (inhibit) Sarrest",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "STAT3pY705 (inhibit) Sarrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2290",
				"source" : "2202",
				"target" : "2203",
				"selected" : false,
				"canonicalName" : "STAT5pY694 (activate) TSC2pT1462",
				"Column_4" : 0.841,
				"Column_5" : 0.841,
				"__glayCluster" : 1,
				"SUID" : 2290,
				"name" : "STAT5pY694 (activate) TSC2pT1462",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT5pY694 (activate) TSC2pT1462"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2289",
				"source" : "2202",
				"target" : "2214",
				"selected" : false,
				"canonicalName" : "STAT5pY694 (activate) STAT3",
				"Column_4" : 0.351,
				"Column_5" : 0.351,
				"SUID" : 2289,
				"name" : "STAT5pY694 (activate) STAT3",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT5pY694 (activate) STAT3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2288",
				"source" : "2202",
				"target" : "2243",
				"selected" : false,
				"canonicalName" : "STAT5pY694 (activate) STAT6pY641",
				"Column_4" : 0.656,
				"Column_5" : 0.656,
				"SUID" : 2288,
				"name" : "STAT5pY694 (activate) STAT6pY641",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "STAT5pY694 (activate) STAT6pY641"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2287",
				"source" : "2201",
				"target" : "2182",
				"selected" : false,
				"canonicalName" : "YAPpS127 (inhibit) Caspase9",
				"Column_4" : -0.335,
				"Column_5" : 0.335,
				"__glayCluster" : 1,
				"SUID" : 2287,
				"name" : "YAPpS127 (inhibit) Caspase9",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "YAPpS127 (inhibit) Caspase9"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2286",
				"source" : "2201",
				"target" : "2237",
				"selected" : false,
				"canonicalName" : "YAPpS127 (activate) bRAF",
				"Column_4" : 0.208,
				"Column_5" : 0.208,
				"__glayCluster" : 1,
				"SUID" : 2286,
				"name" : "YAPpS127 (activate) bRAF",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "YAPpS127 (activate) bRAF"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2285",
				"source" : "2201",
				"target" : "2171",
				"selected" : false,
				"canonicalName" : "YAPpS127 (activate) IRS1pS307",
				"Column_4" : 0.33,
				"Column_5" : 0.33,
				"__glayCluster" : 1,
				"SUID" : 2285,
				"name" : "YAPpS127 (activate) IRS1pS307",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "YAPpS127 (activate) IRS1pS307"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2284",
				"source" : "2200",
				"target" : "2199",
				"selected" : false,
				"canonicalName" : "c-JUNpS73 (inhibit) ACC1",
				"Column_4" : -0.766,
				"Column_5" : 0.766,
				"SUID" : 2284,
				"name" : "c-JUNpS73 (inhibit) ACC1",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "c-JUNpS73 (inhibit) ACC1"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2283",
				"source" : "2200",
				"target" : "2112",
				"selected" : false,
				"canonicalName" : "c-JUNpS73 (activate) c-Myc",
				"Column_4" : 0.98,
				"Column_5" : 0.98,
				"__glayCluster" : 1,
				"SUID" : 2283,
				"name" : "c-JUNpS73 (activate) c-Myc",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "c-JUNpS73 (activate) c-Myc"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2282",
				"source" : "2199",
				"target" : "2205",
				"selected" : false,
				"canonicalName" : "ACC1 (activate) PI3Kp85",
				"Column_4" : 0.548,
				"Column_5" : 0.548,
				"__glayCluster" : 1,
				"SUID" : 2282,
				"name" : "ACC1 (activate) PI3Kp85",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "ACC1 (activate) PI3Kp85"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2281",
				"source" : "2199",
				"target" : "2233",
				"selected" : false,
				"canonicalName" : "ACC1 (activate) 4EBP1pT70",
				"Column_4" : 0.688,
				"Column_5" : 0.688,
				"SUID" : 2281,
				"name" : "ACC1 (activate) 4EBP1pT70",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "ACC1 (activate) 4EBP1pT70"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2280",
				"source" : "2199",
				"target" : "2124",
				"selected" : false,
				"canonicalName" : "ACC1 (activate) ACCpS79",
				"Column_4" : 0.299,
				"Column_5" : 0.299,
				"__glayCluster" : 1,
				"SUID" : 2280,
				"name" : "ACC1 (activate) ACCpS79",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "ACC1 (activate) ACCpS79"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2279",
				"source" : "2197",
				"target" : "2196",
				"selected" : false,
				"canonicalName" : "YBIpS102 (inhibit) HSP27",
				"Column_4" : -0.234,
				"Column_5" : 0.234,
				"__glayCluster" : 1,
				"SUID" : 2279,
				"name" : "YBIpS102 (inhibit) HSP27",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "YBIpS102 (inhibit) HSP27"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2278",
				"source" : "2197",
				"target" : "2118",
				"selected" : false,
				"canonicalName" : "YBIpS102 (activate) CHK1pS345",
				"Column_4" : 0.29,
				"Column_5" : 0.29,
				"SUID" : 2278,
				"name" : "YBIpS102 (activate) CHK1pS345",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "YBIpS102 (activate) CHK1pS345"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2277",
				"source" : "2197",
				"target" : "2215",
				"selected" : false,
				"canonicalName" : "YBIpS102 (inhibit) PKCa",
				"Column_4" : -0.656,
				"Column_5" : 0.656,
				"__glayCluster" : 1,
				"SUID" : 2277,
				"name" : "YBIpS102 (inhibit) PKCa",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "YBIpS102 (inhibit) PKCa"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2276",
				"source" : "2196",
				"target" : "2197",
				"selected" : false,
				"canonicalName" : "HSP27 (inhibit) YBIpS102",
				"Column_4" : -0.584,
				"Column_5" : 0.584,
				"__glayCluster" : 1,
				"SUID" : 2276,
				"name" : "HSP27 (inhibit) YBIpS102",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "HSP27 (inhibit) YBIpS102"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2275",
				"source" : "2195",
				"target" : "2189",
				"selected" : false,
				"canonicalName" : "IRS1 (activate) COX2",
				"Column_4" : 0.366,
				"Column_5" : 0.366,
				"SUID" : 2275,
				"name" : "IRS1 (activate) COX2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "IRS1 (activate) COX2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2274",
				"source" : "2195",
				"target" : "2171",
				"selected" : false,
				"canonicalName" : "IRS1 (inhibit) IRS1pS307",
				"Column_4" : -0.404,
				"Column_5" : 0.404,
				"__glayCluster" : 1,
				"SUID" : 2274,
				"name" : "IRS1 (inhibit) IRS1pS307",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "IRS1 (inhibit) IRS1pS307"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2144",
				"source" : "2112",
				"target" : "2113",
				"selected" : false,
				"canonicalName" : "c-Myc (inhibit) p27",
				"Column_4" : -0.729,
				"Column_5" : 0.729,
				"__glayCluster" : 1,
				"SUID" : 2144,
				"name" : "c-Myc (inhibit) p27",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "c-Myc (inhibit) p27"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2273",
				"source" : "2112",
				"target" : "2200",
				"selected" : false,
				"canonicalName" : "c-Myc (activate) c-JUNpS73",
				"Column_4" : 0.81,
				"Column_5" : 0.81,
				"__glayCluster" : 1,
				"SUID" : 2273,
				"name" : "c-Myc (activate) c-JUNpS73",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "c-Myc (activate) c-JUNpS73"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2272",
				"source" : "2112",
				"target" : "2194",
				"selected" : false,
				"canonicalName" : "c-Myc (inhibit) SMAD3pS423",
				"Column_4" : -0.418,
				"Column_5" : 0.418,
				"__glayCluster" : 1,
				"SUID" : 2272,
				"name" : "c-Myc (inhibit) SMAD3pS423",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "c-Myc (inhibit) SMAD3pS423"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2271",
				"source" : "2194",
				"target" : "2113",
				"selected" : false,
				"canonicalName" : "SMAD3pS423 (activate) p27",
				"Column_4" : 0.558,
				"Column_5" : 0.558,
				"__glayCluster" : 1,
				"SUID" : 2271,
				"name" : "SMAD3pS423 (activate) p27",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "SMAD3pS423 (activate) p27"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2270",
				"source" : "2194",
				"target" : "2178",
				"selected" : false,
				"canonicalName" : "SMAD3pS423 (inhibit) EGFRV",
				"Column_4" : -0.221,
				"Column_5" : 0.221,
				"__glayCluster" : 1,
				"SUID" : 2270,
				"name" : "SMAD3pS423 (inhibit) EGFRV",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SMAD3pS423 (inhibit) EGFRV"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2269",
				"source" : "2194",
				"target" : "2193",
				"selected" : false,
				"canonicalName" : "SMAD3pS423 (inhibit) GATA3",
				"Column_4" : -0.452,
				"Column_5" : 0.452,
				"__glayCluster" : 1,
				"SUID" : 2269,
				"name" : "SMAD3pS423 (inhibit) GATA3",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SMAD3pS423 (inhibit) GATA3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2268",
				"source" : "2194",
				"target" : "2121",
				"selected" : false,
				"canonicalName" : "SMAD3pS423 (inhibit) Sarrest",
				"Column_4" : -0.231,
				"Column_5" : 0.231,
				"SUID" : 2268,
				"name" : "SMAD3pS423 (inhibit) Sarrest",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "SMAD3pS423 (inhibit) Sarrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2267",
				"source" : "2193",
				"target" : "2220",
				"selected" : false,
				"canonicalName" : "GATA3 (inhibit) SMAD3",
				"Column_4" : -0.743,
				"Column_5" : 0.743,
				"__glayCluster" : 1,
				"SUID" : 2267,
				"name" : "GATA3 (inhibit) SMAD3",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "GATA3 (inhibit) SMAD3"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2266",
				"source" : "2193",
				"target" : "2178",
				"selected" : false,
				"canonicalName" : "GATA3 (activate) EGFRV",
				"Column_4" : 0.378,
				"Column_5" : 0.378,
				"__glayCluster" : 1,
				"SUID" : 2266,
				"name" : "GATA3 (activate) EGFRV",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GATA3 (activate) EGFRV"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2265",
				"source" : "2193",
				"target" : "2174",
				"selected" : false,
				"canonicalName" : "GATA3 (activate) PCNA",
				"Column_4" : 0.315,
				"Column_5" : 0.315,
				"SUID" : 2265,
				"name" : "GATA3 (activate) PCNA",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GATA3 (activate) PCNA"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2264",
				"source" : "2193",
				"target" : "2241",
				"selected" : false,
				"canonicalName" : "GATA3 (activate) Collagenase",
				"Column_4" : 0.58,
				"Column_5" : 0.58,
				"SUID" : 2264,
				"name" : "GATA3 (activate) Collagenase",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "GATA3 (activate) Collagenase"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2263",
				"source" : "2193",
				"target" : "2194",
				"selected" : false,
				"canonicalName" : "GATA3 (inhibit) SMAD3pS423",
				"Column_4" : -0.617,
				"Column_5" : 0.617,
				"__glayCluster" : 1,
				"SUID" : 2263,
				"name" : "GATA3 (inhibit) SMAD3pS423",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "GATA3 (inhibit) SMAD3pS423"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2262",
				"source" : "2191",
				"target" : "2202",
				"selected" : false,
				"canonicalName" : "aJAK (activate) STAT5pY694",
				"Column_4" : 0.559,
				"Column_5" : 0.559,
				"__glayCluster" : 1,
				"SUID" : 2262,
				"name" : "aJAK (activate) STAT5pY694",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aJAK (activate) STAT5pY694"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2261",
				"source" : "2191",
				"target" : "2169",
				"selected" : false,
				"canonicalName" : "aJAK (inhibit) G2M",
				"Column_4" : -0.241,
				"Column_5" : 0.241,
				"__glayCluster" : 1,
				"SUID" : 2261,
				"name" : "aJAK (inhibit) G2M",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aJAK (inhibit) G2M"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2260",
				"source" : "2190",
				"target" : "2202",
				"selected" : false,
				"canonicalName" : "aSTAT3 (activate) STAT5pY694",
				"Column_4" : 0.637,
				"Column_5" : 0.637,
				"__glayCluster" : 1,
				"SUID" : 2260,
				"name" : "aSTAT3 (activate) STAT5pY694",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "aSTAT3 (activate) STAT5pY694"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2259",
				"source" : "2188",
				"target" : "2187",
				"selected" : false,
				"canonicalName" : "BAK (activate) PAX2",
				"Column_4" : 0.312,
				"Column_5" : 0.312,
				"__glayCluster" : 1,
				"SUID" : 2259,
				"name" : "BAK (activate) PAX2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BAK (activate) PAX2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2258",
				"source" : "2188",
				"target" : "2115",
				"selected" : false,
				"canonicalName" : "BAK (inhibit) ATR",
				"Column_4" : -0.254,
				"Column_5" : 0.254,
				"__glayCluster" : 1,
				"SUID" : 2258,
				"name" : "BAK (inhibit) ATR",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "BAK (inhibit) ATR"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2257",
				"source" : "2188",
				"target" : "2183",
				"selected" : false,
				"canonicalName" : "BAK (activate) ERa",
				"Column_4" : 0.598,
				"Column_5" : 0.598,
				"__glayCluster" : 1,
				"SUID" : 2257,
				"name" : "BAK (activate) ERa",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BAK (activate) ERa"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2256",
				"source" : "2188",
				"target" : "2175",
				"selected" : false,
				"canonicalName" : "BAK (activate) TAZpS89",
				"Column_4" : 0.62,
				"Column_5" : 0.62,
				"__glayCluster" : 1,
				"SUID" : 2256,
				"name" : "BAK (activate) TAZpS89",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "BAK (activate) TAZpS89"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2255",
				"source" : "2187",
				"target" : "2115",
				"selected" : false,
				"canonicalName" : "PAX2 (inhibit) ATR",
				"Column_4" : -0.643,
				"Column_5" : 0.643,
				"__glayCluster" : 1,
				"SUID" : 2255,
				"name" : "PAX2 (inhibit) ATR",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PAX2 (inhibit) ATR"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2254",
				"source" : "2187",
				"target" : "2188",
				"selected" : false,
				"canonicalName" : "PAX2 (activate) BAK",
				"Column_4" : 0.884,
				"Column_5" : 0.884,
				"__glayCluster" : 1,
				"SUID" : 2254,
				"name" : "PAX2 (activate) BAK",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PAX2 (activate) BAK"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2253",
				"source" : "2114",
				"target" : "2236",
				"selected" : false,
				"canonicalName" : "CHK2pT68 (inhibit) SRCpY416",
				"Column_4" : -0.886,
				"Column_5" : 0.886,
				"__glayCluster" : 1,
				"SUID" : 2253,
				"name" : "CHK2pT68 (inhibit) SRCpY416",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "CHK2pT68 (inhibit) SRCpY416"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2147",
				"source" : "2115",
				"target" : "2114",
				"selected" : false,
				"canonicalName" : "ATR (activate) CHK2pT68",
				"Column_4" : 0.237,
				"Column_5" : 0.237,
				"SUID" : 2147,
				"name" : "ATR (activate) CHK2pT68",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "ATR (activate) CHK2pT68"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2252",
				"source" : "2183",
				"target" : "2184",
				"selected" : false,
				"canonicalName" : "ERa (inhibit) 4EBP1pT37",
				"Column_4" : -0.244,
				"Column_5" : 0.244,
				"__glayCluster" : 1,
				"SUID" : 2252,
				"name" : "ERa (inhibit) 4EBP1pT37",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "ERa (inhibit) 4EBP1pT37"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2251",
				"source" : "2181",
				"target" : "2211",
				"selected" : false,
				"canonicalName" : "a-tubulin (activate) p38",
				"Column_4" : 0.672,
				"Column_5" : 0.672,
				"__glayCluster" : 1,
				"SUID" : 2251,
				"name" : "a-tubulin (activate) p38",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "a-tubulin (activate) p38"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2250",
				"source" : "2180",
				"target" : "2237",
				"selected" : false,
				"canonicalName" : "cRAFV (activate) bRAF",
				"Column_4" : 0.316,
				"Column_5" : 0.316,
				"__glayCluster" : 1,
				"SUID" : 2250,
				"name" : "cRAFV (activate) bRAF",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "cRAFV (activate) bRAF"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2249",
				"source" : "2180",
				"target" : "2231",
				"selected" : false,
				"canonicalName" : "cRAFV (activate) TSC2",
				"Column_4" : 0.793,
				"Column_5" : 0.793,
				"__glayCluster" : 1,
				"SUID" : 2249,
				"name" : "cRAFV (activate) TSC2",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "cRAFV (activate) TSC2"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2248",
				"source" : "2174",
				"target" : "2173",
				"selected" : false,
				"canonicalName" : "PCNA (inhibit) RAD51",
				"Column_4" : -0.646,
				"Column_5" : 0.646,
				"__glayCluster" : 1,
				"SUID" : 2248,
				"name" : "PCNA (inhibit) RAD51",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "PCNA (inhibit) RAD51"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2247",
				"source" : "2174",
				"target" : "2241",
				"selected" : false,
				"canonicalName" : "PCNA (activate) Collagenase",
				"Column_4" : 0.245,
				"Column_5" : 0.245,
				"__glayCluster" : 1,
				"SUID" : 2247,
				"name" : "PCNA (activate) Collagenase",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PCNA (activate) Collagenase"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2246",
				"source" : "2173",
				"target" : "2174",
				"selected" : false,
				"canonicalName" : "RAD51 (inhibit) PCNA",
				"Column_4" : -0.638,
				"Column_5" : 0.638,
				"__glayCluster" : 1,
				"SUID" : 2246,
				"name" : "RAD51 (inhibit) PCNA",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "RAD51 (inhibit) PCNA"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2245",
				"source" : "2172",
				"target" : "2126",
				"selected" : false,
				"canonicalName" : "PDK1pS241 (activate) G2arrest",
				"Column_4" : 0.204,
				"Column_5" : 0.204,
				"__glayCluster" : 1,
				"SUID" : 2245,
				"name" : "PDK1pS241 (activate) G2arrest",
				"interaction" : "activate",
				"shared_interaction" : "activate",
				"shared_name" : "PDK1pS241 (activate) G2arrest"
			},
			"selected" : false
		}, {
			"data" : {
				"id" : "2244",
				"source" : "2170",
				"target" : "2169",
				"selected" : false,
				"canonicalName" : "aMDM2 (inhibit) G2M",
				"Column_4" : -0.381,
				"Column_5" : 0.381,
				"__glayCluster" : 1,
				"SUID" : 2244,
				"name" : "aMDM2 (inhibit) G2M",
				"interaction" : "inhibit",
				"shared_interaction" : "inhibit",
				"shared_name" : "aMDM2 (inhibit) G2M"
			},
			"selected" : false
		} ]
	};

	var options = {el: "#main_network_view",
		model: {data: elements}};

	var netView = new NetworkView(options);
	netView.render();
});
