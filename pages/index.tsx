import { Button, Group } from "@mantine/core";
import Navigation from './components/Navigation.js';
import About from './components/About.js';

export default function IndexPage() {
  return (
    <div>
      <Navigation/>
      <About/>
    </div>
  );
}
