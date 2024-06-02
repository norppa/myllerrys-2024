import { FaFacebookSquare } from 'react-icons/fa'
import nuorisoseuratLogoPng from './assets/nuorisoseurat_logo.png'
import katajaLogoPng from './assets/kataja_logo_alpha.png'
import './Contact.css'

const Contact = () => {

  return (
    <div id='Contact' className='page'>
      <div>
        Yhteistyössä:
        <div className='partners'>
          <a href='https://nuorisoseurat.fi/'>
            <img src={nuorisoseuratLogoPng} alt='Nuorisoseurat logo' />
          </a>

          <div className='spacer' />

          <a href='https://www.kansantanssijamit.fi'>
            <img src={katajaLogoPng} alt='Kataja logo' />
          </a>
        </div>
      </div>
      <div>
        Lisätietoja:
        <a href='mailto:info@myllerrys.fi'>info@myllerrys.fi</a>
        044-9786546
        <a href='https://fb.me/e/1w0s8ez2S'><FaFacebookSquare id='fb-icon' size={36} /></a>
      </div>
    </div>
  )
}

export default Contact