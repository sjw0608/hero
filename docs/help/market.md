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
                <li>The self-selected transaction can be sorted according to the latest price level of the market and the range of rise and fall. The market value and rise and fall of the trading pair are updated in real time, and users can check the latest data</li>
                <li>The user can view the latest value of the transaction, click the latest price button, and choose the transaction value from high to low. Click the latest price button again, and the self-selected transaction pair will be sorted by value from low to high. The three clicks will be sorted by dragging in the user-selected editing. (the user can see the increase or decrease of the trading pair and click the increase or decrease button.)</li>
                <li>Click the optional trading pair to view the details of the trading pair</li>
                <li>Click the value of increase or decrease, the total market value, transaction value can be arbitrarily switched to view</li>
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

## Trade to list

| precondition              | Without                                                              |
| :------------------------ | :------------------------------------------------------------------- |
| Triggering event          | Click the TAB TAB for market cap                                     |
| The success scenario      | Display corresponding pages                                          |
| Error scenarios           | The operation fails, and the system gives the reason for the failure |
| Functional specifications | Mainly shows the value of different trading pairs and declines       |
| The operator              | All users                                                            |

UI schematic: Transaction to list interface

![](./assets/market/market3.png)

> Interface elements -- input and button

<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Rules</th>
        </tr>
        <tr>
            <th rowspan="3">View transaction pairs</th>
            <td>Users can choose to view the latest price and decline of different currencies on the basis of BTC/ETH/USDP, and choose to click any trading pair to see details of the trend of the trading pair</td>
        </tr>
        <tr>
            <td>Users click the rise and fall value, can switch to see the rise and fall, market value, transaction amount</td>
        </tr>
         <tr>
            <td>The default order for trading pairs ranges from high to low</td>
        </tr>
         <tr>
            <th>Search</th>
            <td>Users click on the search icon to search for information about a specific transaction</td>
        </tr>
    </tbody>
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

## Comprehensive analysis of

| precondition              | Without                                                                           |
| :------------------------ | :-------------------------------------------------------------------------------- |
| Triggering event          | Click TAB to enter                                                                |
| The success scenario      | Display corresponding pages                                                       |
| Error scenarios           | The operation fails, and the system gives the reason for the failure              |
| Functional specifications | Analyze and display the data in different dimensions for the convenience of users |
| The operator              | All users                                                                         |

UI diagram: Comprehensive interface

![](./assets/market/market5.png)
![](./assets/market/market6.png)

> Interface elements -- input and button

<table>
    <tr>
        <th>Name</th>
        <th>Rules</th>
    </tr>
    <tr>
        <th>Transaction analysis</th>
        <th style="text-align:left;">
            Displays the value of the usdt-based BTC/ETH/EOS trading pairs and the ups and downs, and users can choose to click on any trading pair to see details. For details, please check [transaction details].
        </th>
    </tr>
    <tr>
        <th>Search</th>
        <th style="text-align:left;">
            Click the search icon to search for information about a transaction and currency
        </th>
    </tr>
    <tr>
        <th>MISTOKEN blockchain explorer</th>
        <th style="text-align:left;">
            Click on the block browser and enter the browser page to view all transaction records. The specific page can be viewed [blockchain browser].
        </th>
    </tr>
    <tr>
        <th>Or distribution</th>
        <th style="text-align:left;">
            Users can view a chart of the world's top 500 currencies, with statistics showing up/down Numbers
        </th>
    </tr>
    <tr>
        <th>Hot plate</th>
        <th>
             <ul style="text-align:left;">
                <li>The page mainly shows information of three popular sections</li>
                <li>Users need to see more plates, and can click more buttons in "hot plates" to enter the list of plates and display all the plate information</li>
            </ul>
        </th>
    </tr>
    <tr>
        <th>Performer</th>
        <th>
             <ul style="text-align:left;">
                <li>The user clicks the drop-down display icon, and the system displays the currency information of the top 4</li>
                <li>Users can click "more" to enter the "more" page to view all currency details (price/increase/volume).</li>
                <li>Users can switch to sort according to price/increase/volume</li>
            </ul>
        </th>
    </tr>
     <tr>
        <th>Drop list</th>
        <th>
             <ul style="text-align:left;">
                <li>The user clicks the drop-down display icon, and the system displays the currency information of the top 4</li>
                <li>Users can click "more" to enter the "more" page to view all currency details (price/increase/volume).</li>
                <li>Users can switch to sort according to price/increase/volume</li>
            </ul>
        </th>
    </tr>
     <tr>
        <th>Capital inflow charts</th>
        <th>
             <ul style="text-align:left;">
                <li>The user clicks the drop-down icon, and the system displays the currency information of the first 4 funds</li>
                <li>Users need to see more fund inflow in currencies. Click "more" to enter today's flow interface to view details of all transactions on capital inflow (net inflow/share of transaction amount).</li>
                <li>Users are sorted according to the proportion of net inflow/transaction amount</li>
            </ul>
        </th>
    </tr>
     <tr>
        <th>Money flows out</th>
        <th>
             <ul style="text-align:left;">
                <li>The user clicks the drop-down icon, and the system displays the currency information of the first 4 funds</li>
                <li>Users need to see more fund inflow in currencies. Click "more" to enter today's flow interface to view details of all transactions on capital inflow (net inflow/share of transaction amount).</li>
                <li>Users are sorted according to the proportion of net inflow/transaction amount</li>
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
             The trading details are shown by K chart according to different time intervals
        </th>
    </tr>
    <tr>
        <th>The currency is introduced</th>
        <th style="text-align:left;">
           Present an overview of currency
        </th>
    </tr>
     <tr>
        <th>The data analysis</th>
        <th style="text-align:left;">
            Currency capital inflow and outflow, maximum and minimum price analysis
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
        <th>Search</th>
        <th style="text-align:left;">
            Click the search button to enter the search page and conduct the search operation
        </th>
    </tr>
    <tr>
        <th></th>
        <th>
             <ul style="text-align:left;">
                <li>Users share the transaction and detailed information screenshots. Mission wallet application qr code is automatically attached to the system to facilitate users to learn more about the wallet application details</li>
            </ul>
        </th>
    </tr>
</table>
