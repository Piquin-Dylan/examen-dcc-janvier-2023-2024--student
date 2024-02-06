# Monster-Game

> DCC-Prüfung — Januar 2024

## Präambel

1. Im Rahmen dieses *Client-Seitigen Entwicklung* Examens sollst du dich ausschließlich auf JavaScript-Dateien konzentrieren. Abgesehen davon, eine `script`-Tag hinzuzufügen oder zu ändern, wird nicht erwartet, dass du den HTML-Code oder den zugehörigen CSS-Code änderst.
2. Die Prüfung dauert *maximal 4 Stunden*.
3. Du sollst [die in der Klasse besprochenen Best Practices](https://github.com/hepl-dcc/dcc-guidelines) beachten.
4. Alle CSS-Selektoren, die du benötigst (um DOM-Elemente zu zielen), sowie die Spielparameter sind im `settings`-Objekt in der Datei `src/js/settings.js` definiert.
5. Du kannst die Prüfung bei Bedarf auch in TypeScript durchführen.

## Aufgabenstellung 🎯

1. **Initialisierung einiger Daten:**

    1. Erstelle eine Klasse `Player` mit zwei Eigenschaften: den Namen (`name`), der dem Konstruktor als Parameter übergeben wird, und der Gesundheit (`health`), die auf 100 initialisiert wird (siehe `settings.health_max_value`).
    2. Deklariere ein Array mit zwei Spielern in der Reihenfolge mit den jeweiligen Namen `You` (siehe `settings.defaultPlayerName1`) und `Monster` (siehe `settings.defaultPlayerName2`).
    
2. **Einreichen des Formulars `#play-game` :**

    1. Aktualisiere den Namen des ersten Spielers im Array (`players[0].name`) unter Verwendung des Werts des Eingabefelds, z.B.: `event.currentTarget.querySelector('input').value`. 👌

    2. Aktualisiere den Textinhalt der Karte des ersten Spielers mit der ID `#player-name` (siehe `strings.playerNameId`).

    3. Blende das Formular aus, indem du die Klasse `visuallyhidden` hinzufügst.

    4. Blende das Element `div.controls` ein, indem du der Div-Klasse `visuallyhidden` entfernst.

       ![Einreichen-des-Formulars-play-game](./img/Einreichen-des-Formulars-play-game.gif)

3. **Event-Listener auf die Schaltfläche `#attack` :**

    Wenn darauf geklickt wird, füge der Gesundheit jedes Spielers eine zufällige Zahl zwischen 0 und -7 hinzu (siehe `settings.actions.attack.max_impact`).

    ![Event-Listener-auf-die-Schaltfläche-attack](img/Event-Listener-auf-die-Schaltfläche-attack.gif)

4. **Event-Listener auf die Schaltfläche `#special-attack` :**

    Wenn darauf geklickt wird, füge der Gesundheit jedes Spielers eine zufällige Zahl zwischen 0 und -14 hinzu (siehe `settings.actions.special_attack.max_impact`).

    ![Event-Listener-auf-die-Schaltfläche-special-attack](img/Event-Listener-auf-die-Schaltfläche-special-attack.gif)

5. **Event-Listener auf die Schaltfläche `#heal` :**

    Wenn darauf geklickt wird, füge der Gesundheit jedes Spielers eine zufällige Zahl zwischen 0 und +7 hinzu (siehe `settings.actions.heal.max_impact`).

    ![Event-Listener-auf-die-Schaltfläche-heal](img/Event-Listener-auf-die-Schaltfläche-heal.gif)

6. **Generische Funktion für die Schaltflächen :**

    Erstelle eine generische Funktion, die das Attribut `data-name` der Schaltfläche verwendet, um auf das entsprechende Objekt in `settings.actions` zuzugreifen. Versuche, die drei vorhandenen Funktionen in eine einzige zu kondensieren. Wenn du eine generische Funktion hast, die bei einem Klick ausgeführt wird, gibt dir der Ausdruck `settings.actions[event.currentTarget.dataset.name].max_impact` den maximalen Wert abhängig von der gerade geklickten Schaltfläche.

7. **Überprüfung des Todes der Spieler :**
   In der generischen Funktion überprüfe, ob einer der Spieler gestorben ist. Wenn ja:

   1. Zeige das Formular `#play-game` an (entferne die Klasse `visuallyhidden`).
   2. Verstecke die `div.controls` (füge die Klasse `visuallyhidden` hinzu).
   3. Füge dem Formular `#play-game` eine Nachricht hinzu, die den Verlierer angibt (verwende `settings.messages.lost()`).

    ![Überprüfung-des-Todes-der-Spieler](img/Überprüfung-des-Todes-der-Spieler.gif)

8. **Überprüfung der Schaltfläche "give-up" :**

    In der generischen Funktion überprüfe, ob die geklickte Schaltfläche das Attribut `data-name="give-up"` hat.
    - Wenn ja, führe die gleichen Aktionen wie bei der Überprüfung des Todes der Spieler durch.

    ![Überprüfung-der-Schaltfläche-give-up](img/Überprüfung-der-Schaltfläche-give-up.gif)
## Klassen und IDs der HTML-Elemente
Hier ist eine annotierte Bildschirmaufnahme mit Informationen zu den Klassen und IDs der HTML-Elemente.
    ![HTML-Info](img/HTML-Info.png)

## Bonus 👌

9. **Einreichen des Formulars nach dem Ende des Spiels:**

    1. Setze die Gesundheit beider Spieler auf 100 zurück (siehe `settings.health_max_value`).
    2. Entferne die Nachricht `p.log__item` aus dem Formular.
    3. Verstecke das Formular `#play-game` (entferne die Klasse `visuallyhidden`).
    4. Zeige die `div.controls` an (füge der Div-Klasse `visuallyhidden` hinzu).

    ![soumission-du-formulaire-apres-la-fin-du-jeu](../examen-dcc-janvier-2023-2024/img/soumission-du-formulaire-apres-la-fin-du-jeu.gif)