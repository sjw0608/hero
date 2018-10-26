# Getting Started width Mission

## Requirement

- **macOS / Ubuntu 16.04 LTS 64-bit** with **4.4.0-63-generic** kernel or higher
- RAM: 16GB+
- Disk: 500GB+

## Node installation

### 1. Get the source code

```bash
 git clone git@192.168.1.67:/home/git/mis.git
```

### 2. Generate configuration files

- Building engineering

```bash
cd mis && ./eosio_build.sh
```

- Install

```bash
cd build && sudo make install && cd ..
```

- Generate configuration files

```bash
./build/programs/nodeos/nodeos
```

## Set up full nodes based on Mis

### Revise the creation document

Refer to the **gencsis.json** file to modify the file under path **mis/tutorials/bios-boot-tutorial/genesis.json** to ensure that the parameters in it are completely consistent; otherwise, the node will start to prompt wrong chain error.

### Start node

```bash
./build/programs/nodeos/nodeos --p2p-server-address local ip:9876 --p2p-peer-address 122.112.235.223:9876 --p2p-peer-address 159.138.3.207:9876 --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::net_api_plugin --plugin eosio::history_plugin --delete-all-blocks --genesis-json tutorials/bios-boot-tutorial/genesis.json
```

### Confirm to join the main network

```bash
./build/programs/cleos/cleos -u http://122.112.235.223:8888 get info access to the main chain chain_id

./build/programs/cleos/cleos get Info gets the chain_id of the local chain. If it is the same as the main chain_id, the node is already on the public network。
```

After success, the node is displayed in the synchronization block

At this point,**full node configuration completed**

## Set up BP node based on Mis

Note: the full node is configured before the following operation to complete the bp node addition

### Registration of Mis account

::: warning Create an account (**if registered, skip this step**)

```bash
./build/programs/cleos/cleos --wallet-url http://127.0.0.1:8900  system newaccount --transfer registered account name account name account public key --stake-net "50.0000 MIS" --stake-cpu "50.0000 MIS" --buy-ram "2.0000 MIS"
```

:::

### 启动节点

```bash
./build/programs/nodeos/nodeos --filter-on eosio.token:transfer: --access-control-allow-origin * --access-control-allow-headers * --http-validate-host false --p2p-server-address local ip:9876 --p2p-peer-address  122.112.235.223:9876 --p2p-peer-address 159.138.3.207:9876 --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::net_api_plugin --plugin eosio::history_plugin --delete-all-blocks --agent-name "account name Test Agent" --producer-name account name  --signature-provider Account public KEY =KEY: account private KEY
```

### Transfer

```bash
./build/programs/cleos/cleos transfer pay account payment account "49999950.0000 MIS"
```

### Mortgage

```bash
./build/programs/cleos/cleos system delegatebw my account name My account name "50000000.0000 MIS" "50000000.0000 MIS"
```

Note: a total of 100000000 must be mortgaged to join the main network and become the producer block.

### Node to vote

```bash
./build/programs/cleos/cleos system regproducer account name account public key

./build/programs/cleos/cleos system voteproducer prods voting account name  the name of the voted account
```

The block can be produced after success.Then **BP node configuration is completed**

### Cancellation of BP application

```bash
./build/programs/cleos/cleos system unregprod candidate account name
```

### Cancel node vote

```bash
./build/programs/cleos/cleos system voteproducer unapprove voting account name  the name of the voted account
```

### Cancellation of the mortgage

```bash
./build/programs/cleos/cleos system undelegatebw my account name my account name "5.0000 MIS" "5.0000 MIS"
```
