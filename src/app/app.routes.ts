import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { DietasComponent } from './dietas/dietas.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dietas', component: DietasComponent },
  { path: 'diet-detail', component: DietDetailComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sidebar', component: SidebarComponent}
];
