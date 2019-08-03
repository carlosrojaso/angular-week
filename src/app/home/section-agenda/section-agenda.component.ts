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
                dia: 'Martes',
                hora: '06:00pm - 6:30pm',
                nome: 'Cristian Gutiérrez',
                titulo: 'Concurrencia en JS: Porqué tu "setTimeout" te está mintiendo',
                desc: 'El tema principal es comprender el funcionamiento basico del modelo de concurrencia de JS. Entender conceptos como el stack, event loop, event queue y event job,  para que lo usan los motores de JS y con que se comen. Tambien se busca aclarar un mal entendimiento de metodos asincronicos como los "setTimeout" y demás.',
                imagem: 'https://avatars2.githubusercontent.com/u/22488812?s=460&v=4',
                slides: 'http://bit.ly/2Mzuh8H',
                video: 'https://youtu.be/EIu9MVlgbp0?t=46'
            },
            {
                dia: 'Martes',
                hora: '06:30 pm - 7:00pm',
                nome: 'Sebastian Gomez',
                titulo: 'Implementando MapReduce con Web Workers',
                desc: 'En esta charla vamos a ver el uso de Web Workers para optimizar nuestro trabajo con Javascript fuera del Single Thread Y aplicar técnicas de computación distribuida (mapreduce) con ellos.',
                imagem: '../../../assets/img/sebastian.jpg',
                slides: 'http://bit.ly/2Mzuh8H',
                video: 'https://youtu.be/EIu9MVlgbp0?t=1132'
            },
            {
                dia: 'Martes',
                hora: '07:30pm - 8:00pm',
                nome: 'Paula Mazo',
                titulo: 'Programación Funcional',
                desc: 'Pasaremos por la definición de algunos conceptos de la programación funcional hasta explorar cómo se relacionan con las buenas prácticas del desarrollo.',
                imagem: 'https://avatars2.githubusercontent.com/u/22626905?s=460&v=4',
                slides: 'http://bit.ly/2Mzuh8H',
                video: 'https://youtu.be/EIu9MVlgbp0?t=3966'
            },
            {
                dia: 'Martes',
                hora: '08:00 pm - 8:30pm',
                nome: 'Juan Camilo Diaz',
                titulo: "Google Cloud Platform Big Data Tools",
                desc: 'Cuales son las herramientas orientadas a Big Data que podemos encontrar en la Nube de Google.',
                imagem: 'https://pbs.twimg.com/profile_images/1055300540912074752/Ar7V9bTV_400x400.jpg',
                slides: 'http://bit.ly/2Mzuh8H',
                video: 'https://youtu.be/EIu9MVlgbp0?t=5284'
            },
            {
                dia: 'Miercoles',
                hora: '06:00pm - 6:30pm',
                nome: 'Cesar Suarez',
                titulo: 'RxJS 101',
                desc: 'La idea de la charla es mostrar las bondades de la programa reactiva en Javascript usando  RxJS y algunos de los operadores más utiles que podrian usar en sus proyectos',
                imagem: 'https://pbs.twimg.com/profile_images/1028837466340352000/vSHCLp8E_400x400.jpg',
                slides: 'http://bit.ly/334iTHO',
                video: 'https://youtu.be/778pp-EZBCg?t=372'
            },
            {
                dia: 'Miercoles',
                hora: '06:30pm - 7:00pm',
                nome: 'Jhonatan Giraldo',
                titulo: 'Mastering web components: Without any framework',
                desc: "Let's figured out what we can do with the new web components",
                imagem: 'https://avatars2.githubusercontent.com/u/6934447?s=460&v=4',
                slides: 'http://bit.ly/334iTHO',
                video: 'https://youtu.be/778pp-EZBCg?t=1946'
            },
            {
                dia: 'Miercoles',
                hora: '07:30pm - 8:00pm',
                nome: 'Liz Parody',
                titulo: 'Error Handling Best Practices',
                desc: 'Every developer wants to write code that works. And a lot of times, chances of your program running as expected reduces to one thing: errors.',
                imagem: '../../../../assets/img/lizParody.jpg',
                slides: 'http://bit.ly/334iTHO',
                video: 'https://youtu.be/778pp-EZBCg?t=4500'
            },
            {
                dia: 'Miercoles',
                hora: '08:00pm - 8:30pm',
                nome: 'Santiago Angee',
                titulo: 'How to implement data science projects in the real world',
                desc: 'Lecciones aprendidas de tres casos de uso en la implementación de grandes proyectos de datos y análisis para el sector público y privado.',
                imagem: 'https://media.licdn.com/dms/image/C4E03AQHaatAfDs50yg/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=Q_98s7WCThknbFP7X-_uuMqefTBNViRkgruDSOwv1Og',
                slides: 'http://bit.ly/334iTHO',
                video: 'https://youtu.be/778pp-EZBCg?t=6005'

            },
            {
                dia: 'Jueves',
                hora: '06:00pm - 6:30pm',
                nome: 'Maria Giraldo',
                titulo: 'Redux Saga for handle asynchronous requests in react',
                desc: 'Redux Saga Middleware permite controlar el flujo de operaciones que se realizan mediante la activación de eventos, en nuestras aplicaciones con redux, haciendo uso de las funciones generadoras de ES6,  con las cuales podemos ejecutar procesos asíncronos de manera "secuencial". En esta charla vamos a conocer cómo trabajar con funciones generadoras y los fundamentos de Redux Saga para aplicaciones con react.',
                imagem: 'https://pbs.twimg.com/profile_images/451152111603318784/xEAEpNhy_400x400.jpeg',
                slides: 'http://bit.ly/2KdBbPG',
                video: 'https://youtu.be/tBKf9KMSh4A'
            },
            {
                dia: 'Jueves',
                hora: '06:30pm - 7:00pm',
                nome: 'Sergio Valencia',
                titulo: 'Asincronismos en JS',
                desc: "Aprende todos los distintos caminos que nos da JS para manejar tareas asincronicas.",
                imagem: 'https://pbs.twimg.com/profile_images/1002982260633718784/NxIQNR6L_400x400.jpg',
                slides: 'http://bit.ly/2KdBbPG',
                video: 'https://youtu.be/tBKf9KMSh4A'
            },
            {
                dia: 'Jueves',
                hora: '07:30pm - 8:00pm',
                nome: 'Jose Luis Sepulveda',
                titulo: 'Seeking IoT potential through 5g networks and Big Data',
                desc: 'Seguramente los términos como iot (Internet of things), Smart Cities o self-driving cars suenan familiares, pero ¿has escuchado algo sobre las redes inalámbricas de quinta generación (5G)? , En esta charla se expondrán las características básicas de las redes 5G, sus aplicaciones y el conjunto de tecnologías emergentes que habilitará con su implementación.',
                imagem: 'https://media.licdn.com/dms/image/C4E03AQGTcpM7mQrbOQ/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=JpeFtTxUt1gNx-Z-YwvjRjBswO5A-MfW3EA7YdIBQ8c',
                slides: 'http://bit.ly/2KdBbPG',
                video: 'https://youtu.be/tBKf9KMSh4A'
            },
            {
                dia: 'Jueves',
                hora: '08:00pm - 8:30pm',
                nome: 'Hilder Umana',
                titulo: 'Data Visualization: Tell stories with your data',
                desc: 'La importancia de identificar qué tipo de gráfico utilizar para contar historias con los datos y así generar valor a los usuarios.',
                imagem: 'https://media.licdn.com/dms/image/C5603AQES0jyuwDLjkA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=0RnLek0grfu4s0wRs32Z741oKrdyWzbZ0oqFqCelE4s',
                slides: 'http://bit.ly/2KdBbPG',
                video: 'https://youtu.be/tBKf9KMSh4A'
            },
            {
                dia: 'Viernes',
                hora: '06:00pm - 6:30pm',
                nome: 'Andrea Cordoba',
                titulo: 'Entendiendo los Service Workers',
                desc: 'Las aplicaciones Web progresivas (PWA) permiten funciones importantes como la visualización fuera de línea, la navegación responsive y las notificaciones automáticas, lo que reduce la brecha entre las experiencias móviles y Web. En esta charla nos enfocaremos en una de las características core de las PWA, Service Worker; vamos a ver cómo funcionan, características y algunos ejemplos.',
                imagem: '../../../../assets/img/andrea-cordoba.jpg',
                slides: 'http://bit.ly/2YFgcNA'
            },
            {
                dia: 'Viernes',
                hora: '06:30pm - 7:00pm',
                nome: 'Johann Paul Echavarría Zapata',
                titulo: 'La sabiduría de las guías de estilo',
                desc: "La sabiduría de las guías de estilo. Lo que se aprende leyendo los fundamentos de las guías de estilo de los gigantes de la industria.",
                imagem: 'https://pbs.twimg.com/profile_images/954018981244997632/J_3DPptq_400x400.jpg',
                slides: 'http://bit.ly/2YFgcNA'
            },
            {
                dia: 'Viernes',
                hora: '07:30pm - 8:00pm',
                nome: 'Lorena Correa Mejia',
                titulo: 'Siguiente nivel en pruebas funcionales con Cypress',
                desc: 'Cypress es una herrramienta para manejar pruebas funcionales en frameworks de JavaScript, React, Vue, Angular etc, logrando simular un usuario real y de esta manera podremos tener como desarrolladores  seguridad de lo que estamos entregando al cliente',
                imagem: 'https://pbs.twimg.com/profile_images/1155548739521716225/Flvski7F_400x400.jpg',
                slides: 'http://bit.ly/2YFgcNA'
            },
            {
                dia     : 'Viernes',
                hora    : '8:00pm - 8:30pm',
                nome    : 'Cristian Moreno',
                titulo  : 'Introducing JAMstack - What we talk about when we talk about modern web tools',
                desc    : 'Look at today\'s static sites. Thanks to modern browsers, JavaScript, third-party APIs, and Markup, they\'re anything but static. It\'s time for a new and better way to talk to developers, clients and each other about the work that we do. That way is the JAM stack. The JAM stack is more than just a name change. It\'s an acknowledgment that the way we develop for the web is changing. Developers are moving away from legacy development workflows and databases to new ones built around Git and the API economy. Why? Because JAM stack development delivers better performance, higher security, lower cost of scaling and better developer experience.',
                imagem  : 'https://pbs.twimg.com/profile_images/1105331026027573248/drFcWUvd_400x400.jpg',
                slides  : 'http://bit.ly/2YFgcNA'
            }
        ];
    }

}
