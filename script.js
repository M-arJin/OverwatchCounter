// --- Data Sources ---
const tankCounters = [
  { hero: "D.Va", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/df5a5532862d9292634fb3dc0e51a4705aa601de65e5e815513ccc663d84de56.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "Ramattra", level: "hard"}, {name: "Sigma", level: "soft"}], dps: [{name: "Symmetra", level: "hard"}, {name: "Mei", level: "soft"}], support: [{name: "Brigitte", level: "soft"}, {name: "Moira", level: "soft"}] } },
  { hero: "Doomfist", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ff5c54f43ad253c7faeda9c4ed31d42582ea6b19205d197866f3dd0c0aa14c16.png", counters: { tank: [{name: "Orisa", level: "hard"}, {name: "Roadhog", level: "hard"}], dps: [{name: "Sombra", level: "hard"}, {name: "Cassidy", level: "hard"}], support: [{name: "Ana", level: "hard"}, {name: "Mizuki", level: "hard"}, {name: "Brigitte", level: "soft"}] } },
  { hero: "Domina", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1161c112292c56c052c0ae711792fcde06e3251b98bc9709e582dd7585b5dcd6.png", counters: { tank: [{name: "Winston", level: "soft"}, {name: "Wrecking Ball", level: "soft"}], dps: [{name: "Reaper", level: "hard"}, {name: "Venture", level: "hard"}, {name: "Symmetra", level: "soft"}], support: [{name: "Moira", level: "soft"}] } },
  { hero: "Hazard", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca48b96dbae6ea7f58ce8a5e73513c8c62b1685bdbf258020fb78bb21a008b5f.png", counters: { tank: [{name: "Mauga", level: "hard"}, {name: "Orisa", level: "hard"}], dps: [{name: "Bastion", level: "hard"}, {name: "Torbjörn", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Zenyatta", level: "soft"}] } },
  { hero: "Junker Queen", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/06eeecb359f311f43a8f5121d4f9f3a93c565d70b30e94ef543c05596c9a39dc.png", counters: { tank: [{name: "Orisa", level: "hard"}, {name: "Zarya", level: "hard"}], dps: [{name: "Mei", level: "hard"}, {name: "Bastion", level: "soft"}], support: [{name: "Kiriko", level: "hard"}, {name: "Zenyatta", level: "soft"}] } },
  { hero: "Mauga", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33d39bb439c08975197fc52eff4874716839711b5356c4fdc174f9c24bac1d0e.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Sigma", level: "soft"}], dps: [{name: "Bastion", level: "hard"}, {name: "Reaper", level: "hard"}], support: [{name: "Ana", level: "hard"}, {name: "Zenyatta", level: "soft"}] } },
  { hero: "Orisa", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a73958a28551f5254f3ab3f97c5f5f8d698a95c0b6a515d1a2b1caac169205a6.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "Sigma", level: "soft"}], dps: [{name: "Symmetra", level: "hard"}, {name: "Hanzo", level: "soft"}], support: [{name: "Zenyatta", level: "hard"}, {name: "Ana", level: "soft"}] } },
  { hero: "Ramattra", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddef7c9fb8ce4256e8508196b486f81950efe7aaa6cf27fec4668beb4cd15774.png", counters: { tank: [{name: "Orisa", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Bastion", level: "hard"}, {name: "Mei", level: "soft"}], support: [{name: "Zenyatta", level: "hard"}, {name: "Ana", level: "hard"}] } },
  { hero: "Reinhardt", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png", counters: { tank: [{name: "Ramattra", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Pharah", level: "hard"}, {name: "Bastion", level: "soft"}], support: [{name: "Zenyatta", level: "hard"}, {name: "Ana", level: "hard"}] } },
  { hero: "Roadhog", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/89ddf07e4b619ed96169042e296a1b8856d102746f35add88284b44a9a5a6a03.png", counters: { tank: [{name: "Orisa", level: "hard"}, {name: "Mauga", level: "hard"}], dps: [{name: "Reaper", level: "hard"}, {name: "Sombra", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Zenyatta", level: "soft"}] } },
  { hero: "Sigma", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a4c032fa466c9a6d9c6974747635d7ef910027f91cd58892af0c899db565f92d.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "Ramattra", level: "soft"}], dps: [{name: "Symmetra", level: "hard"}, {name: "Mei", level: "hard"}], support: [{name: "Brigitte", level: "hard"}, {name: "Mizuki", level: "hard"}, {name: "Moira", level: "soft"}] } },
  { hero: "Winston", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/46a10db3aa908c590ddc4e7606376a88143d1f1306ecfbea043263040f9529a5.png", counters: { tank: [{name: "Roadhog", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Reaper", level: "hard"}, {name: "Bastion", level: "soft"}], support: [{name: "Brigitte", level: "hard"}, {name: "Ana", level: "hard"}, {name: "Mizuki", level: "hard"}] } },
  { hero: "Wrecking Ball", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ef1d58867136e0b26f928d896000b9dab216118f6e2f59e53f2e975e1e27afa.png", counters: { tank: [{name: "Roadhog", level: "hard"}, {name: "Doomfist", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Mei", level: "soft"}], support: [{name: "Brigitte", level: "hard"}, {name: "Ana", level: "hard"}, {name: "Mizuki", level: "hard"}] } },
  { hero: "Zarya", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b6f63cc66ddf9d5e0862173c733cc0d2e574c5c89357798d91b93b2f95a7080.png", counters: { tank: [{name: "Winston", level: "soft"}, {name: "Reinhardt", level: "soft"}], dps: [{name: "Bastion", level: "hard"}, {name: "Mei", level: "hard"}, {name: "Sombra", level: "soft"}], support: [{name: "Zenyatta", level: "soft"}, {name: "Baptiste", level: "soft"}] } }
];

const dpsCounters = [
  { hero: "Anran", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2cdf460c6080a031258e513713d1d635a8e68799cb5d7e27774be8963e95f6a3.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "D.Va", level: "soft"}], dps: [{name: "Cassidy", level: "hard"}, {name: "Ashe", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Kiriko", level: "hard"}] } },
  { hero: "Ashe", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4076bbaa2eb52a0bfe612434071e56e7702d5454473dbbea2f9e392a9d997a94.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "D.Va", level: "soft"}], dps: [{name: "Widowmaker", level: "soft"}, {name: "Genji", level: "soft"}], support: [{name: "Lucio", level: "hard"}, {name: "Kiriko", level: "hard"}] } },
  { hero: "Bastion", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ede795c2a681aaccfa72d0c901cba0cb8a2c292fd6a97b2ba9faed161c2d184.png", counters: { tank: [{name: "Sigma", level: "hard"}, {name: "Roadhog", level: "hard"}], dps: [{name: "Junkrat", level: "hard"}, {name: "Hanzo", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Zenyatta", level: "soft"}] } },
  { hero: "Cassidy", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9240cd64cc8ef58df9acbf55204ab1b5d8578f743fda5931f0dbccbd75ab841b.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Orisa", level: "soft"}], dps: [{name: "Widowmaker", level: "soft"}, {name: "Ashe", level: "soft"}], support: [{name: "Baptiste", level: "soft"}, {name: "Kiriko", level: "soft"}] } },
  { hero: "Echo", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4f2d5b0c2b7e82d61353186c5f23152ccba9d3569b50839aa580dca3e9114ba.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Orisa", level: "soft"}], dps: [{name: "Ashe", level: "hard"}, {name: "Cassidy", level: "soft"}], support: [{name: "Illari", level: "hard"}, {name: "Ana", level: "hard"}] } },
  { hero: "Emre", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c51e2f698138861c0e3b6cfab3c3ca9d67fd709be175e7c397aa6f2649712a30.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Sigma", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Ashe", level: "soft"}], support: [{name: "Mizuki", level: "hard"}, {name: "Baptiste", level: "soft"}, {name: "Ana", level: "soft"}] } },
  { hero: "Freja", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/811963897c352d9f178bec882d94bd0281074feee7c429c5145b6b8ea8ebe862.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Winston", level: "soft"}], dps: [{name: "Cassidy", level: "hard"}, {name: "Soldier: 76", level: "soft"}, {name: "Widowmaker", level: "soft"}], support: [{name: "Kiriko", level: "soft"}, {name: "Illari", level: "soft"}] } },
  { hero: "Genji", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/156b12c20b1aea872c1eeb5bb37a7de1047b2ab30ecefd0663a8925badde1ea8.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Zarya", level: "hard"}], dps: [{name: "Mei", level: "hard"}, {name: "Symmetra", level: "hard"}], support: [{name: "Moira", level: "hard"}, {name: "Brigitte", level: "soft"}] } },
  { hero: "Hanzo", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78b61c3e806fb26b02b8980fba62189155074fc15bd865b0883268e546030be5.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Reinhardt", level: "soft"}], dps: [{name: "Sombra", level: "soft"}, {name: "Tracer", level: "soft"}], support: [{name: "Lucio", level: "soft"}, {name: "Moira", level: "soft"}] } },
  { hero: "Junkrat", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7660b9fc6f25f30858fdd8797fe0d52b2306f1e78fef99843f58a274e69af046.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "D.Va", level: "hard"}], dps: [{name: "Pharah", level: "hard"}, {name: "Echo", level: "soft"}], support: [{name: "Kiriko", level: "hard"}, {name: "Jetpack Cat", level: "soft"}] } },
  { hero: "Mei", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a55ced3bd597fb08e0fde9dc007f8543ac616ba98ca3db9b0e4d871a8ae17f8.png", counters: { tank: [{name: "Orisa", level: "hard"}, {name: "Zarya", level: "hard"}, {name: "Ramattra", level: "soft"}], dps: [{name: "Pharah", level: "hard"}, {name: "Echo", level: "soft"}], support: [{name: "Kiriko", level: "hard"}, {name: "Ana", level: "soft"}] } },
  { hero: "Pharah", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/60ac2d5de4a6d34644d8872233da402f1436c87f804bb11a21661bb30bf4a51f.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Ashe", level: "hard"}, {name: "Soldier: 76", level: "hard"}, {name: "Sombra", level: "hard"}, {name: "Widowmaker", level: "soft"}], support: [{name: "Illari", level: "hard"}, {name: "Baptiste", level: "soft"}] } },
  { hero: "Reaper", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc6ff07ac790c00dc95a40882449617bb6e0e38906b353a630cffe0c815270a9.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Orisa", level: "soft"}, {name: "Sigma", level: "soft"}], dps: [{name: "Pharah", level: "hard"}, {name: "Cassidy", level: "hard"}, {name: "Echo", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Illari", level: "soft"}, {name: "Brigitte", level: "soft"}] } },
  { hero: "Sojourn", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82b8c1b8765dcb9a0ba16e343c3516bf324c771ac81e9878473280216e70a889.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "D.Va", level: "soft"}], dps: [{name: "Widowmaker", level: "hard"}, {name: "Tracer", level: "soft"}], support: [{name: "Ana", level: "soft"}, {name: "Kiriko", level: "soft"}, {name: "Mizuki", level: "soft"}] } },
  { hero: "Soldier: 76", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c93b5f0a528c40473188f77cc2a267aee7d5b6cf5c9e104105d634b4388674e2.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Sigma", level: "soft"}], dps: [{name: "Widowmaker", level: "hard"}, {name: "Ashe", level: "soft"}], support: [{name: "Kiriko", level: "hard"}, {name: "Illari", level: "soft"}] } },
  { hero: "Sombra", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47727b02a16e3bd7b2447d86ae1edf11587bc320b2aecb4f2f16a7ca4ad4e8a0.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Zarya", level: "soft"}], dps: [{name: "Mei", level: "hard"}, {name: "Torbjörn", level: "hard"}], support: [{name: "Brigitte", level: "hard"}, {name: "Kiriko", level: "soft"}] } },
  { hero: "Symmetra", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ebec57e8bd68b3d4383edfeb34f8f52dd0b94a6467d594c2fee722e8a97c32aa.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Junker Queen", level: "soft"}], dps: [{name: "Pharah", level: "hard"}, {name: "Echo", level: "soft"}], support: [{name: "Moira", level: "soft"}, {name: "Brigitte", level: "soft"}] } },
  { hero: "Torbjörn", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce17118cedc29b0d2ac1e059666bed36b9531c85079b0b894bb402d12c917ba9.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Sigma", level: "hard"}], dps: [{name: "Pharah", level: "hard"}, {name: "Echo", level: "soft"}], support: [{name: "Zenyatta", level: "soft"}, {name: "Ana", level: "soft"}] } },
  { hero: "Tracer", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4504f6f15cb3feaa92ecd38e01dcf751cb5abdac2e0bb52d0555727e53277502.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Doomfist", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Cassidy", level: "soft"}, {name: "Torbjörn", level: "soft"}], support: [{name: "Brigitte", level: "soft"}, {name: "Kiriko", level: "soft"}] } },
  { hero: "Venture", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcab9123f5f55df22e54d4e797de43c71b917e0149dd059a7fd6136f48464cd0.png", counters: { tank: [{name: "Roadhog", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Pharah", level: "soft"}, {name: "Echo", level: "soft"}], support: [{name: "Mizuki", level: "hard"}, {name: "Brigitte", level: "soft"}, {name: "Ana", level: "soft"}, {name: "Illari", level: "soft"}] } },
  { hero: "Vendetta", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf8ffb52b6f315546d5e94e9d6defad5a2c570798776956de23f47536f9529da.png", counters: { tank: [{name: "Roadhog", level: "hard"}, {name: "Zarya", level: "hard"}, {name: "Orisa", level: "soft"}], dps: [{name: "Cassidy", level: "hard"}, {name: "Sombra", level: "hard"}, {name: "Mei", level: "soft"}, {name: "Echo", level: "soft"}], support: [{name: "Illari", level: "hard"}, {name: "Mizuki", level: "hard"}, {name: "Ana", level: "hard"}] } },
  { hero: "Widowmaker", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e4702b45f196aaf51555cf57327322721f45458b17f5f0643ed008a88378259.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Wrecking Ball", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Genji", level: "soft"}], support: [{name: "Lucio", level: "soft"}, {name: "Kiriko", level: "soft"}] } }
];

const supportCounters = [
  { hero: "Ana", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/985b06beae46b7ba3ca87d1512d0fc62ca7f206ceca58ef16fc44d43a1cc84ed.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Winston", level: "soft"}], dps: [{name: "Tracer", level: "soft"}, {name: "Sombra", level: "soft"}], support: [{name: "Kiriko", level: "hard"}, {name: "Moira", level: "soft"}] } },
  { hero: "Baptiste", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4e6f1ca45d9f88fa89260787397f141a6f007b14e5b26698883b6a17bab9680.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Winston", level: "soft"}], dps: [{name: "Sombra", level: "soft"}, {name: "Genji", level: "soft"}], support: [{name: "Lucio", level: "soft"}, {name: "Moira", level: "soft"}] } },
  { hero: "Brigitte", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/795fba91376d87d441a7f359ae12a3175dfa95825ccc4414cc6b95b129fc4cb0.png", counters: { tank: [{name: "Ramattra", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Pharah", level: "hard"}, {name: "Junkrat", level: "soft"}], support: [{name: "Zenyatta", level: "soft"}, {name: "Baptiste", level: "soft"}] } },
  { hero: "Illari", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce42d1455e03e79f321345fea84b27a8918b5db8bd7ab9b2ca9e569606ede9e4.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Winston", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Tracer", level: "soft"}], support: [{name: "Mizuki", level: "hard"}, {name: "Kiriko", level: "hard"}, {name: "Lucio", level: "soft"}] } },
  { hero: "Jetpack Cat", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/03a184cd0de27091e0099ac22635ad9615a8f6997881a5c25cc5f2444764f729.png", counters: { tank: [{name: "Zarya", level: "hard"}, {name: "Mauga", level: "soft"}], dps: [{name: "Ashe", level: "soft"}, {name: "Soldier: 76", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Illari", level: "hard"}] } },
  { hero: "Juno", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0167d251e57b0aa2b1e16c37d87f0e7c77263db9dd0503d77b5f2589bf3e4a0.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Winston", level: "hard"}, {name: "Doomfist", level: "soft"}], dps: [{name: "Ashe", level: "hard"}, {name: "Sombra", level: "hard"}, {name: "Cassidy", level: "soft"}], support: [{name: "Moira", level: "soft"}, {name: "Lucio", level: "soft"}] } },
  { hero: "Kiriko", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/408603fe037e8576078eaac5eab2fb251489ced4003b11f5f522776d43d0b83d.png", counters: { tank: [{name: "Roadhog", level: "hard"}, {name: "Doomfist", level: "soft"}], dps: [{name: "Anran", level: "hard"}, {name: "Sojourn", level: "soft"}, {name: "Genji", level: "soft"}], support: [{name: "Moira", level: "soft"}, {name: "Lucio", level: "soft"}] } },
  { hero: "Lifeweaver", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3376515cebed0904012e67e956f6d1b9c12e03da642845eeaf787b7e4c7b339d.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Hazard", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Tracer", level: "soft"}], support: [{name: "Moira", level: "soft"}, {name: "Lucio", level: "soft"}] } },
  { hero: "Lucio", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/040bb13f5123ab93faad2f95627ba184608aef4b2469a4d3003859c7087df044.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "Roadhog", level: "soft"}], dps: [{name: "Sombra", level: "hard"}, {name: "Cassidy", level: "hard"}], support: [{name: "Moira", level: "hard"}, {name: "Brigitte", level: "soft"}] } },
  { hero: "Mercy", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bfb8bd8ec827e53d870f1238ab73d8aa1f5dbfbcfaaf7f96ffcd35b5c6102ab.png", counters: { tank: [{name: "Winston", level: "hard"}, {name: "D.Va", level: "soft"}], dps: [{name: "Soldier: 76", level: "hard"}, {name: "Sojourn", level: "soft"}], support: [{name: "Ana", level: "hard"}, {name: "Illari", level: "hard"}, {name: "Moira", level: "soft"}] } },
  { hero: "Mizuki", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a2c8dd2fdc10e5b5110062e2bd5dc3fc56e692a812f35f0fcea3b580fd01f578.png", counters: { tank: [{name: "Winston", level: "soft"}, {name: "D.Va", level: "soft"}], dps: [{name: "Tracer", level: "soft"}, {name: "Sombra", level: "soft"}], support: [{name: "Kiriko", level: "hard"}, {name: "Illari", level: "soft"}] } },
  { hero: "Moira", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f48f8485056d5d00dad195859188d23e50f7126b8b08b5646f46ef1b42f5e1de.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Winston", level: "soft"}], dps: [{name: "Cassidy", level: "hard"}, {name: "Sojourn", level: "soft"}], support: [{name: "Brigitte", level: "soft"}, {name: "Ana", level: "soft"}] } },
  { hero: "Wuyang", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4959500b495b35c0908be2abda56b53f2601b2c5cc39a1cfde8df1bffd38d66d.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Ramattra", level: "soft"}], dps: [{name: "Bastion", level: "soft"}, {name: "Sombra", level: "soft"}, {name: "Reaper", level: "soft"}], support: [{name: "Ana", level: "soft"}, {name: "Zenyatta", level: "soft"}] } },
  { hero: "Zenyatta", image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d1546b1541a8afc39353f9337a408d6275a141b0432b7e560ef61579996b0fc.png", counters: { tank: [{name: "D.Va", level: "hard"}, {name: "Zarya", level: "hard"}, {name: "Winston", level: "hard"}], dps: [{name: "Tracer", level: "hard"}, {name: "Sombra", level: "soft"}], support: [{name: "Ana", level: "soft"}, {name: "Illari", level: "soft"}, {name: "Moira", level: "soft"}] } }
];



// --- 2. STATE & UI REFS ---
let selectedTeam = [];
const roleLimits = { tank: 1, dps: 2, support: 2 };

const selectionView = document.getElementById("selection-view");
const resultView = document.getElementById("result-view");
const counterDisplay = document.getElementById("counter-display");
const targetHeroName = document.getElementById("target-hero-name");
const calcButton = document.getElementById("calculate-team-counters");

// --- 3. CORE FUNCTIONS ---

/**
 * Initializes the hero grids
 */
function populateGrids() {
    const categories = [
        { data: tankCounters, gridId: "tank-grid", role: "tank" },
        { data: dpsCounters, gridId: "dps-grid", role: "dps" },
        { data: supportCounters, gridId: "support-grid", role: "support" }
    ];

    categories.forEach(cat => {
        const grid = document.getElementById(cat.gridId);
        grid.innerHTML = ""; 
        cat.data.forEach(heroObj => {
            const wrapper = document.createElement("div");
            wrapper.className = "hero-card";
            wrapper.innerHTML = `
                <div class="hero-btn">
                    <img src="${heroObj.image}" alt="${heroObj.hero}" class="hero-portrait">
                    <span>${heroObj.hero}</span>
                </div>
                <button class="info-btn" title="View Details">i</button>
            `;
            
            // Add to team on primary click
            wrapper.querySelector('.hero-btn').onclick = () => addToTeam(heroObj, cat.role);
            
            // Show individual counters on 'i' click
            wrapper.querySelector('.info-btn').onclick = (e) => {
                e.stopPropagation();
                showIndividualCounters(heroObj);
            };

            grid.appendChild(wrapper);
        });
    });
}

/**
 * Validates role limits and adds hero to team array
 */
function addToTeam(heroObj, role) {
    if (selectedTeam.find(h => h.hero === heroObj.hero)) return;

    const currentRoleCount = selectedTeam.filter(h => getHeroRole(h.hero) === role).length;
    
    if (currentRoleCount < roleLimits[role]) {
        selectedTeam.push(heroObj);
        updateTeamUI();
    } else {
        alert(`Limit reached: You can only have ${roleLimits[role]} ${role.toUpperCase()} on an enemy team.`);
    }
    
    // Disable analyze until exactly 5 heroes are picked
    calcButton.disabled = selectedTeam.length !== 5;
}

/**
 * Syncs the selection bar with state
 */
function updateTeamUI() {
    const slots = document.querySelectorAll(".slot");
    slots.forEach(slot => { slot.innerHTML = ""; slot.classList.remove("occupied"); });

    const sortedTeam = [
        ...selectedTeam.filter(h => getHeroRole(h.hero) === 'tank'),
        ...selectedTeam.filter(h => getHeroRole(h.hero) === 'dps'),
        ...selectedTeam.filter(h => getHeroRole(h.hero) === 'support')
    ];

    sortedTeam.forEach((hero, i) => {
        if (slots[i]) {
            slots[i].innerHTML = `<img src="${hero.image}" class="slot-img">`;
            slots[i].classList.add("occupied");
            slots[i].onclick = () => {
                selectedTeam = selectedTeam.filter(h => h.hero !== hero.hero);
                updateTeamUI();
                calcButton.disabled = selectedTeam.length !== 5;
            };
        }
    });
}

/**
 * View: Individual counter lookup
 */
function showIndividualCounters(heroObj) {
    selectionView.classList.add("hidden");
    resultView.classList.remove("hidden");
    targetHeroName.innerHTML = `HERO : <span class="highlight">${heroObj.hero.toUpperCase()}</span>`;
    counterDisplay.innerHTML = "";

    for (const [role, list] of Object.entries(heroObj.counters)) {
        const column = document.createElement("div");
        column.className = "counter-column";
        const itemsHtml = list.map(item => `
            <li class="counter-item ${item.level === 'hard' ? 'ideal-pick' : ''}">
                <img src="${getHeroImage(item.name)}" class="counter-mini-img">
                <div class="counter-info">
                    <span class="hero-name">${item.name}</span>
                    <span class="counter-type">${item.level.toUpperCase()} COUNTER</span>
                </div>
            </li>
        `).join('');

        column.innerHTML = `<h3>${role.toUpperCase()}</h3><ul>${itemsHtml}</ul>`;
        counterDisplay.appendChild(column);
    }
}

/**
 * View: Multi-hero Team Analysis
 */
function analyzeTeamCounters() {
    if (selectedTeam.length !== 5) return;

    const scores = {};
    selectedTeam.forEach(enemy => {
        for (const role in enemy.counters) {
            enemy.counters[role].forEach(counter => {
                if (!scores[counter.name]) {
                    scores[counter.name] = { 
                        name: counter.name, 
                        score: 0, 
                        against: [], 
                        role: getHeroRole(counter.name) 
                    };
                }
                scores[counter.name].score += (counter.level === "hard" ? 3 : 1);
                if (!scores[counter.name].against.includes(enemy.hero)) {
                    scores[counter.name].against.push(enemy.hero);
                }
            });
        }
    });

    const sorted = Object.values(scores).sort((a, b) => b.score - a.score);
    displayTeamResults(sorted);
}

function displayTeamResults(results) {
    selectionView.classList.add("hidden");
    resultView.classList.remove("hidden");
    targetHeroName.innerHTML = `PROPOSING: <span class="highlight">OPTIMAL PICKS</span>`;
    counterDisplay.innerHTML = "";
    
    ["tank", "dps", "support"].forEach(role => {
        const col = document.createElement("div");
        col.className = "counter-column";
        col.innerHTML = `<h3>TOP ${role.toUpperCase()} RECOMMENDATIONS</h3>`;
        
        const filtered = results.filter(r => r.role === role).slice(0, 4);
        
        filtered.forEach(res => {
            const scorePercent = Math.min((res.score / 12) * 100, 100);
            const card = document.createElement("div");
            card.className = "team-counter-card";
            card.innerHTML = `
                <div class="counter-header">
                    <img src="${getHeroImage(res.name)}" class="counter-mini-img">
                    <span class="hero-name">${res.name}</span>
                </div>
                <div class="counter-details">
                    <p>EFFECTIVE VS: <strong>${res.against.join(", ")}</strong></p>
                    <div class="score-bar"><div class="fill" style="width: ${scorePercent}%"></div></div>
                </div>
            `;
            col.appendChild(card);
        });
        counterDisplay.appendChild(col);
    });
}

// --- 4. UTILITIES ---

function getHeroImage(name) {
    const all = [...tankCounters, ...dpsCounters, ...supportCounters];
    const h = all.find(x => x.hero.toLowerCase() === name.toLowerCase());
    return h ? h.image : "https://via.placeholder.com/50";
}

function getHeroRole(name) {
    if (tankCounters.some(h => h.hero === name)) return "tank";
    if (dpsCounters.some(h => h.hero === name)) return "dps";
    if (supportCounters.some(h => h.hero === name)) return "support";
    return "";
}

// --- 5. EVENT LISTENERS ---

document.getElementById("back-button").onclick = () => {
    resultView.classList.add("hidden");
    selectionView.classList.remove("hidden");
};

document.getElementById("clear-team").onclick = () => {
    selectedTeam = [];
    updateTeamUI();
    calcButton.disabled = true;
};

calcButton.onclick = analyzeTeamCounters;

// Initialize the grid on load
populateGrids();