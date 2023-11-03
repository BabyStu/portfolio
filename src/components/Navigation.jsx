
import { Link } from 'react-router-dom';
import Navbar from './navFolder/Navbar';
import CircumIcon from '@klarr-agency/circum-icons-react';

export default function Nav() {

    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    <CircumIcon size={32} name="user" />
                    About
                </Link>,
                <Link key={2} className="nav-link text-light" to="/portfolio">
                    <CircumIcon size={32} name="folder_on" />
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light" to="/resume">
                    <CircumIcon size={32} name="beer_mug_full" />
                    Resume
                </Link>,
                <Link key={4} className="nav-link text-light" to="/contact">
                    <CircumIcon size={32} name="mail" />
                    Contact
                </Link>,
            ]}
        />
    );
}
