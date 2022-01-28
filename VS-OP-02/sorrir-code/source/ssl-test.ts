function main() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const a = require("crypto-js");
  const b = a.AES.encrypt(
    '"type":"DETECTION", "id":"123e4567-e89b-12d3-a456-426614174000", "eventClass":"oneway"',
    "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFHDBOBgkqhkiG9w0BBQ0wQTApBgkqhkiG9w0BBQwwHAQIbDAGHYet8+kCAggA\nMAwGCCqGSIb3DQIJBQAwFAYIKoZIhvcNAwcECDmJn/DEapVxBIIEyMw7ybnq+tz2\ntdkoJKvd53aHklVAPdjrJu3GXsbhH05/6fheqcYoT/yw/FpltqxZZChjljE9S8L5\nEIhwjYkCxm7Eg0Iu/MDyMq4vMq0ZYBTgOAd9NOSY7jODEXThUxKeTji6IT9Spy3l\nL004kFoKxA0Zq8INYdUwc1RBFNB/ea+ynvlNn4C2tr+Bo6tGSyb9O0u+MBTu0/Vd\nipC0QVITL0K/IE3ZNRhRJ64b1m80wTLJARxQ0JwaccEGeNj7nXE6QQhlyr+ahN9t\nsnPy20SS1d2pizUuCYVETI9/loyN5vEo60duUswyusxRUYK8dA5TVB+GhKZnUaBl\ngVrsq3cTPgpoR70NxleJItOoqv9tEZgkzAR5Vv0lJO1ebRx2EXs8lyesRmtg33Kc\n/lqny7lasgkWyjAp8NHfFYelJg5L+535BL9vcUfIZ/59NXNVYecXtwpGBBRx3+tN\nYuD+ijeByfJHLX5S2OIZEL2bbtBPXFXoV5P2X+CSQQHqmRQEZg2Gg6dJdZeHUT4Q\niVZ8/6k2DkqNFiIE2hAjE5Q8MVAuB4njeQa3OsMx9D6zdBvCiqR+cKirw4XSF8Aq\nOK20cyitXKo8Rwr3u9UeFvgu5OfEA6OJQv1pg8Z+ZRJ8R73aqxgYj9rkNCuDf/Fc\nnaVjogd3rLsX0p+xjDmUVkCLkbFlg/TzHHWShc7i3fcfx/GQryfzkeXZ4a7otiHs\nK0opsn8eR+ogRhhaI1A843PrODDxDwWbDi/uSvccnEa/jQs8zOeKxwPwDU3woOjx\ni1Njgw3gqApn8p4ye3mNpvSSLcMd3nRUih6ZsP+MopJmtfcA6DuPAt6AGr4FB6TB\nh0778/RY1WbnAZB1MQx+F7Z2vKUC9XKcp8vRkAOhSxbR8Mhzo51GsQ2/GXD33a64\nYt1bbgmjVaiLtyJpz8T+AWY/8S55xYffGPGUytlfVsA8jKsW7SMmRIldngJMIoC7\nio/KG8yuKH3wkISycvzmpS7RNVWSR4WlQp62ZqsAyj9BrSgUJA+ZUT/YUD7Vsrmb\nKbrQWpbm/x1nY+Qnt/govUStJdBeRIcCpQOSavWeGVigpTfTP3xws2cU/cdzIPG8\niy2uhTSoU5MWQvIQNNarpCnDEnhQb1ME0w6y3k5DVwdxSRvPGZJfykyaaO4Ajkdq\n1zip8V1rBqRWd8G4AFFkkIXUmvhYj5WIJUHX1unHN+qMh2/IvH+YcBDw0Yc3LKCn\nvEOoFDyWRG0Jg+Su4aM3seSgs5vL6WDz8JVazH/IsPB0pUPJMv33jcNrrZwBSLWb\neR1HoohY1z+KG7XTxfpZWrHpaoW3RluQtY9Od8kIupieCcw31gkswU7w0+CYyLCF\n274wrpcRMcvy+M5crDq4gmXd6ouxt2NWpT70KLE0a/9VhZOPcxGRAtOCLav9HpC5\nnbGlovcBrNLprcGkad2MJ0uGClpkCykzC7W1qXgXdHQm7nMK8CnX10AjVxz9wTQ4\nb0g/vvKBpo2+TImFThf5dNQ3/Co1B9vykPG9RQqZIUEvvZ0BgS4DN47EtfuXPgoY\n827gnArG1ueEZ9DPTWt0ZAgVcTENzmPC9uO/+73lCK7gft8wxez9hQw89R4uuCSh\nAfTS0HJRooJQWCtyL1MjTA==\n-----END ENCRYPTED PRIVATE KEY----- "
  ).toString();

  console.log(b);
}

main();

/*
SENSOR simulation:
curl -X POST -H "Content-Type: application/json"  -d '{"event": "DETECTION"}'  http://localhost:1235/b/DSB/FROM_SENSOR
curl -X POST -H "Content-Type: application/json"  -d '{"event": "NOTHING"}'  http://localhost:1235/b/DSB/FROM_SENSOR
*/
