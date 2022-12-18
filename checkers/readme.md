# cosmos

## Template repo

[b9lab checkers repo](https://github.com/cosmos/b9-checkers-academy-draft)

Following the [Interchain Academy Course](https://interchainacademy.cosmos.network/ida-course/LPs/week-2/)

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

```shell
❯ ignite scaffold message createGame black red \
    --module checkers \
    --response gameIndex


modify proto/checkers/checkers/tx.proto
modify x/checkers/client/cli/tx.go
create x/checkers/client/cli/tx_create_game.go
create x/checkers/keeper/msg_server_create_game.go
modify x/checkers/module_simulation.go
create x/checkers/simulation/create_game.go
modify x/checkers/types/codec.go
create x/checkers/types/message_create_game.go
create x/checkers/types/message_create_game_test.go

🎉 Created a message `createGame`.
```

`checkersd tx checkers create-game --help`

```shell
export alice=$(checkersd keys show alice -a)
export bob=$(checkersd keys show bob -a)
```

`checkersd tx checkers create-game $alice $bob --from $alice --dry-run`

```shell
❯ checkersd tx checkers create-game $alice $bob --from $alice --gas auto

gas estimate: 46262
auth_info:
  fee:
    amount: []
    gas_limit: "46262"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgCreateGame
    black: cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy
    creator: cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy
    red: cosmos1qz5rq46sa0hhysal7dtr36hm5mrle4p8e06xgt
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12300A2E2F616C6963652E636865636B6572732E636865636B6572732E4D736743726561746547616D65526573706F6E7365
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMXFwd25sdmFsZ2R2emR6a2drbnI5Y3lleXVqY3FhamhodjIzdnZ5
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMXFwd25sdmFsZ2R2emR6a2drbnI5Y3lleXVqY3FhamhodjIzdnZ5LzE=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: V1hkNlNQbDZHeVhSQzBOeGpjV3lUcUM4MlBYTnkrRnlJajNkd3ZXQ3QvaExYQVhuZ2ptNHZZQUtkdk93cURhRng2dkRHUXBpU25GbkVPRldFclEvNGc9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZUdhbWU=
  type: message
gas_used: "44308"
gas_wanted: "46262"
height: "587"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /alice.checkers.checkers.MsgCreateGame
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/alice.checkers.checkers.MsgCreateGame"}]}]}]'
timestamp: ""
tx: null
txhash: 77B4273A851DBCA5BBF9B6810DF30ED4343E16EC2A13536D8190A1AB342C69BD
```

```shell
❯ checkersd query checkers show-system-info
SystemInfo:
  nextId: "1"
```

```shell
❯ checkersd query checkers list-stored-game
pagination:
  next_key: null
  total: "0"
storedGame: []
```

```shell
❯ go test github.com/alice/checkers/x/checkers/keeper

ok      github.com/alice/checkers/x/checkers/keeper     0.260s
```

```shell
❯ checkersd tx checkers create-game $alice $bob --from $alice --gas auto

gas estimate: 57682
auth_info:
  fee:
    amount: []
    gas_limit: "57682"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgCreateGame
    black: cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy
    creator: cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy
    red: cosmos1qz5rq46sa0hhysal7dtr36hm5mrle4p8e06xgt
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12350A2E2F616C6963652E636865636B6572732E636865636B6572732E4D736743726561746547616D65526573706F6E736512030A0131
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMXFwd25sdmFsZ2R2emR6a2drbnI5Y3lleXVqY3FhamhodjIzdnZ5
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMXFwd25sdmFsZ2R2emR6a2drbnI5Y3lleXVqY3FhamhodjIzdnZ5LzI=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: bjJUNFRyVFY4MGh0MlNPZEdPTWNIYnRrTWJXQ292M3FZNnRQeUlkVjZXRUN1Q0tWajhGdEFTZ0JuOG1IVWM4dWgrQURNVVVQSHNsTDBtM0tmY08xaXc9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ0NyZWF0ZUdhbWU=
  type: message
gas_used: "55728"
gas_wanted: "57682"
height: "1546"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /alice.checkers.checkers.MsgCreateGame
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/alice.checkers.checkers.MsgCreateGame"}]}]}]'
timestamp: ""
tx: null
txhash: 36747B8E60A0EDC02A36D6E8AFD5E9CB88D92080459A2BF48EA093F16A728647
```

```shell
❯ checkersd query checkers show-system-info

SystemInfo:
  nextId: "2"
```

```shell
❯ checkersd query checkers list-stored-game
pagination:
  next_key: null
  total: "0"
storedGame:
- black: cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy
  board: '*b*b*b*b|b*b*b*b*|*b*b*b*b|********|********|r*r*r*r*|*r*r*r*r|r*r*r*r*'
  index: "1"
  red: cosmos1qz5rq46sa0hhysal7dtr36hm5mrle4p8e06xgt
  turn: b
```

```shell
❯ checkersd query checkers show-stored-game 1

storedGame:
  black: cosmos1qpwnlvalgdvzdzkgknr9cyeyujcqajhhv23vvy
  board: '*b*b*b*b|b*b*b*b*|*b*b*b*b|********|********|r*r*r*r*|*r*r*r*r|r*r*r*r*'
  index: "1"
  red: cosmos1qz5rq46sa0hhysal7dtr36hm5mrle4p8e06xgt
  turn: b
```

```shell
❯ checkersd query checkers show-stored-game 1 --output json | jq ".storedGame.board" | sed 's/"//g' | sed 's/|/\n/g'
*b*b*b*b
b*b*b*b*
*b*b*b*b
********
********
r*r*r*r*
*r*r*r*r
r*r*r*r*
```

```shell
❯ ignite scaffold message playMove gameIndex fromX:uint fromY:uint toX:uint toY:uint \
    --module checkers \
    --response capturedX:int,capturedY:int,winner

modify proto/checkers/checkers/tx.proto
modify x/checkers/client/cli/tx.go
create x/checkers/client/cli/tx_play_move.go
create x/checkers/keeper/msg_server_play_move.go
modify x/checkers/module_simulation.go
create x/checkers/simulation/play_move.go
modify x/checkers/types/codec.go
create x/checkers/types/message_play_move.go
create x/checkers/types/message_play_move_test.go

🎉 Created a message `playMove`.
```

```shell
❯ checkersd tx checkers play-move 1 0 5 1 4 --from $bob
auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgPlayMove
    creator: cosmos15w99g4kepz5tk6ee3xtn5c042kk3tmarjclvpx
    fromX: "0"
    fromY: "5"
    gameIndex: "1"
    toX: "1"
    toY: "4"
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 1105
codespace: checkers
data: ""
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMTV3OTlnNGtlcHo1dGs2ZWUzeHRuNWMwNDJrazN0bWFyamNsdnB4
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMTV3OTlnNGtlcHo1dGs2ZWUzeHRuNWMwNDJrazN0bWFyamNsdnB4LzE=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: ZjVDOE1uUHhHeXpTNzg0QTdCT1dHZFZOMUFWQzduOWR1QWFmaHM3SE9BOXdpYmpoczNjWXg0TFIveFBBZlJNeVRhK0dYZ2VZY3pmcms0UGRvUytRRFE9PQ==
  type: tx
gas_used: "45074"
gas_wanted: "200000"
height: "445"
info: ""
logs: []
raw_log: 'failed to execute message; message index: 0: {red}: player tried to play
  out of turn'
timestamp: ""
tx: null
txhash: 847CBC9FF74F482829CBB13B0569F03D82E7CE03D2A2BCBA5F2680E38EB4DEA6
```

```shell
❯ checkersd tx checkers play-move 1 1 0 0 1 --from $alice
auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgPlayMove
    creator: cosmos1h2zh2p6clnv463fjvpzukx0e8nrj70tw0pzcq0
    fromX: "1"
    fromY: "0"
    gameIndex: "1"
    toX: "0"
    toY: "1"
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 1106
codespace: checkers
data: ""
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3Ew
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3EwLzM=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: Y2FxOTJkZEkzTk1vU0cxMGFmUnpwL3BNYWpkaHIzYWhMdnh2b2dKNDFBUXRXQ3E1cHN1OFBsSjVkd004Q2VMV1FVLzhCdWgxMTZBV2dBTk9yYjVMQ2c9PQ==
  type: tx
gas_used: "44964"
gas_wanted: "200000"
height: "477"
info: ""
logs: []
raw_log: 'failed to execute message; message index: 0: Already piece at destination
  position: {0 1}: wrong move'
timestamp: ""
tx: null
txhash: EA8CADBF183BAD68CF4AFF2B21C54E409516CDACDC683F2F7D1EEEA6C6F446D3
```

```shell
❯ checkersd tx checkers play-move 1 1 2 2 3 --from $alice

auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgPlayMove
    creator: cosmos1h2zh2p6clnv463fjvpzukx0e8nrj70tw0pzcq0
    fromX: "1"
    fromY: "2"
    gameIndex: "1"
    toX: "2"
    toY: "3"
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12490A2C2F616C6963652E636865636B6572732E636865636B6572732E4D7367506C61794D6F7665526573706F6E7365121908FFFFFFFFFFFFFFFFFF0110FFFFFFFFFFFFFFFFFF011A012A
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3Ew
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3EwLzQ=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: R3dXV2IrK2o5WStjMTFlTlBNMCtKbSsyR1ZCYW5ZVFlISUJXNk8vaFZGMDVKNnZTVVNQNk9QNjJtQkpIK3dENGk1UGdkSmpENThZYkQyZllFOHFuUmc9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ1BsYXlNb3Zl
  type: message
gas_used: "52764"
gas_wanted: "200000"
height: "508"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /alice.checkers.checkers.MsgPlayMove
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/alice.checkers.checkers.MsgPlayMove"}]}]}]'
timestamp: ""
tx: null
txhash: C225F43A5204CB2351A1EE7421CBA69F5F8799AE08C1DD0DDF47DBF22A996BCB
```

```shell
❯ checkersd query checkers show-stored-game 1 --output json | jq ".storedGame.board" | sed 's/"//g' | sed 's/|/\n/g'

*b*b*b*b
b*b*b*b*
***b*b*b
**b*****
********
r*r*r*r*
*r*r*r*r
r*r*r*r*
```

```shell
❯ checkersd tx checkers play-move 1 0 5 1 4 --from $bob
auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgPlayMove
    creator: cosmos15w99g4kepz5tk6ee3xtn5c042kk3tmarjclvpx
    fromX: "0"
    fromY: "5"
    gameIndex: "1"
    toX: "1"
    toY: "4"
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12490A2C2F616C6963652E636865636B6572732E636865636B6572732E4D7367506C61794D6F7665526573706F6E7365121908FFFFFFFFFFFFFFFFFF0110FFFFFFFFFFFFFFFFFF011A012A
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMTV3OTlnNGtlcHo1dGs2ZWUzeHRuNWMwNDJrazN0bWFyamNsdnB4
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMTV3OTlnNGtlcHo1dGs2ZWUzeHRuNWMwNDJrazN0bWFyamNsdnB4LzI=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: RGhQRTlZbWVkVjF3U0I5aWY1dHc1MWIvT215MVZ5SG1OVzhZUndpeTZCQnU0L091b0NMRVJTNGppN1RlR2tZbmFwc09YU3UvbGMzZ3NxVWpUbTlrUmc9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ1BsYXlNb3Zl
  type: message
- attributes:
  - index: true
    key: Y3JlYXRvcg==
    value: Y29zbW9zMTV3OTlnNGtlcHo1dGs2ZWUzeHRuNWMwNDJrazN0bWFyamNsdnB4
  - index: true
    key: Z2FtZS1pbmRleA==
    value: MQ==
  - index: true
    key: Y2FwdHVyZWQteA==
    value: LTE=
  - index: true
    key: Y2FwdHVyZWQteQ==
    value: LTE=
  - index: true
    key: d2lubmVy
    value: Kg==
  type: move-played
gas_used: "52834"
gas_wanted: "200000"
height: "1445"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /alice.checkers.checkers.MsgPlayMove
    type: message
  - attributes:
    - key: creator
      value: cosmos15w99g4kepz5tk6ee3xtn5c042kk3tmarjclvpx
    - key: game-index
      value: "1"
    - key: captured-x
      value: "-1"
    - key: captured-y
      value: "-1"
    - key: winner
      value: '*'
    type: move-played
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/alice.checkers.checkers.MsgPlayMove"}]},{"type":"move-played","attributes":[{"key":"creator","value":"cosmos15w99g4kepz5tk6ee3xtn5c042kk3tmarjclvpx"},{"key":"game-index","value":"1"},{"key":"captured-x","value":"-1"},{"key":"captured-y","value":"-1"},{"key":"winner","value":"*"}]}]}]'
timestamp: ""
tx: null
txhash: 33C3343020C6ABE904949E082973B37DBA759D6B9A26E731A77C1B002F36A91A
```

```shell
❯ checkersd query tx 33C3343020C6ABE904949E082973B37DBA759D6B9A26E731A77C1B002F36A91A --output json | jq ".raw_log | fromjson"
[
  {
    "msg_index": 0,
    "events": [
      {
        "type": "message",
        "attributes": [
          {
            "key": "action",
            "value": "/alice.checkers.checkers.MsgPlayMove"
          }
        ]
      },
      {
        "type": "move-played",
        "attributes": [
          {
            "key": "creator",
            "value": "cosmos15w99g4kepz5tk6ee3xtn5c042kk3tmarjclvpx"
          },
          {
            "key": "game-index",
            "value": "1"
          },
          {
            "key": "captured-x",
            "value": "-1"
          },
          {
            "key": "captured-y",
            "value": "-1"
          },
          {
            "key": "winner",
            "value": "*"
          }
        ]
      }
    ]
  }
]
```

```shell
❯ checkersd query checkers show-stored-game 1 --output json | jq ".storedGame.board" | sed 's/"//g' | sed 's/|/\n/g'

*b*b*b*b
b*b*b*b*
***b*b*b
**b*****
*r******
**r*r*r*
*r*r*r*r
r*r*r*r*
```

```shell
❯ checkersd tx checkers play-move 1 2 3 0 5 --from $alice

auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /alice.checkers.checkers.MsgPlayMove
    creator: cosmos1h2zh2p6clnv463fjvpzukx0e8nrj70tw0pzcq0
    fromX: "2"
    fromY: "3"
    gameIndex: "1"
    toX: "0"
    toY: "5"
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12370A2C2F616C6963652E636865636B6572732E636865636B6572732E4D7367506C61794D6F7665526573706F6E73651207080110041A012A
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3Ew
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3EwLzU=
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: b2xkc3ZsN1FBelFzdElJWHh5Rjg2YThqRFFGOHliMTB5UDhIUFZudjlpZHFia1ZpZlVsN3VZdVdiaHVVUnozYWVxeE16UDUxNVlKaElxYUlDNk54RkE9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2FsaWNlLmNoZWNrZXJzLmNoZWNrZXJzLk1zZ1BsYXlNb3Zl
  type: message
- attributes:
  - index: true
    key: Y3JlYXRvcg==
    value: Y29zbW9zMWgyemgycDZjbG52NDYzZmp2cHp1a3gwZThucmo3MHR3MHB6Y3Ew
  - index: true
    key: Z2FtZS1pbmRleA==
    value: MQ==
  - index: true
    key: Y2FwdHVyZWQteA==
    value: MQ==
  - index: true
    key: Y2FwdHVyZWQteQ==
    value: NA==
  - index: true
    key: d2lubmVy
    value: Kg==
  type: move-played
gas_used: "52744"
gas_wanted: "200000"
height: "1597"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /alice.checkers.checkers.MsgPlayMove
    type: message
  - attributes:
    - key: creator
      value: cosmos1h2zh2p6clnv463fjvpzukx0e8nrj70tw0pzcq0
    - key: game-index
      value: "1"
    - key: captured-x
      value: "1"
    - key: captured-y
      value: "4"
    - key: winner
      value: '*'
    type: move-played
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/alice.checkers.checkers.MsgPlayMove"}]},{"type":"move-played","attributes":[{"key":"creator","value":"cosmos1h2zh2p6clnv463fjvpzukx0e8nrj70tw0pzcq0"},{"key":"game-index","value":"1"},{"key":"captured-x","value":"1"},{"key":"captured-y","value":"4"},{"key":"winner","value":"*"}]}]}]'
timestamp: ""
tx: null
txhash: 16C1FA1C1C8B97D89D6899A36D51ED1283A9A828D591AAE931B8E07E0B784548
```
