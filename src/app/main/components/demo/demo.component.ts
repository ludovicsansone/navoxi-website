import { Component } from '@angular/core';
import { RouteComponent } from '../route/route.component';
import { RouteProvider } from '../../services/route';
import { Router } from '@angular/router';

@Component({
    selector: 'main-demo',
    styleUrls: ['./demo.component.css'],
    templateUrl: 'demo.component.html'
})
export class DemoComponent {
    private panel: Array<any>;
    private station: string = "";

    constructor(
        private router: Router,
        private routeProvider: RouteProvider) {
        }

        ngOnInit() {
            this.station = "Lyon Perrache";
            this.panel = [
            {typeTrain: 'TER', destination: 'Valence Ville', numero: '886712', heure: '10h42', quai: 'A'},
            {typeTrain: 'TER', destination: 'Clermont-Ferrand', numero: '874442', heure: '10h54', quai: 'B'},
            {typeTrain: 'TGV', destination: 'Nantes', numero: '5146', heure: '11h08', quai: 'C'},
            {typeTrain: 'TER', destination: 'Bourg En Bresse', numero: '856422', heure: '11h12', quai: 'D'},
            {typeTrain: 'TGV', destination: 'Bordeaux Saint-Jean', numero: '5158', heure: '11h21', quai: 'E'},
            {typeTrain: 'TGV', destination: 'Marseille Saint Charles', numero: '5428', heure: '11h30', quai: 'F'},
            {typeTrain: 'TGV', destination: 'Aix En Provence TGV', numero: '5825', heure: '11h38', quai: 'G'},
            ];
        }

        onStart(destination, quai, heure) {
            this.routeProvider.destination = destination;
            this.routeProvider.quai = quai;
            this.routeProvider.heure = heure;
this.router.navigate(['home']);
        }
    }
