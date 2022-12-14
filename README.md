# cosmos

## Checkers

```shell
❯ ignite scaffold chain github.com/alice/checkers


⭐️ Successfully created a new blockchain 'checkers'.
👉 Get started with the following commands:

 % cd checkers
 % ignite chain serve

Documentation: https://docs.ignite.com
```

```shell
❯ cd checkers
ignite chain serve
Cosmos SDK's version is: stargate - v0.46.6

🔄 Resetting the app state...
🛠  Building proto...
📦 Installing dependencies...
🛠  Building the blockchain...
💿 Initializing the app...
🗂  Initialize accounts...
🙂 Added account alice with address cosmos1yjv5ks2f00n94xmqlgmjpj3y57d8vx88cr6z0a and mnemonic: victory chapter sausage giraffe danger moon spare magnet liberty need run toe wage shoot library card client sing achieve artwork deliver neck lonely cloud
🙂 Added account bob with address cosmos15zd0rh5f9d2tdk95uf379wa9rlngv923zlt4zd and mnemonic: razor brick surround maple remove kangaroo there employ much recipe oxygen exact pioneer twenty fluid gauge grief there guitar off come year burst harbor
🌍 Tendermint node: http://0.0.0.0:26657
🌍 Blockchain API: http://0.0.0.0:1317
🌍 Token faucet: http://0.0.0.0:4500
```

```shell
❯ checkersd status
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"33c9ac248d9cc0851be83fa3670cacdd7a9b84ad","listen_addr":"tcp://0.0.0.0:26656","network":"checkers","version":"0.34.23","channels":"40202122233038606100","moniker":"mynode","other":{"tx_index":"on","rpc_address":"tcp://0.0.0.0:26657"}},"SyncInfo":{"latest_block_hash":"2E2DF05B4E0C4EEF45C732A77E7B2D3C58C1B09506597FCB1EC074313ED587F7","latest_app_hash":"B77B363AC8FBCCD5DF80A47EF12F50FDC119DEDD6183EA2343F287F934160E5E","latest_block_height":"45","latest_block_time":"2022-12-14T21:09:50.9129Z","earliest_block_hash":"6948315BD5F068EE6FE435620FD819264C32CCF73A7B350DF72F5164FE7FC01A","earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","earliest_block_height":"1","earliest_block_time":"2022-12-14T21:08:59.288446Z","catching_up":false},"ValidatorInfo":{"Address":"E82A45A0893D145295886505D5AB04F285769209","PubKey":{"type":"tendermint/PubKeyEd25519","value":"HnVGaG32ySnCJ9wZbb5XjlfTgS8X1TX2Nmqz42SA9QA="},"VotingPower":"100"}}
```

```shell
checkersd --help
checkersd status --help
checkersd query --help
```
