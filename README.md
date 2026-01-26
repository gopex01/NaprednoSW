# Kreiranje viseplatformskih aplikacija koriscenjem Angular-a i Capacitor framework-a

## Sadrzaj
- [Instalacija i pokretanje](#instalacaija-i-pokretanje)
- [Uvod u kapacitor i njegove prednosti](#uvod-u-capacitor-i-njegove-prednosti)
- [Mehanizam funkcionisanja](#mehanizam-funkcionisanja)
- [Prednosti Capacitora](#prednosti-capacitora)
- [Camera](#camera)
- [Device info](#device-info)

## Instalacija i pokretanje
Potrebno je pratiti sledeće korake da bi se ovaj projekat pokrenuo na lokalnoj mašini i Android emulatoru.

Neophodno je imati instalirano:
Node.js
npm (automatski dolazi sa instalacijom Node.js)
Angular CLI - instalira se komandom: npm install -g @angular/cli
Capacitor CLI - instalira se komandom: npm install -g @capacitor/cli
Android Studio (za pokretanje nativnog koda)

Pokretanje projekta:
-u terminalu uneti komandu: git clone https://github.com/gopex01/NaprednoSW.git - čime se klonira repozitorijum
-u terminalu uneti komandu: npm install - da biste instalirali zavisnosti
-u terminalu uneti komandu: ng build - da biste napravili web build aplikacije
-u terminalu uneti komandu: npx cap sync android - da biste prebacili kod u Android projekat
-u terminalu uneti komandu: npx cap open android - otvara projekat u Android Studiju odakle pokrećete aplikaciju

## Uvod u Capacitor i njegove prednosti
Capacitor je moderan “cross-platform” runtime razvijen od strane Ionic tima. On omogućava web programerima da kreiraju aplikacije za iOS i Android koristeći isti izvorni kod. Capacitor ne menja Angular kod u nativni već ga pakuje i omogućava komunikaciju sa operativnim sistemom.
Glavne prednosti su:
Nema "Lock-in" efekta: Ukoliko se izgubi potreba za mobilnom aplikacijom, i dalje imate funkcionalnu Web aplikaciju.
Korišćenje postojećih biblioteka: Bilo koja biblioteka sa NPM-a radi u Capacitoru jer je to i dalje Web okruženje.
Native Bridge: Omogućava JavaScript-u da direktno poziva nativni kod kao što su Kamera, GPS ili Biometrija.
Web standard: Za razliku od drugih rešenja, koristi standardni web browser view (WebView), pa sav CSS i Angular kod rade identično.

## Mehanizam funkcionisanja
Rad Capacitora zasniva se na tri ključna dela:
-Web View sloj: Prilikom pokretanja, podiže se optimizovani “full-screen” pretraživač bez URL bara unutar kojeg se renderuje Angular aplikacija.
-Bridge (Most): Capacitor uspostavlja dvosmernu komunikaciju. Kada se pozove funkcija u JS-u, bridge je šalje do nativnog koda (Java na Androidu), a rezultat vraća nazad u Angular.
-Native Project Ownership: Za razliku od starijih tehnologija, Capacitor smatra da su Android Studio projekti lično vlasništvo developera, koji sam konfiguriše dozvole i resurse.
## Prednosti capacitora
Nema “Lock-in” efekata - ukoliko se izgubi potreba za android/ios aplikacijama I dalje je prisutna Web aplikacija
Koriscenje postojecih biblioteka - Bilo koja biblioteka sa NPM-a ( za grafikone, tabele I animacije) radi u Capacitoru jer je to I dalje Web.
Pristupacnost - svaki Web programmer moze “postati” mobile programmer “preko noci”

## Device Info
Ova komponenta koristi Capacitor Device API za direktno izvlačenje hardverskih podataka iz operativnog sistema.
Karakteristike Device API-ja:
-Omogućava pristup informacijama o modelu uređaja, platformi i verziji operativnog sistema.
-Pruža uvid u nivo napunjenosti baterije.
-Koristi asinhroni pristup (await) jer zahteva komunikaciju sa hardverom sistema.

## Camera
Camera API omogućava snimanje fotografija i videa direktno iz aplikacije.
Karakteristike Camera komponente:
-Omogućava otvaranje nativne kamere telefona.
-Slika snimljena kamerom se konvertuje u Base64 format ili se dobija kao putanja do fajla.
-Može se kombinovati sa Filesystem API-jem za trajno skladištenje slika u memoriji telefona.