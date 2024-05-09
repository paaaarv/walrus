import { Button, Group } from "@mantine/core";
import Navigation from './components/Navigation';
import About from './components/About';

export default function IndexPage() {
  return (
    <div>
      <Navigation/>
      <About/>
    </div>
  );
}
