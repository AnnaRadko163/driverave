import Image from 'next/image'

import "./footer.css"

export default function Footer() {
    const icons = [
        { id:0, src: './whatsapp.png',alt: 'whatsapp', width:28, height:28},
        { id:1, src: './telegram.png',alt: 'telegram', width:28, height:28},
        { id:2, src: './vk.png',alt: 'vk', width:28, height:19},
        { id:3, src: './email.png',alt: 'email', width:30, height:21},
        
    ]
  return (
    <footer className='footer'>
        <div className='footer__left'>
            <div className='footer__logo'
            >
                <Image src='./logo.png' alt='logo' width={189} height={30}/>
            </div>
            <p>Аренда жилья и автомобилей от владельцев</p>
        </div>
        <div className='footer__right'>
            <div className='footer__icons'>
                {icons.map((e) => (
                    <a key={e.id} href='#'>
                        <Image src={e.src} alt={e.alt}
                        width={e.width} height={e.height}/>
                    </a>
                ))}
            </div>
            <p>Политика конфеденциальности</p>
        </div>

    </footer>
  )
}
