import {Component, OnInit} from '@angular/core';
import { agenda as configAgenda } from '../../config';

@Component({
    selector: 'app-section-agenda',
    templateUrl: './section-agenda.component.html',
    styleUrls: ['./section-agenda.component.scss']
})
export class SectionAgendaComponent implements OnInit {

    agendas: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.agendas = configAgenda;
    }

}
