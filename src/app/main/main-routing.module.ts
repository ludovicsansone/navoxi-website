import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { DemoComponent } from './components/demo/demo.component';
import { RouteComponent } from './components/route/route.component';
import { VideoComponent } from './components/video/video.component';
import { EventsComponent } from './components/events/events.component';
import { KeynoteComponent } from './components/keynote/keynote.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
{
    path: '',
    component: HomeComponent
},
{
    path: 'project',
    component: ProjectComponent
},
{
    path: 'demo',
    component: DemoComponent
},
{
    path: 'route',
    component: RouteComponent
},
{
    path: 'video',
    component: VideoComponent
},
{
    path: 'events',
    component: EventsComponent
},
{
    path: 'keynote',
    component: KeynoteComponent
},
{
    path: 'contact',
    component: ContactComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
