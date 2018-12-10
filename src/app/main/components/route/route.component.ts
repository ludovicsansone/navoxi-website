import { Component } from '@angular/core';
import { RouteProvider } from '../../services/route';
import { TtsProvider } from '../../services/tts';
import { Router } from '@angular/router';

@Component({
    selector: 'main-route',
    templateUrl: 'route.component.html',
    styleUrls: ['./route.component.css']
})
export class RouteComponent {
    private destination: string = "";
    private quai: string = "";
    private heure: string = "";
    private route: any = {};
    private step: any = {};
    private routeIndex: number = -1;
    private imgSrc : string = 'assets/imgs/beacon.png';
    private imgAlt: string = "Image d'une balise émettant des ondes";
    private enableNextStep = true;
    private walking = new Audio("assets/audio/walking.mp3");
    private stop = new Audio("assets/audio/stop.mp3");

    constructor(
private router: Router,
    private routeProvider: RouteProvider,
    private ttsProvider: TtsProvider) { }

    ngOnInit() {
        this.destination = this.routeProvider.destination;
        this.quai = this.routeProvider.quai;
        this.heure = this.routeProvider.heure;
        this.ttsProvider.sayMessage("Je vous emmène jusqu'au quai " + this.quai + ", pour prendre le train en direction de " + this.destination);
        this.route = this.routeProvider.getRoute(this.quai);
        this.onNextStep();
    }

    onRepeat() {
        this.ttsProvider.sayMessage(this.step.instruction);
    }

    onNextStep() {
        let maxIndex = this.route.steps.length - 1;
        let timeout = 0;

        this.imgSrc = 'assets/imgs/shoes.gif';
        this.imgAlt = "Image animée d'une paire de chaussure en train de marcher";
        this.enableNextStep = false;
        if (this.routeIndex < maxIndex) {
            if (this.routeIndex > -1) {
                this.walking.play();
                timeout = 6000;
            }
            setTimeout(() => {
                this.imgSrc = 'assets/imgs/beacon.png';
                this.imgAlt = "Image d'une balise émettant des ondes";
                this.routeIndex += 1;
                this.step = this.routeProvider.getStep(this.routeIndex);
                this.ttsProvider.sayMessage(this.step.instruction);
                this.enableNextStep = true;
            }, timeout);
        }
        else {
            this.stop.play();
            this.imgSrc = 'assets/imgs/beacon.png';
            this.imgAlt = "Image d'une balise émettant des ondes";
            this.enableNextStep = false;
            setTimeout(() => {
                this.ttsProvider.sayMessage("Vous êtes déjà arrivé");
            }, 1000);
        }
    }

    onReturn() {
        this.router.navigate(['demo']);
    }
}
