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
❯ ignite chain serve
Cosmos SDK's version is: stargate - v0.46.6

🛠  Building proto...
📦 Installing dependencies...
🛠  Building the blockchain...
💿 Initializing the app...
🗂  Initialize accounts...
🙂 Added account alice with address cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy and mnemonic: tired brand urban dance act ten when blossom stereo control flavor year meadow sausage survey glance two insect exclude curious betray arrest near romance
🙂 Added account bob with address cosmos1qz5rq46sa0hhysal7dtr36hm5mrle4p8e06xgt and mnemonic: slice syrup flee grid monster angle try still useless wall blast ridge axis hungry cancel envelope deer basic mimic before neglect few twice marble
🌍 Tendermint node: http://0.0.0.0:26657
🌍 Blockchain API: http://0.0.0.0:1317
🌍 Token faucet: http://0.0.0.0:4500
Saving genesis state...
💿 Genesis state saved in /Users/tobias/.ignite/local-chains/checkers/exported_genesis.json
aborted
```

```shell
❯ checkersd status
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"930a3407aae3e0decf90a6febb93a0f342648fe7","listen_addr":"tcp://0.0.0.0:26656","network":"checkers","version":"0.34.23","channels":"40202122233038606100","moniker":"mynode","other":{"tx_index":"on","rpc_address":"tcp://0.0.0.0:26657"}},"SyncInfo":{"latest_block_hash":"20940A366BC1C2CA7D4EA8240B0F93B29011C61C988EA254A94CA6BEEA5894E1","latest_app_hash":"5A527FEA610F6B81AA82CACAFBB4FE8D1B462CDEADC03944DD4C055130FB4CA5","latest_block_height":"25","latest_block_time":"2022-12-17T15:31:09.262694Z","earliest_block_hash":"FCAB38A2E44B5B17CAD0D72FDFA9DE38C80C6C6CE3F90DEE5E3FCF5954E2AB86","earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","earliest_block_height":"1","earliest_block_time":"2022-12-17T15:30:43.794687Z","catching_up":false},"ValidatorInfo":{"Address":"1C998ECDC4AD744885EDBE581A569F2ACCE018D9","PubKey":{"type":"tendermint/PubKeyEd25519","value":"jDO5I8H9DOYYczWrnLK2CCOqf/eGJmNDJv7qEjWE+vA="},"VotingPower":"100"}}
```

```shell
checkersd --help
checkersd status --help
checkersd query --help
```

```shell
❯ ignite scaffold message createPost title body

modify proto/checkers/checkers/tx.proto
modify x/checkers/client/cli/tx.go
create x/checkers/client/cli/tx_create_post.go
create x/checkers/keeper/msg_server_create_post.go
modify x/checkers/module_simulation.go
create x/checkers/simulation/create_post.go
modify x/checkers/types/codec.go
create x/checkers/types/message_create_post.go
create x/checkers/types/message_create_post_test.go

🎉 Created a message `createPost`.
```

```shell
❯ mkdir x/checkers/rules
curl https://raw.githubusercontent.com/batkinson/checkers-go/a09daeb1548dd4cc0145d87c8da3ed2ea33a62e3/checkers/checkers.go | sed 's/package checkers/package rules/' > x/checkers/rules/checkers.go
```

```shell
❯ ignite scaffold single systemInfo nextId:uint \
    --module checkers \
    --no-message

modify proto/checkers/checkers/genesis.proto
modify proto/checkers/checkers/query.proto
create proto/checkers/checkers/system_info.proto
modify x/checkers/client/cli/query.go
create x/checkers/client/cli/query_system_info.go
create x/checkers/client/cli/query_system_info_test.go
modify x/checkers/genesis.go
modify x/checkers/genesis_test.go
create x/checkers/keeper/grpc_query_system_info.go
create x/checkers/keeper/grpc_query_system_info_test.go
create x/checkers/keeper/system_info.go
create x/checkers/keeper/system_info_test.go
modify x/checkers/types/genesis.go
modify x/checkers/types/genesis_test.go
modify x/checkers/types/keys.go

🎉 systemInfo added.
```

```shell
❯ ignite scaffold map storedGame board turn black red \
    --index index \
    --module checkers \
    --no-message

modify proto/checkers/checkers/genesis.proto
modify proto/checkers/checkers/query.proto
create proto/checkers/checkers/stored_game.proto
modify x/checkers/client/cli/query.go
create x/checkers/client/cli/query_stored_game.go
create x/checkers/client/cli/query_stored_game_test.go
modify x/checkers/genesis.go
modify x/checkers/genesis_test.go
create x/checkers/keeper/grpc_query_stored_game.go
create x/checkers/keeper/grpc_query_stored_game_test.go
create x/checkers/keeper/stored_game.go
create x/checkers/keeper/stored_game_test.go
modify x/checkers/types/genesis.go
modify x/checkers/types/genesis_test.go
create x/checkers/types/key_stored_game.go

🎉 storedGame added.
```

```shell
❯ ignite generate proto-go
🛠  Building proto...
⛏️  Generated go code.
```

```shell
❯ go test github.com/alice/checkers/x/checkers/keeper
ok      github.com/alice/checkers/x/checkers/keeper     0.351s
```

```shell
❯ go test github.com/alice/checkers/x/checkers/types
ok      github.com/alice/checkers/x/checkers/types      0.480s
```

```shell
❯ cd x/checkers/types/ && go test

PASS
ok      github.com/alice/checkers/x/checkers/types      0.332s
```

`checkersd query checkers --help`

```shell
❯ checkersd query checkers show-system-info
SystemInfo:
  nextId: "1"
```

```shell
❯ checkersd query checkers show-system-info --output json
{"SystemInfo":{"nextId":"1"}}
```

```shell
❯ checkersd query checkers list-stored-game
pagination:
  next_key: null
  total: "0"
storedGame: []
```
