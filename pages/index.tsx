import { Button, Group } from "@mantine/core";
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import classes from '../public/css/styles.module.css';

export default function IndexPage() {
  return (
    <div className= {classes.body} >
      <Navigation/>
      <About/>
    </div>
  );
}
