import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Results from './Results';

const mockStore = configureStore([]);

describe('<Results />', () => {

    let store;
    let component;

    it('should render with initial state from Redux store', () => {
        store = mockStore({
            searchResults: [],
            refinedResults: [],
            refineText: "",
            onlyHD: false
        });
        component = renderer.create(
            <Provider store={store}>
                <Results />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render with results', () => {
        store = mockStore({
            searchResults: [
                {
                    "id": "LczA7wqUQDE",
                    "title": "DAS NA DAS - JAYESH GANDHI",
                    "description": "Bhajan : DAS NA DAS..\n\nSinger : Jayesh Gandhi\nMusic  : Jayesh Gandhi\nVideo Creator: Jayesh Gandhi\n\nDedicating this bhajan to Param Pujya Pragat GuruHari\nShri Hariprasad Swamiji Maharaj.\n\n!! HAPPY NEW YEAR -WELCOME 2019 !!\n\nJai Swaminarayan I Das Na Das\n\n\n\n\n\n\n\nPL.NOTE THAT ALL RIGHTS TO  IMAGES AND VIDEO USED IN THIS VIDEO BELONGS TO THE ORIGINAL OWNER OF THE RESPECTIVE  CONTENT .No Copyright infringement intended.\n\n\n\nSince owner of the original Composition of the above bhajan is Jayesh gandhi, please note that Uploading of the above Bhajan [either live recorded/telecasted video with audio or only audio ]except this channel [jgharibhagat] will be counted/treated as copyright infringement done by the concern person/channel.",
                    "thumbDefault": "https://i.ytimg.com/vi/LczA7wqUQDE/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/LczA7wqUQDE/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/LczA7wqUQDE/hqdefault.jpg",
                    "channelTitle": "Jayesh Gandhi YDS",
                    "channelId": "UCw-_RnlUMiDknwa17iw2-bw",
                    "publishedAt": "Jan 01, 2019",
                    "duration": "06:07",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "54797",
                    "likeCount": "897",
                    "dislikeCount": "20"
                },
                {
                    "id": "EJZNky4hWwY",
                    "title": "Das passiert, wenn du Kokain nimmst!",
                    "description": "*​ https://www.blinkist.de/tomatolix Dieses Video wurde unterstützt durch Blinkist / *Werbung: Unter diesem Link erhaltet ihr 25% Rabatt auf das Jahresabo \"Blinkist Premium\", und könnt Blinkist 7 Tage kostenlos testen.\n\nIn letzter Zeit gibt es immer wieder Meldungen, dass tonnenweise Kokain sichergestellt wurde. \nKokain scheint super beliebt zu sein, aber was steckt hinter der Substanz und wie wirkt Kokain wirklich? Das wollte ich herausfinden und habe ein Selbstexperiment gemacht. \n\nVielen Dank an Dr. Fabian Pitter Steinmetz\n\nDieses Video dient zur Aufklärung und soll illegale oder gefährliche Handlungen nicht verharmlosen. Drogen jeglicher Art bieten ein gewisses Gefahrenpotenzial. Ich rate euch nicht dazu, Gezeigtes nachzumachen. Solltet ihr es doch tun, achtet bitte unbedingt auf Safer Use Regeln und informiert euch ausführlich bei unterschiedlichen Quellen, z.B: \nhttps://www.saferparty.ch/kokain.html\nhttps://mindzone.info/drogen/kokain/\n\nHier findet ihr Hilfe, falls ihr Probleme mit eurem Konsum habt: https://www.dhs.de/service/suchthilfeverzeichnis\n\nKapitelübersicht:\n\n00:00 Intro\n01:23 Definition: Was ist Kokain?\n01:40 Die Geschichte von Kokain\n02:48 Vorbereitung\n04:20 Abhängigkeit\n05:40 Einnahme + erste Effekte\n07:21 Wirkmechanismus im Gehirn\n08:16 Wirkung Kokain\n10:35 Nachlegen\n11:27 Spiel 1: Der heiße Draht\n12:48 Spiel 2\n14:17 Spiel 3: Memory auf Koks\n16:03 Wirkung lässt nach\n16:42 Gefahren\n17:40 Ethik\n18:25 Werbung\n19:27 Der Tag danach\n19:58 Fazit\n\nFolgt mir gerne hier:\n► INSTAGRAM @tomatolix  http://www.instagram.com/tomatolix\n► TWITCH https://www.twitch.tv/tomatolix\n► DISCORD https://www.discord.id/tomatolix\n► TWITTER @tomatolix http://www.twitter.com/tomatolix\n► TIKTOK @tomatolix https://vm.tiktok.com/JJoQMJD/\n► FACEBOOK Tomatolix http://www.facebook.com/Tomatolix \n\nHier kannst du meine Inhalte unterstützen:\n► Kanalmitglied werden: https://www.youtube.com/channel/UCNCktfoFAXtXnMlhjyc9SPA/join\n► Patreon: https://www.patreon.com/tomatolix\n► Paypal: https://www.paypal.me/Tomatolix\n\nMein Equipment:\nKameras:\nMeine Hauptkamera: *https://amzn.to/30Rp1RV\nMeine große Vlogkamera: *https://amzn.to/2IeV3PR\nMeine kleine Vlogkamera: *https://amzn.to/2VZJH7m\nGoPro: *https://amzn.to/2EJKWlm\n\nObjektive:\nStandartobjektiv auf der Hauptkamera: *https://amzn.to/2I8fJsP\nObjektiv an der Vlogkamera: *https://amzn.to/3bvYtL3\nLieblingsobjektiv: *https://amzn.to/2EKZml0\n\nTon:\nMikrofon an der Vlogkamera: *https://amzn.to/2EMyAJ9\nAnsteckmikrofon: *https://amzn.to/2I6b4I0\nMikrofon für Voice Over: *https://amzn.to/2YhKwJN\n\nSchnitt + Postproduktion:\nMein iMac: *https://amzn.to/30YYt0T\n\nMusik: Epidemic Sound - Über diesen Link kannst du die Audio Bibliothek 30 Tage kostenlos testen: *http://share.epidemicsound.com/pRfQg\n\n*Hierbei handelt es sich um Affiliate Links. Wenn du dich darüber anmeldest oder ein Produkt kaufst, bezahlst du nicht mehr, aber ich bekomme eine Provision.",
                    "thumbDefault": "https://i.ytimg.com/vi/EJZNky4hWwY/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/EJZNky4hWwY/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/EJZNky4hWwY/hqdefault.jpg",
                    "channelTitle": "tomatolix",
                    "channelId": "UCNCktfoFAXtXnMlhjyc9SPA",
                    "publishedAt": "Mar 28, 2021",
                    "duration": "20:57",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "342193",
                    "likeCount": "32637",
                    "dislikeCount": "343"
                },
                {
                    "id": "Y-B0lXnierw",
                    "title": "Danger Dan - Das ist alles von der Kunstfreiheit gedeckt (Antilopen Gang)",
                    "description": "Das unerwartete Danger Dan-Klavieralbum „Das ist alles von der Kunstfreiheit gedeckt“ erscheint am 30.04.2021. Jetzt vorbestellen: ► https://to.lopi.link/kunstfreiheit\n\nSingle streamen: ► https://dangerdan.lnk.to/diavdkg\n\nMusik & Text: Danger Dan\n\nVideo: David Bruchmann\n► https://www.instagram.com/bild_und_bruchmann\n\nDanke an das Theater Aachen, Harald Wolff und Inge Zeppenfeld!\n\n► https://www.instagram.com/danger_dan_666\n► https://www.facebook.com/dangerdan666\n\n► https://www.antilopengang.de\n► https://www.instagram.com/antilopengang\n► https://www.facebook.com/antilopengang\n► https://www.twitter.com/antilopengang\n\n► https://www.antilopengeldwaesche.de\n\nKontakt: Antilopen Geldwäsche / kontakt@antilopengang.de\nBooking: KKT / humberto@kkt.berlin",
                    "thumbDefault": "https://i.ytimg.com/vi/Y-B0lXnierw/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/Y-B0lXnierw/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/Y-B0lXnierw/hqdefault.jpg",
                    "channelTitle": "Antilopen Gang",
                    "channelId": "UC5FiywIniCRgiuMjiK8lufQ",
                    "publishedAt": "Mar 25, 2021",
                    "duration": "04:17",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "886446",
                    "likeCount": "63576",
                    "dislikeCount": "1907"
                },
                {
                    "id": "eq6sdqgCbkw",
                    "title": "24h auf der Rolltreppe || Challenge || Das schaffst du nie",
                    "description": "Es ist Zeit für Veränderung! Ab jetzt stellt Sebastian Meinberg die Challenges! Ab jetzt wird Marc zusammen mit Ari die Challenges machen! Zum Start hat sich unser neuer Fiesling Sebastian Meinberg einen lang ersehnten Community Wunsch ausgesucht! 24 Stunden Rolltreppe! Marc muss es dabei schaffen, 24h auf einer Rolltreppe bleiben! Wie sich Marc bei seiner ersten Challenge schlägt, seht ihr im neuen Video von „Das schaffst du nie!“.\n\n24H STUNDEN ROLLTREPPE = NEUER WELTREKORD?! \n2012 wurde der Weltrekord mit 50.085 Stufen festgesetzt. 2017 gab es dann einen neuen Rekord mit 82.301 Stufen. Jetzt im Jahr 2021 versucht sich Marc an dieser gigantischen Aufgabe - 24 Stunden eine Rolltreppe erklimmen! Ob Marc es schafft einen neuen Weltrekord aufzustellen oder überhaupt 24 Stunden durchhält, seht ihr in der neuen Folge von „Das schaffst du nie!“.\n\nROLLENTAUSCH FÜR IMMER!\nJahrelang hat der Fiesling Marc unsere Helden unterdrückt und ab heute möchte sich Sebastian Meinberg dies nicht mehr gefallen lassen! Ab heute tauschen Marc und Meini die Rollen! Gemeini ist der neue Fiesling von „Das schaffst du nie!“ und erfüllt mit seiner ersten Challenge einen lang ersehnten Community-Fan-Wunsch! Könnte es einen besseren Start für den neuen Fiesling geben?\n \nWas ist eurer Meinung nach die krasseste 24h Challenge in der Geschichte von Das schaffst du nie gewesen? Schreibt es uns in die Kommentare!\n\nAch ja bevor wir es vergessen: APRIL APRIL\n\n#funk #dsdn #dasschaffstdunie\n********************************************************************\nOb das Jahr 2020 zerstören, eine Skischanze hochrennen oder eine Skulptur aus Eis schnitzen: Bei „Das schaffst du nie!“ stellt der fiese Redakteur Marc Seibold den zwei Hosts Ariane Alter und Sebastian Meinberg immer abwechselnd eine Challenge – gerne auch 24 Stunden lang. Schaffen die Hosts die Challenge, dürfen sie Marc bestrafen. Schaffen sie es nicht, müssen sie noch eine Bestrafung ertragen. Jeden Donnerstag um 15 Uhr gibt’s ein neues Video von „Das schaffst du nie!“. Heute: 24 Stunden Rolltreppen Challenge. Auf jede neue Challenge kommt am darauffolgenden Donnerstag die Bestrafung.\nWer Sebastian bei der nächsten Challenge sehen möchte, klickt hier: https://www.instagram.com/heinz.wescher/\nUnd wer Marc folgen möchte, klickt hier: https://instagram.com/marc_cyborg ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nYo! Wir gehören auch zu #funk! Checkt da mal vorbei:\nInstagram: https://www.instagram.com/funk\nYouTube: https://youtube.com/funkofficial\nfunk Web-App: https://www.funk.net/\nFacebook: https://www.facebook.com/funk/\nImpressum: http://go.funk.net/impressum",
                    "thumbDefault": "https://i.ytimg.com/vi/eq6sdqgCbkw/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/eq6sdqgCbkw/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/eq6sdqgCbkw/hqdefault.jpg",
                    "channelTitle": "Das schaffst du nie!",
                    "channelId": "UC6Nh0xrtXJfNGucGtVrqjHw",
                    "publishedAt": "Apr 01, 2021",
                    "duration": "21:32",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "420862",
                    "likeCount": "26507",
                    "dislikeCount": "765"
                },
                {
                    "id": "Xc4veW5wF48",
                    "title": "Falaknuma Das - Arerey Manasa Lyric (Telugu) | Vishwak Sen, Sid Sriram Vivek Sagar | Tharun Bhascker",
                    "description": "Watch Arerey Manasa official Telugu lyric video from the movie Falaknuma Das\n\nMovie - Falaknuma Das\nSong - Arerey Manasa \nComposed and Arranged by Vivek Sagar\nVocals by Sid Sriram\nLyrics by Kittu Vissapragada\nStarring - Vishwak Sen, Saloni Misra, Harshita Gaur, Prashanthi Charuolingah, Uttej, Tharun Bhascker\nDirected by Vishwak Sen\nProducer - Karate Raju\nOriginal Sound Track by Vivek sagar\nCinematographer- Vidya Sagar Chinta\nArt-Akhila Pemmasani, Tarun, Vinod \nEditor - Ravi Teja\nExecutive producer - Sandeep Cherlapally\nProduction - Jay Chandra and Gopal Upadhyay\nBanner - Vanmaye Creations In association with Vishwak Sen cinemas & Terranova Pictures & Media 9 Creative Works\nPresents - Suresh Productions\n\nMusician Credits -\nComposed and Arranged by Vivek Sagar\nLyrics by Kittu Vissapragada\nVocals by Sid Sriram\nGuitars by Varun Venugopal \nSaarangi by Aslam Khan\nFlute by Pramod Umapathi\nHarmonium by Yakub Ali\nViolin by Abhijert Gurjale \nBass and Additional Programming by Vivek Sagar\nDrums by David Joseph\n\nRecorded at Krimson Avenue , Chennai\nRecorded and Produced at Tapeloop, Hyderabad \n\nMixed by Sanjay Das at Tapeloop\nMastered by Shadab Rayeen\n\nMusic Label - Sony Music Entertainment India Pvt. Ltd.\n\n© 2019 Sony Music Entertainment India Pvt. Ltd.\n\nSubscribe:\nYouTube: https://www.youtube.com/c/SonyMusicSouth\nVEVO: https://www.youtube.com/user/SonyMusicSouthVEVO\n\nLike us:\nFacebook: https://www.facebook.com/SonyMusicSouth\n\nFollow us:\nTwitter: https://twitter.com/SonyMusicSouth\nInstagram: sonymusic_south",
                    "thumbDefault": "https://i.ytimg.com/vi/Xc4veW5wF48/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/Xc4veW5wF48/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/Xc4veW5wF48/hqdefault.jpg",
                    "channelTitle": "Sony Music South",
                    "channelId": "UCn4rEMqKtwBQ6-oEwbd4PcA",
                    "publishedAt": "May 01, 2019",
                    "duration": "05:02",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "11715539",
                    "likeCount": "84292",
                    "dislikeCount": "2622"
                },
                {
                    "id": "PUQqSuvBoLo",
                    "title": "Das Na Das status",
                    "description": "Video from Das Na Das",
                    "thumbDefault": "https://i.ytimg.com/vi/PUQqSuvBoLo/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/PUQqSuvBoLo/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/PUQqSuvBoLo/hqdefault.jpg",
                    "channelTitle": "das nu das 369",
                    "channelId": "UCHfBA7nw5Z9OzMllgXBuBiA",
                    "publishedAt": "Jul 13, 2019",
                    "duration": "00:32",
                    "definition": "sd",
                    "dimension": "2d",
                    "viewCount": "733",
                    "likeCount": "37",
                    "dislikeCount": "0"
                },
                {
                    "id": "4ErvihWA-A8",
                    "title": "Der BESTE Osterhase von ALLEN (REVIEW)",
                    "description": "Habt ihr euch nicht auch schon immer gefragt, welcher Osterhase der Beste ist?\nWelchen man guten Gewissens an seine Liebsten verschenken kann & welche man lieber für seine \"liebste\" Schwiegermutter nimmt. Kein Problem Anni the Gourmet hat alle für euch durchgetestet (und fast gekotzt).\n\nViel Spaß! \n\nMein Neuer YouTube Kanal: https://youtu.be/wnPo9acp3o4\n\nTägliche Livestreams: http://www.Twitch.tv/AnniTheDuck\n\nFolgt mir hier, da bin ich aktiver, lol\n\nInstagram: http://www.instagram.com/AnniTheDuck\nTwitter: http://www.Twitter.com/AnniTheDuck\n\nBusiness Anfragen: Anni@2ndwave.rocks\n\nEhrlich, was liest du hier in der Infobox rum...was erwartest du hier zu finden? Ok, ich erzähl noch n schlechten Witz, dann kannst du mit deinem Leben weiter machen: \"Na soll ich dir mal einen echten Osterhasen zeigen?“\nNa, hast du gelacht?....Ich auch nicht. Aber hey, so läuft das im Infobox-Text-Life..",
                    "thumbDefault": "https://i.ytimg.com/vi/4ErvihWA-A8/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/4ErvihWA-A8/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/4ErvihWA-A8/hqdefault.jpg",
                    "channelTitle": "Anni The Duck",
                    "channelId": "UC-be6zeJzhz-bnv-PIxCemg",
                    "publishedAt": "Apr 02, 2021",
                    "duration": "12:26",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "174278",
                    "likeCount": "16093",
                    "dislikeCount": "470"
                },
                {
                    "id": "8kcG7Whh8Yo",
                    "title": "home :) cover by paravi das",
                    "description": "NOT MY PHONE SLIDING THE ENTIRE TIME this was my first take lol im too tired to re-record i had my first day of spring classes HEHE also THANK YOU FOR 20K SUBSCRIBERS ??? AND 50K ON IG ??? AND A MILLION FOLLOWERS ON TIKTOK ???? life doesn't feel real these days. so much to be grateful for. i cannot thank you enough.\n\nas always, thank u 4 being here, not just on this video somewhere on YouTube, but in this life. I appreciate ur existence and ik a lot of other ppl do too :)\n\nSTREAM MY MUSIC: https://biglink.to/pxrxvi​​\nALL SOCIALS: @pxrxvi​",
                    "thumbDefault": "https://i.ytimg.com/vi/8kcG7Whh8Yo/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/8kcG7Whh8Yo/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/8kcG7Whh8Yo/hqdefault.jpg",
                    "channelTitle": "pxrxvi",
                    "channelId": "UCj-Bbd__pF_vRGpMKEPIkhA",
                    "publishedAt": "Mar 30, 2021",
                    "duration": "04:06",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "93309",
                    "likeCount": "10132",
                    "dislikeCount": "9"
                },
                {
                    "id": "4vUtXdXmnRE",
                    "title": "Ultra Deep Bass Test !!",
                    "description": "➥ Bass Boosted Songs\n☑ Subscribe: http://bit.ly/29GSODZ\n☑ Facebook: http://bit.ly/29W63kB\n☑ Submission: http://goo.gl/GF3XfU\n\nSong: Teriyaki Boyz - Tokyo Drift (PedroDJDaddy Remix)\n\n➥ PedroDJDaddy\nhttps://soundcloud.com/pedrodjdaddyofficial\nhttps://www.facebook.com/pedrodjdaddyofficial\nhttps://twitter.com/PedroDJDaddy \nhttps://www.instagram.com/pedrodjdaddy\n\n/\\ /\\ /\\",
                    "thumbDefault": "https://i.ytimg.com/vi/4vUtXdXmnRE/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/4vUtXdXmnRE/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/4vUtXdXmnRE/hqdefault.jpg",
                    "channelTitle": "BASS BOOSTED SONGS",
                    "channelId": "UCi0iJvEVojAqg-OBp0X364Q",
                    "publishedAt": "Nov 15, 2018",
                    "duration": "03:46",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "54392257",
                    "likeCount": "750422",
                    "dislikeCount": "22958"
                },
                {
                    "id": "RPN88D_HjMU",
                    "title": "Xavier Naidoo - Ich kenne nichts (Das so schön ist wie du) [Official Video]",
                    "description": "\"Ich kenne nichts (Das so schön ist wie du)\" mit RZA aus dem Album \"Zwischenspiel / Alles für den Herrn\".\n\n\nDie Single \"Ich kenne nichts (Das so schön ist wie du)\" feat. RZA\n\niTunes ►► https://apple.co/2EIrVky\namazon ►► https://amzn.to/2nF2DcM\n\n\nDas Album \"Zwischenspiel / Alles für den Herrn\"\n\niTunes ►► https://apple.co/2MeDRit\namazon ►► http://amzn.to/132NYEK\n\nMediaMarkt ►► https://bit.ly/2MoXQKt\nSaturn ►► https://bit.ly/2MLHKrf\n\nSpotify ►► https://spoti.fi/2KW22MW\nApple Music ►► https://apple.co/2PcLyDx\namazon Music ►► https://amzn.to/2MLWK8t\nDeezer ►► https://bit.ly/2OAXVZ2\n\n\nAbonnier' jetzt Xaviers YouTube Kanal!\n►► https://www.youtube.com/xaviernaidooofficial\n\n\nMehr News & Infos gibt’s online auf Xaviers Webseite, Facebook & Co.\n\nWebseite ► http://www.xaviernaidoo.de\nFacebook ► http://www.facebook.com/XavierNaidoo\nInstagram ► https://www.instagram.com/xaviernaidoo",
                    "thumbDefault": "https://i.ytimg.com/vi/RPN88D_HjMU/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/RPN88D_HjMU/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/RPN88D_HjMU/hqdefault.jpg",
                    "channelTitle": "Xavier Naidoo",
                    "channelId": "UCflxjfjLu4Fhj9XZ_IvWwQw",
                    "publishedAt": "Dec 05, 2008",
                    "duration": "05:32",
                    "definition": "sd",
                    "dimension": "2d",
                    "viewCount": "71023125",
                    "likeCount": "226879",
                    "dislikeCount": "10129"
                },
                {
                    "id": "lc4oUzjtj7I",
                    "title": "Ben Zucker - Wer sagt das?! (Offizielles Musikvideo)",
                    "description": "Ben Zucker - nach dem Megaerfolg von \"Na und?!\" jetzt endlich seine neue Single \"Wer sagt das?!\"!\n\n\"Wer sagt das?!\" jetzt überall erhältlich!\n▶️ http://www.umgt.de/ben-zucker\n\nSein Album \"Wer sagt das?!\" jetzt vorbestellen!\n▶️ http://www.umgt.de/ben-zucker\n\nBen Zucker 2019 auch auf großer Arena-Tournee:\n▶️ Tickets unter: http://www.eventim.de\n01.11.2019 Riesa \n02.11.2019 Leipzig \n03.11.2019 Chemnitz \n05.11.2019 Münster \n06.11.2019 Köln \n08.11.2019 Neubrandenburg \n09.11.2019 Hamburg \n10.11.2019 Oberhausen \n21.11.2019 Erfurt \n22.11.2019 Hannover \n23.11.2019 Rostock \n24.11.2019 Bremen \n26.11.2019 Stuttgart \n27.11.2019 Frankfurt am Main \n29.11.2019 Magdeburg \n30.11.2019 Berlin \n\nFOLGT BEN ZUCKER IM NETZ:\n▶️ Facebook: https://www.facebook.com/bfmusik\n▶️ Instagram: http://instagram.com/ben_zucker_musik\n\nNEU: “Ich find Newsletter toll“ …und du? Jetzt anmelden\n▶️  http://newsletter.universal-music.de/form/?artist=ich-find-schlager-toll\n \nNEU: “Ich find Schlager toll“ gibt’s jetzt auch zum Anziehen\n▶️  https://www.ichfindschlagertollshop.de/\n \n“Ich find Schlager toll - Herbst/Winter 2018/19“ – Alle aktuellen Schlagerhits auf einem Album\n▶️  https://lnk.to/IchfindSchlagertoll2018-19\n \nUnsere \"Ich find Schlager toll\" - Playlist mit den neuesten Schlager Hits\n▶️  https://lnk.to/IchFindSchlagerToll\n \nAlle deine Schlager-Musikvideos\n▶️  http://bit.ly/OffizielleVideos\n \nUnsere Webseite\n▶️  http://bit.ly/IFST-webseite\n \nFolge uns auch auf Facebook und Instagram\n▶️  https://www.facebook.com/ichfindschlagertoll\n▶️  https://www.instagram.com/ichfindschlagertoll\n \nKanal abonnieren\n▶️  http://bitly.com/YTSchlager\n\n#BenZucker #WerSagtDas #IchfindSchlagertoll\n\nMusic video by Ben Zucker performing Wer sagt das?!. © 2019 Universal Music GmbH\n\nhttp://vevo.ly/9uTh5b",
                    "thumbDefault": "https://i.ytimg.com/vi/lc4oUzjtj7I/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/lc4oUzjtj7I/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/lc4oUzjtj7I/hqdefault.jpg",
                    "channelTitle": "ICH FIND SCHLAGER TOLL!",
                    "channelId": "UCUJHYmJ3_1Kwfs3lqYc_Rxg",
                    "publishedAt": "Mar 15, 2019",
                    "duration": "03:12",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "4645424",
                    "likeCount": "19420",
                    "dislikeCount": "945"
                },
                {
                    "id": "Ie6OFn5Il1Q",
                    "title": "Das na das status",
                    "description": "",
                    "thumbDefault": "https://i.ytimg.com/vi/Ie6OFn5Il1Q/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/Ie6OFn5Il1Q/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/Ie6OFn5Il1Q/hqdefault.jpg",
                    "channelTitle": "Vaghela Studio",
                    "channelId": "UCQ232cpl-qV9D0cSKazCPjw",
                    "publishedAt": "Feb 04, 2020",
                    "duration": "00:31",
                    "definition": "sd",
                    "dimension": "2d",
                    "viewCount": "2499",
                    "likeCount": "95",
                    "dislikeCount": "2"
                },
                {
                    "id": "u96zb1ivc24",
                    "title": "Tu chale mari saath",
                    "description": "",
                    "thumbDefault": "https://i.ytimg.com/vi/u96zb1ivc24/default.jpg",
                    "thumbMedium": "https://i.ytimg.com/vi/u96zb1ivc24/mqdefault.jpg",
                    "thumbHigh": "https://i.ytimg.com/vi/u96zb1ivc24/hqdefault.jpg",
                    "channelTitle": "Sadhu Sharanagatdas",
                    "channelId": "UCUU19yuF72nDgMhRsHfraGg",
                    "publishedAt": "Sep 23, 2014",
                    "duration": "07:06",
                    "definition": "hd",
                    "dimension": "2d",
                    "viewCount": "1292654",
                    "likeCount": "4086",
                    "dislikeCount": "478"
                }
            ],
            refinedResults: [],
            refineText: "",
            onlyHD: false
        });
        component = renderer.create(
            <Provider store={store}>
                <Results />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

});