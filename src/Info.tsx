import taloPNG from './assets/aitomaen_ns_talo.png'
import arttuJariPNG from './assets/arttu_jari.png'
import './Info.css'


const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.5845570800725!2d26.842052655598735!3d60.8639228876968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691ad15f1b8e761%3A0x1adb3409e9f6c595!2sAitom%C3%A4en%20Nuorisoseura%20r.y.!5e0!3m2!1sfi!2sfi!4v1714114006373!5m2!1sfi!2sfi'

const Info = () => {
  return (
    <div id='Info' className='Info page'>

      <div className='highlight'>
        <h1>Aitomäen Myllerrys 2024 <br />on päättynyt</h1>
          <p>Kiitoksia kaikille osallistuneille!</p>
          <p>Seuraavaa Myllerrystä organisoidaan paraikaa ja tiedot vuoden 2025 tapahtumasta päivitetään tänne heti kun päivämäärä on varmistunut. Pysy kuulolla!</p>
      </div>

      <h1>Aitomäen Myllerrys 16.-18.8.2024</h1>
      <div className='contents'>
        <p>
          Aitomäen Myllerrys vastaa paritanssin nälkäisten kutsuun ja tarjoaa kaikelle kansalle mahdollisuuden opiskella kansanomaisia paritansseja kolmen päivän ajan, kolmen opettajan tunneilla, kahdella eri tasolla ja kaksien vauhdikkaitten iltabileiden innostaessa väsyneet jalat kokeilemaan vielä kerran kaikkea opittua.
        </p>


        <div id='Teaching' className='anchor' />
        <h2>Opetus</h2>

        <p>
          Leirin opetuksessa syvennytään paritanssin eri puoliin.
        </p>

        <p>
          Perustasolla toivotaan perustaidot kansanomaisten paritanssien askelista tai vahva paritanssikokemus muista lajeista. Tanssitunneilla paneudutaan mm. viemisen ja seuraamisen dynamiikkaan, eri tanssilajien lajityypilliseen hytkeeseen, tanssin ja musiikin yhteyteen sekä vapaaseen improvisaatioon.
        </p>

        <p>
          Jatkotasolla syvennetään parikontaktin käsittelyä sekä musiikin kanssa fraseerausta, etsitään tanssilajeille tyypillistä liikekieltä ja luodaan yhteyksiä muihin paritanssilajeihin. Jatkotasolla toivomme useamman vuoden kansantanssikokemusta ja vahvaa aiempaa harrastuneisuutta tai opintoja kansanparitansseista.
        </p>

        <div id='Jams' className='anchor' />
        <h2 >Jamit</h2>

        <p>
          Iltajameissa päästään ottamaan kurssien opit käyttöön ja pistämään jalalla koreasti svengaavan musiikin tahtiin. Jamimeininkiä on sekä perjantaina että lauantaina alkaen klo 18 ja päättyen kun tanssijat ja soittajat kupsahtavat nukkumaan. Puitteet tarjoaa Niemen navetta, jossa päästään autenttiseen folkkitunnelmaan. Illan aikana on tarjolla iltaruoka, jotta jaksetaan riehua myöhään yöhön asti. Navetassa ei ole alkoholitarjoilua, joten varustauduthan siltä osin henkilökohtaisin eväin mikäli sellaisia kaipaat.
        </p>
        <p>
          Lauantaiohjelman aloittaa Aitoniemen Orkesteri, joka nostaa tunnelman kattoon raisulla pelimannimeiningillä. Tanssilattilla on avoin sekahaku koko illan ja kaikki ovat tervetulleita niin viemään kuin seuraamaan. Virallisen bändin väsähdettyä jatketaan vapaamuotoisilla jameilla, joten jos mielesi tekee istahtaa soittajan tuolille, tuo mukaan oma soittimesi ja liity pelimanneihin.
        </p>


        <div id='Location' className='anchor' />
        <h2>Tapahtumapaikka</h2>

        <iframe
          id='map'
          src={mapSrc}
          style={{ border: '0px' }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'>
        </iframe>

        <p>
          Leiri tapahtuu <a href='https://www.seurantalot.fi/talot/1820-aitom%C3%A4en-nuorisoseura-ry-1009'>Aitomäen nuorisoseuran talolla</a> sekä viereisen Niemen navetan ylisillä. Majoitus tapahtuu seuraintalon majoitustiloissa, jossa on sängyt 20 ihmiselle ja paljon tilaa omien patjojen kanssa tuleville. Ota mukaasi omat petivaatteet ja halutessasi myös tyyny. Koska patjoja on rajoitetusti, pyydämme, että jos vain suinkin kykenet, saavut oman patjan kanssa.
        </p>

        <a id='maplink' href={mapSrc}>Nuorisoseuran talon sijainti kartalla</a>

        <img src={taloPNG} alt='Aitoniemen nuorisoseuran talo' />
        <p />


        <div id='Food' className='anchor' />
        <h2>Ruokailut</h2>
        <p>
          Kurssiin kuuluu täysihoito, eli majoitusten lisäksi kurssilaisille tarjotaan kaikki ruoat kurssin aikana. Tarjolla on perjantaina iltaruoka, lauantaina aamupala, lounas, välipala, päivällinen ja iltaruoka, sekä sunnuntaina vielä aamupala.
        </p>
        <p>
          Mikäli sinulla on ruoka-ainerajoitteita, ilmoitathan niistä ilmoittautuessasi, jotta pystymme tarjoamaan kaikille tukevat ateriat.
        </p>



        <div id='Price' className='anchor' />
        <h2>Hinta</h2>
        Kurssin hinta on 100€. <br id='break' /> Kurssin hintaan sisältyy
        <ul>
          <li>Yhdeksän tuntia opetusta</li>
          <li>Majoitus Aitomäen seurantalolla</li>
          <li>Kahdet iltabileet</li>
          <li>Ruokailut</li>
        </ul>
        <p />

        <div id='Signup' className='anchor' />
        <h2>Ilmoittautuminen</h2>
        Myllerrys on loppuunmyyty!
        <br />
        <br />
        Mikäli missasit ilmoitttautumisen, mutta mielesi tekee leirille, kannattaa edelleen ilmoittautua varasijalle. Peruutuksia todennäköisesti vielä ennen syksyä ilmenee ja pyrimme täyttämään leirin viimeistä paikkaa myöten. Varasijoilta otetaan osallistujia ilmoittautumisjärjestyksessä ja heille ilmoitetaan leirille pääsystä henkilökohtaisesti heti kun paikkoja aukeaa.
        <br />
        Ilmoittautuminen tehdään Nuorisoseurojen ilmoittautumislomakkeella.
        <a href='https://nuorisoseurarekisteri.fi/Tapahtumat/tapahtumatiedot.aspx?id=5676'><button>Ilmoittaudu varasijalle Myllerrykseen</button></a>

        <img src={arttuJariPNG} alt='Arttu ja Jari' />
      </div>

    </div>
  )
}

export default Info