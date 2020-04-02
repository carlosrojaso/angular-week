import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-agenda',
    templateUrl: './section-agenda.component.html',
    styleUrls: ['./section-agenda.component.scss']
})
export class SectionAgendaComponent implements OnInit {

    agendas: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.agendas = [
            {
                dia: 'Miercoles',
                hora: '07:00pm - 07:30pm',
                nome: 'Oscar Barajas',
                titulo: '¿Qué es Svelte.js?',
                desc: 'Svelte un nuevo framework de JavaScript que nos permite construir interfaces de usuario. Es considerado el nuevo competidor en la batalla de los frontends donde compiten React, Angular o Vue.',
                imagem: '../../../../assets/img/oscar-barajas.png'
            },
            {
                dia: 'Miercoles',
                hora: '07:30pm - 8:00pm',
                nome: 'Julián Duque',
                titulo: 'Aprendamos sobre Debugging en Node.js',
                desc: "En esta charla vamos a explorar las diferentes herramientas y técnicas para depurar aplicaciones JavaScript y Node.js",
                imagem: '../../../../assets/img/julian-duque.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '08:00pm - 8:30pm',
                nome: 'Yeison Daza',
                titulo: 'Design token en CSS',
                desc: 'Voy a hablar sobre la evolución en los enfoques para escribir css donde uno de los mayores restos a sido mantener la consistencia, hasta llegar a hablar sobre design tokens',
                imagem: '../../../../assets/img/yeison-daza.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '08:30pm - 9:00pm',
                nome: 'Jorge Cano',
                titulo: 'Tbd ',
                desc: 'Tbd ',
                imagem: '../../../../assets/img/jorge-cano.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '09:00pm - 9:30pm',
                nome: 'Maria Alejandra Giraldo',
                titulo: 'NestJS, Como sacarle jugo al back-end siendo front-end',
                desc: 'En en esta charla vamos a aprender como los conocimientos de front-end se pueden fusionar en el back-end',
                imagem: '../../../../assets/img/maleja-giraldo.jpg'
            },
            {
                dia: 'Jueves',
                hora: '07:00pm - 7:30pm',
                nome: 'Nicolas Molina Monroy',
                titulo: 'Acelera la velocidad de navegación de tu Aplicación Angular',
                desc: 'En esta charla vas a aprender a como acelerar la experiencia de navegación de tus usuarios en aplicaciones Angular.',
                imagem: '../../../../assets/img/nicolas-monroy.jpg'
            },
            {
                dia: 'Jueves',
                hora: '07:30pm - 8:00pm',
                nome: 'Sergio Valencia',
                titulo: 'Performance en JS',
                desc: 'Aprende sobre buenas prácticas que te ayudará a mejorar el performance de tu codigo',
                imagem: '../../../../assets/img/sergio-valencia.jpg'
            },
            {
                dia: 'Jueves',
                hora: '08:00pm - 8:30pm',
                nome: 'Fabio Cortés',
                titulo: 'WebXR: La nueva generación de experiencias inmersivas en la web',
                desc: 'Cuando hablamos de experiencias inmerivas en la web nos referimos a todo el espectro de aplicaciones que van desde el mundo real hasta la realidad virtual',
                imagem: '../../../../assets/img/fabio-cortes.jpg'
            },
            {
                dia: 'Jueves',
                hora: '08:30pm - 9:00pm',
                nome: 'Samuel Burbano',
                titulo: 'Vue 3.0 - Composition API',
                desc: 'Veamos la nueva Composition API propuesta para la próxima versión de Vue, como ayuda a mejorar el desarrollo en Vue y la polémica que ha generado en los desarrolladores que usan y aman Vue',
                imagem: '../../../../assets/img/samuel-burbano.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '09:00pm - 9:30pm',
                nome: 'Mayra Rodriguez',
                titulo: 'Promesas vs Observable',
                desc: '¿Cuándo usar promesas? ¿Cuándo usar Observables? haremos una comparación entre ambos y daremos ejemplos reales de cuando hacer desarrollos imperativos o reactivos para que subas tu nivel',
                imagem: '../../../../assets/img/mayra-rodriguez.png'
            },
            {
                dia: 'Viernes',
                hora: '07:00 pm - 7:00pm',
                nome: 'Sebastian Gomez',
                titulo: 'TBD',
                desc: 'TBD',
                imagem: '../../../assets/img/sebastian.jpg'
            },
            {
                dia: 'Viernes',
                hora: '07:30pm - 8:00pm',
                nome: 'Ricardo Chavarria',
                titulo: 'WebPack, ¿Cómo aprovecharlo al máximo?',
                desc: 'En está pequeña charla daremos los primeros pasos con Webpack para conocer sus beneficios y como aprovechalos al máximo, veremos cual es la necesidad de usarlo y tocaremos temas como Hot Reload, Minimización automática, Babel y otros temas interesantes de Webpack.',
                imagem: '../../../assets/img/ricardo-chavarria.jpg'
            },
            {
                dia: 'Viernes',
                hora: '08:00pm - 8:30pm',
                nome: 'Paula Mazo',
                titulo: 'Docker para Front-ends',
                desc: 'Que cosas debes tener en cuenta para usar Docker con tu proyecto en JS',
                imagem: '../../../assets/img/paula-mazo.jpg'
            },
            {
                dia     : 'Viernes',
                hora    : '8:30pm - 9:00pm',
                nome    : 'Vanessa Aristizabal',
                titulo  : 'Meeseeks de JavaScript',
                desc    : 'Los Meeseeks , son criaturas que sirven a un propósito en particular y hay algunas características de JavaScript que podríamos llamar Meeseeks, que nos facilitan mucho la creación de nuestros código y en esta charla quiero darles a conocer algunos de ellos.',
                imagem: '../../../assets/img/vanessa.jpg'
            },
            {
                dia: 'Viernes',
                hora: '09:00pm - 9:30pm',
                nome: 'Jesús Salvador Rodríguez Cardiel',
                titulo: 'JS ha cambiado mi vida',
                desc: 'Como JS revolucionó mi forma de trabajo',
                imagem: '../../../assets/img/jesus-salvador.jpg'
            }
        ];
    }

}
