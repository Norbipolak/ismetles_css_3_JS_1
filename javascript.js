/*
Mi az a Javascript?
Javascript egy programozási nyelv
CSS, HTML pedig egy leíró nyelv

A leíró nyelvek azok, azért nem programózási nyelvek, mert a leíró nyelvek, mert a programózási nyelvekben vannak olyan nylevi szerkezetek 
amik a html-ben nincsenek pl. létre lehet hozni vezérlési szerkezetek meg függvényeket 

Milyen típusú programozási nyelv a JavaScript 
1. gyengén típusos nyelv
2. kliensoldali nyelv (mondjuk van szerveroldali része az nodeJS)
3. interpreteres

1. Gyengén típusos az azt jelenti, hogy nincsen típusdeklaráció, nem mondjuk meg előre, hogy milyen típusú változót hozunk létre
meg, hogy milyen típusú lesz a visszatérési értéke a függvénynek, hanem azt már csak az határotta meg, hogy effektive, milyen értéket 
adunk meg neki 

2. Kliensoldali nyelv 
Ez a felhasználói interakciókra lett kitalálva 

3. Interpreteres nyelv
A böngészőben van egy program, amit interpreternek hívunk és az a program futatja le a Javascript kódunkat, 
tehát gyakorlatilag egy másik programozási nyelven írunk egy olyan programot, ami lefutatja a mi programunkat 

És van még a fordítos nyelv, ami azt jelenti, hogy nem effektive a kódunk fog lefutni, hanem készül belöle egy tárgykód, modnjuk egy 
exe fájl és akkor az egy olyan kódot tartalmaz, amit meg tud érteni az operációs rendszerünk és onnantól kezdve lefutatja 
********************************************************************************************************************************************
*/

/*
1. Mi az a változó, mire jó, mire használjuk?
- Változók az adattárolására alkalmassak 

2. Mi a különbség a változó definiálása és a deklarációja között 
- Az a különbség a kettő között, hogy a változó deklarálásakor elkészítjük magát a változót!!!
    - var valtozo;
- A definiálásnál pedig értéket adunk neki 
    - valtozo = 5;

3. Mik a névadási szabályok a változók esetében
    abécé kisbetű és nagybetű (dokumentum karakterkódolása UTF-8)
    lehet benne szám, de nem elöl 
    alsóvonás 
    egy pár speciális karakter 
    nem adhatunk lefoglalt kulcsszavakat változóknak (nem lehet var var = 0; vagy var for = 0;)

4. Mi az a karakterkódolás 
- Milyen karaktereket tudunk felhasználni, illetve hogy ezeknek a karaktereknek mi a bináris kódjuk
- A karakterkódolás meghatározza a karakterkészletet illetve, hogy az egyes karakterek milyen bináris kóddal rendelkeznek 
Van egy karaktertábla pl. ascii a teljes karaktertábla fent van, mert ez csak 127 karaktert tartalmaz 
https://www.asciitable.com/
és a különböző karaktereknek vannak különböző kódjai ->

 Bináris     Decimális    Hexa    Jel
0110 0001       97         61      a
0010 0110       38         26      &
stb. 
A karakterkődolás amit a legtöbbet használunk az a UTF-8!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

5. Milyen változótípusokat ismersz?
    * string 
    * number
    * object (object, array, date)
    * boolean 
    * null
    * undefined
    
6. Hogyan tudjuk megtudni egy változó típusát 

var str = "A cápa ette apáca";
console.log(typeOf str); -> string

var bo = true;
console.log(typeOf bo); -> boolean 

var myVar;
console.log(typeOf myVar) -> undefined lesz a típusa és az értéke is undefined lesz, mert nem definniáltuk 

Mi van ha kiírunk egy változót, amit még nem csináltunk meg 
console.log(notDefined)
-> hibaüzenet
Nem tudunk hozzáférni egy olyan változóhoz, ami még nem is létezik 
méghozza egy olyan hibát, ami le fogja állítani a kód futását, mert 

Mi van ha kiírunk egy olyan változót, amit késöbb definiáltunk?
ha elöbb szeretnék hozzáférni, mielőtt deklaráltuk volna a változót 

console.log(myVar2);
var myVar2 = 5;
-> 
undefined 
És ez egy furcsaság a javaScript-vel kapcsolatban, hogyha var-val hozzuk létre a változót (ez a let-re és a const-ra nem lesz igaz)
Akkor úgy csinálja az interpreter, hogy összeszedi, hogy létezik ez a változó, csak nem definiáltuk, de ez nyilván nem jó, mert hogy 
ott, amikor ki akarjuk console-log-olni, ott még nem kellene, hogy létezne ez a változó 
Amit ezt átállítanánk let-re vagy const-ra, ott már kapnánk a hibaüzenetet 
-> 
console.log(myVar2);
let myVar2 = 5;  -> hibaüzenet (Reference error: Can not access 'myVar' before initialization)

és ezt a dolgot mondják hoisting-nak, amikor elején var-val indefined lett 

7. Mi az az operátor és az operandus?
    Operator
    - a szimbolum, amivel a műveletet elvégezzük 
    Operandus 
    - a művelet alanya 

    5 + 6 + 9 * 10
    akkor a + meg * az operator 
    5, 6, 9, 10 meg az operandus-ok 

    myStr + " - " + myStr2 

    Akkor itt van 3 operandus-unk -> myStr, " - ", Mystr2
    és van két operator -> + +

    értékadó operátor 
        =

    Ezt sokféleképpen van taglalva 
    1. Assingment operator -> = (itt bele van véve +=, -=, *=, /=, %=, **= is  )
    2. Arithmetic operator -> +, -, *, **(exponentiation), /, %(modolus), ++, -- 
    3. Comparison operator -> ==, ===, !=, !==, >, <, <=, >=, ? 
    4. Logical operator -> ||, &&, ! 
    5. Bit operators -> &(AND), |(OR), ~(not), ^(XOR, kizárás)

8. Mi a különbség a == és a === között?
console.log(5 == "5"); true 
console.log(5 === "5"); false 

Ha ===, akkor a típust is ellenőrzi, ha csak ==, akkor az értéket 

console.log(5 != "5"); false 
console.log(5 !== "5"); true 

! -> mert ez éppen az ellentétjét adja vissza, negáció 
Típust is ellenőriz -> ===, !== 
Nem ellenőriz típust -> ==, != 

Bit operator 
const a = 55;
const b = 65;
console.log(a.toString(2))
így kell keírni, hogy megkapjuk a bineráis értékét 110111
az utolsó helyen lévő számot 2 a nulladikon kell megszorozni -> 1
utolsó előtti pedid a 2 az elsőn -> 2 
2 a másodikon -> 4 
2 a harmadikon -> 8 
és akkor így épül fel az 55 
így lehet visszafejteni ezeket a dolgoakat 



*/