# Laut- und Silbenwelt – Wortdatenbank (Option A)

Die App verwendet die zentrale Datei [wordbank.js](wordbank.js) mit **29 redaktionellen Wortdatensätzen**. Davon sind aktuell nur mit `reviewStatus: "core"` markierte Wörter aktiv. Die Einstufung ist eine Vorprüfung, **kein empirischer Nachweis** eindeutiger Benennbarkeit bei Erstklässlern.

Jeder Datensatz enthält: `id`, `word`, `initial` (Schreibweise: zum Beispiel `Au`, nicht zwangsläufig ein einzelner Laut), `syllables`, `image`, `audio`, `fallbackEmoji`, `reviewStatus`, `reviewNote`, `uses`, `startLevel`.

## Eigene Medien ergänzen

- Bild zu »Apfel«: `media/images/apfel.svg`
- Gesprochene Aufnahme: `media/audio/apfel.mp3`
- Dateipfade in der Wortbank ändern, wenn die Medien anders heißen.
- Momentan sind **keine** dieser Bild- oder Audio-Dateien enthalten: Die App zeigt automatisch ein Emoji bzw. nutzt die Browser-Sprachausgabe.
- Für den späteren Schuleinsatz: freigestellte Illustrationen mit neutralem Hintergrund, ein Objekt pro Motiv, keine Schrift. Prüfen, ob Kinder das gleiche Wort spontan benennen.
- Die Tonaufnahme sollte das ganze Wort mit natürlicher Aussprache enthalten. Keine künstlich verlängerten isolierten Konsonanten.

## Didaktische Prüffragen

1. Benennen mindestens einige Kinder das Bild ohne Hilfestellung mit dem vorgesehenen Wort? Alternative Bezeichnungen erfassen.
2. Trifft der Aufgabenmodus wirklich die Kompetenz? »Buchstaben wählen« prüft zusätzlich Graphemkenntnis; »Silben lesen« zusätzlich Schriftkenntnis.
3. Werden ähnlich klingende Anlaute oder Mehrdeutigkeiten bewusst als Schwierigkeit eingesetzt statt zufällig?
4. Hat das Wort eine stabile Silbenzahl und ist es den Kindern bekannt?
5. Ist die Aufnahme geräteübergreifend verständlich, gut hörbar und konsistent?

**Besonderheit**: `Sonne` beginnt im Standarddeutschen mit stimmhaftem /z/. `Auto` beginnt mit dem Diphthong /aʊ/. Diese Unterschiede sind bei späterer Einführung phonologischer Kategorien zu beachten.

## Veröffentlichung

GitHub Pages auf `main` und `/ (root)` aktivieren. App: https://alleng-commits.github.io/mathestars100/laut-und-silbenwelt/

## Offene Aufgaben

Bildset und Sprachaufnahmen erstellen und rechtlich freigeben; Wörter in einer Klasse auf spontane Benennbarkeit testen; danach `reviewStatus` für geprüfte Wörter anpassen. Speicherung bleibt lokal im Browser.
