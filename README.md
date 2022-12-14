# cosmos

## Checkers

`ignite scaffold chain github.com/alice/checkers` - scaffold

`ignite chain serve` - download deps, compile to binary

```shell
Cosmos SDK's version is: stargate - v0.46.6

🛠  Building proto...
📦 Installing dependencies...
🛠  Building the blockchain...
💿 Initializing the app...
🗂  Initialize accounts...
🙂 Added account alice with address cosmos1ztulvy2lzd5x047evuhfywje033ruscr4yh4nk and mnemonic: mansion cradle era illegal fan horror payment weasel pact sugar crawl proof century bomb under mixed machine slot prefer boy struggle return prefer ready
🙂 Added account bob with address cosmos1p88850q7neq3kfsy0fvlc9v5p8jupxyveag9ad and mnemonic: metal outside fantasy surprise actress forward stuff solve toast jar eyebrow filter satisfy sad album peasant tourist empty friend outdoor sudden impose rural trend
🌍 Tendermint node: http://0.0.0.0:26657
🌍 Blockchain API: http://0.0.0.0:1317
🌍 Token faucet: http://0.0.0.0:4500
^C💿 Saving genesis state...
💿 Genesis state saved in /Users/tobias/.ignite/local-chains/checkers/exported_genesis.json
```

`checkersd status`

`ignite scaffold message createPost title body`

```shell
modify proto/checkers/checkers/tx.proto
modify x/checkers/client/cli/tx.go
create x/checkers/client/cli/tx_create_post.go
create x/checkers/keeper/msg_server_create_post.go
modify x/checkers/module_simulation.go
create x/checkers/simulation/create_post.go
modify x/checkers/types/codec.go
create x/checkers/types/message_create_post.go
create x/checkers/types/message_create_post_tecreate x/checkers/types/message_create_post_test.go

🎉 Created a message `createPost`.
```

```shell
# checkersd --help
# checkersd status --help
# checkersd query --help
```
