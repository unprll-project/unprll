<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Ogiltig måladress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="70"/>
        <source>Integrated address and short payment ID can&apos;t be used at the same time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid payment ID. Short payment ID should only be used in an integrated address</source>
        <translation type="vanished">Ogiltigt betalnings-ID. Kort betalnings-ID ska endast användas i en integrerad adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="63"/>
        <source>Invalid payment ID</source>
        <translation>Ogiltigt betalnings-ID</translation>
    </message>
    <message>
        <source>Integrated address and long payment ID can&apos;t be used at the same time</source>
        <translation type="vanished">Integrerad adress och långt betalnings-ID kan inte användas samtidigt</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="91"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Försöker spara transaktion till fil, men angiven fil finns redan. Avslutar för att inte riskera att skriva över någonting. Fil:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="98"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Det gick inte att skriva transaktioner till fil</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="121"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="124"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="128"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="133"/>
        <source>. Reason: </source>
        <translation>. Orsak: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="135"/>
        <source>Unknown exception: </source>
        <translation>Okänt undantag: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="138"/>
        <source>Unhandled exception</source>
        <translation>Ohanterat undantag</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="211"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="233"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Detta är en granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Det gick inte att signera transaktionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="162"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Begärd växel går inte till en betald adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Begärd växel är större än betalning till växeladressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="178"/>
        <source>Change goes to more than one address</source>
        <translation>Växel går till fler än en adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="191"/>
        <source>sending %s to %s</source>
        <translation>skickar %s till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>with no destinations</source>
        <translation>utan några mål</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>%s change to %s</source>
        <translation>%s växel till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="206"/>
        <source>no change</source>
        <translation>ingen växel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="208"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Läste in %lu transaktioner, för %s, avgift %s, %s, %s, med minsta ringstorlek %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation type="vanished">betalnings-ID har ogiltigt format. En hexadecimal sträng med 16 eller 64 tecken förväntades: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1366"/>
        <source>Failed to add short payment id: </source>
        <translation>Det gick inte att lägga till kort betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1402"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1484"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1404"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1486"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1406"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1488"/>
        <source>RPC error: </source>
        <translation>RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1434"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1519"/>
        <source>not enough outputs for specified ring size</source>
        <translation>inte tillräckligt med utgångar för angiven ringstorlek</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1436"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1521"/>
        <source>found outputs to use</source>
        <translation>hittade utgångar att använda</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1438"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Svep upp omixbara utgångar.</translation>
    </message>
    <message>
        <source>failed to get random outputs to mix</source>
        <translation type="vanished">det gick inte att hämta slumpmässiga utgångar att mixa</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1412"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1495"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>inte tillräckligt med pengar för överföring, endast tillgängligt %s, skickat belopp %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="537"/>
        <source>failed to parse address</source>
        <translation>det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="548"/>
        <source>failed to parse secret spend key</source>
        <translation>det gick inte att parsa hemlig spendernyckel</translation>
    </message>
    <message>
        <source>No view key supplied, cancelled</source>
        <translation type="vanished">Ingen granskningsnyckel angiven, avbruten</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="571"/>
        <source>failed to parse secret view key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="580"/>
        <source>failed to verify secret spend key</source>
        <translation>det gick inte att verifiera hemlig spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="584"/>
        <source>spend key does not match address</source>
        <translation>spendernyckel matchar inte adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="590"/>
        <source>failed to verify secret view key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="594"/>
        <source>view key does not match address</source>
        <translation>granskningsnyckel matchar inte adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="617"/>
        <location filename="../src/wallet/api/wallet.cpp" line="634"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="881"/>
        <source>Failed to send import wallet request</source>
        <translation>Det gick inte att skicka begäran om att importera plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1031"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Det gick inte att läsa in osignerade transaktioner</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1050"/>
        <source>Failed to load transaction from file</source>
        <translation>Det gick inte att läsa in transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1066"/>
        <source>Wallet is view only</source>
        <translation>Plånboken är endast för granskning</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1074"/>
        <source>failed to save file </source>
        <translation>det gick inte att spara fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1090"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Nyckelavbildningar kan bara importeras med en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1103"/>
        <source>Failed to import key images: </source>
        <translation>Det gick inte att importera nyckelavbildningar: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1135"/>
        <source>Failed to get subaddress label: </source>
        <translation>Det gick inte att hämta etikett för underadress: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1148"/>
        <source>Failed to set subaddress label: </source>
        <translation>Det gick inte att ange etikett för underadress: </translation>
    </message>
    <message>
        <source>failed to get random outputs to mix: %s</source>
        <translation type="vanished">det gick inte att hitta slumpmässiga utgångar att mixa: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="563"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="682"/>
        <source>Electrum seed is empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="691"/>
        <source>Electrum-style word list failed verification</source>
        <translation type="unfinished">Det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1165"/>
        <source>Failed to get multisig info: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1182"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1196"/>
        <source>Failed to make multisig: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1211"/>
        <source>Failed to finalize multisig wallet creation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1214"/>
        <source>Failed to finalize multisig wallet creation: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1230"/>
        <source>Failed to export multisig images: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1248"/>
        <source>Failed to parse imported multisig images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1258"/>
        <source>Failed to import multisig images: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1272"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1300"/>
        <source>Failed to restore multisig transaction: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1340"/>
        <source>Invalid destination address</source>
        <translation type="unfinished">Ogiltig måladress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1357"/>
        <source>payment id has invalid format, expected 16 character hex string: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1408"/>
        <source>failed to get outputs to mix: %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1419"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1503"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>inte tillräckligt med pengar för överföring, totalt saldo är bara %s, skickat belopp %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1426"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1511"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>ej tillräckligt med pengar för överföring, endast tillgängligt %s, transaktionsbelopp %s = %s + %s (avgift)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1436"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1521"/>
        <source>output amount</source>
        <translation>utgångens belopp</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1441"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1525"/>
        <source>transaction was not constructed</source>
        <translation>transaktionen konstruerades inte</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1444"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1528"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1449"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1533"/>
        <source>one of destinations is zero</source>
        <translation>ett av målen är noll</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1451"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1535"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>det gick inte att hitta ett lämpligt sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1453"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1537"/>
        <source>unknown transfer error: </source>
        <translation>okänt överföringsfel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1455"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1539"/>
        <source>internal error: </source>
        <translation>internt fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1457"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1541"/>
        <source>unexpected error: </source>
        <translation>oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1459"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1543"/>
        <source>unknown error</source>
        <translation>okänt fel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1490"/>
        <source>failed to get outputs to mix</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1618"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1645"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1693"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1721"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1749"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1770"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2225"/>
        <source>Failed to parse txid</source>
        <translation>Det gick inte att parsa txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1635"/>
        <source>no tx keys found for this txid</source>
        <translation>inga tx-nycklar kunde hittas för detta txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1662"/>
        <source>Failed to parse tx key</source>
        <translation>Det gick inte att parsa txnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1671"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1700"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1728"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <source>Failed to parse address</source>
        <translation>Det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1814"/>
        <source>Address must not be a subaddress</source>
        <translation>Adressen får inte vara en underadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1854"/>
        <source>The wallet must be in multisig ready state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1876"/>
        <source>Given string is not a key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2097"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Genomsök efter spenderade kan endast användas med en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2146"/>
        <source>Invalid output: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2153"/>
        <source>Failed to mark outputs as spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2164"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2186"/>
        <source>Failed to parse output amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2169"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2191"/>
        <source>Failed to parse output offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2175"/>
        <source>Failed to mark output as spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2197"/>
        <source>Failed to mark output as unspent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2208"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2247"/>
        <source>Failed to parse key image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2214"/>
        <source>Failed to get ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2232"/>
        <source>Failed to get rings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2253"/>
        <source>Failed to set ring</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="298"/>
        <source>Failed to parse address</source>
        <translation>Det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="305"/>
        <source>Failed to parse key</source>
        <translation>Det gick inte att parsa nyckeln</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="313"/>
        <source>failed to verify key</source>
        <translation>det gick inte att verifiera nyckeln</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323"/>
        <source>key does not match address</source>
        <translation>nyckeln matchar inte adressen</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="57"/>
        <source>yes</source>
        <translation>ja</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="71"/>
        <source>no</source>
        <translation>nej</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="40"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Ange IP-adress för att binda till RPC-server</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="41"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Ange användarnamn[:lösenord] som krävs av RPC-servern</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="42"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Bekräftelsevärde för rpc-bind-ip är INTE en lokal IP-adress (loopback)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="43"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Ange en kommaseparerad lista av ursprung för att tillåta resursdelning för korsande ursprung (Cross-origin resource sharing)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="70"/>
        <source>Invalid IP address given for --</source>
        <translation>Ogiltig IP-adress angiven för --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="78"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> tillåter inkommande okrypterade externa anslutningar. Överväg att använda SSH-tunnel eller SSL-proxy istället. Åsidosätt med --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Username specified with --</source>
        <translation>Användarnamn angivet med --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> cannot be empty</source>
        <translation> får inte vara tomt</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> requires RPC server password --</source>
        <translation> kräver lösenord till RPC-server --</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="553"/>
        <source>Commands: </source>
        <translation>Kommandon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3962"/>
        <source>failed to read wallet password</source>
        <translation>det gick inte att läsa lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3560"/>
        <source>invalid password</source>
        <translation>ogiltigt lösenord</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2680"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: kräver ett argument. tillgängliga alternativ: språk</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2713"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set: okända argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3804"/>
        <source>wallet file path not valid: </source>
        <translation>ogiltig sökväg till plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2783"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Försöker skapa eller återställa plånbok, men angivna filer finns redan.  Avslutar för att inte riskera att skriva över någonting.</translation>
    </message>
    <message>
        <source>usage: payment_id</source>
        <translation type="vanished">användning: payment_id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2666"/>
        <source>needs an argument</source>
        <translation>kräver ett argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2689"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2690"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2691"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2693"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2696"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2704"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2706"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2707"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2708"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2711"/>
        <source>0 or 1</source>
        <translation>0 eller 1</translation>
    </message>
    <message>
        <source>0, 1, 2, 3, or 4</source>
        <translation type="vanished">0, 1, 2, 3 eller 4</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2699"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2703"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2710"/>
        <source>unsigned integer</source>
        <translation>positivt heltal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2837"/>
        <source>NOTE: the following 25 words can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>OBS: följande 25 ord kan användas för att återställa åtkomst till din plånbok. Skriv ner och spara dem på ett säkert ställe. Spara dem inte i din e-post eller på något lagringsutrymme som du inte har direkt kontroll över.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2917"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet använder --generate-new-wallet, inte --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2946"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>ange en återställningsparameter med --electrum-seed=&quot;ordlista här&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3322"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>ange sökväg till en plånbok med --generate-new-wallet (inte --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3493"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>plånboken kunde inte ansluta till daemonen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3501"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemonen använder en högre version av RPC (%u) än plånboken (%u): %s. Antingen uppdatera en av dem, eller använd --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3522"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Lista över tillgängliga språk för din plånboks startvärde:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3532"/>
        <source>Enter the number corresponding to the language of your choice: </source>
        <translation>Ange det tal som motsvarar det språk du vill använda: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3606"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Använd det nya startvärde som tillhandahålls.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3696"/>
        <source>Generated new wallet: </source>
        <translation>Ny plånbok skapad: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3633"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3793"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833"/>
        <source>Opened watch-only wallet</source>
        <translation>Öppnade plånbok för granskning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837"/>
        <source>Opened wallet</source>
        <translation>Öppnade plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3855"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Fortsätt för att uppgradera din plånbok.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3870"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Du hade använt en inaktuell version av plånboken. Plånbokens filformat kommer nu att uppgraderas.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3878"/>
        <source>failed to load wallet: </source>
        <translation>det gick inte att läsa in plånboken: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3895"/>
        <source>Use the &quot;help&quot; command to see the list of available commands.
</source>
        <translation>Använd kommandot &quot;help&quot; för att visa en lista över tillgängliga kommandon.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3940"/>
        <source>Wallet data saved</source>
        <translation>Plånboksdata sparades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4043"/>
        <source>Mining started in daemon</source>
        <translation>Brytning startad i daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4045"/>
        <source>mining has NOT been started: </source>
        <translation>brytning har INTE startats: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4065"/>
        <source>Mining stopped in daemon</source>
        <translation>Brytning stoppad i daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4067"/>
        <source>mining has NOT been stopped: </source>
        <translation>brytning har INTE stoppats: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4149"/>
        <source>Blockchain saved</source>
        <translation>Blockkedjan sparades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4164"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4194"/>
        <source>Height </source>
        <translation>Höjd </translation>
    </message>
    <message>
        <source>transaction </source>
        <translation type="vanished">transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4196"/>
        <source>spent </source>
        <translation>spenderat </translation>
    </message>
    <message>
        <source>unsupported transaction format</source>
        <translation type="vanished">transaktionsformatet stöds inte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4248"/>
        <source>Starting refresh...</source>
        <translation>Startar uppdatering&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4261"/>
        <source>Refresh done, blocks received: </source>
        <translation>Uppdatering färdig, mottagna block: </translation>
    </message>
    <message>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation type="vanished">betalnings-ID har ogiltigt format. En hexadecimal sträng med 16 eller 64 tecken förväntades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798"/>
        <source>bad locked_blocks parameter:</source>
        <translation>felaktig parameter för locked_blocks:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5510"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5768"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>en enda transaktion kan inte använda fler än ett betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4894"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4926"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5519"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5548"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5736"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5776"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5807"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>det gick inte att upprätta betalnings-ID, trots att det avkodades korrekt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4911"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5090"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5197"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5289"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5605"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5790"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5847"/>
        <source>transaction cancelled.</source>
        <translation>transaktion avbruten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4981"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4991"/>
        <source>Is this okay anyway?  (Y/Yes/N/No): </source>
        <translation>Är detta okej ändå?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4986"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?  (Y/Yes/N/No): </source>
        <translation>Det finns för närvarande en %u blocks eftersläpning på den avgiftsnivån. Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4991"/>
        <source>Failed to check for backlog: </source>
        <translation>Det gick inte att kontrollera eftersläpning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5032"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5578"/>
        <source>
Transaction </source>
        <translation>
Transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5037"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5583"/>
        <source>Spending from address index %d
</source>
        <translation>Spendera från adressindex %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5039"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5585"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>VARNING: Utgångar från flera adresser används tillsammans, vilket möjligen kan kompromettera din sekretess.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5041"/>
        <source>Sending %s.  </source>
        <translation>Skickar %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5044"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Transaktionen behöver delas upp i %llu transaktioner.  Detta gör att en transaktionsavgift läggs till varje transaktion, med ett totalbelopp på %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5050"/>
        <source>The transaction fee is %s</source>
        <translation>Transaktionsavgiften är %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5053"/>
        <source>, of which %s is dust from change</source>
        <translation>, varav %s är damm från växel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5054"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5054"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Ett totalt belopp på %s från växeldamm skickas till damm-adressen</translation>
    </message>
    <message>
        <source>.
This transaction will unlock on block %llu, in approximately %s days (assuming 2 minutes per block)</source>
        <translation type="vanished">.
Denna transaktion låses upp vid block %llu, om ungefär %s dagar (förutsatt en blocktid på 2 minuter)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5102"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5208"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5220"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5312"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5616"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5869"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Det gick inte att skriva transaktioner till fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5106"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5118"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5212"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5224"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5304"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5316"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5620"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5861"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5873"/>
        <source>Unsigned transaction(s) successfully written to file: </source>
        <translation>Osignerade transaktioner skrevs till fil: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5259"/>
        <source>No unmixable outputs found</source>
        <translation>Inga omixbara utgångar kunde hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5359"/>
        <source>No address given</source>
        <translation>Ingen adress har angivits</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5730"/>
        <source>failed to parse Payment ID</source>
        <translation>det gick inte att parsa betalnings-ID</translation>
    </message>
    <message>
        <source>usage: sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="vanished">användning: sweep_single [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;nyckelavbildning&gt; &lt;adress&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5753"/>
        <source>failed to parse key image</source>
        <translation>det gick inte att parsa nyckelavbildning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5819"/>
        <source>No outputs found</source>
        <translation>Inga utgångar kunde hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5824"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Flera transaktioner skapas, vilket inte ska kunna inträffa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5829"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>Transaktionen använder flera eller inga ingångar, vilket inte ska kunna inträffa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5906"/>
        <source>missing threshold amount</source>
        <translation>tröskelbelopp saknas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5911"/>
        <source>invalid amount threshold</source>
        <translation>ogiltigt tröskelbelopp</translation>
    </message>
    <message>
        <source>donations are not enabled on the testnet</source>
        <translation type="vanished">donationer är inte aktiverade på testnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5928"/>
        <source>usage: donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation>användning: donate [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;belopp&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6014"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Begärd växel går inte till en betald adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6019"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Begärd växel är större än betalning till växeladressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6052"/>
        <source>sending %s to %s</source>
        <translation>skickar %s till %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6062"/>
        <source> dummy output(s)</source>
        <translation> dummy-utgångar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>with no destinations</source>
        <translation>utan några mål</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay? (Y/Yes/N/No): </source>
        <translation>Läste in %lu transaktioner, för %s, avgift %s, %s, %s, med minsta ringstorlek %lu, %s. %sÄr detta okej? (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6106"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Detta är en multisig-plånbok, som endast kan signera med sign_multisig</translation>
    </message>
    <message>
        <source>usage: sign_transfer [export]</source>
        <translation type="vanished">användning: sign_transfer [export]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6129"/>
        <source>Failed to sign transaction</source>
        <translation>Det gick inte att signera transaktionen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6135"/>
        <source>Failed to sign transaction: </source>
        <translation>Det gick inte att signera transaktionen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Hexadecimala rådata för transaktionen exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <source>Failed to load transaction from file</source>
        <translation>Det gick inte att läsa in transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4577"/>
        <source>RPC error: </source>
        <translation>RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>plånboken är enbart för granskning och har ingen spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="746"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="900"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="949"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1010"/>
        <source>Your original password was incorrect.</source>
        <translation>Ditt ursprungliga lösenord var fel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="761"/>
        <source>Error with wallet rewrite: </source>
        <translation>Ett fel uppstod vid återskrivning av plånbok: </translation>
    </message>
    <message>
        <source>priority must be 0, 1, 2, 3, or 4 </source>
        <translation type="vanished">prioritet måste vara 0, 1, 2, 3 eller 4 </translation>
    </message>
    <message>
        <source>priority must be 0, 1, 2, 3, or 4</source>
        <translation type="vanished">prioritet måste vara 0, 1, 2, 3 eller 4</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2037"/>
        <source>invalid unit</source>
        <translation>ogiltig enhet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2055"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2117"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>ogiltigt värde för count: måste vara ett heltal utan tecken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2073"/>
        <source>invalid value</source>
        <translation>ogiltigt värde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2722"/>
        <source>usage: set_log &lt;log_level_number_0-4&gt; | &lt;categories&gt;</source>
        <translation>användning: set_log &lt;loggnivå_nummer_0-4&gt; | &lt;kategorier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2809"/>
        <source>(Y/Yes/N/No): </source>
        <translation>(J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3366"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3393"/>
        <source>bad m_restore_height parameter: </source>
        <translation>felaktig parameter för m_restore_height: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3371"/>
        <source>date format must be YYYY-MM-DD</source>
        <translation>datumformat måste vara ÅÅÅÅ-MM-DD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384"/>
        <source>Restore height is: </source>
        <translation>Återställningshöjd är: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3310"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5083"/>
        <source>Is this okay?  (Y/Yes/N/No): </source>
        <translation>Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4121"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3958"/>
        <source>Password for new watch-only wallet</source>
        <translation>Lösenord för ny granskningsplånbok</translation>
    </message>
    <message>
        <source>invalid arguments. Please use start_mining [&lt;number_of_threads&gt;] [do_bg_mining] [ignore_battery], &lt;number_of_threads&gt; should be from 1 to </source>
        <translation type="vanished">ogiltiga argument. Använd start_mining [&lt;antal_trådar&gt;] [do_bg_mining] [ignore_battery], &lt;antal_trådar&gt; ska vara från 1 till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4287"/>
        <source>internal error: </source>
        <translation>internt fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1382"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4292"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4582"/>
        <source>unexpected error: </source>
        <translation>oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1310"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1387"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4297"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5133"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5345"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5647"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5890"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6190"/>
        <source>unknown error</source>
        <translation>okänt fel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4302"/>
        <source>refresh failed: </source>
        <translation>det gick inte att uppdatera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4302"/>
        <source>Blocks received: </source>
        <translation>Mottagna block: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4335"/>
        <source>unlocked balance: </source>
        <translation>upplåst saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2700"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>amount</source>
        <translation>belopp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="249"/>
        <source>false</source>
        <translation>falskt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="567"/>
        <source>Unknown command: </source>
        <translation>Okänt kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="574"/>
        <source>Command usage: </source>
        <translation>Användning av kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="577"/>
        <source>Command description: </source>
        <translation>Beskrivning av kommando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="645"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>plånboken är multisig men är ännu inte slutförd</translation>
    </message>
    <message>
        <source>Enter optional seed encryption passphrase, empty to see raw seed</source>
        <translation type="vanished">Ange valfri lösenfras för kryptering av startvärdet, lämna tomt för att se rådata för startvärdet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="675"/>
        <source>Failed to retrieve seed</source>
        <translation>Det gick inte att hämta startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>wallet is multisig and has no seed</source>
        <translation>plånboken är multisig och har inget startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="772"/>
        <source>Cannot connect to daemon</source>
        <translation>Det går inte att ansluta till daemonen</translation>
    </message>
    <message>
        <source>Current fee is %s monero per kB</source>
        <translation type="vanished">Aktuell avgift är %s monero per kB</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Fel: det gick inte att uppskatta eftersläpningsmatrisens storlek: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="801"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Fel: felaktigt uppskattat värde för eftersläpningsmatrisens storlek</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="813"/>
        <source> (current)</source>
        <translation> (aktuellt)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="816"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u blocks (%u minuters) eftersläpning vid prioritet %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="818"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u till %u blocks (%u till %u minuters) eftersläpning vid prioritet %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="821"/>
        <source>No backlog at priority </source>
        <translation>Ingen eftersläpning vid prioritet </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="868"/>
        <source>This wallet is already multisig</source>
        <translation>Denna plånbok är redan multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="840"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="873"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>plånboken är enbart för granskning och kan inte göras om till multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="846"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="879"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Denna plånbok har använts tidigare. Använd en ny plånbok för att skapa en multisig-plånbok</translation>
    </message>
    <message>
        <source>Your password is incorrect.</source>
        <translation type="vanished">Ditt lösenord är fel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="854"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Skicka denna multisig-info till alla andra deltagare och använd sedan make_multisig &lt;tröskelvärde&gt; &lt;info1&gt; [&lt;info2&gt;…] med de andras multisig-info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="855"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Detta innefattar den PRIVATA granskningsnyckeln, så den behöver endast lämnas ut till den multisig-plånbokens deltagare </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="885"/>
        <source>usage: make_multisig &lt;threshold&gt; &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation>användning: make_multisig &lt;tröskelvärde&gt; &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;…]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="893"/>
        <source>Invalid threshold</source>
        <translation>Ogiltigt tröskelvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="913"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1025"/>
        <source>Another step is needed</source>
        <translation>Ytterligare ett steg krävs</translation>
    </message>
    <message>
        <source>Send this multisig info to all other participants, then use finalize_multisig &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation type="vanished">Skicka denna multisig-info till alla andra deltagare, använd sedan finalize_multisig &lt;info1&gt; [&lt;info2&gt;…] med de andras multisig-info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="921"/>
        <source>Error creating multisig: </source>
        <translation>Ett fel uppstod när multisig skapades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Ett fel uppstod när multisig skapades: den nya plånboken är inte multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="931"/>
        <source> multisig address: </source>
        <translation> multisig-adress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="955"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="998"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1106"/>
        <source>This wallet is not multisig</source>
        <translation>Denna plånbok är inte multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="960"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1003"/>
        <source>This wallet is already finalized</source>
        <translation>Denna plånbok är redan slutförd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="968"/>
        <source>usage: finalize_multisig &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation>användning: finalize_multisig &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;…]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="976"/>
        <source>Failed to finalize multisig</source>
        <translation>Det gick inte att slutföra multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="982"/>
        <source>Failed to finalize multisig: </source>
        <translation>Det gick inte att slutföra multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1059"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1332"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Denna multisig-plånbok är inte slutförd ännu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1064"/>
        <source>usage: export_multisig_info &lt;filename&gt;</source>
        <translation>användning: export_multisig_info &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1087"/>
        <source>Error exporting multisig info: </source>
        <translation>Ett fel uppstod när multisig-info exporterades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1091"/>
        <source>Multisig info exported to </source>
        <translation>Multisig-info exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1116"/>
        <source>usage: import_multisig_info &lt;filename1&gt; [&lt;filename2&gt;...] - one for each other participant</source>
        <translation>användning: import_multisig_info &lt;filename1&gt; [&lt;filename2&gt;…] - en för varje annan deltagare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <source>Multisig info imported</source>
        <translation>Multisig-info importerades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1148"/>
        <source>Failed to import multisig info: </source>
        <translation>Det gick inte att importera multisig-info: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1159"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Det gick inte att uppdatera spenderstatus efter import av multisig-info: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1164"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Ej betrodd daemon. Spenderstatus kan vara felaktig. Använd en betrodd daemon och kör &quot;rescan_spent&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1185"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1327"/>
        <source>This is not a multisig wallet</source>
        <translation>Detta är inte en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1195"/>
        <source>usage: sign_multisig &lt;filename&gt;</source>
        <translation>användning: sign_multisig &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1209"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Det gick inte att signera multisig-transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1215"/>
        <source>Multisig error: </source>
        <translation>Multisig-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1220"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Det gick inte att signera multisig-transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1243"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Den kan skickas vidare till nätverket med submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1269"/>
        <source>usage: submit_multisig &lt;filename&gt;</source>
        <translation>användning: submit_multisig &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1285"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1352"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Det gick inte att läsa in multisig-transaktion från fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1290"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Multisig-transaktion har signerats av bara %u signerare. Den behöver %u ytterligare signaturer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1299"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8191"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transaktionen skickades, transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8192"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Du kan kontrollera dess status genom att använda kommandot &apos;show_transfers&apos;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1337"/>
        <source>usage: export_raw_multisig &lt;filename&gt;</source>
        <translation>användning: export_raw_multisig &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1373"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Det gick inte att exportera multisig-transaktion till fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1377"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Sparade filer med exporterade multisig-transaktioner: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1848"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1873"/>
        <source>ring size must be an integer &gt;= </source>
        <translation>ringstorlek måste vara ett heltal &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1878"/>
        <source>could not change default ring size</source>
        <translation>det gick inte att ändra standardinställning för ringstorlek</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2151"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2222"/>
        <source>Invalid height</source>
        <translation>Ogiltig höjd</translation>
    </message>
    <message>
        <source>start_mining [&lt;number_of_threads&gt;] [bg_mining] [ignore_battery]</source>
        <translation type="vanished">start_mining [&lt;antal_trådar&gt;] [&lt;bgbrytning&gt;] [&lt;ignorera_batteri&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2269"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Starta brytning i daemonen (bgbrytning och ignorera_batteri är valfri booleska värden).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2272"/>
        <source>Stop mining in the daemon.</source>
        <translation>Stoppa brytning i daemonen.</translation>
    </message>
    <message>
        <source>set_daemon &lt;host&gt;[:&lt;port&gt;]</source>
        <translation type="vanished">set_daemon &lt;värddator&gt;[:&lt;port&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2276"/>
        <source>Set another daemon to connect to.</source>
        <translation>Ange en annan daemon att ansluta till.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <source>Save the current blockchain data.</source>
        <translation>Spara aktuella blockkedjedata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2282"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Synkronisera transaktionerna och saldot.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2285"/>
        <source>balance [detail]</source>
        <translation>balance [detail]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2286"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Visa plånbokens saldo för det aktiva kontot.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2289"/>
        <source>incoming_transfers [available|unavailable] [verbose] [index=&lt;N1&gt;[,&lt;N2&gt;[,...]]]</source>
        <translation>incoming_transfers [available|unavailable] [verbose] [index=&lt;N1&gt;[, &lt;N2&gt;[, …]]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2290"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.</source>
        <translation>Visa inkommande överföringar: alla eller filtrerade efter tillgänglighet och adressindex.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293"/>
        <source>payments &lt;PID_1&gt; [&lt;PID_2&gt; ... &lt;PID_N&gt;]</source>
        <translation>payments &lt;BID_1&gt; [&lt;BID_2&gt; … &lt;BID_N&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Visa betalningar för givna betalnings-ID.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2297"/>
        <source>Show the blockchain height.</source>
        <translation>Visa blockkedjans höjd.</translation>
    </message>
    <message>
        <source>transfer_original [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation type="vanished">transfer_original [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;adress&gt; &lt;belopp&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; using an older transaction building algorithm. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="vanished">Överför &lt;belopp&gt; till &lt;adress&gt; genom att använda en äldre algoritm för att bygga transaktioner. Om parametern &quot;index=&lt;N1&gt;[, &lt;N2&gt;, …]&quot; anges använder plånboken utgångar som tagits emot av adresser vid dessa index. Om parametern utelämnas väljer plånboken slumpmässigt adressindex att använda. Oavsett vilket kommer den att göra sitt bästa för att inte kombinera utgångar från flera adresser. &lt;prioritet&gt; är transaktionens prioritet. Ju högre prioritet, desto högre transaktionsavgift. Giltiga värden i prioritetsordning (från lägsta till högsta) är: unimportant, normal, elevated, priority. Om värdet utelämnas kommer standardvärdet att användas (se kommandot &quot;set priority&quot;). &lt;ringstorlek&gt; är det antal ingångar som ska inkluderas för att uppnå ospårbarhet. Flera betalningar kan göras på en gång genom att lägga till &lt;adress_2&gt; &lt;belopp_2&gt; osv (före betalnings-ID, om det inkluderas)</translation>
    </message>
    <message>
        <source>transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation type="vanished">transfer [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;adress&gt; &lt;belopp&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <source>Transfer &lt;amount&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="vanished">Överför &lt;belopp&gt; till &lt;adress&gt;. Om parametern &quot;index=&lt;N1&gt;[, &lt;N2&gt;, …]&quot; anges använder plånboken utgångar som tagits emot av adresser vid dessa index. Om parametern utelämnas väljer plånboken slumpmässigt adressindex att använda. Oavsett vilket kommer den att göra sitt bästa för att inte kombinera utgångar från flera adresser. &lt;prioritet&gt; är transaktionens prioritet. Ju högre prioritet, desto högre transaktionsavgift. Giltiga värden i prioritetsordning (från lägsta till högsta) är: unimportant, normal, elevated, priority. Om värdet utelämnas kommer standardvärdet att användas (se kommandot &quot;set priority&quot;). &lt;ringstorlek&gt; är det antal ingångar som ska inkluderas för att uppnå ospårbarhet. Flera betalningar kan göras på en gång genom att lägga till &lt;adress_2&gt; &lt;belopp_2&gt; osv (före betalnings-ID, om det inkluderas)</translation>
    </message>
    <message>
        <source>locked_transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;addr&gt; &lt;amount&gt; &lt;lockblocks&gt; [&lt;payment_id&gt;]</source>
        <translation type="vanished">locked_transfer [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;adress&gt; &lt;belopp&gt; &lt;låsblock&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="vanished">Överför &lt;belopp&gt; till &lt;adress&gt; och lås det i &lt;låsblock&gt; (max. 1000000). Om parametern &quot;index=&lt;N1&gt;[, &lt;N2&gt;, …]&quot; anges använder plånboken utgångar som tagits emot av adresser vid dessa index. Om parametern utelämnas väljer plånboken slumpmässigt adressindex att använda. Oavsett vilket kommer den att göra sitt bästa för att inte kombinera utgångar från flera adresser. &lt;prioritet&gt; är transaktionens prioritet. Ju högre prioritet, desto högre transaktionsavgift. Giltiga värden i prioritetsordning (från lägsta till högsta) är: unimportant, normal, elevated, priority. Om värdet utelämnas kommer standardvärdet att användas (se kommandot &quot;set priority&quot;). &lt;ringstorlek&gt; är det antal ingångar som ska inkluderas för att uppnå ospårbarhet. Flera betalningar kan göras på en gång genom att lägga till &lt;adress_2&gt; &lt;belopp_2&gt; osv (före betalnings-ID, om det inkluderas)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2311"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Skicka alla omixbara utgångar till dig själv med ringstorlek 1</translation>
    </message>
    <message>
        <source>sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="vanished">sweep_all [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;adress&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <source>Send all unlocked balance to an address. If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used.</source>
        <translation type="vanished">Skicka allt upplåst saldo till en adress. Om parametern &quot;index&lt;N1&gt;[, &lt;N2&gt;, …]&quot; anges sveper plånboken upp utgångar som tagits emot av adresserna vid dessa index. Om parametern utelämnas väljer plånboken slumpmässigt ett adressindex att använda.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2317"/>
        <source>sweep_below &lt;amount_threshold&gt; [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation>sweep_below &lt;tröskelbelopp&gt; [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;adress&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Skicka alla upplåsta utgångar under tröskelvärdet till en adress.</translation>
    </message>
    <message>
        <source>sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="vanished">sweep_single [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;nyckelavbildning&gt; &lt;adress&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2322"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Skicka en enda utgång hos den givna nyckelavbildningen till en adress utan växel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2329"/>
        <source>donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation>donate [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;prioritet&gt;] [&lt;ringstorlek&gt;] &lt;belopp&gt; [&lt;betalnings_id&gt;]</translation>
    </message>
    <message>
        <source>Donate &lt;amount&gt; to the development team (donate.getmonero.org).</source>
        <translation type="vanished">Donera &lt;belopp&gt; till utvecklingsteamet (donate.getmonero.org).</translation>
    </message>
    <message>
        <source>sign_transfer &lt;file&gt;</source>
        <translation type="vanished">sign_transfer &lt;fil&gt;</translation>
    </message>
    <message>
        <source>Sign a transaction from a &lt;file&gt;.</source>
        <translation type="vanished">Signera en transaktion från &lt;fil&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2337"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Skicka en signerad transaktion från en fil.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340"/>
        <source>set_log &lt;level&gt;|{+,-,}&lt;categories&gt;</source>
        <translation>set_log &lt;nivå&gt;|{+,-,}&lt;kategorier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2341"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Ändra detaljnivån för aktuell logg (nivå måste vara 0-4).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344"/>
        <source>account
  account new &lt;label text with white spaces allowed&gt;
  account switch &lt;index&gt; 
  account label &lt;index&gt; &lt;label text with white spaces allowed&gt;
  account tag &lt;tag_name&gt; &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account untag &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account tag_description &lt;tag_name&gt; &lt;description&gt;</source>
        <translation>account
  account new &lt;etikettext med blanktecken tillåtna&gt;
  account switch &lt;index&gt; 
  account label &lt;index&gt; &lt;etikettext med blanktecken tillåtna&gt;
  account tag &lt;taggnamn&gt; &lt;kontoindex_1&gt; [&lt;kontoindex_2&gt; …]
  account untag &lt;kontoindex_1&gt; [&lt;kontoindex_2&gt; …]
  account tag_description &lt;taggnamn&gt; &lt;beskrivning&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2351"/>
        <source>If no arguments are specified, the wallet shows all the existing accounts along with their balances.
If the &quot;new&quot; argument is specified, the wallet creates a new account with its label initialized by the provided label text (which can be empty).
If the &quot;switch&quot; argument is specified, the wallet switches to the account specified by &lt;index&gt;.
If the &quot;label&quot; argument is specified, the wallet sets the label of the account specified by &lt;index&gt; to the provided label text.
If the &quot;tag&quot; argument is specified, a tag &lt;tag_name&gt; is assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
If the &quot;untag&quot; argument is specified, the tags assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., are removed.
If the &quot;tag_description&quot; argument is specified, the tag &lt;tag_name&gt; is assigned an arbitrary text &lt;description&gt;.</source>
        <translation>Om inga argument anges visas plånbokens samtliga befintliga konton, tillsammans med deras respektive saldo.
Om argumentet &quot;new&quot; anges, skapar plånboken ett nytt konto med etiketten satt till med den angivna etikettexten (som kan vara tom).
Om argumentet &quot;switch&quot; anges, växlar plånboken till det konto som anges av &lt;index&gt;.
Om argumentet &quot;label&quot; anges, sätter plånboken etiketten för kontot som anges av &lt;index&gt; till den angivna etikettexten.
Om argumentet &quot;tag&quot; anges, så tilldelas taggen &lt;taggnamn&gt; till det angivna kontona &lt;kontoindex_1&gt;, &lt;kontoindex_2&gt;, …
Om argumentet &quot;untag&quot; anges, tas tilldelade taggar bort från de angivna kontona &lt;kontoindex_1&gt;, &lt;kontoindex_2&gt; …
Om argumentet &quot;tag_description&quot; anges, så tilldelas taggen &lt;taggnamn&gt; den godtyckliga texten &lt;beskrivning&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2360"/>
        <source>address [ new &lt;label text with white spaces allowed&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;label text with white spaces allowed&gt;]</source>
        <translation>address [new &lt;etikettext med blanktecken tillåtna&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;etikettext med blanktecken tillåtna&gt;]</translation>
    </message>
    <message>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the walllet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text.</source>
        <translation type="vanished">Om inga argument anges, eller om &lt;index&gt; anges, visar plånboken standardadressen eller den angivna adressen. Om argumentet &quot;all&quot; anges visar plånboken samtliga befintliga adresser i det aktiva kontot. Om argumentet &quot;new &quot; anges skapar plånboken en ny adress med den angivna etikettexten (som kan vara tom). Om argumentet &quot;label&quot; anges sätter plånboken etiketten för adressen som anges av &lt;index&gt; till den angivna etikettexten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2364"/>
        <source>integrated_address [&lt;payment_id&gt; | &lt;address&gt;]</source>
        <translation>integrated_address [&lt;betalnings-id&gt; | &lt;adress&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2365"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Koda ett betalnings-ID till en integrerad adress för den aktuella plånbokens publika adress (om inget argument anges används ett slumpmässigt betalnings-ID), eller avkoda en integrerad adress till en standardadress och ett betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2368"/>
        <source>address_book [(add ((&lt;address&gt; [pid &lt;id&gt;])|&lt;integrated address&gt;) [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)]</source>
        <translation>address_book [(add ((&lt;adress&gt; [pid &lt;id&gt;])|&lt;integrerad adress&gt;) [&lt;beskrivning eventuellt med blanktecken&gt;])|(delete &lt;index&gt;)]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2369"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Skriv ut alla poster i adressboken, och valfritt lägg till/ta bort en post i den.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2372"/>
        <source>Save the wallet data.</source>
        <translation>Spara plånboksdata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2375"/>
        <source>Save a watch-only keys file.</source>
        <translation>Spara en fil med granskningsnycklar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2378"/>
        <source>Display the private view key.</source>
        <translation>Visa privat granskningsnyckel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2381"/>
        <source>Display the private spend key.</source>
        <translation>Visa privat spendernyckel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2384"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Visa det minnesbaserade startvärdet (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2387"/>
        <source>set &lt;option&gt; [&lt;value&gt;]</source>
        <translation>set &lt;alternativ&gt; [&lt;värde&gt;]</translation>
    </message>
    <message>
        <source>Available options:
 seed language
   Set the wallet&apos;s seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 default-ring-size &lt;n&gt;
   Set the default ring size (default and minimum is 5).
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet&apos;s refresh behaviour.
 priority [0|1|2|3|4]
   Set the fee to default/unimportant/normal/elevated/priority.
 confirm-missing-payment-id &lt;1|0&gt;
 ask-password &lt;1|0&gt;
 unit &lt;monero|millinero|micronero|nanonero|piconero&gt;
   Set the default monero (sub-)unit.
 min-outputs-count [n]
   Try to keep at least that many outputs of value at least min-outputs-value.
 min-outputs-value [n]
   Try to keep at least min-outputs-count outputs of at least that value.
 merge-destinations &lt;1|0&gt;
   Whether to merge multiple payments to the same destination address.
 confirm-backlog &lt;1|0&gt;
   Whether to warn if there is transaction backlog.
 confirm-backlog-threshold [n]
   Set a threshold for confirm-backlog to only warn if the transaction backlog is greater than n blocks.
 refresh-from-block-height [n]
   Set the height before which to ignore blocks.
 auto-low-priority &lt;1|0&gt;
   Whether to automatically use the low priority fee level when it&apos;s safe to do so.</source>
        <translation type="vanished">Tillgängliga alternativ:
 språk för startvärde
   Ange plånbokens språk för startvärde.
 always-confirm-transfers &lt;1|0&gt;
   Om ej delade transaktioner ska bekräftas.
 print-ring-members &lt;1|0&gt;
   Om detaljerad information om ringmedlemmar ska skrivas ut vid bekräftelse.
 store-tx-info &lt;1|0&gt;
   Om information om utgående transaktion ska sparas (måladress, betalnings-ID, hemlig tx-nyckel) som referens.
 default-ring-size &lt;n&gt;
   Ange standardinställning för ringstorlek (standard och minimum är 5).
 auto-refresh &lt;1|0&gt;
   Om nya block ska synkas automatiskt från daemonen.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Ange plånbokens uppdateringsbeteende.
 priority [0|1|2|3|4]
   Sätt avgiften till default/unimportant/normal/elevated/priority.
 confirm-missing-payment-id &lt;1|0&gt;
 ask-password &lt;1|0&gt;
 unit &lt;monero|millinero|micronero|nanonero|piconero&gt;
   Ange standardvärde för moneroenhet.
 min-outputs-count [n]
   Försök att behålla åtminstone så många utgångar med åtminstone värdet min-outputs-value.
 min-outputs-value [n]
   Försök att behålla åtminstone min-outputs-count utgångar med åtminstone det värdet.
 merge-destinations &lt;1|0&gt;
   Om flera betalningar till samma måladress ska sammanslås.
 confirm-backlog &lt;1|0&gt;
   Om en varning ska visas om det föreligger transaktionseftersläpning.
 confirm-backlog-threshold [n]
   Ange ett tröskelvärde för confirm-backlog för att endast varna om transaktionseftersläpningen är större än n block.
 refresh-from-block-height [n]
   Ange höjden upp till vilken block ska ignoreras.
 auto-low-priority &lt;1|0&gt;
   Om avgiftsnivån för låg prioritet automatiskt ska användas när detta är säkert att göra.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Visa det krypterade minnesbaserade startvärdet (Electrum-typ).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2437"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Genomsök blockkedjan efter spenderade utgångar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2440"/>
        <source>get_tx_key &lt;txid&gt;</source>
        <translation>get_tx_key &lt;txid&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2441"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Hämta transaktionsnyckel (r) för ett givet &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448"/>
        <source>check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;address&gt;</source>
        <translation>check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;adress&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2449"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Kontrollera belopp som går till &lt;adress&gt; i &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2452"/>
        <source>get_tx_proof &lt;txid&gt; &lt;address&gt; [&lt;message&gt;]</source>
        <translation>get_tx_proof &lt;txid&gt; &lt;adress&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2453"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Skapa en signatur som bevisar att pengar skickades till &lt;adress&gt; i &lt;txid&gt;, valfritt med kontrollsträngen &lt;meddelande&gt;, genom att använda antingen transaktionens hemliga nyckel (när &lt;adress&gt; inte är din plånboks adress) eller den hemliga granskningsnyckeln (annars), vilket inte lämnar ut den hemliga nyckeln.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2456"/>
        <source>check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>check_tx_proof &lt;txid&gt; &lt;adress&gt; &lt;signaturfil&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2457"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Kontrollera beviset för pengar som skickats till &lt;adress&gt; i &lt;txid&gt; med kontrollsträngen &lt;meddelande&gt;, om den angivits.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2460"/>
        <source>get_spend_proof &lt;txid&gt; [&lt;message&gt;]</source>
        <translation>get_spend_proof &lt;txid&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2461"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Skapa en signatur som bevisar att du skapade &lt;txid&gt; genom att använda den hemliga spendernyckeln, valfritt med kontrollsträngen &lt;meddelande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2464"/>
        <source>check_spend_proof &lt;txid&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>check_spend_proof &lt;txid&gt; &lt;signaturfil&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2465"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Kontrollera en signatur som bevisar att signeraren skapade &lt;txid&gt;, valfritt med kontrollsträngen &lt;meddelande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2468"/>
        <source>get_reserve_proof (all|&lt;amount&gt;) [&lt;message&gt;]</source>
        <translation>get_reserve_proof (all|&lt;belopp&gt;) [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2469"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Skapa en signatur som bevisar att du äger åtminstone så här mycket, valfritt med kontrollsträngen &lt;meddelande&gt;.
Om &apos;all&apos; anges, bevisar du totalsumman av alla dina befintliga kontons saldo.
Annars bevisar du reserven för det minsta möjliga belopp över &lt;belopp&gt; som är tillgängligt på ditt aktuella konto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2474"/>
        <source>check_reserve_proof &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>check_reserve_proof &lt;adress&gt; &lt;signaturfil&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2475"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Kontrollera en signatur som bevisar att ägaren till &lt;adress&gt; har åtminstone så här mycket, valfritt med kontrollsträngen &lt;meddelande&gt;.</translation>
    </message>
    <message>
        <source>show_transfers [in|out|pending|failed|pool] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="vanished">show_transfers [in|out|pending|failed|pool] [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;min_höjd&gt; [&lt;max_höjd&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2479"/>
        <source>Show the incoming/outgoing transfers within an optional height range.</source>
        <translation>Visa inkommande/utgående överföringar inom ett valfritt höjdintervall.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2482"/>
        <source>unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_amount&gt; [&lt;max_amount&gt;]]</source>
        <translation>unspent_outputs [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;min_belopp&gt; [&lt;max_belopp&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2483"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Visa de ej spenderade utgångarna hos en angiven adress inom ett valfritt beloppsintervall.</translation>
    </message>
    <message>
        <source>Rescan the blockchain from scratch.</source>
        <translation type="vanished">Genomsök blockkedjan från början.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2489"/>
        <source>set_tx_note &lt;txid&gt; [free text note]</source>
        <translation>set_tx_note &lt;txid&gt; [&lt;fritextanteckning&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2490"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Ange en godtycklig stränganteckning för &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2493"/>
        <source>get_tx_note &lt;txid&gt;</source>
        <translation>get_tx_note &lt;txid&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2494"/>
        <source>Get a string note for a txid.</source>
        <translation>Hämta en stränganteckning för ett txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2497"/>
        <source>set_description [free text note]</source>
        <translation>set_description [&lt;fritextanteckning&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2498"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Ange en godtycklig beskrivning av plånboken.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2501"/>
        <source>Get the description of the wallet.</source>
        <translation>Hämta plånbokens beskrivning.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2504"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Visa plånbokens status.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2507"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Visa information om plånboken.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2510"/>
        <source>sign &lt;file&gt;</source>
        <translation>sign &lt;fil&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2511"/>
        <source>Sign the contents of a file.</source>
        <translation>Signera innehållet i en fil.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514"/>
        <source>verify &lt;filename&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation>verify &lt;filnamn&gt; &lt;adress&gt; &lt;signatur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2515"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verifiera en signatur av innehållet in en fil.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2518"/>
        <source>export_key_images &lt;file&gt;</source>
        <translation>export_key_images &lt;fil&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2519"/>
        <source>Export a signed set of key images to a &lt;file&gt;.</source>
        <translation>Exportera en signerad uppsättning nyckelavbildningar till &lt;fil&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2522"/>
        <source>import_key_images &lt;file&gt;</source>
        <translation>import_key_images &lt;fil&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2523"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importera en signerad lista av nyckelavbildningar och verifiera deras spenderstatus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2530"/>
        <source>export_outputs &lt;file&gt;</source>
        <translation>export_outputs &lt;fil&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2531"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exportera en uppsättning utgångar som ägs av denna plånbok.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2534"/>
        <source>import_outputs &lt;file&gt;</source>
        <translation>import_outputs &lt;fil&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2535"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importera en uppsättning utgångar som ägs av denna plånbok.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2538"/>
        <source>show_transfer &lt;txid&gt;</source>
        <translation>show_transfer &lt;txid&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2539"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Visa information om en transktion till/från denna adress.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2542"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Ändra plånbokens lösenord.</translation>
    </message>
    <message>
        <source>Generate a new random full size payment id. These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation type="vanished">Skapa ett nytt slumpmässigt betalnings-ID av normalstorlek. Dessa kommer att vara okrypterade på blockkedjan. Se integrated_address för krypterade korta betalnings-ID.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2545"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Skriv ut information om aktuell avgift och transaktionseftersläpning.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2547"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exportera data som krävs för att skapa en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2549"/>
        <source>make_multisig &lt;threshold&gt; &lt;string1&gt; [&lt;string&gt;...]</source>
        <translation>make_multisig &lt;tröskelvärde&gt; &lt;string1&gt; [&lt;sträng&gt;…]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Gör denna plånbok till en multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2553"/>
        <source>finalize_multisig &lt;string&gt; [&lt;string&gt;...]</source>
        <translation>finalize_multisig &lt;sträng&gt; [&lt;sträng&gt;…]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2554"/>
        <source>Turn this wallet into a multisig wallet, extra step for N-1/N wallets</source>
        <translation>Gör denna plånbok till en multisig-plånbok, extra steg för plånböcker med N-1/N</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2561"/>
        <source>export_multisig_info &lt;filename&gt;</source>
        <translation>export_multisig_info &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2562"/>
        <source>Export multisig info for other participants</source>
        <translation>Exportera multisig-info för andra deltagare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2565"/>
        <source>import_multisig_info &lt;filename&gt; [&lt;filename&gt;...]</source>
        <translation>import_multisig_info &lt;filnamn&gt; [&lt;filnamn&gt;…]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2566"/>
        <source>Import multisig info from other participants</source>
        <translation>Importera multisig-info från andra deltagare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2569"/>
        <source>sign_multisig &lt;filename&gt;</source>
        <translation>sign_multisig &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2570"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Signera en a multisig-transaktion från en fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2573"/>
        <source>submit_multisig &lt;filename&gt;</source>
        <translation>submit_multisig &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2574"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Skicka en signerad multisig-transaktion från en fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2577"/>
        <source>export_raw_multisig_tx &lt;filename&gt;</source>
        <translation>export_raw_multisig_tx &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2578"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportera en signerad multisig-transaktion till en fil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2609"/>
        <source>help [&lt;command&gt;]</source>
        <translation>help [&lt;kommando&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2610"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Visa hjälpavsnittet eller dokumentationen för &lt;kommando&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2692"/>
        <source>integer &gt;= </source>
        <translation>heltal &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2705"/>
        <source>block height</source>
        <translation>blockhöjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2808"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Ingen plånbok med det namnet kunde hittas. Bekräfta skapande av ny plånbok med namn: </translation>
    </message>
    <message>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot; and --generate-from-json=&quot;jsonfilename&quot;</source>
        <translation type="vanished">det går inte att ange fler än en av --generate-new-wallet=&quot;plånboksnamn&quot;, --wallet-file=&quot;plånboksnamn&quot;, --generate-from-view-key=&quot;plånboksnamn&quot;, --generate-from-spend-key=&quot;plånboksnamn&quot;, --generate-from-keys=&quot;plånboksnamn&quot;, --generate-from-multisig-keys=&quot;plånboksnamn&quot; och --generate-from-json=&quot;json-filnamn&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2909"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>det går inte att ange både --restore-deterministic-wallet eller --restore-multisig-wallet och --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2915"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet använder --generate-new-wallet, inte --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2931"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>ange en återställningsparameter med --electrum-seed=&quot;startvärde för multisig&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2960"/>
        <source>Multisig seed failed verification</source>
        <translation>Startvärde för multisig kunde inte verifieras</translation>
    </message>
    <message>
        <source>Enter seed encryption passphrase, empty if none</source>
        <translation type="vanished">Ange lösenfras för kryptering av startvärde, lämna tomt om ingen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3011"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3086"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Denna adress är en underadress som inte kan användas här.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3163"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Fel: förväntade M/N, men fick: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3168"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Fel: förväntade N &gt; 1 och N &lt;= M, men fick: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3173"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Fel: M/N stöds för närvarande inte. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3176"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Skapar huvudplånbok från %u av %u multisig-plånboksnycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3205"/>
        <source>failed to parse secret view key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>failed to verify secret view key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233"/>
        <source>Secret spend key (%u of %u):</source>
        <translation>Hemlig spendernyckel (%u av %u):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3256"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Fel: M/N stöds för närvarande inte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3407"/>
        <source>Restore height </source>
        <translation>Återställningshöjd </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3408"/>
        <source>Still apply restore height?  (Y/Yes/N/No): </source>
        <translation>Ska återställningshöjd fortfarande appliceras?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3435"/>
        <source>Warning: using an untrusted daemon at %s, privacy will be lessened</source>
        <translation>Varning: använder en ej betrodd daemon på %s; sekretessen kommer att vara mindre</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3494"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Antingen har daemonen inte startat eller så angavs fel port. Se till att daemonen körs eller byt daemonadress med kommandot &apos;set_daemon&apos;.</translation>
    </message>
    <message>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see the list of available commands.
Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
Always use the &quot;exit&quot; command when closing monero-wallet-cli to save 
your current session&apos;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation type="vanished">Din plånbok har skapats!
Använd kommandot &quot;refresh&quot; för att starta synkronisering med daemonen.
Använd kommandot &quot;help&quot; för att visa en lista över tillgängliga kommandon.
Använd &quot;help &lt;kommando&gt;&quot; för att visa dokumentation för kommandot.
Använd alltid kommandot &quot;exit&quot; när du stänger monero-wallet-cli så att ditt aktuella sessionstillstånd sparas. Annars kan du bli tvungen att synkronisera
din plånbok igen (din plånboks nycklar är dock INTE hotade i vilket fall som helst).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>det gick inte att skapa ny multisig-plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3788"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Skapa ny %u/%u-multisig-plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3835"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Öppnade %u/%u-multisig-plånbok%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3896"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Använd &quot;help &lt;kommando&gt;&quot; för att visa dokumentation för kommandot.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3954"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>plånboken är multisig och kan inte spara en granskningsversion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4077"/>
        <source>missing daemon URL argument</source>
        <translation>argument för URL till daemon saknas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4088"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Oväntad matrislängd - Lämnade simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4129"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Detta verkar inte vara en giltig daemon-URL.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4165"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4195"/>
        <source>txid </source>
        <translation>txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4197"/>
        <source>idx </source>
        <translation>idx </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Några ägda utgångar har partiella nyckelavbildningar - import_multisig_info krävs)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4331"/>
        <source>Currently selected account: [</source>
        <translation>Aktuellt valt konto: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4331"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4333"/>
        <source>Tag: </source>
        <translation>Tagg: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4333"/>
        <source>(No tag assigned)</source>
        <translation>(Ingen tagg tilldelad)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4340"/>
        <source>Balance per address:</source>
        <translation>Saldo per adress:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <source>Address</source>
        <translation>Adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Balance</source>
        <translation>Saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Unlocked balance</source>
        <translation>Upplåst saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <source>Outputs</source>
        <translation>Utgångar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Label</source>
        <translation>Etikett</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4349"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4358"/>
        <source>usage: balance [detail]</source>
        <translation>användning: balance [detail]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4370"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4412"/>
        <source>usage: incoming_transfers [available|unavailable] [verbose] [index=&lt;N&gt;]</source>
        <translation>användning: incoming_transfers [available|unavailable] [verbose] [index=&lt;N&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>spent</source>
        <translation>spenderat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>global index</source>
        <translation>globalt index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>tx id</source>
        <translation>tx-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>addr index</source>
        <translation>addr index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4454"/>
        <source>No incoming transfers</source>
        <translation>Inga inkommande överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4458"/>
        <source>No incoming available transfers</source>
        <translation>Inga inkommande tillgängliga överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4462"/>
        <source>No incoming unavailable transfers</source>
        <translation>Inga inkommande otillgängliga överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4473"/>
        <source>expected at least one payment ID</source>
        <translation>åtminstone ett betalnings-ID förväntades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>payment</source>
        <translation>betalning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>transaction</source>
        <translation>transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>height</source>
        <translation>höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>unlock time</source>
        <translation>upplåsningstid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4494"/>
        <source>No payments with id </source>
        <translation>Inga betalningar med ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4542"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4605"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4943"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445"/>
        <source>failed to get blockchain height: </source>
        <translation>det gick inte att hämta blockkedjans höjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6659"/>
        <source>failed to connect to the daemon</source>
        <translation>det gick inte att ansluta till daemonen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4613"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaktion %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634"/>
        <source>
Input %llu/%llu: amount=%s</source>
        <translation>
Ingång %llu/%llu: belopp=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4650"/>
        <source>failed to get output: </source>
        <translation>det gick inte att hämta utgång: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4658"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>utgångsnyckelns ursprungsblockhöjd får inte vara högre än blockkedjans höjd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4662"/>
        <source>
Originating block heights: </source>
        <translation>
Ursprungsblockhöjder: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4677"/>
        <source>
|</source>
        <translation>
|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4677"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7044"/>
        <source>|
</source>
        <translation>|
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4694"/>
        <source>
Warning: Some input keys being spent are from </source>
        <translation>
Varning: Några ingångsnycklar som spenderas kommer från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4696"/>
        <source>, which can break the anonymity of ring signature. Make sure this is intentional!</source>
        <translation>, vilket kan bryta ringsignaturens anonymitet. Se till att detta är avsiktligt!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5397"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5678"/>
        <source>Ring size must not be 0</source>
        <translation>Ringstorlek för inte vara 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4750"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5690"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>ringstorlek %uär för liten, minimum är %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4762"/>
        <source>wrong number of arguments</source>
        <translation>fel antal argument</translation>
    </message>
    <message>
        <source>No payment id is included with this transaction. Is this okay?  (Y/Yes/N/No): </source>
        <translation type="vanished">Inget betalnings-ID har inkluderats med denna transaktion. Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4958"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5562"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Inga utgångar hittades, eller så är daemonen inte klar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8184"/>
        <source>Transaction successfully saved to </source>
        <translation>Transaktionen sparades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8184"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8186"/>
        <source>, txid </source>
        <translation>, txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8186"/>
        <source>Failed to save transaction to </source>
        <translation>Det gick inte att spara transaktion till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5182"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5274"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5590"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>Sveper upp %s i %llu transaktioner för en total avgift på %s.  Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5188"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5280"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5596"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5839"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>Sveper upp %s för en total avgift på %s.  Är detta okej?  (J/Ja/N/Nej): </translation>
    </message>
    <message>
        <source>Donating </source>
        <translation type="vanished">Donerar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6111"/>
        <source>This is a watch only wallet</source>
        <translation>Detta är en granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8020"/>
        <source>usage: show_transfer &lt;txid&gt;</source>
        <translation>användning: show_transfer &lt;txid&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8114"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>En dubbelspendering upptäcktes på nätverket: denna transaktion kanske aldrig blir verifierad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8149"/>
        <source>Transaction ID not found</source>
        <translation>Transaktions-ID kunde inte hittas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="244"/>
        <source>true</source>
        <translation>sant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="297"/>
        <source>failed to parse refresh type</source>
        <translation>det gick inte att parsa uppdateringstyp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="704"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>plånboken är enbart för granskning och har inget startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="651"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>plånboken är icke-deterministisk och har inget startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1822"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1841"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>plånboken är enbart för granskning och kan inte göra överföringar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1934"/>
        <source>could not change default priority</source>
        <translation>det gick inte att ändra standardinställning för prioritet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2694"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (långsammast, inga antaganden); optimize-coinbase (snabb, antar att hela coinbase-transaktionen betalas till en enda adress); no-coinbase (snabbast, antar att ingen coinbase-transaktion tas emot), default (samma som optimize-coinbase)</translation>
    </message>
    <message>
        <source>monero, millinero, micronero, nanonero, piconero</source>
        <translation type="vanished">monero, millinero, micronero, nanonero, piconero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2771"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Plånbokens namn ej giltigt. Försök igen eller använd Ctrl-C för att avsluta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2788"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Plånbok och nyckelfil hittades, läser in&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2794"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Nyckelfilen hittades men inte plånboksfilen. Återskapar&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Nyckelfilen kunde inte hittas. Det gick inte att öppna plånbok: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2819"/>
        <source>Generating new wallet...</source>
        <translation>Skapar ny plånbok&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2969"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3000"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3055"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3075"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3095"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3110"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3158"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3183"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3199"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3238"/>
        <source>No data supplied, cancelled</source>
        <translation>Inga data angivna, avbryter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3006"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3081"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4865"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5501"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6386"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6450"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7560"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7815"/>
        <source>failed to parse address</source>
        <translation>det gick inte att parsa adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3026"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>failed to parse view key secret key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3035"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3133"/>
        <source>failed to verify view key secret key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3039"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3137"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218"/>
        <source>view key does not match standard address</source>
        <translation>granskningsnyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3044"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3064"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3274"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3331"/>
        <source>account creation failed</source>
        <translation>det gick inte att skapa konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3060"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3243"/>
        <source>failed to parse spend key secret key</source>
        <translation>det gick inte att parsa spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3125"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <source>failed to verify spend key secret key</source>
        <translation>det gick inte att verifiera spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3129"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3268"/>
        <source>spend key does not match standard address</source>
        <translation>spendernyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>failed to open account</source>
        <translation>det gick inte att öppna konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3994"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6354"/>
        <source>wallet is null</source>
        <translation>plånbok är null</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3541"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3546"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>ogiltigt språkval har angivits. Försök igen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627"/>
        <source>View key: </source>
        <translation>Granskningsnyckel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Du kan också prova att bort filen &quot;%s&quot; och försöka igen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3917"/>
        <source>failed to deinitialize wallet</source>
        <translation>det gick inte att avinitiera plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3985"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4550"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7882"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>detta kommando kräver en betrodd daemon. Aktivera med --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4151"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>blockkedjan kan inte sparas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4268"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4564"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4272"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4568"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4282"/>
        <source>refresh error: </source>
        <translation>fel vid uppdatering: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4334"/>
        <source>Balance: </source>
        <translation>Saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4430"/>
        <source>pubkey</source>
        <translation>publik nyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4430"/>
        <source>key image</source>
        <translation>nyckelavbildning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4441"/>
        <source>unlocked</source>
        <translation>upplåst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4440"/>
        <source>T</source>
        <translation>S</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4440"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4441"/>
        <source>locked</source>
        <translation>låst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4442"/>
        <source>RingCT</source>
        <translation>RingCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4442"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation type="vanished">betalnings-ID har ogiltigt format. En hexadecimal sträng med 16 eller 64 tecken förväntades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4572"/>
        <source>failed to get spent status</source>
        <translation>det gick inte att hämta spenderstatus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4695"/>
        <source>the same transaction</source>
        <translation>samma transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4695"/>
        <source>blocks that are temporally very close</source>
        <translation>block som ligger väldigt nära varandra i tiden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5438"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Låsta block för högt, max 1000000 (˜~4 år)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6469"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6585"/>
        <source>Good signature</source>
        <translation>Godkänd signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6693"/>
        <source>Bad signature</source>
        <translation>Felaktig signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7500"/>
        <source>usage: integrated_address [payment ID]</source>
        <translation>användning: integrated_address [betalnings-ID]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7536"/>
        <source>Standard address: </source>
        <translation>Standardadress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7541"/>
        <source>failed to parse payment ID or address</source>
        <translation>det gick inte att parsa betalnings-ID eller adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7552"/>
        <source>usage: address_book [(add (&lt;address&gt; [pid &lt;long or short payment id&gt;])|&lt;integrated address&gt; [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)]</source>
        <translation>användning: address_book [(add (&lt;adress&gt; [pid &lt;långt eller kort betalnings-ID&gt;])|&lt;integrerad adress&gt; [&lt;beskrivning eventuellt med blanktecken&gt;])|(delete &lt;index&gt;)]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7578"/>
        <source>failed to parse payment ID</source>
        <translation>det gick inte att parsa betalnings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7596"/>
        <source>failed to parse index</source>
        <translation>det gick inte att parsa index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7604"/>
        <source>Address book is empty.</source>
        <translation>Adressboken är tom.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7610"/>
        <source>Index: </source>
        <translation>Index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7611"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741"/>
        <source>Address: </source>
        <translation>Adress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7612"/>
        <source>Payment ID: </source>
        <translation>Betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7613"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7740"/>
        <source>Description: </source>
        <translation>Beskrivning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7623"/>
        <source>usage: set_tx_note [txid] free text note</source>
        <translation>användning: set_tx_note [txid] fritextanteckning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7651"/>
        <source>usage: get_tx_note [txid]</source>
        <translation>användning: get_tx_note [txid]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7750"/>
        <source>Network type: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7751"/>
        <source>Testnet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7752"/>
        <source>Stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7752"/>
        <source>Mainnet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7765"/>
        <source>usage: sign &lt;filename&gt;</source>
        <translation>användning: sign &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7770"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>plånboken är enbart för granskning och kan inte signera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1130"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7785"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7808"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7997"/>
        <source>failed to read file </source>
        <translation>det gick inte att läsa filen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6431"/>
        <source>usage: check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>användning: check_tx_proof &lt;txid&gt; &lt;adress&gt; &lt;signaturfil&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6578"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6678"/>
        <source>failed to load signature file</source>
        <translation>det gick inte att läsa in signaturfil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6514"/>
        <source>usage: get_spend_proof &lt;txid&gt; [&lt;message&gt;]</source>
        <translation>användning: get_spend_proof &lt;txid&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6520"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>plånboken är enbart för granskning och kan inte skapa beviset</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6558"/>
        <source>usage: check_spend_proof &lt;txid&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>användning: check_spend_proof &lt;txid&gt; &lt;signaturfil&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6604"/>
        <source>usage: get_reserve_proof (all|&lt;amount&gt;) [&lt;message&gt;]</source>
        <translation>användning: get_reserve_proof (all|&lt;belopp&gt;) [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6610"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>Beviset på reserv kan endast skapas av en standardplånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653"/>
        <source>usage: check_reserve_proof &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>användning: check_reserve_proof &lt;adress&gt; &lt;signaturfil&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6671"/>
        <source>Address must not be a subaddress</source>
        <translation>Adressen får inte vara en underadress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6689"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Godkänd signatur -- summa: %s, spenderat: %s, ej spenderat: %s</translation>
    </message>
    <message>
        <source>usage: show_transfers [in|out|all|pending|failed] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="vanished">användning: show_transfers [in|out|all|pending|failed] [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;minhöjd&gt; [&lt;maxhöjd&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[En dubbelspendering upptäcktes på nätverket: denna transaktion kanske aldrig blir verifierad] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6919"/>
        <source>usage: unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_amount&gt; [&lt;max_amount&gt;]]</source>
        <translation>användning: unspent_outputs [index=&lt;N1&gt;[, &lt;N2&gt;, …]] [&lt;min_belopp&gt; [&lt;max_belopp&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6979"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Det finns ingen ej spenderad utgång i den angivna adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7099"/>
        <source> (no daemon)</source>
        <translation> (ingen daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7101"/>
        <source> (out of sync)</source>
        <translation> (inte synkroniserad)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7158"/>
        <source>(Untitled account)</source>
        <translation>(Ej namngivet konto)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7214"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7237"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7454"/>
        <source>failed to parse index: </source>
        <translation>det gick inte att parsa index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7176"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421"/>
        <source>specify an index between 0 and </source>
        <translation>ange ett index mellan 0 och </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7273"/>
        <source>usage:
  account
  account new &lt;label text with white spaces allowed&gt;
  account switch &lt;index&gt;
  account label &lt;index&gt; &lt;label text with white spaces allowed&gt;
  account tag &lt;tag_name&gt; &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account untag &lt;account_index_1&gt; [&lt;account_index_2&gt; ...]
  account tag_description &lt;tag_name&gt; &lt;description&gt;</source>
        <translation>användning:
  account
  account new &lt;etikettext med blanktecken tillåtna&gt;
  account switch &lt;index&gt;
  account label &lt;index&gt; &lt;etikettext med blanktecken tillåtna&gt;
  account tag &lt;taggnamn&gt; &lt;kontoindex_1&gt; [&lt;kontoindex_2&gt; …]
  account untag &lt;kontoindex_1&gt; [&lt;kontoindex_2&gt; …]
  account tag_description &lt;taggnamn&gt; &lt;beskrivning&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7301"/>
        <source>
Grand total:
  Balance: </source>
        <translation>
Totalsumma:
  Saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7301"/>
        <source>, unlocked balance: </source>
        <translation>, upplåst saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7309"/>
        <source>Untagged accounts:</source>
        <translation>Otaggade konton:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7315"/>
        <source>Tag %s is unregistered.</source>
        <translation>Taggen %s har inte registrerats.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7318"/>
        <source>Accounts with tag: </source>
        <translation>Konton med tagg: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7319"/>
        <source>Tag&apos;s description: </source>
        <translation>Taggens beskrivning: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Account</source>
        <translation>Konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7327"/>
        <source> %c%8u %6s %21s %21s %21s</source>
        <translation> %c%8u %6s %21s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7337"/>
        <source>----------------------------------------------------------------------------------</source>
        <translation>----------------------------------------------------------------------------------</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7338"/>
        <source>%15s %21s %21s</source>
        <translation>%15s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7361"/>
        <source>Primary address</source>
        <translation>Primär adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7361"/>
        <source>(used)</source>
        <translation>(används)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7408"/>
        <source>(Untitled address)</source>
        <translation>(Ej namngiven adress)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7463"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; är redan utanför tillåtet intervall</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7468"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; är utanför tillåtet intervall</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7489"/>
        <source>usage: address [ new &lt;label text with white spaces allowed&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;label text with white spaces allowed&gt; ]</source>
        <translation>användning: address [new &lt;etikettext med blanktecken tillåtna&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;etikettext med blanktecken tillåtna&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7507"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7519"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Integrerade adresser kan bara skapas för konto 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7531"/>
        <source>Integrated address: %s, payment ID: %s</source>
        <translation>Integrerad adress: %s, betalnings-ID: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7536"/>
        <source>Subaddress: </source>
        <translation>Underadress: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7692"/>
        <source>usage: get_description</source>
        <translation>användning: get_description</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7698"/>
        <source>no description found</source>
        <translation>ingen beskrivning hittades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7700"/>
        <source>description found: </source>
        <translation>beskrivning hittades: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7739"/>
        <source>Filename: </source>
        <translation>Filnamn: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7744"/>
        <source>Watch only</source>
        <translation>Endast granskning</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7746"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multisig%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7748"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7749"/>
        <source>Type: </source>
        <translation>Typ: </translation>
    </message>
    <message>
        <source>Testnet: </source>
        <translation type="vanished">Testnet: </translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="vanished">Ja</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="vanished">Nej</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7775"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Plånboken är multisig och kan inte signera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7797"/>
        <source>usage: verify &lt;filename&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation>användning: verify &lt;filnamn&gt; &lt;adress&gt; &lt;signatur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7822"/>
        <source>Bad signature from </source>
        <translation>Felaktig signatur från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7826"/>
        <source>Good signature from </source>
        <translation>Godkänd signatur från </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7840"/>
        <source>usage: export_key_images &lt;filename&gt;</source>
        <translation>användning: export_key_images &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7845"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>plånboken är enbart för granskning och kan inte exportera nyckelavbildningar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1080"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7858"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7964"/>
        <source>failed to save file </source>
        <translation>det gick inte att spara fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7869"/>
        <source>Signed key images exported to </source>
        <translation>Signerade nyckelavbildningar exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7888"/>
        <source>usage: import_key_images &lt;filename&gt;</source>
        <translation>användning: import_key_images &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7919"/>
        <source>command only supported by HW wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7928"/>
        <source>Failed to reconnect device</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7933"/>
        <source>Failed to reconnect device: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7949"/>
        <source>usage: export_outputs &lt;filename&gt;</source>
        <translation>användning: export_outputs &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975"/>
        <source>Outputs exported to </source>
        <translation>Utgångar exporterades till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7988"/>
        <source>usage: import_outputs &lt;filename&gt;</source>
        <translation>användning: import_outputs &lt;filnamn&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4848"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6621"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6938"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6946"/>
        <source>amount is wrong: </source>
        <translation>beloppet är fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4849"/>
        <source>expected number from 0 to </source>
        <translation>förväntades: ett tal från 0 till </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5272"/>
        <source>Sweeping </source>
        <translation>Sveper upp </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5879"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Pengar skickades, transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6028"/>
        <source>Change goes to more than one address</source>
        <translation>Växel går till fler än en adress</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6071"/>
        <source>%s change to %s</source>
        <translation>%s växel till %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6074"/>
        <source>no change</source>
        <translation>ingen växel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6146"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transaktionen signerades till fil </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6206"/>
        <source>usage: get_tx_key &lt;txid&gt;</source>
        <translation>användning: get_tx_key &lt;txid&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6213"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6311"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6360"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6442"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6527"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6565"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7630"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7658"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8027"/>
        <source>failed to parse txid</source>
        <translation>det gick inte att parsa txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6227"/>
        <source>Tx key: </source>
        <translation>Tx-nyckel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6232"/>
        <source>no tx keys found for this txid</source>
        <translation>inga tx-nycklar kunde hittas för detta txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6304"/>
        <source>usage: get_tx_proof &lt;txid&gt; &lt;address&gt; [&lt;message&gt;]</source>
        <translation>användning: get_tx_proof &lt;txid&gt; &lt;adress&gt; [&lt;meddelande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6329"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6544"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6639"/>
        <source>signature file saved to: </source>
        <translation>signaturfilen sparades till: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6331"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6546"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6641"/>
        <source>failed to save signature file</source>
        <translation>det gick inte att spara signaturfilen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6345"/>
        <source>usage: check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;address&gt;</source>
        <translation>användning: check_tx_key &lt;txid&gt; &lt;txnyckel&gt; &lt;adress&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6377"/>
        <source>failed to parse tx key</source>
        <translation>det gick inte att parsa txnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6335"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6423"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6501"/>
        <source>error: </source>
        <translation>fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6399"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source>received</source>
        <translation>mottaget</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6399"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source>in txid</source>
        <translation>i txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6491"/>
        <source>received nothing in txid</source>
        <translation>tog emot ingenting i txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>VARNING: denna transaktion är ännu inte inkluderad i blockkedjan!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="629"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="830"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="863"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="993"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1254"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6165"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6202"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6510"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6600"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7877"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7944"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7983"/>
        <source>command not supported by HW wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="658"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="724"/>
        <source>Incorrect password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="780"/>
        <source>Current fee is %s %s per %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="915"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1016"/>
        <source>usage: exchange_multisig_keys &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1037"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1399"/>
        <source>usage: print_ring &lt;key_image|txid&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1405"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1562"/>
        <source>Invalid key image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1411"/>
        <source>Invalid txid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423"/>
        <source>Key image either not spent, or spent with mixin 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1438"/>
        <source>Failed to get key image ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <source>File doesn&apos;t exist</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1475"/>
        <source>Invalid ring specification: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1483"/>
        <source>Invalid key image: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1488"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1494"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1506"/>
        <source>Error reading line: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1517"/>
        <source>Invalid ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1526"/>
        <source>Invalid relative ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1538"/>
        <source>Invalid absolute ring: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>Failed to set ring for key image: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>Continuing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1556"/>
        <source>usage: set_ring &lt;filename&gt; | ( &lt;key_image&gt; absolute|relative &lt;index&gt; [&lt;index&gt;...] )</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1577"/>
        <source>Missing absolute or relative keyword</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1594"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1602"/>
        <source>invalid index: indices wrap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1612"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>failed to set ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1631"/>
        <source>usage: mark_output_spent &lt;amount&gt;/&lt;offset&gt; | &lt;filename&gt; [add]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1664"/>
        <source>First line is not an amount</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1678"/>
        <source>Invalid output: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1688"/>
        <source>Bad argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1688"/>
        <source>should be &quot;add&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1697"/>
        <source>Failed to open file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1703"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709"/>
        <source>Failed to mark output spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1720"/>
        <source>usage: mark_output_unspent &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1726"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1753"/>
        <source>Invalid output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1736"/>
        <source>Failed to mark output unspent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1747"/>
        <source>usage: is_output_spent &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1760"/>
        <source>Spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1762"/>
        <source>Not spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1766"/>
        <source>Failed to check whether output is spent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1781"/>
        <source>Failed to save known rings: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1859"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5081"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1861"/>
        <source>WARNING: from v8, ring size will be fixed and this setting will be ignored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1890"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1913"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2268"/>
        <source>start_mining [bg_mining] [ignore_battery]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2275"/>
        <source>set_daemon &lt;host&gt;[:&lt;port&gt;] [trusted|untrusted]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2299"/>
        <source>transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] (&lt;URI&gt; | &lt;address&gt; &lt;amount&gt;) [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2300"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2303"/>
        <source>locked_transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] (&lt;URI&gt; | &lt;addr&gt; &lt;amount&gt;) &lt;lockblocks&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2304"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; blocks (max. 262143 = ~5 years). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2307"/>
        <source>locked_sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; &lt;lockblocks&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2308"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; blocks (max. 262143 = ~5 years). If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2313"/>
        <source>sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2314"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2321"/>
        <source>sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2325"/>
        <source>sweep_mined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2326"/>
        <source>Sweep mined coins back to main address.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2330"/>
        <source>Donate &lt;amount&gt; to the development team (donate.unprll.cash).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2333"/>
        <source>sign_transfer [export_raw]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2361"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2388"/>
        <source>Available options:
 seed language
   Set the wallet&apos;s seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 default-ring-size &lt;n&gt;
   Set the default ring size (obsolete).
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet&apos;s refresh behaviour.
 priority [0|1|2|3|4]
   Set the fee to default/unimportant/normal/elevated/priority.
 confirm-missing-payment-id &lt;1|0&gt;
 ask-password &lt;0|1|2   (or never|action|decrypt)&gt;
 unit &lt;unprll|milliprll|microprll|nanoprll|picoprll&gt;
   Set the default unprll (sub-)unit.
 min-outputs-count [n]
   Try to keep at least that many outputs of value at least min-outputs-value.
 min-outputs-value [n]
   Try to keep at least min-outputs-count outputs of at least that value.
 merge-destinations &lt;1|0&gt;
   Whether to merge multiple payments to the same destination address.
 confirm-backlog &lt;1|0&gt;
   Whether to warn if there is transaction backlog.
 confirm-backlog-threshold [n]
   Set a threshold for confirm-backlog to only warn if the transaction backlog is greater than n blocks.
 refresh-from-block-height [n]
   Set the height before which to ignore blocks.
 auto-low-priority &lt;1|0&gt;
   Whether to automatically use the low priority fee level when it&apos;s safe to do so.
 segregate-pre-fork-outputs &lt;1|0&gt;
   Set this if you intend to spend outputs on both Unprll AND a key reusing fork.
 key-reuse-mitigation2 &lt;1|0&gt;
   Set this if you are not sure whether you will spend on a key reusing Unprll fork later.
subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
   Set the lookahead sizes for the subaddress hash table.
   Set this if you are not sure whether you will spend on a key reusing Unprll fork later.
 segregation-height &lt;n&gt;
   Set to the height of a key reusing fork you want to use, 0 to use default.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2444"/>
        <source>set_tx_key &lt;txid&gt; &lt;tx_key&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2445"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2478"/>
        <source>show_transfers [in|out|pending|failed|pool|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2486"/>
        <source>Rescan the blockchain from scratch, losing any information which can not be recovered from the blockchain itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2526"/>
        <source>hw_reconnect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2527"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2557"/>
        <source>exchange_multisig_keys &lt;string&gt; [&lt;string&gt;...]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2558"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2581"/>
        <source>print_ring &lt;key_image&gt; | &lt;txid&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2582"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2585"/>
        <source>set_ring &lt;filename&gt; | ( &lt;key_image&gt; absolute|relative &lt;index&gt; [&lt;index&gt;...] )</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2586"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2589"/>
        <source>save_known_rings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2590"/>
        <source>Save known rings to the shared rings database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2593"/>
        <source>mark_output_spent &lt;amount&gt;/&lt;offset&gt; | &lt;filename&gt; [add]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2594"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2597"/>
        <source>mark_output_unspent &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2598"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2601"/>
        <source>is_output_spent &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2602"/>
        <source>Checks whether an output is marked as spent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2605"/>
        <source>version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2606"/>
        <source>Returns version information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2695"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2697"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2698"/>
        <source>unprll, milliprll, microprll, nanoprll, picoprll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2709"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2732"/>
        <source>wrong number range, use: set_log &lt;log_level_number_0-4&gt; | &lt;categories&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2878"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890"/>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2974"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3306"/>
        <source>No restore height is specified.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3307"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3308"/>
        <source>Use --restore-height if you want to restore an already setup account from a specific height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3312"/>
        <source>account creation aborted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3421"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3424"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3616"/>
        <source>Loading your wallet, this could take a while</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3523"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3644"/>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see the list of available commands.
Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
Always use the &quot;exit&quot; command when closing unprll-wallet-cli to save 
your current session&apos;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3735"/>
        <source>Generated new wallet on hw device: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3814"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3970"/>
        <source>Watch only wallet saved as: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3974"/>
        <source>Failed to save watch only wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3999"/>
        <source>WARNING: Mining exposes your public spend key, leading to linkability of transactions if not careful.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4001"/>
        <source>1) Never use your Mining account address for receiving coins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4003"/>
        <source>2) Run sweep_mined to make mined outputs usable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4005"/>
        <source>3) Sweeping your coins to the Primary account (after running sweep_mined) is recommended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013"/>
        <source>Mining cancelled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035"/>
        <source>invalid arguments. Please use start_mining [do_bg_mining] [ignore_battery]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4110"/>
        <source>Expected trusted or untrusted, got </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4127"/>
        <source>trusted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4127"/>
        <source>untrusted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4177"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4213"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4221"/>
        <source>Enter password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4330"/>
        <source> (Some owned outputs have missing key images - import_key_images needed)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4516"/>
        <source>payment ID has invalid format, expected 16 character hex string: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4629"/>
        <source>failed to find construction data for tx input</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4755"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5414"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5695"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4784"/>
        <source>payment id failed to encode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4803"/>
        <source>Locked blocks span too high, max 262143 (˜5 yrs)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807"/>
        <source>Locked blocks will be rounded down to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4808"/>
        <source>Unlock time may be off by 40 minutes at most</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4834"/>
        <source>failed to parse short payment ID from URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4859"/>
        <source>Invalid last argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4876"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4888"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4906"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5528"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5785"/>
        <source>No explicitly mentioned payment id is included with this transaction. Is this okay?  (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059"/>
        <source>.
This transaction will unlock on block %llu, in approximately %s days (assuming 10 minutes per block)</source>
        <translation type="unfinished">.
Denna transaktion låses upp vid block %llu, om ungefär %s dagar (förutsatt en blocktid på 2 minuter) {10 ?}</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5167"/>
        <source>No unsweeped outputs found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5326"/>
        <source>Not enough money in unlocked balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5327"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?  (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5355"/>
        <source>usage: %s [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5423"/>
        <source>missing lockedblocks parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5433"/>
        <source>bad locked_blocks parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5704"/>
        <source>Failed to parse number of outputs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5463"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5709"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5490"/>
        <source>payment id has invalid format, expected 16 character hex string: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5746"/>
        <source>usage: sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5921"/>
        <source>donations are not enabled on the testnet or on the stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5948"/>
        <source>Donating %s %s to The Unprll Project (donate.unprll.cash or %s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6040"/>
        <source>Payment ID not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6116"/>
        <source>usage: sign_transfer [export_raw]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6242"/>
        <source>usage: set_tx_key &lt;txid&gt; &lt;tx_key&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6259"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6270"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>failed to parse tx_key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6286"/>
        <source>Tx key successfully stored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6290"/>
        <source>Failed to store tx key: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6408"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6481"/>
        <source>This transaction has %u confirmations</source>
        <translation>Denna transaktion har %u bekräftelser</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6412"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6485"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>VARNING: det gick inte att bestämma antal bekräftelser!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6735"/>
        <source>usage: show_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6788"/>
        <source>bad min_height parameter:</source>
        <translation>felaktig parameter för min_höjd:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6800"/>
        <source>bad max_height parameter:</source>
        <translation>felaktig parameter för max_höjd:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6821"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6821"/>
        <source>block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6855"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>out</source>
        <translation>ut</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>failed</source>
        <translation>misslyckades</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>pending</source>
        <translation>väntande</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6953"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_belopp&gt; måste vara mindre än &lt;max_belopp&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6985"/>
        <source>
Amount: </source>
        <translation>
Belopp: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6985"/>
        <source>, number of keys: </source>
        <translation>, antal nycklar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6990"/>
        <source> </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6995"/>
        <source>
Min block height: </source>
        <translation>
Minblockhöjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6996"/>
        <source>
Max block height: </source>
        <translation>
Maxblockhöjd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6997"/>
        <source>
Min amount found: </source>
        <translation>
Minbelopp funnet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6998"/>
        <source>
Max amount found: </source>
        <translation>
Maxbelopp funnet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6999"/>
        <source>
Total count: </source>
        <translation>
Totalt antal: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7039"/>
        <source>
Bin size: </source>
        <translation>
Storlek för binge: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7040"/>
        <source>
Outputs per *: </source>
        <translation>
Utgångar per *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7042"/>
        <source>count
  ^
</source>
        <translation>antal
  ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7044"/>
        <source>  |</source>
        <translation>  |</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7046"/>
        <source>  +</source>
        <translation>  +</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7046"/>
        <source>+--&gt; block height
</source>
        <translation>+--&gt; blockhöjd
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7047"/>
        <source>   ^</source>
        <translation>   ^</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7047"/>
        <source>^
</source>
        <translation>^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7048"/>
        <source>  </source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7055"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7056"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7057"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7097"/>
        <source>wallet</source>
        <translation>plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7369"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7387"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7427"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473"/>
        <source>WARNING: Exposing your Mining Address will lead to linking of transactions and loss of privacy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7371"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7389"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7429"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7475"/>
        <source>Use your primary account or other subaddresses for receiving coins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7511"/>
        <source>Random payment ID: </source>
        <translation>Slumpmässigt betalnings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7512"/>
        <source>Matching integrated address: </source>
        <translation>Matchande integrerad adress: </translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Basfilnamn (suffix -1, -2, osv. läggs till efter behov)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Ange tröskelvärde och deltagare på en gång som M/N</translation>
    </message>
    <message>
        <source>How many participants wil share parts of the multisig wallet</source>
        <translation type="vanished">Hur många deltagare kommer att dela delar av multisig-plånboken</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Hur många signerare krävs för att signera en giltig transaktion</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create testnet multisig wallets</source>
        <translation>Skapa multisig-plånböcker för testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="83"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Skapar %u %u/%u multisig-plånböcker</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="142"/>
        <source>Error verifying multisig extra info</source>
        <translation>Ett fel uppstod när extra multisig-info verifierades</translation>
    </message>
    <message>
        <source>Error finalizing multisig</source>
        <translation type="vanished">Ett fel uppstod vid slutförande av multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create stagenet multisig wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="76"/>
        <source>Create an address file for new wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="107"/>
        <source>Failed to verify multisig info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="153"/>
        <source>Generated multisig wallets for address </source>
        <translation>Skapade multisig-plånböcker för adress </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="157"/>
        <source>Error creating multisig wallets: </source>
        <translation>Ett fel uppstod när multisig-plånböcker skapades: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="182"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Programmet skapar en uppsättning multisig-plånböcker - använd endast detta enklare system om alla deltagare litar på varandra</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="201"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Fel: förväntade N/M, men fick: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Fel: antingen --scheme eller både --threshold och --participants får anges</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="232"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Fel: förväntade N &gt; 1 och N &lt;= M, men fick N=%u och M=%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="241"/>
        <source>Error: --filename-base is required</source>
        <translation>Fel: --filename-base måste anges</translation>
    </message>
    <message>
        <source>Error: unsupported scheme: only N/N and N-1/N are supported</source>
        <translation type="vanished">Fel: systemet stöds inte: bara N/N och N-1/N stöds</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="120"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Skapa ny plånbok och spara den till &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="121"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="122"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Skapa granskningsplånbok från granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="123"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Skapa deterministisk plånbok från spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="124"/>
        <source>Generate wallet from private keys</source>
        <translation>Skapa plånbok från privata nycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="125"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Skapa en huvudplånbok från multisig-plånboksnycklar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="127"/>
        <source>Language for mnemonic</source>
        <translation>Språk för minnesbaserat startvärde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="128"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Ange Electrum-startvärde för att återställa/skapa plånbok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="129"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Återställ plånbok genom att använda minnesbaserat startvärde (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="130"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Återställ multisig-plånbok genom att använda minnesbaserat startvärde (Electrum-typ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="131"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Skapa icke-deterministisk granskningsnyckel och spendernyckel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="134"/>
        <source>The newly created transaction will not be relayed to the unprll network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="135"/>
        <source>Create an address file for new wallets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="137"/>
        <source>Display English language names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184"/>
        <source>failed to read wallet password</source>
        <translation type="unfinished">det gick inte att läsa lösenord för plånboken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Enter a new password for the wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Wallet password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="269"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="325"/>
        <source>DNSSEC validation passed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="329"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="332"/>
        <source>For URL: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="334"/>
        <source> Unprll Address = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="336"/>
        <source>Is this OK? (Y/n) </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="346"/>
        <source>you have cancelled the transfer request</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="367"/>
        <source>failed to parse index: </source>
        <translation type="unfinished">det gick inte att parsa index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="380"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="397"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation type="unfinished">ingen anslutning till daemonen. Se till att daemonen körs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="402"/>
        <source>RPC error: </source>
        <translation type="unfinished">RPC-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="406"/>
        <source>failed to get random outputs to mix: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="421"/>
        <source>Not enough money in unlocked balance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="431"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="437"/>
        <source>not enough outputs for specified ring size</source>
        <translation type="unfinished">inte tillräckligt med utgångar för angiven ringstorlek</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="440"/>
        <source>output amount</source>
        <translation type="unfinished">utgångens belopp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="440"/>
        <source>found outputs to use</source>
        <translation type="unfinished">hittade utgångar att använda</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="442"/>
        <source>Please use sweep_unmixable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="446"/>
        <source>transaction was not constructed</source>
        <translation type="unfinished">transaktionen konstruerades inte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="451"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation type="unfinished">transaktionen %s avvisades av daemonen med status: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="454"/>
        <source>Reason: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="463"/>
        <source>one of destinations is zero</source>
        <translation type="unfinished">ett av målen är noll</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="468"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation type="unfinished">det gick inte att hitta ett lämpligt sätt att dela upp transaktioner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="474"/>
        <source>unknown transfer error: </source>
        <translation type="unfinished">okänt överföringsfel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="479"/>
        <source>Multisig error: </source>
        <translation type="unfinished">Multisig-fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="485"/>
        <source>internal error: </source>
        <translation type="unfinished">internt fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="490"/>
        <source>unexpected error: </source>
        <translation type="unfinished">oväntat fel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="494"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="504"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="507"/>
        <source>File %s already exists. Are you sure to overwrite it? (Y/Yes/N/No): </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8241"/>
        <source>This is the command line unprll wallet. It needs to connect to an unprll
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8266"/>
        <source>Unknown command: </source>
        <translation type="unfinished">Okänt kommando: </translation>
    </message>
    <message>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation type="vanished">Aktivera kommandon som kräver en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="132"/>
        <source>Allow communicating with a daemon that uses a different RPC version</source>
        <translation>Tillåt kommunikation med en daemon som använder en annan version av RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="133"/>
        <source>Restore from specific blockchain height</source>
        <translation>Återställ från angiven blockkedjehöjd</translation>
    </message>
    <message>
        <source>The newly created transaction will not be relayed to the monero network</source>
        <translation type="vanished">Den nyss skapade transaktionen kommer inte att skickas vidare till monero-nätverket</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="201"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="393"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemonen är upptagen. Försök igen senare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="210"/>
        <source>possibly lost connection to daemon</source>
        <translation>anslutning till daemonen kan ha förlorats</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="227"/>
        <source>Error: </source>
        <translation>Fel: </translation>
    </message>
    <message>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="vanished">Detta är kommandoradsplånboken för Monero. Den måste ansluta till en Monero-
daemon för att fungera korrekt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8260"/>
        <source>Failed to initialize wallet</source>
        <translation>Det gick inte att initiera plånbok</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="181"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Använd daemonen på &lt;värddator&gt;:&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="182"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Använd daemonen på värddatorn &lt;arg&gt; istället för localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="186"/>
        <source>Wallet password file</source>
        <translation>Lösenordsfil för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="187"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Använd daemonen på port &lt;arg&gt; istället för 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="189"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>För testnet. Daemonen måste också startas med flaggan --testnet</translation>
    </message>
    <message>
        <source>Restricts to view-only commands</source>
        <translation type="vanished">Begränsar till granskningskommandon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>det går inte ange värd eller port för daemonen mer än en gång</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="330"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>det går inte att ange fler än en av --password och --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="343"/>
        <source>the password file specified could not be read</source>
        <translation>det gick inte att läsa angiven lösenordsfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="369"/>
        <source>Failed to load file </source>
        <translation>Det gick inte att läsa in fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="185"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Lösenord för plånboken (använd escape-sekvenser eller citattecken efter behov)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="183"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation type="unfinished">Aktivera kommandon som kräver en betrodd daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="184"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="188"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Ange användarnamn[:lösenord] för RPC-klient till daemonen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="190"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="192"/>
        <source>Set shared ring database path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="203"/>
        <source>Number of rounds for the key derivation function</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="204"/>
        <source>HW device to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="290"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="300"/>
        <source>Daemon is local, assuming trusted</source>
        <translation type="unfinished">Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="350"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>inget lösenord har angivits; använd --prompt-for-password för att fråga efter lösenord</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="352"/>
        <source>Enter a new password for the wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="352"/>
        <source>Wallet password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375"/>
        <source>Failed to parse JSON</source>
        <translation>Det gick inte att parsa JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="382"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u är för ny, vi förstår bara upp till %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="398"/>
        <source>failed to parse view key secret key</source>
        <translation>det gick inte att parsa hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="403"/>
        <location filename="../src/wallet/wallet2.cpp" line="471"/>
        <location filename="../src/wallet/wallet2.cpp" line="514"/>
        <source>failed to verify view key secret key</source>
        <translation>det gick inte att verifiera hemlig granskningsnyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="414"/>
        <source>failed to parse spend key secret key</source>
        <translation>det gick inte att parsa spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="419"/>
        <location filename="../src/wallet/wallet2.cpp" line="481"/>
        <location filename="../src/wallet/wallet2.cpp" line="540"/>
        <source>failed to verify spend key secret key</source>
        <translation>det gick inte att verifiera spendernyckel hemlig nyckel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="431"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Det gick inte att verifiera ordlista av Electrum-typ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="451"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>At least one of Electrum-style word list and private view key and private spend key must be specified</source>
        <translation type="vanished">Åtminstone en av ordlista av Electrum-typ och privat granskningsnyckel och privat spendernyckel måste anges</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="455"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Både ordlista av Electrum-typ och privat nyckel har angivits</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="465"/>
        <source>invalid address</source>
        <translation>ogiltig adress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="474"/>
        <source>view key does not match standard address</source>
        <translation>granskningsnyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="484"/>
        <source>spend key does not match standard address</source>
        <translation>spendernyckel matchar inte standardadress</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="492"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Det går inte att skapa inaktuella plånböcker från JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="526"/>
        <source>failed to parse address: </source>
        <translation>det gick inte att parsa adressen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Adress måste anges för att kunna skapa granskningsplånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="549"/>
        <source>failed to generate new wallet: </source>
        <translation>det gick inte att skapa ny plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="1311"/>
        <source>Password is needed to compute key image for incoming unprll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="1312"/>
        <source>Invalid password: password is needed to compute key image for incoming unprll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3564"/>
        <location filename="../src/wallet/wallet2.cpp" line="4149"/>
        <location filename="../src/wallet/wallet2.cpp" line="4687"/>
        <source>Mining account</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3565"/>
        <location filename="../src/wallet/wallet2.cpp" line="4150"/>
        <location filename="../src/wallet/wallet2.cpp" line="4688"/>
        <source>Primary account</source>
        <translation>Primärt konto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9789"/>
        <source>No funds received in this tx.</source>
        <translation>Inga pengar togs emot i denna tx.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="10502"/>
        <source>failed to read file </source>
        <translation>det gick inte att läsa filen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="136"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <source>Daemon is local, assuming trusted</source>
        <translation type="vanished">Daemonen är lokal, utgår från att den är betrodd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="180"/>
        <source>Failed to create directory </source>
        <translation>Det gick inte att skapa mapp </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="182"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Det gick inte att skapa mapp %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source>Cannot specify --</source>
        <translation>Det går inte att ange --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source> and --</source>
        <translation> och --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>Failed to create file </source>
        <translation>Det gick inte att skapa fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>. Check permissions or remove file</source>
        <translation>. Kontrollera behörigheter eller ta bort filen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="222"/>
        <source>Error writing to file </source>
        <translation>Ett fel uppstod vid skrivning till fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="225"/>
        <source>RPC username/password is stored in file </source>
        <translation>Användarnamn/lösenord för RPC har sparats i fil </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="478"/>
        <source>Tag %s is unregistered.</source>
        <translation>Taggen %s har inte registrerats.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2848"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transaktion är inte möjlig. Endast tillgängligt %s, transaktionsbelopp %s = %s + %s (avgift)</translation>
    </message>
    <message>
        <source>This is the RPC monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="vanished">Detta är RPC-plånboken för monero. Den måste ansluta till en Monero-
daemon för att fungera korrekt.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3341"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3356"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Det går inte att ange fler än en av --wallet-file och --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3368"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Måste ange --wallet-file eller --generate-from-json eller --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3372"/>
        <source>Loading wallet...</source>
        <translation>Läser in plånbok&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3406"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3438"/>
        <source>Saving wallet...</source>
        <translation>Sparar plånbok&#xa0;…</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3408"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3440"/>
        <source>Successfully saved</source>
        <translation>Plånboken sparades</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3411"/>
        <source>Successfully loaded</source>
        <translation>Plånboken lästes in</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3415"/>
        <source>Wallet initialization failed: </source>
        <translation>Det gick inte att initiera plånbok: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3421"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Det gick inte att initiera RPC-servern för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3425"/>
        <source>Starting wallet RPC server</source>
        <translation>Startar RPC-server för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3432"/>
        <source>Failed to run wallet: </source>
        <translation>Det gick inte att köra plånboken: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3435"/>
        <source>Stopped wallet RPC server</source>
        <translation>Stoppade RPC-server för plånboken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3444"/>
        <source>Failed to save wallet: </source>
        <translation>Det gick inte spara plånboken: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3515"/>
        <source>This is the RPC unprll wallet. It needs to connect to an unprll
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="168"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8209"/>
        <source>Wallet options</source>
        <translation>Alternativ för plånbok</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Skapa plånbok från fil i JSON-format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Använd plånbok &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="105"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Max antal trådar att använda för ett parallellt jobb</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="106"/>
        <source>Specify log file</source>
        <translation>Ange loggfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="107"/>
        <source>Config file</source>
        <translation>Konfigurationsfil</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="119"/>
        <source>General options</source>
        <translation>Allmänna alternativ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="144"/>
        <source>This is the command line unprll wallet. It needs to connect to a unprll
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="vanished">Detta är kommandoradsplånboken för Monero. Den måste ansluta till en Monero-
daemon för att fungera korrekt.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="168"/>
        <source>Can&apos;t find config file </source>
        <translation>Det gick inte att hitta konfigurationsfilen </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="209"/>
        <source>Logging to: </source>
        <translation>Loggar till: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="211"/>
        <source>Logging to %s</source>
        <translation>Loggar till %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="146"/>
        <source>Usage:</source>
        <translation>Användning:</translation>
    </message>
</context>
</TS>
