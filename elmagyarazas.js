/*
Viewport tag-nek a szerepe 
Amikor csinálunk egy html szerkezetet, akkor autmatikusan betöltödik egy olyan, hogy ezek a meta adatok ->

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

A viewport segítséget nyújt arra, hogy a weboldal igazodjon a készülék képernyőméretéhez!!!!!!!!!!

Tehát ez egy meta tag és van egy content attributuma ebben van egy olyan, hogy ->
"width=device-width!!!!!!!!!!!!
-> 
Ez annyit tesz, hogy felveszi a képernyőszélességét az oldalunk azon a dolgon amin vagyunk(pl. itt a laptopnak a képernyőszélessége)

initial-scale=1.0"
-> 
pedig gyakorlatilag egy zoom és ha ez beállítanánk 2.0-ra, akkor a kétszeresen ránagyítana a dolgokra 
initial-scale=2.0"

és ezt ott tudjuk majd megnézni, ahol a böngészőben - vizsgálat és ott van egy olyan, amire rá szoktunk kattintani, hogy megnézzük a tageket 
ott van egy olyan hogy laptop meg mobil van benne, pont mellette 

Gyakorlatilag azt állítjuk be, hogy igazodjon a weboldal a készülék képernyőméretéhez, amin éppen megtakintjük a weboldalt 
******************************************************************************************************************************************
Media query 

A media query szerepe, hogy meghatározza, hogy a különböző típusú készülékeken és különböző képernyőméreteken 
milyen css szabályok érvényesüljenek!!!!!!!!!!!

Készítünk egy style.css-t 
1. @media screen and (min-width: 1080px) {
    body {
        background-color: lightblue;
    }
}

Ez azt jelenti, hogy a képernyőkön (screen), (min-width: 1080px), tehát 1080px-en vagy a fölött a háttérszínt 
világoskék lesz, viszont az alatt meg nem!!!!!!!!!!!!!!

2. @media screen and (max-width: 1080px) {
    body {
        background-color: lightcoral;
    }
}

Itt meg a body, tehát a képernyő 1080px alatt megkapja ezt a lightcoral színt, ugye felette meg az elöző beállítás miatt 
lightblue-ra fog változni 

Tehát amint lemegyünk 1080px-re megváltozik a szín, módosul az érték 

3. Nem csak width van, hanem mondjuk meg lehet határozni height-ot is 
@media screen and (min-height: 700px) {
    body {
        color: purple;
    }
}
ez a min-height majd a böngészőablak látható magasságára fog vonatkozni 
És akkor látszik is, hogy a betűk purple-ök lettek emiatt 700px magasság fölött 
Tehát ha látható képernyő az magassabb, mint 700px akkor ezek lilák lesznek de viszont ha vertikálisan összehúzzuk a képernyőt, akkor 
visszaáll alap feketére ha annak kisebb lesz a magassága, mint 700px

teljes magasságát a képernyőnek meg ugy lehet megnézni, hogy window.innerHeight -> 953px lett 

4 .@media screen and (max-height: 700px) {
    body {
        color: white;
    }
}

Ez meg a kisebb vagy egyenlő mint 700px-es magasságra fog vonatkozni
Itt látszik, hogyha összehúzzuk vertikálisan a képernyőt és akkor, amikor ez egyenlő vagy kisebb lesz mint 700px, akkor fehérek lesznek a 
betűk, de ha nagyobb, ugye mint alapból -> 953px, akkor meg lilák 

5. Azt is be lehet állítnani, hogy eggyes orientációkon, hogy müködjön ez a dolog (egészet kikommenteljük css-ben, amit eddig csináltunk)
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

a. orientation: landscape
-> 
Amig a weboldal látható része az szélesebb mint amennyire magas, addig a background-color-ja a bodynak világoszürke lesz
@media screen and (orientation: landscape) {
    body {
        background-color: #efefef;
    }
}

b.portrait 
@media screen and (orientation: landscape) {
    body {
        background-color: #2d2d2d;
        color: white;
    }
}

Portrait meg amikor a magasabb a képernyő látható magassága, mint a szélessége 
és akkor húzzuk befele jobbról és amikor már a képernyő magassága az nagyobb lesz, mint a szélessége, akkor a szürke háttérből 
amit meghatároztunk az orientation: landscape-nek, lett egy orientation: portrait, amelyben a body azokat a tulajdonságokat kapta, hogy 
sötétebb háttérszín illetve a betűk fehérek lettek 

orientation: landscape - portrait!!!!!!!!!!!!!!!!!!!!!!!!!!!!
************************************************************************************************************************************
De mire a jó a media query gyakorlatban ->
Flexbox-os példa -> 
    <div class="flex">
        <div class="flex-el"></div>
        <div class="flex-el"></div>
        <div class="flex-el"></div>
        <div class="flex-el"></div>
    </div>

css-ben ->
.flex {
    display: flex;
    justify-content: center;
}

.flex-el {
    width: 250px;
    height: 250px;
    background-color: #3db399;
    border: 2px solid #2d8370;
}

És tudjuk, hogy a flex az flexibilis, mikor huzzúk össze a képernyőt, és ha az ezekben a flex-el-ben vannak szöveget!!!!!

    <div class="flex">
        <div class="flex-el">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A rerum sequi veritatis nulla? Mollitia nemo aliquid quibusdam provident 
            exercitationem ducimus ab, minima, aliquam itaque quam iste dolores sed 
            distinctio aspernatur?
        </div>
        <div class="flex-el">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A rerum sequi veritatis nulla? Mollitia nemo aliquid quibusdam provident 
            exercitationem ducimus ab, minima, aliquam itaque quam iste dolores sed 
            distinctio aspernatur?
        </div>
        <div class="flex-el">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A rerum sequi veritatis nulla? Mollitia nemo aliquid quibusdam provident 
            exercitationem ducimus ab, minima, aliquam itaque quam iste dolores sed 
            distinctio aspernatur?
        </div>
        <div class="flex-el">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            A rerum sequi veritatis nulla? Mollitia nemo aliquid quibusdam provident 
            exercitationem ducimus ab, minima, aliquam itaque quam iste dolores sed 
            distinctio aspernatur?
        </div>

és az elején még jól kifér a szöveg, de viszont ha húzzuk befelé, akkor már mintha kijönne a box-ból (border alá megy)

Itt azt tudjuk csinálni, hogy megnézzük, hogy hol szarodik el, mondjuk 600px-nél (600px a képernyő szélessége)
ott már elég az alján van a szöveg az elemekben 
és akkor itt jön a képbe a media query 
-> 
@media screen and (max-width: 600px) {
    .flex {
        flex-direction: column;
    }
}

és akkor itt azt modnjukm hogy 600px-nél a flex-nek, hogy legyen a flex-direction: column!!!!!!!!!!!!
Ez azt fogja eredményezni, hogy ugye a flex miatt ezek az elemek egymás melett vannak, de azt mondjuk a media screen-nek
hogy max-width: 600px, tehát ha a képernyő látható szélessége, mikor max 600px (tehát 600px vagy kevesebb),
akkor flex-nek, amiben vannak ezek a flex-el-k az legyen flex-position: column
tehát rendeződjenek ezek az elemek egymás alá és ne egymás mellé és akkor már úgy jól ki fog férni

és akkor itt még mondhatjuk a flex-el-nek, hogy width: 100%!!!!!!!!!!!!!!!!!!!!!!!!!!!
-> 
@media screen and (max-width: 600px) {
    .flex {
        flex-direction: column;
    }
    .flex-el {
        width: 100%;
    }
}

és akkor már ez is responsive lesz, hiszen ha csak a flex direction-t változatjuk meg, akkor ezek a flex-el-tek, ugye 
250px-ek lesznek, de ha viszont ennek megadunk egy width: 100%-ot a media screen-ben, akkor viszont 600px képernyő szélesség alatt 
fel fogják ezek a flex-el-tek venni a 100%-át a látható képernyőszélességnek 
tehát ha képernyő 500px széles, akkor a flex-el is fel fogja venni ezt a szélességet 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Így lehet responsive-vá tenni egy weboldalt 
*************************************************************************************************************************************
Grid-es példa 
-> 
    <div class="grid-8">
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
        <div class="grid-el"></div>
    </div>

css-ben a grid-el egy picit más lesz, mint a flex-el, mert flex-el-nél mindenképpen meg kell határozni egy szélességet (kivéve flex-grow)
meg egy magasságot is meghatároztunk a háttérszín és a border mellé, itt meg a magasságot majd beállítjuk a padding-bottom: 100%-val 
border meg a háttérszín az kell ide is 

.grid-8 {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

    background-color: #3db399;
    border: 2px solid #2d8370;
    padding-bottom: 100%;
}

A grid is összemegy és abban se férne ki tartalom, ha már nagyon kevés lenne a grid-el-nek a szélessége!!!
És akkor mi meg tudjuk mondani a media screenvel, hogy hol és mikor menjen be kevesebb oszthatóba 

@media screen and (max-width: 1080px) {
    .grid-8 {
        grid-template-columns: repeat(6, 1fr);
    }
}
és akkor ha a képernyő az max 1080-as széles, akkor a grid-8-nak azt modnjuk, hogy ez már csak 6*1fr legyen, ne 8*1fr
a 2 grid, amivel itt kevesebb van egy sorban, azok pedig lementek egy következő sorba 1080px szélességnél 

de ezt lehet tovább csinálni, mondjuk, hogy 720px már csak 4 grid-el legyen egy sorban ne 6 

@media screen and (max-width: 720px) {
    .grid-8 {
        grid-template-columns: repeat(4, 1fr);
    }
}

540px-en már csak 2 legyen egy sorba 

@media screen and (max-width: 540px) {
    .grid-8 {
        grid-template-columns: repeat(2, 1fr);
    }
}

360px-nél pedig már csak azt mondjuk, hogy 1fr és kész 

@media screen and (max-width: 360px) {
    .grid-8 {
        grid-template-columns: 1fr;
    }
}

Az egész -> 

@media screen and (max-width: 1080px) {
    .grid-8 {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media screen and (max-width: 720px) {
    .grid-8 {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 540px) {
    .grid-8 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 360px) {
    .grid-8 {
        grid-template-columns: 1fr;
    }
}

Így lehet a reszponzibilitást befolyásolni!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!







*/