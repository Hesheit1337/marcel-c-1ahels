export interface Explanation {
  id: string;
  klasse: 1 | 2; // 1 = 1. Klasse, 2 = 2. Klasse
  title: string;
  icon: string;
  content: string;
  codeExample?: string;
}

export const explanations: Explanation[] = [
  {
    id: "variablen",
    klasse: 1,
    title: "Variablen in C",
    icon: "📦",
    content: `# Variablen in C

Variablen sind Container zum Speichern von Daten. In C musst du immer den Datentyp angeben.

## Wichtige Datentypen:

- **int**: Ganze Zahlen (z.B. 5, -10, 42)
- **float**: Kommazahlen (z.B. 3.14, -0.5)
- **char**: Einzelne Zeichen (z.B. 'A', 'x')
- **double**: Kommazahlen mit höherer Genauigkeit

## Deklaration und Initialisierung:

Eine Variable wird deklariert, indem man den Typ und Namen angibt:
\`\`\`c
int alter;           // Deklaration
alter = 25;          // Initialisierung
\`\`\`

Oder beides zusammen:
\`\`\`c
int alter = 25;      // Deklaration + Initialisierung
\`\`\``,
    codeExample: `#include <stdio.h>

int main() {
    // Verschiedene Variablentypen
    int ganze_zahl = 42;
    float kommazahl = 3.14;
    char buchstabe = 'A';
    
    printf("Ganze Zahl: %d\\n", ganze_zahl);
    printf("Kommazahl: %.2f\\n", kommazahl);
    printf("Buchstabe: %c\\n", buchstabe);
    
    return 0;
}`
  },
  {
    id: "if-else",
    klasse: 1,
    title: "If-Else Bedingungen",
    icon: "🔀",
    content: `# If-Else Bedingungen

Mit if-else kannst du Entscheidungen in deinem Programm treffen.

## Grundstruktur:

\`\`\`c
if (Bedingung) {
    // Code wird ausgeführt, wenn Bedingung wahr ist
} else {
    // Code wird ausgeführt, wenn Bedingung falsch ist
}
\`\`\`

## Vergleichsoperatoren:

- **==** : gleich
- **!=** : ungleich
- **>** : größer als
- **<** : kleiner als
- **>=** : größer oder gleich
- **<=** : kleiner oder gleich

## Logische Operatoren:

- **&&** : UND (beide Bedingungen müssen wahr sein)
- **||** : ODER (mindestens eine Bedingung muss wahr sein)
- **!** : NICHT (kehrt die Bedingung um)

## Wahrheitstabellen:

### UND (&&):
- true && true = **true**
- true && false = **false**
- false && true = **false**
- false && false = **false**

### ODER (||):
- true || true = **true**
- true || false = **true**
- false || true = **true**
- false || false = **false**

### NICHT (!):
- !true = **false**
- !false = **true**`,
    codeExample: `#include <stdio.h>

int main() {
    int alter = 18;
    
    if (alter >= 18) {
        printf("Du bist volljährig!\\n");
    } else {
        printf("Du bist noch minderjährig.\\n");
    }
    
    // Mehrere Bedingungen mit else if
    int punkte = 85;
    
    if (punkte >= 90) {
        printf("Note: Sehr gut\\n");
    } else if (punkte >= 80) {
        printf("Note: Gut\\n");
    } else if (punkte >= 70) {
        printf("Note: Befriedigend\\n");
    } else {
        printf("Note: Nicht bestanden\\n");
    }
    
    return 0;
}`
  },
  {
    id: "schleifen",
    klasse: 1,
    title: "Schleifen (Loops)",
    icon: "🔁",
    content: `# Schleifen in C

Schleifen wiederholen Code mehrmals. Es gibt drei Haupttypen:

## 1. For-Schleife

Wird verwendet, wenn du weißt, wie oft etwas wiederholt werden soll:

\`\`\`c
for (int i = 0; i < 10; i++) {
    // Code wird 10 Mal ausgeführt
}
\`\`\`

**Aufbau:**
- \`int i = 0\`: Startwert (Initialisierung)
- \`i < 10\`: Bedingung (solange wahr, läuft die Schleife)
- \`i++\`: Schrittweite (wird nach jedem Durchlauf ausgeführt)

## 2. While-Schleife

Wird verwendet, wenn du nicht weißt, wie oft wiederholt werden soll:

\`\`\`c
while (Bedingung) {
    // Code wird ausgeführt, solange Bedingung wahr ist
}
\`\`\`

## 3. Do-While-Schleife

Wie while, aber der Code wird mindestens einmal ausgeführt:

\`\`\`c
do {
    // Code wird mindestens einmal ausgeführt
} while (Bedingung);
\`\`\``,
    codeExample: `#include <stdio.h>

int main() {
    // For-Schleife: Zahlen von 1 bis 5
    printf("For-Schleife:\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n\\n");
    
    // While-Schleife: Countdown
    printf("While-Schleife (Countdown):\\n");
    int countdown = 5;
    while (countdown > 0) {
        printf("%d... ", countdown);
        countdown--;
    }
    printf("Start!\\n\\n");
    
    // Do-While-Schleife
    printf("Do-While-Schleife:\\n");
    int zahl = 1;
    do {
        printf("%d ", zahl);
        zahl++;
    } while (zahl <= 3);
    
    return 0;
}`
  },
  {
    id: "arrays",
    klasse: 1,
    title: "Arrays (Listen)",
    icon: "📋",
    content: `# Arrays in C

Ein Array ist eine Sammlung von Werten des gleichen Typs.

## Deklaration:

\`\`\`c
int zahlen[5];  // Array für 5 ganze Zahlen
\`\`\`

## Initialisierung:

\`\`\`c
int zahlen[5] = {1, 2, 3, 4, 5};
\`\`\`

## Zugriff auf Elemente:

Arrays beginnen bei Index 0!

\`\`\`c
int erster_wert = zahlen[0];   // erstes Element (1)
int zweiter_wert = zahlen[1];  // zweites Element (2)
\`\`\`

## Array durchlaufen:

Mit einer for-Schleife kannst du durch alle Elemente gehen:

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d ", zahlen[i]);
}
\`\`\`

## Wichtig:
- Die Größe eines Arrays ist fest und kann nicht geändert werden
- Index beginnt bei 0 und endet bei (Größe - 1)
- Zugriff auf ungültige Indizes kann zu Fehlern führen`,
    codeExample: `#include <stdio.h>

int main() {
    // Array mit Noten
    int noten[5] = {1, 2, 3, 2, 1};
    
    printf("Alle Noten:\\n");
    for (int i = 0; i < 5; i++) {
        printf("Note %d: %d\\n", i + 1, noten[i]);
    }
    
    // Durchschnitt berechnen
    int summe = 0;
    for (int i = 0; i < 5; i++) {
        summe += noten[i];
    }
    float durchschnitt = (float)summe / 5;
    printf("\\nDurchschnitt: %.2f\\n", durchschnitt);
    
    // Array mit Namen (Strings sind Char-Arrays)
    char name[20] = "Programmieren";
    printf("\\nName: %s\\n", name);
    
    return 0;
}`
  },
  {
    id: "funktionen",
    klasse: 1,
    title: "Funktionen",
    icon: "⚙️",
    content: `# Funktionen in C

Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe erfüllen.

## Grundstruktur:

\`\`\`c
rückgabetyp funktionsname(parameter) {
    // Code
    return wert;  // falls Rückgabetyp nicht void
}
\`\`\`

## Beispiel:

\`\`\`c
int addiere(int a, int b) {
    return a + b;
}
\`\`\`

## Wichtige Konzepte:

**1. Rückgabetyp:**
- Der Typ des Wertes, der zurückgegeben wird
- \`void\` wenn nichts zurückgegeben wird

**2. Parameter:**
- Werte, die der Funktion übergeben werden
- Können leer sein: \`funktionsname()\`

**3. Return:**
- Gibt einen Wert zurück und beendet die Funktion
- Nicht nötig bei \`void\`

## Funktionsaufruf:

\`\`\`c
int ergebnis = addiere(5, 3);  // ergebnis = 8
\`\`\`

## Vorteile:
- Code-Wiederverwendung
- Bessere Lesbarkeit
- Einfachere Wartung`,
    codeExample: `#include <stdio.h>

// Funktion ohne Parameter und Rückgabewert
void begruessung() {
    printf("Hallo! Willkommen zum C-Kurs!\\n\\n");
}

// Funktion mit Parametern und Rückgabewert
int multipliziere(int a, int b) {
    return a * b;
}

// Funktion zur Berechnung des Maximums
int maximum(int x, int y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

int main() {
    // Funktionsaufrufe
    begruessung();
    
    int produkt = multipliziere(5, 7);
    printf("5 × 7 = %d\\n", produkt);
    
    int max = maximum(42, 27);
    printf("Maximum von 42 und 27: %d\\n", max);
    
    return 0;
}`
  },
  {
    id: "case",
    klasse: 1,
    title: "Switch-Case Anweisungen",
    icon: "🕹️",
    content: `# Switch-Case Anweisungen

Switch und Case Anweisungen ermöglichen es dir, eine Variable gegen mehrere mögliche Werte zu überprüfen und entsprechend darauf zu reagieren.

## Grundstruktur:

\`\`\`c
switch (variable) {
    case wert1:
        // Code wenn variable == wert1
        break;
    case wert2:
        // Code wenn variable == wert2
        break;
    default:
        // Code wenn kein Fall zutrifft
}
\`\`\`

## Wichtig:
- \`break\` beendet den Switch-Block
- \`default\` ist optional und wird ausgeführt, wenn kein case passt
- Mehrere cases können zusammengefasst werden`,
    codeExample: `#include <stdio.h>

int main() {
    int monat;
    int jahr;
    
    do {
        printf("Geben Sie den Monat ein: \\n");
        scanf("%d", &monat);
        
        switch (monat) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                printf("Der Monat hat 31 Tage.\\n");
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                printf("Der Monat hat 30 Tage.\\n");
                break;
            case 2:
                printf("Geben Sie das Jahr ein: \\n");
                scanf("%d", &jahr);
                if (jahr % 4 == 0 && (jahr % 100 != 0 || jahr % 400 == 0)) {
                    printf("Es ist ein Schaltjahr.\\nDer Monat hat 29 Tage.\\n");
                } else {
                    printf("Der Monat hat 28 Tage.\\n");
                }
                break;
            default:
                printf("Ungültiger Monat\\n");
        }
    } while (monat < 1 || monat > 12);
    
    return 0;
}`
  },
  {
    id: "logische-operatoren",
    klasse: 1,
    title: "Logische Operatoren",
    icon: "‼️",
    content: `# Logische Operatoren in C

Logische Operatoren kombinieren mehrere Bedingungen zu einer Gesamtbedingung.

## Die drei Hauptoperatoren:

### 1. UND-Operator (&&)
**Beide Bedingungen müssen erfüllt sein:**

\`\`\`c
if (alter >= 18 && alter <= 65) {
    printf("Du bist im Erwerbsalter\\n");
}
\`\`\`

**Wahrheitstabelle:**
- true && true = **true**
- true && false = **false**
- false && true = **false**
- false && false = **false**

### 2. ODER-Operator (||)
**Mindestens eine Bedingung muss erfüllt sein:**

\`\`\`c
if (tag == "Samstag" || tag == "Sonntag") {
    printf("Wochenende!\\n");
}
\`\`\`

**Wahrheitstabelle:**
- true || true = **true**
- true || false = **true**
- false || true = **true**
- false || false = **false**

### 3. NICHT-Operator (!)
**Kehrt das Ergebnis um (Negation):**

\`\`\`c
if (!(alter < 18)) {
    printf("Du darfst eintreten\\n");
}
// Das ist das gleiche wie: if (alter >= 18)
\`\`\`

**Wahrheitstabelle:**
- !true = **false**
- !false = **true**

## Kombinationen:

Du kannst Operatoren auch kombinieren:

\`\`\`c
if ((alter >= 18 && alter <= 65) || alter > 70) {
    printf("Besondere Kategorie\\n");
}
\`\`\`

## Operator-Priorität (von höchst zu niedrig):
1. **!** (NICHT)
2. **&&** (UND)
3. **||** (ODER)`,
    codeExample: `#include <stdio.h>

int main() {
    int alter = 25;
    int hat_fuehrerschein = 1;  // 1 = true, 0 = false
    
    // UND-Operator (&&)
    if (alter >= 18 && hat_fuehrerschein == 1) {
        printf("Du darfst Auto fahren!\\n\\n");
    }
    
    // ODER-Operator (||)
    int tag = 7;  // 6 = Samstag, 7 = Sonntag
    if (tag == 6 || tag == 7) {
        printf("Es ist Wochenende!\\n\\n");
    }
    
    // NICHT-Operator (!)
    if (!(alter < 18)) {
        printf("Du bist volljaehrig\\n\\n");
    }
    
    // Komplexe Bedingung mit Kombinationen
    int geld = 50;
    int hunger = 1;
    
    if ((geld > 20 && hunger == 1) || geld > 100) {
        printf("Lass uns essen gehen!\\n");
    }
    
    return 0;
}`
  }
];
