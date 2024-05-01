import { FaFacebookSquare } from 'react-icons/fa'
import nuorisoseuratLogoPng from './assets/nuorisoseurat_logo.png'
import './Contact.css'

const Contact = () => {

  return (
    <div id='Contact' className='page'>
      <div>
        Yhteistyössä:
        <img src={nuorisoseuratLogoPng} alt='Nuorisoseurat logo' />
      </div>
      <div>
        Lisätietoja:
        <a href='mailto:info@myllerrys.fi'>info@myllerrys.fi</a>
        040-5342857
        <a href='https://fb.me/e/1w0s8ez2S'><FaFacebookSquare id='fb-icon' size={36} /></a>
      </div>
    </div>
  )
}

export default Contact