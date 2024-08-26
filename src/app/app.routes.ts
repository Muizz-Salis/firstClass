import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ClothesComponent } from './clothes/clothes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component, EventEmitter } from '@angular/core';
import { DisplaygroceriesComponent } from './displaygroceries/displaygroceries.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { ParentbehaviourComponent } from './parentbehaviour/parentbehaviour.component';
import { TempdrivenFComponent } from './tempdriven-f/tempdriven-f.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReativeformComponent } from './reativeform/reativeform.component';
import { ReactivesigninComponent } from './reactivesignin/reactivesignin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { reactiveguardGuard } from './reactiveguard.guard';
import { DashboardguardComponent } from './dashboardguard/dashboardguard.component';
import { EventemitterComponent } from './eventemitter/eventemitter.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'tempdriven_form', component: TempdrivenFComponent},
    {path: 'reactiveform', component: ReativeformComponent},
    {path: 'dashboard/:username', component: DashboardComponent,canActivate:[reactiveguardGuard]},
    {path: 'dashboardguard', component: DashboardguardComponent,canActivate:[reactiveguardGuard]},
    {path: 'reactivesignin', component: ReactivesigninComponent},
    {path: 'angularmaterial', component: AngularmaterialComponent},
    {path: 'eventemitter', component: EventemitterComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'user', component: UserComponent},
    {path: 'parentbehaviour', component: ParentbehaviourComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}, //redirect
    { path: 'products', children: [
        { path: '', component: ProductsComponent},
        { path: 'groceries', title: 'Groceries', children:[
            {path: '', component: GroceriesComponent},
            {path: ':id', component: DisplaygroceriesComponent},
        ]},
        { path: 'appliances', component: AppliancesComponent},
        { path: 'clothes', component: ClothesComponent},
    ]},

    {path: '**', component: PageNotFoundComponent}

];

