export interface CodeExample {
  id: string;
  title: string;
  icon: string;
  description: string;
  tip: string;
  code: string;
}

export const codeExamples: CodeExample[] = [
  {
    id: "wechselboerse",
    title: "Wechselbörse",
    icon: "💱",
    description: "Euro ↔ Dollar Umrechnung.",
    tip: "Behalte die Originalformeln bei.",
    code: `#include <stdio.h>

int main() {
    char eingabe;
    int euro;
    int dollar;
    printf("Drücken sie 1 wen sie Euro in Dollar umrechnen wollen\\n drücken sie 2 wenn sie Us Dollar in Euro umrechnen wollen: ");
    scanf("%c",&eingabe);
    if(eingabe == '1'){
        float a;
        printf("Geben sie den Betrag in Euro ein: ");
        scanf("%f",&a);
        float rechnung1= a*1.18;
        printf("%0.2f Euro sind %0.2f US-Dollar",a,rechnung1);
    }else if(eingabe == '2'){
        float b;
        printf("Geben sie den Betrag in US-Dollar ein: ");
        scanf("%f",&b);
        float rechnung2= b *0.85;
        printf("%0.2f US-Dollar sind %0.2f in Euro",b,rechnung2);
    }
}`
  },
  {
    id: "kinokarten",
    title: "Kinokarten",
    icon: "🎬",
    description: "Ticketpreis nach Alter.",
    tip: "Altersbedingungen unverändert.",
    code: `#include <stdio.h>

int main() {
    int eingabe;
    int preis;
    printf("Geben sie den Ticketpreis ein: ");
    scanf("%d",&preis);
    printf("Geben sie ihr Alter ein: ");
    scanf("%d",&eingabe);
    if(eingabe<5){
        printf("Der eintritt ist frei");
    }
    if(eingabe>=5 && eingabe<=12){
        int finalpreis= preis/2;
        printf("Der preis ist: %d",finalpreis);
    }
    if(eingabe>=13 && eingabe<=59){
        int finalpreis2=preis;
        printf("Der preis ist: %d",finalpreis2);
    }
    if(eingabe>=60){
        printf("Der Eintritt ist Frei");
    }
}`
  },
  {
    id: "noten",
    title: "Noten Punkte",
    icon: "📚",
    description: "Ermittelt Note basierend auf Punkten.",
    tip: "Punkte-Logik unverändert.",
    code: `#include <stdio.h>

int main() {
    int punkt1;
    int punkt2;
    printf("Geben sie die Punkte im 1. Beispiel ein: ");
    scanf("%d",&punkt1);
    printf("Geben sie die Punkte im 2. Beispiel ein: ");
    scanf("%d",&punkt2);
    int add= punkt1+punkt2;
    if(add<=50){
        printf("Note: 5");
    }
    if(add>=51 && add<=69){
        printf("Note: 4");
    }
    if(add>=70 && add<=79){
        printf("Note: 3");
    }
    if(add>=80 && add<=89){
        printf("Note: 2");
    }
    if(add>=90 && add<=100){
        printf("Note: 1");
    }
}`
  },
  {
    id: "monatstage",
    title: "Monatstage",
    icon: "📅",
    description: "Gibt die Tage eines Monats aus.",
    tip: "Switch-Case für jeden Monat beibehalten.",
    code: `#include <stdio.h>

int main() {
    int monat;
    printf("Geben sie den Monat ein: ");
    scanf("%d",&monat);
    switch(monat){
        case 1: printf("Der Monat hat 31 Tage "); break;
        case 2: printf("Der Monat hat 28 Tage "); break;
        case 3: printf("Der Monat hat 31 Tage "); break;
        case 4: printf("Der Monat hat 30 Tage "); break;
        case 5: printf("Der Monat hat 31 Tage "); break;
        case 6: printf("Der Monat hat 30 Tage"); break;
        case 7: printf("Der Monat hat 31 Tage "); break;
        case 8: printf("Der Monat hat 31 Tage "); break;
        case 9: printf("Der Monat hat 30 Tage "); break;
        case 10: printf("Der Monat hat 31 Tage "); break;
        case 11: printf("Der Monat hat 30 Tage "); break;
        case 12: printf("Der Monat hat 31 Tage "); break;
    }
}`
  },
  {
    id: "schaltjahr",
    title: "Schaltjahr",
    icon: "🗓️",
    description: "Überprüft, ob ein Jahr ein Schaltjahr ist und gibt Tage des Monats aus.",
    tip: "Schaltjahr-Formel unverändert lassen.",
    code: `#include <stdio.h>

int main() {
    int monat;
    int jahr;
    printf("Geben Sie den Monat ein: ");
    scanf("%d", &monat);
    printf("Geben Sie das Jahr ein: ");
    scanf("%d", &jahr);

    int schaltjahr = (jahr % 4 == 0 && (jahr % 100 != 0 || jahr % 400 == 0));
    if(schaltjahr){ printf("Es ist ein Schaltjahr\\n"); }

    switch (monat) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: printf("Der Monat hat 31 Tage.\\n"); break;
        case 4: case 6: case 9: case 11: printf("Der Monat hat 30 Tage.\\n"); break;
        case 2: if (schaltjahr) { printf("Der Monat hat 29 Tage.\\n"); } else { printf("Der Monat hat 28 Tage.\\n"); } break;
    }
    return 0;
}`
  },
  {
    id: "ssp",
    title: "Stein/Schere/Papier",
    icon: "✊",
    description: "Spiel gegen den Computer.",
    tip: "Zufallszahl modulo 3 für Auswahl.",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int zufallszahl;
    int eingabe;
    printf("Geben sie 0 für Stein ein\\n Geben sie 1 für Schere ein\\n Geben sie 2 für Papier ein\\n");
    scanf("%d",&eingabe);
    srand(time(NULL));
    zufallszahl = rand() % 3;
    if(zufallszahl == eingabe){ printf("Es ist ein Unentschieden\\n"); }    
    else if((zufallszahl == 0 && eingabe == 1)||(zufallszahl == 1 && eingabe == 2)||(zufallszahl == 2 && eingabe == 0)){
        printf("Der Computer hat gewonnen\\n");
    } else { printf("Du hast Gewonnen \\n"); }

    switch(zufallszahl){
        case 0: printf("Der Computer hat Stein gewählt "); break;
        case 1: printf("Der Computer hat Schere gewählt: "); break;
        case 2: printf("Der Computer hat Papier gewählt: "); break;
    }
}`
  },
  {
    id: "zufallsadd",
    title: "Zufalls-Addition",
    icon: "🎲",
    description: "Einfaches Additionsspiel mit Zufallszahlen.",
    tip: "Prüfe Ergebnis genau.",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int eingabe;
    int zufall1;
    int zufall2;
    srand(time(NULL));
    zufall1= rand() % 10;
    zufall2= rand() % 10;
    printf("Die Rechnung lautet: %d + %d = ? \\n",zufall1,zufall2);
    printf("Geben sie Die Lösung ein \\n");
    scanf("%d",&eingabe);
    if(zufall1+zufall2==eingabe){ printf("Die eingegebene Lösung ist Richtig"); }
    else{ printf("Die Lösung ist Leider Falsch "); }
}`
  },
  {
    id: "zufallsrech",
    title: "Zufalls-Rechnen",
    icon: "➕",
    description: "Zufällige Rechenaufgaben mit Operatoren.",
    tip: "Originallogik für Operatoren beibehalten.",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
   char eingabe;
   int lösung;
   int input;
   int zufall1;
   int zufall2;
   printf("Geben sie + , - , / , * \\n");
   scanf(" %c", &eingabe);
   srand(time(NULL));
   zufall1=rand() % 10;
   zufall2= rand() % 10;
   printf("Die Rechnung ist %d %c %d = ",zufall1,eingabe,zufall2);
   printf("Geben sie ihre Lösung ein ");
   scanf("%d",&input);

   if(eingabe == '+'){ lösung=zufall1+zufall2; if(input==lösung){ printf("Deine Lösung ist richtig "); } else { printf("Deine Lösung ist Falsch"); } }
   if(eingabe == '/'){ lösung=zufall1/zufall2; if(input==lösung){ printf("Deine Lösung ist richtig "); } else{ printf("Deine Lösung ist falsch "); } }
   if(eingabe == '*'){ lösung=zufall1*zufall2; if(input==lösung){ printf("Deine Lösung ist richtig "); } else{ printf("Deine Lösung ist falsch"); } }
   if(eingabe == '-'){ lösung=zufall1-zufall2; if(input==lösung){ printf("Deine Lösung ist richtig "); } else{ printf("Deine Lösung ist Falsch"); } }
}`
  },
  {
    id: "hochzaehlen",
    title: "Hochzählen",
    icon: "⬆️",
    description: "Zählt von 1 bis zur Obergrenze.",
    tip: "for-Schleife mit Obergrenze.",
    code: `#include <stdio.h>

int main() {
    int grenze;
    int i=1;
    printf("Geben sie die Obergrenze an: ");
    scanf("%d",&grenze);
    for(int i=1;i<=grenze;i++){
        printf(" %d \\n",i);
    }
    return 0;
}`
  },
  {
    id: "runterzaehlen",
    title: "Runterzählen",
    icon: "⬇️",
    description: "Zählt von groß nach klein.",
    tip: "for-Schleife richtig initialisieren.",
    code: `#include <stdio.h>

int main() {
    int gross;
    int klein;
    printf("Geben sie den größten Wert ein: \\n");
    scanf("%d",&gross);
    printf("Geben sie den kleinsten Wert ein: \\n");
    scanf("%d",&klein);
    for(gross>=klein;gross--;){
        printf(" %d \\n",gross);
    }
}`
  },
  {
    id: "array",
    title: "Array Ausgabe",
    icon: "📦",
    description: "Gibt alle Array-Werte aus.",
    tip: "Index von 0 bis size-1 durchlaufen.",
    code: `#include <stdio.h>

int main() {
    int arr[10]={1,1,2,4,7,11,16,22,29,37};
    int size=10;
    for(int i=0;i<size;i++){
        printf(" %d \\n",arr[i]);
    }
}`
  },
  {
    id: "durchschnitt",
    title: "Durchschnitt berechnen",
    icon: "📊",
    description: "Berechnet Durchschnitt aus drei Beispielen.",
    tip: "Durchschnitt = Summe / 3.",
    code: `#include <stdio.h>

int main() {
  int bei1, bei2, bei3;
  printf("Geben sie die Punkte für das Erste Beispiel ein: \\n"); scanf("%d",&bei1);
  printf("Geben sie die Punkte für das Zweite Beispiel ein: \\n"); scanf("%d",&bei2);
  printf("Geben sie die Punkte für das Dritte Beispiel ein: \\n"); scanf("%d",&bei3);
  int durch = bei1 + bei2 + bei3;
  int ergebnis=durch / 3;
  printf("Das ergebnis ist: %d",ergebnis);
}`
  },
  {
    id: "besterwert",
    title: "Bester Wert",
    icon: "🏆",
    description: "Findet das beste Beispiel.",
    tip: "Vergleichslogik unverändert.",
    code: `#include <stdio.h>

int main() {
  int bei1, bei2, bei3;
  printf("Geben sie die Punkte für das Erste Beispiel ein: \\n"); scanf("%d",&bei1);
  printf("Geben sie die Punkte für das Zweite Beispiel ein: \\n"); scanf("%d",&bei2);
  printf("Geben sie die Punkte für das Dritte Beispiel ein: \\n"); scanf("%d",&bei3);
  int durch = bei1 + bei2 + bei3;
  int ergebnis=durch / 3;
  printf("Das ergebnis ist: %d\\n",ergebnis);
  if(bei1>bei2 && bei1>bei3){ printf("Beispiel 1 ist das Beste mit %d",bei1); }
  if(bei2>bei1 && bei2>bei3){ printf("Beispiel 2 ist das Beste mit %d",bei2); }
  if(bei3>bei1 && bei3>bei2){ printf("Beispiel 3 ist das Beste mit %d",bei3); }
}`
    },
    {
    id: "sleep",
    title: "Verzögerung",
    icon: "⏰",
    description: "Verzögerung der Ausführung/Pause",
    tip: "Zeitangabe muss in Millisekunden sein da es sonst keine Auswirkung hat.",
    code: `#include <stdio.h>
#include <unistd.h> //includiert die Bibliothek für usleep
 
int main() {
    char text[] = "Hallo Welt!";

    for (int i = 0; text[i] != '\0'; i++) {
        printf("%c", text[i]);
        fflush(stdout);
        usleep(100000); 
    }
    printf("\n");
    return 0;
}
}`
  },
  {
    id: "Flugzeugreservierung",
    title: "Flugzeugreservierung",
    icon: "✈️",
    description: "Reservierungssystem für Flugzeugsitze.",
    tip: "Behalte die gleiche Logik",
    code: `#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>

#define SITZPLAETZE 10

bool sitzplaetze[SITZPLAETZE] = {false}; // false = frei, true = reserviert

void menue_anzeigen() {
    printf("\\n========================================\\n");
    printf("Reservierungssystem für Flugzeugsitzplätze\\n");
    printf("========================================\\n");
    printf("Business Class . . . . B\\n");
    printf("Economy Class . . . . . E\\n");
    printf("Schließen . . . . . . . . S\\n");
    printf("----------------------------------------\\n");
}

int freien_sitzplatz_suchen(char klasse, char* klasse_name) {
    int start, ende;
    
    if (klasse == 'B') {
        start = 0;
        ende = 4;
        sprintf(klasse_name, "Business Class");
    } else {
        start = 5;
        ende = 9;
        sprintf(klasse_name, "Economy Class");
    }
    
    for (int i = start; i <= ende; i++) {
        if (!sitzplaetze[i]) {
            return i;
        }
    }
    return -1;
}

void bordkarte_ausgeben(int sitzplatz, char* klasse) {
    printf("\\n****************************************\\n");
    printf("           BORDKARTE\\n");
    printf("****************************************\\n");
    printf(" Sitzplatz: %d\\n", sitzplatz + 1);
    printf("     Klasse: %s\\n", klasse);
    printf("****************************************\\n");
}

void sitzplatz_reservieren(int sitzplatz_nummer, char* klasse_name) {
    sitzplaetze[sitzplatz_nummer] = true;
    bordkarte_ausgeben(sitzplatz_nummer, klasse_name);
}

void status_anzeigen() {
    printf("\\nAktueller Sitzplatzstatus:\\n");
    for (int i = 0; i < SITZPLAETZE; i++) {
        char* status = sitzplaetze[i] ? "reserviert" : "frei";
        char* klasse = (i < 5) ? "Business" : "Economy";
        printf("Sitzplatz %d (%s): %s\\n", i + 1, klasse, status);
    }
}

int main() {
    char wahl;
    char klasse_name[20];
    
    printf("Willkommen beim Flugzeug-Reservierungssystem!\\n");
    
    while (1) {
        menue_anzeigen();
        printf("Bitte wählen Sie aus: ");
        scanf(" %c", &wahl);
        wahl = toupper(wahl);
        
        if (wahl == 'S') {
            printf("\\nProgramm wird beendet. Auf Wiedersehen!\\n");
            break;
        }
        else if (wahl == 'B') {
            int sitzplatz = freien_sitzplatz_suchen('B', klasse_name);
            if (sitzplatz != -1) {
                sitzplatz_reservieren(sitzplatz, klasse_name);
            } else {
                printf("\\nKeine freien Sitzplätze in Business Class!\\n");
            }
        }
        else if (wahl == 'E') {
            int sitzplatz = freien_sitzplatz_suchen('E', klasse_name);
            if (sitzplatz != -1) {
                sitzplatz_reservieren(sitzplatz, klasse_name);
            } else {
                printf("\\nKeine freien Sitzplätze in Economy Class!\\n");
            }
        }
        else {
            printf("\\nUngültige Eingabe! Bitte wählen Sie B, E oder S.\\n");
        }
    }
    
    return 0;
}`
  },
  {
    id: "berechnung-ostern",
    title: "Berechnung für Ostern in dem besagten Jahr",
    icon: "🐣",
    description: "Berechnet das Datum von Ostern für das jeweilige Jahr.",
    tip: "Die Berechnungen sind teils sehr komplex, ändere diese nicht ab",
    code: `#include <stdio.h>

// Funktion die man aufrufen kann um ein kürzeres main hat, berechnung für ostern
void berechne_ostern(int jahr, int* tag, int* monat) {
    //metonischer Zyklus
    int a = jahr % 19;
    //Sonnenkalender-Parameter
    int b = jahr % 4;
    int c = jahr % 7;
    //Jahrhundert-Korrektur
    int k = jahr / 100;
    int p = (8 * k + 13) / 25;
    int q = k / 4;
    //Zwischenberechnungen
    int m = (15 + k - p - q) % 30;
    int n = (4 + k - q) % 7;
    //Hauptrechnung
    int d = (19 * a + m) % 30;
    int e = (2 * b + 4 * c + 6 * d + n) % 7;
    
    *tag = 22 + d + e; // Vorläufiges Oster Datum
    *monat = 3; // März
    
    // Falls über den März
    if (*tag > 31) {
        *tag = *tag - 31;
        *monat = 4; // April
    }
    
    // Sonderfälle für Ostern
    if (d == 29 && e == 6) {
        *tag = 19; // Spezialfall
    } else if (d == 28 && e == 6 && a > 10) {
        *tag = 18; // Spezialfall 2
    }
}

int main() {
    int monat;
    int jahr = 0; // Setzt das Jahr auf 0
    int oster_tag, oster_monat;
    
    do {
        printf("\\n=== Menü ===\\n");
        printf("1 - Monatstage berechnen\\n");
        printf("2 - Osterdatum berechnen\\n");
        printf("3 - Beenden\\n");
        printf("Ihre Wahl: ");
        
        int wahl;
        scanf("%d", &wahl);
        
        switch (wahl) {
            case 1: {
                // Zuerst Abfrage des Jahres
                printf("Geben Sie das Jahr ein: ");
                scanf("%d", &jahr);
                
                // Dann Monat abfragen
                do {
                    printf("Geben Sie den Monat ein (1-12): ");
                    scanf("%d", &monat);
                    
                    switch (monat) {
                        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                            printf("Der Monat hat 31 Tage.\n");
                            break;
                        case 4: case 6: case 9: case 11:
                            printf("Der Monat hat 30 Tage.\n");
                            break;
                        case 2:
                            if(jahr % 4 == 0 && (jahr % 100 != 0 || jahr % 400 == 0)) {
                                printf("Es ist ein Schaltjahr\n");
                                printf("Der Monat hat 29 Tage.\n");
                            } else {
                                printf("Der Monat hat 28 Tage.\n");
                            }
                            break;
                        default: 
                            printf("Ungültiger Monat! Bitte geben Sie eine Zahl zwischen 1 und 12 ein.\n");
                    }
                } while(monat < 1 || monat > 12);
                break;
            }
            
            case 2: {
                // Osterdatum berechnen
                printf("\nGeben Sie das Jahr für die Osterberechnung ein: ");
                scanf("%d", &jahr);
                
                if (jahr < 1583) {
                    printf("Hinweis: Die Berechnung ist für Jahre vor 1583 möglicherweise ungenau.\n");
                }
                
                berechne_ostern(jahr, &oster_tag, &oster_monat);
                
                char monat_name[10];
                if (oster_monat == 3) {
                    sprintf(monat_name, "März");
                } else {
                    sprintf(monat_name, "April");
                }
                
                printf("Ostern %d fällt auf den %d. %s\n", jahr, oster_tag, monat_name);
                break;
            }
            
            case 3:
                printf("Programm wird beendet. Tschüss!\n");
                return 0;
                
            default:
                printf("Ungültige Wahl! Bitte wählen Sie 1, 2 oder 3.\n");
        }
        
        // Zusatzinfo nur wenn das Jahr gültig ist
        if ((wahl == 1 || wahl == 2) && jahr > 0) {
            printf("\n--- Zusatzinformation ---\n");
            
            // Monatsberechnung zeigt dann ostern an
            if (wahl == 1) {
                berechne_ostern(jahr, &oster_tag, &oster_monat);
                char monat_name[10];
                if (oster_monat == 3) {
                    sprintf(monat_name, "März");
                } else {
                    sprintf(monat_name, "April");
                }
                printf("Ostern %d: %d. %s\n", jahr, oster_tag, monat_name);
            }
            
            // Für Osterberechnung: Zeige auch Schaltjahr-Info an
            if (wahl == 2) {
                if(jahr % 4 == 0 && (jahr % 100 != 0 || jahr % 400 == 0)) {
                    printf("%d ist ein Schaltjahr.\n", jahr);
                } else {
                    printf("%d ist kein Schaltjahr.\n", jahr);
                }
            }
        }
        
    } while(1); // Hört nur bei Beenden auf
    
    return 0;
}`,
  },
  {
    id: "nim-spiel",
    title: "Nim-Spiel",
    icon: "🎮",
    description: "Ein einfaches Spiel, bei dem Spieler abwechselnd Stöcker entfernen.",
    tip: "Es soll eine Random zahl generiert werden die zwischen 1 und 3 liegt, diese Zahl gibt an wie viele Stöcker der Computer entfernt.",
    code: `#include <stdio.h>
#include <time.h>
#include <stdlib.h>
 
int minus(int x, int y);
void zeigeStoecke(int anzahl);
 
int main() {
    int stocker=13;
    int eingabe;
    int computer;
    int spielerAmZug= 1;
 
    srand(time(NULL));
 
     
    printf("Start mit %d Stöcken\\n", stocker);
    zeigeStoecke(stocker);
 
    while (stocker > 0) {
 
        if (spielerAmZug) {
            printf("Dein Zug. Wie viele Stöcke (1-3)? ");
            scanf("%d", &eingabe);
 
            if (eingabe < 1 || eingabe > 3 || eingabe > stocker) {
                printf("Ungültige Eingabe\\n\\n");
                continue;
            }
 
            stocker = minus(stocker, eingabe);
            printf("Du hast %d Stöcke genommen.\\n", eingabe);
        } 
        else {
            computer = rand() % 3 + 1;
            if (computer > stocker) {
                computer = stocker;
            }
 
            stocker = minus(stocker, computer);
            printf("Computer nimmt %d Stöcke.\\n", computer);
        }
 
        zeigeStoecke(stocker);
        spielerAmZug = !spielerAmZug;
    }
 
    if (spielerAmZug) {
        printf("Du hast verloren\\n");
    } else {
        printf("Du hast gewonnen\\n");
    }
 
 
    return 0;
}
 
int minus(int x, int y) {
    return x - y;
}
 
void zeigeStoecke(int anzahl) {
    for (int i = 0; i < anzahl; i++) {
        printf("|");
    }
    printf("\\n\\n");
}`
  },
  {
    id: "urlaubsbuchung",
    title: "Urlaubsbuchung",
    icon: "🏖️",
    description: "Ein einfaches System zur Urlaubsbuchung, das die Verfügbarkeit von Urlaubstagen überprüft.",
    tip: "Für jede Sache eine Funktion erstellen, z.B. für den Flug.",
    code: `#include <stdio.h>
#include <math.h>
 
int hotelkosten(int z);
int flug(char y);
 
int automiete(int h);
int gesamtkosten(int hotel, int flug, int aut);
 
 
int main() {
    char ort;
    int a;
    int b;
    printf("Type in how many days you plan on staying:\n");
    scanf("%d", &a);
    int kosten = hotelkosten(a);
    printf("The Hotel costs: %d\n", kosten);
    printf("Type in the city (C/L/P/T): ");
    scanf(" %c", &ort);
    flug(ort);
 
  printf("How many days do you need your rental car for?\n");
  scanf("%d",&b);
  automiete(b);
  int er2 = automiete(b);
  printf("%d\n",er2);
  int kostenHotel = hotelkosten(a);
  int kostenFlug = flug(ort);
  int kostenAuto = automiete(b);
 
  int gesamt = gesamtkosten(kostenHotel, kostenFlug, kostenAuto);
 
  printf("The trip costs: %d€\n", gesamt);
 
 
    return 0;
}
 
int hotelkosten(int z) {
    int cost = 140;
    return cost * z;
}
 
int flug(char y) {
    if (y == 'c' || y == 'C') {
        printf("The Flight Costs 183€\n");
        return 183;
    } 
    else if (y == 'l' || y == 'L') {
        printf("The Flight Costs 475€\n");
        return 475;
    } 
    else if (y == 'p' || y == 'P') {
        printf("The Flight Costs 222€\n");
        return 222;
    } 
    else if (y == 't' || y == 'T') {
        printf("The Flight Costs 220€\n");
        return 220;
    } 
    else {
        printf("Unexplored city\n");
        return 0;
    }
}
 
int automiete(int h){
  int miete=40;
  int berechnung = miete * h;
  if(h>=7){
    int berechnung = berechnung - 50;
  }
  return berechnung;
}
int gesamtkosten(int hotel, int flug, int aut){
    return hotel + flug + aut;
}`
  },
  {
    id:"Aktiengewinn",
    title: "Aktiengewinn",
    icon: "📈"
    description: "Berechnet den Gewinn oder Verlust aus einer Aktieninvestition basierend auf Kauf- und Verkaufspreis sowie der Anzahl der Aktien.",
    tip: "Die Berechnung basiert auf der Formel: Gewinn/Verlust = (Verkaufspreis - Kaufpreis) * Anzahl der Aktien.",
    code: `#include <stdio.h>
    int aktiengewinn(float x, float y, float z);
 
int main() {
    float a, b, c;
    float gewinn;
 
    printf("Wie groß hat die Aktie gekostet:\n");
    scanf("%f", &a);
 
    printf("Wie viele Aktien besitzt du:\n");
    scanf("%f", &b);
 
    printf("Wie viel kostet die Aktie jetzt:\n");
    scanf("%f", &c);
 
    gewinn = aktiengewinn(a, b, c);
 
    printf("Ihr Gewinn liegt bei: %.2f\n", gewinn);
 
    return 0;
}
 
int aktiengewinn(float x, float y, float z) {
    int alt = x * y;
    int neu = z * y;
 
    return neu - alt;
}`
  },
  {
    id:"Fakultaet",
    title: "Fakultät",
    icon: "🔢",
    description: "Berechnet die Fakultät einer gegebenen Zahl.",
    tip: "Die Fakultät von n (n!) ist das Produkt aller positiven ganzen Zahlen von 1 bis n.",
    code: `#include <stdio.h>
    int fakultaet(int n, int x);
 
int main(void){
  int a;
  int b;
  printf("Geben sie eine Zahl ein: ");
  scanf("%d",&a);
  printf("Geben sie die Groesste Zahl ein: ");
  scanf("%d",&b);

  int faku = fakultaet(a,b);
  printf("%d\n",faku);

}
int fakultaet(int n, int x){
  int i;
  int fakul=0;
  for(i=n;i<=x;i++)
  {
    fakul=fakul+i;
  }
  return fakul;
}`
  },
  {
    id:"Hochrechnung",
    title: "Hochrechnung",
    icon: "📊",
    description: "Berechnet die Hochrechnung eines gegebenen Wertes über eine bestimmte Anzahl von Iterationen.",
    tip: "Die Hochrechnung basiert auf der Formel: Hochrechnung = Wert * (1 + Wachstumsrate)^Anzahl der Iterationen.",
    code: `#include <stdio.h>
    #include <math.h>
    int hoch2(int x);
 
int main(void){
  int a;

 
  printf("Geben sie eine Nummer ein welche sie hoch 2 wollen: ");
  scanf("%d", &a); 
  hoch2(a);
  printf("%d",hoch2(a));
  return 0;
 
}
 
int hoch2(int x){
  return x*x;
}` 
  }
];
