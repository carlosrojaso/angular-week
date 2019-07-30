import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-palestrantes',
    templateUrl: './section-palestrantes.component.html',
    styleUrls: ['./section-palestrantes.component.scss']
})
export class SectionPalestrantesComponent implements OnInit {

    palestrantes: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.palestrantes = [
            {
                nome        : 'Cristian Danilo',
                sobrenome   : 'Gutiérrez',
                imagem      : 'https://avatars2.githubusercontent.com/u/22488812?s=460&v=4',
                redes       : {
                    twitter : 'https://twitter.com/danilo1905g',
                    github  : 'https://github.com/CrisDan1905',
                },
                bio         : 'Desarrollador Front-End en Globant, con experiencia en NodeJS, GraphQL y 3+ años con Angular. Apasionado por la musica y la tecnología.',
            },

            {
                nome        : 'Cesar',
                sobrenome   : 'Suarez',
                imagem      : 'https://pbs.twimg.com/profile_images/1028837466340352000/vSHCLp8E_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/cesarlarsson',
                    github  : 'https://github.com/cesarlarsson',
                },
                bio         : 'Ingeniero Electrónico, especialista en desarrollo de software, tenista y carpintero amateur.',
            },

            {
                nome        : 'Sebastian',
                sobrenome   : 'Gomez',
                imagem      : '../../../../assets/img/sebastian.jpg',
                redes       : {
                    github  : 'https://github.com/seagomezar',
                    twitter : 'https://twitter.com/sebasgojs'
                },
                bio         : 'Mi nombre es Sebastián Gómez, soy Google Developer Expert in Web Technologies, estudié ingeniería de sistemas e Informática y una maestría en Ingeniería de Sistemas de la Universidad Nacional de Colombia. Actualmente trabajo en Globant como arquitecto de Web UI con énfasis en aplicaciones híbridas y cross compiladas. Soy el organizador del Google Developers Group de Medellín, así que contactame si quieres dar alguna charla o participar actuamente de esta comunidad.'
            },

            {
                nome        : 'Paula',
                sobrenome   : 'Mazo Cortés',
                imagem      : 'https://avatars2.githubusercontent.com/u/22626905?s=460&v=4',
                redes       : {
                    twitter : 'https://twitter.com/Mazoster',
                    github  : 'https://github.com/pmazoc/',
                },
                bio         : 'Conocida como "Mazo" desde el colegio. Ha trabajado en las áreas de Infraestructura, DevOps y en los últimos dos años en desarrollo 💛. Web UI Developer en Globant, amante de Javascript y el clean code... Si le queda tiempo en el sprint :v',
            },

            {
                nome        : 'Liz',
                sobrenome   : 'Parody',
                imagem      : '../../../../assets/img/lizParody.jpg',
                redes       : {
                    twitter : 'https://twitter.com/lizparody23',
                    github  : 'https://github.com/lizparody',
                },
                bio         : 'Liz es Developer Relations Manager en NodeSource y organiza diferentes eventos de comunidades como JSConf Colombia, Pioneras Developers, Startup Weekend y ha sido speaker en EmpireJS, MedellinJS, PionerasDev, Hacker Dojo entre otros. Le encanta compartir conocimiento, promover el ecosistema de JavaScript y Node.js y participar en eventos y conferencias de tecnología que tengan un impacto positivo en las comunidades.',
            },

            {
                nome        : 'Jhonatan',
                sobrenome   : 'Giraldo',
                imagem      : 'https://avatars2.githubusercontent.com/u/6934447?s=460&v=4',
                redes       : {
                    github  : 'https://github.com/Jhonatangiraldo',
                },
                bio         : 'Soy Jhonatan, desarrollador WebUI en Globant, y considero el mundo de Javascript tanto front como back un paraíso del aprendizaje. Soy manizaleño y me gusta viajar, leer, ver anime y debatir :)',
            },

            {
                nome        : 'Maria',
                sobrenome   : 'Giraldo',
                imagem      : 'https://pbs.twimg.com/profile_images/451152111603318784/xEAEpNhy_400x400.jpeg',
                redes       : {
                    twitter : 'https://twitter.com/mariadriada',
                    github  : 'https://github.com/mariadriada',
                },
                bio         : 'Hola, Soy Maria Giraldo. Informática de profesión y <coder/> por naturaleza. Mi fundamento de vida se basa en hacer lo que me gusta, siempre de la mejor forma. Soy hermana menor de 6, tengo un hijo perro llamado Marzo, que amo muchísimo. Hace 10 años el código llegó a mi vida, desde ese momento comprendí la esencia de mi comportamiento binario. He participado en proyectos de software en diferentes roles, actualmente me desempeño como Senior Front-end Developer en Parrolabs. ¡Amo el software y todo a su alrededor! Sobretodo Js Core. Muchas gracias.',
            },

            {
                nome        : 'Andrea',
                sobrenome   : 'Córdoba',
                imagem      : '../../../../assets/img/andrea-cordoba.jpg',
                redes       : {
                    twitter : 'https://twitter.com/lua_andre',
                    github  : 'https://github.com/andre-code',
                },
                bio         : 'Andrea es Web UI developer en Globant, ha trabajado con tecnologías Frontend desde hace 4 años y 7 cómo desarrolladora full stack. Le encanta correr, practicar Capoeira, los gatos y el vino.',
            },

            {
                nome        : 'Sergio',
                sobrenome   : 'Valencia',
                imagem      : 'https://pbs.twimg.com/profile_images/1002982260633718784/NxIQNR6L_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/sergio91044',
                    github  : 'https://github.com/sergio9104',
                },
                bio         : 'Desarrollador Front End con 4 años de experiencia usando Angular y React, fanático de los libros y las nuevas tecnológicas.',
            },

            {
                nome        : 'Johann Paul',
                sobrenome   : 'Echavarría Zapata',
                imagem      : 'https://pbs.twimg.com/profile_images/954018981244997632/J_3DPptq_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/abrupto',
                    github  : 'https://github.com/katio',
                },
                bio         : 'Johann es un desarrollador de software con más de 14 años trabajando en el medio, es también magíster en ingeniería de software y maestro internacional de ajedrez.',
            },

            {
                nome        : 'Cristian',
                sobrenome   : 'Moreno',
                imagem      : 'https://pbs.twimg.com/profile_images/1105331026027573248/drFcWUvd_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/khriztianmoreno',
                    github  : 'https://github.com/khriztianmoreno',
                },
                bio         : 'FullStack Javascript Developer and Community builder 👨🏻‍💻🤝 👨🏻‍🏫 Producer @commitfm 🎙📻 Co-Organize of @MedellinJS @avanet On a daily basis I use: JavaScript (ES6), React, Gatsby, CSS (inJS), GraphQL, just to name the most important bits.',
            },

            {
                nome        : 'Juan Camilo',
                sobrenome   : 'Diaz Ortega',
                imagem      : 'https://pbs.twimg.com/profile_images/1055300540912074752/Ar7V9bTV_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/jcamilodo',
                },
                bio         : 'Data Architect en Globant, mas de 18 años de experiencia en desarrollo de software, apasionado de los lenguajes de programacion, desarrollo de Video Games, Machine Learning y del Big Data y todo lo que se ha venido desarrollando con estos.',
            },

            {
                nome        : 'Santiago',
                sobrenome   : 'Angee',
                imagem      : 'https://media.licdn.com/dms/image/C4E03AQHaatAfDs50yg/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=Q_98s7WCThknbFP7X-_uuMqefTBNViRkgruDSOwv1Og',
                redes       : {

                },
                bio         : 'Hermano de dos hermosos gatos, amante de los gatos y los perros, la cerveza y el kebab. Data Architect, orgullosamente Glober, políglota, Ingeniero de Sistemas de la Universidad EAFIT, Magíster en ingeniería de la misma Universidad.',
            },

            {
                nome        : 'Jose Luis',
                sobrenome   : 'Sepulveda',
                imagem      : 'https://media.licdn.com/dms/image/C4E03AQGTcpM7mQrbOQ/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=JpeFtTxUt1gNx-Z-YwvjRjBswO5A-MfW3EA7YdIBQ8c',
                redes       : {

                },
                bio         : 'Big data architect at Globant, 10 anos de experiencia en el desarrollo.',
            },

            {
                nome        : 'Hilder',
                sobrenome   : 'Umaña',
                imagem      : 'https://media.licdn.com/dms/image/C5603AQES0jyuwDLjkA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=0RnLek0grfu4s0wRs32Z741oKrdyWzbZ0oqFqCelE4s',
                redes       : {

                },
                bio         : 'BI Architect con más de 17 años de experiencia en Business Intelligence y análisis de datos, trabajado para sectores de banca, retail, financiero, seguros',
            },

            {
                nome        : 'Lorena',
                sobrenome   : 'Correa Mejia',
                imagem      : 'https://pbs.twimg.com/profile_images/1097718954796167168/qlZkpQhl_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/lavadani',
                    github  : 'https://github.com/Paolore',
                },
                bio         : 'Soy desarrolladora web, actualmente trabajo como Frontend Developer en Tekus, me gusta mucho el backend, apasionada de la naturaleza, las montañas, acampar, el cine, la cerveza, y en mis tiempos libres también me dedico a leer, en especial temas relacionados con tech.',
            },
        ];
    }

}
