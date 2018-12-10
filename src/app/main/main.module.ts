import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { DemoComponent } from './components/demo/demo.component';
import { RouteComponent } from './components/route/route.component';
import { VideoComponent } from './components/video/video.component';
import { KeynoteComponent } from './components/keynote/keynote.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';

import { RouteProvider } from './services/route';
import { TtsProvider } from './services/tts';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [NavComponent, LayoutComponent, FooterComponent, HomeComponent, ProjectComponent, DemoComponent, VideoComponent, KeynoteComponent, ContactComponent, EventsComponent, RouteComponent, HeaderComponent],
  exports: [LayoutComponent],
  providers: [TtsProvider, RouteProvider]
})
export class MainModule { }
