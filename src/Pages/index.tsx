import { motion, useScroll, useSpring } from 'framer-motion';
import { Agents } from '../components/Agents';
import { Bundles } from '../components/Bundles';
import { Cards } from '../components/Cards';
import { Home } from '../components/Home';
import { Maps } from '../components/Maps';
import { Weapons } from '../components/Weapons';
import './styles.css';

export function Pages() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Home />
      <Agents />
      <Maps />
      <Cards />
      <Bundles />
      <Weapons />
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
