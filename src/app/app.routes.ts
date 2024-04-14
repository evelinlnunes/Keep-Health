import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DietDetailComponent } from './dietas/diet-detail/diet-detail.component';
import { DietasComponent } from './dietas/dietas.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LogadoGuard } from './shared/logado.guard';
import { DietChildGuard } from './shared/diet-child.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LogadoGuard] },
  { path: 'cadastro', component: CadastroComponent },
  
  { path: 'perfil', component: PerfilComponent, canActivate: [LogadoGuard] },
  { path: 'sidebar', component: SidebarComponent },
  {
    path: 'dietas',
    loadChildren: () => import('./dietas/dietas-routing.module').then(m => m.DietasRoutingModule)
  }


];
