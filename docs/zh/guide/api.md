# API Reference

## Chain

### `get_info`

返回一个包含关于区块链的各种详细信息的对象。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_info
```

### `get_block`

返回一个对象，该对象包含关于区块链上特定块的各种详细信息。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_block
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                         |
| :-------------- | :-------------- | :----------------------------------- |
| block_num_or_id | string          | 块号或块id |

### `get_block_header_state`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_block_header_state
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                         |
| :-------------- | :-------------- | :----------------------------------- |
| block_num_or_id | string          | 块号或块id |

### `get_account`

返回一个对象，该对象包含关于区块链上特定帐户的各种详细信息。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_account
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明            |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | 帐户名称 |

### `get_abi`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_abi
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明            |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | 帐户名称 |

### `get_code`

返回一个对象，该对象包含关于区块链上特定智能契约的各种详细信息。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_code
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明            |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | 帐户名称 |

### `get_raw_code_and_abi`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_raw_code_and_abi
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明            |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | 帐户名称 |

### `get_table_rows`

返回包含来自指定表的行的对象。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_table_rows
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                                                                                     |
| :-------------- | :-------------- | :----------------------------------------------------------------------------------------------- |
| scope           | string          | 在表中拥有数据范围的帐户                                                           |
| code            | string          | 合同名称                                                                 |
| table           | string          | 表名                                                                         |
| json            | Boolean         | true or false                                                                            |
| lower_bound     | int32           | 下界                                                                         |
| upper_bound     | int32           | 上限                                                                         |
| limit           | int32           | 极限                                                                                |
| key_type        | string          | 由index_position指定的键的类型                                                          |
| index_position  | int32           | 1 -主索引(第一)，2 -二级索引(按照multi_index定义的顺序)，3 -三级索引等 |
| encode_type     | string          | dec or hex                                                                                       |

### `get_currency_balance`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_currency_balance
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明              |
| :-------------- | :-------------- | :------------------------ |
| code            | string          |
| account         | string          |账户余额|
| symbol          | string          | 符号        |

### `abi_json_to_bin`

将json序列化为二进制十六进制。结果的二进制十六进制通常用于push_transaction中的数据字段。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/abi_json_to_bin
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                 |
| :-------------- | :-------------- | :--------------------------- |
| code            | string          | 帐户名称    |
| action          | string          | action 参数    |
| args            | json            | json参数    |

### `abi_bin_to_json`

将二进制十六进制序列化为json。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/abi_bin_to_json
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                            |
| :-------------- | :-------------- | :-------------------------------------- |
| code            | string          | 合同帐户名 |
| action          | string          | action 参数            |
| binargs         | string          | 二进制参数            |

### `get_required_keys`

返回签署事务所需的键

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_required_keys
```

**BODY_PARAMS:**

| 参数名称 | 参数类型  | 说明                   |
| :-------------- | :--------------- | :----------------------------- |
| transaction     | json             | 交易对象 |
| available_keys  | array of strings | 密钥   |

### `get_currency_stats`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_currency_stats
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                         |
| :-------------- | :-------------- | :----------------------------------- |
| code            | string          |                                      |
| symbol          | strings         | 货币符号，以获取统计数据 |

### `get_producers`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_producers
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                          |
| :-------------- | :-------------- | :------------------------------------ |
| limit           | string          | 要检索的生产者总数 |
| lower_bound     | strings         |                                       |
| json            | Boolean         | 以JSON格式返回结果？          |

### `push_block`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/push_block
```

**BODY_PARAMS:**

| 参数名称    | 参数类型  |
| :----------------- | :--------------- |
| timestamp          | date-time        |
| producer           | string           |
| confirmed          | int32            |
| previous           | string           |
| transaction_mroot  | string           |
| action_mroot       | ont32            |
| version            | string           |
| new_producers      | array of strings |
| header_extensions  | array of strings |
| producer_signature | string           |
| transactions       | array            |
| block_extensions   | array of strings |

### `push_transaction`

此方法说明JSON格式的事务，并尝试将其应用于区块链。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/push_transaction
```

**BODY_PARAMS:**

| 参数名称          | 参数类型  | 说明                                          |
| :----------------------- | :--------------- | :---------------------------------------------------- |
| signatures               | array of strings | 授权交易所需的签名数组 |
| compression              | string           | 使用压缩，通常是 false                       |
| packed_context_free_data | string           | json 到 hex                                           |
| packed_trx               | string           | json 到 hex                                           |

### `push_transactions`

此方法说明JSON格式的事务，并尝试将其应用于区块链。此方法一次推送多个事务。

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/push_transactions
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 | 说明                                   |
| :-------------- | :-------------- | :--------------------------------------------- |
| body            | json            | 提供交易的授权 |

## History

### `get_actions`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_actions
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 |
| :-------------- | :-------------- |
| pos             | int32           |
| offset          | int32           |
| account_name    | string          |

### `get_transaction`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_transaction
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 |
| :-------------- | :-------------- |
| id              | string          |

### `get_key_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_key_accounts
```

**BODY_PARAMS:**

| 参数名称 | 参数类型 |
| :-------------- | :-------------- |
| public_key      | string          |

### `get_controlled_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_controlled_accounts
```

**BODY_PARAMS:**

| 参数名称     | 参数类型 |
| :------------------ | :-------------- |
| controlling_account | string          |

## Net

### `connect`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/net/connect
```

### `disconnect`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/net/disconnect
```

### `connections`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/net/connections
```

### `status`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/net/status
```

## Producer

### `pause`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/pause
```

### `resume`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/resume
```

### `paused`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/paused
```

### `get_runtime_options`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/get_runtime_options
```

### `update_runtime_options`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/update_runtime_options
```

**BODY_PARAMS:**

| 参数名称            | 参数类型 |
| :------------------------- | :-------------- |
| max_transaction_time       | int32           |
| max_irreversible_block_age | int32           |
| produce_time_offset_us     | int32           |
| last_block_time_offset_us  | int32           |
| incoming_defer_ratio       | int32           |
| subjective_cpu_leeway_us   | int32           |

### `get_greylist`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/get_greylist
```

### `add_greylist_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/add_greylist_accounts
```

**BODY_PARAMS:**

| 参数名称 | 参数类型  | 说明                |
| :-------------- | :--------------- | :-------------------------- |
| accounts        | array of strings | 要添加到灰名单的帐户 |

### `remove_greylist_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/remove_greylist_accounts
```

**BODY_PARAMS:**

| 参数名称 | 参数类型  | 说明                |
| :-------------- | :--------------- | :-------------------------- |
| accounts        | array of strings | Accounts to add to greylist |

### `get_whitelist_blacklist`

返回生产者白名单和黑名单

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/get_whitelist_blacklist
```

### `set_whitelist_blacklist`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer
```

## Dbsize

### `get`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/db_size/get
```
