// Import only the Bootstrap components we need
import {Util, Dropdown, Offcanvas, Popover, Modal} from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
        new Popover(popover)
    });