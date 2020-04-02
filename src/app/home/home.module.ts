import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { SectionTopoComponent } from './section-topo/section-topo.component';
import { FormInscricaoComponent } from './form-inscricao/form-inscricao.component';
import { SectionPalestrantesComponent } from './section-palestrantes/section-palestrantes.component';
import { TituloComponent } from './titulo/titulo.component';
import { PalestranteComponent } from './section-palestrantes/palestrante/palestrante.component';
import { SectionAgendaComponent } from './section-agenda/section-agenda.component';
import { AgendaComponent } from './section-agenda/agenda/agenda.component';
import { SectionMapaComponent } from './section-mapa/section-mapa.component';
import { SectionApoioComponent } from './section-apoio/section-apoio.component';
import { SectionMatrizComponent } from './section-matriz/section-matriz.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        SectionTopoComponent,
        FormInscricaoComponent,
        SectionPalestrantesComponent,
        TituloComponent,
        PalestranteComponent,
        SectionAgendaComponent,
        AgendaComponent,
        SectionMapaComponent,
        SectionApoioComponent,
        SectionMatrizComponent
    ]
})
export class HomeModule { }
