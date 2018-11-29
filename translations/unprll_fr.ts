<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Adresse de destination invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="70"/>
        <source>Integrated address and short payment ID can&apos;t be used at the same time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid payment ID. Short payment ID should only be used in an integrated address</source>
        <translation type="vanished">ID de paiement invalide. L&apos;identifiant de paiement court devrait seulement être utilisé dans une adresse intégrée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="63"/>
        <source>Invalid payment ID</source>
        <translation>ID de paiement invalide</translation>
    </message>
    <message>
        <source>Integrated address and long payment ID can&apos;t be used at the same time</source>
        <translation type="vanished">Adresse intégrée et ID de paiement long ne peuvent pas être utilisés en même temps</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="91"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Tentative d&apos;enregistrement d&apos;une transaction dans un fichier, mais le fichier spécifié existe déjà. Sortie pour ne pas risquer de l&apos;écraser. Fichier&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="98"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Échec de l&apos;écriture de(s) transaction(s) dans le fichier</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="121"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="124"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="128"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transaction %s a été rejetée par le démon avec le statut&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="133"/>
        <source>. Reason: </source>
        <translation>. Raison&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="135"/>
        <source>Unknown exception: </source>
        <translation>Exception inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="138"/>
        <source>Unhandled exception</source>
        <translation>Exception non gérée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="211"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation>Signature multisig des données impossible : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="233"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation>Signature multisig de la transaction impossible : </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Ceci est un portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Échec de signature de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="162"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>La monnaie réclamée ne va pas à une adresse payée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>La monnaie réclamée est supérieure au paiement à l&apos;adresse de monnaie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="178"/>
        <source>Change goes to more than one address</source>
        <translation>La monnaie rendue va à plus d&apos;une adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="191"/>
        <source>sending %s to %s</source>
        <translation>envoi de %s à %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>with no destinations</source>
        <translation>sans destination</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>%s change to %s</source>
        <translation>%s de monnaie rendue à %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="206"/>
        <source>no change</source>
        <translation>sans monnaie rendue</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="208"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>%lu transactions chargées, pour %s, frais %s, %s, %s, taille de cercle minimum %lu, %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation type="vanished">format d&apos;identifiant de paiement invalide, 16 ou 64 caractères hexadécimaux attendus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1366"/>
        <source>Failed to add short payment id: </source>
        <translation>Échec de l&apos;ajout de l&apos;ID de paiement court&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1402"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1484"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1404"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1486"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1406"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1488"/>
        <source>RPC error: </source>
        <translation>Erreur RPC&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1434"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1519"/>
        <source>not enough outputs for specified ring size</source>
        <translation>pas assez de sorties pour la taille de cercle spécifiée</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1436"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1521"/>
        <source>found outputs to use</source>
        <translation>sorties à utiliser trouvées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1438"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Veuillez balayer les sorties non mélangeables.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1412"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1495"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>pas assez de fonds pour le transfert, montant disponible %s, montant envoyé %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="537"/>
        <source>failed to parse address</source>
        <translation>échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="548"/>
        <source>failed to parse secret spend key</source>
        <translation>échec de l&apos;analyse de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="571"/>
        <source>failed to parse secret view key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="580"/>
        <source>failed to verify secret spend key</source>
        <translation>échec de la vérification de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="584"/>
        <source>spend key does not match address</source>
        <translation>la clé de dépense ne correspond pas à l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="590"/>
        <source>failed to verify secret view key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="594"/>
        <source>view key does not match address</source>
        <translation>la clé d&apos;audit ne correspond pas à l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="617"/>
        <location filename="../src/wallet/api/wallet.cpp" line="634"/>
        <source>failed to generate new wallet: </source>
        <translation>échec de la génération du nouveau portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="881"/>
        <source>Failed to send import wallet request</source>
        <translation>Échec de l&apos;envoi de la requête d&apos;importation de portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1031"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Échec du chargement des transaction non signées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1050"/>
        <source>Failed to load transaction from file</source>
        <translation>Échec du chargement de la transaction du fichier</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1066"/>
        <source>Wallet is view only</source>
        <translation>Portefeuille d&apos;audit uniquement</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1074"/>
        <source>failed to save file </source>
        <translation>échec de l&apos;enregistrement du fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1090"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Les images de clé ne peuvent être importées qu&apos;avec un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1103"/>
        <source>Failed to import key images: </source>
        <translation>Échec de l&apos;importation des images de clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1135"/>
        <source>Failed to get subaddress label: </source>
        <translation>Échec de la récupération de l&apos;étiquette de sous-adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1148"/>
        <source>Failed to set subaddress label: </source>
        <translation>Échec de l&apos;affectation de l&apos;étiquette de sous-adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="563"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Ni clé d&apos;audit ni clé de dépense fournie, annulation</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="682"/>
        <source>Electrum seed is empty</source>
        <translation>La phrase Electrum est vide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="691"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Échec de la vérification de la liste de mots de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1165"/>
        <source>Failed to get multisig info: </source>
        <translation>Échec de la récupération des infos multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1182"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1196"/>
        <source>Failed to make multisig: </source>
        <translation>Échec de la création multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1211"/>
        <source>Failed to finalize multisig wallet creation</source>
        <translation>Échec de la finalisation de la création du portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1214"/>
        <source>Failed to finalize multisig wallet creation: </source>
        <translation>Échec de la finalisation de la création du portefeuille multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1230"/>
        <source>Failed to export multisig images: </source>
        <translation>Échec de l&apos;exportation des images multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1248"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Échec de l&apos;analyse des images multisig importées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1258"/>
        <source>Failed to import multisig images: </source>
        <translation>Échec de l&apos;importation des images multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1272"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>Échec de la vérification des images de clé multisig partielles : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1300"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>Échec de la restauration de la transaction multisig : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1340"/>
        <source>Invalid destination address</source>
        <translation>Adresse de destination invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1357"/>
        <source>payment id has invalid format, expected 16 character hex string: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1408"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>échec de la récupération de sorties à mélanger : %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1419"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1503"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>pas assez de fonds pour le transfer, solde global disponible %s, montant envoyé %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1426"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1511"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>pas assez de fonds pour le transfert, montant disponible %s, montant envoyé %s = %s + %s (frais)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1436"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1521"/>
        <source>output amount</source>
        <translation>montant de la sortie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1441"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1525"/>
        <source>transaction was not constructed</source>
        <translation>la transaction n&apos;a pas été construite</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1444"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1528"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transaction %s a été rejetée par le démon avec le statut&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1449"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1533"/>
        <source>one of destinations is zero</source>
        <translation>une des destinations est zéro</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1451"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1535"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>échec de la recherche d&apos;une façon adéquate de scinder les transactions</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1453"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1537"/>
        <source>unknown transfer error: </source>
        <translation>erreur de transfert inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1455"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1539"/>
        <source>internal error: </source>
        <translation>erreur interne&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1457"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1541"/>
        <source>unexpected error: </source>
        <translation>erreur inattendue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1459"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1543"/>
        <source>unknown error</source>
        <translation>erreur inconnue</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1490"/>
        <source>failed to get outputs to mix</source>
        <translation>échec de la récupération de sorties à mélanger</translation>
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
        <translation>Échec de l&apos;analyse de l&apos;ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1635"/>
        <source>no tx keys found for this txid</source>
        <translation>aucune clé de transaction trouvée pour cet ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1662"/>
        <source>Failed to parse tx key</source>
        <translation>Échec de l&apos;analyse de la clé de transaction</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1671"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1700"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1728"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <source>Failed to parse address</source>
        <translation>Échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1814"/>
        <source>Address must not be a subaddress</source>
        <translation>L&apos;adresse ne doit pas être une sous-adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1854"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>Le portefeuille doit être multisig et prêt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1876"/>
        <source>Given string is not a key</source>
        <translation>La chaîne entrée n&apos;est pas une clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2097"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Réexaminer les dépenses ne peut se faire qu&apos;avec un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2146"/>
        <source>Invalid output: </source>
        <translation>Sortie invalide : </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2153"/>
        <source>Failed to mark outputs as spent</source>
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
        <source>Failed to set blackballed outputs</source>
        <translation type="vanished">Échec de l&apos;affectation des sorties blackboulées</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2164"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2186"/>
        <source>Failed to parse output amount</source>
        <translation>Échec de l&apos;analyse du montant de la sortie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2169"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2191"/>
        <source>Failed to parse output offset</source>
        <translation>Échec de l&apos;analyse de l&apos;offset de la sortie</translation>
    </message>
    <message>
        <source>Failed to blackball output</source>
        <translation type="vanished">Échec du blackboulage de la sortie</translation>
    </message>
    <message>
        <source>Failed to unblackball output</source>
        <translation type="vanished">Échec du déblackboulage de la sortie</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2208"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2247"/>
        <source>Failed to parse key image</source>
        <translation>Échec de l&apos;analyse de l&apos;image de clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2214"/>
        <source>Failed to get ring</source>
        <translation>Échec de la récupération du cercle</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2232"/>
        <source>Failed to get rings</source>
        <translation>Échec de la récupération des cercles</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2253"/>
        <source>Failed to set ring</source>
        <translation>Échec de l&apos;affectation du cercle</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="298"/>
        <source>Failed to parse address</source>
        <translation>Échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="305"/>
        <source>Failed to parse key</source>
        <translation>Échec de l&apos;analyse de la clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="313"/>
        <source>failed to verify key</source>
        <translation>Échec de la vérification de la clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323"/>
        <source>key does not match address</source>
        <translation>la clé ne correspond pas à l&apos;adresse</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="57"/>
        <source>yes</source>
        <translation>oui</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="71"/>
        <source>no</source>
        <translation>non</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="40"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Spécifier l&apos;IP à laquelle lier le serveur RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="41"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Spécifier le nom_utilisateur[:mot_de_passe] requis pour le serveur RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="42"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Confirmer que la valeur de rpc-bind-ip n&apos;est PAS une IP de bouclage (locale)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="43"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Spécifier une liste d&apos;origines séparées par des virgules pour autoriser le partage de ressource de différentes origines (CORS)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="70"/>
        <source>Invalid IP address given for --</source>
        <translation>Adresse IP invalide fournie pour --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="78"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> autorise les connexions entrantes non cryptées venant de l&apos;extérieur. Considérez plutôt un tunnel SSH ou un proxy SSL. Outrepasser avec --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Username specified with --</source>
        <translation>Le nom d&apos;utilisateur spécifié avec --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> cannot be empty</source>
        <translation> ne peut pas être vide</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="111"/>
        <source> requires RPC server password --</source>
        <translation> nécessite le mot de passe du serveur RPC --</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="553"/>
        <source>Commands: </source>
        <translation>Commandes&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3962"/>
        <source>failed to read wallet password</source>
        <translation>échec de la lecture du mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3560"/>
        <source>invalid password</source>
        <translation>mot de passe invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2680"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed&#xa0;: requiert un argument. options disponibles&#xa0;: language</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2713"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set&#xa0;: argument(s) non reconnu(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3804"/>
        <source>wallet file path not valid: </source>
        <translation>chemin du fichier portefeuille non valide&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2783"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Tentative de génération ou de restauration d&apos;un portefeuille, mais le fichier spécifié existe déjà. Sortie pour ne pas risquer de l&apos;écraser.</translation>
    </message>
    <message>
        <source>usage: payment_id</source>
        <translation type="vanished">usage&#xa0;: payment_id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2666"/>
        <source>needs an argument</source>
        <translation>requiert un argument</translation>
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
        <translation>0 ou 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2699"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2703"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2710"/>
        <source>unsigned integer</source>
        <translation>entier non signé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2837"/>
        <source>NOTE: the following 25 words can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>VEUILLEZ NOTER&#xa0;: les 25 mots suivants peuvent être utilisés pour restaurer votre portefeuille. Veuillez les écrire sur papier et les garder dans un endroit sûr. Ne les gardez pas dans un courriel ou dans un service de stockage de fichiers hors de votre contrôle.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2917"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet utilise --generate-new-wallet, pas --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2946"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>spécifiez un paramètre de récupération avec --electrum-seed=&quot;liste de mots ici&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3322"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>spécifiez un chemin de portefeuille avec --generate-new-wallet (pas --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3493"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>échec de la connexion du portefeuille au démon&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3501"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Le démon utilise une version majeure de RPC (%u) différente de celle du portefeuille (%u)&#xa0;: %s. Mettez l&apos;un des deux à jour, ou utilisez --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3522"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Liste des langues disponibles pour la phrase mnémonique de votre portefeuille&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3532"/>
        <source>Enter the number corresponding to the language of your choice: </source>
        <translation>Entrez le nombre correspondant à la langue de votre choix&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3606"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Vous avez utilisé une version obsolète du portefeuille. Veuillez dorénavant utiliser la nouvelle phrase mnémonique que nous fournissons.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3696"/>
        <source>Generated new wallet: </source>
        <translation>Nouveau portefeuille généré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3633"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3793"/>
        <source>failed to generate new wallet: </source>
        <translation>échec de la génération du nouveau portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833"/>
        <source>Opened watch-only wallet</source>
        <translation>Ouverture du portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837"/>
        <source>Opened wallet</source>
        <translation>Ouverture du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3855"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Vous avez utilisé une version obsolète du portefeuille. Veuillez procéder à la mise à jour de votre portefeuille.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3870"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Vous avez utilisé une version obsolète du portefeuille. Le format de votre fichier portefeuille est en cours de mise à jour.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3878"/>
        <source>failed to load wallet: </source>
        <translation>échec du chargement du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3895"/>
        <source>Use the &quot;help&quot; command to see the list of available commands.
</source>
        <translation>Utilisez la commande &quot;help&quot; pour voir la liste des commandes disponibles.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3940"/>
        <source>Wallet data saved</source>
        <translation>Données du portefeuille sauvegardées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4043"/>
        <source>Mining started in daemon</source>
        <translation>La mine a démarré dans le démon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4045"/>
        <source>mining has NOT been started: </source>
        <translation>la mine n&apos;a PAS démarré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4065"/>
        <source>Mining stopped in daemon</source>
        <translation>La mine a été stoppée dans le démon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4067"/>
        <source>mining has NOT been stopped: </source>
        <translation>la mine n&apos;a PAS été stoppée&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4149"/>
        <source>Blockchain saved</source>
        <translation>Chaîne de blocs sauvegardée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4164"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4194"/>
        <source>Height </source>
        <translation>Hauteur </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4196"/>
        <source>spent </source>
        <translation>dépensé </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4248"/>
        <source>Starting refresh...</source>
        <translation>Démarrage du rafraîchissement...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4261"/>
        <source>Refresh done, blocks received: </source>
        <translation>Rafraîchissement effectué, blocs reçus&#xa0;: </translation>
    </message>
    <message>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation type="vanished">format d&apos;identifiant de paiement invalide, 16 ou 64 caractères hexadécimaux attendus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798"/>
        <source>bad locked_blocks parameter:</source>
        <translation>mauvais paramètre locked_blocks&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5510"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5768"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>une unique transaction ne peut pas utiliser plus d&apos;un ID de paiement&#xa0;: </translation>
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
        <translation>échec de la définition de l&apos;ID de paiement, bien qu&apos;il ait été décodé correctement</translation>
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
        <translation>transaction annulée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4981"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4991"/>
        <source>Is this okay anyway?  (Y/Yes/N/No): </source>
        <translation>Est-ce correct quand même ?  (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4986"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?  (Y/Yes/N/No): </source>
        <translation>Il y a actuellement un arriéré de %u blocs à ce niveau de frais. Est-ce correct quand même ?  (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4991"/>
        <source>Failed to check for backlog: </source>
        <translation>Échec de la vérification du backlog&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5032"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5578"/>
        <source>
Transaction </source>
        <translation>
Transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5037"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5583"/>
        <source>Spending from address index %d
</source>
        <translation>Dépense depuis l&apos;adresse d&apos;index %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5039"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5585"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ATTENTION&#xa0;: Des sorties de multiples adresses sont utilisées ensemble, ce qui pourrait potentiellement compromettre votre confidentialité.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5041"/>
        <source>Sending %s.  </source>
        <translation>Envoi de %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5044"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Votre transaction doit être scindée en %llu transactions. Il en résulte que des frais de transaction doivent être appliqués à chaque transaction, pour un total de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5050"/>
        <source>The transaction fee is %s</source>
        <translation>Les frais de transaction sont de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5053"/>
        <source>, of which %s is dust from change</source>
        <translation>, dont %s est de la poussière de monnaie rendue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5054"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5054"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Un total de %s de poussière de monnaie rendue sera envoyé à une adresse de poussière</translation>
    </message>
    <message>
        <source>.
This transaction will unlock on block %llu, in approximately %s days (assuming 2 minutes per block)</source>
        <translation type="vanished">.
Cette transaction sera déverrouillée au bloc %llu, dans approximativement %s jours (en supposant 2 minutes par bloc)</translation>
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
        <translation>Échec de l&apos;écriture de(s) transaction(s) dans le fichier</translation>
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
        <translation>Transaction(s) non signée(s) écrite(s) dans le fichier avec succès&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5259"/>
        <source>No unmixable outputs found</source>
        <translation>Aucune sortie non mélangeable trouvée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5359"/>
        <source>No address given</source>
        <translation>Aucune adresse fournie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5730"/>
        <source>failed to parse Payment ID</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5753"/>
        <source>failed to parse key image</source>
        <translation>échec de l&apos;analyse de l&apos;image de clé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5819"/>
        <source>No outputs found</source>
        <translation>Pas de sorties trouvées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5824"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>De multiples transactions sont crées, ce qui n&apos;est pas supposé arriver</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5829"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>La transaction utilise aucune ou de multiples entrées, ce qui n&apos;est pas supposé arriver</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5906"/>
        <source>missing threshold amount</source>
        <translation>montant seuil manquant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5911"/>
        <source>invalid amount threshold</source>
        <translation>montant seuil invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5928"/>
        <source>usage: donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation>usage&#xa0;: donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] &lt;montant&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6014"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>La monnaie réclamée ne va pas à une adresse payée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6019"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>La monnaie réclamée est supérieure au paiement à l&apos;adresse de monnaie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6052"/>
        <source>sending %s to %s</source>
        <translation>envoi de %s à %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6062"/>
        <source> dummy output(s)</source>
        <translation> sortie(s) factice(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>with no destinations</source>
        <translation>sans destination</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay? (Y/Yes/N/No): </source>
        <translation>%lu transactions chargées, pour %s, frais %s, %s, %s, taille de cercle minimum %lu, %s. %sEst-ce correct ? (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6106"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Ceci est un portefeuille multisig, il ne peut signer qu&apos;avec sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6129"/>
        <source>Failed to sign transaction</source>
        <translation>Échec de signature de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6135"/>
        <source>Failed to sign transaction: </source>
        <translation>Échec de signature de transaction&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Données brutes hex de la transaction exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <source>Failed to load transaction from file</source>
        <translation>Échec du chargement de la transaction du fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4577"/>
        <source>RPC error: </source>
        <translation>Erreur RPC&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il n&apos;a pas de clé de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="746"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="900"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="949"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1010"/>
        <source>Your original password was incorrect.</source>
        <translation>Votre mot de passe original est incorrect.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="761"/>
        <source>Error with wallet rewrite: </source>
        <translation>Erreur avec la réécriture du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2037"/>
        <source>invalid unit</source>
        <translation>unité invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2055"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2117"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>nombre invalide&#xa0;: un entier non signé est attendu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2073"/>
        <source>invalid value</source>
        <translation>valeur invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2722"/>
        <source>usage: set_log &lt;log_level_number_0-4&gt; | &lt;categories&gt;</source>
        <translation>usage&#xa0;: set_log &lt;niveau_de_journalisation_0-4&gt; | &lt;catégories&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2809"/>
        <source>(Y/Yes/N/No): </source>
        <translation>(Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3366"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3393"/>
        <source>bad m_restore_height parameter: </source>
        <translation>mauvais paramètre m_restore_height&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3371"/>
        <source>date format must be YYYY-MM-DD</source>
        <translation>le format de date doit être AAAA-MM-JJ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384"/>
        <source>Restore height is: </source>
        <translation>La hauteur de restauration est&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3310"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5083"/>
        <source>Is this okay?  (Y/Yes/N/No): </source>
        <translation>Est-ce correct ? (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4121"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Le démon est local, supposons qu&apos;il est de confiance</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3958"/>
        <source>Password for new watch-only wallet</source>
        <translation>Mot de passe pour le nouveau portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4287"/>
        <source>internal error: </source>
        <translation>erreur interne&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1382"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4292"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4582"/>
        <source>unexpected error: </source>
        <translation>erreur inattendue&#xa0;: </translation>
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
        <translation>erreur inconnue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4302"/>
        <source>refresh failed: </source>
        <translation>échec du rafraîchissement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4302"/>
        <source>Blocks received: </source>
        <translation>Blocs reçus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4335"/>
        <source>unlocked balance: </source>
        <translation>solde débloqué&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2700"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>amount</source>
        <translation>montant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="249"/>
        <source>false</source>
        <translation>faux</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="567"/>
        <source>Unknown command: </source>
        <translation>Commande inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="574"/>
        <source>Command usage: </source>
        <translation>Usage de la commande&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="577"/>
        <source>Command description: </source>
        <translation>Description de la commande&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="645"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>le portefeuille est multisig mais pas encore finalisé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="675"/>
        <source>Failed to retrieve seed</source>
        <translation>Échec de la récupération de la phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>wallet is multisig and has no seed</source>
        <translation>le portefeuille est multisig et n&apos;a pas de phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="772"/>
        <source>Cannot connect to daemon</source>
        <translation>Impossible de se connecter au démon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Erreur&#xa0;: échec de l&apos;estimation de la taille du tableau d&apos;arriéré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="801"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Erreur&#xa0;: mauvaise estimation de la taille du tableau d&apos;arriéré</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="813"/>
        <source> (current)</source>
        <translation> (actuel)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="816"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>arriéré de %u bloc(s) (%u minutes) à la priorité %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="818"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>arriéré de %u à %u bloc(s) (%u à %u minutes) à la priorité %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="821"/>
        <source>No backlog at priority </source>
        <translation>Pas d&apos;arriéré à la priorité </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="868"/>
        <source>This wallet is already multisig</source>
        <translation>Le portefeuille est déjà multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="840"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="873"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas être tranformé en multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="846"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="879"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Ce portefeuille a été utilisé auparavant, veuillez utiliser un nouveau portefeuille pour créer un portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="854"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Envoyez ces infos multisig à tous les autres participants, ensuite utilisez make_multisig &lt;seuil&gt; &lt;info1&gt; [&lt;info2&gt;...] avec les infos multisig des autres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="855"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Ceci inclut la clé PRIVÉE d&apos;audit, donc ne doit être divulgué qu&apos;aux participants de ce portefeuille multisig </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="885"/>
        <source>usage: make_multisig &lt;threshold&gt; &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation>usage&#xa0;: make_multisig &lt;seuil&gt; &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="893"/>
        <source>Invalid threshold</source>
        <translation>Seuil invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="913"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1025"/>
        <source>Another step is needed</source>
        <translation>Une autre étape est nécessaire</translation>
    </message>
    <message>
        <source>Send this multisig info to all other participants, then use finalize_multisig &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation type="vanished">Envoyez ces infos multisig à tous les autres participants, ensuite utilisez finalize_multisig &lt;info1&gt; [&lt;info2&gt;...] avec les infos multisig des autres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="921"/>
        <source>Error creating multisig: </source>
        <translation>Erreur de création multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Erreur de création multisig&#xa0;: le nouveau portefeuille n&apos;est pas multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="931"/>
        <source> multisig address: </source>
        <translation> adresse multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="955"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="998"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1106"/>
        <source>This wallet is not multisig</source>
        <translation>Ce portefeuille n&apos;est pas multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="960"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1003"/>
        <source>This wallet is already finalized</source>
        <translation>Ce portefeuille est déjà finalisé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="968"/>
        <source>usage: finalize_multisig &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</source>
        <translation>usage&#xa0;: finalize_multisig &lt;multisiginfo1&gt; [&lt;multisiginfo2&gt;...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="976"/>
        <source>Failed to finalize multisig</source>
        <translation>Échec de finalisation multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="982"/>
        <source>Failed to finalize multisig: </source>
        <translation>Échec de finalisation multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1059"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1111"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1332"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Ce portefeuille multisig n&apos;est pas encore finalisé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1064"/>
        <source>usage: export_multisig_info &lt;filename&gt;</source>
        <translation>usage&#xa0;: export_multisig_info &lt;nom_fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1087"/>
        <source>Error exporting multisig info: </source>
        <translation>Erreur d&apos;importation des infos multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1091"/>
        <source>Multisig info exported to </source>
        <translation>Infos multisig exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1116"/>
        <source>usage: import_multisig_info &lt;filename1&gt; [&lt;filename2&gt;...] - one for each other participant</source>
        <translation>usage&#xa0;: import_multisig_info &lt;nom_fichier1&gt; [&lt;nom_fichier2&gt;...] - un pour chaque autre participant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <source>Multisig info imported</source>
        <translation>Infos multisig importées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1148"/>
        <source>Failed to import multisig info: </source>
        <translation>Échec de l&apos;importation des infos multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1159"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Échec de la mise à jour de l&apos;état des dépenses après l&apos;importation des infos multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1164"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Pas un démon de confiance, l&apos;état des dépenses peut être incorrect. Utilisez un démon de confiance et executez &quot;rescan_spent&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1185"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1327"/>
        <source>This is not a multisig wallet</source>
        <translation>Ceci n&apos;est pas un portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1195"/>
        <source>usage: sign_multisig &lt;filename&gt;</source>
        <translation>usage&#xa0;: sign_multisig &lt;nom_fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1209"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Échec de la signature de la transaction multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1215"/>
        <source>Multisig error: </source>
        <translation>Erreur multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1220"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Échec de la signature de la transaction multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1243"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Elle peut être transmise au réseau avec submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1269"/>
        <source>usage: submit_multisig &lt;filename&gt;</source>
        <translation>usage&#xa0;: submit_multisig &lt;nom_fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1285"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1352"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Échec du chargement de la transaction multisig du fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1290"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transaction multisig signée par %u signataire(s) seulement, nécessite %u signature(s) de plus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1299"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8191"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transaction transmise avec succès, transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8192"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Vous pouvez vérifier son statut en utilisant la commane &apos;show_transfers&apos;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1337"/>
        <source>usage: export_raw_multisig &lt;filename&gt;</source>
        <translation>usage&#xa0;: export_raw_multisig &lt;nom_fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1373"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Échec de l&apos;exportation de la transaction multisig vers le fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1377"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Transaction multisig enregistrée dans le(s) fichier(s)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1848"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1873"/>
        <source>ring size must be an integer &gt;= </source>
        <translation>la taille de cercle doit être un nombre entier &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1878"/>
        <source>could not change default ring size</source>
        <translation>échec du changement de la taille de cercle par défaut</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2151"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2222"/>
        <source>Invalid height</source>
        <translation>Hauteur invalide</translation>
    </message>
    <message>
        <source>start_mining [&lt;number_of_threads&gt;] [bg_mining] [ignore_battery]</source>
        <translation type="vanished">start_mining [&lt;nombre_de_threads&gt;] [mine_arrière_plan] [ignorer_batterie]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2269"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Démarrer la mine dans le démon (mine_arrière_plan et ignorer_batterie sont des booléens facultatifs).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2272"/>
        <source>Stop mining in the daemon.</source>
        <translation>Arrêter la mine dans le démon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2276"/>
        <source>Set another daemon to connect to.</source>
        <translation>Spécifier un autre démon auquel se connecter.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <source>Save the current blockchain data.</source>
        <translation>Sauvegarder les données actuelles de la châine de blocs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2282"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Synchroniser les transactions et le solde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2285"/>
        <source>balance [detail]</source>
        <translation>solde [détail]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2286"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Afficher le solde du compte actuellement sélectionné.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2289"/>
        <source>incoming_transfers [available|unavailable] [verbose] [index=&lt;N1&gt;[,&lt;N2&gt;[,...]]]</source>
        <translation>incoming_transfers [available|unavailable] [verbose] [index=&lt;N1&gt;[,&lt;N2&gt;[,...]]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2290"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.</source>
        <translation>Afficher les transferts entrants, tous ou filtrés par disponibilité et index d&apos;adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293"/>
        <source>payments &lt;PID_1&gt; [&lt;PID_2&gt; ... &lt;PID_N&gt;]</source>
        <translation>payments &lt;PID_1&gt; [&lt;PID_2&gt; ... &lt;PID_N&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Afficher les paiements pour les IDs de paiement donnés.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2297"/>
        <source>Show the blockchain height.</source>
        <translation>Afficher la hauteur de la chaîne de blocs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2311"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Envoyer toutes les sorties non mélangeables à vous-même avec une taille de cercle de 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2317"/>
        <source>sweep_below &lt;amount_threshold&gt; [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation>sweep_below &lt;montant_seuil&gt; [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] &lt;adresse&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Envoyer toutes les sorties débloquées d&apos;un montant inférieur au seuil à une adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2322"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Envoyer une unique sortie ayant une image de clé donnée à une adresse sans rendu de monnaie.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2329"/>
        <source>donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;amount&gt; [&lt;payment_id&gt;]</source>
        <translation>donate [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] &lt;montant&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <source>Donate &lt;amount&gt; to the development team (donate.getmonero.org).</source>
        <translation type="vanished">Donner &lt;montant&gt; à l&apos;équipe de développement (donate.getmonero.org).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2337"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Transmettre une transaction signée d&apos;un fichier.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340"/>
        <source>set_log &lt;level&gt;|{+,-,}&lt;categories&gt;</source>
        <translation>set_log &lt;niveau&gt;|{+,-,}&lt;catégories&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2341"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Changer le niveau de détail du journal (le niveau doit être &lt;0-4&gt;).</translation>
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
  account new &lt;texte étiquette avec espaces autorisés&gt;
  account switch &lt;index&gt; 
  account label &lt;index&gt; &lt;texte étiquette avec espaces autorisés&gt;
  account tag &lt;mot_clé&gt; &lt;index_compte_1&gt; [&lt;index_compte_2&gt; ...]
  account untag &lt;index_compte_1&gt; [&lt;index_compte_2&gt; ...]
  account tag_description &lt;mot_clé&gt; &lt;description&gt;</translation>
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
        <translation>Si aucun argument n&apos;est spécifié, le portefeuille affiche tous les comptes existants ainsi que leurs soldes.
Si l&apos;argument &quot;new&quot; est spécifié, le portefeuille crée un nouveau compte avec son étiquette initialisée par le texte fourni (qui peut être vide).
Si l&apos;argument &quot;switch&quot; est spécifié, le portefeuille passe au compte spécifié par &lt;index&gt;.
Si l&apos;argument &quot;label&quot; est spécifié, le portefeuille affecte le texte fourni à l&apos;étiquette du compte spécifié par &lt;index&gt;.
Si l&apos;argument &quot;tag&quot; est spécifié, un mot clé &lt;mot_clé&gt; est assigné aux comptes spécifiés &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
Si l&apos;argument &quot;untag&quot; est spécifié, les mots clés assignés aux comptes spécifiés &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., sont supprimés.
Si l&apos;argument &quot;tag_description&quot; est spécifié, le texte arbitraire &lt;description&gt; est assigné au mot clé &lt;mot_clé&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2360"/>
        <source>address [ new &lt;label text with white spaces allowed&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;label text with white spaces allowed&gt;]</source>
        <translation>address [ new &lt;texte étiquette avec espaces autorisés&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;texte étiquette avec espaces autorisés&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2364"/>
        <source>integrated_address [&lt;payment_id&gt; | &lt;address&gt;]</source>
        <translation>integrated_address [&lt;ID_paiement&gt; | &lt;adresse&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2365"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Encoder un ID de paiement dans une adresse intégrée pour l&apos;adresse publique du portefeuille actuel (en l&apos;absence d&apos;argument un ID de paiement aléatoire est utilisé), ou décoder une adresse intégrée en une adresse standard et un ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2368"/>
        <source>address_book [(add ((&lt;address&gt; [pid &lt;id&gt;])|&lt;integrated address&gt;) [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)]</source>
        <translation>address_book [(add ((&lt;adresse&gt; [pid &lt;id&gt;])|&lt;adresse intégrée&gt;) [&lt;description avec éventuellement des espaces&gt;])|(delete &lt;index&gt;)]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2369"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Afficher toutes les entrées du carnet d&apos;adresses, optionnellement en y ajoutant/supprimant une entrée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2372"/>
        <source>Save the wallet data.</source>
        <translation>Sauvegarder les données du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2375"/>
        <source>Save a watch-only keys file.</source>
        <translation>Sauvegarder un fichier de clés d&apos;audit.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2378"/>
        <source>Display the private view key.</source>
        <translation>Afficher la clé privée d&apos;audit.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2381"/>
        <source>Display the private spend key.</source>
        <translation>Afficher la clé privée de dépense.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2384"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Afficher la phrase mnémonique de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2387"/>
        <source>set &lt;option&gt; [&lt;value&gt;]</source>
        <translation>set &lt;option&gt; [&lt;valeur&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Afficher la phrase mnémonique de style Electrum chiffrée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2437"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Rescanner la chaîne de blocs pour trouver les sorties dépensées.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2440"/>
        <source>get_tx_key &lt;txid&gt;</source>
        <translation>get_tx_key &lt;ID_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2441"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Obtenir la clé de transaction (r) pour un &lt;ID_transaction&gt; donné.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448"/>
        <source>check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;address&gt;</source>
        <translation>check_tx_key &lt;ID_transaction&gt; &lt;clé_transaction&gt; &lt;adresse&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2449"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Vérifier le montant allant à &lt;adresse&gt; dans &lt;ID_transaction&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2452"/>
        <source>get_tx_proof &lt;txid&gt; &lt;address&gt; [&lt;message&gt;]</source>
        <translation>get_tx_proof &lt;ID_transaction&gt; &lt;adresse&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2453"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Générer une signature prouvant l&apos;envoi de fonds à &lt;adresse&gt; dans &lt;ID_transaction&gt;, optionnellement avec un &lt;message&gt; comme challenge, en utilisant soit la clé secrète de transaction (quand &lt;adresse&gt; n&apos;est pas l&apos;adresse de votre portefeuille) soit la clé secrète d&apos;audit (dans le cas contraire), tout en ne divulgant pas la clé secrète.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2456"/>
        <source>check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>check_tx_proof &lt;ID_transaction&gt; &lt;adresse&gt; &lt;fichier_signature&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2457"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Vérifier la validité de la preuve de fonds allant à &lt;adresse&gt; dans &lt;ID_transaction&gt; avec le &lt;message&gt; de challenge s&apos;il y en a un.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2460"/>
        <source>get_spend_proof &lt;txid&gt; [&lt;message&gt;]</source>
        <translation>get_spend_proof &lt;ID_transaction&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2461"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Générer une signature prouvant que vous avez créé &lt;ID_transaction&gt; en utilisant la clé secrète de dépense, optionnellement avec un &lt;message&gt; comme challenge.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2464"/>
        <source>check_spend_proof &lt;txid&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>check_spend_proof &lt;ID_transaction&gt; &lt;fichier_signature&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2465"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Vérifier la validité de la preuve que le signataire a créé &lt;ID_transaction&gt;, optionnellement avec un &lt;message&gt; comme challenge.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2468"/>
        <source>get_reserve_proof (all|&lt;amount&gt;) [&lt;message&gt;]</source>
        <translation>get_reserve_proof (all|&lt;montant&gt;) [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2469"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Générer une signature prouvant que vous possédez au moins ce montant, optionnellement avec un &lt;message&gt; comme challenge.
Si &apos;all&apos; est spécifié, vous prouvez la somme totale des soldes de tous vos comptes existants.
Sinon, vous prouvez le plus petit solde supérieur à &lt;montant&gt; dans votre compte actuel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2474"/>
        <source>check_reserve_proof &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>check_reserve_proof &lt;adresse&gt; &lt;fichier_signature&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2475"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Vérifier la validité d&apos;une signature prouvant que le propriétaire d&apos;une &lt;adresse&gt; détient au moins un montant, optionnellement avec un &lt;message&gt; comme challenge.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2479"/>
        <source>Show the incoming/outgoing transfers within an optional height range.</source>
        <translation>Afficher les transferts entrants/sortants dans un interval de hauteurs facultatif.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2482"/>
        <source>unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_amount&gt; [&lt;max_amount&gt;]]</source>
        <translation>unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;montant_min&gt; [&lt;montant_max&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2483"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Afficher les sorties non dépensées d&apos;une adresse spécifique dans un interval de montants facultatif.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2489"/>
        <source>set_tx_note &lt;txid&gt; [free text note]</source>
        <translation>set_tx_note &lt;ID_transaction&gt; [texte de la note]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2490"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Définir un texte arbitraire comme note pour &lt;ID_transaction&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2493"/>
        <source>get_tx_note &lt;txid&gt;</source>
        <translation>get_tx_note &lt;ID_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2494"/>
        <source>Get a string note for a txid.</source>
        <translation>Obtenir le texte de la note pour &lt;ID_transaction&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2497"/>
        <source>set_description [free text note]</source>
        <translation>set_description [texte]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2498"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Définir un texte arbitraire comme description du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2501"/>
        <source>Get the description of the wallet.</source>
        <translation>Obtenir la description du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2504"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Afficher l&apos;état du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2507"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Afficher les informations du portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2510"/>
        <source>sign &lt;file&gt;</source>
        <translation>sign &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2511"/>
        <source>Sign the contents of a file.</source>
        <translation>Signer le contenu d&apos;un fichier.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514"/>
        <source>verify &lt;filename&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation>verify &lt;fichier&gt; &lt;adresse&gt; &lt;signature&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2515"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Vérifier la signature du contenu d&apos;un fichier.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2518"/>
        <source>export_key_images &lt;file&gt;</source>
        <translation>export_key_images &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2519"/>
        <source>Export a signed set of key images to a &lt;file&gt;.</source>
        <translation>Exported un ensemble signé d&apos;images de clé vers un &lt;fichier&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2522"/>
        <source>import_key_images &lt;file&gt;</source>
        <translation>import_key_images &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2523"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importer un ensemble signé d&apos;images de clé et vérifier si elles correspondent à des dépenses.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2530"/>
        <source>export_outputs &lt;file&gt;</source>
        <translation>export_outputs &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2531"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exporter un ensemble de sorties possédées par ce portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2534"/>
        <source>import_outputs &lt;file&gt;</source>
        <translation>import_outputs &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2535"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importer un ensemble de sorties possédées par ce portefeuille.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2538"/>
        <source>show_transfer &lt;txid&gt;</source>
        <translation>show_transfer &lt;ID_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2539"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Afficher les information à propos d&apos;un transfert vers/depuis cette adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2542"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Changer le mot de passe du portefeuille.</translation>
    </message>
    <message>
        <source>Generate a new random full size payment id. These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation type="vanished">Générer un nouvel ID de paiement long aléatoire. Ceux-ci sont en clair dans la chaîne de blocs, voir integrated_address pour les IDs de paiement courts cryptés.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2545"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Afficher les informations à propos des frais et arriéré de transactions actuels.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2547"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exporter les données nécessaires pour créer un portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2549"/>
        <source>make_multisig &lt;threshold&gt; &lt;string1&gt; [&lt;string&gt;...]</source>
        <translation>make_multisig &lt;seuil&gt; &lt;chaîne_caractères1&gt; [&lt;chaîne_caractères&gt;...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Transformer ce portefeuille en portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2553"/>
        <source>finalize_multisig &lt;string&gt; [&lt;string&gt;...]</source>
        <translation>finalize_multisig &lt;chaîne_caractères&gt; [&lt;chaîne_caractères&gt;...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2554"/>
        <source>Turn this wallet into a multisig wallet, extra step for N-1/N wallets</source>
        <translation>Transformer ce portefeuille en portefeuille multisig, étape supplémentaire pour les portefeuilles N-1/N</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2561"/>
        <source>export_multisig_info &lt;filename&gt;</source>
        <translation>export_multisig_info &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2562"/>
        <source>Export multisig info for other participants</source>
        <translation>Exporter les infos multisig pour les autres participants</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2565"/>
        <source>import_multisig_info &lt;filename&gt; [&lt;filename&gt;...]</source>
        <translation>import_multisig_info &lt;fichier&gt; [&lt;fichier&gt;...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2566"/>
        <source>Import multisig info from other participants</source>
        <translation>Importer les infos multisig des autres participants</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2569"/>
        <source>sign_multisig &lt;filename&gt;</source>
        <translation>sign_multisig &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2570"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Signer une transaction multisig d&apos;un fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2573"/>
        <source>submit_multisig &lt;filename&gt;</source>
        <translation>submit_multisig &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2574"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Transmettre une transaction multisig signée d&apos;un fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2577"/>
        <source>export_raw_multisig_tx &lt;filename&gt;</source>
        <translation>export_raw_multisig_tx &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2578"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exporter une transaction multisig signée vers un fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2609"/>
        <source>help [&lt;command&gt;]</source>
        <translation>help [&lt;commande&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2610"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Afficher la section d&apos;aide ou la documentation d&apos;une &lt;commande&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2692"/>
        <source>integer &gt;= </source>
        <translation>entier &gt;= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2705"/>
        <source>block height</source>
        <translation>hauteur de bloc</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2808"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Aucun portefeuille avec ce nom trouvé. Confirmer la création d&apos;un nouveau portefeuille nommé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2909"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>impossible de spécifier à la fois --restore-deterministic-wallet ou --restore-multisig-wallet et --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2915"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet utilise --generate-new-wallet, pas --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2931"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>spécifiez un paramètre de récupération avec --electrum-seed=&quot;phrase mnémonique multisig ici&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2960"/>
        <source>Multisig seed failed verification</source>
        <translation>Échec de la vérification de la phrase mnémonique multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3011"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3086"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Cette adresse est une sous-adresse qui ne peut pas être utilisée ici.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3163"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Erreur&#xa0;: M/N attendu, mais lu&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3168"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Erreur&#xa0;: N &gt; 1 et N &lt;= M attendu, mais lu&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3173"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Erreur&#xa0;: M/N n&apos;est actuellement pas supporté. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3176"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Génération du portefeuille principal à partir de %u de %u clés de portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3205"/>
        <source>failed to parse secret view key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>failed to verify secret view key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233"/>
        <source>Secret spend key (%u of %u):</source>
        <translation>Clé secrète de dépense (%u de %u)&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3256"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Erreur&#xa0;: M/N n&apos;est actuellement pas supporté</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3407"/>
        <source>Restore height </source>
        <translation>Hauteur de restauration </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3408"/>
        <source>Still apply restore height?  (Y/Yes/N/No): </source>
        <translation>Appliquer la hauteur de restauration quand même ?  (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3435"/>
        <source>Warning: using an untrusted daemon at %s, privacy will be lessened</source>
        <translation>Attention&#xa0;: en n&apos;utilisant %s qui n&apos;est pas un démon de confiance, la confidentialité sera réduite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3494"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Le démon n&apos;est pas lancé ou un mauvais port a été fourni. Veuillez vous assurer que le démon fonctionne ou changez l&apos;adresse de démon avec la commande &apos;set_daemon&apos;.</translation>
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
        <translation type="vanished">Votre portefeuille a été généré !
Pour commencer la synchronisation avec le démon, utilisez la commande &quot;refresh&quot;.
Utilisez la commande &quot;help&quot; pour voir la liste des commandes disponibles.
Utilisez &quot;help &lt;commande&gt;&quot; pour voir la documentation d&apos;une commande.
Utilisez toujours la commande &quot;exit&quot; pour fermer monero-wallet-cli pour sauvegarder 
l&apos;état de votre session. Sinon, vous pourriez avoir besoin de synchroniser 
votre portefeuille à nouveau (mais les clés de votre portefeuille ne risquent rien).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>échec de la génération du nouveau portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3788"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Nouveau portefeuille multisig %u/%u généré&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3835"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Portefeuille multisig %u/%u ouvert%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3896"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Utilisez &quot;help &lt;commande&gt;&quot; pour voir la documentation d&apos;une commande.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3954"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>c&apos;est un portefeuille multisig et il ne peut pas sauvegarder une version d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4077"/>
        <source>missing daemon URL argument</source>
        <translation>URL du démon manquante en argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4088"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Taille de tableau inattendue - Sortie de simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4129"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Ceci semble ne pas être une URL de démon valide.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4165"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4195"/>
        <source>txid </source>
        <translation>ID transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4197"/>
        <source>idx </source>
        <translation>index </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Certaines sorties ont des images de clé partielles - import_multisig_info requis)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4331"/>
        <source>Currently selected account: [</source>
        <translation>Compte actuellement sélectionné&#xa0;: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4331"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4333"/>
        <source>Tag: </source>
        <translation>Mot clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4333"/>
        <source>(No tag assigned)</source>
        <translation>(Pas de mot clé assigné)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4340"/>
        <source>Balance per address:</source>
        <translation>Solde par adresse&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Balance</source>
        <translation>Solde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Unlocked balance</source>
        <translation>Solde débloqué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <source>Outputs</source>
        <translation>Sorties</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4341"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Label</source>
        <translation>Étiquette</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4349"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4358"/>
        <source>usage: balance [detail]</source>
        <translation>usage&#xa0;: balance [detail]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4370"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4412"/>
        <source>usage: incoming_transfers [available|unavailable] [verbose] [index=&lt;N&gt;]</source>
        <translation>usage: incoming_transfers [available|unavailable] [verbose] [index=&lt;N&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>spent</source>
        <translation>dépensé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>global index</source>
        <translation>index global</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>tx id</source>
        <translation>ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>addr index</source>
        <translation>index adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4454"/>
        <source>No incoming transfers</source>
        <translation>Aucun transfert entrant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4458"/>
        <source>No incoming available transfers</source>
        <translation>Aucun transfert entrant disponible</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4462"/>
        <source>No incoming unavailable transfers</source>
        <translation>Aucun transfert entrant non disponible</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4473"/>
        <source>expected at least one payment ID</source>
        <translation>au moins un ID de paiement attendu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>payment</source>
        <translation>paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>transaction</source>
        <translation>transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>height</source>
        <translation>hauteur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4482"/>
        <source>unlock time</source>
        <translation>durée de déverrouillage</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4494"/>
        <source>No payments with id </source>
        <translation>Aucun paiement avec l&apos;ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4542"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4605"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4943"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445"/>
        <source>failed to get blockchain height: </source>
        <translation>échec de la récupération de la hauteur de la chaîne de blocs&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6659"/>
        <source>failed to connect to the daemon</source>
        <translation>échec de la connexion au démon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4613"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaction %llu/%llu&#xa0;: ID=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634"/>
        <source>
Input %llu/%llu: amount=%s</source>
        <translation>
Entrée %llu/%llu&#xa0;: montant=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4650"/>
        <source>failed to get output: </source>
        <translation>échec de la récupération de la sortie&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4658"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>la hauteur du bloc d&apos;origine de la clé de la sortie ne devrait pas être supérieure à celle de la chaîne de blocs</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4662"/>
        <source>
Originating block heights: </source>
        <translation>
Hauteurs des blocs d&apos;origine&#xa0;: </translation>
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
Attention&#xa0;: Certaines clés d&apos;entrées étant dépensées sont issues de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4696"/>
        <source>, which can break the anonymity of ring signature. Make sure this is intentional!</source>
        <translation>, ce qui peut casser l&apos;anonymat du cercle de signature. Assurez-vous que c&apos;est intentionnel !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5397"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5678"/>
        <source>Ring size must not be 0</source>
        <translation>La taille de cercle ne doit pas être 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4750"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5690"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>la taille de cercle %u est trop petite, le minimum est %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4762"/>
        <source>wrong number of arguments</source>
        <translation>mauvais nombre d&apos;arguments</translation>
    </message>
    <message>
        <source>No payment id is included with this transaction. Is this okay?  (Y/Yes/N/No): </source>
        <translation type="vanished">Aucun ID de paiement n&apos;est inclus dans cette transaction. Est-ce correct ? (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4958"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5562"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Aucune sortie trouvée, ou le démon n&apos;est pas prêt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7919"/>
        <source>command only supported by HW wallet</source>
        <translation>commande supportée uniquement par un portefeuille matériel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7928"/>
        <source>Failed to reconnect device</source>
        <translation>Échec de la reconnexion à l&apos;appareil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7933"/>
        <source>Failed to reconnect device: </source>
        <translation>Échec de la reconnexion à l&apos;appareil : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8184"/>
        <source>Transaction successfully saved to </source>
        <translation>Transaction sauvegardée avec succès dans </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8184"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8186"/>
        <source>, txid </source>
        <translation>, ID transaction </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8186"/>
        <source>Failed to save transaction to </source>
        <translation>Échec de la sauvegarde de la transaction dans </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5182"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5274"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5590"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>Balayage de %s dans %llu transactions pour des frais totaux de %s. Est-ce correct ? (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5188"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5280"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5596"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5839"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>Balayage de %s pour des frais totaux de %s. Est-ce correct ? (Y/Yes/Oui/N/No/Non)&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6111"/>
        <source>This is a watch only wallet</source>
        <translation>Ceci est un portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8020"/>
        <source>usage: show_transfer &lt;txid&gt;</source>
        <translation>usage&#xa0;: show_transfer &lt;ID_de_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8114"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Double dépense détectée sur le réseau&#xa0;: cette transaction sera peut-être invalidée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8149"/>
        <source>Transaction ID not found</source>
        <translation>ID de transaction non trouvé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="244"/>
        <source>true</source>
        <translation>vrai</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="297"/>
        <source>failed to parse refresh type</source>
        <translation>échec de l&apos;analyse du type de rafraîchissement</translation>
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
        <translation>commande non supportée par le portefeuille matériel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="704"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il n&apos;a pas de phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="651"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>c&apos;est un portefeuille non déterministe et il n&apos;a pas de phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="658"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Entrer une phrase de passe facultative pour le décalage de la phrase mnémonique, effacer pour voir la phrase mnémonique brute</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="724"/>
        <source>Incorrect password</source>
        <translation>Mot de passe invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="780"/>
        <source>Current fee is %s %s per %s</source>
        <translation>Les frais sont actuellement de %s %s par %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1399"/>
        <source>usage: print_ring &lt;key_image|txid&gt;</source>
        <translation>usage&#xa0;: print_ring &lt;image clé|ID transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1405"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1562"/>
        <source>Invalid key image</source>
        <translation>Image de clé invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1411"/>
        <source>Invalid txid</source>
        <translation>ID de transaction invalide</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423"/>
        <source>Key image either not spent, or spent with mixin 0</source>
        <translation>Image de clé soit non dépensée, soit dépensée avec 0 mélange</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1438"/>
        <source>Failed to get key image ring: </source>
        <translation>Échec de la récupération du cercle de l&apos;image de clé : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <source>File doesn&apos;t exist</source>
        <translation>Le fichier d&apos;existe pas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1475"/>
        <source>Invalid ring specification: </source>
        <translation>Spécification de cercle invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1483"/>
        <source>Invalid key image: </source>
        <translation>Image de clé invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1488"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Type de cercle invalide, &quot;relative&quot; ou &quot;absolute&quot; attendu : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1494"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1506"/>
        <source>Error reading line: </source>
        <translation>Erreur lors de la lecture de la ligne : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1517"/>
        <source>Invalid ring: </source>
        <translation>Cercle invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1526"/>
        <source>Invalid relative ring: </source>
        <translation>Cercle relatif invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1538"/>
        <source>Invalid absolute ring: </source>
        <translation>Cercle absolu invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>Failed to set ring for key image: </source>
        <translation>Échec de l&apos;affectation du cercle pour l&apos;image de clé : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>Continuing.</source>
        <translation>On continue.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1556"/>
        <source>usage: set_ring &lt;filename&gt; | ( &lt;key_image&gt; absolute|relative &lt;index&gt; [&lt;index&gt;...] )</source>
        <translation>usage&#xa0;: set_ring &lt;nom_fichier&gt; | ( &lt;image_clé&gt; absolute|relative &lt;index&gt; [&lt;index&gt;...] )</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1577"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Mot clé &quot;absolute&quot; ou &quot;relative&quot; manquant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1594"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>index invalide : doit être un nombre entier strictement positif</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1602"/>
        <source>invalid index: indices wrap</source>
        <translation>index invalide : boucle des indices</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1612"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>index invalide : les indices doivent être en ordre strictement croissant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>failed to set ring</source>
        <translation>échec de l&apos;affectation du cercle</translation>
    </message>
    <message>
        <source>usage: blackball &lt;amount&gt;/&lt;offset&gt; | &lt;filename&gt; [add]</source>
        <translation type="vanished">usage : blackball &lt;montant&gt;/&lt;offset&gt; | &lt;nom_fichier&gt; [add]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1664"/>
        <source>First line is not an amount</source>
        <translation>La première ligne n&apos;est pas un montant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1678"/>
        <source>Invalid output: </source>
        <translation>Sortie invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1688"/>
        <source>Bad argument: </source>
        <translation>Mauvais argument : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1688"/>
        <source>should be &quot;add&quot;</source>
        <translation>devrait être &quot;add&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1697"/>
        <source>Failed to open file</source>
        <translation>Échec de l&apos;ouverture du fichier</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1703"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation>Clé de sortie invalide, et le fichier n&apos;existe pas</translation>
    </message>
    <message>
        <source>Failed to blackball output: </source>
        <translation type="vanished">Échec du blackboulage de la sortie : </translation>
    </message>
    <message>
        <source>usage: unblackball &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="vanished">usage : unblackball &lt;montant&gt;/&lt;offset&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1726"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1753"/>
        <source>Invalid output</source>
        <translation>Sortie invalide</translation>
    </message>
    <message>
        <source>Failed to unblackball output: </source>
        <translation type="vanished">Échec du déblackboulage de la sortie : </translation>
    </message>
    <message>
        <source>usage: blackballed &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="vanished">usage : blackballed &lt;montant&gt;/&lt;offset&gt;</translation>
    </message>
    <message>
        <source>Blackballed: </source>
        <translation type="vanished">Blackboulé : </translation>
    </message>
    <message>
        <source>not blackballed: </source>
        <translation type="vanished">non blackboulé : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1781"/>
        <source>Failed to save known rings: </source>
        <translation>Échec de la sauvegarde des cercles connus : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1822"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1841"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas transférer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1859"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5081"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ATTENTION : ceci c&apos;est pas la taille de cercle par défaut, ce qui peut nuire à votre confidentialité. La valeur par défaut est recommandée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1861"/>
        <source>WARNING: from v8, ring size will be fixed and this setting will be ignored.</source>
        <translation>ATTENTION : ) partir de v8, la taille de cercle sera fixée et ce paramètre sera ignoré.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1890"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1913"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>la priorité doit être 0, 1, 2, 3, 4 ou l&apos;une de : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1934"/>
        <source>could not change default priority</source>
        <translation>échec du changement de la priorité par défaut</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argument invalide : doit être soit 0/never, 1/action, ou 2/encrypt/decrypt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2275"/>
        <source>set_daemon &lt;host&gt;[:&lt;port&gt;] [trusted|untrusted]</source>
        <translation>set_daemon &lt;hôte&gt;[:&lt;port&gt;] [trusted|untrusted]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2299"/>
        <source>transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] (&lt;URI&gt; | &lt;address&gt; &lt;amount&gt;) [&lt;payment_id&gt;]</source>
        <translation>transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] (&lt;URI&gt; | &lt;adresse&gt; &lt;montant&gt;) [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2300"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation>Transférer &lt;montant&gt; à &lt;adresse&gt; Si le paramètre &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille utilise les sorties reçues par les adresses de ces indices. Si il est omis, le portefeuille choisit les indices d&apos;adresse à utiliser aléatoirement. Dans tous les cas, il essaye de ne pas combiner des sorties de multiples adresses. &lt;priorité&gt; est la priorité de la transaction. Plus la priorité est haute, plus les frais de transaction sont élévés. Les valeurs valides par ordre de priorité (de la plus basse à la plus haute) sont&#xa0;: unimportant, normal, elevated, priority. Si elle est omise, la valeur par défaut (voir la commande &quot;set priority&quot;) est utilisée. &lt;taille_cercle&gt; est le nombre d&apos;entrées à inclure pour l&apos;intraçabilité. De multiples paiements peuvent être réalisés d&apos;un coup en ajoutant &lt;URI_2&gt; ou &lt;adresse_2&gt; &lt;montant_2&gt; et cetera (avant l&apos;ID de paiement, si il est inclus)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2303"/>
        <source>locked_transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] (&lt;URI&gt; | &lt;addr&gt; &lt;amount&gt;) &lt;lockblocks&gt; [&lt;payment_id&gt;]</source>
        <translation>locked_transfer [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] (&lt;URI&gt; | &lt;adresse&gt; &lt;montant&gt;) &lt;blocs_verrou&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="vanished">Transférer &lt;montant&gt; à &lt;adresse&gt; et le verrouiller pendant &lt;blocs_verrou&gt; (max 1000000). Si le paramètre &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille utilise les sorties reçues par les adresses de ces indices. Si il est omis, le portefeuille choisit les indices d&apos;adresse à utiliser aléatoirement. Dans tous les cas, il essaye de ne pas combiner des sorties de multiples adresses. &lt;priorité&gt; est la priorité de la transaction. Plus la priorité est haute, plus les frais de transaction sont élévés. Les valeurs valides par ordre de priorité (de la plus basse à la plus haute) sont&#xa0;: unimportant, normal, elevated, priority. Si elle est omise, la valeur par défaut (voir la commande &quot;set priority&quot;) est utilisée. &lt;taille_cercle&gt; est le nombre d&apos;entrées à inclure pour l&apos;intraçabilité. De multiples paiements peuvent être réalisés d&apos;un coup en ajoutant &lt;URI_2&gt; ou &lt;adresse_2&gt; &lt;montant_2&gt; et cetera (avant l&apos;ID de paiement, si il est inclus)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2307"/>
        <source>locked_sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] &lt;address&gt; &lt;lockblocks&gt; [&lt;payment_id&gt;]</source>
        <translation>locked_sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] &lt;adresse&gt; &lt;blocs_verrou&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation type="vanished">Transférer tout le solde débloqué à une adresse et le verrouiller pendant &lt;blocs_verrou&gt; (max 1000000). Si le paramètre &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille utilise les sorties reçues par ces indices d&apos;adresse. Si il est omis, le portefeuille choisit un index d&apos;adresse à utiliser aléatoirement. &lt;priorité&gt; est la priorité du balayage. Plus la priorité est haute, plus les frais de transaction sont élévés. Les valeurs valides par ordre de priorité (de la plus basse à la plus haute) sont&#xa0;: unimportant, normal, elevated, priority. Si elle est omise, la valeur par défaut (voir la commande &quot;set priority&quot;) est utilisée. &lt;taille_cercle&gt; est le nombre d&apos;entrées à inclure pour l&apos;intraçabilité.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2313"/>
        <source>sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation>sweep_all [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] [outputs=&lt;N&gt;] &lt;adresse&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2314"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envoyer tout le solde débloqué à une adresse. Si le paramètre &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; est spécifié, le portefeuille balaye les sorties reçues par ces indices d&apos;adresse. Si il est omis, le portefeuille choisit un index d&apos;adresse à utiliser aléatoirement. Si le paramètre &quot;outputs=&lt;N&gt;&quot; est spécifié et N &gt; 0, le portefeuille scinde la transaction en N sorties égales.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2321"/>
        <source>sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation>sweep_single [&lt;priorité&gt;] [&lt;taille_cercle&gt;] [outputs=&lt;N&gt;] &lt;image_clé&gt; &lt;adresse&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2333"/>
        <source>sign_transfer [export_raw]</source>
        <translation>sign_transfer [export_raw]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.</source>
        <translation>Signer une transaction à partir d&apos;un fichier. Si le paramètre &quot;export_raw&quot; est spécifié, les données brutes hexadécimales adaptées au RPC /sendrawtransaction du démon sont exportées.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2361"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text.</source>
        <translation>Si aucun argument n&apos;est spécifié ou si &lt;index&gt; est spécifié, le portefeuille affiche l&apos;adresse par défaut ou l&apos;adresse spécifiée. Si &quot;all&quot; est spécifié, le portefeuille affiche toutes les adresses existantes dans le comptes actuellement sélectionné. Si &quot;new&quot; est spécifié, le portefeuille crée une nouvelle adresse avec le texte d&apos;étiquette fourni (qui peut être vide). Si &quot;label&quot; est spécifié, le portefeuille affecte le texte fourni à l&apos;étiquette de l&apos;adresse spécifiée par &lt;index&gt;.</translation>
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
 ask-password &lt;0|1|2   (or never|action|decrypt)&gt;
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
   Whether to automatically use the low priority fee level when it&apos;s safe to do so.
 segregate-pre-fork-outputs &lt;1|0&gt;
   Set this if you intend to spend outputs on both Monero AND a key reusing fork.
 key-reuse-mitigation2 &lt;1|0&gt;
   Set this if you are not sure whether you will spend on a key reusing Monero fork later.
subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
   Set the lookahead sizes for the subaddress hash table.
   Set this if you are not sure whether you will spend on a key reusing Monero fork later.
 segregation-height &lt;n&gt;
   Set to the height of a key reusing fork you want to use, 0 to use default.</source>
        <translation type="vanished">Options disponibles :
 seed langue
   Définir la langue de la phrase mnémonique.
 always-confirm-transfers &lt;1|0&gt;
   Confirmation des transactions non scindées.
 print-ring-members &lt;1|0&gt;
   Affichage d&apos;informations détaillées sur les membres du cercle lors de la confirmation.
 store-tx-info &lt;1|0&gt;
   Sauvegarde des informations des transactions sortantes (adresse de destination, ID de paiement, clé secrète de transaction) pour référence ultérieure.
 default-ring-size &lt;n&gt;
   Définir la taille de cercle par défaut (la valeur par défaut est le minimum 5).
 auto-refresh &lt;1|0&gt;
   Synchronisation automatique des nouveaux blocs du démon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Définir le comportement du rafraîchissement du portefeuille.
 priority [0|1|2|3|4]
   Utiliser les frais pour la priorité par défaut/peu importante/normale/élevée/prioritaire.
 confirm-missing-payment-id &lt;1|0&gt;
 ask-password &lt;0|1|2 (ou never|action|decrypt)&gt;
 unit &lt;monero|millinero|micronero|nanonero|piconero&gt;
   Définir la (sous-)unité monero par défaut.
 min-outputs-count [n]
   Essayer de garder au moins ce nombre de sorties d&apos;une valeur d&apos;au moins min-outputs-value.
 min-outputs-value [n]
   Essayer de garder au moins min-outputs-count sorties d&apos;au moins cette valeur.
 merge-destinations &lt;1|0&gt;
   Fusion des paiements multiples vers la même adresse de destination.
 confirm-backlog &lt;1|0&gt;
   Avertir s&apos;il y a un arriéré de transactions.
 confirm-backlog-threshold [n]
   Définir un seuil pour confirm-backlog pour avertir seulement si l&apos;arriéré de transactions est supérieur à n blocs.
 refresh-from-block-height [n]
   Définir la hauteur avant laquelle les blocs sont ignorés.
 auto-low-priority &lt;1|0&gt;
   Utilisation automatique du niveau de frais pour la priorité basse, lorsqu&apos;il est sûr de le faire.
 segregate-pre-fork-outputs &lt;1|0&gt;
   Activez ceci si vous prévoyez de dépenser des sorties à la fois avec Monero ET un fork réutilisant les clés.
 key-reuse-mitigation2 &lt;1|0&gt;
   Activez ceci si vous n&apos;êtes pas sûr de ne jamais utiliser un fork réutilisant les clés.
 subaddress-lookahead &lt;majeur&gt;:&lt;mineur&gt;
   Définir les nombres de sous-adresse à inclure par anticipation dans la table de hachage des sous-adresses.
 segregation-height &lt;n&gt;
   Définir la hauteur d&apos;un fork réutilisant les clés que vous voulez utiliser, 0 par défaut.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2444"/>
        <source>set_tx_key &lt;txid&gt; &lt;tx_key&gt;</source>
        <translation>set_tx_key &lt;ID_transaction&gt; &lt;clé_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2445"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Définir la clé de transaction (r) pour un &lt;ID_transaction&gt; donné au cas où cette clé ait été créée par un appareil ou portefeuille tiers.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2478"/>
        <source>show_transfers [in|out|pending|failed|pool|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>show_transfers [in|out|pending|failed|pool|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;hauteur_min&gt; [&lt;hauteur_max&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2486"/>
        <source>Rescan the blockchain from scratch, losing any information which can not be recovered from the blockchain itself.</source>
        <translation>Rescanner la chaîne de blocs à partir du début, en perdant toute information qui ne peut pas être retrouvée à partir de la chaîne elle même.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2526"/>
        <source>hw_reconnect</source>
        <translation>hw_reconnect</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2527"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Essayer de se reconnecter à un portefeuille matériel.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2581"/>
        <source>print_ring &lt;key_image&gt; | &lt;txid&gt;</source>
        <translation>print_ring &lt;image_clé&gt; | &lt;ID_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2582"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)</source>
        <translation>Afficher le(s) cercle(s) utilisé(s) pour dépenser une image de clé ou une transaction (si la taille de cercle est &gt; 1)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2585"/>
        <source>set_ring &lt;filename&gt; | ( &lt;key_image&gt; absolute|relative &lt;index&gt; [&lt;index&gt;...] )</source>
        <translation>set_ring &lt;nom_fichier&gt; | ( &lt;image_clé&gt; absolute|relative &lt;index&gt; [&lt;index&gt;...] )</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2586"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Définir le cercle utilisé pour une image de clé donnée, afin de pouvoir le réutiliser dans un fork</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2589"/>
        <source>save_known_rings</source>
        <translation>save_known_rings</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2590"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Sauvegarder les cercles connus dans la base de données des cercles partagés</translation>
    </message>
    <message>
        <source>blackball &lt;amount&gt;/&lt;offset&gt; | &lt;filename&gt; [add]</source>
        <translation type="vanished">blackball &lt;montant&gt;/&lt;offset&gt; | &lt;nom_fichier&gt; [add]</translation>
    </message>
    <message>
        <source>Blackball output(s) so they never get selected as fake outputs in a ring</source>
        <translation type="vanished">Blackbouler des sorties pour qu&apos;elles ne soient jamais sélectionnées comme leurres dans un cercle</translation>
    </message>
    <message>
        <source>unblackball &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="vanished">unblackball &lt;montant&gt;/&lt;offset&gt;</translation>
    </message>
    <message>
        <source>Unblackballs an output so it may get selected as a fake output in a ring</source>
        <translation type="vanished">Déblackbouler une sortie pour qu&apos;elle puisse être sélectionnée comme leurre dans un cercle</translation>
    </message>
    <message>
        <source>blackballed &lt;amount&gt;/&lt;offset&gt;</source>
        <translation type="vanished">blackballed &lt;montant&gt;/&lt;offset&gt;</translation>
    </message>
    <message>
        <source>Checks whether an output is blackballed</source>
        <translation type="vanished">Vérifier si une sortie est blackboulée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2605"/>
        <source>version</source>
        <translation>version</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2606"/>
        <source>Returns version information</source>
        <translation>Retourne les informations de version</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2694"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (le plus lent, aucune supposition); optimize-coinbase (rapide, suppose que la récompense de bloc est payée à une unique adresse); no-coinbase (le plus rapide, suppose que l&apos;on ne reçoit aucune récompense de bloc), default (comme optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2695"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3, 4 ou l&apos;une de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2697"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (ou never|action|decrypt)</translation>
    </message>
    <message>
        <source>monero, millinero, micronero, nanonero, piconero</source>
        <translation type="vanished">monero, millinero, micronero, nanonero, piconero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2709"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;majeur&gt;:&lt;mineur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2732"/>
        <source>wrong number range, use: set_log &lt;log_level_number_0-4&gt; | &lt;categories&gt;</source>
        <translation>nombre hors interval, utilisez&#xa0;: set_log &lt;niveau_de_journalisation_0-4&gt; | &lt;catégories&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2771"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Nom de portefeuille non valide. Veuillez réessayer ou utilisez Ctrl-C pour quitter.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2788"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Fichier portefeuille et fichier de clés trouvés, chargement...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2794"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Fichier de clés trouvé mais pas le fichier portefeuille. Régénération...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Fichier de clés non trouvé. Échec de l&apos;ouverture du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2819"/>
        <source>Generating new wallet...</source>
        <translation>Génération du nouveau portefeuille...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2878"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Impossible de spécifier plus d&apos;une option parmis --testnet et --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890"/>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation>impossible de spécifier plus d&apos;une option parmis --generate-new-wallet=&quot;nom_portefeuille&quot;, --wallet-file=&quot;nom_portefeuille&quot;, --generate-from-view-key=&quot;nom_portefeuille&quot;, --generate-from-spend-key=&quot;nom_portefeuille&quot;, --generate-from-keys=&quot;nom_portefeuille&quot;, --generate-from-multisig-keys=&quot;nom_portefeuille&quot;, --generate-from-json=&quot;nom_fichier_json&quot; et --generate-from-device=&quot;nom_portefeuille&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2969"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Échec de la vérification de la liste de mots de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2974"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Entrer une phrase de passe pour le décalage de la phrase mnémonique, vide si aucun</translation>
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
        <translation>Pas de données fournies, annulation</translation>
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
        <translation>échec de l&apos;analyse de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3026"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>failed to parse view key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3035"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3133"/>
        <source>failed to verify view key secret key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3039"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3137"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218"/>
        <source>view key does not match standard address</source>
        <translation>la clé d&apos;audit ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3044"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3064"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3274"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3331"/>
        <source>account creation failed</source>
        <translation>échec de la création du compte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3060"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3243"/>
        <source>failed to parse spend key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3125"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <source>failed to verify spend key secret key</source>
        <translation>échec de la vérification de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3129"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3268"/>
        <source>spend key does not match standard address</source>
        <translation>la clé de dépense ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3306"/>
        <source>No restore height is specified.</source>
        <translation>Aucune hauteur de restauration n&apos;est spécifiée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3307"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Nous supposons que vous créez un nouveau compte, la restauration sera faite à partir d&apos;une hauteur de la chaîne de blocs estimée.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3308"/>
        <source>Use --restore-height if you want to restore an already setup account from a specific height</source>
        <translation>Utilisez --restore-height si vous voulez restaurer un compte existant à partir d&apos;une hauteur spécifique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3312"/>
        <source>account creation aborted</source>
        <translation>création du compte annulée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3421"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>Impossible de spécifier --subaddress-lookahead et --wallet-file en même temps</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>failed to open account</source>
        <translation>échec de l&apos;ouverture du compte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3994"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6354"/>
        <source>wallet is null</source>
        <translation>portefeuille est nul</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Impossible d&apos;initialiser la base de données des cercles : les fonctions d&apos;amélioration de la confidentialité seront inactives</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3523"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Si votre affichage se bloque, quittez en aveugle avec ^C, puis lancer à nouveau en utilisant --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3541"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3546"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>choix de langue passé invalide. Veuillez réessayer.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627"/>
        <source>View key: </source>
        <translation>Clé d&apos;audit&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3735"/>
        <source>Generated new wallet on hw device: </source>
        <translation>Nouveau portefeuille généré sur l&apos;appareil : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3814"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>Fichier des clés non trouvé. Échec d&apos;ouverture du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Vous pourriez vouloir supprimer le fichier &quot;%s&quot; et réessayer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3917"/>
        <source>failed to deinitialize wallet</source>
        <translation>échec de la désinitialisation du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3970"/>
        <source>Watch only wallet saved as: </source>
        <translation>Portefeuille d&apos;audit sauvegardé vers : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3974"/>
        <source>Failed to save watch only wallet: </source>
        <translation>Échec de la sauvegarde du portefeuille d&apos;audit&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3985"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4550"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7882"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>cette commande requiert un démon de confiance. Activer avec --trusted-daemon</translation>
    </message>
    <message>
        <source>invalid arguments. Please use start_mining [&lt;number_of_threads&gt;] [do_bg_mining] [ignore_battery]</source>
        <translation type="vanished">arguments invalides. Veuillez utiliser start_mining [&lt;nombre_de_threads&gt;] [do_bg_mining] [ignore_battery]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4110"/>
        <source>Expected trusted or untrusted, got </source>
        <translation>&quot;trusted&quot; ou &quot;untrusted&quot; attendu, mais lu </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4127"/>
        <source>trusted</source>
        <translation>de confiance</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4127"/>
        <source>untrusted</source>
        <translation>non fiable</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4151"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>la chaîne de blocs ne peut pas être sauvegardée&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4177"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>NOTE: cette transaction utilise un ID de paiement chiffré: veuillez considérer l&apos;utilisation de sous-adresses à la place</translation>
    </message>
    <message>
        <source>WARNING: this transaction uses an unencrypted payment ID: consider using subaddresses instead</source>
        <translation type="vanished">ATTENTION: cette transaction utilise un ID de paiement non chiffré: veuillez considérer l&apos;utilisation de sous-adresses à la place</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4213"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Mot de passe requis (%s) - utilisez la commande refresh</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4221"/>
        <source>Enter password</source>
        <translation>Entrez le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4268"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4564"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4272"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4568"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4282"/>
        <source>refresh error: </source>
        <translation>erreur du rafraîchissement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4330"/>
        <source> (Some owned outputs have missing key images - import_key_images needed)</source>
        <translation> (Il manque les images de clé de certaines sorties - import_key_images requis)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4334"/>
        <source>Balance: </source>
        <translation>Solde&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4430"/>
        <source>pubkey</source>
        <translation>clé publique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4430"/>
        <source>key image</source>
        <translation>image de clé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4441"/>
        <source>unlocked</source>
        <translation>déverrouillé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4431"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4440"/>
        <source>T</source>
        <translation>V</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4440"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4441"/>
        <source>locked</source>
        <translation>vérrouillé</translation>
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
        <translation type="vanished">format d&apos;identifiant de paiement invalide, 16 ou 64 caractères hexadécimaux attendus&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4572"/>
        <source>failed to get spent status</source>
        <translation>échec de la récupération du statut de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4629"/>
        <source>failed to find construction data for tx input</source>
        <translation>échec de la recherche des données pour contruire l&apos;entrée de la transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4695"/>
        <source>the same transaction</source>
        <translation>la même transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4695"/>
        <source>blocks that are temporally very close</source>
        <translation>blocs très proches dans le temps</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4755"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5414"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5695"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>la taille de cercle %u est trop grande, le maximum est %u</translation>
    </message>
    <message>
        <source>Unencrypted payment IDs are bad for privacy: ask the recipient to use subaddresses instead</source>
        <translation type="vanished">Les ID de paiment non chiffrés sont mauvais pour la confidentialité : demandez au bénéficiaire d&apos;utiliser les sous-adresses à la place</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4784"/>
        <source>payment id failed to encode</source>
        <translation>échec de l&apos;encodage de l&apos;ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5438"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Nombre de blocs verrou trop élévé, 1000000 max (˜4 ans)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4834"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement court à partir de l&apos;URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4859"/>
        <source>Invalid last argument: </source>
        <translation>Dernier argument invalide : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4876"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>une unique transaction ne peut pas utiliser plus d&apos;un ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4888"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement, bien qu&apos;il ait été détecté</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5326"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Pas assez de fonds dans le solde débloqué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5327"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?  (Y/Yes/N/No): </source>
        <translation>On se débarrasse de %s de sorties non mélangeables qui ne peuvent pas être dépensées, ce qui peut être défait avec &quot;rescan_spent&quot;. Est-ce d&apos;accord ?  (Y/Yes/N/No) : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5355"/>
        <source>usage: %s [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation>usage: %s [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;priorité&gt;] [&lt;taille_cercle&gt;] [outputs=&lt;N&gt;] &lt;adresse&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5423"/>
        <source>missing lockedblocks parameter</source>
        <translation>paramètre blocs_verrou manquant</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5433"/>
        <source>bad locked_blocks parameter</source>
        <translation>mauvais paramètre blocs_verrou</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5704"/>
        <source>Failed to parse number of outputs</source>
        <translation>Échec de l&apos;analyse du nombre de sorties</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5463"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5709"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>Le nombre de sorties doit être supérieur à 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5746"/>
        <source>usage: sweep_single [&lt;priority&gt;] [&lt;ring_size&gt;] [outputs=&lt;N&gt;] &lt;key_image&gt; &lt;address&gt; [&lt;payment_id&gt;]</source>
        <translation>usage&#xa0;: sweep_single [&lt;priorité&gt;] [&lt;taille_cercle&gt;] [outputs=&lt;N&gt;] &lt;image_clé&gt; &lt;adresse&gt; [&lt;ID_paiement&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5921"/>
        <source>donations are not enabled on the testnet or on the stagenet</source>
        <translation>les dons ne sont pas activés sur les réseaux testnet et stagenet</translation>
    </message>
    <message>
        <source>Donating %s %s to The Monero Project (donate.getmonero.org or %s).</source>
        <translation type="vanished">Don de %s %s à The Monero Project (donate.getmonero.org ou %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6116"/>
        <source>usage: sign_transfer [export_raw]</source>
        <translation>usage&#xa0;: sign_transfer [export_raw]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6242"/>
        <source>usage: set_tx_key &lt;txid&gt; &lt;tx_key&gt;</source>
        <translation>usage : set_tx_key &lt;ID_transaction&gt; &lt;clé_transaction&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6259"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6270"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>failed to parse tx_key</source>
        <translation>échec de l&apos;analyse de la clé de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6286"/>
        <source>Tx key successfully stored.</source>
        <translation>Clé de transaction sauvegardée avec succès.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6290"/>
        <source>Failed to store tx key: </source>
        <translation>Échec de la sauvegarde de la clé de transaction : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6469"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6585"/>
        <source>Good signature</source>
        <translation>Bonne signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6693"/>
        <source>Bad signature</source>
        <translation>Mauvaise signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6735"/>
        <source>usage: show_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>usage&#xa0;: show_transfers [in|out|all|pending|failed|coinbase] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;hauteur_min&gt; [&lt;hauteur_max&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6821"/>
        <source>block</source>
        <translation>bloc</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7055"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation>Attention : ceci pedra toute information qui ne peut pas être retrouvée à partir de la chaîne de blocs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7056"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Ceci inclut les adresses de destination, les clé secrètes de transaction, les notes de transaction, etc</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7057"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Rescanner quand même ? (Y/Yes/N/No) : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7500"/>
        <source>usage: integrated_address [payment ID]</source>
        <translation>usage&#xa0;: integrated_address [ID paiement]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7536"/>
        <source>Standard address: </source>
        <translation>Adresse standard&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7541"/>
        <source>failed to parse payment ID or address</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement ou de l&apos;adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7552"/>
        <source>usage: address_book [(add (&lt;address&gt; [pid &lt;long or short payment id&gt;])|&lt;integrated address&gt; [&lt;description possibly with whitespaces&gt;])|(delete &lt;index&gt;)]</source>
        <translation>usage&#xa0;: address_book [(add (&lt;adresse&gt; [pid &lt;ID de paiement long ou court&gt;])|&lt;adresse integrée&gt; [&lt;description avec des espaces possible&gt;])|(delete &lt;index&gt;)]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7578"/>
        <source>failed to parse payment ID</source>
        <translation>échec de l&apos;analyse de l&apos;ID de paiement</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7596"/>
        <source>failed to parse index</source>
        <translation>échec de l&apos;analyse de l&apos;index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7604"/>
        <source>Address book is empty.</source>
        <translation>Le carnet d&apos;adresses est vide.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7610"/>
        <source>Index: </source>
        <translation>Index&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7611"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741"/>
        <source>Address: </source>
        <translation>Adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7612"/>
        <source>Payment ID: </source>
        <translation>ID de paiement&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7613"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7740"/>
        <source>Description: </source>
        <translation>Description&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7623"/>
        <source>usage: set_tx_note [txid] free text note</source>
        <translation>usage&#xa0;: set_tx_note [ID transaction] note de texte libre</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7651"/>
        <source>usage: get_tx_note [txid]</source>
        <translation>usage&#xa0;: get_tx_note [ID transaction]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7750"/>
        <source>Network type: </source>
        <translation>Type de réseau : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7751"/>
        <source>Testnet</source>
        <translation>Testnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7752"/>
        <source>Stagenet</source>
        <translation>Stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7752"/>
        <source>Mainnet</source>
        <translation>Mainnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7765"/>
        <source>usage: sign &lt;filename&gt;</source>
        <translation>usage&#xa0;: sign &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7770"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas signer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1130"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7785"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7808"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7997"/>
        <source>failed to read file </source>
        <translation>échec de la lecture du fichier </translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="1631"/>
        <source>usage: mark_output_spent &lt;amount&gt;/&lt;offset&gt; | &lt;filename&gt; [add]</source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="2268"/>
        <source>start_mining [bg_mining] [ignore_battery]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2304"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; blocks (max. 262143 = ~5 years). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2308"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; blocks (max. 262143 = ~5 years). If the parameter &quot;index&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet sweeps outputs received by those address indices. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="2698"/>
        <source>unprll, milliprll, microprll, nanoprll, picoprll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3424"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3616"/>
        <source>Loading your wallet, this could take a while</source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="4516"/>
        <source>payment ID has invalid format, expected 16 character hex string: </source>
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
Cette transaction sera déverrouillée au bloc %llu, dans approximativement %s jours (en supposant 2 minutes par bloc) {10 ?}</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5167"/>
        <source>No unsweeped outputs found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5490"/>
        <source>payment id has invalid format, expected 16 character hex string: </source>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="6431"/>
        <source>usage: check_tx_proof &lt;txid&gt; &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>usage&#xa0;: check_tx_proof &lt;ID_transaction&gt; &lt;adresse&gt; &lt;fichier_signature&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6578"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6678"/>
        <source>failed to load signature file</source>
        <translation>échec du chargement du fichier signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6514"/>
        <source>usage: get_spend_proof &lt;txid&gt; [&lt;message&gt;]</source>
        <translation>usage&#xa0;: get_spend_proof &lt;ID_transaction&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6520"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut générer de preuve</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6558"/>
        <source>usage: check_spend_proof &lt;txid&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>usage&#xa0;: check_spend_proof &lt;ID_transaction&gt; &lt;fichier_signature&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6604"/>
        <source>usage: get_reserve_proof (all|&lt;amount&gt;) [&lt;message&gt;]</source>
        <translation>usage&#xa0;: get_reserve_proof (all|&lt;montant&gt;) [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6610"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>La preuve de réserve ne peut être généré que par un portefeuille complet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653"/>
        <source>usage: check_reserve_proof &lt;address&gt; &lt;signature_file&gt; [&lt;message&gt;]</source>
        <translation>usage&#xa0;: check_reserve_proof &lt;adresse&gt; &lt;fichier_signature&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6671"/>
        <source>Address must not be a subaddress</source>
        <translation>L&apos;adresse ne doit pas être une sous-adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6689"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Bonne signature -- total&#xa0;: %s, dépensé&#xa0;: %s, non dépensé&#xa0;: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Double dépense détectée sur le réseau&#xa0;: cette transaction sera peut-être invalidée] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6919"/>
        <source>usage: unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_amount&gt; [&lt;max_amount&gt;]]</source>
        <translation>usage&#xa0;: unspent_outputs [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;montant_min&gt; [&lt;montant_max&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6979"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Il n&apos;y a pas de sortie non dépensée pour l&apos;adresse spécifiée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7099"/>
        <source> (no daemon)</source>
        <translation> (pas de démon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7101"/>
        <source> (out of sync)</source>
        <translation> (désynchronisé)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7158"/>
        <source>(Untitled account)</source>
        <translation>(compte sans nom)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7214"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7237"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7454"/>
        <source>failed to parse index: </source>
        <translation>échec de l&apos;analyse de l&apos;index&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7176"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421"/>
        <source>specify an index between 0 and </source>
        <translation>specifiez un index entre 0 et </translation>
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
        <translation>usage&#xa0;:
  account
  account new &lt;texte étiquette avec espaces autorisés&gt;
  account switch &lt;index&gt; 
  account label &lt;index&gt; &lt;texte étiquette avec espaces autorisés&gt;
  account tag &lt;mot_clé&gt; &lt;index_compte_1&gt; [&lt;index_compte_2&gt; ...]
  account untag &lt;index_compte_1&gt; [&lt;index_compte_2&gt; ...]
  account tag_description &lt;mot_clé&gt; &lt;description&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7301"/>
        <source>
Grand total:
  Balance: </source>
        <translation>
Somme finale&#xa0;:
  Solde&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7301"/>
        <source>, unlocked balance: </source>
        <translation>, solde débloqué&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7309"/>
        <source>Untagged accounts:</source>
        <translation>Comptes sans mot clé&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7315"/>
        <source>Tag %s is unregistered.</source>
        <translation>Le mot clé %s n&apos;est pas enregistré.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7318"/>
        <source>Accounts with tag: </source>
        <translation>Comptes avec mot clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7319"/>
        <source>Tag&apos;s description: </source>
        <translation>Description du mot clé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Account</source>
        <translation>Compte</translation>
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
        <translation>Adresse primaire</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7361"/>
        <source>(used)</source>
        <translation>(utilisé)</translation>
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
        <location filename="../src/simplewallet/simplewallet.cpp" line="7408"/>
        <source>(Untitled address)</source>
        <translation>(adresse sans nom)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7463"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; est déjà hors limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7468"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; excède la limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7489"/>
        <source>usage: address [ new &lt;label text with white spaces allowed&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;label text with white spaces allowed&gt; ]</source>
        <translation>usage&#xa0;: address [ new &lt;texte étiquette avec espaces autorisés&gt; | all | &lt;index_min&gt; [&lt;index_max&gt;] | label &lt;index&gt; &lt;texte étiquette avec espaces autorisés&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7507"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7519"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Les adresses intégrées ne peuvent être créées que pour le compte 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7531"/>
        <source>Integrated address: %s, payment ID: %s</source>
        <translation>Adresse intégrée&#xa0;: %s, ID de paiement&#xa0;: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7536"/>
        <source>Subaddress: </source>
        <translation>Sous-adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7692"/>
        <source>usage: get_description</source>
        <translation>usage&#xa0;: get_description</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7698"/>
        <source>no description found</source>
        <translation>pas de description trouvée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7700"/>
        <source>description found: </source>
        <translation>description trouvée&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7739"/>
        <source>Filename: </source>
        <translation>Fichier&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7744"/>
        <source>Watch only</source>
        <translation>Audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7746"/>
        <source>%u/%u multisig%s</source>
        <translation>Multisig %u/%u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7748"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7749"/>
        <source>Type: </source>
        <translation>Type&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7775"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>C&apos;est un portefeuille multisig et il ne peut pas signer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7797"/>
        <source>usage: verify &lt;filename&gt; &lt;address&gt; &lt;signature&gt;</source>
        <translation>usage&#xa0;: verify &lt;fichier&gt; &lt;adresse&gt; &lt;signature&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7822"/>
        <source>Bad signature from </source>
        <translation>Mauvaise signature de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7826"/>
        <source>Good signature from </source>
        <translation>Bonne signature de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7840"/>
        <source>usage: export_key_images &lt;filename&gt;</source>
        <translation>usage&#xa0;: export_key_images &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7845"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>c&apos;est un portefeuille d&apos;audit et il ne peut pas exporter les images de clé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1080"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7858"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7964"/>
        <source>failed to save file </source>
        <translation>échec de l&apos;enregistrement du fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7869"/>
        <source>Signed key images exported to </source>
        <translation>Images de clé signées exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7888"/>
        <source>usage: import_key_images &lt;filename&gt;</source>
        <translation>usage&#xa0;: import_key_images &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7949"/>
        <source>usage: export_outputs &lt;filename&gt;</source>
        <translation>usage&#xa0;: export_outputs &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975"/>
        <source>Outputs exported to </source>
        <translation>Sorties exportées vers </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7988"/>
        <source>usage: import_outputs &lt;filename&gt;</source>
        <translation>usage&#xa0;: import_outputs &lt;fichier&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4848"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6621"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6938"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6946"/>
        <source>amount is wrong: </source>
        <translation>montant erroné&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4849"/>
        <source>expected number from 0 to </source>
        <translation>attend un nombre de 0 à </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5272"/>
        <source>Sweeping </source>
        <translation>Balayage de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5879"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Fonds envoyés avec succès, transaction&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6028"/>
        <source>Change goes to more than one address</source>
        <translation>La monnaie rendue va à plus d&apos;une adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6071"/>
        <source>%s change to %s</source>
        <translation>%s de monnaie rendue à %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6074"/>
        <source>no change</source>
        <translation>sans monnaie rendue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6146"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transaction signée avec succès dans le fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6206"/>
        <source>usage: get_tx_key &lt;txid&gt;</source>
        <translation>usage&#xa0;: get_tx_key &lt;ID transaction&gt;</translation>
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
        <translation>échec de l&apos;analyse de l&apos;ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6227"/>
        <source>Tx key: </source>
        <translation>Clé de transaction&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6232"/>
        <source>no tx keys found for this txid</source>
        <translation>aucune clé de transaction trouvée pour cet ID de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6304"/>
        <source>usage: get_tx_proof &lt;txid&gt; &lt;address&gt; [&lt;message&gt;]</source>
        <translation>usage&#xa0;: get_tx_proof &lt;ID_transaction&gt; &lt;adresse&gt; [&lt;message&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6329"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6544"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6639"/>
        <source>signature file saved to: </source>
        <translation>fichier signature sauvegardé dans&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6331"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6546"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6641"/>
        <source>failed to save signature file</source>
        <translation>échec de la sauvegarde du fichier signature</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6345"/>
        <source>usage: check_tx_key &lt;txid&gt; &lt;txkey&gt; &lt;address&gt;</source>
        <translation>usage&#xa0;: check_tx_key &lt;ID transaction&gt; &lt;clé transaction&gt; &lt;adresse&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6377"/>
        <source>failed to parse tx key</source>
        <translation>échec de l&apos;analyse de la clé de transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6335"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6423"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6501"/>
        <source>error: </source>
        <translation>erreur&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6399"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source>received</source>
        <translation>a reçu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6399"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source>in txid</source>
        <translation>dans la transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6491"/>
        <source>received nothing in txid</source>
        <translation>n&apos;a rien reçu dans la transaction</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ATTENTION&#xa0;: cette transaction n&apos;est pas encore inclue dans la chaîne de blocs !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6408"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6481"/>
        <source>This transaction has %u confirmations</source>
        <translation>Cette transaction a %u confirmations</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6412"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6485"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ATTENTION&#xa0;: échec de la détermination du nombre de confirmations !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6788"/>
        <source>bad min_height parameter:</source>
        <translation>mauvais paramètre hauteur_minimum&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6800"/>
        <source>bad max_height parameter:</source>
        <translation>mauvais paramètre hauteur_maximum&#xa0;:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6821"/>
        <source>in</source>
        <translation>reçu</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6855"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>out</source>
        <translation>payé</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>failed</source>
        <translation>échoué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6907"/>
        <source>pending</source>
        <translation>en attente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6953"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;montant_minimum&gt; doit être inférieur à &lt;montant_maximum&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6985"/>
        <source>
Amount: </source>
        <translation>
Montant&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6985"/>
        <source>, number of keys: </source>
        <translation>, nombre de clés&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6990"/>
        <source> </source>
        <translation> </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6995"/>
        <source>
Min block height: </source>
        <translation>
Hauteur de bloc minimum&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6996"/>
        <source>
Max block height: </source>
        <translation>
Hauteur de bloc maximum&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6997"/>
        <source>
Min amount found: </source>
        <translation>
Montant minimum trouvé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6998"/>
        <source>
Max amount found: </source>
        <translation>
Montant maximum trouvé&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6999"/>
        <source>
Total count: </source>
        <translation>
Compte total&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7039"/>
        <source>
Bin size: </source>
        <translation>
Taille de classe&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7040"/>
        <source>
Outputs per *: </source>
        <translation>
Sorties par *&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7042"/>
        <source>count
  ^
</source>
        <translation>compte
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
        <translation>+--&gt; hauteur de bloc
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
        <translation>  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7097"/>
        <source>wallet</source>
        <translation>portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7511"/>
        <source>Random payment ID: </source>
        <translation>ID de paiement aléatoire&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7512"/>
        <source>Matching integrated address: </source>
        <translation>Adresse intégrée correspondante&#xa0;: </translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nom de fichier de base (des suffixes -1, -2 etc seront ajoutés si nécessaire)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Indiquer le seuil et les participants sous la forme M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Combien de participants partageront des parts du portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Combien de signataires sont requis pour signer une transaction valide</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create testnet multisig wallets</source>
        <translation>Créer des portefeuilles multisig testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Créer des portefeuilles multisig stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="76"/>
        <source>Create an address file for new wallets</source>
        <translation>Créer un fichier d&apos;adresse pour les nouveaux portefeuilles</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="83"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Génération de %u portefeuilles multisig %u/%u</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="107"/>
        <source>Failed to verify multisig info</source>
        <translation>Échec de la vérification des infos multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="142"/>
        <source>Error verifying multisig extra info</source>
        <translation>Erreur de vérification des infos multisig supplémentaires</translation>
    </message>
    <message>
        <source>Error finalizing multisig</source>
        <translation type="vanished">Erreur de finalisation multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="153"/>
        <source>Generated multisig wallets for address </source>
        <translation>Portefeuilles multisig générés pour l&apos;adresse </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="157"/>
        <source>Error creating multisig wallets: </source>
        <translation>Erreur de création des portefeuilles multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="182"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Ce programme génère un ensemble de portefeuilles multisig - n&apos;utilisez cette méthode plus simple que si tous les participants se font confiance</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="201"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Erreur: Impossible de spécifier plus d&apos;une option parmis --testnet et --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Erreur&#xa0;: N/M attendu, mais lu&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Erreur&#xa0;: soit --scheme soit --threshold et --participants doivent être indiqués</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="232"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Erreur&#xa0;: N &gt; 1 et N &lt;= M attendu, mais lu N==%u et M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="241"/>
        <source>Error: --filename-base is required</source>
        <translation>Erreur&#xa0;: --filename-base est requis</translation>
    </message>
    <message>
        <source>Error: unsupported scheme: only N/N and N-1/N are supported</source>
        <translation type="vanished">Erreur&#xa0;: schéma non supporté&#xa0;: seuls N/N et N-1/N sont supportés</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="120"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Générer un nouveau portefeuille et le sauvegarder dans &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="121"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Générer un nouveau portefeuille à partir de l&apos;appareil et le sauvegarder dans &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="122"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Générer un portefeuille d&apos;audit à partir d&apos;une clé d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="123"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Générer un portefeuille déterministe à partir d&apos;une clé de dépense</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="124"/>
        <source>Generate wallet from private keys</source>
        <translation>Générer un portefeuille à partir de clés privées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="125"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Générer un portefeuille principal à partir de clés de portefeuille multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="127"/>
        <source>Language for mnemonic</source>
        <translation>Langue de la phrase mnémonique</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="128"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Spécifier la phrase mnémonique Electrum pour la récupération/création d&apos;un portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="129"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Récupérer un portefeuille en utilisant une phrase mnémonique de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="130"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Récupérer un portefeuille multisig en utilisant une phrase mnémonique de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="131"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Générer des clés d&apos;audit et de dépense non déterministes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="134"/>
        <source>The newly created transaction will not be relayed to the unprll network</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="269"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>argument invalide : doit être soit 0/1, true/false, y/n, yes/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="325"/>
        <source>DNSSEC validation passed</source>
        <translation>Validation DNSSEC réussie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="329"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ATTENTION: la validation DNSSEC a échoué, cette adresse n&apos;est peut être pas correcte !</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="332"/>
        <source>For URL: </source>
        <translation>Pour l&apos;URL : </translation>
    </message>
    <message>
        <source> Monero Address = </source>
        <translation type="vanished"> Adresse Monero = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="336"/>
        <source>Is this OK? (Y/n) </source>
        <translation>Est-ce correct ? (Y/n) </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="346"/>
        <source>you have cancelled the transfer request</source>
        <translation>vous avez annulé la demande de transfert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="367"/>
        <source>failed to parse index: </source>
        <translation>échec de l&apos;analyse de l&apos;index&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="380"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>format invalide pour l&apos;anticipation des sous-addresses; doit être &lt;majeur&gt;:&lt;mineur&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="397"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>pas de connexion au démon. Veuillez vous assurer que le démon fonctionne.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="402"/>
        <source>RPC error: </source>
        <translation>Erreur RPC&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="406"/>
        <source>failed to get random outputs to mix: </source>
        <translation>échec de la récupération de sorties aléatoires à mélanger&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="421"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Pas assez de fonds dans le solde débloqué</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="431"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Impossible de trouver une façon de créer les transactions. Ceci est souvent dû à de la poussière si petite qu&apos;elle ne peut pas payer ses propres frais, ou à une tentative d&apos;envoi d&apos;un montant supérieur au solde débloqué, ou à un montant restant insuffisant pour payer les frais</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="437"/>
        <source>not enough outputs for specified ring size</source>
        <translation>pas assez de sorties pour la taille de cercle spécifiée</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="440"/>
        <source>output amount</source>
        <translation>montant de la sortie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="440"/>
        <source>found outputs to use</source>
        <translation>sorties à utiliser trouvées</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="442"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Veuillez utiliser sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="446"/>
        <source>transaction was not constructed</source>
        <translation>la transaction n&apos;a pas été construite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="451"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transaction %s a été rejetée par le démon avec le statut&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="454"/>
        <source>Reason: </source>
        <translation>Raison : </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="463"/>
        <source>one of destinations is zero</source>
        <translation>une des destinations est zéro</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="468"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>échec de la recherche d&apos;une façon adéquate de scinder les transactions</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="474"/>
        <source>unknown transfer error: </source>
        <translation>erreur de transfert inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="479"/>
        <source>Multisig error: </source>
        <translation>Erreur multisig&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="485"/>
        <source>internal error: </source>
        <translation>erreur interne&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="490"/>
        <source>unexpected error: </source>
        <translation>erreur inattendue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="494"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Il y a eu une erreur, ce qui pourrait signifier que le noeud essaye de vous faire réessayer de créer une transaction, pour tenter d&apos;identifier quelles sorties sont les votres. Ou il pourrait s&apos;agir d&apos;une erreur de bonne foi. Il pourrait être prudent de se déconnecter de ce noeud, et de ne pas essayer d&apos;envoyer une transaction immédiatement. Ou sinon, se connecter à un autre noeud pour que le noeud original ne puisse pas corréler les informations.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="504"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Le fichier %s contient probablement des clés privées de portefeuille ! Utilisez un nom de fichier différent.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="507"/>
        <source>File %s already exists. Are you sure to overwrite it? (Y/Yes/N/No): </source>
        <translation>Le fichier %s existe déjà. Êtes vous sûr de vouloir l&apos;écraser ? (Y/Yes/N/No) : </translation>
    </message>
    <message>
        <source> seconds</source>
        <translation type="vanished"> secondes</translation>
    </message>
    <message>
        <source> minutes</source>
        <translation type="vanished"> minutes</translation>
    </message>
    <message>
        <source> hours</source>
        <translation type="vanished"> heures</translation>
    </message>
    <message>
        <source> days</source>
        <translation type="vanished"> jours</translation>
    </message>
    <message>
        <source> months</source>
        <translation type="vanished"> mois</translation>
    </message>
    <message>
        <source>a long time</source>
        <translation type="vanished">longtemps</translation>
    </message>
    <message>
        <source>This is the command line monero wallet. It needs to connect to a monero
daemon to work correctly.
WARNING: Do not reuse your Monero keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation type="vanished">Ceci est le portefeuille monero en ligne de commande.
Il a besoin de se connecter à un démon monero pour fonctionner correctement.
ATTENTION : Ne réutilisez pas vos clés Monero avec un autre fork, À MOINS QUE ce fork inclue des mitigations contre la réutilisation des clés. Faire ceci nuira à votre confidentialité.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8266"/>
        <source>Unknown command: </source>
        <translation>Commande inconnue&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="132"/>
        <source>Allow communicating with a daemon that uses a different RPC version</source>
        <translation>Autoriser la communication avec un démon utilisant une version de RPC différente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="133"/>
        <source>Restore from specific blockchain height</source>
        <translation>Restaurer à partir d&apos;une hauteur de bloc spécifique</translation>
    </message>
    <message>
        <source>The newly created transaction will not be relayed to the monero network</source>
        <translation type="vanished">La transaction nouvellement créée ne sera pas transmise au réseau monero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="135"/>
        <source>Create an address file for new wallets</source>
        <translation>Créer un fichier d&apos;adresse pour les nouveaux portefeuilles</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="137"/>
        <source>Display English language names</source>
        <translation>Afficher les noms de langue en anglais</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184"/>
        <source>failed to read wallet password</source>
        <translation>échec de la lecture du mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Enter a new password for the wallet</source>
        <translation>Entrer un nouveau mot de passe pour le portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Wallet password</source>
        <translation>Mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="201"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="393"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>le démon est occupé. Veuillez réessayer plus tard.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="210"/>
        <source>possibly lost connection to daemon</source>
        <translation>connexion avec le démon peut-être perdue</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="227"/>
        <source>Error: </source>
        <translation>Erreur&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="334"/>
        <source> Unprll Address = </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8241"/>
        <source>This is the command line unprll wallet. It needs to connect to an unprll
daemon to work correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8260"/>
        <source>Failed to initialize wallet</source>
        <translation>Échec de l&apos;initialisation du portefeuille</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="181"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Utiliser l&apos;instance de démon située à &lt;hôte&gt;:&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="182"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Utiliser l&apos;instance de démon située à l&apos;hôte &lt;arg&gt; au lieu de localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="186"/>
        <source>Wallet password file</source>
        <translation>Fichier mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="187"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Utiliser l&apos;instance de démon située au port &lt;arg&gt; au lieu de 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="189"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Pour testnet, le démon doit aussi être lancé avec l&apos;option --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>impossible de spécifier l&apos;hôte ou le port du démon plus d&apos;une fois</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="330"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>impossible de spécifier plus d&apos;une option parmis --password et --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="343"/>
        <source>the password file specified could not be read</source>
        <translation>le fichier mot de passe spécifié n&apos;a pas pu être lu</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="369"/>
        <source>Failed to load file </source>
        <translation>Échec du chargement du fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="185"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Mot de passe du portefeuille (échapper/citer si nécessaire)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="183"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Activer les commandes qui dépendent d&apos;un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="184"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Désactiver les commandes qui dépendent d&apos;un démon de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="188"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Spécifier le nom_utilisateur:[mot_de_passe] pour le client RPC du démon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="190"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Pour stagenet, le démon doit aussi être lancé avec l&apos;option --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="192"/>
        <source>Set shared ring database path</source>
        <translation>Définir le chemin de la base de donnée de cercles partagés</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="203"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Nombre de rondes de la fonction de dérivation de clé</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="204"/>
        <source>HW device to use</source>
        <translation>Portefeuille matériel à utiliser</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="290"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon et --untrusted-daemon présents simultanément, --untrusted-daemon choisi</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="300"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Le démon est local, supposons qu&apos;il est de confiance</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="350"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>pas de mot de passe spécifié; utilisez --prompt-for-password pour demander un mot de passe</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="352"/>
        <source>Enter a new password for the wallet</source>
        <translation>Entrer un nouveau mot de passe pour le portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="352"/>
        <source>Wallet password</source>
        <translation>Mot de passe du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375"/>
        <source>Failed to parse JSON</source>
        <translation>Échec de l&apos;analyse JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="382"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u trop récente, on comprend au mieux %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="398"/>
        <source>failed to parse view key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="403"/>
        <location filename="../src/wallet/wallet2.cpp" line="471"/>
        <location filename="../src/wallet/wallet2.cpp" line="514"/>
        <source>failed to verify view key secret key</source>
        <translation>échec de la vérification de la clé secrète d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="414"/>
        <source>failed to parse spend key secret key</source>
        <translation>échec de l&apos;analyse de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="419"/>
        <location filename="../src/wallet/wallet2.cpp" line="481"/>
        <location filename="../src/wallet/wallet2.cpp" line="540"/>
        <source>failed to verify spend key secret key</source>
        <translation>échec de la vérification de la clé secrète de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="431"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Échec de la vérification de la liste de mots de style Electrum</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="451"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Il faut spécifier au moins une des options parmis la liste de mots de style Electrum, la clé privée d&apos;audit et la clé privée de dépense</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="455"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Liste de mots de style Electrum et clé privée spécifiées en même temps</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="465"/>
        <source>invalid address</source>
        <translation>adresse invalide</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="474"/>
        <source>view key does not match standard address</source>
        <translation>la clé d&apos;audit ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="484"/>
        <source>spend key does not match standard address</source>
        <translation>la clé de dépense ne correspond pas à l&apos;adresse standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="492"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Impossible de générer un portefeuille obsolète à partir de JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="526"/>
        <source>failed to parse address: </source>
        <translation>échec de l&apos;analyse de l&apos;adresse&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>L&apos;adresse doit être spécifiée afin de créer un portefeuille d&apos;audit</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="549"/>
        <source>failed to generate new wallet: </source>
        <translation>échec de la génération du nouveau portefeuille&#xa0;: </translation>
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
        <source>Password is needed to compute key image for incoming monero</source>
        <translation type="vanished">Le mot de passe est requis pour calculer l&apos;image de clé pour les moneros entrants</translation>
    </message>
    <message>
        <source>Invalid password: password is needed to compute key image for incoming monero</source>
        <translation type="vanished">Mot de passe invalide : le mot de passe est requis pour calculer l&apos;image de clé pour les moneros entrants</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3565"/>
        <location filename="../src/wallet/wallet2.cpp" line="4150"/>
        <location filename="../src/wallet/wallet2.cpp" line="4688"/>
        <source>Primary account</source>
        <translation>Compte primaire</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9789"/>
        <source>No funds received in this tx.</source>
        <translation>Aucun fonds n&apos;a été reçu dans cette transaction.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="10502"/>
        <source>failed to read file </source>
        <translation>échec de la lecture du fichier </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="136"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Définir les tailles d&apos;anticipation des sous-addresses à &lt;majeur&gt;:&lt;mineur&gt;</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="180"/>
        <source>Failed to create directory </source>
        <translation>Échec de la création du répertoire </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="182"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Échec de la création du répertoire %s&#xa0;: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source>Cannot specify --</source>
        <translation>Impossible de spécifier --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="193"/>
        <source> and --</source>
        <translation> et --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>Failed to create file </source>
        <translation>Échec de la création du fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="212"/>
        <source>. Check permissions or remove file</source>
        <translation>. Vérifiez les permissions ou supprimez le fichier</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="222"/>
        <source>Error writing to file </source>
        <translation>Erreur d&apos;écriture dans le fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="225"/>
        <source>RPC username/password is stored in file </source>
        <translation>nom_utilisateur/mot_de_passe RPC sauvegardé dans le fichier </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="478"/>
        <source>Tag %s is unregistered.</source>
        <translation>Le mot clé %s n&apos;est pas enregistré.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="2848"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transaction impossible. Solde disponible&#xa0;: %s, montant de la transaction %s = %s + %s (frais)</translation>
    </message>
    <message>
        <source>This is the RPC monero wallet. It needs to connect to a monero
daemon to work correctly.</source>
        <translation type="vanished">Ceci est le portefeuille monero par RPC. Il a besoin de se
connecter à un démon monero pour fonctionner correctement.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3356"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Impossible de spécifier plus d&apos;une option parmis --wallet-file et --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3341"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Impossible de spécifier plus d&apos;une option parmis --testnet et --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3368"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>--wallet-file, --generate-from-json ou --wallet-dir doit être spécifié</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3372"/>
        <source>Loading wallet...</source>
        <translation>Chargement du portefeuille...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3406"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3438"/>
        <source>Saving wallet...</source>
        <translation>Sauvegarde du portefeuille...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3408"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3440"/>
        <source>Successfully saved</source>
        <translation>Sauvegardé avec succès</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3411"/>
        <source>Successfully loaded</source>
        <translation>Chargé avec succès</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3415"/>
        <source>Wallet initialization failed: </source>
        <translation>Échec de l&apos;initialisation du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3421"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Échec de l&apos;initialisation du serveur RPC du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3425"/>
        <source>Starting wallet RPC server</source>
        <translation>Démarrage du serveur RPC du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3432"/>
        <source>Failed to run wallet: </source>
        <translation>Échec du lancement du portefeuille&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3435"/>
        <source>Stopped wallet RPC server</source>
        <translation>Arrêt du serveur RPC du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3444"/>
        <source>Failed to save wallet: </source>
        <translation>Échec de la sauvegarde du portefeuille&#xa0;: </translation>
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
        <translation>Options du portefeuille</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Générer un portefeuille à partir d&apos;un fichier au format JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Utiliser le portefeuille &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="105"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Nombre maximum de threads à utiliser pour les travaux en parallèle</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="106"/>
        <source>Specify log file</source>
        <translation>Spécifier le fichier journal</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="107"/>
        <source>Config file</source>
        <translation>Fichier de configuration</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="119"/>
        <source>General options</source>
        <translation>Options générales</translation>
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
        <translation type="vanished">Ceci est le portefeuille monero en ligne de commande. Il a besoin de se
connecter à un démon monero pour fonctionner correctement.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="168"/>
        <source>Can&apos;t find config file </source>
        <translation>Impossible de trouver le fichier de configuration </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="209"/>
        <source>Logging to: </source>
        <translation>Journalisation dans&#xa0;: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="211"/>
        <source>Logging to %s</source>
        <translation>Journalisation dans %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="146"/>
        <source>Usage:</source>
        <translation>Usage&#xa0;:</translation>
    </message>
</context>
</TS>
