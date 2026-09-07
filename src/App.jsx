import { useEffect, useState } from 'react';
import heroVideo from '../suitedd.mp4';
import suitBlack from '../3.png';
import suitBurgundy from '../4.png';
import suitNavy from '../5.png';
import suitNavyPortrait from '../6.png';

const pieces = [
  ['Charcoal Peak Lapel Suit', 'Bespoke', '₦750,000', 'charcoal', suitBlack],
  ['Aura Silk Gown', 'Bridal', 'By consultation', 'ivory', suitBurgundy],
  ['Dusk Wrap Skirt', 'Ready-to-wear', '₦185,000', 'clay', suitNavy],
  ['Double-Breasted Suit', 'Bespoke', '₦680,000', 'black', suitNavyPortrait],
];
const services = [['01', 'Bespoke tailoring', 'A collaborative fitting process that creates a garment entirely around you.'], ['02', 'Bridal atelier', 'Modern bridal pieces with the intimacy, precision and ceremony they deserve.'], ['03', 'Ready-to-wear', 'Limited pieces, thoughtfully made and ready for life in motion.'], ['04', 'Alterations', 'Expert refinements that bring treasured garments back into perfect balance.']];
const wa = (item = 'an appointment') => `https://wa.me/2340000000000?text=${encodeURIComponent(`Hello Silver Luxe, I'd like to enquire about ${item}.`)}`;

export default function App() {
  const [menu, setMenu] = useState(false); const [piece, setPiece] = useState(null); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); onScroll(); addEventListener('scroll', onScroll, { passive: true }); return () => removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { document.body.style.overflow = menu || piece ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [menu, piece]);
  const links = ['Collections', 'Lookbook', 'Services', 'About'];
  return <>
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}><a className="brand" href="#top">SILVER LUXE</a><nav>{links.map(x => <a href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}<a className="button outline" href="#booking">Book now</a></nav><button className="menu-button" aria-label="Open menu" onClick={() => setMenu(true)}><i/><i/></button></header>
    <aside className={`drawer ${menu ? 'open' : ''}`}><div><span className="brand">SILVER LUXE</span><button aria-label="Close menu" onClick={() => setMenu(false)}>×</button></div>{[...links, 'Booking'].map(x => <a href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)} key={x}>{x}</a>)}<a className="button" href="#booking" onClick={() => setMenu(false)}>Book an appointment</a></aside>
    <main id="top"><section className="hero"><video autoPlay muted loop playsInline preload="auto" className="hero-video"><source src={heroVideo} type="video/mp4"/></video><div className="hero-shade"/><div className="hero-content"><p className="eyebrow light">Lagos · Nigeria</p><h1>Bespoke elegance,<br/><em>rooted in craft.</em></h1><p>Nigerian craftsmanship meets a global point of view.</p><div className="hero-actions"><a className="button light-button" href="#collection">Discover the collection</a><a className="text-link" href="#booking">Book a consultation →</a></div></div></section>
      <section id="collection" className="section"><div className="wrap"><div className="heading"><div><p className="eyebrow">The collection</p><h2>Made to make an<br/><em>impression.</em></h2></div><p>Pieces with presence, shaped through meticulous cuts, quiet texture and an eye for the individual.</p></div><div className="collection-grid">{pieces.map(([name, tag, price, tone, image]) => <button className="piece-card" key={name} onClick={() => setPiece({ name, tag, price, tone, image })}><div className={`piece-art ${tone} photo-art`} style={{ '--piece-image': `url(${image})` }}><span>{tag}</span></div><div className="piece-body"><div><h3>{name}</h3><p>{tag}</p></div><b>{price}</b></div></button>)}</div></div></section>
      <section id="about" className="section about"><div className="wrap about-grid"><div className="about-art photo-about" style={{ '--about-image': `url(${suitNavyPortrait})` }}><span>CRAFTED IN LAGOS</span></div><div><p className="eyebrow">Our heritage</p><h2>Clothes that<br/><em>hold a story.</em></h2><p className="body-copy">Silver Luxe began with a belief: the clothes we wear should feel as personal as the lives we lead. We bring together a contemporary point of view and the patient intelligence of Nigerian craft.</p><a className="text-link dark" href="#booking">Meet the atelier →</a></div></div></section>
      <section id="lookbook" className="section"><div className="wrap"><p className="eyebrow">Lookbook / 2026</p><h2>Form, <em>in motion.</em></h2><div className="lookbook"><div className="look-image one" style={{ '--look-image': `url(${suitBlack})` }}/><div className="look-plate"><small>01 / A SILVER LUXE STUDY</small><p>“A silhouette should never arrive before the woman wearing it.”</p></div><div className="look-image two" style={{ '--look-image': `url(${suitBurgundy})` }}/><div className="look-image three" style={{ '--look-image': `url(${suitNavy})` }}/><div className="look-plate cream"><small>02 / THE ATELIER</small><p>Measured by hand.<br/>Finished with intent.</p></div></div></div></section>
      <section id="services" className="section"><div className="wrap"><p className="eyebrow">What we do</p><h2>At your <em>service.</em></h2><div className="services">{services.map(([num, title, desc]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
      <section className="quotes"><div className="wrap"><blockquote>“The suit had an authority I hadn’t known clothes could give you.”<cite>— Tunde K., Lagos</cite></blockquote><blockquote>“Every small detail felt considered. It was unmistakably mine.”<cite>— Chiamaka N., Abuja</cite></blockquote></div></section>
      <section id="booking" className="booking section"><div className="wrap"><p className="eyebrow light">Begin your piece</p><h2>Made for the<br/><em>moment.</em></h2><p>Visit the atelier or begin your consultation from anywhere.</p><a className="button light-button" href={wa()}>Book on WhatsApp ↗</a></div></section></main>
    <footer><span className="brand">SILVER LUXE</span><p>© 2026 Silver Luxe, Lagos.</p><a href="mailto:hello@silverluxe.com">hello@silverluxe.com</a></footer><a className="chat" href={wa()} aria-label="Book via WhatsApp">◌</a>
    {piece && <div className="modal" role="dialog" aria-modal="true"><button className="modal-backdrop" aria-label="Close details" onClick={() => setPiece(null)}/><section><button className="modal-close" aria-label="Close" onClick={() => setPiece(null)}>×</button><div className={`piece-art ${piece.tone} photo-art large`} style={{ '--piece-image': `url(${piece.image})` }}/><div><p className="eyebrow">{piece.tag}</p><h2>{piece.name}</h2><p>Designed with considered proportion, exquisite finishing and a distinctive point of view.</p><b>{piece.price}</b><a className="button" href={wa(piece.name)}>Enquire on WhatsApp</a></div></section></div>}
  </>;
}
