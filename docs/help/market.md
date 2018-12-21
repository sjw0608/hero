# Market Information

## Optional

| precondition              | All                                                                                    |
| :------------------------ | :------------------------------------------------------------------------------------- |
| Triggering event          | Click the add self-selection button                                                    |
| The success scenario      | The self-select interface owns the transaction pair                                    |
| Error scenarios           | The operation fails, and the system gives the reason for the failure                   |
| Functional specifications | Users can add various transaction pairs of personal concern to the self-selection list |
| The operator              | All users                                                                              |

UI schematic: Self - selected interface

![](./assets/market/market1.png)

> Interface elements -- input and button

<table>
    <tr>
        <th>Name</th>
        <th>Rules</th>
    </tr>
    <tr>
        <th>Optional</th>
        <th>
             <ul style="text-align:left;">
                <li>The page displays a list of all transaction pairs added by the user</li>
                <li>Currency corresponding market value/market value/fluctuation for real-time update, users can view the latest data</li>
                <li>Click the optional trading pair to view the details of the trading pair</li>
            </ul>
        </th>
    </tr>
    <tr>
        <th>Editors are optional</th>
        <th style="text-align:left;">
             Users can delete the added transaction pair (select all or single), drag and sort, and put the top operation. Click "finish" to save
        </th>
    </tr>
    <tr>
        <th>Add the optional</th>
        <th style="text-align:left;">
           The user clicks the add self-select button to enter the currency name/transaction pair and select the currency or transaction pair needed to be added
        </th>
    </tr>
     <tr>
        <th>Search</th>
        <th style="text-align:left;">
            Click the button searched and go to the search page. The operation details can be seen in [search].
        </th>
    </tr>
</table>

##  Market Value

| precondition              | Without                                                                     |
| :------------------------ | :-------------------------------------------------------------------------- |
| Triggering event          | Click the TAB TAB for market cap                                            |
| The success scenario      | Display corresponding pages                                                 |
| Error scenarios           | The operation fails, and the system gives the reason for the failure        |
| Functional specifications | It mainly shows the order of different currencies according to market value |
| The operator              | All users                                                                   |

UI schematic: Market ranking interface

![](./assets/market/market2.png)

> Interface elements -- input and button

<table>
    <tr>
        <th>Name</th>
        <th>Rules</th>
    </tr>
    <tr>
        <th>Check the value of</th>
        <th style="text-align:left;">
            Users can view the market value of different currencies and the decline of today
        </th>
    </tr>
    <tr>
        <th>Search</th>
        <th style="text-align:left;">
           The user clicks the search button to inquire the value details of the relevant currency
        </th>
    </tr>
</table>


## Search

| Overview                  | You can search for trading pairs                                     |
| :------------------------ | :------------------------------------------------------------------- |
| precondition              | Without                                                              |
| Triggering event          | Click search to enter                                                |
| The success scenario      | Display corresponding pages                                          |
| Error scenarios           | The operation fails, and the system gives the reason for the failure |
| Functional specifications | Provide user search to view transaction and currency information     |
| The operator              | All users                                                            |

UI schematic: Search interface

![](./assets/market/market4.png)

> Interface elements -- input and button

<table>
    <tr>
        <th>Name</th>
        <th>Rules</th>
    </tr>
    <tr>
        <th>Input</th>
        <th>
             <ul style="text-align:left;">
                <li>Users need to enter a transaction to search for/currency</li>
                <li>When the user enters an error, the page message says "search result is empty".</li>
            </ul>
        </th>
    </tr>
    <tr>
        <th>Remove/add self selection</th>
        <th style="text-align:left;">
            The user selects the transaction to be searched or the currency to be removed/added. "-" indicates that the transaction pair/currency has been added to the self-selected list, and another click is the move out operation, then the self-selected list does not show the canceled transaction pair/currency, and "+" indicates that the transaction pair/currency has been added to the self-selected list
        </th>
    </tr>
    <tr>
        <th>Check the details</th>
        <th style="text-align:left;">
           Select any trading pair/currency you want to search for and see the action details
        </th>
    </tr>
    <tr>
        <th>The historical record</th>
        <th>
             <ul style="text-align:left;">
                <li>Displays the history record of search transaction/currency entered by the user, and the user can clear the history search record</li>
                <li>The history list shows the latest 20 records</li>
            </ul>
        </th>
    </tr>
</table>

## Transaction details

| precondition              | Without                                                              |
| :------------------------ | :------------------------------------------------------------------- |
| Triggering event          | Click trade on enter                                                 |
| The success scenario      | Display corresponding pages                                          |
| Error scenarios           | The operation fails, and the system gives the reason for the failure |
| Functional specifications | Check transaction details                                            |
| The operator              | All users                                                            |

UI schematic: Detail interface

![](./assets/market/market7.png)

> Interface elements -- input and button

<table>
    <tr>
        <th>Name</th>
        <th>Rules</th>
    </tr>
    <tr>
        <th>K-line Diagrams</th>
        <th style="text-align:left;">
             he details of the transaction are shown on the K graph according to different time intervals. K graph data were obtained from different exchanges: HuoBi/FCoin/OKex
        </th>
    </tr>
    <tr>
        <th>Currency data display</th>
        <th style="text-align:left;">
          Display the corresponding currency real-time price/ranking/market value
        </th>
    </tr>
     <tr>
        <th>The currency is introduced</th>
        <th style="text-align:left;">
            Show an overview of the currency
        </th>
    </tr>
    <tr>
        <th>Trade in depth</th>
        <th style="text-align:left;">
           Display the billing information of current currency transaction
        </th>
    </tr>
     <tr>
        <th>Collection transaction pair</th>
        <th style="text-align:left;">
            The user clicks the favorites add button to add the transaction pair to the self-selected list of transaction pairs
        </th>
    </tr>
    <tr>
        <th>Share</th>
        <th>
             <ul style="text-align:left;">
                <li>The user clicks on the share icon and selects how to share</li>
                <li>Users share the transaction and detailed information screenshots. Mission wallet application qr code is automatically attached to the system to facilitate users to learn more about the wallet application details</li>
            </ul>
        </th>
    </tr>
</table>
