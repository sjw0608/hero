# 快速开始

## 环境要求

- 系统: **macOS / Ubuntu 16.04 LTS 64-bit**, **4.4.0-63-generic** 内核或更高
- 内存: 16GB+
- 硬盘: 500GB+

## 节点安装

### 1. 获取源代码

```bash
 git clone git@192.168.1.67:/home/git/mis.git
```

### 2. 生成配置文件

- 构建工程

```bash
cd mis && ./eosio_build.sh
```

- 安装

```bash
cd build && sudo make install && cd ..
```

- 生成配置文件

```bash
./build/programs/nodeos/nodeos
```

## 基于 Mis 搭建全节点

### 修改创世文件

参考 **gencsis.json** 文件对路径 **mis/tutorials/bios-boot-tutorial/genesis.json** 下的文件进行修改，确保里面的参数完全一致否则节点启动会提示 wrong chain 错误。

### 启动节点

```bash
./build/programs/nodeos/nodeos --p2p-server-address 本地 ip:9876 --p2p-peer-address 122.112.235.223:9876 --p2p-peer-address 159.138.3.207:9876 --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::net_api_plugin --plugin eosio::history_plugin --delete-all-blocks --genesis-json tutorials/bios-boot-tutorial/genesis.json
```

### 确认加入主网

```bash
./build/programs/cleos/cleos -u http://122.112.235.223:8888 get info获取主链chain_id

./build/programs/cleos/cleos get info获取本地链chain_id，如果与主链chain_id一致则节点已经链上公网了。
```

成功后会显示节点在同步区块

至此**全节点配置完成**

## 基于 Mis 搭建 BP 节点

注：先配置好全节点再进行下面操作以完成 bp 节点添加

### 注册 Mis 账号

::: warning 创建账号（**已注册则跳过此步**）

```bash
./build/programs/cleos/cleos --wallet-url http://127.0.0.1:8900  system newaccount --transfer 已注册账号名 账号名 账号公钥 --stake-net "50.0000 MIS" --stake-cpu "50.0000 MIS" --buy-ram "2.0000 MIS"
```

:::

### 启动节点

```bash
./build/programs/nodeos/nodeos --filter-on eosio.token:transfer: --access-control-allow-origin * --access-control-allow-headers * --http-validate-host false --p2p-server-address 本地ip:9876 --p2p-peer-address  122.112.235.223:9876 --p2p-peer-address 159.138.3.207:9876 --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::net_api_plugin --plugin eosio::history_plugin --delete-all-blocks --agent-name "账号名 Test Agent" --producer-name 账号名 --signature-provider  账号公钥=KEY:账号私钥
```

### 转账

```bash
./build/programs/cleos/cleos transfer 发款账号 收款账号 "49999950.0000 MIS"
```

### 抵押

```bash
./build/programs/cleos/cleos system delegatebw 本人账户名 本人账户名 "50000000.0000 MIS" "50000000.0000 MIS"
```

注：加入主网成为生产者区块一共要抵押 100000000。

### 节点投票

```bash
./build/programs/cleos/cleos system regproducer 账号名 账号公钥

./build/programs/cleos/cleos system voteproducer prods 投票账号名 被投票账号名
```

成功后可以生产区块,则**BP 节点配置完成**

### 取消 BP 申请

```bash
./build/programs/cleos/cleos system unregprod 候选人账号名
```

### 取消节点投票

```bash
./build/programs/cleos/cleos system voteproducer unapprove 投票账号名 被投票账号名
```

### 取消抵押

```bash
./build/programs/cleos/cleos system undelegatebw 本人账户名 本人账户名 "5.0000 MIS" "5.0000 MIS"
```
