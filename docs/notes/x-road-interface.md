# X-teega ühildumine

X-tee on Eestis peamine andmevahetustarkvara, mida Eesti e-riik kasutab. Tootmiskeskkonnas vajab ühildumine turvaserverit, aga arenduskeskkonnas mitte - seetõttu kaob ära turvaserveri seadistamise takistus lõputöös. On vaja vaid uurida, kuidas X-tee iseteeninduskeskkonnas ee-dev keskkonnaga liituda ja ühendusi testida. Seni olen leidnud EHISe (Eesti Hariduse Infosüsteemi) teenusekirjeldused, kuid teised ootavad veel uurimist.

## EHISe liidestumine

EHISes pakub mulle kõige rohkem huvi `isikukaardi` päring. Seal sees on andmekogu väli, mis on vaja veel läbi uurida.

### Küsimused

1. Mida hõlmab endas `isikukaardi` sees olev andmekoguväli?
2. Mis tehnoloogiaga testida ühendust ja teha POC?

## Teiste X-tee teenustega liidestumine

Teiste X-tee teenustega liidestumine vajab veel analüüsi. Tean, et tahan liidestuda:

1. Töötamiste registriga
2. Koolitusinfo registritega, kui need olemas on
3. Elukoha- ja isikuandmete registriga
4. ID kaardi pildi jaoks mingi registriga veel

Üldiselt vajab enne detailsusse minekut analüüsi, millest koosneb CV ning mis andmeid selle jaoks üldse koguma peab.