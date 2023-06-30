# Feuchtgebiete in Hamburg
#### Korvin Venzke & Niklas Danda | Geodateninfrastrukturen, Mai 2023
Diese interaktive Karte gibt Ihnen die Möglichkeit, die unterschiedlichsten Informationen über Gewässer, Moore und Feuchtgebiete im Allgemeinen, insbesondere im Raum Hamburg, zu erfahren.


### Start
Zum Ausführen der ```index.html``` Datei, ist es notwendig, _VisualStudioCode_ sowie die Erweiterung _Live Server_ installiert zu haben.  
Damit der Layer "Stadtteile HH" geladen werden kann, muss man sich im Netzwerk der HafenCity Universität Hamburg befinden. Alternativ geht das Einrichten eines VPN-Client (bspw.: Cisco).



### Layer  
1. Feuchtgebiete
   - Moore
     - Hier ist von oberflächennahen Torfen bis Bodenaufschüttungen alles zu den Hamburger Mooren zu sehen.   
   - Gewässer
     - Ob Wasserschutzgebiete oder Badegewässer, das ist in dieser Kategorie zu finden.   
     - Ebenso wie sämtliche Pegelstände an deutschen Flüssen, welche regelmäßig aktualisiert werden.   
2. Add Ons
   - In dieser Kategorie ist ein Sammelsurium an verschiedenen Layern zu finden.
   - Klicken Sie doch einmal auf eine Stelle in dem Layer und lassen Sie sich nützliche Informationen über Ihre Auswahl anzeigen!
3. Base Maps
   - Hier sind die unterschiedlichsten Hintergrundkarten vereint.
   - Ob Satellit, Standard OSM oder "Dark Mode".

### Web
Online ist die Karte unter folgendem Link aufrufbar (allerdings ohne den Layer "Stadtteile HH"):
https://niklasdanda.github.io/GDI_Venzke_Danda/



### Erweiterung für Lokal
Die lokalen Layer wurden aus den Daten generiert, die für Aufgabe 1 verwendet wurden. Aus diesem Grund wurde bewusst eine Ergänzung des READMEs vorgenommen.

### Daten
Die lokal gehosteten Daten umfassen die Stockwerke der HCU, die Stadtteile Hamburgs, das Bundesland Hamburg, zur Herstellung einer Verbindung zu den Feuchtgebieten, die Wasserschutzgebiete der Hansestadt Hamburg. Diese Layer sind unter dem Abschnitt "Lokal" zu finden. Diese Daten können nur genutzt werden, wenn Docker aktiv ist.

### Erstellen und stylen der lokalen WMS
Zur Erstellung der lokalen Layer ist es erforderlich, Shape-Dateien zu erhalten. Zu diesem Zweck wurde QGIS verwendet, um beispielsweise GeoJSON in Shape-Dateien umzuwandeln. In Docker wurde ein neuer Container erstellt und GeoServer integriert. Vor dem Start des GeoServers muss der Ordner "geoserver" erstellt werden. Die Shape-Dateien werden in einem zuvor erstellten Ordner im Verzeichnis C:/geoserver/data abgelegt. In GeoServer wird ein neuer Workspace und Store angelegt. Anschließend können neue Layer geladen und gestaltet werden. Um die Layer entsprechend anzupassen, muss die Style-Datei je nach Bedarf modifiziert werden.





