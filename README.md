# StaySafe
 
Der Online-Shop Stay Safe ist eine Webanwendung, in welcher der Verwalter des Online-Shops die Bestellliste verwalten und bearbeiten kann. 
Für das Frontend wurde Angular verwendet und für das Backend wurde node.js genutz. Für die Datenbank wurde MySQL verwendet und für das Layout 
wurde Bootstrap genutzt. Beim Öffnen des Online-Shops, gelangt man als aller erstes auf die Shop Seite. Hier werden Produkte aufgelistet, die man 
dann in den Warenkorb hinzufügen kann. Warum haben wir uns für den Namen "StaySafe" entschieden? Weil der Online-Shop ausschließlich hygiene Artikel wie
z.B. Masken oder Desinfektionsmittel zum Verkauf anbietet. Wir haben das Theme des Online-Shops im Bezug auf die aktuelle Situation entwickelt, um den Kunden
eine Plattform zu bieten, sich Produkte im Bereich der Hygiene zu kaufen, um "sicher" vor Infektionen zu sein. 
Weiterhin gibt es in der oberen rechten Leiste den "Anmelden" Button, sowie den "Registrieren" Button. Bei der Anmeldung, ist nur eine Anmeldung möglich,
wenn der Nutzername und das Passwort schon registriert sind. Daher kann sich nicht jeder einloggen. Bei dem Versuch sich mit einem nicht registrierten
Benutzernamen anzumelden, erscheint ein roter Hinweis, dass man sich nicht anmelden kann. Wenn man jedoch die registrierten Benuterdaten eingibt,
jedoch den Namen oder das Passwort falsch ist, erscheint ebenfalls der Hinweis, dass der Benutzername und das Passwort nicht übereinstimmen.
Bei den richtigen Daten kann man sich ganz einfach einloggen. Wenn man dann auf den Button "Registrieren" klickt, steht eine Meldung, dass man bereits 
eingeloggt ist und unter dieser Meldung ist ein Button, der zum Ausloggen animiert. 
In der Registrierung vergibt man sich einen NutzerInnennamen, ein Passwort und gibt seine E-Mail-Adresse an. 
Es ist notwendig, ein Verwalterkonto zu haben und sich anzumelden, da man ansonsten keinen Zugriff auf die Bestell-liste bekommt.
Die Bestell-liste befindet sich in den Bestellungen. Dieser Button befindet sich ebenfalls oben rechts neben dem 
Anmelde- und Registrierungs-Button. Alle gespeicherten Bestellungen von den Kunden sind in einer Tabelle ersichtlich.
Hier sind alle Kundendaten nach der ID des Kunden aufgelistet mit den Angaben zum Vornamen, Nachnamen, E-Mail Adresse und die Bestellungs-Nummer.
Hier hat der Verwalter nun die Möglichkeit, sich alle Bestellungen die eingegangen sind, anzuschauen oder bei Bedarf die Kundenbestellung zu bearbeiten. 
Unter Bearbeiten befindet sich ein Bearbeitungs-Button, der die Möglichkeit bietet entweder den Vornamen, Nachnamen, E-Mail Adresse oder die Bestellungs-
Nummer zu bearbeiten. Nach dem die Bestellung registriert und das Paket ageschickt wurde, hat der Verwalter nun die Möglichkeit den Kunden aus den Bestellungen
zu löschen, da die Bestellung schon verarbeitet und verschickt wurde. Man kann einen Kunden aus der Liste löschen, indem man in der Spalte "Löschen" auf das Icon
klickt. Daraufhin öffnet sich ein modaler Dialog, in welchem die Löschung noch einmal bestätigt werden muss, aber auch abgebrochen werden kann. 
Der Verwalter kann aber auch einen Kunden in die Bestellung hinzufügen. Neben der "Löschen" Spalte befindet sich ein "Erstellen" Button.
Wenn man nun auf Erstellen klickt, gelangt man auf eine extra Seite, wo man bei Angabe von Vorname, Nachname, E-Mail Adresse und einer Bestell-Nummer einen 
neuen Kunden in die Bestell-Liste hinzufügen kann. 
Ziel ist es, dass der Verwalter eine grobe Übersicht über die ganzen Bestellungen hat und somit verwalten kann, welche Bestellungen abgesendet werden 
müssen und welche schon abgesendet sind. 
