# API Reference

## Chain

### `get_info`

Returns an object containing various details about the blockchain.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_info
```

### `get_block`

Returns an object containing various details about a specific block on the blockchain.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_block
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                             |
| :-------------- | :-------------- | :----------------------------------- |
| block_num_or_id | string          | Provide a block number or a block id |

### `get_block_header_state`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_block_header_state
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                             |
| :-------------- | :-------------- | :----------------------------------- |
| block_num_or_id | string          | Provide a block number or a block id |

### `get_account`

Returns an object containing various details about a specific account on the blockchain.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_account
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | Provide an account name |

### `get_abi`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_abi
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | Provide an account name |

### `get_code`

Returns an object containing various details about a specific smart contract on the blockchain.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_code
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | Provide an account name |

### `get_raw_code_and_abi`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_raw_code_and_abi
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                |
| :-------------- | :-------------- | :---------------------- |
| account_name    | string          | Provide an account name |

### `get_table_rows`

Returns an object containing rows from the specified table.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_table_rows
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                                                                                         |
| :-------------- | :-------------- | :----------------------------------------------------------------------------------------------- |
| scope           | string          | Account that owns data range in table.                                                           |
| code            | string          | Provide the smart contract name                                                                  |
| table           | string          | Provide the table name                                                                           |
| json            | Boolean         | Provide true or false                                                                            |
| lower_bound     | int32           | Provide the lower bound                                                                          |
| upper_bound     | int32           | Provide the upper bound                                                                          |
| limit           | int32           | Provide the limit                                                                                |
| key_type        | string          | type of key specified by index_position                                                          |
| index_position  | int32           | 1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc |
| encode_type     | string          | dec or hex                                                                                       |

### `get_currency_balance`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_currency_balance
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                  |
| :-------------- | :-------------- | :------------------------ |
| code            | string          |
| account         | string          | account to get balance of |
| symbol          | string          | symbol to query           |

### `abi_json_to_bin`

Serializes json to binary hex. The resulting binary hex is usually used for the data field in push_transaction.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/abi_json_to_bin
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                     |
| :-------------- | :-------------- | :--------------------------- |
| code            | string          | Provide the account name.    |
| action          | string          | Provide the action arguments |
| args            | json            | Provide the json arguments   |

### `abi_bin_to_json`

Serializes binary hex to json.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/abi_bin_to_json
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                                |
| :-------------- | :-------------- | :-------------------------------------- |
| code            | string          | Provide the smart contract account name |
| action          | string          | Provide the action arguments            |
| binargs         | string          | Provide the binary arguments            |

### `get_required_keys`

Returns the required keys needed to sign a transaction

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_required_keys
```

**BODY_PARAMS:**

| Parameter names | Parameter types  | REQUIRED                       |
| :-------------- | :--------------- | :----------------------------- |
| transaction     | json             | Provide the transaction object |
| available_keys  | array of strings | Provide the available keys     |

### `get_currency_stats`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_currency_stats
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                             |
| :-------------- | :-------------- | :----------------------------------- |
| code            | string          |                                      |
| symbol          | strings         | currency symbol to get the stats for |

### `get_producers`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/get_producers
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                              |
| :-------------- | :-------------- | :------------------------------------ |
| limit           | string          | total number of producers to retrieve |
| lower_bound     | strings         |                                       |
| json            | Boolean         | return result in JSON format          |

### `get_producers`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/push_block
```

**BODY_PARAMS:**

| Parameter names    | Parameter types  |
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

This method expects a transaction in JSON format and will attempt to apply it to the blockchain.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/push_transaction
```

**BODY_PARAMS:**

| Parameter names          | Parameter types  | REQUIRED                                              |
| :----------------------- | :--------------- | :---------------------------------------------------- |
| signatures               | array of strings | array of signatures required to authorize transaction |
| compression              | string           | compression used, usually false                       |
| packed_context_free_data | string           | json to hex                                           |
| packed_trx               | string           | json to hex                                           |

### `push_transactions`

This method expects a transactions in JSON format and will attempt to apply it to the blockchain. This method push multiple transactions at once.

```bash
curl --request POST --url http://127.0.0.1:8888/v1/chain/push_transactions
```

**BODY_PARAMS:**

| Parameter names | Parameter types | REQUIRED                                       |
| :-------------- | :-------------- | :--------------------------------------------- |
| body            | json            | Provide the authorizations for the transaction |

## History

### `get_actions`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_actions
```

**BODY_PARAMS:**

| Parameter names | Parameter types |
| :-------------- | :-------------- |
| pos             | int32           |
| offset          | int32           |
| account_name    | string          |

### `get_transaction`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_transaction
```

**BODY_PARAMS:**

| Parameter names | Parameter types |
| :-------------- | :-------------- |
| id              | string          |

### `get_key_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_key_accounts
```

**BODY_PARAMS:**

| Parameter names | Parameter types |
| :-------------- | :-------------- |
| public_key      | string          |

### `get_controlled_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/history/get_controlled_accounts
```

**BODY_PARAMS:**

| Parameter names     | Parameter types |
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

| Parameter names            | Parameter types |
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

| Parameter names | Parameter types  | REQUIRED                    |
| :-------------- | :--------------- | :-------------------------- |
| accounts        | array of strings | Accounts to add to greylist |

### `remove_greylist_accounts`

```bash
curl --request POST --url http://127.0.0.1:8888/v1/producer/remove_greylist_accounts
```

**BODY_PARAMS:**

| Parameter names | Parameter types  | REQUIRED                    |
| :-------------- | :--------------- | :-------------------------- |
| accounts        | array of strings | Accounts to add to greylist |

### `get_whitelist_blacklist`

Returns producer whitelist & blacklist

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
