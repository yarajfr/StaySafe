# StaySafe
 
Der Online-Shop Stay Safe ist eine Webanwendung, in welcher der Verwalter des Online-Shops die Bestellliste verwalten und bearbeiten kann. Außerdem ist der Online-Shop für Kunden verfügbar, die Produkte aus dem Shop kaufen möchten. 
Für das Frontend wurde Angular verwendet und für das Backend wurde node.js genutzt. Für die Datenbank wurde MySQL verwendet und für das Layout 
wurde Bootstrap genutzt. Beim Öffnen des Online-Shops, gelangt man als aller erstes auf die Shop Seite. Hier werden Produkte aufgelistet, die man 
dann in den Warenkorb hinzufügen kann. Warum haben wir uns für den Namen "StaySafe" entschieden? Weil der Online-Shop ausschließlich hygiene Artikel wie
z.B. Masken oder Desinfektionsmittel zum Verkauf anbietet. Wir haben das Theme des Online-Shops im Bezug auf die aktuelle Situation entwickelt, um den Kunden
eine Plattform zu bieten, sich Produkte im Bereich der Hygiene zu kaufen, um "sicher" vor Infektionen zu sein. 
Weiterhin gibt es in der oberen rechten Leiste den "Anmelden" Button, sowie den "Registrieren" Button. Bei der Anmeldung, ist nur eine Anmeldung möglich,
wenn der Nutzername und das Passwort schon registriert sind. Daher kann sich nicht jeder einloggen. Bei dem Versuch sich mit einem nicht registrierten
Benutzernamen anzumelden, erscheint ein roter Hinweis, dass man sich nicht anmelden kann. Wenn man jedoch die registrierten Benutzerdaten eingibt,
jedoch den Namen oder das Passwort falsch ist, erscheint ebenfalls der Hinweis, dass der Benutzername und das Passwort nicht übereinstimmen.
Bei den richtigen Daten kann man sich ganz einfach einloggen. Wenn man dann auf den Button "Registrieren" klickt, steht eine Meldung, dass man bereits 
eingeloggt ist und unter dieser Meldung ist ein Button, der zum Ausloggen animiert. 
In der Registrierung vergibt man sich einen NutzerInnennamen, ein Passwort und gibt seine E-Mail-Adresse an. 
Es ist notwendig, ein Verwalterkonto zu haben und sich anzumelden, da man ansonsten keinen Zugriff auf die Bestell-liste bekommt.
Die Bestell-liste befindet sich in den Bestellungen. Dieser Button befindet sich ebenfalls oben rechts neben dem 
Anmelde- und Registrierungs-Button. Alle gespeicherten Bestellungen von Kunden sind in einer Tabelle ersichtlich.
Hier sind alle Kundendaten nach der ID des Kunden aufgelistet mit den Angaben zum Vornamen, Nachnamen, E-Mail Adresse und die Bestellungs-Nummer.
Hier hat der Verwalter nun die Möglichkeit, sich alle Bestellungen die eingegangen sind, anzuschauen oder bei Bedarf die Kundenbestellung zu bearbeiten. 
Unter Bearbeiten befindet sich ein Bearbeitungs-Button, der die Möglichkeit bietet entweder den Vornamen, Nachnamen, E-Mail Adresse oder die Bestellungs-
Nummer zu bearbeiten. Nach dem die Bestellung registriert und das Paket ageschickt wurde, hat der Verwalter nun die Möglichkeit den Kunden aus den Bestellungen
zu löschen, da die Bestellung schon verarbeitet und verschickt wurde. Man kann einen Kunden aus der Liste löschen, indem man in der Spalte "Löschen" auf das Icon
klickt. Daraufhin öffnet sich ein modaler Dialog, in welchem die Löschung noch einmal bestätigt werden muss, aber auch abgebrochen werden kann. 
Der Verwalter kann aber auch einen Kunden in die Bestellung hinzufügen. Neben der "Löschen" Spalte befindet sich ein "Erstellen" Button.
Wenn man nun auf "Erstellen" klickt, gelangt man auf eine extra Seite, wo man bei Angabe von Vorname, Nachname, E-Mail Adresse und einer Bestell-Nummer einen 
neuen Kunden in die Bestell-Liste hinzufügen kann. 
Ziel ist es, dass der Verwalter eine grobe Übersicht über die ganzen Bestellungen hat und somit verwalten kann, welche Bestellungen abgesendet werden 
müssen und welche schon abgesendet sind. 



# Aufbau der Webanwendung

Für das Frontend wurde Angular genutzt, für das Backend wurde Node.js genutzt, für die Datenbank wurde MySQL genutzt und für das Design wurde Bootstrap genutzt.
Wenn der/die NutzerIn oder der/die VerwalterIn eine Aktion in der Anwendung tätigt, stellt das Frontend eine Anfrage an das Backend, welches wiederum auf die Datenbank zugreift. Nach dem Zugriff wird eine Antwort von dem Backend an das Frontend gesendet und das Ergebnis für den/die NutzerIn sichtbar. Dementsprechend sind im Ordner shared und services die Schnittstellen zwischen Backend und Frontend hinterlegt, sowie das Interface und die CRUD-Funktionen der Bestellungen und die Funktion zum Anmelden und Registrieren eines/einer NutzerIn. 
Die Produkte (Bild, Beschreibung, Preis), die Kundendaten, sowie die Nutzerdaten sind Daten die aus der Datenbank entnommen werden. Des weiteren liegen im Frontend-Ordner die Ordner "orders" und "staysafe". In dem Staysafe Ordner befinden sich die Ordner cart, checkout, filters, login, register und productlist. Der Shop ist aufgeteilt in Filter, Productlist und Cart. Links befindet sich ein Filter der die Produkte bei bestimmten Angaben herausfiltert. In der Mitte befindet ist die Productlist, welche die Produkte anzeigt und rechts befindet sich der Warenkorb. Sobald bei einem Produkt auf "hinzufügen" geklickt wird, wird der Preis im Warenkorb angezeigt und sobald ein weiteres Produkt hinzugefügt wird, ändert sich die Summe zu einem Endbetrag der aus den addierten Preisen berechnet wurde. Die Ordner "footer", "header" und " nav" befinden sich im "shared" Ordner. Sie sind das Grundgerüst der Webanwendung. Die CRUD Funktionen befinden sich im "orders" Ordner.
Im Backend-Ordner befinden sich die Funktionen für die Zugriffe auf die Datenbank. Dies betrifft sowohl die CRUD-Funktionen der Bestellungen als auch Anmeldung und Registrierung eines/einer NutzerIn oder eines/einer VerwalterIn. Außerdem befinden sich ebenfalls die Funktionen für die Produkte des Shops, als auch die Funktion des Warenkorbs. Diese werden im "staysafe" Ordner und im "Login" Ordner  unterteilt. Im "staysafe" Ordner gibt es eine weitere Unterteilung zum "orders" Ordner. Im DB-Ordner sind die Zugangsdaten der Datenbank zu finden. 


# Einrichtung zum Los-Starten: 

Damit das Projekt auf Ihrem Rechner läuft, befolgen Sie folgende Schritte: 

1. Geben Sie den Befehl git clone https://github.com/yarajfr/StaySafe.git in ihre Konsole ein. 

2. Danach benötigen Sie noch die Datenbank. Die Datenbank heißt: "StaySafe" und beinhaltet die Tabellen cart, orders, product und users.
cart = Warenkorb, orders = Bestellungen, product = Produkte und users = Nutzerdaten.

Die Tabelle cart enthält die Spalten Id, productId, productName, menge und preis. Die Id ist das Schlüsselattribut. In dieser Tabelle sind die Daten der Produkte im Warenkorb.

Die Tabelle orders enthält die Spalten Id, firstname, lastname, email und orderNr. Die Id ist das Schlüsselattribut. In dieser Tabelle sind die Daten der Kunden die bestellt haben. 

Die Tabelle product enthält die Spalten Id, image, description, artikelbez, artikelnr, preis und quantity. Die Id ist das Schlüsselattribut. In dieser Tabelle sind die Produkte des Online-Shops.

Die Tabelle users enthält die Spalten Id, username, email und password. Die Id ist das Schlüsselattribut. In dieser Tabelle sind die Daten der Kunden die bestellt haben. In dieser Tabelle werden die VerwalterInnen eingetragen.

3. Nachdem Sie die Datenbanken angelegt haben, starten Sie das Projekt, indem Sie in einem Terminalfenster in den Ordner backend gehen und dort node server.js eingeben.
In einem zweiten Terminalfenster navigieren Sie in den Ordner frontend und geben ng serve ein. 

In Ihrem Browser starten Sie nun localhost:4200 und können die Webanwendung nutzen.



# Creators: 

Yara Jaafar und Dana Khreis

