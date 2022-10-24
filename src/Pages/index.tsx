import { Agents } from '../components/Agents';
import { Bundles } from '../components/Bundles';
import { Cards } from '../components/Cards';
import { Home } from '../components/Home';
import { Maps } from '../components/Maps';

export function Pages() {
  return (
    <>
      <Home />
      <Agents />
      <Maps />
      <Cards />
      <Bundles />
    </>
  );
}
