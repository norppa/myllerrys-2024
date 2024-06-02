import jariProfilePng from './assets/jari_haavisto_profile.png'
import maijuProfilePng from './assets/maiju_laurila_profile.png'
import arttuProfilePng from './assets/arttu_peltoniemi_profile.png'
import oktIltamat1 from './assets/okt_iltamat_1.png'

import './Teachers.css'

const Teachers = () => {

  return (
    <div id='Teachers' className='page'>
      <h1>Opettajat</h1>

      <div id='Jari' className='anchor' />
      <img className='profile' src={jariProfilePng} alt='Jari Haavisto' />
      <h2>Jari Haavisto</h2>
      <p>
        Jari on valmistunut Oulun seudun ammattikorkeakoulusta kansantanssinopettajaksi. Hän on opintojensa ohessa opiskellut unkarilaista kansantanssia Budabestissä Magyar Táncművészeti Főiskolassa. Jari opettaa Helsingissä mm. kansanparitansseja harrastavaa tanssiryhmä Susirekkaa, jonka koreografioista ja taiteellisesta linjasta hän myös vastaa. Jari on opettanut useita ryhmiä pääkaupunkiseudulla 2000-luvun alusta asti sekä erikseen tilattavia tiiviskursseja ympäri maata ja mm. Unkarissa ja Yhdysvalloissa. Hän on myös koronapandemian aikana tehnyt sarjan Youtuben kautta levitettyjä opetusvideoita lukiolaisille vanhojen tanssien itsenäiseen etäopiskeluun. Tanssijana Jari on tanssinut useissa teoksissa vuosien varrella mm. Rimpparemmin, Mattien ja Maijojen ja Polskatroikan riveissä.
      </p>
      <p>
        Jaria kiinnostaa vapaan, sosiaalisen tanssin kontakti tanssiparin välisenä yhteisenä liikkeenä, jossa molemmat tanssijat ovat kokonaisuuden muodostumisessa merkityksellisiä. Tärkeitä metodeja Jarin tanssinopetuksessa on: mahdollistaa aloittavan ihmisen mahdollisimman nopea tanssilattialle uskaltaminen ja tanssista nauttiminen, jatkuva uuden oppiminen, parikontaktin kehittäminen ja musiikin tulkitseminen tanssilla.
      </p>

      <div id='Maiju' className='anchor' />
      <img className='profile' src={maijuProfilePng} alt='Maiju Laurila' />
      <h2>Maiju Laurila</h2>
      <p>
        Maiju on aloittanut opintonsa musiikin puolella ja siirtynyt siitä tanssin pariin. Maijulla onkin opetuskilometrejä niin musiikista, tanssista kuin koulusta. Hän on valmistunut musiikkikasvatuksesta (FM), Musiikkipedagogiksi (amk), Tanssinopettajaksi (YAMK), muusikoksi (ao). Maiju opettaa tanssia mm. Aitomäen nuorisoseurassa sekä useassa muussa viikkoryhmässä.
      </p>
      <p>
        Häntä kiinnostaa kansantanssin lisäksi paritanssi myös laajemmin, ja Maiju opettaa ja tanssii mielellään myös esimerkiksi lavatansseja. Paritanssissa häntä kiinnostavat erilaiset kontaktin muodot, eri tanssilajien tyypilliset piirteet sekä lajien yhdistäminen luovasti yhdeksi tanssiksi. Viime vuosina Maiju on opettanut omien ryhmiensä lisäksi monipuolisesti erilaisissa kouluttajan ja opettajan tehtävissä tanssin ja musiikin parissa. Nykyään Maiju työskentelee päivisin luokanopettajana ja iltaisin tanssinopettajana.
      </p>

      <div id='Arttu' className='anchor' />
      <img className='profile' src={arttuProfilePng} alt='Arttu Peltoniemi' />
      <h2>Arttu Peltoniemi</h2>
      <p>
        Arttu on Oulun seudun ammattikorkeasta valmistunut nyky- ja kansantanssin opettaja sekä tanssitaiteilija, joka tutkii työssään kansantanssin merkitystä nyky-yhteiskunnassa heijastaen sitä pohjoismaisen tanssin materiaaliin ja konteksteihin 1800- ja 1900-lukujen vaihteesta. Peltoniemelle kaikki tanssi on merkityksellistä ensisijaisesti tekijänsä sisäisenä ja tekijöiden välisenä kokemuksena. Arttu opettaa useissa pääkaupunkiseudun ryhmissä niin perinteisempää kansantanssia kuin rakastamaansa vapaata, kontaktiin perustuvaa kansanparitanssia. Opettamisen ohella hän työskentelee freelance-tanssitaiteilijana erilaisissa projekteissa ja esityksissä esim. Suomen Kansallisoopperassa ja Raakaa Tradia -kollektiivissa.
      </p>
      <p>
        Kansantanssin opettamista käsittelevässä työssään Peltoniemi on purkanut kansantanssin kuviot kontaktimetodeiksi ja rytmiikoiksi, joita harjoittelemalla tanssija voi toimia niin kutsutussa "epätietämisen" tilassa silti toteuttaen perinteistä liikemateriaalia. Tässä "epätietämisen" tilassa toimiva tanssija on kuitenkin aktiivinen tilanteen tarkkailija, joka ylläpitää kontaktia, yhteistä tai solistista toimintaa, kansantanssin liikeperiaatteita sekä yhteyttä musiikkiin. Harjoitellut liikelaadut ja askelrytmit sekä erilaiset hytkeet pitävät hetkessä syntyvän liikkeen tiukasti perinteeseen juurtuneena ollen kuitenkin tekijöilleen kokoajan juuri tässä tilanteessa syntyvää toimintaa, johon voi haltioituen upota.
      </p>

      <img src={oktIltamat1} alt='OKT Iltamat' />

    </div>
  )

}

export default Teachers