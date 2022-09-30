import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

//services
import { DataService} from './services/data.service';
import { CuotasDelPartidoTenisComponent } from './pages/apuestasMasConsultadas/cuotas-del-partido-tenis/cuotas-del-partido-tenis.component';
import { CuotasDelPartidoTenisMesaComponent } from './pages/apuestasMasConsultadas/cuotas-del-partido-tenis-mesa/cuotas-del-partido-tenis-mesa.component';
import { DescansoFinalDelPartidoFutbolComponent } from './pages/apuestasMasConsultadas/descanso-final-del-partido-futbol/descanso-final-del-partido-futbol.component';
import { DobleOportunidadFutbolComponent } from './pages/apuestasMasConsultadas/doble-oportunidad-futbol/doble-oportunidad-futbol.component';
import { FinalDePartidoFutbolComponent } from './pages/apuestasMasConsultadas/final-de-partido-futbol/final-de-partido-futbol.component';
import { WinPartProrrIncludFutBaskComponent } from './pages/apuestasMasConsultadas/win-part-prorr-includ-fut-bask/win-part-prorr-includ-fut-bask.component';
import { HandicapAsiaticoComponent } from './pages/apuestasMasConsultadas/handicap-asiatico/handicap-asiatico.component';
import { HandicapThreeWayComponent } from './pages/apuestasMasConsultadas/handicap-three-way/handicap-three-way.component';
import { HandicapSetsDeportesRaquetaComponent } from './pages/apuestasMasConsultadas/handicap-sets-deportes-raqueta/handicap-sets-deportes-raqueta.component';
import { MargenVictoriaExactoFutbolComponent } from './pages/apuestasMasConsultadas/margen-victoria-exacto-futbol/margen-victoria-exacto-futbol.component';
import { ResultadoCorrectoComponent } from './pages/apuestasMasConsultadas/resultado-correcto/resultado-correcto.component';
import { TotalCornersFutbolComponent } from './pages/apuestasMasConsultadas/total-corners-futbol/total-corners-futbol.component';
import { TotalDisparosTirosFutbolComponent } from './pages/apuestasMasConsultadas/total-disparos-tiros-futbol/total-disparos-tiros-futbol.component';
import { TotalGolesComponent } from './pages/apuestasMasConsultadas/total-goles/total-goles.component';
import { TotalPuntosTenisMesaComponent } from './pages/apuestasMasConsultadas/total-puntos-tenis-mesa/total-puntos-tenis-mesa.component';
import { TotalTarjetasComponent } from './pages/apuestasMasConsultadas/total-tarjetas/total-tarjetas.component';
import { TotalTirosPuertaComponent } from './pages/apuestasMasConsultadas/total-tiros-puerta/total-tiros-puerta.component';
import { MercadosIntervalosTiempoComponent } from './pages/apuestasMasConsultadas/mercados-intervalos-tiempo/mercados-intervalos-tiempo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    DetailInfoComponent,
    CuotasDelPartidoTenisComponent,
    CuotasDelPartidoTenisMesaComponent,
    DescansoFinalDelPartidoFutbolComponent,
    DobleOportunidadFutbolComponent,
    FinalDePartidoFutbolComponent,
    WinPartProrrIncludFutBaskComponent,
    HandicapAsiaticoComponent,
    HandicapThreeWayComponent,
    HandicapSetsDeportesRaquetaComponent,
    MargenVictoriaExactoFutbolComponent,
    ResultadoCorrectoComponent,
    TotalCornersFutbolComponent,
    TotalDisparosTirosFutbolComponent,
    TotalGolesComponent,
    TotalPuntosTenisMesaComponent,
    TotalTarjetasComponent,
    TotalTirosPuertaComponent,
    MercadosIntervalosTiempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
