window.BENCHMARK_DATA = {
  "lastUpdate": 1788056052700,
  "repoUrl": "https://github.com/invidtiv/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "887770d2a2bb617ecdb6548954dd1385f66fa7cf",
          "message": "Merge pull request #1827 from yamadashy/security/npm-publish-split\n\nfix(security): Keep dependency code out of the npm-publishing job",
          "timestamp": "2026-08-29T23:01:04+09:00",
          "tree_id": "a7d91ac20397064bb9696fd56c4dbb26e4ef9a45",
          "url": "https://github.com/invidtiv/repomix/commit/887770d2a2bb617ecdb6548954dd1385f66fa7cf"
        },
        "date": 1788056052260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 963,
            "range": "±189",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 860ms, Q3: 1049ms\nAll times: 642, 652, 662, 668, 679, 709, 850, 860, 863, 866, 884, 901, 902, 916, 958, 963, 971, 981, 1016, 1037, 1041, 1045, 1049, 1052, 1055, 1080, 1125, 1127, 1200, 1263ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 949,
            "range": "±55",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 932ms, Q3: 987ms\nAll times: 915, 923, 926, 926, 928, 932, 938, 939, 940, 945, 949, 951, 955, 966, 979, 987, 1028, 1084, 1091, 1095ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1333,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1317ms, Q3: 1347ms\nAll times: 1291, 1299, 1307, 1311, 1316, 1317, 1318, 1328, 1331, 1332, 1333, 1338, 1338, 1340, 1345, 1347, 1351, 1352, 1355, 1370ms"
          }
        ]
      }
    ]
  }
}